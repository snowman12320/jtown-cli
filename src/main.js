//! Import statements: This is where you import all the required modules and libraries. You can start by importing the external libraries, followed by internal modules, components, and stylesheets.
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'; // 匯入 vee-validate 主套件
import { required, email, min } from '@vee-validate/rules'; // 匯入 vee-validate 相關規則
import { localize, setLocale } from '@vee-validate/i18n'; // 匯入多國語系的功能
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'; // 匯入繁體中文語系檔案
import App from './App.vue';
import router from './router';
import { currency, date, dateAndTime } from './methods/filters';
import $httpMessageState from './methods/pushMessageState'; //* 全域函式
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementPlus from 'element-plus'; // 引入element-plus库
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'; //* 會與Loading 衝突，導致失效 > 不用引入也icon
// https://stackoverflow.com/questions/67814888/how-to-remove-unwanted-packages-from-node-modules-npm-rm-doesnt-work
// import VForm3 from 'vform3-builds'; // 引入VForm3库  / npm i vform3-builds / npm uninstall <pkg> --save --force
import 'element-plus/dist/index.css'; // 引入element-plus样式
// import 'vform3-builds/dist/designer.style.css'; // 引入VForm3样式
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'; //* npm install bootstrap-vue
// import 'bootstrap/dist/css/bootstrap.css'; //! 終端出現version錯誤 可能只能支援bootstrap v4 + vue 2/3
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import Multiselect from 'vue-multiselect';//! 不能全域註冊
import 'vue-multiselect/dist/vue-multiselect.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
// import ClickOutside from './directives/click-outside';// 自定義v-click-outside 的指令
import $toast from './methods/toast';//* 定義完程式功能，需全域註冊，$錢字號應該是辨識用，若沒有包其他函式，就錢字號開頭(如$httpMessageState)，反之就(如$filters.currency)

// ! Configuration and initialization: Here, you can configure and initialize any necessary libraries or plugins.
// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW'); // 設定預設語系

//! Create the Vue app instance:
const app = createApp(App);

//! Register components and global properties: Register any global components and properties that you want to use throughout your application.
// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
//* 全域引用自訂方法，每頁不用重複在methods中引入，這個檔案還是需引入，$filters(自定義名稱)
app.config.globalProperties.$filters = {
  currency,
  date,
  dateAndTime
};
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
// 正常來說不建議太多方法掛Global,這裡可以使provide來處理
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.config.globalProperties.$toast = $toast;
// app.directive('click-outside', {
//   bind (el, binding, vnode) {
//     el.clickOutsideEvent = function (event) {
//       // 判斷點擊事件是否發生在目標元素的外部
//       if (!(el === event.target || el.contains(event.target))) {
//         // 呼叫指令綁定時傳入的回呼函式
//         vnode.context[binding.expression](event);
//       }
//     };
//     document.body.addEventListener('click', el.clickOutsideEvent);
//   },
//   unbind (el) {
//     document.body.removeEventListener('click', el.clickOutsideEvent);
//   }
// });
// 註冊指令
app.directive('validator', {
  // directive 生命週期
  mounted (el, binding) {
    el.focus();

    // 將外部的值改為
    el.className = binding.value;
  },
  updated: function (el, binding, vnode) {
    // el 元素本體
    // binding 綁定的資源狀態
    // vnode 虛擬 DOM 節點
    console.log('update', el, binding, vnode);
    const className = binding.value;

    // 尋找當前的 model 名稱（取得 key 值，並帶入第一個）
    const currentModel = Object.keys(binding.instance)[0];

    // 從當前 Model 取值
    const value = binding.instance[currentModel];
    console.log(currentModel, value);

    // Email validate
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(value)) {
      el.className = `${className} is-invalid`;
    } else {
      el.className = `${className} is-valid`;
    }
  }
});

//! Use plugins and libraries:
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.use(VueSweetalert2);
app.use(ElementPlus); // 全局注册element-plus
// app.use(VForm3); // 全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)
// app.use(BootstrapVue);
// app.use(BootstrapVueIcons);
app.use(CKEditor);
// app.use(ClickOutside);// 在 Vue 實例化之後呼叫 install 函式
// Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
//   app.component(key, component);
// });

//! Mount the app to the DOM and initialize any additional functionality:
app.mount('#app');
AOS.init();
