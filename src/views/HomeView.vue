<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
// 程式碼 這個黨越改越錯
// 目前環境伺服器開得起來，但都會有ESLint錯誤，助教有給我任務請我查詢代碼解決，但嘗試幾個方法還是錯誤，
// 比如在.eslintrc.js 加上'semi':["error","always"] 
  created() {
    console.log(process.env.VUE_APP_API,process.env.VUE_APP_PATH);
  },
};
</script>
