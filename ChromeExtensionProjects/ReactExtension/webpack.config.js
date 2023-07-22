const path = require("path");
const copyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/test.tsx",
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  Plugins: [
    new copyPlugin({
      patterns: [
        {
          from: path.resolve("src/manifest.json"),
          to: path.resolve("dist"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "index.js",
    path: path.resolve("dist"),
  },
};
