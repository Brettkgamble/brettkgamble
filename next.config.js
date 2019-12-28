const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const optimizedImages = require('next-optimized-images');


const cssConfig = {cssModules: true}
const nextConfig = {
  webpack(config)  {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
}

module.exports = withPlugins([
    [optimizedImages, {}],
  [withCSS, cssConfig]
], nextConfig);





// require("dotenv").config();
//
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images')
//
// const path = require("path");
// const Dotenv = require("dotenv-webpack");
//
// module.exports = {
//   webpack: config => {
//     config.plugins = config.plugins || [];
//
//     config.plugins = [
//       ...config.plugins,
//
//       // Read the .env file
//       new Dotenv({
//         path: path.join(__dirname, ".env"),
//         systemvars: true
//       })
//     ];
//
//     return config;
//   }
// };
//
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//     cssModules:true
// });
//
//
// const withSASS = require('@zeit/next-sass');
// const withOptimizedImages = require('next-optimized-images');
// module.exports = withOptimizedImages(withCSS(withSASS ({
//     cssModules:true
// })));

