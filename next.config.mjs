/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  devIndicators: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;
