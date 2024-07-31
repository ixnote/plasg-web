/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true, // Disable built-in image optimization
  },
  // images: {
  //   domains: [
  //     "res.cloudinary.com",
  //     "www.thecable.ng",
  //     "localhost",
  //     "cdn.pixabay.com",
  //     "drive.google.com",
  //     "*",
  //   ],
  // },
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

// /** @type {import('next').NextConfig} */
// import withVideos from "next-videos";

// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     unoptimized: true, // Disable built-in image optimization
//   },
//   webpack: (config, { isServer }) => {
//     // Add other custom webpack configurations here
//     // This step is optional if you use `next-videos` since it handles video files.
//     return config;
//   },
// };

// export default withVideos(nextConfig);
