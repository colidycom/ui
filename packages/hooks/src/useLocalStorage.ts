import { useState } from 'react';

export const useLocalStorage = <T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	const setValue = (value: T) => {
		try {
			setStoredValue(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
};
