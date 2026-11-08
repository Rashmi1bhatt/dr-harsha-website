/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;
