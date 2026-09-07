/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tokenindex",
        destination: "/infrastructure#tokenindex",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
