'use client';

import { Button } from '@/ui-components/Button';
import Link from 'next/link';
import { ArrowRight01 } from '@colidy/icons/outline/ArrowRight01';
import { ArrowRight02 } from '@colidy/icons/outline/ArrowRight02';
import { Sparkles } from '@colidy/icons/solid/Sparkles';

export default function Home() {
	return (
		<>
			<div className="relative flex h-[calc(100vh-200px)] flex-col justify-center">
				<div className="flex items-center container">
					<div className="fixed bg-grid opacity-20 inset-0 z-[-2] pointer-events-none" />
					<div className="max-w-screen-md flex flex-col items-center mx-auto text-center justify-center">
						<Link
							href="/docs/hooks/use-toggle"
							className="mb-6 flex items-center gap-2 rounded-full bg-muted/10 px-3 py-2 text-xs text-muted hover:bg-muted/20 transition-colors backdrop-blur-sm"
						>
							<span className="flex items-center gap-1">
								<span className="text-colored">
									<Sparkles size={16} />
								</span>
								<span className="font-semibold text-foreground">
									Introducing Hooks
								</span>
								<span className="text-muted">
									&nbsp;&middot;&nbsp; Check it out
								</span>
							</span>
							<ArrowRight01 size={16} />
						</Link>
						<h1 className="font-extrabold space-y-2 text-[2rem] leading-tight md:text-5xl md:leading-[1.08] text-5xl">
							<NonMark>A collection of</NonMark>{' '}
							<Mark>professionally</Mark>{' '}
							<NonMark>designed UI components</NonMark>{' '}
							<NonMark>for</NonMark> <Mark>perfect</Mark>{' '}
							<NonMark>designs</NonMark>
						</h1>
						<p className="mt-4 text-muted max-w-lg">
							Create beautiful and consistent user interfaces
						</p>

						<Link href="/docs">
							<Button
								color="primary"
								className="mt-6 rounded-full !pr-2 gap-4"
							>
								<span className="mr-2">Get started</span>
								<div className="bg-primary text-foreground rounded-full flex justify-center items-center h-7 w-7">
									<ArrowRight02 size={16} />
								</div>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

function Mark({ children }: { children: React.ReactNode }) {
	return (
		<mark className="text-transparent bg-gradient-to-br from-blue-500 to-violet-700 bg-clip-text">
			{children}
		</mark>
	);
}
function NonMark({ children }: { children: React.ReactNode }) {
	return (
		<span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-700 dark:from-zinc-100 to-zinc-900 dark:to-zinc-400">
			{children}
		</span>
	);
}
