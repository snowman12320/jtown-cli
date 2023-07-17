<template>
  <div class="">
    <Loading :active="isLoading"></Loading>
    <div class="d-flex justify-content-end">
      <div class="mb-3 d-flex gap-1 flex-nowrap">
        <input v-model="search" type="search" class="form-control " name="" id="" aria-describedby="helpId"
          placeholder="search order ID / DATE">
        <!--  -->
        <div class=" flex-shrink-0">
          <select v-model="filterPaid" class="form-select form-select-lg" name="" id="">
            <option value="default" selected> to sift</option>
            <option value="unpaid">no paid</option>
          </select>
        </div>
        <button @click="openDelOrderModal(item = { title: 'ALL' })" type="button"
          class="btn btn-danger flex-shrink-0 ">Delete ALL</button>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>訂單編號</th>
          <th>姓名</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in filterOrder" :key="key" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} - 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ Math.floor(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" v-model="item.is_paid"
                @change="updatePaid(item)" />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
                檢視
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder" @del-all="delAllOrder()">
    </DelModal>
    <Pagination v-show="!search && filterPaid === 'default'" :pages="pagination" @emit-pages="getOrders">
    </Pagination>
  </div>
</template>
<script>
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import Pagination from '@/components/Pagination.vue';
export default {
  components: {
    Pagination,
    DelModal,
    OrderModal
  },
  data () {
    return {
      orders: [],
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
      //
      search: '',
      filterPaid: 'default',
      ordersAll: [],
      tempPage: 1
    };
  },
  created () {
    this.getOrders();
    this.getOrdersAll();
  },
  computed: {
    // filterOrder () {
    //   const filterPaid = {
    //     unpaid: item => item.is_paid === false,
    //     default: () => true
    //   }[this.filterPaid || 'default'];
    //   return this.orders.filter(order => order.id.includes(this.search) || this.$filters.date(order.create_at).match(this.search)).filter(filterPaid);
    // }
    filterOrder () {
      if (!this.search && this.filterPaid.includes('default')) {
        return this.orders;
      } else {
        return this.ordersAll.filter(order => this.filterOrderByIdAndDate(order)).filter(this.getFilterPaid());
      }
    }
  },
  methods: {
    filterOrderByIdAndDate (order) {
      return order.id.includes(this.search) || this.$filters.date(order.create_at).match(this.search);
    },
    getFilterPaid () {
      const filterPaidOptions = {
        unpaid: item => item.is_paid === false,
        default: () => true
      };
      return filterPaidOptions[this.filterPaid || 'default'];
    },
    getOrders (currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.isLoading = false;
      });
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = isNew;
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item };
      if (!item.title) this.tempOrder.title = this.tempOrder.id;
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    updatePaid (item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false;
        this.getOrders(this.currentPage);
        this.$httpMessageState(response, '更新付款狀態');
      });
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
        this.$httpMessageState(response, 'delete');
      });
    },
    getOrdersAll () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${this.tempPage}`;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.ordersAll = this.ordersAll.concat(response.data.orders); // 將每一頁的資料加入到 orders 陣列中
        if (this.tempPage < this.pagination.total_pages) { // 如果當前頁數小於最後一頁，繼續取得下一頁的資料
          this.tempPage++;
          this.getOrdersAll();
        } else {
          console.log(this.ordersAll);
        }
      });
    },
    delAllOrder () {
      // !避免誤刪
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/allll`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
        this.$httpMessageState(res, 'delete all');
      });
    }
  }
};
</script>
