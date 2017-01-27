var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'public/app');

var config = {
   entry: APP_DIR + '/index.js',

   output: {
      path: BUILD_DIR,
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 3000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;