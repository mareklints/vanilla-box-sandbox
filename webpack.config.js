var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
                    name: '[name].[ext]',
                },
            }
        ]
    },
    devServer: {
        hot: true,
        port: 10080
    }
};