'use client';

import { useState } from 'react';
import Highlighter from './Highlight';
import { cn } from '@colidy/ui-utils';
import { Upload05 } from '@colidy/icons/outline/Upload05';
import { Copy01 } from '@colidy/icons/outline/Copy01';

export const CodeBlock = ({
	content,
	filename,
	language,
	className,
	isExample,
	...props
}: {
	content: string;
	filename?: string;
	language?: string;
	className?: string;
	isExample?: boolean;
}) => {
	const [expanded, setExpanded] = useState(false);
	const isExpandable = isExample
		? content.length > 100
			? true
			: false
		: content.length > 1000
		? true
		: false;

	return (
		<div
			className={cn(
				'not-prose bg-primary rounded-xl ring-1 ring-muted/10 relative overflow-hidden',
				className
			)}
		>
			{filename && (
				<div
					className={
						'relative z-[1] flex bg-secondary dark:bg-black/40 text-gray-400 text-xs leading-6 border-b border-muted/20 font-medium'
					}
				>
					<div className="flex-none border-b px-4 pt-2.5 pb-2 flex items-center text-colored border-colored">
						{filename}
					</div>
					<div
						className={cn(
							'flex-1 rounded-tl-lg flex justify-end items-center pr-4'
						)}
					>
						{isExpandable && (
							<ExpandButton
								expanded={expanded}
								setExpanded={setExpanded}
							/>
						)}
						<CopyButton>{content}</CopyButton>
					</div>
				</div>
			)}

			{!filename && (
				<div
					className={cn(
						'flex-1 flex justify-end items-center absolute right-5 top-5 z-[1]'
					)}
				>
					{isExpandable && (
						<ExpandButton
							expanded={expanded}
							setExpanded={setExpanded}
						/>
					)}
					<CopyButton>{content}</CopyButton>
				</div>
			)}
			<div className="text-gray-50 p-5 min-w-full text-sm leading-6 overflow-x-auto children:!my-0 children:!shadow-none children:!bg-transparent">
				<div
					style={{
						maxHeight: isExample
							? expanded
								? '400px'
								: '100px'
							: expanded
							? '80vh'
							: '400px',
						transition:
							'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					}}
				>
					<Highlighter language={language || 'javascript'}>
						{content}
					</Highlighter>
				</div>
			</div>
			{isExpandable && !expanded && (
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/50 to-transparent h-full" />
			)}
		</div>
	);
};

function ExpandButton({
	expanded,
	setExpanded,
}: {
	expanded: boolean;
	setExpanded: (expanded: boolean) => void;
}) {
	return (
		<button
			onClick={() => setExpanded(!expanded)}
			className="hover:bg-border/20 text-foreground backdrop-blur text-sm px-2 py-2 h-8 flex items-center justify-center rounded transition-all"
		>
			<span
				className={cn('transition-all', {
					'transform rotate-180': expanded,
				})}
			>
				<Upload05 size={16} />
			</span>
		</button>
	);
}

function CopyButton({ children }: { children: string }) {
	return (
		<button
			onClick={() => {
				navigator.clipboard.writeText(children);
			}}
			className="hover:bg-border/20 text-foreground backdrop-blur text-sm px-2 py-2 h-8 flex items-center justify-center rounded transition-all"
		>
			<Copy01 size={16} />
		</button>
	);
}
