<template>
  <div class="">
    <Loading :active="isLoading_big"></Loading>
    <!--  -->
    <div class="container-xl">
      <nav aria-label="breadcrumb" class="mt-10">
        <ol class="breadcrumb">
          <li class="breadcrumb-item  text-nbaBlue"><router-link style="text-decoration:none !important"
              to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item  text-nbaBlue"><router-link style="text-decoration:none !important"
              to="/products-view/products-content">Product</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }} </li>
        </ol>
      </nav>
      <!--  -->
      <div class="row row-cols-md-2 g-5 mt-5">
        <div id="carouselExampleIndicators" class="carousel  slide col-md-8" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <!-- 第一個主圖的指標不用程式化，其餘其他圖片的指標用迴圈帶資料 -->
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button v-for="(item, index) in product.imagesUrl" :key="index + 1" type="button"
              data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index + 1" class="" aria-current="true"
              :aria-label="'Slide ' + index + 1"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active text-center h-100">
              <img :src="product.imageUrl" class=" w-auto  h-100" alt="..." />
            </div>
            <div class="carousel-item text-center h-100" v-for="(item, index) in product.imagesUrl" :key="index">
              <img :src="item" class=" w-auto  h-100" alt="..." />
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
        <div class="col-md-3 d-flex flex-column justify-content-around text-center">
          <h1 class="mb-5">{{ product.title }}</h1>
          <!--  -->
          <div class="my-5">
            <div class="d-flex justify-content-center w-50 mx-auto ">
              <div class="form-check">
                <input value="S" v-model="productSize" class="form-check-input d-none" type="radio" name="size" id="S">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="S">
                  S
                </label>
              </div>
              <div class="form-check">
                <input value="M" v-model="productSize" class="form-check-input d-none" type="radio" name="size" id="M">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="M">
                  M
                </label>
              </div>
              <div class="form-check">
                <input value="L" v-model="productSize" class="form-check-input d-none" type="radio" name="size" id="L">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="L">
                  L
                </label>
              </div>
              <div class="form-check slanted-div">
                <input disabled value="XL" v-model="productSize" class="form-check-input d-none" type="radio" name="size"
                  id="XL">
                <label style="  cursor: not-allowed;" disabled
                  class="form-check-label border border-secondary text-secondary px-3 py-2" for="XL">
                  xL
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
          <hr class="w-100 mx-auto">
          <div class="my-3 d-flex gap-3 w-100 flex-wrap mx-auto">
            <!-- round="" = true -->
            <el-tag class="fs-6" type="warning" size="" effect="plain" round="">Free shipping</el-tag>
            <el-tag class="fs-6" type="info" size="" effect="plain" round="">Store pickup</el-tag>
            <el-tag class="fs-6" type="danger" size="" effect="plain" round="">Fast delivery</el-tag>
          </div>

        </div>
      </div>
      <!--  -->
      <div class="row row-cols-md-2">
        <div class="col-md-8">
          <h3 class="mt-7">DESCRIPTION</h3>
          <hr>
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima fugit asperiores repellendus
            assumenda dolor, nesciunt dolorum! Laboriosam totam rem excepturi rerum libero eos tenetur qui odio nostrum
            ullam? Omnis.</p>
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima fugit asperiores repellendus
            assumenda dolor, nesciunt dolorum! Laboriosam totam rem excepturi rerum libero eos tenetur qui odio nostrum
            ullam? Omnis.</p>
          <!--  -->
          <h3 class="mt-7">COMMENT</h3>
          <hr>
          <div class="d-flex justify-content-start mb-4 ">
            <div class="img_cont_msg">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
            </div>
            <div class="msg_cotainer">
              Hi, how are you samim?
              <span class="msg_time">8:40 AM, Today</span>
            </div>
          </div>
          <!--  -->
          <div class="card-footer">
            <div class="input-group">
              <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
              <div class="input-group-append bg-white">
                <span class="input-group-text send_btn bg-white"><i class="fas fa-location-arrow"></i></span>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-md-4">
          <div class="accordion d-flex justify-content-center  mt-5" id="accordionPanelsStayOpenExample">
            <div class="accordion-item w-100">
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
      <h3 class="mt-7">RECOMMEND</h3>
      <ProductsList></ProductsList>
    </div>
  </div>
</template>
<script>
import ProductsList from '@/components/ProductsList.vue';
import loginMixin from '../mixins/loginMixin';
import addToCart from '../mixins/addToCart';
import getFavoriteData from '../mixins/getFavoriteData';
export default {
  mixins: [loginMixin, addToCart, getFavoriteData],
  inject: ['emitter'],
  components: {
    ProductsList
  },
  data () {
    return {
      product: {},
      id: '',
      isLoading_big: false
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

.slanted-div {
  position: relative;
}

.slanted-div::after {
  content: "";
  position: absolute;
  top: 0;
  right: 32%;
  width: 1%;
  /* bottom: 0; */
  height: 100%;
  transform: skew(130deg);
  background-color: #000;
}

.img_cont {
  position: relative;
  height: 70px;
  width: 70px;
}

.img_cont_msg {
  height: 40px;
  width: 40px;
}

.user_img {
  height: 70px;
  width: 70px;
  border: 1.5px solid #f5f6fa;

}

.user_img_msg {
  height: 40px;
  width: 40px;
  border: 1.5px solid #f5f6fa;

}

.msg_cotainer_send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}

.msg_time {
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}

.msg_time_send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}

.msg_cotainer {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}

.type_msg {
  height: 15px !important;
  overflow-y: auto;
  border-radius: 15px 0 0 15px !important;
}

.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.send_btn {
  border-radius: 0 15px 15px 0 !important;
  cursor: pointer;
  height: 38px;
}
</style>
