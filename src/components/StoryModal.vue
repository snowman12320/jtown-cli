<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0 ">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增文章</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" id="image" v-model="tempStory.imageUrl" placeholder="請輸入圖片連結" />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile" />
              </div>
              <img class="img-fluid" :src="tempStory.imageUrl" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5" v-if="tempStory.images">
                <div v-for="(image, key) in tempStory.images" class="mb-3 input-group" :key="key">
                  <input type="url" class="form-control form-control" v-model="tempStory.images[key]"
                    placeholder="請輸入連結" />
                  <button type="button" class="btn btn-outline-danger" @click="tempStory.images.splice(key, 1)">
                    移除
                  </button>
                </div>
                <div v-if="tempStory.images[tempStory.images.length - 1] ||
                  !tempStory.images.length
                  ">
                  <!-- <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempStory.images.push('')"
                  >
                    新增圖片
                  </button> -->
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" v-model="tempStory.title" placeholder="請輸入標題" />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">作者</label>
                  <input type="text" class="form-control" id="category" v-model="tempStory.author" placeholder="請輸入分類" />
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">內文</label>
                <textarea type="text" class="form-control" id="description" v-model="tempStory.description"
                  placeholder="請輸入文章內容"></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">內文</label>
                <textarea type="text" class="form-control" id="content" v-model="tempStory.content"
                  placeholder="請輸入文章內容"></textarea>
              </div>
              <hr />
              <div class="mb-3">
                <label for="create_at">新增日期</label>
                <input type="date" class="form-control" id="create_at" v-model="create_at" />
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="tempStory.isPublic" :true-value="true"
                    :false-value="false" id="is_enabled" />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <!-- 向外傳遞需觸發的函式和傳遞資料 -->
          <button type="button" class="btn btn-primary" @click="$emit('update-story', tempStory)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
export default {
  mixins: [modalMixin],
  data () {
    return {
      modal: {},
      tempStory: {},
      create_at: '' //! 限制數字存入資料
    };
  },
  props: {
    story: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  watch: {
    //* 監聽傳進來的story，並自動存到暫存區
    story () {
      this.tempStory = this.story;
      // ?沒有圖片就塞空陣列?
      if (!this.tempStory.images) {
        this.tempStory.images = [];
      }
    },
    create_at () { //! 限制數字存入資料
      console.log('先是輸入日期', this.create_at);
      this.tempStory.create_at = Math.floor(new Date(this.create_at) / 1000);
      console.log('後轉以秒为单位的时间戳', this.tempStory.create_at);
    }
  },
  methods: {
    // * new FormData() 是一個 JavaScript 內建的物件，用於創建一個空的 FormData 物件。
    // * 首先獲取一個 <form> 元素，FormData 物件可以用來構建一個包含鍵值對的表單數據，並且可以通過 AJAX 以 multipart/form-data 格式將這些數據發送到服務器。
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.tempStory.imageUrl = response.data.imageUrl;
        }
      });
    }
  }
};
</script>
