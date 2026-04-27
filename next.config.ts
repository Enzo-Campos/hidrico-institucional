import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
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