import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource", // tells webpack to emit the file
    });
    return config;
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  async headers() {
    return [
      // ── Security headers — applied to every route ──────────────────────
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing attacks
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking — site must not be embedded in an iframe
          { key: "X-Frame-Options", value: "DENY" },
          // Legacy XSS filter (kept for older browser support)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Only send origin in Referer header for cross-origin requests
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict access to sensitive browser APIs
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Force HTTPS for 2 years (preload-ready)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // ── Long-lived cache for immutable Lottie animations ───────────────
      {
        source: "/Lottie/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ── Long-lived cache for OG / meta images ──────────────────────────
      {
        source: "/meta-images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
