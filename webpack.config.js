const path = require('path');
const pkg = require('./package.json');
// config the environment
require('dotenv').config();

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: process.env.NODE_ENV,
	entry: path.join(__dirname, pkg.main),
	devtool: DEV ? 'source-map' : '',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	output: {
		filename: DEV ? process.env.NAME + '.js' : process.env.NAME + '.min.js',
		library: process.env.LIB,
		libraryTarget: process.env.TARGET,
		path: DEV ? path.join(__dirname, 'dev') : path.join(__dirname, 'dist', process.env.TARGET)
	},
};
