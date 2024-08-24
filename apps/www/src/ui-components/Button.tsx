'use client';

import { useButton } from '@react-aria/button';
import { useFocus, useFocusVisible } from '@react-aria/interactions';
import { colors, cn } from '@colidy/ui-utils';
import { forwardRef } from 'react';
import { Ripple } from './Ripple';

type ButtonProps = {
	variant?: 'solid' | 'outline' | 'ghost' | 'link';
	color?: (typeof colors)[number] | 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg' | 'xl';
	children: React.ReactNode;
	className?: string;
	autoFocus?: boolean;
	disabled?: boolean;
	isLoading?: boolean;
	iconOnly?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disableRipple?: boolean;
} & React.ComponentProps<'button'>;

export const getButtonProps = ({
	variant = 'solid',
	color = 'primary',
	size = 'md',
	className = '',
	iconOnly = false,
	focusProps = null,
	isFocusVisible = false,
	disabled = false,
	ref = null,
	...props
}: {
	variant?: ButtonProps['variant'];
	color?: ButtonProps['color'];
	size?: ButtonProps['size'];
	className?: ButtonProps['className'];
	iconOnly?: ButtonProps['iconOnly'];
	focusProps?: any;
	isFocusVisible?: boolean;
	disabled?: ButtonProps['disabled'];
	ref?: any;
	props?: ButtonProps;
}): any => {
	const lightColors = ['amber', 'yellow', 'lime', 'cyan'];
	const textColor = (lightColor: string, darkColor: string) => {
		return lightColors.includes(color)
			? `text-${color}-${darkColor}`
			: `text-${color}-${lightColor}`;
	};

	const classes: {
		[key: string]: {
			solid: string;
			outline: string;
			ghost: string;
			link: string;
		};
	} = {
		primary: {
			solid: 'bg-foreground text-primary hover:bg-foreground/95 active:bg-foreground/90',
			outline:
				'backdrop-blur border border-border hover:bg-border/20 shadow-sm active:bg-border/30',
			ghost: 'backdrop-blur hover:bg-accent/50 active:bg-accent/70',
			link: 'decoration-muted active:decoration-foreground hover:underline active:underline',
		},
		secondary: {
			solid: 'bg-secondary border border-border hover:bg-tertiary active:bg-accent',
			outline:
				'backdrop-blur border border-border hover:bg-secondary/20 shadow-sm active:bg-secondary/30 dark:border-border',
			ghost: 'backdrop-blur hover:bg-zinc-500/5 active:bg-accent/20',
			link: 'decoration-muted active:decoration-foreground hover:underline active:underline',
		},
		colors: {
			solid: `bg-${color}-500 ${textColor(
				'50',
				'900'
			)} hover:bg-${color}-600 active:bg-${color}-700`,
			outline: `backdrop-blur border border-${color}-500/40 hover:bg-${color}-500/20 shadow-sm active:bg-${color}-500/30 text-${color}-900 dark:text-${color}-400`,
			ghost: `backdrop-blur hover:bg-${color}-500/20 active:bg-${color}-500/30`,
			link: `text-${color}-400 decoration-${color}-500 active:decoration-${color}-700 hover:underline active:underline`,
		},
	};

	const sizes: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	} = {
		sm: 'text-sm px-4 py-2',
		md: 'text-base px-5 py-2.5',
		lg: 'text-lg px-6 py-3',
		xl: 'text-xl px-7 py-4',
	};

	const iconOnlySizes: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	} = {
		sm: 'p-2',
		md: 'p-2.5',
		lg: 'p-3',
		xl: 'p-4',
	};

	const getClassNames = (
		variant: 'solid' | 'outline' | 'ghost' | 'link',
		color: (typeof colors)[number],
		size: 'sm' | 'md' | 'lg' | 'xl'
	) => {
		return cn(
			iconOnly
				? iconOnlySizes?.[size] || iconOnlySizes.md
				: sizes?.[size] || sizes.md,
			classes?.[color]
				? classes[color]?.[variant]
					? classes[color][variant]
					: classes.colors['solid']
				: classes.colors?.[variant] || classes.colors.solid,
			className
		);
	};

	const combinedProps = {
		...props,
		...focusProps,
		className: cn(
			'transition-colors overflow-hidden',
			'!outline-none relative isolate inline-flex items-center justify-center gap-x-2 rounded border text-base/6 font-semibold px-3 py-2 sm:text-sm/6 focus:outline-none border-transparent text-foreground',
			{
				'focus:ring-offset-primary focus:ring-2 focus:ring-colored':
					isFocusVisible,
				'pointer-events-none opacity-50 select-none': disabled,
			},
			getClassNames(variant, color, size)
		),
		ref,
	};

	return combinedProps;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			variant = 'solid',
			color = 'primary',
			size = 'md',
			children,
			className,
			autoFocus = false,
			disabled,
			isLoading,
			iconOnly,
			onClick,
			disableRipple = false,
			...rest
		} = props;
		const { isFocusVisible } = useFocusVisible({
			autoFocus,
		});
		const { focusProps } = useFocus({
			isDisabled: disabled || isLoading,
		});
		const { buttonProps, isPressed } = useButton(
			{
				...(props as any),
				elementType: 'button',
			},
			ref as React.RefObject<HTMLButtonElement>
		);

		const combinedProps = getButtonProps(
			Object.assign(buttonProps, {
				variant,
				color,
				size,
				className,
				iconOnly,
				focusProps,
				isFocusVisible,
				disabled: disabled || isLoading,
				ref,
			}) as any
		);

		const spinnerSize = {
			sm: '0.75em',
			md: '1em',
			lg: '1.5em',
			xl: '2em',
		}[size];

		const combineFunctions = (a: any, b: any) => {
			return (...args: any) => {
				a?.(...args);
				b?.(...args);
			};
		};

		return (
			<Ripple disabled={disabled || isLoading || disableRipple}>
				{(onRippleClick, rippleElements) => (
					<button
						{...combinedProps}
						onClick={combineFunctions(onRippleClick, onClick)}
						disabled={disabled}
					>
						{isLoading ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={spinnerSize}
								height={spinnerSize}
								viewBox="0 0 24 24"
							>
								<g stroke="currentColor">
									<circle
										cx={12}
										cy={12}
										r={9.5}
										fill="none"
										strokeLinecap="round"
										strokeWidth={3}
									>
										<animate
											attributeName="stroke-dasharray"
											calcMode="spline"
											dur="1.5s"
											keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
											keyTimes="0;0.475;0.95;1"
											repeatCount="indefinite"
											values="0 150;42 150;42 150;42 150"
										></animate>
										<animate
											attributeName="stroke-dashoffset"
											calcMode="spline"
											dur="1.5s"
											keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
											keyTimes="0;0.475;0.95;1"
											repeatCount="indefinite"
											values="0;-16;-59;-59"
										></animate>
									</circle>
									<animateTransform
										attributeName="transform"
										dur="2s"
										repeatCount="indefinite"
										type="rotate"
										values="0 12 12;360 12 12"
									></animateTransform>
								</g>
							</svg>
						) : null}
						{children}
						{rippleElements}
					</button>
				)}
			</Ripple>
		);
	}
);

Button.displayName = 'ColidyButton';

/*TW
bg-slate-500 bg-gray-500 bg-zinc-500 bg-neutral-500 bg-stone-500 bg-red-500 bg-orange-500 bg-amber-500 bg-yellow-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-cyan-500 bg-sky-500 bg-blue-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 bg-rose-500 bg-primary
text-slate-50 text-gray-50 text-zinc-50 text-neutral-50 text-stone-50 text-red-50 text-orange-50 text-amber-50 text-yellow-50 text-lime-50 text-green-50 text-emerald-50 text-teal-50 text-cyan-50 text-sky-50 text-blue-50 text-indigo-50 text-violet-50 text-purple-50 text-fuchsia-50 text-pink-50 text-rose-50 text-primary
hover:bg-slate-600 hover:bg-gray-600 hover:bg-zinc-600 hover:bg-neutral-600 hover:bg-stone-600 hover:bg-red-600 hover:bg-orange-600 hover:bg-amber-600 hover:bg-yellow-600 hover:bg-lime-600 hover:bg-green-600 hover:bg-emerald-600 hover:bg-teal-600 hover:bg-cyan-600 hover:bg-sky-600 hover:bg-blue-600 hover:bg-indigo-600 hover:bg-violet-600 hover:bg-purple-600 hover:bg-fuchsia-600 hover:bg-pink-600 hover:bg-rose-600 hover:bg-primary
active:bg-slate-700 active:bg-gray-700 active:bg-zinc-700 active:bg-neutral-700 active:bg-stone-700 active:bg-red-700 active:bg-orange-700 active:bg-amber-700 active:bg-yellow-700 active:bg-lime-700 active:bg-green-700 active:bg-emerald-700 active:bg-teal-700 active:bg-cyan-700 active:bg-sky-700 active:bg-blue-700 active:bg-indigo-700 active:bg-violet-700 active:bg-purple-700 active:bg-fuchsia-700 active:bg-pink-700 active:bg-rose-700 active:bg-primary
border-slate-500/40 border-gray-500/40 border-zinc-500/40 border-neutral-500/40 border-stone-500/40 border-red-500/40 border-orange-500/40 border-amber-500/40 border-yellow-500/40 border-lime-500/40 border-green-500/40 border-emerald-500/40 border-teal-500/40 border-cyan-500/40 border-sky-500/40 border-blue-500/40 border-indigo-500/40 border-violet-500/40 border-purple-500/40 border-fuchsia-500/40 border-pink-500/40 border-rose-500/40 border-primary/40
hover:bg-slate-500/20 hover:bg-gray-500/20 hover:bg-zinc-500/20 hover:bg-neutral-500/20 hover:bg-stone-500/20 hover:bg-red-500/20 hover:bg-orange-500/20 hover:bg-amber-500/20 hover:bg-yellow-500/20 hover:bg-lime-500/20 hover:bg-green-500/20 hover:bg-emerald-500/20 hover:bg-teal-500/20 hover:bg-cyan-500/20 hover:bg-sky-500/20 hover:bg-blue-500/20 hover:bg-indigo-500/20 hover:bg-violet-500/20 hover:bg-purple-500/20 hover:bg-fuchsia-500/20 hover:bg-pink-500/20 hover:bg-rose-500/20 hover:bg-primary/20
active:bg-slate-500/30 active:bg-gray-500/30 active:bg-zinc-500/30 active:bg-neutral-500/30 active:bg-stone-500/30 active:bg-red-500/30 active:bg-orange-500/30 active:bg-amber-500/30 active:bg-yellow-500/30 active:bg-lime-500/30 active:bg-green-500/30 active:bg-emerald-500/30 active:bg-teal-500/30 active:bg-cyan-500/30 active:bg-sky-500/30 active:bg-blue-500/30 active:bg-indigo-500/30 active:bg-violet-500/30 active:bg-purple-500/30 active:bg-fuchsia-500/30 active:bg-pink-500/30 active:bg-rose-500/30 active:bg-primary/30
text-slate-900 text-gray-900 text-zinc-900 text-neutral-900 text-stone-900 text-red-900 text-orange-900 text-amber-900 text-yellow-900 text-lime-900 text-green-900 text-emerald-900 text-teal-900 text-cyan-900 text-sky-900 text-blue-900 text-indigo-900 text-violet-900 text-purple-900 text-fuchsia-900 text-pink-900 text-rose-900 text-primary
dark:text-slate-50 dark:text-gray-50 dark:text-zinc-50 dark:text-neutral-50 dark:text-stone-50 dark:text-red-50 dark:text-orange-50 dark:text-amber-50 dark:text-yellow-50 dark:text-lime-50 dark:text-green-50 dark:text-emerald-50 dark:text-teal-50 dark:text-cyan-50 dark:text-sky-50 dark:text-blue-50 dark:text-indigo-50 dark:text-violet-50 dark:text-purple-50 dark:text-fuchsia-50 dark:text-pink-50 dark:text-rose-50 dark:text-primary
hover:bg-slate-500/20 hover:bg-gray-500/20 hover:bg-zinc-500/20 hover:bg-neutral-500/20 hover:bg-stone-500/20 hover:bg-red-500/20 hover:bg-orange-500/20 hover:bg-amber-500/20 hover:bg-yellow-500/20 hover:bg-lime-500/20 hover:bg-green-500/20 hover:bg-emerald-500/20 hover:bg-teal-500/20 hover:bg-cyan-500/20 hover:bg-sky-500/20 hover:bg-blue-500/20 hover:bg-indigo-500/20 hover:bg-violet-500/20 hover:bg-purple-500/20 hover:bg-fuchsia-500/20 hover:bg-pink-500/20 hover:bg-rose-500/20 hover:bg-primary/20
active:bg-slate-500/30 active:bg-gray-500/30 active:bg-zinc-500/30 active:bg-neutral-500/30 active:bg-stone-500/30 active:bg-red-500/30 active:bg-orange-500/30 active:bg-amber-500/30 active:bg-yellow-500/30 active:bg-lime-500/30 active:bg-green-500/30 active:bg-emerald-500/30 active:bg-teal-500/30 active:bg-cyan-500/30 active:bg-sky-500/30 active:bg-blue-500/30 active:bg-indigo-500/30 active:bg-violet-500/30 active:bg-purple-500/30 active:bg-fuchsia-500/30 active:bg-pink-500/30 active:bg-rose-500/30 active:bg-primary/30
text-slate-400 text-gray-400 text-zinc-400 text-neutral-400 text-stone-400 text-red-400 text-orange-400 text-amber-400 text-yellow-400 text-lime-400 text-green-400 text-emerald-400 text-teal-400 text-cyan-400 text-sky-400 text-blue-400 text-indigo-400 text-violet-400 text-purple-400 text-fuchsia-400 text-pink-400 text-rose-400 text-primary
decoration-slate-500 decoration-gray-500 decoration-zinc-500 decoration-neutral-500 decoration-stone-500 decoration-red-500 decoration-orange-500 decoration-amber-500 decoration-yellow-500 decoration-lime-500 decoration-green-500 decoration-emerald-500 decoration-teal-500 decoration-cyan-500 decoration-sky-500 decoration-blue-500 decoration-indigo-500 decoration-violet-500 decoration-purple-500 decoration-fuchsia-500 decoration-pink-500 decoration-rose-500 decoration-primary
active:decoration-slate-700 active:decoration-gray-700 active:decoration-zinc-700 active:decoration-neutral-700 active:decoration-stone-700 active:decoration-red-700 active:decoration-orange-700 active:decoration-amber-700 active:decoration-yellow-700 active:decoration-lime-700 active:decoration-green-700 active:decoration-emerald-700 active:decoration-teal-700 active:decoration-cyan-700 active:decoration-sky-700 active:decoration-blue-700 active:decoration-indigo-700 active:decoration-violet-700 active:decoration-purple-700 active:decoration-fuchsia-700 active:decoration-pink-700 active:decoration-rose-700 active:decoration-primary
*/
