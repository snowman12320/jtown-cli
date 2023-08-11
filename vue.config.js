const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './' //! 會錯誤路徑
  publicPath: process.env.NODE_ENV === 'production' ? '/hexschool-question/' : '/'
});
//
// 熱重載失效，找不到解法，故先註解
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: './',
//   // vue-loader test
//   chainWebpack: (config) => {
//     // 配置 vue-loader
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .loader('vue-loader')
//       .tap((options) => {
//         // 修改選項
//         options.hotReload = true;
//         return options;
//       });
//   },
//   // https://stackoverflow.com/questions/53589853/vue-cli-3-hot-reload-suddenly-not-working-in-browsers
//   devServer: {
//     host: 'localhost'
//   }
//   //
//   // cropper嘗試，瀏覽器中的跨源資源共享（CORS）策略導致的。 CORS是一種安全機制，用於阻止跨域請求。當你的前端代碼在一個域名下，而你試圖從另一個域名的API端點請求數據時，如果API沒有正確設置CORS響應頭，就會出現該錯誤。
//   // devServer: {
//   //   proxy: {
//   //     '/api': {
//   //       target: 'https://vue3-course-api.hexschool.io/',
//   //       changeOrigin: true,
//   //       pathRewrite: {
//   //         '^/api': ''
//   //       }
//   //     }
//   //   }
//   // }
// });
