'use client';

import { useSidebar } from '@/states/sidebar';
import { cn } from '@colidy/ui-utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { pages as _pages } from '@/utils/pages';
import { Badge } from '@/colidy-ui/Badge';
import docsItems from '@/utils/docs-items';

export const Sidebar = ({ onMobile }: { onMobile?: boolean }) => {
	const [isMobile, setIsMobile] = useState(false);
	const isOpen = useSidebar(state => state.open);
	const toggleSidebar = useSidebar(state => state.toggleSidebar);
	const pathname = usePathname();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const pages = _pages(pathname);

	const activeSide = docsItems.find(d =>
		d.items.some((i: any) => {
			if (i.items) {
				return i.items.some((subItem: any) =>
					pathname.startsWith('/docs' + subItem.url)
				);
			}

			return pathname.startsWith('/docs' + i.url);
		})
	);

	const items = activeSide?.items || [];

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-[99] bg-black/50 lg:hidden"
					/>
				)}
			</AnimatePresence>
			<div
				className={cn(
					'-translate-x-full bg-primary lg:bg-transparent transition-all lg:translate-x-0 top-0 fixed z-[100] inset-0 lg:top-[64px] left-[max(0px,calc(50%-49rem))] right-auto w-full border-r lg:border-none max-w-[19rem] pb-10 overflow-y-auto',
					{
						'translate-x-0': isOpen,
						'lg:hidden': !pathname.startsWith('/docs'),
						'block lg:hidden': onMobile,
					}
				)}
			>
				<div className="lg:hidden flex items-center justify-between gap-4 py-4 pl-8 pr-6">
					<Link
						className="mr-3 flex items-center gap-2 flex-none overflow-hidden"
						href="/"
					>
						<span className="sr-only">ColidyUI Home Page</span>

						<img
							src="/white-logo.png"
							alt="ColidyUI"
							className="w-auto h-8 invert dark:filter-none"
						/>
						<span className="text-xl font-semibold">ColidyUI</span>
					</Link>
					<button
						type="button"
						className="flex items-center justify-center w-10 h-10 rounded-md lg:hidden bg-zinc-500/10"
						onClick={toggleSidebar}
					>
						<span className="sr-only">Navigation</span>
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
				</div>
				<nav
					id="nav"
					className="lg:text-sm lg:leading-6 relative overflow-y-auto pl-8 pr-6 pt-10"
				>
					<ul>
						<li>
							<ul className="flex flex-col gap-2">
								{docsItems.map((item: any, index) => {
									const [Outline, Solid] = item.icon;
									return (
										<Link
											href={
												'/docs' +
													(item.items?.[0]?.items?.[0]
														?.url ||
														item.items?.[0]?.url) ||
												''
											}
											key={index}
										>
											<li
												key={index}
												className={cn(
													'cursor-pointer flex items-center gap-2 group text-muted hover:text-foreground',
													{
														'text-foreground font-semibold':
															activeSide?.title ===
															item.title,
													}
												)}
											>
												<div
													className={cn(
														'w-8 h-8 rounded border border-zinc-500/30 flex justify-center items-center transition-all',
														{
															'bg-colored border-colored text-white':
																activeSide?.title ===
																item.title,
															'text-gray-700 dark:text-gray-500 bg-zinc-500/10 group-hover:bg-zinc-500/20 group-hover:text-foreground':
																activeSide?.title !==
																item.title,
														}
													)}
												>
													{activeSide?.title ===
													item.title ? (
														<Solid size={16} />
													) : (
														<Outline size={16} />
													)}
												</div>
												<p className="text-sm font-semibold transition-colors">
													{item.title}
												</p>
											</li>
										</Link>
									);
								})}
							</ul>
						</li>
						{/* {isMobile && (
							<li className="mt-6 lg:mt-8 lg:hidden">
								<ul className="space-y-1">
									{pages.map(item => (
										<li
											key={item.href}
											className="relative group"
										>
											<Link
												className={cn(
													'block px-2.5 py-1.5 -ml-2.5 transition-all rounded',
													{
														'bg-colored/5 text-colored font-semibold':
															item.isActive(),
														'hover:bg-zinc-500/10 text-muted hover:text-foreground':
															!item.isActive(),
													}
												)}
												href={item.href}
											>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</li>
						)} */}
						<li className="mt-6 lg:mt-8">
							<ul className="space-y-1">
								{items?.map((item: any) =>
									item?.items ? (
										<li
											key={item?.url || item?.title || ''}
											className="pb-3 last:pb-0 pt-4 first:pt-0"
										>
											<p className="text-foreground text-sm px-0.5 mb-2">
												{item.title}
											</p>
											<ul className="space-y-1">
												{(item as any)?.items?.map(
													(subItem: any) => (
														<RenderItem
															key={subItem.href}
															item={subItem}
															pathname={pathname}
														/>
													)
												)}
											</ul>
										</li>
									) : (
										<RenderItem
											key={item.href}
											item={item}
											pathname={pathname}
										/>
									)
								)}
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

function RenderItem({ item, pathname }: { item: any; pathname: string }) {
	const isActive = () => {
		if (pathname === '/docs' + item.url) {
			return true;
		}

		if (item.items) {
			return item.items.some(
				(subItem: any) => pathname === '/docs' + subItem.url
			);
		}

		return false;
	};

	const isExperimental = item?.experimental;
	const isDeprecated = item?.deprecated;
	const isBeta = item?.beta;
	const isNew = item?.new;
	const isUpdated = item?.updated;

	const getBadgeProps = () => {
		if (isExperimental) return { color: 'amber', children: 'Experimental' };
		if (isDeprecated) return { color: 'red', children: 'Deprecated' };
		if (isBeta) return { color: 'cyan', children: 'Beta' };
		if (isNew) return { color: 'green', children: 'New' };
		if (isUpdated) return { color: 'slate', children: 'Updated' };

		return null;
	};
	return (
		<li key={item.href} className="relative group">
			<Link
				className={cn(
					'px-2.5 py-1.5 -ml-2 transition-all rounded flex items-center gap-2',
					{
						'bg-colored/5 text-colored font-semibold': isActive(),
						'hover:bg-zinc-500/10 text-muted hover:text-foreground':
							!isActive(),
					}
				)}
				href={'/docs' + item.url}
			>
				{item.title}
				{getBadgeProps() && <Badge {...(getBadgeProps() as any)} />}
			</Link>
		</li>
	);
}
