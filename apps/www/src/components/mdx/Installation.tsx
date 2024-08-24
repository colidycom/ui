'use server';

import Link from 'next/link';
import { CodeBlock } from './CodeBlock';
import { LinkedHeading } from './LinkedHeading';
import { Tab, TabList, TabPanel, Tabs } from '@/colidy-ui/Tabs';
import * as Demos from '../demos';
import { getPackages } from '@/utils/parse-packages';

export const Packages = async ({
	file,
	fileContent,
}: {
	file: string;
	fileContent: string;
}) => {
	const { packages } = getPackages(fileContent);

	return (
		<ul className="flex items-center flex-wrap gap-2 !p-0 !m-0">
			{packages.map((pkg: any) => {
				return (
					<li key={pkg.name} className="flex items-center gap-2 !p-0">
						<Link
							target={
								pkg.link.startsWith('http') ? '_blank' : '_self'
							}
							href={pkg.link}
							className="no-underline border px-3 py-2 rounded shadow-sm hover:bg-border/20 text-sm ring-offset-primary active:ring-2 active:ring-offset-2 active:ring-colored transition-all"
						>
							{pkg.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export const Code = async ({
	file,
	fileContent,
}: {
	file: string;
	fileContent: string;
}) => {
	const { colidyPackages } = getPackages(fileContent);

	const packageReplacedContent = colidyPackages.reduce(
		(acc: string, pkg: any) => {
			const regex = new RegExp(`from "${pkg.native}";`, 'g');
			return acc.replace(regex, `from "${pkg.name}";`);
		},
		fileContent
	);

	return (
		<CodeBlock content={packageReplacedContent} filename={`${file}.tsx`} />
	);
};

export const Installation = async ({ file }: { file: string }) => {
	let fileName = file;
	if (file.includes('demo')) {
		const fileKey = Object.keys(Demos).find(
			key => key.toLowerCase() === (file + 'demo').toLowerCase()
		);

		file = fileKey?.replace('Demo', '') || file;
	}

	fileName = file.charAt(0).toUpperCase() + file.slice(1);

	const res = await fetch(
		'https://api.github.com/repos/colidycom/ui/contents/apps/www/src/ui-components/' +
			fileName +
			'.tsx',
		{
			headers: {
				Authorization: 'token ' + process.env.GH_KEY,
			},
		}
	).catch(() => null);
	const json = await res?.json();
	const fileContent = Buffer.from(
		json?.content || Buffer.from('Error').toString('base64'),
		'base64'
	).toString();
	return (
		<div>
			<Tabs defaultValue="cli">
				<TabList>
					<Tab value="cli">CLI</Tab>
					<Tab value="manual">Manual</Tab>
				</TabList>
				<TabPanel value="cli">
					<CodeBlock
						language="bash"
						content={`npx @colidy/ui i ${file}`}
					/>
				</TabPanel>
				<TabPanel value="manual">
					<LinkedHeading level={3} id="packages">
						Packages
					</LinkedHeading>
					<Packages file={file} fileContent={fileContent} />

					<LinkedHeading level={3} id="code">
						Code
					</LinkedHeading>
					<Code file={file} fileContent={fileContent} />
				</TabPanel>
			</Tabs>
		</div>
	);
};
