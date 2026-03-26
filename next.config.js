/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local images from public folder
    unoptimized: false,
    // If you ever use external image URLs, add domains here
    remotePatterns: [],
  },
  // Ensures pages are always server-rendered fresh (fixes navigation blank page)
  experimental: {
    // Keep this false to avoid hydration issues
    optimizeCss: false,
  },
}

module.exports = nextConfig