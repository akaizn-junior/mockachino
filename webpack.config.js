const path = require('path');
const config = require('./package.json');

//config the environment
require('dotenv').config();

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, config.main),
    devtool: DEV ? 'source-map' : '',
    output: {
        filename: DEV ? `${String(process.env.NAME).toLowerCase()}.js` : `${String(process.env.NAME).toLowerCase()}.min.js`,
        library: process.env.NAME,
        libraryTarget: process.env.TARGET,
        path: DEV ? path.join(__dirname, 'dev') : path.join(__dirname, 'dist', process.env.TARGET)
    },
    plugins: [],
    devServer: {
        contentBase: path.join(__dirname, ''),
        port: 7000,
        open: true
    }
};
