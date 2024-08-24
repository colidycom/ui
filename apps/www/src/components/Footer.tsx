'use client';

import { cn } from '@colidy/ui-utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = ({ inDocs = false }: { inDocs?: boolean }) => {
	const pathname = usePathname();
	if (pathname === '/') return null;
	if (pathname.startsWith('/docs') && !inDocs) return null;

	return (
		<footer className="text-sm leading-6 mt-12 py-10 border-t border-border/50">
			<div
				className={cn('container sm:flex justify-between text-muted', {
					'!px-0': inDocs,
				})}
			>
				<div className="mb-6 sm:mb-0 sm:flex">
					<p>ColidyUI © {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
};
