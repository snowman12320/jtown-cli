<template>
  <Loading :active="isLoading"></Loading>
  <Header :is-login="isLogin"></Header>
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
export default {
  components: {
    Header,
    Footer
  },
  mixins: [loginMixin]
};
</script>
