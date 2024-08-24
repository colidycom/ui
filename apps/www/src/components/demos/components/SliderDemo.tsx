'use client';
import { Slider } from '@/colidy-ui/Slider';
import { useState } from 'react';

export const Demo = () => {
	const [value, setValue] = useState(30);
	return (
		<div className="max-w-sm flex flex-col gap-2 w-full">
			<Slider
				max={100}
				min={0}
				defaultValue={[value]}
				onValueChange={e => setValue(+e)}
			/>
			<p>Value: {value}</p>
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
import { Slider } from '@/colidy-ui/Slider';
import { useState } from 'react';

export const Demo = () => {
	const [value, setValue] = useState(30);
	return (
		<div className="max-w-sm flex flex-col gap-2 w-full">
			<Slider
				max={100}
				min={0}
				defaultValue={[value]}
				onValueChange={e => setValue(+e)}
			/>
			<p>Value: {value}</p>
		</div>
	);
};

`;