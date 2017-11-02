var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
    publicPath: '/js/'
    // public path is where you put in to the link: <script src='publicPath/**'></script>
  },
  module: {
    loaders: [{
      test: /\.js$/, // find all js file
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.sass$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    stats: "errors-only",
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
};