/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [
    '@opentelemetry/sdk-node',
    '@opentelemetry/instrumentation',
    '@opentelemetry/api',
    '@opentelemetry/exporter-jaeger',
    '@opentelemetry/auto-instrumentations-node'
  ],
  // experimental section removed as instrumentationHook is no longer needed
  // instrumentation.js is available by default in Next.js 15.2.3
};

module.exports = nextConfig; 
