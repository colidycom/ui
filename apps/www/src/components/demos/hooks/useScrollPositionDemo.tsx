'use client';

import { useScrollPosition } from '@colidy/hooks';

export const Demo = () => {
	const scrollY = useScrollPosition();

	return <p>Scroll Position: {scrollY}px</p>;
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useScrollPosition } from '@colidy/hooks';

export const Demo = () => {
	const scrollY = useScrollPosition();

	return <p>Scroll Position: {scrollY}px</p>;
};

`;