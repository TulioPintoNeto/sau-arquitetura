/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    i18n: {
        locales: ["pt-BR"],
        defaultLocale: "pt-BR",
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/**',
        },
      ],
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, "./src/styles")],
    },
};

module.exports = nextConfig;
