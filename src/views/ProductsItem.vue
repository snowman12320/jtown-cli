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
              to="/products-view/products-content/title">Product</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }} </li>
        </ol>
      </nav>
      <!--  -->
      <div class="row row-cols-md-2 g-5 mt-md-5">
        <div id="carouselExampleIndicators" class="carousel  slide col-md-8" data-bs-ride="carouse">
          <div class="carousel-indicators">
            <!-- 第一個主圖的指標不用程式化，其餘其他圖片的指標用迴圈帶資料 -->
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button v-for="(item, index) in product.imagesUrl" :key="index + 1" type="button"
              data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index + 1" class="" aria-current="true"
              :aria-label="'Slide ' + index + 1"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active text-center h-100 w-100 mx-auto">
              <!-- <img :src="product.imageUrl" class=" w-auto  h-100" alt="..." /> -->
              <div class="f-panzoom h-100 w-100 mx-auto" ref="myPanzoom">
                <div data-panzoom-pin data-x="56%" data-y="60%">
                  <div title="My dream house"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      monica-exclude-el="m">
                      <path
                        d="M12 0a7.2 7.2 0 0 0-7.27 7.14C4.73 11.08 12 24 12 24s7.27-12.92 7.27-16.86A7.2 7.2 0 0 0 12 0Z">
                      </path>
                    </svg></div>
                  <p class="text-white" style="text-shadow: 2px 2px 4px #000, -2px -2px 4px #000;">feature</p>
                </div>
                <img class="f-panzoom__content w-100 h-100 mx-auto" :src="product.imageUrl" />
              </div>
            </div>
            <!--  -->
            <div class="carousel-item text-center h-100 w-100" v-for="(item, index) in product.imagesUrl" :key="index">
              <img :src="item.url" class=" w-auto  h-100" alt="..." />
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
        <div class="col-md-4 d-flex flex-column justify-content-around text-center">
          <h1 class="mb-5">{{ product.title }}</h1>
          <!--  -->
          <div class="my-5">
            <div class="d-flex justify-content-center w-50 mx-auto ">
              <div class="form-check">
                <input value="S" v-model="productSize_item" class="form-check-input d-none" type="radio" name="size"
                  id="S">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="S">
                  S
                </label>
              </div>
              <div class="form-check">
                <input value="M" v-model="productSize_item" class="form-check-input d-none" type="radio" name="size"
                  id="M">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="M">
                  M
                </label>
              </div>
              <div class="form-check">
                <input value="L" v-model="productSize_item" class="form-check-input d-none" type="radio" name="size"
                  id="L">
                <label style="cursor: pointer" class="form-check-label border border-secondary text-secondary px-3 py-2"
                  for="L">
                  L
                </label>
              </div>
              <div class="form-check slanted-div">
                <input disabled value="XL" v-model="productSize_item" class="form-check-input d-none" type="radio"
                  name="size" id="XL">
                <label style="  cursor: not-allowed;" disabled
                  class="form-check-label border border-secondary text-secondary px-3 py-2" for="XL">
                  XL
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
            <button class="btn-outline-primary btn" @click="addToCart(product.id, qty, isBuy = false)"
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
      <div class="row row-cols-md-2 flex-column-reverse flex-md-row">
        <div class="col-md-8">
          <h3 class="mt-7">DESCRIPTION</h3>
          <hr>
          <p class="" v-html="product.content"></p>
          <!--  -->
          <h3 class="mt-7">COMMENT</h3>
          <hr>
          <div class="d-flex justify-content-start mb-4 " v-for="(item, index) in rateData" :key="index">
            <div class="img_cont_msg">
              <img :src="`https://i.pravatar.cc/150?img=${index}`" class="rounded-circle user_img_msg">
            </div>
            <div class="d-flex flex-column">
              <el-rate class="ms-3" v-model="item.rateValue" disabled show-score text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <div class="position-relative">
                <div class="msg_cotainer">
                  <!-- The product is the best ,I have ever seen ! -->
                  {{ item.rateComment }}
                </div>
                <span class="msg_time">{{ item.rateTime }}</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="card-footer mt-10">
            <el-rate v-model="rateValue" show-text>
            </el-rate>
            <div class="input-group d-flex align-items-end">
              <textarea @keydown.enter="sendComment()" v-model="rateComment" name="" rows="3"
                class="form-control type_msg" placeholder="Type your comment ..."></textarea>
              <span @click="sendComment()" class="input-group-text send_btn "><i class="fas fa-location-arrow"></i></span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-md-4 sticky-md-top align-self-start " style="top:10%;z-index:1">
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
                  <p class="" v-html="product.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <h3 class="mt-7">RECOMMEND</h3>
      <!-- //! 取得全部資料的分類，並更新相關商品列表，無法用props覆蓋，故作罷 -->
      <!-- <ProductsList :filteredData="filteredData" @update-category="getProducts"></ProductsList> -->
      <!-- :customClass="['d-none']" ，父元件傳入值，子元件放:class="customClass" -->
      <ProductsList></ProductsList>
    </div>
  </div>
</template>
<script>
import ProductsList from '@/components/ProductsList.vue';
import loginMixin from '../mixins/loginMixin';
import addToCart from '../mixins/addToCart';
import getFavoriteData from '../mixins/getFavoriteData';
//
import { Pins } from '@fancyapps/ui/dist/panzoom/panzoom.pins.esm';
import { Panzoom } from '@fancyapps/ui/dist/panzoom/panzoom.esm';

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
      isLoading_big: false,
      //
      rateValue: 5,
      rateComment: 'The product is the best ,I have ever seen !',
      rateTime: '8: 40 AM, Today',
      rateData: [],
      //
      childClass: '',
      //
      container: null,
      options: {},
      panzoom: null
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
    //* 只能放一個圖
    this.container = this.$refs.myPanzoom;
    this.panzoom = new Panzoom(this.container, this.options, { Pins });
  },
  created () {
    this.id = this.$route.params.productId;//! 統一商品唯一的ID(item.id)
    this.getProduct();
    this.getFavoriteData(); //! 用其他電腦，先新增本地陣列
    this.sendComment();
    this.changeClass();
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.isLoading_big = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.isLoading_big = false;
        if (response.data.success) {
          this.product = response.data.product;
          this.emitter.emit('customEvent_category', this.product.category);
        }
      });
    },
    sendComment () {
      if (!this.rateValue || !this.rateComment) {
        this.$toast('error', 'star and comment required.');
        return;
      }
      const data = { rateValue: this.rateValue, rateComment: this.rateComment, rateTime: this.rateTime };
      localStorage.setItem('rateData', JSON.stringify(data));
      this.updateComment();
      //
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentPeriod = currentHour >= 12 ? 'PM' : 'AM';
      const formattedHour = currentHour % 12 === 0 ? 12 : currentHour % 12;
      const formattedMinute = currentMinute.toString().padStart(2, '0');
      const formattedTime = `${formattedHour}:${formattedMinute} ${currentPeriod}`;
      const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      this.rateTime = `${formattedTime}, ${formattedDate}`;
      this.rateValue = null;
      this.rateComment = '';
    },
    updateComment () {
      this.isLoading_big = true;
      this.rateData.push(JSON.parse(localStorage.getItem('rateData')));
      //* 使用箭头函数，回调函数将继承包含它的函数的上下文，这样就可以正确地访问和更新"this.isLoading_big"属性
      setTimeout(() => {
        this.isLoading_big = false;
        // this.emitter.emit('push-message', {
        //   style: 'success',
        //   title: 'SUCCESS！ADD COMMENT'
        // });
        this.$toast('success', 'add comment');
      }, 1000);
    },
    changeClass () {
      this.childClass = 'products_sort';
    }
    // getProducts () { //* 取得全部資料的分類，並更新相關商品列表，無法用props覆蓋，故作罷
    //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
    //   this.$http.get(api).then((res) => {
    //     if (res.data.success) {
    //       this.filteredData = res.data.products.filter((i) => i.category === this.product.category);
    //       console.log(this.filteredData);
    //     }
    //   });
    // }
  }
};
</script>
<style scoped lang="scss">
@import "@fancyapps/ui/dist/fancybox/fancybox.css";
@import "@fancyapps/ui/dist/panzoom/panzoom.css";
@import "@fancyapps/ui/dist/panzoom/panzoom.pins.css";

* {
  // background-color: #78e08f;
}

@media (max-width: 768px) {
  .carousel-item {
    img {
      width: 100% !important;
      object-fit: cover !important;
    }
  }

  .breadcrumb {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

}

.f-panzoom {
  // margin: 1rem auto 2rem;
  // padding: 1rem;
  height: 500px;
  width: auto;
  max-width: 1000px;
  cursor: zoom-in;
}

[data-panzoom-pin] {
  color: red;
  cursor: help;
}

.carousel {
  height: 500px;
}

.carousel-inner {
  height: 500px;
}

@media (max-width: 768px) {
  .carousel {
    height: 300px;
  }

  .carousel-inner {
    height: 300px;
  }
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
  left: 13px;
  bottom: -15px;
  color: rgba(148, 115, 115, 0.882);
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
  border: 1px solid #82ccdd;
  // background-color: #82ccdd;
  padding: 10px;
  position: relative;
}

.type_msg {
  height: 100px !important;
  overflow-y: auto;
  border-radius: 15px 15px 15px 15px !important;
}

.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.send_btn {
  cursor: pointer;
  height: 38px;
  border: none !important;
  background-color: white;

  &:hover i {
    color: red;
  }
}

// 如何在productItem元件中，使用class去隱藏productsList的元素
.products_sort {
  display: none !important;
}
</style>
