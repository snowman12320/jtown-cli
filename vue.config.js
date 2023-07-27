const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
  //
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://vue3-course-api.hexschool.io/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
});
