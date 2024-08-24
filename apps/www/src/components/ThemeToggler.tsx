import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Ripple } from '@/colidy-ui/Ripple';
import { useEffect, useState } from 'react';

export default function ThemeToggler() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Ripple>
			{(onRippleClick, rippleElements) => (
				<button
					type="button"
					aria-label="Theme"
					onClick={e => {
						setTheme(theme === 'dark' ? 'light' : 'dark');
						onRippleClick(e);
					}}
					className="flex items-center hover:bg-muted/20 justify-center rounded-full h-full aspect-square relative overflow-hidden transition-colors"
				>
					{theme === 'light' && (
						<motion.span
							layoutId="dark"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								width={16}
								height={16}
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
								/>
							</svg>
						</motion.span>
					)}
					{theme === 'dark' && (
						<motion.span
							layoutId="light"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
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
									d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</motion.span>
					)}
					{rippleElements}
				</button>
			)}
		</Ripple>
	);
}
