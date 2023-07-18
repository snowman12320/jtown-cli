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
                <el-tag v-for="tag in dynamicTags" :key="tag" class="mx-1" closable :disable-transitions="false"
                  @close="handleClose(tag)">
                  {{ tag }}
                </el-tag>
                <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="ms-1 " style="width:100px"
                  size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
                <el-button v-else class="button-new-tag ml-1" size="small" @click.stop="showInput">
                  + New Tag
                </el-button>
              </div>
              <!--  -->
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
                <label for="editor1" class="form-label">文章描述</label>
                <!-- <textarea type="text" class="form-control" v-model="tempStory.description"
                  placeholder="請輸入文章內容"></textarea> -->
                <!-- <TinyMCE></TinyMCE> -->
                <!-- <textarea id="editor1"></textarea> -->
                <!-- <v-form-render :form-json="formJson" :form-data="formData.richeditor78915" :option-data="optionData"
                  ref="vFormRef">
                </v-form-render> -->
                <!-- <el-button type="primary" @click="submitForm">Submit</el-button> -->
                <ckeditor :editor="editor" v-model="tempStory.description" :config="editorConfig"></ckeditor>

              </div>
              <div class="mb-3">
                <label for="content" class="form-label">球員內容</label>
                <!-- <textarea type="text" class="form-control" id="content" v-model="tempStory.content"
                  placeholder="請輸入文章內容"></textarea> -->
                <ckeditor :editor="editor" v-model="tempStory.content" :config="editorConfig"></ckeditor>

              </div>
              <hr />
              <div class="mb-3">
                <label for="create_at">新增日期</label>
                <input type="date" class="form-control" id="create_at" v-model="create_at" />
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="tempStory.isPublic" :true-value="true"
                    :false-value="false" id="isPublic" />
                  <label class="form-check-label" for="isPublic">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- {{ tempStory.content }} -->
        <!-- {{ formData.richeditor78915 }} -->

        <!--  -->
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
  <!--  -->
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
// import TinyMCE from '@/components/TinyMCE.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';//* 需從public中，換成有取得新增外掛的

export default {
  mixins: [modalMixin],
  components: {
    // TinyMCE
  },
  data () {
    return {
      modal: {},
      tempStory: {},
      create_at: '', //! 限制數字存入資料
      //
      inputValue: '',
      dynamicTags: ['NBA', 'SPORT', 'NEWS'],
      inputVisible: false,
      InputRef: null,
      //
      // formJson: { widgetList: [{ key: 108449, type: 'rich-editor', icon: 'rich-editor-field', formItemFlag: true, options: { name: 'richeditor78915', label: '', labelAlign: '', placeholder: '', labelWidth: null, labelHidden: false, columnWidth: '200px', contentHeight: '200px', disabled: false, hidden: false, required: false, requiredHint: '', customRule: '', customRuleHint: '', customClass: [], labelIconClass: null, labelIconPosition: 'rear', labelTooltip: null, minLength: null, maxLength: null, showWordLimit: false, onCreated: '', onMounted: '', onValidate: '' }, id: 'richeditor78915' }], formConfig: { modelName: 'formData', refName: 'vForm', rulesName: 'rules', labelWidth: 80, labelPosition: 'left', size: '', labelAlign: 'label-left-align', cssCode: '', customClass: [], functions: '', layoutType: 'PC', jsonVersion: 3, onFormCreated: '', onFormMounted: '', onFormDataChange: '' } },
      // formData: {},
      // optionData: {},
      //
      editor: ClassicEditor,
      // editorData: '<p>Content of the editor.</p>', //* 預設內容
      editorConfig: {}
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
  created () {
  },
  watch: {
    //* 監聽傳進來的story，並自動存到暫存區
    story () {
      this.tempStory = this.story;
      // ! StoryModal 日期要轉成 yyyy-mm-dd 格式才會在彈窗正確顯示
      const date = new Date(this.tempStory.create_at * 1000);
      this.create_at = date.toISOString().split('T')[0];
      //
      //! 結果api文件中的tag欄位m，根本沒有QQ，難怪undefine
      // this.dynamicTags = this.tempStory.tag;
      // 多張圖
      if (!this.tempStory.images) {
        this.tempStory.images = [];
      }
      // this.formData.richeditor78915 = this.tempStory.description;//! 可以編輯，但再次編輯取不出來
    },
    create_at () { //! 限制數字存入資料
      // console.log('先是輸入日期', this.create_at);
      this.tempStory.create_at = Math.floor(new Date(this.create_at) / 1000);
      // console.log('後轉以秒为单位的时间戳', this.tempStory.create_at);
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
    },
    //* 標籤
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput () {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.InputRef.focus();
      });
    },
    handleInputConfirm () {
      if (this.inputValue) {
        this.dynamicTags.push(this.inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    // VFORM3 編輯器元件
    submitForm () {
      this.$refs.vFormRef.getFormData().then((formData) => {
        // Form Validation OK
        // alert(JSON.stringify(formData));
        // this.tempStory.content = JSON.stringify(formData.richeditor78915);
        // console.log(formData.richeditor78915);
        // !將 JavaScript 對象表示法 (JSON) 字符串轉換為對象。
        this.tempStory.content = JSON.parse(formData.richeditor78915);
        // alert(JSON.parse(formData));
      }).catch(function (error) {
        // Form Validation Failed
        alert(error);
      });
    }
  }
};
</script>
<style lang="scss">
.el-form {
  .el-form-item__label {
    display: none !important;
  }
}

// 編輯器圖片設定
:root {
  --ck-image-style-spacing: 1.5em;
}

.image-style {

  .image-style-side,
  .image-style-align-left,
  .image-style-align-center,
  .image-style-align-right {
    max-width: 50%;
  }

  .image-style-side {
    float: right;
    margin-left: var(--ck-image-style-spacing);
  }

  .image-style-align-left {
    float: left;
    margin-right: var(--ck-image-style-spacing);
  }

  .image-style-align-center {
    margin-left: auto;
    margin-right: auto;
  }

  .image-style-align-right {
    float: right;
    margin-left: var(--ck-image-style-spacing);
  }
}

// 影片
.media>div {
  width: 100%;
}
</style>
