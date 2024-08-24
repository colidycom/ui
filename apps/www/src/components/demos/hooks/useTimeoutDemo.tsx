'use client';

import { useTimeout } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);

	useTimeout(() => {
		console.log('Timeout completed');
		setState(!state);
	}, 3000);

	return (
		<p>
			Check console after 3 seconds for timeout message.
			<br />
			State: {state.toString()}
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

import { useTimeout } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);

	useTimeout(() => {
		console.log('Timeout completed');
		setState(!state);
	}, 3000);

	return (
		<p>
			Check console after 3 seconds for timeout message.
			<br />
			State: {state.toString()}
		</p>
	);
};

`;