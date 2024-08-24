'use client';
import { Tooltip } from '@/colidy-ui/Tooltip';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<Tooltip content="Hello, world!">
				<span>Hover over me</span>
			</Tooltip>
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
import { Tooltip } from '@/colidy-ui/Tooltip';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<Tooltip content="Hello, world!">
				<span>Hover over me</span>
			</Tooltip>
		</div>
	);
};

`;