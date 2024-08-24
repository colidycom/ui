import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import merge from 'lodash.merge';

export const colors = [
	'slate',
	'gray',
	'zinc',
	'neutral',
	'stone',
	'red',
	'orange',
	'amber',
	'yellow',
	'lime',
	'green',
	'emerald',
	'teal',
	'cyan',
	'sky',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose',
];

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const withColidyUI = (tailwindConfig: any) => {
	return merge(tailwindConfig, {
		darkMode: 'class',
		theme: {
			extend: {
				colors: {
					primary: 'hsl(var(--primary))',
					secondary: 'hsl(var(--secondary))',
					tertiary: 'hsl(var(--tertiary))',
					accent: 'hsl(var(--accent))',
					popover: 'hsl(var(--popover))',
					foreground: 'hsl(var(--foreground))',
					muted: 'hsl(var(--muted))',
					input: 'hsl(var(--input))',
					colored: 'hsl(var(--colored))',
					border: 'hsl(var(--border))',
				},
				borderColor: {
					DEFAULT: 'hsl(var(--border))',
				},
				borderRadius: {
					DEFAULT: 'var(--round)',
					sm: 'calc(var(--round) * 0.75)',
					lg: 'calc(var(--round) * 1.5)',
					xl: 'calc(var(--round) * 2)',
					'2xl': 'calc(var(--round) * 3)',
				},
				keyframes: {
					slideDown: {
						from: {
							height: '0px',
						},
						to: {
							height: 'var(--radix-accordion-content-height)',
						},
					},
					slideUp: {
						from: {
							height: 'var(--radix-accordion-content-height)',
						},
						to: {
							height: '0px',
						},
					},
					fadeIn: {
						from: { opacity: '0' },
						to: { opacity: '1' },
					},
					fadeOut: {
						from: { opacity: '1' },
						to: { opacity: '0' },
					},
					scaleIn: {
						from: {
							opacity: '0',
							transform: 'scale(0.95)',
						},
						to: {
							opacity: '1',
							transform: 'scale(1)',
						},
					},
					scaleOut: {
						from: {
							opacity: '1',
							transform: 'scale(1)',
						},
						to: {
							opacity: '0',
							transform: 'scale(0.95)',
						},
					},
					translateYIn: {
						from: {
							opacity: '0',
							transform: 'translateY(100px)',
						},
						to: {
							opacity: '1',
							transform: 'translateY(0)',
						},
					},
					translateYOut: {
						from: {
							opacity: '1',
							transform: 'translateY(0)',
						},
						to: {
							opacity: '0',
							transform: 'translateY(100px)',
						},
					},
					dropdownIn: {
						from: {
							opacity: '0',
							transform: 'scale(0.95)',
						},
						to: {
							opacity: '1',
							transform: 'scale(1)',
						},
					},
					dropdownOut: {
						from: {
							opacity: '1',
							transform: 'scale(1)',
						},
						to: {
							opacity: '0',
							transform: 'scale(0.95)',
						},
					},
				},
				animation: {
					'dropdown-in':
						'dropdownIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
					'dropdown-out':
						'dropdownOut 150ms cubic-bezier(0.16, 1, 0.3, 1)',

					fadeIn: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
					fadeOut: 'fadeOut 150ms cubic-bezier(0.16, 1, 0.3, 1)',
					scaleIn: 'scaleIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
					scaleOut: 'scaleOut 150ms cubic-bezier(0.16, 1, 0.3, 1)',
					translateYIn:
						'translateYIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
					translateYOut: 'translateYOut 150ms',
					slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
					slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				},
			},
		},
	});
};
