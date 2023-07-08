<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- {{ cacheCategory }} -->
  <div class="">
    <!-- 排序  -->
    <div class="mb-3 d-flex justify-content-end align-items-center">
      <label for="" class="form-label">Sort by：</label>
      <select v-model="selectSort" class="form-select form-select-lg rounded-0 p-1 fs-6" style="width:250px" name=""
        id="">
        <option class="fs-6" value="0" selected>Relevance</option>
        <option class="fs-6" value="AZ">Name - AZ</option>
        <option class="fs-6" value="ZA">Name - ZA</option>
        <option class="fs-6" value="Low">Price - Low to Height</option>
        <option class="fs-6" value="Height">Price - Height to Low</option>
      </select>
    </div>
    <hr class="py-3">
    <div class="row row-cols-2 row-cols-lg-5 g-4 mb-7" ref="products_list">
      <div class="" v-for="item in filtersData" :key="item.id">
        <div class="col overflow-hidden" @click="getProduct(item.id)">
          <div class="card w-100 position-relation newproduct_img" data-num="1">
            <div class="newproduct_cloth">
              <h6>Player</h6>
              <h4>{{ item.title }} {{ item.price }} {{ item.category }}</h4>
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
  </div>
</template>
<script>

export default {
  inject: ['emitter'],
  data () {
    return {
      products: [], //* 原始資料
      page: 1,
      pagination: {},
      products_list: 0,
      isLoading: false,
      id: '',
      product: {},
      cacheSearch: '',
      cacheCategory: '',
      filterCheck: '',
      isFavorite: false,
      selectSort: '0'
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll); //* 監聽滾動事件
    this.emitter.on('customEvent_search', (data) => {
      this.cacheSearch = data;
      // console.log(this.cacheSearch);
    });
    this.emitter.on('customEvent_category', (data) => {
      this.cacheCategory = data;
      // console.log(typeof (this.cacheCategory));
    });
    this.emitter.on('customEvent_Check', (data) => {
      this.filterCheck = data;
    });
  },
  created () {
    this.getProducts();
  },
  computed: {
    filtersData () {
      let filteredData = [];

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isLoading_big = true;
      try {
        if (!this.$route.path.includes('products-content')) {
          filteredData = this.products;
        } else {
          filteredData = this.products.filter((item) =>
            (!this.cacheSearch || item.title.toLowerCase().includes(this.cacheSearch.toLowerCase())) &&
          (!this.cacheCategory || item.category.toLowerCase().includes(this.cacheCategory.toLowerCase()))
          );

          if (filteredData.length === 0 && !this.cacheSearch) {
            return this.products;
          }

          const filterFunc = {
            2999: item => item.price <= 2999,
            5000: item => item.price >= 5000,
            default: () => true
          }[this.filterCheck || 'default'];

          const sortFunc = {
            Low: (a, b) => a.price - b.price,
            Height: (a, b) => b.price - a.price,
            AZ: (a, b) => a.title.localeCompare(b.title),
            ZA: (a, b) => b.title.localeCompare(a.title),
            default: () => 0
          }[this.selectSort || 'default'];

          filteredData = filteredData.filter(filterFunc).sort(sortFunc);
        }
      } finally {
        //! 無法在 computed 屬性中使用了副作用
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.isLoading_big = false;
      }

      return filteredData;
    }
  },

  methods: {
    handleScroll () {
      this.products_list = this.$refs.products_list.offsetHeight; //! 在mounted定義會是零
      // console.log(window.scrollY);
      // console.log(this.products_list);
      if (window.scrollY > this.products_list - 300) {
        //!
        this.pushProducts();
      }
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
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
    // 將新數據合併到舊數據時，可以使用 concat 方法代替 new Set，避免重複儲存，也不用push推新的陣列物件進去，這樣會有兩個陣列物件，會無法迴圈
    // pushProducts (page) {
    //   if (this.pagination.has_next) {
    //     this.page++;
    //     const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
    //     this.isLoading = true;
    //     this.$http.get(api).then((res) => {
    //       this.isLoading = false;
    //       if (res.data.success) {
    //         this.pagination = res.data.pagination;
    //         this.products = [...new Set(this.products.concat(res.data.products))];
    //         console.log(this.products);
    //       }
    //     });
    //   }
    // },
    pushProducts () {
      //! 要用this.isLoading阻擋，避免讀取api間隔，持續捲動導致重複讀取資料
      if (!this.isLoading && this.pagination.has_next) {
        this.isLoading = true;
        // if (this.pagination.has_next) {
        // console.log(this.pagination);
        this.page++;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${this.page}`;
        this.$http.get(api).then((res) => {
          if (res.data.success) {
            this.pagination = res.data.pagination;
            // console.log(this.pagination);
            this.products = this.products.concat(res.data.products);
            // console.log(this.products);
            //! 成功讀取分頁數後，才能關閉載入，進行下次資料儲存，否則會重複儲存
            this.isLoading = false;
          }
        });
        // }
      }
    },

    getProduct (id) { //! 只取一個商品
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
      // 確認收藏狀態
      //! 要用this.id ，用product.id會錯 ，需分清楚差別
      //! 在其他電腦，若先判斷會錯誤
      // console.log(Boolean(JSON.parse(localStorage.getItem('favorite'))));
      if (JSON.parse(localStorage.getItem('favorite'))) {
        const checkFavorite = Boolean(JSON.parse(localStorage.getItem('favorite')).indexOf(id) !== -1); //* 搜尋目標
        if (checkFavorite) {
          this.isFavorite = true;
          this.emitter.emit('customEvent_isFavorite', this.isFavorite);
        } else {
          this.isFavorite = false;
          this.emitter.emit('customEvent_isFavorite', this.isFavorite);
        }
      }
    }
  }
};
</script>
<style scoped>
.col {
  cursor: pointer;
}
</style>
