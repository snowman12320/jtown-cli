<template>
  <div class="">
    <Loading :active="isLoading_big"></Loading>
    <div id="Ranking"
      class="d-flex justify-content-center align-items-center text-dark border-3 border-nbaBlue border-top pt-5"
      style="margin-top: 104px !important">
      <h2>PLAYER </h2>
      <img src="@/assets/nbaWeb/Lovepik_com-401319703-basketball.png" height="80" alt="storylogo" class="" />
      <h2>STORY</h2>
    </div>
    <div class="container-xxl">
      <p class="fs-6 text-pickBlack text-center mb-5">
        how to become the NBA all star player?
      </p>
      <!-- 球星個人列表 -->
      <!-- 不需要所有元素都在 container 內 --><!-- <div class="container-xxl"> -->
      <!-- row可用g-5 左右推版(column會上下推) / card內用會推上下  / gutter外 gap內-->
      <main class="row row-cols-1 row-cols-xl-2 mx-2 g-5 position-relative">
        <!-- 必填 -->
        <article class="col col-xl-8 mx-auto mb-xl-5">
          <div class="card shadow">
            <div class="card-body">
              <h2 class="fs-4 lh-xl fw-bold text-center">{{ story.title }}</h2>
              <small class="text-secondary text-end d-block w-100">
                {{ story.author + ' , ' + new Date(this.story.create_at * 1000).toLocaleString() }}
              </small>
              <p class="lh-lg fs-6 my-5 fw-light maxpad_p">
                {{ story.description }}
              </p>

              <!-- 避免超出卡片 不需用寬高調整 ~~~~~ -->
              <img class="img-fluid" src="@/assets/nbaWeb/dean-bennett-nFjLHE4vmn4-unsplash.jpg" alt="" />
              <!--  -->
              <div class="my-3 d-flex gap-3">
                <el-tag class="ml-2" type="info">#NBA</el-tag>
                <el-tag class="ml-2" type="info">#ALL STAR</el-tag>
                <el-tag class="ml-2" type="info">#TORONTO</el-tag>
              </div>
            </div>
          </div>
        </article>
        <aside class="col col-xl-4 sticky-top  align-self-start" style="z-index: 5;top:100px">
          <div class="small_card">
            <div class="card mb-5 text-center text-xl-start">
              <img data-num="001" :src="story.imageUrl" height="424" class="of-cover op-top position-absolute pt-3 imgRwd"
                alt="..." />
              <img src="@/assets/nbaWeb/CYOKWOiUoAIJGu4.png" class="allstaritem_back img-fluid op-center of-cover" alt="">
              <!-- <div class="allstaritem_back img-fluid bgp-center bgs-cover"
                style="background-image: url(~@/assets/nbaWeb/1126209.png)"></div> -->
              <div class="card-body fs-6">
                <!-- <ul class="list-unstyled fsRwd">
                  <li class="text-muted">5× NBA champion</li>
                  <li class="mb-3">2000–2002, 2009, 2010</li>
                  <li class="text-muted">2× NBA Finals MVP</li>
                  <li class="mb-3">2009, 2010</li>
                  <li class="text-muted">NBA Most Valuable Player</li>
                  <li class="mb-3">2008</li>
                </ul> -->
              </div>
              <a type="button" @click.prevent="getMerchandise()"
                class="btn btn-nbaBlue rounded-pill fs-4 btnRwd mx-auto mb-4 stretched-link">Visit Merchandise</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>
<script>
import loginMixin from '../mixins/loginMixin';

export default {
  mixins: [loginMixin],
  inject: ['emitter'],
  components: {
  },
  data () {
    return {
      story: {},
      isLoading_big: false,
      id: '',
      sentence: ''
    };
  },
  created () {
    this.id = this.$route.params.storyId;
    this.getStory();
  },
  mounted () {
  },
  methods: {
    getStory () { //! 只取一個商品
      this.isLoading_big = true;
      // this.emitter.emit('customEvent_isLoading_big', this.isLoading_big);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      this.$http.get(api).then((res) => {
        this.isLoading_big = false;
        if (res.data.success) {
          this.story = res.data.article;
          // console.log(this.story);
        }
      });
    },
    getMerchandise () {
      const str = this.story.title;
      const index = str.indexOf('-') - 1;
      this.sentence = str.substring(0, index).trim();
      // console.log(this.sentence); // 输出：Kobe bryant
      this.$router.push('/products-view/products-content');
      this.emitter.emit('customEvent_search', this.sentence);
    }

  }
};
</script>
