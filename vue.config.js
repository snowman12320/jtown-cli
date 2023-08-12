const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './' //! 會錯誤路徑
  publicPath: process.env.NODE_ENV === 'production' ? '/hexschool-question/' : '/'
});
