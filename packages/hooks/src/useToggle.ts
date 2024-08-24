import { useState, useCallback } from 'react';

export const useToggle = (
	initialValue: boolean = false
): [boolean, () => void] => {
	const [state, setState] = useState<boolean>(initialValue);
	const toggle = useCallback(() => setState(prev => !prev), []);
	return [state, toggle];
};
