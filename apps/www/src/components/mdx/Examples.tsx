'use client';

import { Suspense, useEffect, useState } from 'react';
import { Card } from '@/colidy-ui/Card';
import { CodeBlock } from './CodeBlock';
import { LinkedHeading } from './LinkedHeading';
import { Paragraph } from '@/colidy-ui/Paragraph';
import * as Demos from '@/demos';

export const Examples = ({ file }: { file: string }) => {
	const componentData = (Demos as any)?.[file + 'Config'];
	if (!componentData) return <div>Error loading component data</div>;

	const ExampleNameToFunctionName = (name: string) => {
		const words = name.split(' ');
		const capitalizedWords = words.map(
			word => word[0].toUpperCase() + word.slice(1)
		);
		return capitalizedWords.join('');
	};

	if (!componentData.examples) return null;
	return (
		<div className="space-y-12">
			{componentData.examples.map((example: any, index: number) => (
				<div key={index}>
					<div className="mb-4">
						<LinkedHeading
							level={3}
							id={
								example.title
									.toLowerCase()
									.replace(/ /g, '-') as string
							}
						>
							{example.title}
						</LinkedHeading>
						<Paragraph>{example.description}</Paragraph>
					</div>

					<div className="ring-1 ring-muted/10 rounded-xl overflow-hidden">
						<div className="relative z-20 w-full p-4 aspect-video bg-primary flex items-center justify-center">
							<Suspense fallback={<div>Loading...</div>}>
								<example.component />
							</Suspense>
						</div>

						<CodeBlock
							content={`${
								example.imports
							}\n\nexport default function ${ExampleNameToFunctionName(
								example.title
							)}() {\n    return (\n        ${
								example.code
							}\n    );\n}`}
							filename={`example.tsx`}
							className="rounded-t-none ring-0 border-t border-muted/10"
							isExample
						/>
					</div>
				</div>
			))}
		</div>
	);
};
