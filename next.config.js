require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssModules:true
});


const withSASS = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages(withCSS(withSASS ({
    cssModules:true
})));

