'use client';
import {
	Popover,
	PopoverBody,
	PopoverClose,
	PopoverContent,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from '@/colidy-ui/Popover';
import { Label } from '@/colidy-ui/Label';
import { TextField } from '@/colidy-ui/TextField';
import { useState } from 'react';

export const Demo = () => {
	const [width, setWidth] = useState('100%');
	const [maxWidth, setMaxWidth] = useState('300px');
	const [height, setHeight] = useState('25px');
	const [maxHeight, setMaxHeight] = useState('none');

	return (
		<main className="max-w-lg">
			<Popover>
				<PopoverTrigger>
					<button className="bg-foreground px-4 py-2 rounded flex justify-center items-center gap-6 w-auto h-12 !outline-none text-primary backdrop-blur">
						Edit dimensions
					</button>
				</PopoverTrigger>
				<PopoverContent withArrow>
					<PopoverHeader withClose>
						<PopoverTitle size="h3">Dimensions</PopoverTitle>
					</PopoverHeader>
					<PopoverBody>
						<div className="grid grid-cols-2 gap-4 items-center w-full">
							<Label label="Width" className="!m-0 !p-0" />
							<TextField
								value={width}
								onChange={e => setWidth(e.target.value)}
								size="sm"
							/>
							<Label label="Max Width" className="!m-0 !p-0" />
							<TextField
								value={maxWidth}
								onChange={e => setMaxWidth(e.target.value)}
								size="sm"
							/>
							<Label label="Height" className="!m-0 !p-0" />
							<TextField
								value={height}
								onChange={e => setHeight(e.target.value)}
								size="sm"
							/>
							<Label label="Max Height" className="!m-0 !p-0" />
							<TextField
								value={maxHeight}
								onChange={e => setMaxHeight(e.target.value)}
								size="sm"
							/>
						</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</main>
	);
};

// @end-example
export default {
	props: null,
	examples: null,
};

// @start-demo-string
export const DemoString = `'use client';
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger,
} from '@/colidy-ui/Popover';
import { Label } from '@/colidy-ui/Label';
import { TextField } from '@/colidy-ui/TextField';
import { useState } from 'react';

export const Demo = () => {
	const [width, setWidth] = useState('100%');
	const [maxWidth, setMaxWidth] = useState('300px');
	const [height, setHeight] = useState('25px');
	const [maxHeight, setMaxHeight] = useState('none');

	return (
		<div className="max-w-lg">
			<Popover>
				<PopoverTrigger>
					<button className="btn">Open Popover</button>
				</PopoverTrigger>
				<PopoverContent withArrow>
					<div className="flex justify-between items-center">
						<h3 className="text-sm">Dimensions</h3>
						<PopoverClose>
							<button className="hover:bg-zinc-500/10 transition-colors cursor-pointer w-6 h-6 flex justify-center items-center rounded-sm">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width={16}
									height={16}
									color={'currentColor'}
									fill={'none'}
								>
									<path
										d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</PopoverClose>
					</div>
					<div className="grid grid-cols-2 gap-4 items-center mt-6 w-64">
						<Label label="Width" className="!m-0 !p-0" />
						<TextField
							value={width}
							onChange={e => setWidth(e.target.value)}
							size="sm"
						/>
						<Label label="Max Width" className="!m-0 !p-0" />
						<TextField
							value={maxWidth}
							onChange={e => setMaxWidth(e.target.value)}
							size="sm"
						/>
						<Label label="Height" className="!m-0 !p-0" />
						<TextField
							value={height}
							onChange={e => setHeight(e.target.value)}
							size="sm"
						/>
						<Label label="Max Height" className="!m-0 !p-0" />
						<TextField
							value={maxHeight}
							onChange={e => setMaxHeight(e.target.value)}
							size="sm"
						/>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

`;
