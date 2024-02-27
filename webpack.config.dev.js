const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map", // we get source maps for debugging
  entry: "./src/index", // .js can be omitted/default for webpack
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/", // public URL of the out dir when its referenced in the browser
    filename: "bundle.js", // used so the html can reference the bundle being served from memory
  },
  devServer: {
    stats: "minimal", // minimal information in the command line output
    overlay: true, // overlay browser errors
    historyApiFallback: true, // all reqs will be sent to index.html/routing in handled by react-router
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // where to find the html template
      favicon: "src/favicon.ico", // where to find favicon
    }),
  ],

  module: {
    // what files we want to handle
    rules: [
      {
        // test for js/jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"], // what to do on js files, TODO: Configure babel
      },
      {
        //test for css
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"], // will allow for importing css js-style, webpack bundles all css in a single file
      },
    ],
  },
};
