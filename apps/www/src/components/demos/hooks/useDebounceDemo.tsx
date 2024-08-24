'use client';

import { TextField } from '@/ui-components/TextField';
import { useDebounce } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce(value, 500);
	return (
		<div>
			<TextField value={value} onChange={e => setValue(e.target.value)} />
			<p>Debounced Value: {debouncedValue}</p>
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

import { TextField } from '@/ui-components/TextField';
import { useDebounce } from '@colidy/hooks';
import { useState } from 'react';

export const Demo = () => {
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce(value, 500);
	return (
		<div>
			<TextField value={value} onChange={e => setValue(e.target.value)} />
			<p>Debounced Value: {debouncedValue}</p>
		</div>
	);
};

`;