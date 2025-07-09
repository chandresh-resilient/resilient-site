// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export",
//   // images: {
//   //   unoptimized: true,
//   // },
//   /* config options here */
//   reactStrictMode: true,
//     trailingSlash: true,

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This replaces `next export`
  images: {
    unoptimized: true // ✅ Required for static export if using next/image
  },
  // If using basePath or trailingSlash, you can define here
  trailingSlash: true,
}

module.exports = nextConfig
