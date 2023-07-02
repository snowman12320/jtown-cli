<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      新增文章
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">日期</th>
        <th width="120">標題</th>
        <th width="120">作者</th>
        <th width="120">內容</th>
        <th width="120">內容</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in storyList" :key="item.id">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td class="multiline-ellipsis">{{ item.description }}</td>
        <td>{{ item.content }}</td>
        <td>
          <span class="text-success" v-if="item.isPublic">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelStoryModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- props傳遞總頁數 emit傳出目前頁數 -->
  <Pagination :pages="pagination" @emit-pages="getStoryList"></Pagination>
  <!-- 更新資料，先帶原始資料進去元件，元件內修改後，再透過emit傳遞觸發函式和資料出來 -->
  <StoryModal ref="storyModal" :story="tempStory" @update-story="updateStory"></StoryModal>
  <!--  -->
  <DelModal :item="tempStory" ref="delModal" @del-item="delStory" />
</template>
<script>
import StoryModal from '@/components/StoryModal.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';
export default {
  components: {
    StoryModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  data () {
    return {
      storyList: [], //* 原始資料
      pagination: {}, //* 頁數資料
      tempStory: {}, //* 暫存區
      isNew: false, //* 判斷有無資料
      isLoading: false //* 載入效果開關
    };
  },
  created () {
    this.getStoryList();
  },
  methods: {
    // 產品後台 取得遠端資料
    // !透過頁數取得資料
    getStoryList (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.storyList = res.data.articles;
          this.pagination = res.data.pagination;
        }
      });
    },
    //! 新增時會帶一個true，編輯時會帶false和資料
    openModal (isNew, item) {
      if (isNew) {
        this.tempStory = {};
      } else {
        this.tempStory = { ...item };
        // this.tempStory.create_at = this.$filters.date(item.create_at);//! 轉換數字 顯示資料
        // console.log(this.tempStory.create_at);
      }
      this.isNew = isNew;
      const storyCp = this.$refs.storyModal;
      storyCp.showModal();
    },
    //* 以下進行新增或編輯，使用不同ＡＰＩ
    updateStory (item) {
      // this.item.create_at = Math.floor(new Date(item.create_at) / 1000);
      this.tempStory = item;
      // console.log(item);

      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
        httpMethod = 'put';
      }
      const storyCp = this.$refs.storyModal;
      this.$http[httpMethod](api, { data: this.tempStory }).then((response) => {
        // console.log(response);
        storyCp.hideModal();
        if (response.data.success) {
          this.getStoryList();
          // ! mitt 跨元件互相溝通，且全域打包
          // this.emitter.emit('push-message', {
          //   style: 'success',
          //   title: '更新成功'
          // });
          this.$httpMessageState(response, '更新');
        } else {
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '更新失敗',
          //   content: response.data.message.join('、')
          // });
          this.$httpMessageState(response, '更新');
        }
      });
    },
    // 開啟刪除 Modal
    openDelStoryModal (item) {
      this.tempStory = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delStory () {
      // !塞入要刪除的ＩＤ
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempStory.id}`;
      this.$http.delete(url).then((response) => {
        // console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getStoryList();
      });
    }
  }
};
</script>
<style scope >
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
  height: 85px;
}
</style>
