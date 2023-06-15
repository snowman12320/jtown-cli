<template>
  <Header></Header>
  <HomeCarousel></HomeCarousel>
  <div class="container-xxl">
    <HomeBanner></HomeBanner>
    <HomeProduct></HomeProduct>
    <HomeRank></HomeRank>
  </div>
  <Footer></Footer>
  <!-- <img
    alt="Vue logo"
    src="../assets/nbaWeb/1588928235basketball-fire-logo-silhouette-freesvg.org.svg"
  /> -->
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import HomeBanner from '@/components/HomeBanner.vue';
import HomeProduct from '@/components/HomeProduct.vue';
import HomeRank from '@/components/HomeRank.vue';
import Footer from '@/components/Footer.vue';
export default {
  data () {
    return {
      nav: 0, //* 初始化 nav 值 atTop: false };
      atTop: false
    };
  },
  name: 'HomeView',
  components: {
    Header,
    HomeCarousel,
    HomeBanner,
    HomeProduct,
    HomeRank,
    Footer
  },
  created () {
    // console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  }
};
</script>
