'use client';
import { Label } from '@/colidy-ui/Label';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<Label label="Full Name" />
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
	],
	examples: [
		{
			title: 'Basic usage',
			description: 'Basic usage of the `Label` component.',
			imports: `import { Label } from "@/colidy-ui/Label";`,
			code: `<div className="max-w-lg">
            <Label label="Full Name" />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<Label label="Full Name" />
					</div>
				);
			},
		},

		{
			title: 'With description',
			description:
				'Basic usage of the `Label` component with description.',
			imports: `import { Label } from "@/colidy-ui/Label";`,
			code: `<div className="max-w-lg">
            <Label label="Full Name" description="Your full name." />
            </div>`,
			component: () => {
				return (
					<div className="max-w-lg">
						<Label
							label="Full Name"
							description="Your full name."
						/>
					</div>
				);
			},
		},
	],
};

// @start-demo-string
export const DemoString = `'use client';
import { Label } from '@/colidy-ui/Label';

export const Demo = () => {
	return (
		<div className="max-w-lg">
			<Label label="Full Name" />
		</div>
	);
};

`;