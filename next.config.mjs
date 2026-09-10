/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;
