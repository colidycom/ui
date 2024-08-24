'use client';

import { useOnClickOutside } from '@colidy/hooks';
import { useRef, useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => {
		setState(true);
	});

	return (
		<div ref={ref}>
			{state
				? 'Clicked outside the component'
				: 'Click outside of this box to trigger an action.'}
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

import { useOnClickOutside } from '@colidy/hooks';
import { useRef, useState } from 'react';

export const Demo = () => {
	const [state, setState] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => {
		setState(true);
	});

	return (
		<div ref={ref}>
			{state
				? 'Clicked outside the component'
				: 'Click outside of this box to trigger an action.'}
		</div>
	);
};

`;