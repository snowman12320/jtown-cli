<template>
  <head class="navbar navbar-expand-md   position-fixed top-0 start-0 end-0" style="z-index:10" ref="header"
    :class="{ ' animate__animated  animate__slideInDown  animate__animated bg-white shadow-sm': !atTop }">
    <div class="container-fluid d-flex justify-content-between p-3" :class="{ 'backdrop': atTop }">
      <router-link to="/" class="d-flex position-relative text-decoration-none">
        <p class="navbar-brand position-absolute top-0 start-0 end-0 bottom-0">JerseyTown</p>
        <h1 class="fs-3 fw-bold mb-0 ms-5 nav_h1">JTown</h1>
      </router-link>
      <!-- 漢堡 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--  -->
      <div class="collapse navbar-collapse mb-3 mb-md-0" id="navbarSupportedContent">
        <!-- margin-start 自動推到底 好用排版方式 -->
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <!-- 關於active切換時有加上 但接著就會重新整理又不見 方法：- 1. 直接寫在 HTML 上（建議 -->
            <!-- router.js 自己會加上 -->
            <router-link to="/" class="nav-link px-4 py-3 ">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/story/list" class="nav-link px-4 py-3 ">
              Story
            </router-link>
          </li>
          <li class="nav-item">
            <!-- 透過$router.path去判斷 -->
            <router-link class="nav-link px-4 py-3" to="/products-view/products-content"
              :class="{ 'active': $route.path.includes('/products-view') }">Product</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rank" class="nav-link px-4 py-3 ">
              Rank
            </router-link>
          </li>
          <li class="ms-1" v-if="isLogin">
            <router-link to="/dashboard" class="fs-6 px-3 rounded-pill text-white">
              <button class="btn btn-nbaBlue text-white rounded-pill mt-lg-2 nav_pill">
                Sign out
              </button>
            </router-link>
          </li>
          <li class="ms-1" v-else>
            <button class="btn btn-nbaBlue text-white rounded-pill mt-lg-2 nav_pill">
              <router-link to="/login" class="text-decoration-none fs-6 px-3 rounded-pill text-white">
                Login / Sign up
              </router-link>
            </button>
          </li>
          <li>
            <button @click="openOffcanvas()" class="bg-transparent border-0">
              <i class="fa-regular fa-heart  text-nbaRed fs-3   mt-2 px-1 ms-md-2"></i>
            </button>
          </li>
          <li>
            <button @click="openOffcanvas()" class="bg-transparent border-0">
              <i class="fa-sharp fa-solid fa-cart-shopping text-nbaRed fs-3   mt-2 px-1"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </head>
  <!-- 加入畫布元件，取名使用 -->
  <CartOffcanvas ref="offcanvas"></CartOffcanvas>
</template>
<script>
import CartOffcanvas from '@/components/CartOffcanvas.vue';
export default {
  // inject: ['emitter'],
  components: {
    CartOffcanvas
  },
  data () {
    return {
      nav: 0, //* 初始化 nav 值 atTop: false };
      atTop: true //* 動態導覽列
    };
  },
  props: {
    isLogin: Boolean
  },
  mounted () {
    this.nav = this.$refs.header.offsetHeight; //* 在 mounted 階段獲取 header 的高度
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
  },
  methods: {
    handleScroll () {
      this.atTop = !(window.scrollY > this.nav + 10); //* 使用this.nav進行操作
    },
    //* 透過名稱取操作元件的函式
    openOffcanvas () {
      const cartCp = this.$refs.offcanvas;
      cartCp.showOffcanvas();
    },
    logout () {
    // const api = `${process.env.VUE_APP_API}logout`;
    // this.$http.post(api, this.user).then((res) => {
    //   if (res.data.success) {
    //     this.$router.push('/login');
    //   }
    // });
      confirm('確定從"123"登出?');
    }
  }
};
</script>
<style>
.navbar .backdrop {
  backdrop-filter: blur(5px);
}
</style>
