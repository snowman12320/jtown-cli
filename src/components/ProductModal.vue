<template>
  <div class="">
    <!-- Modal -->
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
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
                  <input type="text" class="form-control" id="image" v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結" />
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
                <!-- el元件 / 無法更改上傳列表 取消使用 / 但可正常上傳了(action="#")-->
                <el-upload :multiple="true" :limit="5" v-model:file-list="tempProduct.imagesUrl" class="upload-demo"
                  v-if="false" action="#" :on-change="el_handleChange" list-type="picture">
                  <el-button class="w-100" type="primary">Click to upload</el-button>
                  <template #tip>
                    <div class="el-upload__tip text-center">
                    </div>
                  </template>
                </el-upload>
                <!--  -->
                <input type="text" class="form-control" id="image" v-model.lazy="tempImagesUrl" placeholder="請輸入圖片連結" />
                <!-- 多檔上傳/原本寫法 -->
                <div class="mt-3">
                  <label for="other_photo" class="btn btn-outline-primary btn-sm d-block w-100">
                    <input multiple id="other_photo" type="file" class="form-control d-none" ref="fileInput_more"
                      @change="uploadFile_more" />
                    Click to upload
                  </label>
                  <div class="text-center  text-secondary" style="font-size:8px">
                    <small class="">drag to change the sorting of the image list</small> <br>
                    <small class="">(jpg/png files with a size less than 500kb)</small>
                  </div>
                </div>
                <!--  多檔圖片 ＋ 拖拉移動順序 -->
                <div class="     ">
                  <!-- <div>{{ drag ? 'dragging' : 'drag done' }}</div> -->
                  <draggable style="margin:10px" v-model="tempProduct.imagesUrl" group="group1" @start="drag = true"
                    @end="drag = false" item-key="id" chosen-class="chosen" animation="300">
                    <template #item="{ element }">
                      <div class="position-relative item ">
                        <!-- {{ tempProduct.imagesUrl.indexOf(element) }} -->
                        <div class="d-flex gap-2 border justify-content-between align-items-end rounded-3  p-2 ">
                          <div class=" flex-shrink-0  position-relative modal_img" style="height:70px;width:70px">
                            <img class=" h-100 w-100 of-cover op-top" :src="element.url" alt="" />
                            <div
                              class="position-absolute top-0 start-0 bottom-0 w-100 h-100 d-flex justify-content-center align-items-center end-0 img_wrap d-none gap-2 "
                              style="backdrop:blur(5px)">
                              <i @click.self="openModal(element)" class="bi bi-pencil-square fs-3 text-white"></i>
                            </div>
                          </div>
                          <div class=" overflow-hidden">
                            <small class="multiline-ellipsis">{{ element.name }}</small>
                            <input type="text" class="form-control form-control fs-6 h-50" style="font-size:1px"
                              v-model="element.url" placeholder="請輸入連結" />
                          </div>
                        </div>
                        <i @click.stop="tempProduct.imagesUrl.splice(tempProduct.imagesUrl.indexOf(element), 1)"
                          class="bi bi-x-circle fs-6 p-1  text-danger position-absolute top-0 end-0"
                          style="cursor:pointer"></i>
                      </div>
                    </template>
                  </draggable>
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
                  <ckeditor :editor="editor" v-model="tempProduct.description" :config="editorConfig"></ckeditor>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
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
          <!--  v-click-away="onClickAway" -->
          <CropperModal @confirm-cropper="updateImages" @close="openModal" v-if="isCropper" class="cropperModal_open"
            :class="{ 'cropperModal_close': !isCropper }" :tempImg="tempImg" v-click-away="onClickAway">
          </CropperModal>
          <!--  -->
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
  </div>
</template>
<script >
import modalMixin from '@/mixins/modalMixin';
import Multiselect from 'vue-multiselect';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';//* 需從public中，換成有取得新增外掛的
import draggable from 'vuedraggable';
import CropperModal from '../components/CropperModal.vue';

export default {
  mixins: [modalMixin],
  components: { //! 少一個s，就會掛掉
    Multiselect,
    draggable,
    CropperModal
  },
  data () {
    return {
      modal: {},
      tempProduct: {},
      main_photo: false,
      other_photo: false,
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
      drag: false,
      //
      isCropper: false,
      isLoading: false,
      tempImagesUrl: null,
      n: 1,
      //
      text: 'example_123@example.com'
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
    },
    tempImagesUrl () {
      const url = this.tempImagesUrl;
      const name = this.tempImagesUrl.split('/').pop(); // 重組資料，存圖檔名
      const uid = Math.floor(Math.random() * 100000); // 隨機產生uid
      const status = 'success';
      const item = { name, url, uid, status };
      this.tempProduct.imagesUrl.push(item);
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
    onClickAway (ev) {
      this.isCropper = false;
    },
    // 新增標籤
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      };
      this.options.push(tag);
      this.value.push(tag);
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
    //! 多檔/el元件 （使用非同步仍會產生多次上傳，且最後一個才會成功）> action 有API所以才會兩次上傳
    el_handleChange (file) {
      const tempFile = file.raw;//* 這個路徑才是與原本元件相同，才能用formdata轉檔
      // console.log(tempFile);//* 與handleChange（）比較上傳的檔案格式
      const name = tempFile.name; // 重組資料，存圖檔名
      const uid = Math.floor(Math.random() * 100000); // 隨機產生uid
      const status = 'success';
      // 修正blob開頭
      // const tempFile = file;
      // const newfile = new File([file], tempFile.name);
      // console.log(newfile);//* 上述助教的方式，會產生這種連結 blob:http://localhost:8080/c0737403-604b-4e1e-b6cf-1e9e28ad47d2，導致破圖
      // ?不執行以下，也可以上傳
      if (!this.other_photo) {
        this.other_photo = true;
        //* ，以下這種方式，連結也會出現blob開頭
        const formData = new FormData();//! 放迴圈中才會每次獨立出來
        formData.append('file-to-upload', tempFile);
        //
        this.$http.post(this.image_add, formData).then((res) => {
          if (res.data.success) {
            const url = res.data.imageUrl;//* 這邊轉換後的連結才是可以存的
            const item = { name, url, uid, status };
            this.tempProduct.imagesUrl.push(item);
            this.other_photo = false;
          }
        });
      }
    },
    // 多檔/手刻
    uploadFile_more () {
      const uploadedFiles = this.$refs.fileInput_more.files;//* FileList
      for (let i = 0; i < uploadedFiles.length; i++) {
        const name = uploadedFiles[i].name; // 圖檔名
        const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid
        const status = 'success'; //
        this.other_photo = true;//* 讀取動畫
        const formData = new FormData();//! 放迴圈中才會每次獨立出來
        formData.append('file-to-upload', uploadedFiles[i]);
        this.$http.post(this.image_add, formData).then((res) => {
          if (res.data.success) {
            //
            const url = res.data.imageUrl;
            const item = { name, url, uid, status };
            this.tempProduct.imagesUrl.push(item);
            //
            this.other_photo = false;
          }
        });
      }
    },
    openModal (img) {
      this.tempImg = img;
      this.isCropper = !this.isCropper;
      if (this.isCropper) {
        // this.$swal.fire('Please', ' Upload new image ,than cropper it', 'info');
        this.$toast('info', ' Upload new image ,than cropper it');
      }
    },
    updateImages (img) {
      // console.log(img); //物件包含已上傳雲端的圖片資料
      this.isCropper = false;
      const id = img.uid;
      const croppered = this.tempProduct.imagesUrl.filter((i) => i.uid === id);
      croppered.imageUrl = img.url;
      this.$swal.fire('Success', ' Upload new image ', 'success');
    },
    // 重組過去上傳圖片的結構需要
    resetImages () {
      // const tempList = [];
      // for (let i = 0; i < this.tempProduct.imagesUrl.length; i++) {
      //   const url = this.tempProduct.imagesUrl[i];
      //   const name = '123.jpg';
      //   const uid = Math.floor(Math.random() * 100000);
      //   const status = 'success';
      //   const item = { name, url, uid, status };
      //   tempList.push(item);
      // }
      // this.tempProduct.imagesUrl = tempList;
    }

  }
};
</script>
<style lang="scss" scoped>
.multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  /*  有寬度才能多行  */
  width: 100%;
  height: 20px;
}

.cropperModal_open {
  position: fixed;
  top: 5% !important;
  left: 50%;
  box-shadow: 10px 15px 50px 50px rgba(0, 145, 255, 0.269);
  z-index: 999;
  transform: scale(1) translateX(-50%);
  transition: all 300ms;
  height: 800px !important;
  overflow-y: scroll;
  max-width: 1000px !important;
  background-color: #fff;
  overflow-x: hidden;
}

.cropperModal_close {
  position: fixed;
  top: 0%;
  left: 0%;
  // transform: translate(-50%, -30%);
  box-shadow: 0px 5px 10px 10px rgba(0, 149, 255, 0.199);
  z-index: 999;
  transform: scale(0);
  // display: none;
}

/*被拖拽对象的样式*/
.item {
  // padding: 6px;
  background-color: #fdfdfd;
  // border: solid 1px #eee;
  cursor: move;
  margin-bottom: 10px;
  border-radius: 20px;
  border: solid 2px transparent !important;
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
