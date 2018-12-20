var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        port: 9999
    },
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        ie:"11"
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    }
};
