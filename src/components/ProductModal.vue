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
                  <div class=" w-100 border position-relative modal_img" style="height:150px">
                    <!-- <img ref="image" class=" h-100 w-100 of-cover op-top" :src="image" alt="" /> -->
                    <img ref="image" class=" h-100 w-100 of-cover op-top" :src="image.url" alt="" />
                    <!--  -->
                    <div
                      class="position-absolute top-0 start-0 bottom-0 w-100 h-100 d-flex justify-content-center align-items-center end-0 img_wrap d-none gap-3 "
                      style="backdrop:blur(10px)">
                      <i @click.stop="tempProduct.imagesUrl.splice(key, 1)"
                        class="bi bi-trash3-fill fs-3  text-danger"></i>
                      <i @click="cropImage(image)" class="bi bi-pencil-square fs-3 text-white"></i>
                    </div>
                  </div>
                  <div class="d-flex">
                    <input type="url" class="form-control form-control fs-6" style="font-size:1px"
                      v-model="tempProduct.imagesUrl[key].url" placeholder="請輸入連結" />

                  </div>
                </div>
              </div>
              <!--  -->
              <el-upload multiple v-model:file-list="fileList" class="upload-demo" :action="image_add"
                :on-preview="handlePreview" :on-remove="handleRemove" list-type="picture">
                <el-button type="primary">Click to upload</el-button>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload>
              <!-- 嘗試編輯圖套件 -->
              <!-- 用v-if會抓不到dom元素 -->
              <div class="" v-show="tempImage">
                <img ref="tempImage" :src="tempImage" style="height:300px" class="w-100 of-cover" alt="">
                <button @click="doneImage" type="button" class="btn btn-primary" data-bs-toggle="button"
                  aria-pressed="false" autocomplete="off">完成</button>
              </div>
              <!-- 多檔上傳 -->
              <div class="mt-3">
                <label for="other_photo" class="btn btn-outline-primary btn-sm d-block w-100">
                  <input multiple id="other_photo" type="file" class="form-control d-none" ref="fileInput_more"
                    @change="uploadFile_more" />
                  新增圖片
                </label>
              </div>
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
              <div class="mb-3">
                <label for="content" class="form-label">運送方式</label>
                <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                  label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag">
                </multiselect>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品細節</label>
                <!-- <textarea type="text" class="form-control" id="description" v-model="tempProduct.description"
                  placeholder="請輸入產品描述"></textarea> -->
                <ckeditor :editor="editor" v-model="tempProduct.description" :config="editorConfig"></ckeditor>

              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <!-- <textarea type="text" class="form-control" rows="10" id="content" v-model="tempProduct.content"
                  placeholder="請輸入說明內容"></textarea> -->
                <ckeditor :editor="editor" v-model="tempProduct.content" :config="editorConfig"></ckeditor>

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
<script >
import modalMixin from '@/mixins/modalMixin';
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import Multiselect from 'vue-multiselect';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';//* 需從public中，換成有取得新增外掛的

export default {
  mixins: [modalMixin],
  components: { Multiselect }, //! 少一個s，就會掛掉
  data () {
    return {
      modal: {},
      tempProduct: {},
      main_photo: false,
      other_photo: false,
      //
      tempImage: '',
      tempImageIndex: '',
      tempImageTag: null,
      cropper: null,
      croppedImage: null,
      //
      value: [
      ],
      options: [
        { name: 'Free shipping', code: 'vu' },
        { name: 'Store pickup', code: 'js' },
        { name: 'Fast delivery', code: 'os' }
      ],
      editor: ClassicEditor,
      editorData: `
      <div class="">
        <p>Material： Eco-friendly material</p>
        <p>Manufacturing location： Taiwan </p>
        <p>Manufacturer： Jersey Town </p>
        <p>Expiration date： None</p>
      </div>`, //* 預設內容
      editorConfig: {},
      //
      image_add: `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`,
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      // fileList: ['https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100']
      resultArray: []

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
      if (!this.tempProduct.description) this.tempProduct.description = this.editorData;
      // !  沒有圖片就塞空陣列 > 錯，是預設多圖上傳空間
      // 多圖範例
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      //
      // this.tempProduct.imagesUrl.forEach(url => {
      //   const name = 'food.jpeg'; // 隨機產生名稱
      //   const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid
      //   const status = 'success';
      //   const item = { name, url, uid, status };
      // this.resultArray.push(item);
      // });
      // this.fileList = this.resultArray;
      //
      this.fileList = this.tempProduct.imagesUrl;
    }
  },
  computed: {
    availableOptions () {
      return this.options.filter(opt => this.value.indexOf(opt) === -1);
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    // handlePreview (file) {
    //   console.log(file);
    //   const uploadedFiles = file;
    //   // console.log(uploadedFiles[0].name);
    //   // console.log(uploadedFiles[0]);
    //   for (let i = 0; i < uploadedFiles.length; i++) {
    //     const name = uploadedFiles[i].name; // 圖檔名
    //     const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid
    //     const status = 'success';
    //     //
    //     this.other_photo = true;
    //     const formData = new FormData();//! 放迴圈中才會每次獨立出來
    //     formData.append('file-to-upload', uploadedFiles[i]);
    //     this.$http.post(this.image_add, formData).then((res) => {
    //       if (res.data.success) {
    //         //
    //         const url = res.data.imageUrl;
    //         const item = { name, url, uid, status };
    //         this.tempProduct.imagesUrl.push(item);
    //         //
    //         // this.tempProduct.imagesUrl.push(res.data.imageUrl);
    //         this.other_photo = false;
    //       }
    //     });
    //   }
    // },
    // 新增標籤
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    // cropper
    cropImage (image) {
      this.tempImageIndex = this.tempProduct.imagesUrl.indexOf(image);
      this.tempImage = image;
      this.cropper = new Cropper(this.$refs.tempImage, {
        aspectRatio: 16 / 9,
        crop (event) {
          console.log(event.detail.x);
          console.log(event.detail.y);
          console.log(event.detail.width);
          console.log(event.detail.height);
          console.log(event.detail.rotate);
          console.log(event.detail.scaleX);
          console.log(event.detail.scaleY);
        }
      });
      // console.log(this.cropper);
    },
    doneImage () {
      const imgSrc = this.cropper.getCroppedCanvas({
        width: 100// img_w.value /input value
      }).toDataURL();
      this.tempProduct.imagesUrl[this.tempImageIndex] = imgSrc;
    },
    delImage (key) { //* 刪除圖片
      this.tempProduct.imagesUrl.splice(key, 1);
      this.$emit('update-product', this.tempProduct);
    },
    // * new FormData() 是一個 JavaScript 內建的物件，用於創建一個空的 FormData 物件。
    // * 首先獲取一個 <form> 元素，FormData 物件可以用來構建一個包含鍵值對的表單數據，並且可以通過 AJAX 以 multipart/form-data 格式將這些數據發送到服務器。
    uploadFile () { //* 主圖上傳
      this.main_photo = true;
      const uploadedFile = this.$refs.fileInput.files[0];
      // console.log(this.$refs.fileInput.files[0].name);
      //
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
    //* 單獨上傳其他圖片
    // uploadFile_more () {
    //   this.other_photo = true;//* 讀取動畫
    //   const uploadedFile = this.$refs.fileInput_more.files; //* FileList
    //   console.log(uploadedFile);
    //   const formData = new FormData();
    //   formData.append('file-to-upload', uploadedFile);
    //   console.log(formData);
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
    //   this.$http.post(url, formData).then((res) => {
    //     if (res.data.success) {
    //       this.tempProduct.imagesUrl.push(res.data.imageUrl);
    //       this.other_photo = false;
    //     }
    //   });
    // },
    // 多檔轉檔
    uploadFile_more () {
      const uploadedFiles = this.$refs.fileInput_more.files;
      // console.log(uploadedFiles[0].name);
      // console.log(uploadedFiles[0]);
      for (let i = 0; i < uploadedFiles.length; i++) {
        const name = uploadedFiles[i].name; // 圖檔名
        const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid
        const status = 'success';
        //
        this.other_photo = true;
        const formData = new FormData();//! 放迴圈中才會每次獨立出來
        formData.append('file-to-upload', uploadedFiles[i]);
        this.$http.post(this.image_add, formData).then((res) => {
          if (res.data.success) {
            //
            const url = res.data.imageUrl;
            const item = { name, url, uid, status };
            this.tempProduct.imagesUrl.push(item);
            //
            // this.tempProduct.imagesUrl.push(res.data.imageUrl);
            this.other_photo = false;
          }
        });
      }
    },
    // 失敗的多檔上傳
    handleFileUpload (event) {
    // 第一種可以渲染，但無法儲存
      this.other_photo = true;
      const files = event.target.files; // 取得上傳的檔案
      console.log(files);
      // 迭代每個檔案並新增至圖片陣列
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.tempProduct.imagesUrl.push(e.target.result); // 將圖片資料新增至陣列
        };
        // reader.readAsDataURL(files[i]); // 讀取檔案資料
        // reader.readAsArrayBuffer(files[i]);
        reader.readAsBinaryString(files[i]);
      }
      // 第二種，嘗試轉檔，但只能上傳一個
      // try {
      //   const files = event.target.files;
      //   const formData = new FormData();
      //   for (let i = 0; i < files.length; i++) {
      //     formData.append('images[]', files[i]); // 將檔案加入到 FormData 物件中
      //   }
      // } finally {
      //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      //   this.$http.post(url, this.formData).then((res) => {
      //     if (res.data.success) {
      //       this.tempProduct.imagesUrl.push(res.data.imageUrl);
      //       this.other_photo = false;
      //     }
      //   });
      // }
      // 4
      // this.other_photo = true;
      // const files = event.target.files; // 取得上傳的檔案
      // for (let i = 0; i < files.length; i++) { // 迭代每個檔案並新增至圖片陣列
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     const img = new Image();
      //     img.onload = () => {
      //       const canvas = document.createElement('canvas');
      //       const ctx = canvas.getContext('2d');
      //       canvas.width = img.width;
      //       canvas.height = img.height;
      //       ctx.drawImage(img, 0, 0);
      //       const imageUrl = canvas.toDataURL('image/jpeg');
      //       // 將圖片轉換成 JPEG 格式
      //       this.tempProduct.imagesUrl.push(imageUrl);
      //       // 將圖片資料新增至陣列
      //       console.log(imageUrl);
      //     };
      //     img.src = e.target.result;
      //     console.log(img.src);
      //   };
      //   reader.readAsDataURL(files[i]); // 讀取檔案資料
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.modal_img {
  &:hover .img_wrap {
    display: flex !important;
    backdrop-filter: blur(10px);
    background-color: #00000025;
  }

  i {
    cursor: pointer;
  }
}
</style>
