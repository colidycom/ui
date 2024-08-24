export const pages = (pathname: string) => [
	{
		title: 'Documentation',
		isActive: () =>
			pathname.startsWith('/docs') &&
			!pathname.startsWith('/docs/components') &&
			!pathname.startsWith('/docs/theming'),
		href: '/docs/getting-started/introduction',
		disabled: false,
	},
	{
		title: 'Components',
		isActive: () => pathname.startsWith('/docs/components'),
		href: '/docs/components/button',
		disabled: false,
	},
	{
		title: 'Customization',
		href: '/docs/theming/customize-theme',
		isActive: () => pathname.startsWith('/docs/theming'),
		disabled: false,
	},
];
