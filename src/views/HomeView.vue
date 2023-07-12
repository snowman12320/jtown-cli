<template>
  <div class="position-relative">
    <Loading :active="isLoading"></Loading>
    <Header :is-login="isLogin"></Header>
    <HomeCarousel></HomeCarousel>
    <div class="container-xxl">
      <!-- <HomeBanner></HomeBanner> -->
      <HomeStory></HomeStory>
      <HomeProduct></HomeProduct>
    </div>
    <div>
    </div>
    <Footer></Footer>
    <!-- alert -->
    <transition name="fade" class="">
      <el-alert title="SIGN UP ! Get the Coupon ！！！" type="info" center :description="timerElement" show-icon
        v-show="isCouponAlert" />
    </transition>
    <!-- modal -->
    <el-dialog v-model="centerDialogVisible" title="NEWS" width="30%" center>
      <!-- v-slot:default来指定el-countdown组件中的默认插槽位置 -->
      <template v-slot:default>
        <p class="text-center fs-4">" GOOAYE COUPON 20% OFF "<br> ON ALL DEPARTMENTS</p>
        <img src="@\assets\nbaWeb\andre-hunter-RPKdvPcYAUo-unsplash.jpg" class="w-100 h-100 img-fluid" alt="">
        <el-row>
          <el-col :span="24">
            <el-countdown title="Last chance" :value="value" title-class="countdown-title"
              value-class="countdown-value" />
          </el-col>
        </el-row>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">shop without offer</el-button>
          <router-link to="/products-view/products-content">
            <el-button type="primary" @click="centerDialogVisible = false">
              ENJOY 20% OFF
            </el-button>
          </router-link>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
// import HomeBanner from '@/components/HomeBanner.vue';
import HomeProduct from '@/components/HomeProduct.vue';
import HomeStory from '@/components/HomeStory.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
export default {
  // name: 'HomeView', //*过设置name属性，可以为组件指定一个唯一的名称。这对于在组件之间进行通信
  mixins: [loginMixin],
  provide () {
    return {
      emitter
    };
  },
  components: {
    Header,
    HomeCarousel,
    HomeProduct,
    HomeStory,
    Footer
  },
  data () {
    return {
      isCouponAlert: true,
      duration: 0,
      timerElement: '00 D 00 H 00 M 00.0 S',
      value: Date.now() + 1000 * 60 * 60 * 7,
      centerDialogVisible: true
    };
  },
  mounted () {
    this.countdownTimer();
    // 監聽scroll事件 > 可能要改watch 比較前後值
    window.addEventListener('scroll', () => {
    // 如果畫面捲軸停止捲動，將centerDialogVisible設置為true
      if (window.scrollY === 0) {
      // 在畫面停留3秒後將centerDialogVisible設置為true
        setTimeout(() => {
          this.centerDialogVisible = !this.centerDialogVisible;
        }, 3000);
      }
    });
  },
  methods: {
    pad (n, s) {
      s = s || 2;
      return ('00000' + n).slice(-s);
    },
    setTimerElement () {
      const now = new Date();
      const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 2,
        0,
        0,
        0
      );
      this.duration = midnight.getTime() - now.getTime();

      if (this.duration > 0) {
        const e = this.duration;
        const ms = e % 1000;
        const s = Math.floor((e / 1000) % 60);
        const m = Math.floor((e / (1000 * 60)) % 60);
        const h = Math.floor((e / (1000 * 60 * 60)) % 24);
        const d = Math.floor(e / (1000 * 60 * 60 * 24));

        this.timerElement = `Last chance to get 10% UP OFF  - \n EXTENDED UNTIL ${this.pad(d)} Day ${this.pad(h)} h: ${this.pad(m)} m: ${this.pad(s)}.${Math.floor(
          ms / 100)} s`;
      } else {
        this.timerElement = '00 D 00 H 00 M 00.0 S';
      }
    },
    countdownTimer () {
      this.setTimerElement(); // 初始化倒计时

      setInterval(() => {
        this.setTimerElement();
      }, 100); // 每0.1秒更新一次倒计时
    }
  }

};
</script>
<style  lang="scss">
.el-alert {
  position: absolute !important;
  top: 100px;
  width: 550px !important;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.el-alert__description {
  width: 450px;
}

.el-alert:first-child {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.el-col {
  text-align: center;
}

.el-dialog__title {
  font-size: 50px !important;
  color: red
}

/* 不能設定scoped 無法改樣式 */
.el-statistic__number {
  font-size: 50px !important;
}

.el-statistic__head {
  font-size: 30px !important;
  color: red !important;
  margin-top: 20px;
}

.el-button--primary {
  font-size: 20px !important;
  padding: 15px 20px !important;
}

.el-button {
  border: none !important;

  // background-color: transparent !important;
  & span:hover {
    // text-decoration: underline !important;
  }
}
</style>
