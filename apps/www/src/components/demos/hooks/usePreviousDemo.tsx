'use client';

import { usePrevious } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [count, setCount] = useState(0);
	const previousCount = usePrevious(count);

	return (
		<div>
			<p>Current count: {count}</p>
			<p>Previous count: {previousCount}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
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

import { usePrevious } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [count, setCount] = useState(0);
	const previousCount = usePrevious(count);

	return (
		<div>
			<p>Current count: {count}</p>
			<p>Previous count: {previousCount}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

`;