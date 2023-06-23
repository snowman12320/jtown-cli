<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <Header :is-login="isLogin"></Header>
  <ToastMessages></ToastMessages>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    Header,
    Footer,
    ToastMessages
  },
  provide () {
    return {
      emitter
    };
  },
  mixins: [loginMixin]
};
</script>
