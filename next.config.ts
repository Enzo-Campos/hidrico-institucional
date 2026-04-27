import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hidricoquimica.com.br",
        pathname: "/admin/assets/imgs/**",
      },
    ],
  },
};

export default nextConfig;
