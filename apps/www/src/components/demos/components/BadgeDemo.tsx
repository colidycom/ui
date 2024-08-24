'use client';
import { Badge } from '@/colidy-ui/Badge';
import { colors } from '@colidy/ui-utils';

export const Demo = () => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-2 max-w-lg">
			{colors.map(color => (
				<Badge key={color} color={color} href="#">
					{color}
				</Badge>
			))}
		</div>
	);
};

// @end-example
export default {
	props: [
		{
			prop: 'color',
			type: colors.join(' | '),
			default: null,
			required: true,
			description: 'The color of the badge.',
		},
		{
			prop: 'href',
			type: '`string`',
			default: null,
			required: false,
			description: 'The URL to navigate to when the badge is clicked.',
		},
	],
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';
import { Badge } from '@/colidy-ui/Badge';
import { colors } from '@colidy/ui-utils';

export const Demo = () => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-2 max-w-lg">
			{colors.map(color => (
				<Badge key={color} color={color} href="#">
					{color}
				</Badge>
			))}
		</div>
	);
};

`;