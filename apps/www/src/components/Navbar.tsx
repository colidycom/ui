'use client';

import { useSidebar } from '@/states/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@colidy/ui-utils';
import { pages as _pages } from '@/utils/pages';
import { Ripple } from '@/colidy-ui/Ripple';
import Search from './Search';
import ThemeToggler from './ThemeToggler';
import { useEffect } from 'react';
import { useScrolled } from '@/states/scrolled';

export default function Navbar() {
	const scrolled = useScrolled(state => state.scrolled);
	const setScrolled = useScrolled(state => state.setScrolled);

	const toggleSidebar = useSidebar(state => state.toggleSidebar);
	const pathname = usePathname();
	const pages = _pages(pathname);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled, setScrolled]);

	return (
		<div
			className={cn('z-[98] w-full flex-none lg:z-50 lg:bg-transparent', {
				'bg-secondary/50 backdrop-blur-sm transition-colors lg:backdrop-blur-none lg:bg-transparent':
					scrolled,
				'sticky top-0': pathname.startsWith('/docs'),
			})}
		>
			<div className="container">
				<div className="py-4 grid grid-cols-12">
					<Link
						className="col-span-6 lg:col-span-2 mr-3 flex items-center gap-2 flex-none overflow-hidden"
						href="/"
					>
						<span className="sr-only">ColidyUI Home Page</span>
						<img
							src="/white-logo.png"
							alt="ColidyUI"
							className="w-auto h-8 invert dark:filter-none"
						/>
						<span className="text-xl font-semibold text-foreground">
							ColidyUI
						</span>
					</Link>
					{pathname.startsWith('/docs') && (
						<motion.nav
							className={cn(
								'lg:col-span-8 hidden lg:flex items-center justify-between lg:justify-center'
							)}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full p-0.5 w-min text-sm leading-6 font-semibold text-muted relative hidden lg:flex items-center justify-center">
								<ul className="flex space-x-1">
									{pages.map(page => (
										<Link
											href={page.href}
											as={motion.li as any}
											key={page.href}
											className={cn(
												'relative rounded-full px-4 py-2 h-full w-full',
												{
													'hover:text-foreground transition-colors hover:bg-zinc-500/10':
														!page.isActive() &&
														!page.disabled,
													'text-primary duration-500':
														page.isActive() &&
														!page.disabled,
													'cursor-not-allowed opacity-50':
														page.disabled,
												}
											)}
										>
											<span className="relative z-[1]">
												{page.title}
											</span>
											{page.isActive() && (
												<motion.div
													className="absolute inset-0 bg-foreground rounded-full min-w-[1.5rem] min-h-[1.5rem]"
													layoutId={
														scrolled
															? undefined
															: 'active'
													}
												/>
											)}
										</Link>
									))}
								</ul>
							</div>
						</motion.nav>
					)}

					{!pathname.startsWith('/docs') && (
						<>
							{scrolled && (
								<motion.nav
									className={cn(
										'lg:col-span-8 hidden lg:flex items-center justify-between lg:justify-center',
										'fixed top-5 inset-x-0 z-[20]'
									)}
									initial={{ y: -100 }}
									animate={{ y: 0 }}
									transition={{ duration: 0.2 }}
								>
									<div className="bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full p-0.5 w-min text-sm leading-6 font-semibold text-muted relative hidden lg:flex items-center justify-center">
										<ul className="flex space-x-1">
											{pages.map(page => (
												<Link
													href={page.href}
													as={motion.li as any}
													key={page.href}
													className={cn(
														'relative rounded-full px-4 py-2 h-full w-full',
														{
															'hover:text-foreground transition-colors hover:bg-zinc-500/10':
																!page.isActive() &&
																!page.disabled,
															'text-primary duration-500':
																page.isActive() &&
																!page.disabled,
															'cursor-not-allowed opacity-50':
																page.disabled,
														}
													)}
												>
													<span className="relative z-[1]">
														{page.title}
													</span>
													{page.isActive() && (
														<motion.div
															className="absolute inset-0 bg-foreground rounded-full min-w-[1.5rem] min-h-[1.5rem]"
															layoutId={
																scrolled
																	? undefined
																	: 'active'
															}
														/>
													)}
												</Link>
											))}
										</ul>
									</div>
								</motion.nav>
							)}

							{!scrolled && (
								<motion.nav
									className={cn(
										'lg:col-span-8 hidden lg:flex items-center justify-between lg:justify-center'
									)}
									initial={{ y: -100 }}
									animate={{ y: 0 }}
									transition={{ duration: 0.5 }}
								>
									<div className="bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full p-0.5 w-min text-sm leading-6 font-semibold text-muted relative hidden lg:flex items-center justify-center">
										<ul className="flex space-x-1">
											{pages.map(page => (
												<Link
													href={page.href}
													as={motion.li as any}
													key={page.href}
													className={cn(
														'relative rounded-full px-4 py-2 h-full w-full',
														{
															'hover:text-foreground transition-colors hover:bg-zinc-500/10':
																!page.isActive() &&
																!page.disabled,
															'text-primary duration-500':
																page.isActive() &&
																!page.disabled,
															'cursor-not-allowed opacity-50':
																page.disabled,
														}
													)}
												>
													<span className="relative z-[1]">
														{page.title}
													</span>
													{page.isActive() && (
														<motion.div
															className="absolute inset-0 bg-foreground rounded-full min-w-[1.5rem] min-h-[1.5rem]"
															layoutId={
																scrolled
																	? undefined
																	: 'active'
															}
														/>
													)}
												</Link>
											))}
										</ul>
									</div>
								</motion.nav>
							)}
						</>
					)}
					<div
						className={cn(
							'h-10 col-span-6 lg:col-span-2 flex justify-end items-center',
							{
								'col-span-8 lg:col-span-10':
									scrolled && !pathname.startsWith('/docs'),
							}
						)}
					>
						<div className="flex items-center gap-1 w-min rounded-full p-px h-full">
							<div className="lg:hidden bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full h-full flex items-center justify-center">
								<Ripple>
									{(onRippleClick, rippleElements) => (
										<button
											type="button"
											className="flex items-center hover:bg-muted/20 justify-center rounded-full h-full aspect-square relative overflow-hidden transition-colors"
											onClick={e => {
												onRippleClick(e);
												toggleSidebar();
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width={16}
												height={16}
												color={'currentColor'}
												fill={'none'}
											>
												<path
													d="M4 5L20 5"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M4 12L20 12"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M4 19L20 19"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											{rippleElements}
										</button>
									)}
								</Ripple>
							</div>

							<Search>
								<div className="bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full h-full flex items-center justify-center">
									<Ripple>
										{(onRippleClick, rippleElements) => (
											<button
												type="button"
												className="flex items-center hover:bg-muted/20 justify-center rounded-full h-full aspect-square relative overflow-hidden transition-colors"
												onClick={onRippleClick}
											>
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
												{rippleElements}
											</button>
										)}
									</Ripple>
								</div>
							</Search>

							<div className="bg-white/50 dark:bg-zinc-500/10 backdrop-blur-sm rounded-full h-full flex items-center justify-center">
								<ThemeToggler />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
