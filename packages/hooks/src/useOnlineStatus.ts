import { useState, useEffect } from 'react';

export const useOnlineStatus = (): boolean => {
	const [isOnline, setIsOnline] = useState<boolean>(true);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleOnline = () => setIsOnline(true);
		const handleOffline = () => setIsOnline(false);

		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return isOnline;
};
