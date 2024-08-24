'use client';

import { useKeyPress } from '@colidy/hooks';

export const Demo = () => {
	const isEnterPressed = useKeyPress('Enter');

	return (
		<p>{isEnterPressed ? 'Enter key pressed' : 'Press the Enter key'}</p>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useKeyPress } from '@colidy/hooks';

export const Demo = () => {
	const isEnterPressed = useKeyPress('Enter');

	return (
		<p>{isEnterPressed ? 'Enter key pressed' : 'Press the Enter key'}</p>
	);
};

`;