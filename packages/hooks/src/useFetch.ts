import { useState, useEffect } from 'react';

interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

export const useFetch = <T>(url: string): FetchState<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok)
					throw new Error('Network response was not ok');
				const result: T = await response.json();
				setData(result);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};
