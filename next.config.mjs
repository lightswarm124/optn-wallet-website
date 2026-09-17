/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tokenindex",
        destination: "/ecosystem#tokenindex",
        permanent: true,
      },
      {
        source: "/developers",
        destination: "/ecosystem",
        permanent: true,
      },
      {
        source: "/infrastructure",
        destination: "/ecosystem#infrastructure",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/platform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
