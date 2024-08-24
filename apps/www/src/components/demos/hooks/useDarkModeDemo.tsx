'use client';

import { useDarkMode } from '@colidy/hooks';

export const Demo = () => {
	const isDarkMode = useDarkMode();

	return <p>Your system is in {isDarkMode ? 'dark' : 'light'} mode</p>;
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useDarkMode } from '@colidy/hooks';

export const Demo = () => {
	const isDarkMode = useDarkMode();

	return <p>Your system is in {isDarkMode ? 'dark' : 'light'} mode</p>;
};

`;