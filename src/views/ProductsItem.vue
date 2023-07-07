<template>
  <div class="">
    <Loading :active="isLoading_big"></Loading>
    <!--  -->
    <div class="container-xxl">
      <nav aria-label="breadcrumb" class="mt-10">
        <ol class="breadcrumb">
          <li class="breadcrumb-item  text-nbaBlue"><router-link style="text-decoration:none !important"
              to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item  text-nbaBlue"><router-link style="text-decoration:none !important"
              to="/products-view/products-content">Product</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <!--  -->
      <div class="row row-cols-md-2 g-5 mt-5">
        <div id="carouselExampleIndicators" class="carousel  slide col-md-6" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active text-center h-100">
              <img :src="product.imageUrl" class=" w-auto  h-100" alt="..." />
            </div>
            <div class="carousel-item text-center h-100">
              <img src="https://source.unsplash.com/random/1500x1200/?jersey" class=" w-auto  h-100" alt="..." />
            </div>
            <div class="carousel-item text-center h-100">
              <img src="https://source.unsplash.com/random/1500x1200/?basketball" class=" w-auto  h-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-info p-2 rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon bg-info p-2 rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!--  -->
        <div class="col-md-6 d-flex flex-column justify-content-around text-center">
          <h1 class="mb-5">{{ product.title }}</h1>
          <!--  -->
          <div class="my-5">
            <div class="d-flex justify-content-center w-50 mx-auto ">
              <div class="form-check">
                <input class="form-check-input d-none" type="radio" name="size" id="S">
                <label class="form-check-label border border-secondary text-secondary px-3 py-2" for="S">
                  S
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input d-none" type="radio" name="size" id="M">
                <label class="form-check-label border border-secondary text-secondary px-3 py-2" for="M">
                  M
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input d-none" type="radio" name="size" id="L">
                <label class="form-check-label border border-secondary text-secondary px-3 py-2" for="L">
                  L
                </label>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="d-flex align-items-center justify-content-center gap-3">
            <small class="text-secondary fs-6 text-decoration-line-through fw-lighter">$ {{
              $filters.currency(product.origin_price) }}</small>
            <h2 class="text-center">$ {{ $filters.currency(product.price) }}</h2>
          </div>
          <div class="justify-content-center d-flex align-items-center my-3 gap-5">
            <div class="fs-1 d-flex justify-content-center gap-3 align-items-center">
              <button style="height:40px" :disabled="qty === 1" @click="qty--"
                class="btn btn-outline-secondary py-0">-</button>
              <span class="">{{ qty }}</span>
              <button style="height:40px" @click="qty++" class="btn btn-outline-secondary py-0">+</button>
            </div>
            <!--  -->
            <i v-if="isFavorite" @click="updateFavo(product.id)"
              class="fa-solid fa-heart fa-beat-fade text-danger fs-3"></i>
            <i v-else @click="updateFavo(product.id)" class="fa-solid fa-heart-crack fa-shake text-secondary fs-3"></i>
          </div>
          <!--  -->
          <div class="d-flex flex-column flex-md-row justify-content-center gap-md-5 mt-5 gap-1">
            <button class="btn-primary btn" @click="addToCart(product.id, qty, isBuy = false)"
              :class="{ 'btn btn-outline-primary': product.id === status.loadingItem }"
              :disabled="product.id === status.loadingItem">ADD TO CART</button>
            <button class="btn btn-danger" @click="addToCart(product.id, qty, isBuy = true)">BUY NOW</button>
          </div>
          <!--  -->
          <div class="accordion d-flex justify-content-center  mt-5" id="accordionPanelsStayOpenExample">
            <div class="accordion-item w-50">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  DETAILS
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse "
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body text-start">
                  <p class="">規格：</p>
                  <p class="">製造日期：</p>
                  <p class="">製造地：台灣</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <h3 class="mt-7">類似商品</h3>
      <ProductsList></ProductsList>
    </div>
  </div>
</template>
<script>
import ProductsList from '@/components/ProductsList.vue';
import loginMixin from '../mixins/loginMixin';
export default {
  mixins: [loginMixin],
  inject: ['emitter'],
  components: {
    ProductsList
  },
  data () {
    return {
      isFavorite: false,
      qty: 1,
      isLoading_big: false,
      product: {},
      id: '',
      status: {
        loadingItem: ''
      },
      favoriteData: [],
      checkFavorite: false
    };
  },
  //! mitt
  mounted () {
    this.emitter.on('customEvent_isLoading_big', (data) => {
      this.isLoading_big = data;
    });
    this.emitter.on('customEvent_getProduct', (data) => {
      this.product = data;
    });
    this.emitter.on('customEvent_isFavorite', (data) => {
      this.isFavorite = data;
    });
    this.emitter.on('customEvent_updateFavorite', () => {
      this.getFavoriteData();
    });
  },
  created () {
    this.id = this.$route.params.productId;//! 統一商品唯一的ID(item.id)
    this.getProduct();
    this.getFavoriteData(); //! 用其他電腦，先新增本地陣列
  },
  methods: {
    updateFavo (id) {
      this.checkFavorite = Boolean(localStorage.getItem('favorite').indexOf(id) !== -1); //* 搜尋目標
      if (this.checkFavorite) { //* 存在就刪除
        // 比對
        // console.log(checkFavorite);
        this.isFavorite = false;//* 改成無收藏按鈕
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '移除我的收藏'
        });
        // 刪除
        this.favoriteData = JSON.parse(localStorage.getItem('favorite'));
        // console.log(this.favoriteData);
        const index = this.favoriteData.indexOf(id);
        // console.log(index);
        if (index > -1) {
          this.favoriteData.splice(index, 1);
          localStorage.setItem('favorite', JSON.stringify(this.favoriteData));
        }
      } else { //* 不存在就儲存
        this.isFavorite = true;//* 改成收藏按鈕
        this.emitter.emit('push-message', {
          style: 'success',
          title: '加入我的收藏'
        });
        // 新增
        this.favoriteData.push(id);
        localStorage.setItem('favorite', JSON.stringify(this.favoriteData));
      }
      this.emitter.emit('customEvent_updateFavorite');//! 觸發收藏表更新
    },
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.isLoading_big = true;
      this.$http.get(api).then((response) => {
        // console.log(response.data);
        this.isLoading = false;
        this.isLoading_big = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart (id, qty = 1, isBuy) {
      if (!this.isLogin) {
        this.$swal.fire('Please', ' Sign in or Sign up first.', 'warning');
        this.$router.push('/login');
      } else {
        this.status.loadingItem = id;
        this.isLoading = true;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        const cart = {
          product_id: id,
          qty
        };
        this.$http.post(url, { data: cart }).then((response) => {
          this.isLoading = false;
          this.status.loadingItem = '';
          this.$httpMessageState(response, '加入購物車');
          this.emitter.emit('customEvent_getCart', this.getCart);
          if (isBuy) {
            this.$router.push('/cart-view/cart-list');
            // *觸發該頁函式，讓下一頁資料更新
            this.emitter.emit('customEvent_getCart', this.getCart);
          }
        });
      }
    },
    getFavoriteData () {
      // localStorage.clear();
      if (localStorage.getItem('favorite')) {
        this.favoriteData = JSON.parse(localStorage.getItem('favorite'));
        const checkFavorite = Boolean(JSON.parse(localStorage.getItem('favorite')).indexOf(this.id) !== -1); //* 搜尋目標
        if (checkFavorite) {
          this.isFavorite = true;
        } else {
          this.isFavorite = false;
        }
      } else {
        localStorage.setItem('favorite', JSON.stringify(this.favoriteData));
      }
    }
  }
};
</script>
<style scoped>
.carousel {
  height: 500px;
}

.carousel-inner {
  height: 500px;
}

.accordion-button:focus {
  z-index: 3;
  border-color: var(--bs-accordion-btn-focus-border-color);
  outline: 0;
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  background-color: #fff;
  color: black;
}

.accordion-item:last-of-type {
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

.accordion-item:first-of-type {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}

.accordion {
  --bs-accordion-btn-active-icon: var(--bs-accordion-btn-icon);
}

.form-check input:checked+label {
  border: 2px solid black !important;
  color: black !important;
}
</style>
