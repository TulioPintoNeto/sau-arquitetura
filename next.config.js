/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, "./styles")],
    },
};

module.exports = nextConfig;
