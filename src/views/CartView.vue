<template>
  <Loading :active="isLoading"></Loading>
  <!-- props -->
  <!-- <Header :is-login="isLogin"></Header> -->
  <!-- emit -->
  <Header @update-loading="handleUpdateLoading"></Header>
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import loginMixin from '../mixins/loginMixin';
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      isLoading: false
    };
  },
  methods: {
    handleUpdateLoading (isLoading) {
      this.isLoading = isLoading;
    }
  }
  // mixins: [loginMixin]
};
</script>
