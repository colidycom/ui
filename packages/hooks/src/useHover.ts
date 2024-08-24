import { useState, useRef, useEffect, RefObject } from 'react';

export const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
	const [hovered, setHovered] = useState<boolean>(false);
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleMouseOver = () => setHovered(true);
		const handleMouseOut = () => setHovered(false);

		if (ref.current) {
			ref.current.addEventListener('mouseover', handleMouseOver);
			ref.current.addEventListener('mouseout', handleMouseOut);
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('mouseover', handleMouseOver);
				ref.current.removeEventListener('mouseout', handleMouseOut);
			}
		};
	}, []);

	return [ref, hovered];
};
