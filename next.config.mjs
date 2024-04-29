/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.pnghut.com",
      },
    ],
  },
};

export default nextConfig;
