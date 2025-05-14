import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',           // empty string for default port
        pathname: '/**',    // allow all paths under this host
        search: '',         // omit if you don't need to restrict query strings
      },
    ],
  },
};

export default nextConfig;
