/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/",
//         destination: "http://localhost:4000/",
//       },
//     ];
//   },
// };
