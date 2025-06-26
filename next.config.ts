import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/men/**', // Correct wildcard for any path under /api/portraits/men/
      },
    ],
  },
};

export default nextConfig;