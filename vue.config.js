const webpack = require('webpack')
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    publicPath: './',
  };
/*
module.exports = {
    //引入jquery
    chainWebpack: config => {
        publicPath = ". /"
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },

}
*/



// configureWebpack(config) {
//     if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(new WebpackObfuscator({
//     rotateStringArray: true
//     }, []))
//     }
// },





// module.exports = {
//     devServer: {
//      open: true,
//      host: '127.0.0.1',  // 設置主機地址
//      port: 44376,         // 設置默認埠號
//      https: false,
//      //以上的ip和埠號是我們本機的;下面為需要跨域的
//      proxy: {    //配置跨域
//       '/api': {
//        target: 'http://127.0.0.1:44376/api',   //這裡後台的地址模擬的，應該填寫真實的後台api
//        ws: true,     // 如果要代理 websockets
//        changOrigin: true,  //允許跨域
//        pathRewrite: {
//         '^/Api': '' //請求的時候使用這個api就可以
        
//        }
       
//       }
   
//      }
//     }

    
    
// }