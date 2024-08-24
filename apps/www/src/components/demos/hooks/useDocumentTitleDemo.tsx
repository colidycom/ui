'use client';

import { useDocumentTitle } from '@colidy/hooks';

export const Demo = () => {
	const { title, updateTitle } = useDocumentTitle('Initial Title');

	return (
		<div>
			<p>Current Title: {title}</p>
			<button onClick={() => updateTitle('New Title')}>
				Update Title
			</button>
		</div>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';

import { useDocumentTitle } from '@colidy/hooks';

export const Demo = () => {
	const { title, updateTitle } = useDocumentTitle('Initial Title');

	return (
		<div>
			<p>Current Title: {title}</p>
			<button onClick={() => updateTitle('New Title')}>
				Update Title
			</button>
		</div>
	);
};

`;