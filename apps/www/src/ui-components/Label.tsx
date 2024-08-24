import { forwardRef } from 'react';

export const Label = forwardRef(
	(
		{
			label,
			description,
			...props
		}: {
			label: string;
			description?: string;
		} & React.LabelHTMLAttributes<HTMLLabelElement>,
		ref
	) => {
		return (
			<label className="flex flex-col gap-1" {...props}>
				<span className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
					{label}
				</span>
				{description && (
					<p className="text-sm/6 text-muted">{description}</p>
				)}
			</label>
		);
	}
);

Label.displayName = 'ColidyLabel';
