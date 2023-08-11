<<<<<<< HEAD
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './' //! 會錯誤路徑
  publicPath: process.env.NODE_ENV === 'production' ? '/hexschool-question/' : '/'
});
//
// 熱重載失效，找不到解法，故先註解
=======
>>>>>>> 9095ef7c3885d9385198273f6a3c5d244f788c86
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production' ? '/hexschool-question/' : '/'
// });
//
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
});
