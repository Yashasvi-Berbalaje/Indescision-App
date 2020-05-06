module.exports = {
    module: {
      entry:'./src/indescisionApp.js',

      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };