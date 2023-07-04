<template>
  <Loading :active="isLoading"></Loading>
  <Header :is-login="isLogin"></Header>
  <HomeCarousel></HomeCarousel>
  <div class="container-xxl">
    <!-- <HomeBanner></HomeBanner> -->
    <HomeStory></HomeStory>
    <HomeProduct></HomeProduct>
    <HomeProduct></HomeProduct>
  </div>
  <Footer></Footer>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
// import HomeBanner from '@/components/HomeBanner.vue';
import HomeProduct from '@/components/HomeProduct.vue';
import HomeStory from '@/components/HomeStory.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
export default {
  // name: 'HomeView', //*过设置name属性，可以为组件指定一个唯一的名称。这对于在组件之间进行通信
  mixins: [loginMixin],
  provide () {
    return {
      emitter
    };
  },
  components: {
    Header,
    HomeCarousel,
    HomeProduct,
    HomeStory,
    Footer
  }
};
</script>
