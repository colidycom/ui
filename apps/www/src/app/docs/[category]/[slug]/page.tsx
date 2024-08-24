import { getDoc } from '@/utils/docs-utils';
import { MDXContent } from '@/components/mdx/MDX-Content';
import { notFound } from 'next/navigation';
import docsItems from '@/utils/docs-items';

interface Params {
	params: {
		category: string;
		slug: string;
	};
}

export async function generateStaticParams() {
	return docsItems
		.flatMap(section => section.items)
		.map(post => ({
			params: {
				slug: post.url,
			},
		}));
}
export const generateMetadata = async ({ params }: Params) => {
	const post = await getDoc(params.category, params.slug);
	if (!post) return notFound();

	return {
		title: post.title,
		description: post.description,
	};
};

export default async function Pages({ params }: Params) {
	const doc = await getDoc(params.category, params.slug);

	if (!doc) return notFound();
	if (!doc.body) return notFound();
	if (!doc.body.code) return notFound();

	return (
		<MDXContent
			code={doc.body.code}
			className="prose prose-muted dark:prose-invert xl:prose-base max-w-none mt-6 prose-pre:bg-zinc-500/10 prose-pre:border prose-code:before:hidden prose-code:after:hidden prose-p:!p-0 prose-p:!mt-0 prose-p:!mb-0 prose-img:!m-0"
		/>
	);
}
