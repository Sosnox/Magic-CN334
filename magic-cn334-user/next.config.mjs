/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '210.246.215.173:8002',
        pathname: '/static/**',
      },
      // If you want to allow any localhost port
    ],
  },
};

export default nextConfig;
