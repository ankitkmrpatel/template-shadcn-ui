import type { NextConfig } from "next";
import { createContentlayerPlugin } from "next-contentlayer2"

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      moduleIdStrategy: 'deterministic',
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // redirects() {
  //   return [
  //     {
  //       source: "/components",
  //       destination: "/docs/components/accordion",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/components",
  //       destination: "/docs/components/accordion",
  //       permanent: true,
  //     },
  //     {
  //       source: "/examples",
  //       destination: "/examples/mail",
  //       permanent: false,
  //     },
  //     {
  //       source: "/docs/primitives/:path*",
  //       destination: "/docs/components/:path*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/figma",
  //       destination: "/docs/figma",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/forms",
  //       destination: "/docs/components/form",
  //       permanent: false,
  //     },
  //     {
  //       source: "/docs/forms/react-hook-form",
  //       destination: "/docs/components/form",
  //       permanent: false,
  //     },
  //     {
  //       source: "/sidebar",
  //       destination: "/docs/components/sidebar",
  //       permanent: true,
  //     },
  //     {
  //       source: "/react-19",
  //       destination: "/docs/react-19",
  //       permanent: true,
  //     },
  //   ]
  // },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)