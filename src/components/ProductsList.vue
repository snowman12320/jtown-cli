<template>
  <div class="row row-cols-2 row-cols-lg-4 g-4 mb-7" ref="products_list">
    <router-link to="/products-view/products-item">
      <div class="col overflow-hidden">
        <div class="card w-100 position-relation newproduct_img" data-num="1">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>Kobe Bryant</h4>
          </div>
          <img data-num="1" height="312" width="312" class="card-img of-cover"
            src="@/assets/nbaWeb/olivier-collet-H7cIqigZOBo-unsplash.jpg" alt="new1" />
        </div>
      </div>
    </router-link>
    <router-link to="/products-view/products-item">
      <div class="col">
        <div class="card w-100 position-relation newproduct_img" data-num="2">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>Derrick Rose</h4>
          </div>
          <img data-num="2" height="312" width="312" class="card-img of-cover"
            src="@/assets/nbaWeb/eddy-lackmann-6MmfmBJd8PE-unsplash.jpg" alt="new2" />
        </div>
      </div>
    </router-link>
    <router-link to="/products-view/products-item">
      <div class="col">
        <div class="card w-100 position-relation newproduct_img" data-num="3">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>Kevin Durant</h4>
          </div>
          <img data-num="3" height="312" width="312" class="card-img of-cover"
            src="@/assets/nbaWeb/mingxuan_leng-EXqK7oqvKhQ-unsplash.jpg" alt="new3" />
        </div>
      </div>
    </router-link>
    <router-link to="/products-view/products-item">
      <div class="col">
        <div class="card w-100 position-relation newproduct_img" data-num="4">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>Stephen Curry</h4>
          </div>
          <img data-num="4" height="312" width="312" class="card-img of-cover"
            src="@/assets/nbaWeb/tyler-martoia-nVpT1jeu3f0-unsplash.jpg" alt="new4" />
        </div>
      </div>
    </router-link>
  </div>
  <!--  -->
  <div class="text-center">
    <div v-show="isLoading" class="spinner-grow text-warning " role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [], //* 原始資料
      page: 1,
      pagination: { has_next: true },
      products_list: null,
      isLoading: false
    };
  },
  mounted () {
    this.products_list = this.$refs.products_list.offsetHeight; //* 在 mounted 階段獲取 header 的高度
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
  },
  methods: {
    handleScroll () {
      // this.isLoading = window.scrollY > this.products_list - 300;
      if (window.scrollY > this.products_list - 300) {
        this.getProducts(this.page);
      }
    },
    getProducts (page) {
      if (this.pagination.has_next) {
        this.page++;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
        this.isLoading = true;
        this.$http.get(api).then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            // console.log(res.data);
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        });
      }
    }
  }
};
</script>
