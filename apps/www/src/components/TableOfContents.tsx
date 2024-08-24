'use client';

import { cn } from '@colidy/ui-utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TableOfContents = () => {
	const [contents, setContents] = useState<
		{
			title: string;
			depth: number;
			id: string;
		}[]
	>([]);

	const getHeadings = () => {
		if (!document) return;
		if (!document.body) return;

		const headers = Array.from(
			document.querySelectorAll('h2, h3, h4, h5, h6')
		);

		if (!headers.length) return;
		if (!document.querySelector('[data-toc]')) return;

		const newContents = headers
			.map(header => {
				if (!header.id) return null;

				const parent = header.parentElement;
				if (!parent) return null;

				const anchor = document.createElement('a');
				if (!anchor) return null;

				return {
					title: header.textContent,
					depth: parseInt(header.tagName[1]),
					id: header.id,
				};
			})
			.filter(Boolean);

		setContents(newContents as any);
	};

	useEffect(() => {
		getHeadings();
		document.addEventListener('DOMContentLoaded', getHeadings);
		document.addEventListener('click', getHeadings);

		return () => {
			document.removeEventListener('DOMContentLoaded', getHeadings);
			document.removeEventListener('click', getHeadings);
		};
	}, []);

	return (
		contents.length > 0 && (
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<ul className="flex flex-col gap-2">
					<h2 className="text-foreground text-sm">
						Table of Contents
					</h2>
					{contents.map(({ title, depth, id }) => (
						<li key={id}>
							<motion.a
								key={id}
								className={cn(
									'hover:underline text-muted text-sm',
									{
										'ml-4': depth === 3,
										'ml-8': depth === 4,
										'ml-12': depth === 5,
										'ml-16': depth === 6,
									}
								)}
								href={`#${id}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								{title}
							</motion.a>
						</li>
					))}
				</ul>
			</motion.nav>
		)
	);
};
