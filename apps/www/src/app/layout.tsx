import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import NProgress from '@/components/ProgressBar';
import Search from '@/components/Search';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s — ColidyUI',
		default: 'Full-featured UI components for Next.js',
	},
	description:
		'ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.',
	keywords: [
		'next.js',
		'react',
		'ui',
		'components',
		'design',
		'system',
		'colidy',
		'colidyui',
		'accessibility',
		'developer',
		'experience',
		'tailwind',
		'css',
		'typescript',
		'javascript',
		'web',
		'development',
	],
	authors: [
		{
			name: 'Colidy',
			url: 'https://colidy.com',
		},
	],
	creator: 'shadcn',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ui.colidy.com',
		title: 'ColidyUI',
		description:
			'ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.',
		siteName: 'ColidyUI',
		images: [
			{
				url: 'https://ui.colidy.com/og.png',
				width: 1200,
				height: 630,
				alt: 'ColidyUI',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ColidyUI',
		description:
			'ColidyUI is a collection of full-featured UI components for Next.js, designed with a focus on developer experience and accessibility.',
		images: [
			{
				url: 'https://ui.colidy.com/og.png',
				width: 1200,
				height: 630,
				alt: 'ColidyUI',
			},
		],
		creator: '@colidycom',
	},
	icons: {
		icon: '/favicon.ico',
	},
	manifest: `https://ui.colidy.com/site.webmanifest`,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-N0BJVR3ZM0"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-N0BJVR3ZM0');
                `,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TH7JL9NZ');
                `,
					}}
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					storageKey="colidy-theme"
				>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-TH7JL9NZ"
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						></iframe>
					</noscript>
					<NProgress>
						<Navbar />
						<Sidebar onMobile />
						{children}
						<Footer />
				</NProgress>
				</ThemeProvider>
			</body>
		</html>
	);
}
