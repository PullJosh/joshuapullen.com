module.exports = {
  async redirects() {
    return [
      {
        source: "/blog/posts/:slug",
        destination: "/blog/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
