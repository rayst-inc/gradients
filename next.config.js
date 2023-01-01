/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/cf',
        destination: 'https://static.cloudflareinsights.com/beacon.min.js',
        basePath: false,
      },
      {
        source: '/cf/:path*',
        destination: 'https://cloudflareinsights.com/:path*',
        basePath: false,
      },
    ]
  },
}
