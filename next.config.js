/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
