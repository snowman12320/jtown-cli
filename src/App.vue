<template>
  <router-view />
</template>
<style lang="scss">
// @import "@/assets/all.scss";
@import '@/assets/main.scss';
// @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js";
</style>
<script>
export default {
  data () {
    return {
      nav: 0, //* 初始化 nav 值
      atTop: false
    };
  },
  mounted () {
    this.nav = this.$refs.header.offsetHeight; //* 在 mounted 階段獲取 header 的高度
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      // eslint-disable-next-line no-unneeded-ternary
      this.atTop = window.scrollY > this.nav ? false : true; //* 使用this.nav進行操作
    }
  }
};
</script>
