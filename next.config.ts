import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.dev',
        pathname: '/**/**',
      },
    ],
  },
};

export default nextConfig;