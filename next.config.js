/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
};

module.exports = nextConfig;
