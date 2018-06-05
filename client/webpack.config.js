const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
	mode: "development",
	entry: ["babel-polyfill", resolve(__dirname, "src")],
	output: {
		path: resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: true
		})
	],
	devtool: "source-map",
	resolve: {
		extensions: [".js"],
		alias: {
			Components: resolve(__dirname, "./src/components"),
			Stores: resolve(__dirname, "./src/stores")
		}
	}
};
