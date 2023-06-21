<template>
  <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> -->
  <div ref="offcanvas" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header d-flex justify-content-between align-items-center">
      <h5 id="offcanvasRightLabel" class="fs-3 text-center pt-3"><i class="fa fa-check-circle text-nbaRed" aria-hidden="true"></i> 加入購物車
      </h5>
      <button type="button" class="btn-close text-reset fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body ">
      <div class="d-flex p-2 bg-light rounded-3 my-2" v-for="items in 3" :key="items">
        <img class="" style="width:100px;height:100px" src="https://source.unsplash.com/random/1500x1200/?basketball"
          alt="">
        <div class=" w-100 p-1 ">
          <h2 class="fs-4">路人甲的原味球衣</h2>
          <p class="text-end pt-2 fs-5 "><small class="text-secondary fs-6 text-decoration-line-through fw-lighter">$2,999</small> $ 1,999</p>
        </div>
      </div>
      <!--  -->
      <p class="d-flex justify-content-between fs-4 mt-3  ">
        <span class="">小計( 3 商品)</span>
        <span class="">$ 2,999</span>
      </p>
      <!--  -->
      <router-link to="/cart-view/cart-list" name="" id="" class="btn btn-outline-nbaRed w-100 mt-5" href="#" role="button">立即結帳</router-link>
    </div>
  </div>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  watch: {
  },
  data () {
    return {
      offcanvas: {}
    };
  },
  created () {
    // this.$refs.offcanvas.show();
  },
  methods: {
  },
  //* 混用獨立的功能
  mixins: [offcanvasMixin]
};
</script>
