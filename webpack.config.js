var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-react"].map(require.resolve)
				}
			},
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};