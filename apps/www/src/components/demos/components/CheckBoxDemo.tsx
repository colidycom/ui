'use client';
import { useState } from 'react';
import { CheckBox } from '@/colidy-ui/Checkbox';
export const Demo = () => {
	const [checkLevel, setCheckLevel] = useState(0);
	const [selected, setSelected] = useState<string[]>([]);
	const peoples = [
		{
			firstName: 'Allen',
			lastName: 'Yundt',
			email: 'Kory_Lind37@hotmail.com',
		},
		{
			firstName: 'Mafalda',
			lastName: 'Wolf',
			email: 'Larue.Pfeffer97@hotmail.com',
		},
		{
			firstName: 'Shawna',
			lastName: 'Green',
			email: 'Afton_Rowe@yahoo.com',
		},
		{
			firstName: 'Dillon',
			lastName: 'Ullrich',
			email: 'Eriberto_Bogan@hotmail.com',
		},
		{
			firstName: 'Florian',
			lastName: 'Bayer',
			email: 'Glenna_West@gmail.com',
		},
	];

	const toggleAll = () => {
		if (checkLevel === 2) {
			setCheckLevel(0);
			setSelected([]);
		} else {
			setCheckLevel(2);
			setSelected(peoples.map(({ email }) => email));
		}
	};

	const selectRow = (email: string) => {
		if (selected.includes(email)) {
			setSelected(prev => {
				const newData = prev.filter(e => e !== email);
				setCheckLevel(1);
				if (newData.length === 0) setCheckLevel(0);
				return newData;
			});
		} else {
			setSelected(prev => {
				const newData = [...prev, email];
				setCheckLevel(1);
				if (peoples.every(({ email }) => newData.includes(email)))
					setCheckLevel(2);
				return newData;
			});
		}
	};

	return (
		<div>
			<CheckBox
				indeterminate={checkLevel === 1}
				checked={checkLevel === 2}
				onCheckedChange={() => toggleAll()}
				label="Select all"
			/>
			{peoples.map(({ firstName, lastName, email }) => (
				<div key={email} className="grid grid-cols-[auto,1fr] gap-2">
					<CheckBox
						checked={selected.includes(email)}
						onCheckedChange={() => selectRow(email)}
						label={`${firstName} ${lastName}`}
					/>
				</div>
			))}
		</div>
	);
};

// @end-example
import { colors } from '@colidy/ui-utils';
export default {
	props: [
		{
			prop: 'indeterminate',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'The indeterminate state of the checkbox.',
		},
		{
			prop: 'checked',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'The checked state of the checkbox.',
		},
		{
			prop: 'onCheckedChange',
			type: '() => void',
			default: null,
			required: false,
			description: 'The function to call when the checkbox is clicked.',
		},
		{
			prop: 'label',
			type: 'string',
			default: null,
			required: false,
			description: 'The label of the checkbox.',
		},
		{
			prop: 'size',
			type: 'sm | md | lg',
			default: 'md',
			required: false,
			description: 'The label of the checkbox.',
		},
		{
			prop: 'colors',
			type: colors.join(' | '),
			default: 'default',
			required: false,
			description: 'The color of the checkbox.',
		},
	],
	examples: [
		{
			title: 'Basic',
			description: 'A basic checkbox.',
			component: () => (
				<CheckBox label="I agree to the terms and conditions" />
			),
			imports: `import { Button } from "@/colidy-ui/Button";`,
			code: `<CheckBox
			label="I agree to the terms and conditions"
		/>`,
		},
		{
			title: 'With description',
			description: 'A checkbox with a description.',
			component: () => (
				<CheckBox
					label="I agree to the terms and conditions"
					description="By checking this box, you agree to the terms and conditions."
				/>
			),
			imports: `import { Button } from "@/colidy-ui/Button";`,
			code: `<CheckBox
			label="I agree to the terms and conditions"
			description="By checking this box, you agree to the terms and conditions."
		/>`,
		},
		{
			title: 'Colors',
			description: 'A checkbox with a color.',
			component: () => (
				<div className="grid grid-cols-3 gap-2">
					{colors.map(color => (
						<CheckBox key={color} label={color} color={color} />
					))}
				</div>
			),
			imports: `import { Button } from "@/colidy-ui/Button";`,
			code: `colors.map(color => (
			<CheckBox
				key={color}
				label={color}
				color={color}
			/>
		))`,
		},
		{
			title: 'Sizes',
			description: 'A checkbox with a size.',
			component: () => (
				<div className="grid grid-cols-3 gap-2 items-center">
					{['sm', 'md', 'lg'].map(size => (
						<CheckBox key={size} size={size as any} />
					))}
				</div>
			),
			imports: `import { Button } from "@/colidy-ui/Button";`,
			code: `<CheckBox
			label="I agree to the terms and conditions"
			size="lg"
		/>`,
		},
	],
};

// @start-demo-string
export const DemoString = `'use client';
import { useState } from 'react';
import { CheckBox } from '@/colidy-ui/Checkbox';
export const Demo = () => {
	const [checkLevel, setCheckLevel] = useState(0);
	const [selected, setSelected] = useState<string[]>([]);
	const peoples = [
		{
			firstName: 'Allen',
			lastName: 'Yundt',
			email: 'Kory_Lind37@hotmail.com',
		},
		{
			firstName: 'Mafalda',
			lastName: 'Wolf',
			email: 'Larue.Pfeffer97@hotmail.com',
		},
		{
			firstName: 'Shawna',
			lastName: 'Green',
			email: 'Afton_Rowe@yahoo.com',
		},
		{
			firstName: 'Dillon',
			lastName: 'Ullrich',
			email: 'Eriberto_Bogan@hotmail.com',
		},
		{
			firstName: 'Florian',
			lastName: 'Bayer',
			email: 'Glenna_West@gmail.com',
		},
	];

	const toggleAll = () => {
		if (checkLevel === 2) {
			setCheckLevel(0);
			setSelected([]);
		} else {
			setCheckLevel(2);
			setSelected(peoples.map(({ email }) => email));
		}
	};

	const selectRow = (email: string) => {
		if (selected.includes(email)) {
			setSelected(prev => {
				const newData = prev.filter(e => e !== email);
				setCheckLevel(1);
				if (newData.length === 0) setCheckLevel(0);
				return newData;
			});
		} else {
			setSelected(prev => {
				const newData = [...prev, email];
				setCheckLevel(1);
				if (peoples.every(({ email }) => newData.includes(email)))
					setCheckLevel(2);
				return newData;
			});
		}
	};

	return (
		<div>
			<CheckBox
				indeterminate={checkLevel === 1}
				checked={checkLevel === 2}
				onCheckedChange={() => toggleAll()}
				label="Select all"
			/>
			{peoples.map(({ firstName, lastName, email }) => (
				<div key={email} className="grid grid-cols-[auto,1fr] gap-2">
					<CheckBox
						checked={selected.includes(email)}
						onCheckedChange={() => selectRow(email)}
						label={\`\${firstName} \${lastName}\`}
					/>
				</div>
			))}
		</div>
	);
};

`;