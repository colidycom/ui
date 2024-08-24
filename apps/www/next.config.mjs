import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: '/docs',
				destination: '/docs/getting-started/introduction',
				permanent: true,
			},
		];
	},
};

export default withContentlayer(nextConfig);
