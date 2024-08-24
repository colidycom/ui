import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { withColidyUI } from '@colidy/ui-utils';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
			},
			screens: {
				sm: '98rem',
				md: '98rem',
				lg: '98rem',
				xl: '98rem',
			},
		},
		extend: {
			maxWidth: {
				'8xl': '98rem',
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default withColidyUI(config);
