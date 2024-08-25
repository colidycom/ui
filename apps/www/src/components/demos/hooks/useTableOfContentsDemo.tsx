'use client';

import { useTableOfContents } from '@colidy/hooks';

export const Demo = () => {
	const { contents, active } = useTableOfContents(
		['h2', 'h3', 'h4'],
		'[data-toc]'
	);

	return (
		<div>
			<div data-toc>
				<a id="link-to-heading1" href="#heading1">
					<h1 id="heading1">Heading 1</h1>
				</a>
				<a id="link-to-heading2" href="#heading2">
					<h2 id="heading2">Heading 2</h2>
				</a>
				<a id="link-to-heading3" href="#heading3">
					<h3 id="heading3">Heading 3</h3>
				</a>
			</div>
			<ul>
				{contents.map(({ id, title, depth, anchor }) => (
					<li key={id} style={{ marginLeft: `${depth - 2}em` }}>
						<span dangerouslySetInnerHTML={{ __html: anchor }} />
					</li>
				))}
			</ul>
		</div>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useFetch } from '@colidy/hooks';

export const Demo = () => {
	const { data, loading, error } = useFetch<{
		results: [
			{
				name: { first: string };
				email: string;
				picture: { thumbnail: string };
			}
		];
	}>('https://randomuser.me/api');

	if (loading || !data)
		return (
			<div className="flex space-x-2 items-center">
				<Skeleton width="50px" height="50px" radius="50%" />
				<div className="flex flex-col gap-1">
					<Skeleton width="100px" height="15px" radius="24px" />
					<Skeleton width="190px" height="15px" radius="24px" />
				</div>
			</div>
		);
	if (error) return <p className="text-red-500">{error.message}</p>;

	return (
		<div className="flex space-x-2 items-center">
			<img
				src={data.results[0].picture.thumbnail}
				alt="User"
				className="rounded-full"
				width="50"
				height="50"
			/>
			<div className="flex flex-col">
				<p className="font-semibold">{data.results[0].name.first}</p>
				<p>{data.results[0].email}</p>
			</div>
		</div>
	);
};

function Skeleton({
	width,
	height,
	radius,
}: {
	width: string;
	height: string;
	radius: string;
}) {
	return (
		<div
			className="animate-pulse bg-accent"
			style={{ width, height, borderRadius: radius }}
		/>
	);
}

`;
