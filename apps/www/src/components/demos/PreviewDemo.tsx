'use server';

import { Card } from '@/colidy-ui/Card';
import { CodeBlock } from '../mdx/CodeBlock';
import * as Demos from './';
import { TabList, Tabs, Tab, TabPanel } from '@/ui-components/Tabs';

export const PreviewDemo = async ({
	children,
	displayName,
}: {
	children: React.ReactNode;
	displayName: string;
}) => {
	const fileContent = (Demos as any)[displayName + 'String'];

	return (
		<Tabs defaultValue="preview">
			<TabList>
				<Tab value="preview">Preview</Tab>
				<Tab value="code">Code</Tab>
			</TabList>
			<TabPanel value="preview">
				<div className="not-prose relative z-20 w-full p-4 aspect-video bg-primary flex items-center justify-center rounded-xl ring-1 ring-muted/10">
					{children}
				</div>
			</TabPanel>
			<TabPanel value="code">
				<CodeBlock content={fileContent} />
			</TabPanel>
		</Tabs>
	);
};
