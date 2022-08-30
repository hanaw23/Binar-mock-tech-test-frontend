/** @type {import('next').NextConfig} */
/**const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;*/

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: "https://test-binar.herokuapp.com/:path*",
      },
    ];
  };
  return {
    rewrites,
  };
};
