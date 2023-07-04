<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- 小圖示 -->
  <a target="_blank" href="https://www.facebook.com/100002537945640" class="position-fixed bottom-0 end-0 me-5"
    @mouseenter="updateHover()" @mouseleave="updateHover()">
    <img v-show="isHover" src="@\assets\nbaWeb\silhouette-basket-05.svg" alt="" height="100" width="100" />
    <img v-show="!isHover" src="@/assets/nbaWeb/1652102106slam-dunk-silhouette-basketball.svg" alt="" height="100"
      width="100" />
    <i class="bi bi-messenger position-absolute top-0 end-0 fs-3 text-primary" style="transform: translateY(-30px);"></i>
  </a>
  <!--  -->
  <footer class="footer bg-dark text-center text-white py-2 pt-4">
    <p>Copyright © {{ new Date().getFullYear() }} JerseyTown.All rights reserved.</p>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      isHover: false
    };
  },
  methods: {
    updateHover () {
      this.isHover = !this.isHover;
    }
  }
};
</script>
<style lang="">

</style>
