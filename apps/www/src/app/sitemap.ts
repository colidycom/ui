import docsItems from '@/utils/docs-items';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = new URL('https://ui.colidy.com');
	const flatDocs = docsItems.flatMap(doc => {
		if (doc.items) {
			return doc.items.flatMap(item => {
				return item.items
					? item.items.map(subItem => ({
							url: subItem.url,
					  }))
					: {
							url: item.url,
					  };
			});
		}
		return doc;
	});

	return [
		{
			url: new URL('/', baseUrl).toString(),
			changeFrequency: 'daily',
			priority: 1,
			lastModified: new Date().toISOString(),
		},
		{
			url: new URL('/themes', baseUrl).toString(),
			changeFrequency: 'daily',
			priority: 1,
			lastModified: new Date().toISOString(),
		},
	].concat(
		flatDocs.map(doc => ({
			url: new URL('/docs' + doc.url, baseUrl).toString(),
			changeFrequency: 'weekly',
			priority: 0.8,
			lastModified: new Date().toISOString(),
		}))
	) as MetadataRoute.Sitemap;
}
