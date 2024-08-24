'use client';

import { useHover } from '@colidy/hooks';

export const Demo = () => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>();

	return (
		<div
			ref={hoverRef}
			style={{ backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}
			className="p-4 rounded-lg text-black"
		>
			Hover over me!
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

import { useHover } from '@colidy/hooks';

export const Demo = () => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>();

	return (
		<div
			ref={hoverRef}
			style={{ backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}
			className="p-4 rounded-lg text-black"
		>
			Hover over me!
		</div>
	);
};

`;