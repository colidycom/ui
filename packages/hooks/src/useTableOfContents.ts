import { useState, useEffect } from 'react';

interface TOCItem {
	id: string;
	title: string;
	depth: number;
	anchor: string;
}

export const useTableOfContents = (
	headings: string[] = ['h2', 'h3', 'h4', 'h5', 'h6'],
	container: string = '[data-toc]'
) => {
	throw new Error('This hook is not implemented yet');
	const [contents, setContents] = useState<TOCItem[]>([]);
	const [active, setActive] = useState<string>('');
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => setIsScrolling(true);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsScrolling(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [isScrolling]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			const elements = headings.flatMap(heading =>
				Array.from(
					document.querySelectorAll<HTMLElement>(
						`${container} ${heading}`
					)
				)
			);

			const current = elements.find(element => {
				const { top, bottom } = element.getBoundingClientRect();
				return top <= 0 && bottom > 0;
			});

			if (current) {
				setActive(current.id);
				window.history.replaceState({}, '', `#${current.id}`);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [headings, container]);

	const handleHashChange = () => {
		const hash = window.location.hash.substring(1);
		if (hash) {
			const element = document.getElementById(hash);
			if (element) {
				setIsScrolling(true);
				setActive(hash);
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	useEffect(() => {
		handleHashChange();
		window.addEventListener('hashchange', handleHashChange);

		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	useEffect(() => {
		const elements = headings.flatMap(heading =>
			Array.from(
				document.querySelectorAll<HTMLElement>(
					`${container} ${heading}`
				)
			)
		);

		const newContents: TOCItem[] = [];

		elements.forEach(element => {
			if (!element.id) return;

			const depth = parseInt(element.tagName.replace('H', ''));
			const title = element.textContent || '';

			const anchorElement = element.closest('a');

			if (anchorElement) {
				newContents.push({
					id: element.id,
					title,
					depth,
					anchor: anchorElement.outerHTML,
				});
			}
		});

		setContents(newContents);
	}, [headings, container]);

	return { contents, active };
};
