import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimisation des images
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Ajoutez vos domaines d'images externes si nécessaire
    domains: [],
    // Activer l'optimisation pour les images locales
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimisation générale
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
