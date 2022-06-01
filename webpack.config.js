const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type { import("webpack").Configuration } */
module.exports = {
  mode: "production",
  target: "web",
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
