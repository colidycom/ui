import Link from 'next/link';
import { Heading } from '@/colidy-ui/Heading';
import { Paragraph } from '@/colidy-ui/Paragraph';

export const Header = ({
	category,
	title,
	description,
	buttons,
}: Readonly<{
	category: string;
	title: string;
	description: string;
	buttons?: { label: string; href: string }[];
}>) => {
	return (
		<header id="header" className="relative">
			<div>
				<Paragraph className="text-colored">
					{category
						.split('-')
						.map(
							word => word.charAt(0).toUpperCase() + word.slice(1)
						)
						.join(' ')}
				</Paragraph>
				<div className="flex items-center">
					<Heading size="h1" className="mt-2 sm:text-4xl/10">
						{title}
					</Heading>
				</div>
			</div>
			<Paragraph className="mt-2 sm:text-base">{description}</Paragraph>
			{buttons && (
				<div className="flex flex-col sm:flex-row mt-6 gap-4">
					{buttons.map((button, i) => (
						<Link
							key={i}
							className="bg-zinc-500/10 px-3 py-1.5 rounded text-sm hover:bg-zinc-500/20 active:bg-zinc-500/30 transition-colors flex items-center gap-2"
							href={button.href}
							target={
								button.href.startsWith('http')
									? '_blank'
									: '_self'
							}
						>
							{button.label === 'Documentation' ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width={16}
									height={16}
									color={'currentColor'}
									fill={'none'}
								>
									<path
										d="M18 16L19.8398 17.5858C20.6133 18.2525 21 18.5858 21 19C21 19.4142 20.6133 19.7475 19.8398 20.4142L18 22"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M14 16L12.1602 17.5858C11.3867 18.2525 11 18.5858 11 19C11 19.4142 11.3867 19.7475 12.1602 20.4142L14 22"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M20 13.0032L20 7.8199C20 6.12616 20 5.27929 19.732 4.60291C19.3013 3.51555 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848L3 14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							) : null}
							{button.label === 'API Reference' ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width={16}
									height={16}
									color={'currentColor'}
									fill={'none'}
								>
									<path
										d="M4.51255 19.4866C7.02498 21.8794 10.016 20.9223 11.2124 19.9532C11.8314 19.4518 12.1097 19.1277 12.3489 18.8884C13.1864 18.1107 13.1326 17.3331 12.5882 16.711C12.3704 16.462 10.9731 15.1198 9.63313 13.7439C8.93922 13.0499 8.46066 12.5595 8.05149 12.1647C7.50354 11.6185 7.02499 10.9922 6.30715 11.0101C5.64913 11.0101 5.17057 11.5904 4.57237 12.1886C3.88422 12.8767 3.37598 13.7439 3.19652 14.5216C2.65814 16.7947 3.49562 18.4098 4.51255 19.4866ZM4.51255 19.4866L2.00012 21.999"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										d="M19.4867 4.51472C16.9736 2.12078 13.9929 3.09593 12.7962 4.06548C12.177 4.56712 11.8987 4.89138 11.6593 5.13078C10.8216 5.90881 10.8755 6.68683 11.42 7.30926C11.4983 7.39881 11.7292 7.62975 12.055 7.95281M19.4867 4.51472C20.504 5.59199 21.3528 7.22547 20.8142 9.49971C20.6347 10.2777 20.1264 11.1453 19.438 11.8338C18.8397 12.4323 18.361 13.0128 17.7028 13.0128C16.9847 13.0308 16.6121 12.5115 16.064 11.9651M19.4867 4.51472L21.9999 2.0011M16.064 11.9651C15.6547 11.5701 15.07 10.9721 14.3759 10.2777C13.5175 9.39612 12.6355 8.52831 12.055 7.95281M16.064 11.9651L14.5024 13.4896M10.5114 9.50609L12.055 7.95281"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							) : null}
							{button.label}
						</Link>
					))}
				</div>
			)}
		</header>
	);
};
