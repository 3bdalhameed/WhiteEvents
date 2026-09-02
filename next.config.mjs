/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["nodemailer"],
  images: {
    // Serve modern formats — Next.js will convert JPG/PNG to WebP/AVIF automatically
    formats: ["image/avif", "image/webp"],
    // Allow large wedding photos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [256, 384, 512, 768],
    // Cache optimized images for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
