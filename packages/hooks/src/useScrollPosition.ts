import { useState, useEffect } from 'react';

export const useScrollPosition = (): number => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.pageYOffset);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollPosition;
};
