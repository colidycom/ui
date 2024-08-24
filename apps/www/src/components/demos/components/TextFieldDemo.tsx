'use client';
import { TextField } from '@/colidy-ui/TextField';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<TextField />
		</div>
	);
};

// @end-example
export default {
	props: [
		{
			prop: 'label',
			type: '`string`',
			default: null,
			required: true,
			description: 'The label text.',
		},
		{
			prop: 'description',
			type: '`string`',
			default: null,
			required: false,
			description: 'The description text.',
		},
		{
			prop: 'size',
			type: '`sm | md | lg`',
			default: null,
			required: false,
			description: 'The size of the text field.',
		},
		{
			prop: 'left',
			type: '`React.ReactNode | string`',
			default: null,
			required: false,
			description:
				'The content to display on the left side of the text field.',
		},
		{
			prop: 'right',
			type: '`React.ReactNode | string`',
			default: null,
			required: false,
			description:
				'The content to display on the right side of the text field.',
		},
	],
	examples: [
		{
			title: 'Basic usage',
			description: 'Basic usage of the `Label` component.',
			imports: `import { TextField } from "@/colidy-ui/TextField";`,
			code: `<div className="max-w-lg">
                <TextField />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<TextField />
					</div>
				);
			},
		},
		{
			title: 'With label',
			description: 'Basic usage of the `TextField` component with label.',
			imports: `import { TextField } from "@/colidy-ui/TextField";`,
			code: `<div className="max-w-lg">
                <TextField label="Full Name" />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<TextField label="Full Name" />
					</div>
				);
			},
		},
		{
			title: 'With description',
			description:
				'Basic usage of the `TextField` component with description.',
			imports: `import { TextField } from "@/colidy-ui/TextField";`,
			code: `<div className="max-w-lg">
                <TextField
                    label="Full Name"
                    description="Your full name."
                />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<TextField
							label="Full Name"
							description="Your full name."
						/>
					</div>
				);
			},
		},
		{
			title: 'With left content',
			description:
				'Basic usage of the `TextField` component with left content.',
			imports: `import { TextField } from "@/colidy-ui/TextField";`,
			code: `<div className="max-w-lg">
                <TextField label="Budget" left="$" />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<TextField label="Budget" left="$" />
					</div>
				);
			},
		},
		{
			title: 'With right content',
			description:
				'Basic usage of the `TextField` component with right content.',
			imports: `import { TextField } from "@/colidy-ui/TextField";`,
			code: `<div className="max-w-lg">
                <TextField label="Budget" right="USD" />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<TextField label="Budget" right="USD" />
					</div>
				);
			},
		},
	],
};

// @start-demo-string
export const DemoString = `'use client';
import { TextField } from '@/colidy-ui/TextField';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<TextField />
		</div>
	);
};

`;