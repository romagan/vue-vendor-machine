module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-vendor-machine/'
    : '/'
};