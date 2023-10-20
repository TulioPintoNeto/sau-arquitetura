/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    i18n: {
        locales: ["pt-BR"],
        defaultLocale: "pt-BR",
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, "./src/styles")],
    },
};

module.exports = nextConfig;
