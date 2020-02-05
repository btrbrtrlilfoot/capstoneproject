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
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
    // include
  }
};
