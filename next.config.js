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
  experimental: {
    instrumentationHook: true
  }
};

module.exports = nextConfig; 