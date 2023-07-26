/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/posts/:slug",
        destination: "/blog/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      // Match Contentful hosted images
      {
        hostname: "images.ctfassets.net",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
