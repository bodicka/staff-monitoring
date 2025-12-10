import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.clipartmax.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
        pathname: "/**",
      },
    ],
    qualities: [75, 80],
  },
};

export default nextConfig;
