<template>
  <!-- 最新球衣 -->
  <div id="Product" class="my-5 d-flex justify-content-center align-items-center">
    <h2>NEW</h2>
    <img src="../assets/nbaWeb/05284b30a1fda6bcdc09420b5c1e7127.svg" height="80" alt="recentlyLogo" class="" />
    <h2>PRODUCTS</h2>
  </div>
  <!-- <ProductsList></ProductsList> -->
  <div class="" style="height:1000px !important;overflow:hidden">
    <div class="masonry">
      <div class="item" v-for="item in products" :key="item.id">
        <div class=" overflow-hidden" @click="getProduct(item.id)">
          <div class="card w-100 position-relation newproduct_img" data-num="1">
            <div class="newproduct_cloth">
              <h6>Player</h6>
              <h4>{{ item.title }}</h4>
            </div>
            <img data-num="1" style="height:auto " class="card-img of-cover op-top w-100" :src="item.imageUrl"
              :alt="item.title" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center mt-4 d-flex flex-column flex-md-row justify-content-center">
    <router-link to="/products-view/products-content"
      class="btn btn-outline-dark rounded-pill fs-5 me-md-3 me-0 mb-3 mb-md-0">
      MORE
      PRODUCT
    </router-link>
  </div>
</template>
<script>
// import ProductsList from '@/components/ProductsList.vue';
export default {
  components: {
    // ProductsList
  },
  data () {
    return {
      products: {}
    };
  },
  created () {
    this.getProducts();
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = true;
          this.products = res.data.products;
        }
      });
    },
    getProduct (id) { //! 只取一個商品
      // console.log(id);
      this.$router.push(`/products-view/products-item/${id}`);
      this.isLoading = true;
      this.isLoading_big = true;
      this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.isLoading_big = false;
        this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
        if (res.data.success) {
          this.product = res.data.product;
          this.emitter.emit('customEvent_getProduct', this.product);
          // 取得所有的carousel-item元素，移除所有carousel-item元素的active類別
          const carouselItems = document.querySelectorAll('.carousel-item');
          carouselItems.forEach(function (item) {
            item.classList.remove('active');
          });
          carouselItems[0].classList.add('active');
          window.scrollTo(0, 0);
        }
      });
    }
  }
};
</script>
<style>
.masonry {
  column-count: 4;
  column-gap: 0;
  position: relative;
}

.masonry::after {
  content: '';
  background: linear-gradient(to bottom, transparent, white);
  height: 100px;
  position: absolute;
  top: 900px;
  left: 0;
  right: 0;
}

.item {
  padding: 2px;
  position: relative;
  counter-increment: item-counter;
  cursor: pointer;
}

.item img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
