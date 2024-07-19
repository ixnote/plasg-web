/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"], // Add your image domain here
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/",
          outputPath: "static/media/",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
