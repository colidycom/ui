import { cn } from '@colidy/ui-utils';
import { useId, forwardRef } from 'react';
import { Label } from './Label';

type TextFieldProps = {
	label?: string;
	description?: string;
	left?: React.ReactNode;
	right?: React.ReactNode;
	error?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			className,
			size = 'md',
			id: _id,
			label,
			description,
			left,
			right,
			error,
			...props
		},
		ref
	) => {
		const use_id = useId();
		const id = _id ?? use_id;

		return (
			<div className={cn('space-y-2', className)} aria-describedby={id}>
				{label && (
					<Label
						htmlFor={id}
						description={description}
						label={label}
					/>
				)}
				<label
					htmlFor={id}
					className={cn(
						'bg-input relative rounded flex items-center transition-all',
						{
							'border hover:border-accent focus-within:!border-transparent focus-within:ring-colored focus-within:ring-2':
								!error,
							'border border-red-500 focus-within:!border-transparent focus-within:ring-colored focus-within:ring-2':
								error,
						}
					)}
				>
					{left && (
						<span className="pl-2.5 text-muted text-sm/4">
							{left}
						</span>
					)}
					<input
						id={id}
						ref={ref}
						className={cn(
							'bg-transparent w-full h-full !outline-none placeholder-muted',
							{
								'p-3 text-base/6': size === 'lg',
								'p-2.5 text-sm/6': size === 'md',
								'p-2 text-sm/4': size === 'sm',
								'p-1.5 text-xs/6': size === 'xs',
							}
						)}
						aria-invalid={!!error}
						{...props}
					/>
					{right && (
						<span className="pr-2.5 text-muted text-sm/4">
							{right}
						</span>
					)}
				</label>
				{error && <p className="text-sm/6 text-red-500">{error}</p>}
			</div>
		);
	}
);

TextField.displayName = 'ColidyTextField';
