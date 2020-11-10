const TerserPlugin = require('terser-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const withBabelMinify = require('next-babel-minify');
const withProgressBar = require('next-progressbar');
const nextConfigs = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost', 'gbruv.com', 'ghassanbrov.com', 'classicbody.org', 'ghassanclassic.com'],
    path: '/_next/image',
    loader: 'default',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  cacheGroups: {
    default: false,
    vendors: false,
    framework: {
      name: 'framework',
      chunks: 'all',
      test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      priority: 40,
    },
    lib: {
      test(module) {
        return module.size() > 160000;
      },
      name(module) {
        return /node_modules\/(.*)/.exec(module.identifier())[1].replace(/\/|\\/g, '_');
      },
      priority: 30,
      minChunks: 1,
      reuseExistingChunk: true,
    },
    commons: {
      name: 'commons',
      chunks: 'all',

      priority: 20,
    },
    shared: {
      name: false,
      priority: 10,
      minChunks: 2,
      reuseExistingChunk: true,
    },
  },
  maxInitialRequests: 20,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    // plugin to import css

    withBabelMinify(),
    withProgressBar({
      progressBar: {
        fancy: true,
      },
    }),
  ],
  nextConfigs
);
