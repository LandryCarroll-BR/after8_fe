/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['after8music.local', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
