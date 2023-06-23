<!-- eslint-disable vue/no-parsing-error -->
<template>
  {{ cacheCategory }}
  <div class="row row-cols-2 row-cols-lg-4 g-4 mb-7" ref="products_list">
    <div class="" v-for="item in filtersData" :key="item.id">
      <div class="col overflow-hidden" @click="getProduct(item.id)">
        <div class="card w-100 position-relation newproduct_img" data-num="1">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>{{ item.title }}</h4>
          </div>
          <img data-num="1" height="312" width="312" class="card-img of-cover op-top" :src="item.imageUrl"
            :alt="item.title" />
        </div>
      </div>
      <!-- </router-link> -->
    </div>
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
      products_list: 0,
      isLoading: false,
      id: '',
      product: {},
      cacheSearch: '',
      cacheCategory: ''
    };
  },
  inject: ['emitter'],
  mounted () {
    this.products_list = this.$refs.products_list.offsetHeight; //*
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
    this.emitter.on('customEvent_search', (data) => {
      this.cacheSearch = data;
    });
    this.emitter.on('customEvent_category', (data) => {
      this.cacheSearch = data;
    });
  },
  methods: {
    handleScroll () {
      // this.isLoading = window.scrollY > this.products_list - 300;
      if (window.scrollY > this.products_list - 300) {
        this.pushProducts(this.page);
      }
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      // this.isLoading = true;
      this.$http.get(api).then((res) => {
        // this.isLoading = false;
        if (res.data.success) {
          // console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    pushProducts (page) {
      if (this.pagination.has_next) {
        this.page++;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
        this.isLoading = true;
        this.$http.get(api).then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            // console.log(res.data);
            this.products.push(res.data.products);
            this.pagination = res.data.pagination;
          }
        });
      }
    },
    getProduct (id) {
      this.$router.push(`/products-view/products-item/${id}`);
      //*
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = true;
      this.emitter.emit('customEvent1', this.isLoading);
      this.$http.get(api).then((response) => {
        // alert(response.data);
        this.isLoading = false;
        this.emitter.emit('customEvent2', this.isLoading);
        if (response.data.success) {
          this.product = response.data.product;
          //! mitt
          this.emitter.emit('customEvent3', this.product);
        }
      });
      //* 資料會失敗
      // this.$nextTick(function () {
      //   this.emitter.emit('customEvent3', this.product);
      // });
    }
  },
  computed: {
    // 監聽多個變化（變數） 產生一個資料（函式）
    // 注意return位置
    // filtersData () {
    //   let filteredData = this.products.filter((item) =>
    //     item.title.toLowerCase().includes(this.cacheSearch)
    //   );
    //   filteredData = this.products.filter((item) =>
    //     item.category.toLowerCase().includes(this.cacheSearch)
    //   );
    //   if (filteredData.length === 0 && this.cacheSearch.trim().length === 0) {
    //     // alert('No matching data found.');
    //     return this.products;
    //   } else {
    //     return filteredData;
    //   }
    // }
    filtersData () {
      const filteredData = this.products.filter((item) =>
        item.title.toLowerCase().includes(this.cacheSearch) ||
      item.category.toLowerCase().includes(this.cacheSearch)
      );
      if (filteredData.length === 0 && this.cacheSearch.trim().length === 0) {
        return this.products;
      } else {
        return filteredData;
      }
    }
  },
  created () {
    this.getProducts();
  }
};
</script>
<style scoped>
.col {
  cursor: pointer;
}
</style>
