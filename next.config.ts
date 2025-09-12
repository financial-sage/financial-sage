import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // Enable SWC minification
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/pages/admin',
        permanent: false,
      },
    ];
  },
  // Optimize CSS and prevent FOUC (Flash of Unstyled Content)
  poweredByHeader: false,
};

export default nextConfig;
