import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/os",
        destination: "/os.html",
      },
    ];
  },
};

export default nextConfig;
