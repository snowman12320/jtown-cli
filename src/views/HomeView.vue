<template>
  <Header></Header>
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
export default {
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
