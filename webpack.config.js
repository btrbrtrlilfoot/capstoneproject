// const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: 'development',
  entry: {
    polyfills: './client/src/polyfills.ts',
    main: './client/src/main.ts'
  },
  output: {
    path: __dirname,
    filename: './dist/main.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}
