import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/zolile-nonzapa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
