<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    };
  },
  created () {
    //* 取出代幣
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    // console.log(token);
    this.$http.defaults.headers.common.Authorization = token; //* 存到header發送
    const api = `${process.env.VUE_APP_API}api/user/check`; //* 驗證登入狀態
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  }
};
</script>
