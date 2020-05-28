const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: `${APP_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/CSS-Theming/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
