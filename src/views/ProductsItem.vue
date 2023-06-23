<template>
  <Loading :active="isLoading"></Loading>
  <!--  -->
  <div class="container-xxl">
    <!-- <i class="fa-solid fa-heart fa-flip display-1 mt-20"></i> -->
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
            <img src="https://source.unsplash.com/random/1500x1200/?coat" class=" w-auto  h-100" alt="..." />
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
        <div class="d-flex align-items-center justify-content-center gap-3">
          <small class="text-secondary fs-6 text-decoration-line-through fw-lighter">$ {{
            $filters.currency(product.origin_price) }}</small>
          <h2 class="text-center">$ {{ $filters.currency(product.price) }}</h2>
        </div>
        <div class="justify-content-center d-flex align-items-center my-3 gap-5">
          <div class="fs-1 d-flex justify-content-center gap-3 align-items-center">
            <button style="height:40px" @click="qty--" class="btn btn-outline-secondary py-0">-</button>
            <span class="">{{ qty }}</span>
            <button style="height:40px" @click="qty++" class="btn btn-outline-secondary py-0">+</button>
          </div>
          <!--  -->
          <i v-if="isFavorite" @click="updateCart" class="fa-solid fa-heart fa-beat-fade text-danger fs-3"></i>
          <i v-else @click="updateCart" class="fa-solid fa-heart-crack fa-shake text-secondary fs-3"></i>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-center gap-md-5 mt-5 gap-1">
          <button class="btn-primary btn" @click="addToCart(product.id, qty)"
            :class="{ 'btn btn-outline-primary': product.id === status.loadingItem }"
            :disabled="product.id === status.loadingItem">加入購物車</button>
          <router-link to="/cart-view/cart-list"><button class="btn btn-danger">立即購買</button></router-link>
        </div>
      </div>
    </div>
    <!--  -->
    <h3 class="mt-7">相關商品</h3>
    <ProductsList></ProductsList>
  </div>
</template>
<script>
import ProductsList from '@/components/ProductsList.vue';
export default {
  components: {
    ProductsList
  },
  data () {
    return {
      isFavorite: false,
      qty: 0,
      isLoading: false,
      product: {},
      id: '',
      status: {
        loadingItem: ''
      }
    };
  },
  inject: ['emitter'],
  //! mitt
  mounted () {
    this.emitter.on('customEvent1', (data) => {
      this.isLoading = data;
    });
    this.emitter.on('customEvent2', (data) => {
      this.isLoading = data;
    });
    this.emitter.on('customEvent3', (data) => {
      this.product = data;
    });
  },
  methods: {
    updateCart () {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        this.emitter.emit('push-message', {
          style: 'success',
          title: '加入我的最愛'
        });
        // this.$httpMessageState(response, '加入我的最愛');
      } else {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '移除我的最愛'
        });
        // this.$httpMessageState(response, '移除我的最愛');
      }
    },
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart (id, qty = 1) {
      this.status.loadingItem = id;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
        // this.$router.push('/cart-view/cart-list');
      });
    }
  },
  created () {
    this.id = this.$route.params.productId;
    this.getProduct();
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
</style>
