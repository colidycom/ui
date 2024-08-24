'use client';

import { useLocalStorage } from '@colidy/hooks';

export const Demo = () => {
	const [value, setValue] = useLocalStorage('myKey', 'defaultValue');

	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={() => setValue('New Value')}>Update Value</button>
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

import { useLocalStorage } from '@colidy/hooks';

export const Demo = () => {
	const [value, setValue] = useLocalStorage('myKey', 'defaultValue');

	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={() => setValue('New Value')}>Update Value</button>
		</div>
	);
};

`;