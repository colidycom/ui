import { withContentlayer } from 'next-contentlayer';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/docs',
        destination: '/docs/overview/getting-started',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.noParse = (content) => {
      return content.includes(path.resolve(__dirname, 'cli'));
    };

    return config;
  },
};

export default withContentlayer(nextConfig);