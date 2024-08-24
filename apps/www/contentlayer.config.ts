import {
	defineDocumentType,
	defineNestedType,
	makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';

const Buttons = defineNestedType(() => ({
	name: 'Buttons',
	fields: {
		label: { type: 'string', required: true },
		href: { type: 'string', required: true },
	},
}));

export const Content = defineDocumentType(() => ({
	name: 'Content',
	filePathPattern: 'docs/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		buttons: {
			type: 'list',
			of: Buttons,
		},
		badge: { type: 'string' },
	},
	computedFields: {
		category: {
			type: 'string',
			resolve: ({ _raw }) => _raw.flattenedPath.split('/')[1],
		},
		slug: {
			type: 'string',
			resolve: ({ _raw }) => _raw.sourceFileName.replace(/\.mdx$/, ''),
		},
		url: {
			type: 'string',
			resolve: ({ _raw }) => _raw.flattenedPath.replace(/\.mdx$/, ''),
		},
	},
}));

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Content],
	mdx: {
		rehypePlugins: [
			() => tree => {
				visit(tree, node => {
					if (node?.type === 'element' && node?.tagName === 'pre') {
						const [codeEl] = node.children;

						if (codeEl.tagName !== 'code') return;
						let raw = codeEl.children?.[0].value;

						node.raw = raw;
						const meta = codeEl?.data?.meta;

						if (meta) {
							const metaValues = meta.split(/\s+/);
							const equalSignedMetaValues = metaValues.reduce(
								(acc: any, metaValue: any) => {
									const [key, value] = metaValue.split('=');
									if (key && value) acc[key] = value;
									return acc;
								},
								{}
							);
							node.props = equalSignedMetaValues;
						}
					}
				});
			},
			rehypeSlug,
			[
				// @ts-ignore
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					keepBackground: false,
					wrapLines: true,
					wrapLongLines: true,
				},
			],
			() => tree => {
				visit(tree, node => {
					if (node?.raw) {
						for (const child of node.children) {
							if (child.tagName === 'pre') {
								child.properties['raw'] = node.raw;
								for (const key in node.props) {
									child.properties[key] = node.props[key];
								}
							}
						}
					}
				});
			},
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
	},
});
