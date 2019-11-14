const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['@babel/polyfill', './src/assets/js/main.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.html"
    })
  ],
  devServer: {
    contentBase: "./public"
  }
};
