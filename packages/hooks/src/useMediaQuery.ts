import { useState, useEffect, useCallback, useMemo } from 'react';

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQueryList = window.matchMedia(query);
		const listener = (event: MediaQueryListEvent) =>
			setMatches(event.matches);

		mediaQueryList.addListener(listener);

		return () => {
			mediaQueryList.removeListener(listener);
		};
	}, [query]);

	const updateQuery = useCallback((newQuery: string) => {
		if (typeof window === 'undefined') return;
		const mediaQueryList = window.matchMedia(newQuery);
		setMatches(mediaQueryList.matches);
	}, []);

	const media = useMemo(() => matches, [matches]);

	return { matches: media, updateQuery };
};
