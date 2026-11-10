import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/projects/lake-view-park-and-resort",
        destination: "/projects/lakeview-park-and-resort",
        permanent: true,
      },
      {
        source: "/projects/city-view-park-and-resort-queens-park",
        destination: "/projects/cityview-park-and-resort-queens-park-estate-karshi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
