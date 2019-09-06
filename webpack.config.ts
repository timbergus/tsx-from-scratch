import WebPack from 'webpack';
import { resolve } from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default (): WebPack.Configuration => ({
    entry: resolve('src', 'index.tsx'),
    output: {
        path: resolve('dist'),
        filename: 'bundle.[hash].js',
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
});
