'use client';

import { useOnlineStatus } from '@colidy/hooks';

export const Demo = () => {
	const isOnline = useOnlineStatus();

	return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useOnlineStatus } from '@colidy/hooks';

export const Demo = () => {
	const isOnline = useOnlineStatus();

	return <p>{isOnline ? 'Online' : 'Offline'}</p>;
};

`;