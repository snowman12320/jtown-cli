<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- {{ cacheCategory }} -->
  <div class="row row-cols-2 row-cols-lg-4 g-4 mb-7" ref="products_list">
    <div class="" v-for="item in filtersData" :key="item.id">
      <div class="col overflow-hidden" @click="getProduct(item.id)">
        <div class="card w-100 position-relation newproduct_img" data-num="1">
          <div class="newproduct_cloth">
            <h6>Player</h6>
            <h4>{{ typeof (item.title) }}</h4>
            <!-- <h4>{{ typeof(item.title) }}</h4> -->
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
  inject: ['emitter'],
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
  mounted () {
    this.products_list = this.$refs.products_list.offsetHeight; //*
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
    this.emitter.on('customEvent_search', (data) => {
      this.cacheSearch = data;
      // console.log(typeof (this.cacheSearch));
    });
    this.emitter.on('customEvent_category', (data) => {
      // ? 都需帶入cacheSearch 才會成功，應該要帶入cacheCategory
      this.cacheCategory = data;
      // console.log(typeof (this.cacheCategory));
    });
    this.emitter.on('get-productId', this.id);
    this.emitter.on('get-product', () => {
      this.getProduct(this.id);
    });
  },
  created () {
    this.getProducts();
  },
  computed: {
    // 監聽多個變化（變數） 產生一個資料（函式），注意return位置
    filtersData () {
      //! 在productList正常，在productItem會找不到cacheSearch等值，故使用判斷路由
      if (!this.$route.path.includes('products-content')) {
        return this.products;
      } else {
        //! 要用 &&，不然cacheCategory搜尋，會有問題，用｜｜好像都會是true，不懂為何不是｜｜
        const filteredData = this.products.filter((item) =>
          item.title.toLowerCase().includes(this.cacheSearch.toLowerCase()) &&
        item.category.toLowerCase().includes(this.cacheCategory.toLowerCase())
        );
        if (filteredData.length === 0 && this.cacheSearch.trim().length === 0) {
          return this.products;
        } else {
          return filteredData;
        }
      }
    }
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
      this.isLoading = true;
      this.isLoading_big = true;
      this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.isLoading_big = false;
        this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
        if (res.data.success) {
          // console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    //* 捲動更新
    // ? 可嘗試改變page的數量 比如一次四個？
    pushProducts (page) {
      if (this.pagination.has_next) {
        this.page++;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
        this.isLoading = true;
        this.$http.get(api).then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products.push(res.data.products);
            this.pagination = res.data.pagination;
          }
        });
      }
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
<style scoped>
.col {
  cursor: pointer;
}
</style>
