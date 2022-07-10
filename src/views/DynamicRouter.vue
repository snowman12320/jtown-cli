<template>
  <div></div>
</template>
  <!-- // 5.動態路由 -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios';
export default {
  created() {
    console.log(this.$route.params.id);
    const seed = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res);
    });
  },
};
</script>