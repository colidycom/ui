import { useEffect, useCallback, useMemo } from 'react';

export const useDocumentTitle = (initialTitle: string) => {
	useEffect(() => {
		document.title = initialTitle;
	}, [initialTitle]);

	const updateTitle = useCallback((newTitle: string) => {
		document.title = newTitle;
	}, []);

	const title = useMemo(() => document.title, []);

	return { title, updateTitle };
};
