const path = require('path')
// const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    node: {
        // fs: 'empty',
    },
    output: {
        filename: 'worker.js',
        path: path.join(__dirname, 'dist'),
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-proposal-optional-chaining',
                    ],
                },
            },
        ],
    },
}
