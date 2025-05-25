import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  // Enable page and layout level bundle analyzer in production
  productionBrowserSourceMaps: false,
  // Optimize fonts
  optimizeFonts: true,
  // Enable aggressive code minification
  swcMinify: true,
  // Enable HTTP Keep-Alive
  httpAgentOptions: {
    keepAlive: true,
  },
  // Experimental features for better performance
  experimental: {
    // Enable server actions
    serverActions: true,
    // Enable optimistic updates
    optimisticClientCache: true,
    // Enable modern JavaScript features
    serverComponentsExternalPackages: [],
  },
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Enable production optimizations even in development
    config.mode = 'production';
    
    // Add terser for better minification
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }

    // Remove Firebase Studio icon and development features
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@firebase/studio-icon': false,
        '@firebase/studio': false,
        '@firebase/studio-shared': false
      };
    }
    
    return config;
  },
  // Disable PWA features
  pwa: false,
  // Disable Firebase Studio development features
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
