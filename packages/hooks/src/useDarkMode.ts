import { useState, useEffect } from 'react';

export const useDarkMode = (): boolean => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(
		() => window.matchMedia('(prefers-color-scheme: dark)').matches
	);

	useEffect(() => {
		const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', listener);
		return () => mediaQuery.removeEventListener('change', listener);
	}, []);

	return isDarkMode;
};
