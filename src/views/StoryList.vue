<template>
  <Loading :active="isLoading"></Loading>
  <div id="Ranking"
    class="d-flex justify-content-center align-items-center text-dark border-3 border-nbaBlue border-top pt-5"
    style="margin-top: 104px !important">
    <h2>PLAYER</h2>
    <img src="../assets/nbaWeb/Lovepik_com-401319703-basketball.png" height="80" alt="storylogo" class="" />
    <h2>STORY</h2>
  </div>
  <div class="container-xxl">
    <p class="fs-6 text-dark text-center mb-3">
      how to become the NBA all star player?
    </p>
    <section class="row row-cols-1 row-cols-lg-3 rank_card mx-2">
      <div class="col mb-5 mt-7 mb-lg-0" v-for="(item, index) in storyList" :key="index" @click="getStory(item.id)">
        <div class="card" style="height: 424px">
          <img data-num="001" :src="item.imageUrl" height="300"
            class="card-img-top of-none op-top position-absolute mt-n5" alt="..." />
          <div data-num="001" class="img_back img_back_kobe"></div>
          <div class="card-body">
            <h3 class="card-title fw-bold fs-6">{{ item.title }}</h3>
            <p class="card-text fs-6 multiline-ellipsis">
              {{ item.description }}
            </p>

            <button
              class="text-decoration-none stretched-link text-dark rank_a d-flex justify-content-center bg-transparent">MORE</button>
          </div>
        </div>
      </div>
    </section>

    <!-- props傳遞總頁數 emit傳出目前頁數 -->
    <Pagination :pages="pagination" @emit-pages="getStoryList"></Pagination>

  </div>
</template>
<script>
import loginMixin from '../mixins/loginMixin';
import Pagination from '@/components/Pagination.vue';

export default {
  mixins: [loginMixin],
  inject: ['emitter'],
  components: {
    Pagination
  },
  data () {
    return {
      storyList: [],
      pagination: {},
      story: {}
    };
  },
  created () {
    this.getStoryList();
  },
  methods: {
    getStoryList (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.storyList = res.data.articles;
          this.pagination = res.data.pagination;
          console.log(this.pagination);
        }
      });
    },
    getStory (id) { //! 只取一個商品
      // console.log(id);
      this.$router.push(`/story/item/${id}`);
      this.isLoading = true;
      this.isLoading_big = true;
      // this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${id}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.isLoading_big = false;
        // this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
        if (res.data.success) {
          this.story = res.data.article;
          console.log(this.story);
          // this.emitter.emit('customEvent_getStory', this.story);
        }
      });
    }
  }
};
</script>
<style>
.single-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  /*  有寬度才能多行  */
  width: 100%;
}
</style>
