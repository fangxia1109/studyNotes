const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    configureWebpack: {
        devServer: {
            host: 'localhost',
            port: 8010, //端口号
            open: true,
        }
    }
}