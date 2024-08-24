'use client';

import { useViewport } from '@colidy/hooks';

export const Demo = () => {
	const { width, height } = useViewport();

	return (
		<p>
			Width: {width}, Height: {height}
		</p>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useViewport } from '@colidy/hooks';

export const Demo = () => {
	const { width, height } = useViewport();

	return (
		<p>
			Width: {width}, Height: {height}
		</p>
	);
};

`;