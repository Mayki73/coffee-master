/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/(//)+",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
