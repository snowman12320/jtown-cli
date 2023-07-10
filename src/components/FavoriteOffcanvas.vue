<template>
  <!-- {{ carts }} -->
  <div ref="offcanvas" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <Loading :active="isLoading"></Loading>
    <div class="offcanvas-header d-flex justify-content-between align-items-center">
      <h5 id="offcanvasRightLabel" class="fs-3 text-center pt-3"><i class="fa fa-check-circle text-nbaRed"
          aria-hidden="true"></i> MY COLLECT
      </h5>
      <button type="button" class="btn-close text-reset fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body ">
      <div class="d-flex p-2 border border-2 border-light rounded-3 product_item my-2 gap-2" @click="getProduct(item.id)"
        v-for="(item, id) in filteredProducts" :key="id">
        <div class="" style="width:100px !important;height:70px !important">
          <img class="of-cover op-top w-100 h-100" :src="item.imageUrl" alt="">
        </div>
        <div class=" w-100 p-1 ">
          <h2 class="fs-6 text-center">{{ item.title }}</h2>
          <p class="text-center pt-2 fs-5 mb-0 ">
            <small class="text-secondary  text-decoration-line-through fw-lighter" style="font-size:5px">$ {{
              $filters.currency(item.origin_price)
            }}</small>
            $ {{ $filters.currency(item.price) }}
            <span class="" style="font-size:5px">/{{ item.unit }}</span>
          </p>
        </div>
        <button @click="openDelModel(item)" type="button" class="border-0 bg-transparent " style="height:30px"><i
            class="bi bi-trash"></i></button>
      </div>
      <!--  -->
      <p class="d-flex justify-content-end fs-4 mt-3  ">
        <span class="">TOTAL( {{ favoriteIds.length }} ) </span>
      </p>
      <!--  -->
      <!-- <router-link to="/cart-view/cart-list" @click="hideOffcanvas" name="" id=""
        class="btn btn-outline-nbaRed w-100 mt-5" href="#" role="button">移除全部</router-link> -->
    </div>
  </div>
  <DelModal :item="tempFavorite" ref="delModal" @del-item="delFavorite" />
</template>
<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';
import DelModal from '@/components/DelModal.vue';
export default {
  inject: ['emitter'],
  mixins: [offcanvasMixin], //* 混用獨立的功能
  components: {
    DelModal
  },
  data () {
    return {
      offcanvas: {},
      isLoading: false,
      products: [],
      filteredProducts: [],
      favoriteIds: [],
      tempFavorite: ''
    };
  },
  mounted () {
    this.emitter.on('customEvent_updateFavorite', () => {
      this.getFavorite();
      this.getFavoriteId();
    });
  },
  created () {
    this.getFavoriteId();
    this.getFavorite();
  },
  computed: {
  },
  methods: {
    getFavorite () {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.products = res.data.products;
          this.filteredProducts = this.products.filter(item => this.favoriteIds.includes(item.id));
        }
      });
    },
    getFavoriteId () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favorite'));
    },
    openDelModel (item) {
      this.tempFavorite = { ...item };
      const delCp = this.$refs.delModal;
      delCp.showModal();
    },
    delFavorite () {
      const checkFavorite = Boolean(localStorage.getItem('favorite').indexOf(this.tempFavorite.id) !== -1); //* 搜尋目標
      if (checkFavorite) { //* 存在就刪除
        const favoriteData = JSON.parse(localStorage.getItem('favorite'));
        const index = favoriteData.indexOf(this.tempFavorite.id);
        favoriteData.splice(index, 1);
        localStorage.setItem('favorite', JSON.stringify(favoriteData));
        this.getFavoriteId();
        this.getFavorite();
      }
      this.emitter.emit('customEvent_updateFavorite');//! 觸發商品內頁的收藏更新
      const delCp = this.$refs.delModal;
      delCp.hideModal();
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
.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.product_item {
  cursor: pointer;
}

.product_item:hover {
  background: rgba(172, 121, 255, 0.274);
  transition: all 300ms;
}
</style>
