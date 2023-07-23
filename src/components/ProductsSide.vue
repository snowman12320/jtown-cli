<!-- eslint-disable no-unused-expressions -->
<template>
  <!-- 上面row響應 下面col也要響應~~~ -->
  <aside class="col-lg-2 lh-lg aside sticky-lg-top shadow align-self-start" style="top:100px">
    <!-- <h3 class="text-center text-lg-start">Player</h3> -->
    <!--  -->
    <!-- {{ cacheCategory }} -->
    <div class="my-3">
      <!-- <input type="search" class="form-control rounded-0" name="" id="" aria-describedby="helpId"
        v-model.lazy="cacheSearch" placeholder="Search Player..."> -->
      <multiselect @click="getProducts()" v-model="cacheSearch" :options="options" :custom-label="nameWithLang"
        placeholder="search" label="title" track-by="title"></multiselect>
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
      <!-- 篩選 -->
      <hr class="py-2">
      <li class="">
        <h2 class="fs-6">PRICE：</h2>
        <div class="form-check">
          <label class="form-check-label" for="2999">
            <input type="radio" class="form-check-input" v-model="filterCheck" name="filterCheck" id="2999" value="2999">
            0-2999 </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="5000">
            <input type="radio" class="form-check-input" v-model="filterCheck" name="filterCheck" id="5000" value="5000">
            5000+ </label>
        </div>
      </li>
    </ul>
  </aside>
</template>
<script>
import Multiselect from '@/components/Multiselect.vue';

export default {
  inject: ['emitter'],
  components: { Multiselect },
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
      filterCheck: '',
      input_all: null,
      options: []
    };
  },
  directives: {
    // 'model-enter': {
    //   bind (el, binding, vnode) {
    //     el.addEventListener('keydown', function (event) {
    //       if (event.key === 'Enter') {
    //         vnode.context[binding.expression] = el.value;
    //         vnode.context[binding.value]();
    //       }
    //     });
    //   }
    // }
  },
  created () {
    this.getProducts();
  },
  watch: {
    cacheSearch () {
      this.emitter.emit('customEvent_search', this.cacheSearch.title);
      this.cacheCategory = '';
    },
    cacheCategory () {
      this.cacheSearch = '';//* 避免分類內容和搜尋內容，兩個條件衝突
      this.filterCheck = '';
      this.emitter.emit('customEvent_category', this.cacheCategory);
    },
    filterCheck () {
      this.emitter.emit('customEvent_Check', this.filterCheck);
    }
  },
  methods: {
    nameWithLang ({ title }) { //* 整理選單
      return `${title}`;
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.options = response.data.products;
        this.isLoading = false;
        this.products.forEach(product => {
          if (!this.uniqueCategories.includes(product.category)) {
            this.uniqueCategories.push(product.category);
          }
        });
      });
    }
  }
};
</script>
