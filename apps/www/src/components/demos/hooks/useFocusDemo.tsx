'use client';

import { TextField } from '@/ui-components/TextField';
import { useFocus } from '@colidy/hooks';

export const Demo = () => {
	const { isFocused, setFocus, elementRef } = useFocus();

	return (
		<div>
			<TextField
				ref={elementRef as React.RefObject<HTMLInputElement>}
				type="text"
				placeholder="Click to focus"
			/>
			<p>The input is {isFocused ? 'focused' : 'not focused'}</p>
			<button onClick={setFocus}>Focus Input</button>
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
