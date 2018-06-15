const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
