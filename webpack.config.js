var config = {
   entry: './main.js',
   output: {
      path:'/a',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8085
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;