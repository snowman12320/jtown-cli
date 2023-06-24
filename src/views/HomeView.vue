<template>
  <Loading :active="isLoading"></Loading>
  <!-- props -->
  <Header :is-login="isLogin"></Header>
  <!-- emit -->
  <!-- <Header @update-loading="handleUpdateLoading"></Header> -->
  <HomeCarousel></HomeCarousel>
  <div class="container-xxl">
    <HomeBanner></HomeBanner>
    <HomeProduct></HomeProduct>
    <HomeRank></HomeRank>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import HomeBanner from '@/components/HomeBanner.vue';
import HomeProduct from '@/components/HomeProduct.vue';
import HomeRank from '@/components/HomeRank.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
export default {
  name: 'HomeView',
  mixins: [loginMixin],
  provide () {
    return {
      emitter
    };
  },
  components: {
    Header,
    HomeCarousel,
    HomeBanner,
    HomeProduct,
    HomeRank,
    Footer
  }
};
</script>
