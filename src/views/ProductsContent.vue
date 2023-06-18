<template>
  <!-- 最新球衣 -->
  <div
    class="my-5 d-flex justify-content-center align-items-center border-3 border-nbaBlue border-top pt-5"
  >
    <h2>NEW</h2>
    <img
      src="../assets/nbaWeb/05284b30a1fda6bcdc09420b5c1e7127.svg"
      height="80"
      alt="NEWlogo"
      class=""
    />
    <h2>PRODUCTS</h2>
  </div>
  <div class="container-xxl">
    <!-- class 中有許多是沒有作用的，例如：row-cols-lg-12 ，row本身就是一列的flex，要變一欄再加上row-cols-1即可-->
    <!-- 此段下方的 .row-cols-1(本來就一列), col(有一個col-lg-3即可) 皆可以移除 -->
    <main class="row ps-lg-5">
      <!-- 側欄 -->
      <ProductsSide></ProductsSide>
      <!-- 產品圖 -->
      <section class="col-lg-10 mb-5">
        <ProductsList></ProductsList>
      </section>
    </main>
  </div>
</template>
<script>
import ProductsSide from '@/components/ProductsSide.vue';
import ProductsList from '@/components/ProductsList.vue';
export default {
  components: {
    ProductsSide,
    ProductsList
  }
};
</script>
