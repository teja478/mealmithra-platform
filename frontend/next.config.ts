import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  allowedDevOrigins: [
    "172.20.10.5",
    "localhost",
  ],
};

export default nextConfig;