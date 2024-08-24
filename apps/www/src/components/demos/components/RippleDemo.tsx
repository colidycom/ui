'use client';

import { Ripple } from '@/colidy-ui/Ripple';

export const Demo = () => {
	return (
		<Ripple>
			{(onClick, rippleElements) => (
				<button onClick={onClick} className="relative overflow-hidden">
					Click me
					{rippleElements}
				</button>
			)}
		</Ripple>
	);
};

// @end-example
export default {
	props: [
		{
			prop: 'color',
			type: 'string',
			default: null,
			required: true,
			description: 'The color of the ripple effect.',
		},
		{
			prop: 'motionProps',
			type: 'React.ComponentProps<typeof m.span>',
			default: null,
			required: false,
			description: 'Props to pass to the motion span element.',
		},
		{
			prop: 'children',
			type: '() => React.ReactNode',
			default: null,
			required: true,
			description: 'The children function.',
		},
		{
			prop: 'disabled',
			type: 'boolean',
			default: null,
			required: false,
			description: 'Disables the ripple effect.',
		},
	],
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { Ripple } from '@/colidy-ui/Ripple';

export const Demo = () => {
	return (
		<Ripple>
			{(onClick, rippleElements) => (
				<button onClick={onClick} className="relative overflow-hidden">
					Click me
					{rippleElements}
				</button>
			)}
		</Ripple>
	);
};

`;