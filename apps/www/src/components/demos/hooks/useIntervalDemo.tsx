'use client';

import { useInterval } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);

	useInterval(() => {
		console.log('Interval triggered');
		setState(!state);
	}, 1000);

	return (
		<div>
			<p>Check console for interval logs every second.</p>
			<p>State: {state.toString()}</p>
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

import { useInterval } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);

	useInterval(() => {
		console.log('Interval triggered');
		setState(!state);
	}, 1000);

	return (
		<div>
			<p>Check console for interval logs every second.</p>
			<p>State: {state.toString()}</p>
		</div>
	);
};

`;