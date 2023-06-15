<template>
  <Header></Header>
  <!-- 最新球衣 -->
  <div
    class="my-5 d-flex justify-content-center align-items-center border-3 border-nbaBlue border-top pt-5"
  >
    <h2>NEW {{ atTop }}</h2>
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
      <section class="col-lg-9 mb-5">
        <div class="row row-cols-2 row-cols-lg-3 g-4">
          <div class="col overflow-hidden">
            <div
              class="card w-100 position-relation newproduct_img"
              data-num="1"
            >
              <div class="newproduct_cloth">
                <h6>Player</h6>
                <h4>Kobe Bryant</h4>
              </div>
              <img
                data-num="1"
                height="312"
                width="312"
                class="card-img of-cover"
                src="../assets/nbaWeb/olivier-collet-H7cIqigZOBo-unsplash.jpg"
                alt="new1"
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card w-100 position-relation newproduct_img"
              data-num="2"
            >
              <div class="newproduct_cloth">
                <h6>Player</h6>
                <h4>Derrick Rose</h4>
              </div>
              <img
                data-num="2"
                height="312"
                width="312"
                class="card-img of-cover"
                src="../assets/nbaWeb/eddy-lackmann-6MmfmBJd8PE-unsplash.jpg"
                alt="new2"
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card w-100 position-relation newproduct_img"
              data-num="3"
            >
              <div class="newproduct_cloth">
                <h6>Player</h6>
                <h4>Kevin Durant</h4>
              </div>
              <img
                data-num="3"
                height="312"
                width="312"
                class="card-img of-cover"
                src="../assets/nbaWeb/mingxuan_leng-EXqK7oqvKhQ-unsplash.jpg"
                alt="new3"
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card w-100 position-relation newproduct_img"
              data-num="4"
            >
              <div class="newproduct_cloth">
                <h6>Player</h6>
                <h4>Stephen Curry</h4>
              </div>
              <img
                data-num="4"
                height="312"
                width="312"
                class="card-img of-cover"
                src="../assets/nbaWeb/tyler-martoia-nVpT1jeu3f0-unsplash.jpg"
                alt="new4"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <Footer></Footer>
</template>
<script>
import ProductsSide from '@/components/ProductsSide.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    ProductsSide,
    Header,
    Footer
  }
};
</script>
