import { useEffect, useState } from 'react';

export const useDarkMode = (): boolean => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQueryList = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);

		setIsDarkMode(mediaQueryList.matches);
		mediaQueryList.addEventListener('change', event => {
			setIsDarkMode(event.matches);
		});

		return () => {
			mediaQueryList.removeEventListener('change', event => {
				setIsDarkMode(event.matches);
			});
		};
	}, []);

	return isDarkMode;
};
