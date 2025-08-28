import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/pages/admin',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
