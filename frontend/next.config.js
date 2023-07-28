/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io'], // Add this to load images from IPFS domain
    unoptimized: true, // Add this to disable unoptimized mode to avoid Vercel Image Optimization limit exceeded
  },
}

module.exports = nextConfig
