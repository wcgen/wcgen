const path = require('path'); 
  module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
}