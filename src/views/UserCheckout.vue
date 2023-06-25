<template>
  <Loading :active="isLoading"></Loading>
  <Header :is-login="isLogin"></Header>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">訂單時間</th>
            <td>{{ create_at }}</td>
          </tr>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
          <tr>
            <th>付款時間</th>
            <td>{{ paid_date }}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';
export default {
  mixins: [loginMixin],
  provide () {
    return {
      emitter
    };
  },
  components: {
    Header,
    Footer
  },
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false,
      paid_date: '',
      create_at: ''
    };
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            // console.log(this.order);
            this.create_at = this.order.create_at;
            const date = new Date(this.create_at * 1000); // 将秒转换为毫秒
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // 月份从0开始，所以要加1
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            this.create_at = year + '-' + month.toString().padStart(2, '0') + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
            //*
            // 去掉小数部分
            // this.paid_date.setMilliseconds(0);
            // 将日期时间对象转为字符串
            this.paid_date = new Date(this.order.paid_date * 1000).toISOString().slice(0, 19).replace('T', ' ');
            // console.log(this.paid_date);
          }
        });
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.getOrder();
          }
        });
    }
  },
  created () {
    this.orderId = this.$route.params.orderId;
    // console.log(this.orderId);
    this.getOrder();
    // this.payOrder();
  }
};
</script>
