import { useState, useEffect, useCallback, useRef } from 'react';

export const useFocus = () => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const elementRef = useRef<HTMLElement | null>(null);

	const setFocus = useCallback(() => {
		if (elementRef.current) {
			elementRef.current.focus();
		}
	}, []);

	useEffect(() => {
		const handleFocus = () => setIsFocused(true);
		const handleBlur = () => setIsFocused(false);

		const element = elementRef.current;
		if (element) {
			element.addEventListener('focus', handleFocus);
			element.addEventListener('blur', handleBlur);
		}

		return () => {
			if (element) {
				element.removeEventListener('focus', handleFocus);
				element.removeEventListener('blur', handleBlur);
			}
		};
	}, []);

	return { isFocused, setFocus, elementRef };
};
