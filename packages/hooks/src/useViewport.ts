import { useEffect, useState } from 'react';

export const useViewport = () => {
	const [viewport, setViewport] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleResize = () => {
			setViewport({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		const debounceResize = () => {
			let timeout: NodeJS.Timeout;
			return () => {
				clearTimeout(timeout);
				timeout = setTimeout(handleResize, 150);
			};
		};

		const optimizedResize = debounceResize();

		window.addEventListener('resize', optimizedResize);
		return () => {
			window.removeEventListener('resize', optimizedResize);
		};
	}, []);

	return viewport;
};
