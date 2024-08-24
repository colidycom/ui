import { Navigation04 as Navigation04Outline } from '@colidy/icons/outline/Navigation04';
import { Navigation04 } from '@colidy/icons/solid/Navigation04';

import { Colors as ColorsOutline } from '@colidy/icons/outline/Colors';
import { Colors } from '@colidy/icons/solid/Colors';

import { Repair as RepairOutline } from '@colidy/icons/outline/Repair';
import { Repair } from '@colidy/icons/solid/Repair';

import { GridView as GridViewOutline } from '@colidy/icons/outline/GridView';
import { GridView } from '@colidy/icons/solid/GridView';

export default [
	{
		title: 'Getting Started',
		url: '/getting-started',
		icon: [Navigation04Outline, Navigation04],
		items: [
			{
				title: 'Introduction',
				url: '/getting-started/introduction',
			},
			{
				title: 'Guides',
				url: '/getting-started/guides',
				items: [
					{
						title: 'Next.js (App Router)',
						url: '/guides/nextjs-app',
					},
					{
						title: 'Next.js (Pages Router)',
						url: '/guides/nextjs-pages',
					},
				],
			},
			{
				title: 'More',
				items: [
					{
						title: 'Changelog',
						url: '/getting-started/changelog',
					},
				],
			},
		],
	},
	{
		title: 'Theming',
		url: '/theming',
		icon: [ColorsOutline, Colors],
		items: [
			{
				title: 'Colors',
				url: '/theming/colors',
			},
			{
				title: 'Dark Mode',
				url: '/theming/dark-mode',
			},
			{
				title: 'Customize Theme',
				url: '/theming/customize-theme',
			},
		],
	},
	{
		title: 'Components',
		url: '/components',
		icon: [GridViewOutline, GridView],
		items: [
			{
				title: 'Overlays',
				items: [
					{
						title: 'Dialog',
						url: '/components/dialog',
						updated: true,
					},
					{
						title: 'Accordion',
						url: '/components/accordion',
					},
				],
			},
			{
				title: 'Actions',
				items: [
					{
						title: 'Button',
						url: '/components/button',
					},
					{
						title: 'Ripple',
						url: '/components/ripple',
					},
				],
			},
			{
				title: 'Forms',
				items: [
					{
						title: 'CheckBox',
						url: '/components/checkbox',
					},
					{
						title: 'Select',
						url: '/components/select',
						updated: true,
					},
					{
						title: 'Switch',
						url: '/components/switch',
					},
					{
						title: 'Slider',
						url: '/components/slider',
						new: true,
					},
					{
						title: 'Text Field',
						url: '/components/textfield',
					},
				],
			},
			{
				title: 'Navigation',
				items: [
					{
						title: 'Dropdown',
						url: '/components/dropdown',
						updated: true,
					},
					{
						title: 'Drawer',
						url: '/components/drawer',
						new: true,
					},
				],
			},
			{
				title: 'Feedback',
				items: [
					{
						title: 'Alert Dialog',
						url: '/components/alert-dialog',
						updated: true,
					},
					{
						title: 'Popover',
						url: '/components/popover',
						updated: true,
					},
					{
						title: 'Tooltip',
						url: '/components/tooltip',
					},
					{
						title: 'Hover Card',
						url: '/components/hover-card',
					},
				],
			},
			{
				title: 'Data Display',
				items: [
					{
						title: 'Avatar',
						url: '/components/avatar',
					},
					{
						title: 'Badge',
						url: '/components/badge',
					},
					{
						title: 'Data Table',
						url: '/components/datatable',
					},
					{
						title: 'Table',
						url: '/components/table',
					},
				],
			},
			{
				title: 'Typography',
				items: [
					{
						title: 'Heading',
						url: '/components/heading',
					},
					{
						title: 'Label',
						url: '/components/label',
					},
					{
						title: 'Paragraph',
						url: '/components/paragraph',
					},
				],
			},
		],
	},
	{
		title: 'Hooks',
		url: '/hooks',
		icon: [RepairOutline, Repair],
		items: [
			{
				title: 'State Management',
				items: [
					{
						title: 'useToggle',
						url: '/hooks/use-toggle',
					},
					{
						title: 'useLocalStorage',
						url: '/hooks/use-local-storage',
					},
					{
						title: 'useForm',
						url: '/hooks/use-form',
					},
					{
						title: 'usePrevious',
						url: '/hooks/use-previous',
					},
					{
						title: 'useDebounce',
						url: '/hooks/use-debounce',
					},
				],
			},
			{
				title: 'UI/UX',
				items: [
					{
						title: 'useDarkMode',
						url: '/hooks/use-dark-mode',
						experimental: true,
					},
					{
						title: 'useHover',
						url: '/hooks/use-hover',
					},
					{
						title: 'useOnClickOutside',
						url: '/hooks/use-on-click-outside',
					},
				],
			},
			{
				title: 'Performance',
				items: [
					{
						title: 'useInterval',
						url: '/hooks/use-interval',
					},
					{
						title: 'useTimeout',
						url: '/hooks/use-timeout',
					},
				],
			},
			{
				title: 'API/Data Fetching',
				items: [
					{
						title: 'useFetch',
						url: '/hooks/use-fetch',
					},
				],
			},
			{
				title: 'Document/Browser',
				items: [
					{
						title: 'useDocumentTitle',
						url: '/hooks/use-document-title',
						experimental: true,
					},
					{
						title: 'useScrollPosition',
						url: '/hooks/use-scroll-position',
					},
					{
						title: 'useViewport',
						url: '/hooks/use-viewport',
					},
					{
						title: 'useKeyPress',
						url: '/hooks/use-key-press',
					},
				],
			},
			{
				title: 'Network',
				items: [
					{
						title: 'useOnlineStatus',
						url: '/hooks/use-online-status',
						experimental: true,
					},
				],
			},
		],
	},
];
