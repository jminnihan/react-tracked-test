/**
 * Project: SmartLubeAdmin
 * Filename: webpack.config.dev.js
 * Purpose: Packages up the Enlight Lube web application for local development.
 * Created by: jminnihan
 * Created on: 2019-11-02 14:48
 * Copyright (c) 2019 by SKF Group, Inc.
 *
 */

import autoprefixer from 'autoprefixer';
import path from 'path';
// @ts-ignore
import tailwind from 'tailwindcss';
import webpack from 'webpack';

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

export default {
  devtool: 'inline-source-map',
  entry: [
    // must be first entry to properly set public path
    path.resolve(__dirname, 'src/index.tsx') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3000',
    inline: true,
    compress: false,
    open: true,
    openPage: '/'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    pathinfo: true,
    publicPath
  },
  resolve: {
    extensions: [
      '*',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json'
    ]
  },
  module: {
    rules: [
      // ** ADDING/UPDATING LOADERS **
      // The "url" loader handles all assets unless explicitly excluded.
      // The `exclude` list *must* be updated with every change to loader extensions.
      // When adding a new loader, you must add its `test`
      // as a new entry in the `exclude` list in the "url" loader.
      {
        test: /\.tsx?$/u,
        use: ['babel-loader']
      },
      {
        test: /\.js$/u,
        exclude: /node_modules/u,
        use: ['source-map-loader']
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/u,
        use: ['file-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/u,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/u,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/u,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/iu,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/u,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [tailwind, autoprefixer],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src', 'scss', 'sass')],
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
   // new CheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // load `moment/locale/en.js` and `moment/locale/pt.js` and `moment/locale/sv.js`
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/u, /en|pt|sv/u),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
