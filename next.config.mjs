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
        statusCode: 301,
      },
      {
        source: "/about/index.html",
        destination: "/about/",
        statusCode: 301,
      },
      {
        source: "/about/(//)+",
        destination: "/about/",
        statusCode: 301,
      },
      {
        source: "/repair/index.html",
        destination: "/repair/",
        statusCode: 301,
      },
      {
        source: "/repair/(//)+",
        destination: "/repair/",
        statusCode: 301,
      },
      {
        source: "/prices/index.html",
        destination: "/prices/",
        statusCode: 301,
      },
      {
        source: "/prices/(//)+",
        destination: "/prices/",
        statusCode: 301,
      },
      {
        source: "/mulfunctions/index.html",
        destination: "/mulfunctions/",
        statusCode: 301,
      },
      {
        source: "/mulfunctions/(//)+",
        destination: "/mulfunctions/",
        statusCode: 301,
      },
      {
        source: "/contacts/index.html",
        destination: "/contacts/",
        statusCode: 301,
      },
      {
        source: "/contacts/(//)+",
        destination: "/contacts/",
        statusCode: 301,
      },
      {
        source: "/delivery-and-payment/index.html",
        destination: "/delivery-and-payment/",
        statusCode: 301,
      },
      {
        source: "/delivery-and-payment/(//)+",
        destination: "/delivery-and-payment/",
        statusCode: 301,
      },
      {
        source: "/repair/:type/index.html",
        destination: "/repair/:type/",
        statusCode: 301,
      },
      {
        source: "/repair/:type/(//)+",
        destination: "/repair/:type/",
        statusCode: 301,
      },
      {
        source: "/repair/:type/:brand/index.html",
        destination: "/repair/:type/:brand/",
        statusCode: 301,
      },
      {
        source: "/repair/:type/:brand/(//)+",
        destination: "/repair/:type/:brand/",
        statusCode: 301,
      },
      {
        source: "/mulfunctions/:mulfunction/index.html",
        destination: "/mulfunctions/:mulfunction/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
