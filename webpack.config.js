var path = require('path');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");


module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
    App$: path.resolve(__dirname, './components/auth/components/App'),
    AuthStore: path.resolve(__dirname, './components/auth/components/helpers/store.js'),
    AuthBackend: path.resolve(__dirname, './components/auth/components/helpers/fake-backend.js'),
    AuthHelpers: path.resolve(__dirname, './components/auth/components/helpers/*'),
    AuthActions: path.resolve(__dirname, './components/auth/components/actions/*'),
    Auth: path.resolve(__dirname, './components/auth/*'),
    HomePage: path.resolve(__dirname, './components/auth/components/HomePage/HomePage.jsx'),
    LoginPage: path.resolve(__dirname, './components/auth/components/LoginPage/LoginPage.jsx'),
    RegisterPage: path.resolve(__dirname, './components/auth/components/RegisterPage/RegisterPage.jsx')

},

    extensions: ['.js', '.jsx'],
    plugins: [
  new DirectoryNamedWebpackPlugin()
]

  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2016', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
