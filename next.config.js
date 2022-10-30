/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
