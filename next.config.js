/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // add domains to allow images from external sources
      // normally you want to host your own images, but since I trust Gutenberg.org, I will in this case.
      {
        protocol: "https",
        hostname: "www.gutenberg.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
