module.exports = {
    devServer: {
        proxy: { // 配置跨域
            '/api': {
                target: 'http://47.112.249.51:8199',
                ws: true,
                changOrigin: true,    //是否开启代理
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
      }
    }