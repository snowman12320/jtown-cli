<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0 ">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入主圖片網址：</label>
                <input type="text" class="form-control" id="image" v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結" />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳主圖片：
                  <i v-show="main_photo" class="fas fa-spinner fa-spin"></i>
                </label>
                <!--  -->
                <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile" />
              </div>
              <div class=" w-100 border" style="height:300px"><img class=" h-100 w-100 of-cover op-top"
                  :src="tempProduct.imageUrl" alt="" /></div>
              <!--  -->
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <label for="customFile" class="form-label pb-2">上傳其他圖片：
                  <i v-show="other_photo" class="fas fa-spinner fa-spin"></i>
                </label>
              </div>
              <!--  -->
              <div class=" row row-cols-2  border g-1  " v-if="tempProduct.imagesUrl">
                <div v-for="(image, key) in tempProduct.imagesUrl" class=" col" :key="key">
                  <div class=" w-100 border" style="height:150px">
                    <img class=" h-100 w-100 of-cover op-top" :src="image" alt="" />
                  </div>
                  <div class="d-flex">
                    <input type="url" class="form-control form-control" v-model="tempProduct.imagesUrl[key]"
                      placeholder="請輸入連結" />
                    <button type="button" class="btn btn-outline-danger text-nowrap"
                      @click="tempProduct.imagesUrl.splice(key, 1); $emit('update-product', tempProduct)">
                      移除
                    </button>
                  </div>
                </div>
              </div>
              <!--  v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] || !tempProduct.imagesUrl.length" -->
              <div class="mt-3">
                <label for="other_photo" class="btn btn-outline-primary btn-sm d-block w-100">
                  <input id="other_photo" type="file" class="form-control d-none" ref="fileInput_more"
                    @change="uploadFile_more" />
                  新增圖片
                </label>
              </div>
              <!--  -->
              <input type="file" multiple @change="handleFileUpload" />
            </div>
            <!-- 右 -->
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" v-model="tempProduct.title" placeholder="請輸入標題" />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input type="text" class="form-control" id="category" v-model="tempProduct.category"
                    placeholder="請輸入分類" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input type="text" class="form-control" id="unit" v-model="tempProduct.unit" placeholder="請輸入單位" />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="number" class="form-control" id="origin_price" v-model.number="tempProduct.origin_price"
                    placeholder="請輸入原價" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input type="number" class="form-control" id="price" v-model.number="tempProduct.price"
                    placeholder="請輸入售價" />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text" class="form-control" id="description" v-model="tempProduct.description"
                  placeholder="請輸入產品描述"></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea type="text" class="form-control" id="content" v-model="tempProduct.content"
                  placeholder="請輸入產品說明內容"></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled" :true-value="1"
                    :false-value="0" id="is_enabled" />
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
          <button type="button" class="btn btn-primary" @click="$emit('update-product', tempProduct)">
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
      tempProduct: {},
      main_photo: false,
      other_photo: false
    };
  },
  props: {
    product: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  watch: {
    //* 監聽傳進來的story，並自動存到暫存區
    product () {
      this.tempProduct = this.product;
      // !  沒有圖片就塞空陣列 > 錯，是預設多圖上傳空間
      // 多圖範例
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    }
  },
  methods: {
    // * new FormData() 是一個 JavaScript 內建的物件，用於創建一個空的 FormData 物件。
    // * 首先獲取一個 <form> 元素，FormData 物件可以用來構建一個包含鍵值對的表單數據，並且可以通過 AJAX 以 multipart/form-data 格式將這些數據發送到服務器。
    uploadFile () {
      this.main_photo = true;
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
          this.main_photo = false;
        }
      });
    },
    uploadFile_more () {
      this.other_photo = true;
      const uploadedFile = this.$refs.fileInput_more.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        if (res.data.success) {
          this.tempProduct.imagesUrl.push(res.data.imageUrl);
          this.other_photo = false;
        }
      });
    },
    handleFileUpload (event) {
      this.other_photo = true;
      // const files = event.target.files; // 取得上傳的檔案
      // // 迭代每個檔案並新增至圖片陣列
      // for (let i = 0; i < files.length; i++) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.tempProduct.imagesUrl.push(e.target.result); // 將圖片資料新增至陣列
      //   };
      //   reader.readAsDataURL(files[i]); // 讀取檔案資料
      // }
      //
      try {
        const files = event.target.files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('images[]', files[i]); // 將檔案加入到 FormData 物件中
        }
      } finally {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
        this.$http.post(url, this.formData).then((res) => {
          if (res.data.success) {
            this.tempProduct.imagesUrl.push(res.data.imageUrl);
            this.other_photo = false;
          }
        });
      }
    }

  }
};
</script>
