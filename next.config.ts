import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.truefoodkitchen.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tasteofhome.com',
      },
    ],
  },
};

export default nextConfig;
