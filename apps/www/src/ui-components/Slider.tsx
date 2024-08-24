'use client';

import { cn } from '@colidy/ui-utils';
import { Root, Thumb, Track, Range } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

export const Slider = forwardRef<
	HTMLLabelElement,
	React.ComponentProps<typeof Root>
>((props, ref) => {
	return (
		<Root
			className="relative flex touch-none select-none items-center w-full"
			ref={ref}
			{...props}
		>
			<Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary">
				<Range className="absolute h-full bg-colored" />
			</Track>
			<Thumb
				className={cn(
					'block h-4 w-4 rounded-full border-2 border-colored bg-primary disabled:pointer-events-none disabled:opacity-50 !ring-none !outline-none'
				)}
			/>
		</Root>
	);
});

Slider.displayName = 'ColidySlider';
