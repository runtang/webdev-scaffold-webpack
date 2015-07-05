var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		index: './assets/index/main.js',
		profile: './assets/profile/main.js'
	},
	output: {
		path: 'dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.hjs$/, loader: 'mustache' }
		]
	},
	plugins: [commonsPlugin]
};