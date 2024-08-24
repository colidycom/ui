import { forwardRef, useId, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Label } from '@/colidy-ui/Label';
import { cn, colors } from '@colidy/ui-utils';
import { motion } from 'framer-motion';

type CheckBox = {
	label?: string;
	description?: string;
	radius?: 'sm' | 'md' | 'lg' | 'full';
	size?: 'sm' | 'md' | 'lg';
	indeterminate?: boolean;
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	color?: (typeof colors)[number];
} & React.ComponentProps<typeof Checkbox.Root>;

export const CheckBox = forwardRef(
	(
		{
			label,
			description,
			indeterminate,
			onCheckedChange,
			checked,
			size,
			radius,
			className,
			color = 'default',
			...props
		}: CheckBox,
		ref
	) => {
		const id = useId();
		const [checkedState, setCheckedState] = useState(checked);
		if (indeterminate && checked) {
			throw new Error(
				'Checkbox cannot be both checked and indeterminate. Please choose one.'
			);
		}

		const { is, cs } = {
			sm: {
				is: [12, 16],
				cs: 'w-4 h-4',
			},
			md: {
				is: [16, 20],
				cs: 'w-5 h-5',
			},
			lg: {
				is: [20, 24],
				cs: 'w-6 h-6',
			},
		}[size || 'md'];

		const rounded = {
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		}[radius || 'md'];

		const colors = {
			default: 'bg-foreground border-foreground text-primary',
			slate: 'bg-slate-500 border-slate-500 text-primary',
			gray: 'bg-gray-500 border-gray-500 text-primary',
			zinc: 'bg-zinc-500 border-zinc-500 text-primary',
			neutral: 'bg-neutral-500 border-neutral-500 text-primary',
			stone: 'bg-stone-500 border-stone-500 text-primary',
			red: 'bg-red-500 border-red-500 text-primary',
			orange: 'bg-orange-500 border-orange-500 text-primary',
			amber: 'bg-amber-500 border-amber-500 text-amber-950',
			yellow: 'bg-yellow-500 border-yellow-500 text-yellow-950',
			lime: 'bg-lime-500 border-lime-500 text-lime-950',
			green: 'bg-green-500 border-green-500 text-green-950',
			emerald: 'bg-emerald-500 border-emerald-500 text-emerald-950',
			teal: 'bg-teal-500 border-teal-500 text-teal-950',
			cyan: 'bg-cyan-500 border-cyan-500 text-cyan-950',
			sky: 'bg-sky-500 border-sky-500 text-sky-950',
			blue: 'bg-blue-500 border-blue-500 text-primary',
			indigo: 'bg-indigo-500 border-indigo-500 text-primary',
			violet: 'bg-violet-500 border-violet-500 text-primary',
			purple: 'bg-purple-500 border-purple-500 text-primary',
			fuchsia: 'bg-fuchsia-500 border-fuchsia-500 text-primary',
			pink: 'bg-pink-500 border-pink-500 text-primary',
			rose: 'bg-rose-500 border-rose-500 text-primary',
		}[color];

		return (
			<form>
				<div className="flex gap-2">
					<Checkbox.Root
						className={cn(
							'mt-1 !outline-none flex appearance-none items-center justify-center border transition-colors',
							{
								'bg-muted/20': indeterminate,
								'hover:bg-muted/10':
									!(checked || checkedState) &&
									!indeterminate,
							},
							cs,
							rounded,
							className,
							(checked || checkedState) && colors
						)}
						checked={checked || indeterminate || checkedState}
						onCheckedChange={
							onCheckedChange ||
							(() => setCheckedState(!checkedState))
						}
						id={id}
					>
						<Checkbox.Indicator className="text-[inherit]">
							{indeterminate && (
								<motion.span
									layoutId={id + '-indeterminate'}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Minus size={is[0]} />
								</motion.span>
							)}
							{(checked || checkedState) && (
								<motion.span
									layoutId={id + '-checked'}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Tick size={is[1]} />
								</motion.span>
							)}
						</Checkbox.Indicator>
					</Checkbox.Root>
					{label && (
						<Label
							label={label}
							description={description}
							htmlFor={id}
							className="cursor-pointer"
						/>
					)}
				</div>
			</form>
		);
	}
);

CheckBox.displayName = 'ColidyCheckBox';

function Tick({ size = 16, ...props }) {
	return (
		<svg
			viewBox="0 0 1024 1024"
			width={size}
			height={size}
			stroke="currentColor"
			fill="currentColor"
			{...props}
		>
			<path
				fill="none"
				strokeWidth={64}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M213.3 597.3L362.7 746.7 810.7 277.3"
			/>
		</svg>
	);
}

function Minus({ size = 16, ...props }) {
	return (
		<svg
			viewBox="0 0 1024 1024"
			width={size}
			height={size}
			stroke="currentColor"
			fill="currentColor"
			{...props}
		>
			<path
				fill="none"
				strokeWidth={64}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M853.3 512L170.7 512"
			/>
		</svg>
	);
}
