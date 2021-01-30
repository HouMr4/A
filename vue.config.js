// vue.config.js
module.exports = {
    lintOnSave: false,
    publicPath: './',
    productionSourceMap: false, //不输出map文件
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            'api': {
                //请求源地址
                target: `http://admintest.happymmall.com`,
                //是否跨域
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
