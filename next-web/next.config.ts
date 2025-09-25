import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
     {
        hostname: 'cdn.pixabay.com', // Replace with your image host
      },
    ]
  }
};

export default nextConfig;
