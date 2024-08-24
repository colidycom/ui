'use client';
import { Switch } from '@/colidy-ui/Switch';

export const Demo = () => {
	return (
		<div className="max-w-sm flex flex-col gap-2">
			<Switch label="Airplane Mode" size="sm" />
			<Switch label="Airplane Mode" />
			<Switch label="Airplane Mode" size="lg" />
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
import { Switch } from '@/colidy-ui/Switch';

export const Demo = () => {
	return (
		<div className="max-w-sm flex flex-col gap-2">
			<Switch label="Airplane Mode" size="sm" />
			<Switch label="Airplane Mode" />
			<Switch label="Airplane Mode" size="lg" />
		</div>
	);
};

`;