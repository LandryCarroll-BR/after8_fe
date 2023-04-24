/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: [
      'after8music.local',
      'images.unsplash.com',
      'after8musicstg.wpengine.com',
      'after8music.com',
    ],
  },
}

module.exports = nextConfig
