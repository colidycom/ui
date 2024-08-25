import { allContents } from 'contentlayer/generated';
import docsItems from './docs-items';
import { getMDXComponent, useMDXComponent } from 'next-contentlayer/hooks';

interface GroupedItem {
	title: string;
	description: string;
	url: string;
	slug: string;
	source_url: string;
	badge: {
		label: string;
		color: string;
	} | null;
}

interface GroupedData {
	title: string;
	slug: string;
	sourceFileDir: string;
	items: GroupedItem[];
}

export const getDoc = (category: string, slug: string) => {
	const items = docsItems.flatMap(d =>
		d.items.flatMap((i: any) => i?.items || i)
	);
	const ct: any = items.find((d: any) => d.url === `/${category}/${slug}`);
	const obj: any = allContents.find(
		d => d.url === `docs/${category}/${slug}`
	);
	if (!obj) return null;
	obj.item = ct;
	return obj;
};

export const getNextAndPrev = (category: string, slug: string) => {
	const items = docsItems.flatMap(d =>
		d.items.flatMap((i: any) => i?.items || i)
	);
	const currentIndex = items.findIndex(
		item => item.url === `/${category}/${slug}`
	);

	const prevDoc = items[currentIndex - 1];
	const nextDoc = items[currentIndex + 1];

	return { prevDoc, nextDoc };
};

export const getTableOfContents = ({ raw, code }: any) => {
	// tags: #, ##, ###
	return [];
};
