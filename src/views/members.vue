<template >
    <div class=" container ">
        <div class="row mt-5">
            <memberSide class="col-2"></memberSide>
            <memberOrders class="col-10"></memberOrders>
        </div>
    </div>
</template>
<script>
import memberOrders from '../components/memberOrders.vue';
import memberSide from '../components/memberSide.vue';
export default {
  components: { memberOrders, memberSide }
};
</script>
<style lang="scss"></style>
