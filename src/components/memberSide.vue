<template >
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Information <!-- <span class="badge bg-primary rounded-pill">14</span> -->
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Order List
        <span class="badge bg-primary rounded-pill">{{ ordersLength }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ordersLength: null
    };
  },
  created () {
    this.getOrders();
  },
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${currentPage}`;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.ordersLength = response.data.orders.slice(1).length;
      });
    }
  }
};
</script>
<style lang="">

</style>
