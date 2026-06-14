/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/medical-writing-portfolio',
  assetPrefix: '/medical-writing-portfolio/',
}

module.exports = nextConfig
