'use client';

import { cn } from '@colidy/ui-utils';
import { Root, Thumb } from '@radix-ui/react-switch';
import { forwardRef, RefAttributes } from 'react';
import { Label } from './Label';

export const Switch = forwardRef<
	HTMLLabelElement,
	{
		label: string;
		size?: 'sm' | 'md' | 'lg';
	} & React.ComponentProps<typeof Root>
>(({ label, size = 'md', ...props }, ref) => {
	const sizeStyles = {
		md: {
			root: 'w-[42px] h-[25px]',
			thumb: 'w-[15px] h-[15px] data-[state=checked]:translate-x-[22px]',
		},
		sm: {
			root: 'w-[32px] h-[20px]',
			thumb: 'w-[12px] h-[12px] data-[state=checked]:translate-x-[16px]',
		},
		lg: {
			root: 'w-[52px] h-[30px]',
			thumb: 'w-[18px] h-[18px] data-[state=checked]:translate-x-[28px]',
		},
	}[size || 'md'];

	return (
		<label className="flex items-center gap-2" ref={ref}>
			<Root
				className={cn(
					sizeStyles.root,
					'relative rounded-full flex items-center transition-colors',
					'bg-accent data-[state=checked]:bg-colored data-[state=checked]:border-colored'
				)}
				{...props}
			>
				<Thumb
					className={cn(
						sizeStyles.thumb,
						'block rounded-full transition-all translate-x-1 will-change-transform',
						'bg-white'
					)}
				/>
			</Root>
			<Label label={label} />
		</label>
	);
});

Switch.displayName = 'ColidySwitch';
