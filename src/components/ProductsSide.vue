<!-- eslint-disable no-unused-expressions -->
<template>
  <!-- 上面row響應 下面col也要響應~~~ -->
  <aside class="col-lg-2 lh-lg aside">
    <h3 class="text-center text-lg-start">Player</h3>
    <!--  -->
    <!-- {{ cacheCategory }} -->
    <div class="my-3">
      <input type="text" class="form-control rounded-0" name="" id="" aria-describedby="helpId" v-model="cacheSearch"
        placeholder="🍳 search player">
    </div>
    <!-- BS內建margin 很多推不到位 可能要設定0 用開發者看會有淡黃區域 -->
    <ul class="list-unstyled d-flex flex-lg-column justify-content-center my-3">
      <li>
        <input ref="all" type="radio" class="d-none" name="side" id="all" value="" v-model="cacheCategory"
          :checked="cacheCategory === false">
        <label for="all">
          <span class="aside_span"> － </span>
          All
        </label>
      </li>
      <li v-for="(item, index) in uniqueCategories" :key="index">
        <input type="radio" class="d-none" name="side" :id="index" :value="item" v-model="cacheCategory">
        <label :for="index">
          <span class="aside_span"> － </span>
          {{ item }}
        </label>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      uniqueCategories: [],
      cacheSearch: '',
      cacheCategory: '',
      input_all: null
    };
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        // console.log('products:', response);
        this.isLoading = false;
        this.products.forEach(product => {
          if (!this.uniqueCategories.includes(product.category)) {
            this.uniqueCategories.push(product.category);
          }
        });
      });
    }
  },
  // computed: {
  //   cacheSearch () {
  //     this.emitter.emit('customEvent_filter', this.cacheSearch);
  //   }
  // }
  watch: {
    cacheSearch () {
      this.emitter.emit('customEvent_search', this.cacheSearch);
      this.cacheCategory = false;
    },
    cacheCategory () {
      this.emitter.emit('customEvent_category', this.cacheCategory);
    }
  },
  mounted () {
  },
  created () {
    this.getProducts();
  }
};
</script>
