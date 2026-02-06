/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/ourproduct',
        permanent: true,
      },
      {
        source: '/products/:slug',
        destination: '/ourproduct/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
