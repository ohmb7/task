const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
const newLocal = 'browser-sync-webpack-plugin';
const BrowserSyncPlugin = require(newLocal);

module.exports = {
    entry: {
        main : path.resolve(__dirname, 'sass/style.scss'),
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            context: './',
                            outputPath: '../',
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                            url: false
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
    },
    plugins: [
        new BrowserSyncPlugin(
            // BrowserSync options
            {
              // browse to http://localhost:3000/ during development
              host: 'localhost',
              port: 3000,
              // proxy the Webpack Dev Server endpoint
              // (which should be serving on http://localhost:3100/)
              // through BrowserSync
              proxy: 'http://localhost:8000/'
            },
            // plugin options
            {
              // prevent BrowserSync from reloading the page
              // and let Webpack Dev Server take care of this
              reload: true
            }
          )
    ]
};
