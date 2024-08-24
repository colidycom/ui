'use client';

import { cn } from '@colidy/ui-utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft01 } from '@colidy/icons/outline/ArrowLeft01';
import { ArrowRight01 } from '@colidy/icons/outline/ArrowRight01';

export const Pagination = ({
	next,
	prev,
}: {
	next: { title: string; href: string };
	prev: { title: string; href: string };
}) => {
	return (
		<nav className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-24">
			{prev && (
				<Link
					href={prev.href}
					className={cn(
						'w-full lg:w-auto border border-muted/10 flex-1 lg:h-16 hover:bg-border/10 transition-colors rounded flex flex-col items-start lg:flex-row lg:items-center lg:justify-between text-primary p-4',
						{
							'cursor-not-allowed': !prev.title,
							'opacity-0': !prev.title,
						}
					)}
				>
					<span className="text-sm text-muted flex items-center gap-1">
						<span className="block">
							<ArrowLeft01 size={16} />
						</span>
						Previous
					</span>
					<div className="flex flex-col items-end">
						<span className="block font-semibold text-foreground">
							{prev.title}
						</span>
					</div>
				</Link>
			)}
			{next && (
				<Link
					href={next.href}
					className={cn(
						'w-full lg:w-auto border border-muted/10 flex-1 lg:h-16 hover:bg-border/10 transition-colors rounded flex flex-col-reverse items-end lg:flex-row lg:items-center lg:justify-between text-primary p-4',
						{
							'cursor-not-allowed': !next.title,
							'opacity-0': !next.title,
						}
					)}
				>
					<div className="flex flex-col items-start">
						<span className="block font-semibold text-foreground">
							{next.title}
						</span>
					</div>
					<span className="text-sm text-muted flex items-center gap-1">
						Next
						<span className="block">
							<ArrowRight01 size={16} />
						</span>
					</span>
				</Link>
			)}
		</nav>
	);
};
