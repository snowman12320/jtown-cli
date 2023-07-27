<!-- eslint-disable prefer-promise-reject-errors -->
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
              <!-- el元件 -->
              <el-upload :multiple="true" :limit="3" v-model:file-list="tempProduct.imagesUrl" class="upload-demo"
                :action="image_add" :on-change="handleChange" list-type="picture">
                <el-button class="w-100" type="primary">Click to upload</el-button>
                <template #tip>
                  <div class="el-upload__tip text-center">
                  </div>
                </template>
              </el-upload>
              <!-- 多檔上傳/原本寫法 -->
              <div class="mt-3">
                <label for="other_photo" class="btn btn-outline-primary btn-sm d-block w-100">
                  <input multiple id="other_photo" type="file" class="form-control d-none" ref="fileInput_more"
                    @change="uploadFile_more" />
                  Click to upload
                </label>
                <div class="text-center  text-secondary" style="font-size:8px">
                  <small class="">drag to change the sorting of the image list</small>
                  <small class="">(jpg/png files with a size less than 500kb)</small>
                </div>
              </div>
              <!-- 拖拉移動順序 -->
              <div class="   border  ">
                <!-- <div>{{ drag ? 'dragging' : 'drag done' }}</div> -->
                <draggable style="margin:10px" v-model="tempProduct.imagesUrl" group="group1" @start="drag = true"
                  @end="drag = false" item-key="id" chosen-class="chosen" animation="300">
                  <template #item="{ element }">
                    <div class="position-relative item ">
                      <div class="d-flex gap-2 border justify-content-between align-items-end rounded-3  p-2 ">
                        <div class="   position-relative modal_img" style="height:70px;width:70px">
                          <img class=" h-100 w-100 of-cover op-top" :src="element.url" alt="" />
                          <div
                            class="position-absolute top-0 start-0 bottom-0 w-100 h-100 d-flex justify-content-center align-items-center end-0 img_wrap d-none gap-2 "
                            style="backdrop:blur(5px)">
                            <i @click="cropImage(element.url)" class="bi bi-pencil-square fs-3 text-white"></i>
                          </div>
                        </div>
                        <div class=" ">
                          <small class="">{{ element.name }}</small>
                          <input type="text" class="form-control form-control fs-6 h-50" style="font-size:1px"
                            v-model="element.url" placeholder="請輸入連結" />
                        </div>
                      </div>
                      <i @click.stop="tempProduct.imagesUrl.splice(element.id, 1)"
                        class="bi bi-x-circle fs-6 p-1  text-danger position-absolute top-0 end-0"
                        style="cursor:pointer"></i>
                    </div>
                  </template>
                </draggable>
              </div>
              <!-- 多檔上傳/原本寫法 -->
              <div class=" row row-cols-2  border g-1  " v-if="false">
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
              <!-- 嘗試編輯圖套件 -->
              <!-- 用v-if會抓不到dom元素 -->
              <div class="" v-show="tempImage">
                <img ref="tempImage" :src="tempImage" style="height:300px" class="w-100 of-cover" alt="">
                <button @click="doneImage" type="button" class="btn btn-primary" data-bs-toggle="button"
                  aria-pressed="false" autocomplete="off">完成</button>
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
import draggable from 'vuedraggable';

export default {
  mixins: [modalMixin],
  components: {
    Multiselect,
    draggable
  }, //! 少一個s，就會掛掉
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
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }], //* 元件圖檔陣列的範本
      //
      drag: false
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
    }
  },
  computed: {
    availableOptions () {
      return this.options.filter(opt => this.value.indexOf(opt) === -1);
    },
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      };
    }
  },
  methods: {
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
    uploadFile () { //* 主圖上傳 /單獨上傳
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
    // 多檔/el元件
    // handleChange (file) {
    //   // ?為何不執行以下，就可以上傳...
    //   if (this.other_photo) {
    //     this.other_photo = true;
    //     const tempFile = file.raw;//* 這個路徑才是與原本元件相同，才能用formdata轉檔
    //     const name = tempFile.name; // 重組資料，存圖檔名
    //     const uid = Math.floor(Math.random() * 100000); // 隨機產生uid
    //     const status = 'success';
    //     //
    //     const formData = new FormData();//! 放迴圈中才會每次獨立出來
    //     formData.append('file-to-upload', tempFile);
    //     this.$http.post(this.image_add, formData).then((res) => {
    //       if (res.data.success) {
    //         const url = res.data.imageUrl;//* 這邊轉換後的連結才是可以存的
    //         const item = { name, url, uid, status };
    //         this.tempProduct.imagesUrl.push(item);
    //         this.other_photo = false;
    //       }
    //     });
    //   }
    // }
    handleChange (file) {
      if (this.other_photo) {
        this.other_photo = false;
        const tempFile = file.raw;
        const name = tempFile.name;
        const uid = Math.floor(Math.random() * 100000);
        const status = 'success';

        const formData = new FormData();
        formData.append('file-to-upload', tempFile);

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.$http.post(this.image_add, formData)
              .then((res) => {
                if (res.data.success) {
                  const url = res.data.imageUrl;
                  const item = { name, url, uid, status };
                  this.tempProduct.imagesUrl.push(item);
                  resolve();
                } else {
                  // eslint-disable-next-line prefer-promise-reject-errors
                  reject();
                }
              })
              .catch((error) => {
                reject(error);
              });
          }, 3000); // 等待3秒钟
        });
      } else {
        return Promise.resolve();
      }
    },
    // 多檔轉檔/原本元件
    uploadFile_more () {
      const uploadedFiles = this.$refs.fileInput_more.files;//* FileList
      // console.log(uploadedFiles[0].name);
      for (let i = 0; i < uploadedFiles.length; i++) {
        const name = uploadedFiles[i].name; // 圖檔名
        const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid const status='success' ; //
        this.other_photo = true;//* 讀取動畫
        const formData = new FormData();//! 放迴圈中才會每次獨立出來
        formData.append('file-to-upload', uploadedFiles[i]); this.$http.post(this.image_add,
          formData).then((res) => {
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
    }

  }
};
</script>
<style lang="scss" scoped>
/*被拖拽对象的样式*/
.item {
  // padding: 6px;
  background-color: #fdfdfd;
  // border: solid 1px #eee;
  cursor: move;
  margin-bottom: 10px;
  border-radius: 20px;
}

.item:hover {
  background-color: #f1f1f1;
  cursor: move;
}

/*选中样式*/
.chosen {
  border: solid 2px #3089dc !important;
  box-sizing: border-box !important;
  width: 100%;
}

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
