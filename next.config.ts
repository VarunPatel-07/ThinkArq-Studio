import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.d.ts"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource", // tells webpack to emit the file
    });
    return config;
  },
};

export default nextConfig;
