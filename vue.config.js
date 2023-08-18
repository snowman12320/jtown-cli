const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './' //! 會錯誤路徑
  publicPath: process.env.NODE_ENV === 'production' ? '/jtown-cli/' : '/'
});
//
// 熱重載失效，找不到解法，故先註解
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production' ? '/jtown-cli/' : '/'
// });
//
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
});
