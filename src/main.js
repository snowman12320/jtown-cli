import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';// 匯入 vee-validate 主套件
import { required, email, min } from '@vee-validate/rules';// 匯入 vee-validate 相關規則
import { localize, setLocale } from '@vee-validate/i18n';// 匯入多國語系的功能
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';// 匯入繁體中文語系檔案
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');// 設定預設語系

const app = createApp(App);

// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

//* 全域引用自訂方法，每頁不用重複在methods中引入，這個檔案還是需引入，$filters(自定義名稱)
app.config.globalProperties.$filters = {
  currency,
  date
};
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
// 正常來說不建議太多方法掛Global,這裡可以使provide來處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
