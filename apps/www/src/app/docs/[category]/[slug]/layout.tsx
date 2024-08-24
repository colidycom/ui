import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/mdx/Header';
import { Footer } from '@/components/Footer';
import { getDoc, getNextAndPrev } from '@/utils/docs-utils';
import { notFound } from 'next/navigation';
import { Pagination } from '@/components/Pagination';
import { Suspense } from 'react';
import { TableOfContents } from '@/components/TableOfContents';

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: any;
}>) {
	const { category, slug } = params;
	const document = await getDoc(category, slug);

	if (!document) return notFound();

	const { prevDoc, nextDoc } = getNextAndPrev(category, slug);
	const isExperimental = document.item.experimental;

	return (
		<div className="container">
			<Sidebar />

			<div className="flex lg:pl-[20rem] pt-[1.5rem] gap-12">
				<article className="flex-1 w-full !max-w-5xl">
					<Header
						category={category[0].toUpperCase() + category.slice(1)}
						title={document.title}
						description={document.description}
						buttons={document.buttons}
					/>
					{isExperimental ? (
						<Suspense fallback={null}>
							<div data-toc>{document.body && children}</div>
						</Suspense>
					) : (
						<div data-toc>{document.body && children}</div>
					)}
					<Pagination
						next={{
							title: nextDoc?.title,
							href: '/docs' + nextDoc?.url,
						}}
						prev={{
							title: prevDoc?.title,
							href: '/docs' + prevDoc?.url,
						}}
					/>
					<Footer inDocs />
				</article>

				<div className="hidden lg:block sticky top-24 w-[20rem] h-full">
					<TableOfContents />
				</div>
			</div>
		</div>
	);
}
