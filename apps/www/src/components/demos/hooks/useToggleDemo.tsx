'use client';

import { Button } from '@/ui-components/Button';
import { useToggle } from '@colidy/hooks';
import { cn } from '@colidy/ui-utils';

export const Demo = () => {
	const [isToggled, toggle] = useToggle();

	return (
		<div>
			<Button
				variant="outline"
				className={cn({
					'font-bold': isToggled,
					'font-normal': !isToggled,
				})}
				onClick={toggle}
			>
				Bold Text
			</Button>
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

import { Button } from '@/ui-components/Button';
import { useToggle } from '@colidy/hooks';
import { cn } from '@colidy/ui-utils';

export const Demo = () => {
	const [isToggled, toggle] = useToggle();

	return (
		<div>
			<Button
				variant="outline"
				className={cn({
					'font-bold': isToggled,
					'font-normal': !isToggled,
				})}
				onClick={toggle}
			>
				Bold Text
			</Button>
		</div>
	);
};

`;