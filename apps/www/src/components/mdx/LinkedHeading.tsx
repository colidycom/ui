'use client';

import { cn } from '@colidy/ui-utils';

export const LinkedHeading = ({
	id,
	level,
	...props
}: {
	id: string;
	level: number;
} & React.HTMLAttributes<HTMLHeadingElement>) => {
	const Tag: any = `h${level}`;

	return (
		<div
			className={cn('relative group pl-8 -ml-8 flex items-center gap-4', {
				'mt-8 mb-2': level === 2,
				'mt-6 mb-2': level === 3,
				'mt-4 mb-2': level === 4,
				'mt-2 mb-2': level === 5 || level === 6,
			})}
		>
			<a
				className="absolute -left-2 w-6 h-6 text-sm bg-zinc-500/10 hover:bg-zinc-500/20 border opacity-0 group-hover:opacity-100 rounded-sm flex justify-center items-center transition-all"
				aria-label="Anchor"
				aria-hidden
				href={`#${id}`}
			>
				<span className="sr-only">Anchor</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={12}
					height={12}
					color={'currentColor'}
					fill={'none'}
				>
					<path
						d="M7 2V22"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M17 2V22"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M22 7L2 7"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M22 17L2 17"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</a>
			<Tag id={id} className="group !m-0" {...props} />
		</div>
	);
};
