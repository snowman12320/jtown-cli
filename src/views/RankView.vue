<template>
  <Loading :active="isLoading"></Loading>
  <Header :is-login="isLogin"></Header>
  <ToastMessages></ToastMessages>
  <p style="margin-top: 104px !important"></p>
  <!-- banner -->
  <!-- 記得外推 圖才會完整 -->
  <section class="allstar_banner bgp-bottom bgs-cover mb-3"
    :style="{ 'background-image': `url(${require('@/assets/nbaWeb/allstar-2016-011016-top-1.jpg')})` }" style="
        background-repeat: no-repeat;
        height: 500px;
        margin-top: 104px !important;
      "></section>
  <div class="container-xxl">
    <!-- ranking -->
    <section class="row row-cols-1 row-cols-xl-5 mx-5 g-3 justify-content-around">
      <!-- col-12 col-xl-2 多餘的 -->
      <div class="d-flex flex-xl-column align-items-center justify-content-start">
        <div class="allstar_bg d-flex justify-content-center align-items-center me-5 me-xl-0">
          <img class="of-contain" src="@/assets/nbaWeb/PNG-images-NBA-Players-36png.png" height="200" width="200"
            alt="" />
        </div>
        <div class="text-center allstartext_rwd">
          <p class="text-nbaBlue mt-3">NO.1</p>
          <h3 class="">
            KOBE <span class="br"><br /></span>
            BRYANT
          </h3>
          <p>BLACK MAMBA</p>
        </div>
      </div>
      <div class="d-flex flex-xl-column align-items-center justify-content-start">
        <div class="allstar_bg d-flex justify-content-center align-items-center me-5 me-xl-0">
          <img class="of-contain" src="@/assets/nbaWeb/PNG-images-NBA-Players-3png.png" height="200" width="200" alt="" />
        </div>
        <div class="text-center allstartext_rwd">
          <p class="text-nbaBlue mt-3">NO.2</p>
          <h3>LEBRON JAMES</h3>
          <p>KING JAMES</p>
        </div>
      </div>
      <div class="d-flex flex-xl-column align-items-center justify-content-start">
        <div class="allstar_bg d-flex justify-content-center align-items-center me-5 me-xl-0">
          <img class="of-cover op-top" src="@/assets/nbaWeb/PNG-images-NBA-Players-1png.png" height="200" width="200"
            alt="" />
        </div>
        <div class="text-center allstartext_rwd">
          <p class="text-nbaBlue mt-3">NO.3</p>
          <h3>STEPHEN CURRY</h3>
          <p>LOGOSHOOT GOD</p>
        </div>
      </div>
      <div class="d-flex flex-xl-column align-items-center justify-content-start">
        <div class="allstar_bg d-flex justify-content-center align-items-center me-5 me-xl-0">
          <img class="of-cover op-top" src="@/assets/nbaWeb/PNG-images-NBA-Players-58png.png" height="200" width="200"
            alt="" />
        </div>
        <div class="text-center allstartext_rwd">
          <p class="text-nbaBlue mt-3">NO.4</p>
          <h3 class="text-center">
            RUSSELL <br />
            WESTBROOK
          </h3>
          <p>TRIPLE-DOUBLES GOD</p>
        </div>
      </div>
      <div class="d-flex flex-xl-column align-items-center justify-content-start">
        <div class="allstar_bg d-flex justify-content-center align-items-center me-5 me-xl-0">
          <img class="of-cover op-top" src="@/assets/nbaWeb/PNG-images-NBA-Players-60png.png" height="200" width="200"
            alt="" />
        </div>
        <div class="text-center allstartext_rwd">
          <p class="text-nbaBlue mt-3">NO.5</p>
          <h3>
            KRIE <span class="br"><br /></span> IRVING
          </h3>
          <p>DRIBBLE GOD</p>
        </div>
      </div>
    </section>
  </div>
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  mixins: [loginMixin],
  components: {
    Header,
    Footer,
    ToastMessages
  },
  provide () {
    return {
      emitter
    };
  }
};
</script>
