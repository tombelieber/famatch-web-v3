const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },

  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
});

module.exports = nextConfig;
