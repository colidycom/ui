'use client';

import { useSearch } from '@/states/search';
import { AnimatePresence } from 'framer-motion';
import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from '@/colidy-ui/Dialog';
import { TextField } from '@/colidy-ui/TextField';
import { DocumentCode } from '@colidy/icons/outline/DocumentCode';
import { Grid } from '@colidy/icons/outline/Grid';
import { ArrowRight01 } from '@colidy/icons/outline/ArrowRight01';
import { Label } from '@/ui-components/Label';
import { cn } from '@colidy/ui-utils';

export default function Search({ children }: any) {
	const q = useSearch(state => state.q);
	const results = useSearch(state => state.results);
	const setResults = useSearch(state => state.setResults);
	const handleOnChange = useSearch(state => state.handleOnChange);
	const isLoading = useSearch(state => state.isLoading);

	const getByType = (type: string, data: any[]) => {
		return data.filter(item => item.type === type);
	};

	return (
		<>
			<Dialog>
				<DialogTrigger>{children}</DialogTrigger>
				<DialogContent className="flex flex-col relative border z-50 w-full box-border bg-popover outline-none mx-1 my-1 sm:mx-6 sm:my-16 shadow-sm">
					<DialogHeader className="p-0 !w-full">
						<label
							htmlFor="search"
							className="w-full flex items-center justify-between p-4 text-lg bg-transparent"
						>
							<span className="pr-4 flex justify-center items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width={16}
									height={16}
									color={'currentColor'}
									fill={'none'}
								>
									<path
										d="M17.5 17.5L22 22"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
							<input
								type="text"
								value={q}
								onChange={handleOnChange}
								className="w-full bg-transparent !outline-none placeholder-muted text-sm/6"
								placeholder="Search in documentation..."
								name="search"
								id="search"
								autoComplete="off"
							/>
							<kbd className="text-xs/6 text-muted bg-muted/10 border px-2 rounded">
								ESC
							</kbd>
						</label>
					</DialogHeader>
					<DialogBody className="p-2">
						{isLoading ? (
							<div className="text-center text-muted text-sm/6">
								Loading...
							</div>
						) : results.length > 0 ? (
							<ul className="space-y-4 mt-6">
								<li>
									<p className="px-6 text-foreground text-sm font-semibold">
										Pages
									</p>
									<ul className="space-y-1 mt-2">
										{getByType('page', results).map(
											result => (
												<Result
													result={result}
													key={result.id}
												/>
											)
										)}
									</ul>
								</li>
								<hr className="bg-border/20" />
								<li>
									<p className="px-6 text-foreground text-sm font-semibold">
										Headings
									</p>
									<ul className="space-y-1 mt-2">
										{getByType('heading', results).map(
											result => (
												<Result
													result={result}
													key={result.id}
												/>
											)
										)}
									</ul>
								</li>
							</ul>
						) : q.length > 2 ? (
							<div className="text-center text-muted text-sm/6">
								No results found for &quot;{q}&quot;
							</div>
						) : (
							<div className="text-center text-muted text-sm/6">
								Please type something to search...
							</div>
						)}
					</DialogBody>
					<DialogFooter className="p-4 border-t border-border/20">
						<span className="text-muted text-xs/6">
							&copy; {new Date().getFullYear()} ColidyUI. All
							rights reserved.
						</span>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

function Result({ result }: { result: any }) {
	return (
		<li key={result.id}>
			<a
				href={result.href}
				className="group cursor-pointer group flex items-center justify-between space-x-2 p-4 rounded hover:bg-muted/10 transition-colors"
			>
				<div
					className={cn('flex gap-3', {
						'items-center': !result.description,
					})}
				>
					<div className="h-8 aspect-square rounded-full bg-colored/10 text-colored flex items-center justify-center transition-colors">
						{result.type === 'page' && (
							<span>
								<DocumentCode size={16} />
							</span>
						)}
						{result.type === 'heading' && (
							<span>
								<Grid size={16} />
							</span>
						)}
					</div>
					<div>
						<h4
							className="text-sm/6 font-semibold"
							dangerouslySetInnerHTML={{ __html: result.title }}
						/>
						<p
							className="text-muted text-xs/6 line-clamp-1 font-medium"
							dangerouslySetInnerHTML={{
								__html: result.description,
							}}
						/>
					</div>
				</div>
				<span className="text-foreground">
					<ArrowRight01 size={16} />
				</span>
			</a>
		</li>
	);
}
