var path = require('path')
var webpack =require('webpack');
module.exports = {
	entry:'./app.js',
	output:{
		path:path.resolve(__dirname,'./src'),
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:'babel-loader',
			exclude: /(node_modules)/,
			query:{
				presets:['es2015','react']
			}
		},{
				test:/\.css$/,
				loader:'style-loader!css-loader',
			}],

	},plugins: [
		    new webpack.optimize.UglifyJsPlugin({
		      compress: {
		        warnings: false
		      }
		    })
		]
}