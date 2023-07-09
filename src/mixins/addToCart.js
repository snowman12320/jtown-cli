import loginMixin from './loginMixin';
export default {
  inject: ['emitter'],
  mixins: [loginMixin],
  data () {
    return {
      qty: 1,
      status: {
        loadingItem: ''
      },
      productSize: ''
    };
  },
  methods: {
    addToCart (id, qty = 1, isBuy) {
      if (!this.isLogin) {
        this.$swal.fire('Please', ' Sign in or Sign up first.', 'warning');
        this.$router.push('/login');
      } else {
        if (!this.productSize) {
          this.$swal.fire('Please', 'Size must be selectd.', 'warning');
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
      }
    }
  }
};
