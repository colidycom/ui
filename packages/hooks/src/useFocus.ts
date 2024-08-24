import { useRef } from 'react';

export const useFocus = <T extends HTMLElement>(): [
	React.RefObject<T>,
	() => void
] => {
	const ref = useRef<T>(null);

	const setFocus = () => {
		ref.current?.focus();
	};

	return [ref, setFocus];
};
