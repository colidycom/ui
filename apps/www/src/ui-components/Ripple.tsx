import { forwardRef, useCallback, useState } from 'react';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';

export const Ripple = forwardRef<
	HTMLDivElement,
	{
		color?: string;
		motionProps?: React.ComponentProps<typeof m.span>;
		children: (
			onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
			ripples: React.ReactNode
		) => React.ReactNode;
		disabled?: boolean;
	}
>(({ color = 'currentColor', motionProps, children, ...props }, ref) => {
	const [ripples, setRipples] = useState<
		{
			key: React.Key;
			x: number;
			y: number;
			size: number;
			pop_at: number;
		}[]
	>([]);

	const onClick = useCallback(
		(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
			if (props.disabled) return;

			const trigger = event.currentTarget;
			const size = Math.max(trigger.clientWidth, trigger.clientHeight);
			const rect = trigger.getBoundingClientRect();

			setRipples(prevRipples => [
				...prevRipples,
				{
					key: prevRipples.length.toString(),
					size,
					x: event.clientX - rect.left - size / 2,
					y: event.clientY - rect.top - size / 2,
					pop_at: Date.now(),
				},
			]);
		},
		[]
	);

	const onClear = useCallback((key: React.Key) => {
		setRipples(prevRipples =>
			prevRipples.filter(
				ripple =>
					ripple.key !== key || Date.now() - ripple.pop_at < 1000
			)
		);
	}, []);

	const rippleElements = ripples.map(ripple => {
		const duration = Math.min(
			Math.max(0.01 * ripple.size, 0.2),
			ripple.size > 100 ? 0.75 : 0.5
		);

		return (
			<LazyMotion key={ripple.key} features={domAnimation}>
				<AnimatePresence mode="popLayout">
					<m.span
						animate={{ transform: 'scale(2)', opacity: 0 }}
						exit={{ opacity: 0 }}
						initial={{ transform: 'scale(0)', opacity: 0.35 }}
						className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full origin-center"
						style={{
							backgroundColor: color,
							borderRadius: '100%',
							top: ripple.y,
							left: ripple.x,
							width: `${ripple.size}px`,
							height: `${ripple.size}px`,
						}}
						transition={{ duration }}
						onAnimationComplete={() => {
							onClear(ripple.key);
						}}
						{...motionProps}
					/>
				</AnimatePresence>
			</LazyMotion>
		);
	});

	return children(onClick, rippleElements);
});

Ripple.displayName = 'ColidyRipple';
