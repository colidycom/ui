'use client';

import { cn } from '@colidy/ui-utils';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NProgress() {
	const pathname = usePathname();
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 100);
	}, [pathname]);

	return (
		<>
			<div className="max-w-screen overflow-hidden absolute inset-x-0 max-h-screen lg:-top-20 pointer-events-none -z-50">
				<svg
					className={cn(
						'w-full lg:min-w-[80rem] mx-auto -scale-y-100 contrast-150',
						{
							'opacity-20 dark:opacity-5':
								pathname !== '/' && pathname !== '/icons',
							'opacity-50 dark:opacity-25':
								pathname === '/' || pathname === '/icons',
						}
					)}
					viewBox="0 0 1440 900"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1739_2)">
						<g filter="url(#filter0_f_1739_2)">
							<ellipse
								cx="987.203"
								cy="967.25"
								rx={581}
								ry="356.5"
								transform="rotate(8.47676 987.203 967.25)"
								fill="#6b21a8"
							/>
						</g>
						<g filter="url(#filter2_f_1739_2)">
							<ellipse
								cx={405}
								cy={1050}
								rx={448}
								ry={332}
								fill="#2563eb"
							/>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_f_1739_2"
							x="110.117"
							y="304.308"
							width="1754.18"
							height="1325.88"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity={0}
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation={150}
								result="effect1_foregroundBlur_1739_2"
							/>
						</filter>
						<filter
							id="filter1_f_1739_2"
							x="343.172"
							y="510.984"
							width="1297.47"
							height="979.573"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity={0}
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation={100}
								result="effect1_foregroundBlur_1739_2"
							/>
						</filter>
						<filter
							id="filter2_f_1739_2"
							x={-343}
							y={418}
							width={1496}
							height={1264}
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity={0}
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation={150}
								result="effect1_foregroundBlur_1739_2"
							/>
						</filter>
						<filter
							id="filter3_f_1739_2"
							x={320}
							y={581}
							width={918}
							height={809}
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity={0}
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation={100}
								result="effect1_foregroundBlur_1739_2"
							/>
						</filter>
						<clipPath id="clip0_1739_2">
							<rect width={1440} height={900} fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<ProgressBar
				height="0.5px"
				color="hsl(215 72% 57%)"
				options={{ showSpinner: false }}
				shallowRouting
				delay={200}
			/>
		</>
	);
}
