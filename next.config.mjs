/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
        optimizeCss: false,
      },
  };
  

export default nextConfig;
