const webpack           = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/',
  entry: {
    "js/app.js": ['whatwg-fetch','./client/components/app.jsx'],
    "css/app.css": ['./client/sass/app.scss'],
  },

  output: {
    filename: '[name]',
    path: __dirname + '/client/',
    publicPath: '/' // So Hot Module Reload uses webpack dev server URL not Express app URL
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['react', 'es2015', 'stage-2']},
      }
    ]
  },

  devtool: 'source-map',
  // devtool: 'cheap-module-source-map',

  plugins:[
    new ExtractTextPlugin("css/app.css"),
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: true
    //   }
    // })
  ]

  /*********/
  /* USAGE */
  /*********/

  // PRODUCTION:
  // - switch devtools to cheap-module-source-map
  // - uncomment plugins for NODE_ENV and UglifyJS
  // DEV:
  // - switch devtools to source-map
  // - comment out plugins for NODE_ENV and UglifyJS

}
