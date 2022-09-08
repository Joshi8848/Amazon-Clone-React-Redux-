/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

const withSvgr = require("next-svgr");

module.exports = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
});
