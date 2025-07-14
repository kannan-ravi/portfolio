import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'components', 'constants', 'hooks'],
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.dev',
        pathname: '/**/**',
      },
    ],
  },
}

export default nextConfig
