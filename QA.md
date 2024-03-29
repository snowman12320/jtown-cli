https://github.com/snowman12320/hexschool-question

目的：
針對目的嘗試：
預期結果：
結果（問題）：

/////////////////////////////////////////////////////////////////////////////////////////////

<!-- <meta http-equiv="Permissions-Policy" content="ch-ua-form-factor=()"> -->
<!-- https://stackoverflow.com/questions/69619035/error-with-permissions-policy-header-unrecognized-feature-interest-cohort -->
>  刪掉(編譯前index)原本+上的 content="ch-ua-form-factor=()" ? 應該還是有(編譯後index)
# 已詢問 未整理////////////////////////////


# 技術筆記///////////////////////////////////////////

# uniqueCategories

// this.uniqueCategories = this.products
// .filter((product, index, self) => self.findIndex(p => p.category === product.category) === index)
// .map(product => product.category);
// filter 方法用于遍历原始数组的每个元素，并根据回调函数的返回值来决定是否保留该元素。
// findIndex 方法用于在数组中查找满足条件的元素，并返回其索引。如果没有找到满足条件的元素，则返回-1。
// 在回调函数中，使用 findIndex 方法来检查当前元素的"category"值是否在数组中的其他元素中已经存在。
// 使用 self 来引用原始数组，以便在回调函数中进行比较和索引查找。
// 如果 findIndex 方法返回的索引与当前元素在数组中的索引相等，则表示当前元素是第一个具有该"category"值的元素，我们将其保留在结果数组中。
// 最后，我们使用 map 方法来提取结果数组中每个对象的"category"值，生成一个最终的唯一"category"值的数组。

# UserCheckout

// const date = new Date(this.create*at * 1000); // 将秒转换为毫秒
// const year = date.getFullYear();
// const month = date.getMonth() + 1; // 月份从 0 开始，所以要加 1
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// this.create_at = year + '-' + month.toString().padStart(2, '0') + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

> 怪怪的日期
> //_
> // 将日期时间对象转为字符串 > 錯誤
> // this.paid_date = new Date(this.order.paid_date _ 1000).toISOString().slice(0, 19).replace('T', ' ');

# {{}} 用于插值表达式，用

于将数据绑定到模板中。除了基本的插值表达式外，Vue 还提供了一些进阶的写法，包括：

1. 过滤器（Filters）：可以在插值表达式中使用过滤器来对数据进行处理和格式化。例如： {{ message | capitalize }} ，其中 capitalize 是一个自定义的过滤器。
2. 计算属性（Computed Properties）：可以在 Vue 组件中定义计算属性，并在插值表达式中使用它们。计算属性可以根据响应式数据的变化自动更新。例如： {{ fullName }} ，其中 fullName 是一个计算属性。
3. 方法调用（Method Calls）：在插值表达式中可以调用 Vue 组件中定义的方法。例如： {{ getMessage() }} ，其中 getMessage 是一个方法。
4. 动态绑定属性（Dynamic Binding）：可以在插值表达式中动态绑定 HTML 属性。例如：`<div :class="{'active': isActive}"></div> ，其中 isActive 是一个布尔值，根据其值动态绑定 active 类。
5. 表达式（Expressions）：插值表达式支持 JavaScript 表达式的语法。可以在表达式中使用条件语句、三元表达式等。例如： {{ isTrue ? 'Yes' : 'No' }}`。

# 「extends 和 mixins 表达了不同的意图。

mixins 选项主要用来组合功能，而 extends 主要用来考虑继承性。」
也可以說 extends 主要擴展元件功能， mixins 則可組合不同的功能
希望有幫助到你，有問題歡迎發問，我們會在線上等你。

//! 直接跨元件溝通，使用土司元件，不經過 httpMessageState，去判斷 res
this.emitter.emit('push-message', {
style: 'danger',
title: '移除我的收藏'
});

# Yup (npm install yup

是一個 JavaScript 庫，用於對 JavaScript 對象進行驗證的工具。它提供了一種簡單且可靠的方式來定義對象的驗證規則，並且可以輕鬆地集成到前端和後端的應用程序中。
主要功能包括：

1. 驗證規則定義：Yup 允許開發人員定義對象的驗證規則，並且可以對各種數據類型進行驗證，如字符串、數字、日期等。開發人員可以使用鏈式語法來定義驗證規則，例如 `Yup.string().required().min(6)` 表示字符串必填且最小長度為 6。
2. 錯誤處理：Yup 提供了一個錯誤處理機制，可以捕獲和處理驗證過程中出現的錯誤。開發人員可以通過使用 `try-catch` 塊來捕獲錯誤，並使用錯誤對象的屬性和方法來獲取有關錯誤的詳細信息。
3. 鏈式語法：Yup 的驗證規則可以使用鏈式語法進行連接，使得定義規則變得簡單和直觀。開發人員可以按照自己的需求添加多個驗證規則，並且可以通過調用不同的方法來定義這些規則，例如 `required()`、`min()`、`max()` 等。
4. 多語言支持：Yup 支持多語言，可以根據不同的語言環境顯示相應的錯誤消息。開發人員可以通過使用 `setLocale()` 方法來設置語言，並且可以自定義錯誤消息以適應特定的應用程序需求。
   總結來說，Yup 是一個功能強大且易於使用的 JavaScript 驗證庫，可以幫助開發人員輕鬆地對對象進行驗證，從而提高應用程序的可靠性和安全性。
   https://stackblitz.com/edit/vue-3-veevalidate-required-checkbox?file=src%2FApp.vue
   https://jasonwatmore.com/post/2020/10/11/vue-3-veevalidate-required-checkbox-example

# vue-sweet alert

https://github.com/avil13/vue-sweetalert2
https://sweetalert2.github.io/

# computed

- filtersData 的篩選條件中加入判斷，當 cacheSearch 或 cacheCategory 為空時，不進行篩選。
- default 表示默認的排序規則，使用 () => 0 函數實現，即不進行排序。
  其中 [this.selectSort || 'default'] 表示根據 this.selectSort 的值來選擇對應的排序規則，如果 this.selectSort 為空或未定義，則選擇默認的排序規則。

```
 computed: {
   // 監聽多個變化（變數） 產生一個資料（函式），注意return位置
   filtersData () {
     console.log(this.filterCheck);
     // this.isLoading = true;
     //! 在productList正常，在productItem會找不到cacheSearch等值，故使用判斷路由
     if (!this.$route.path.includes('products-content')) {
       return this.products;
     } else {
       //! 要用 &&，不然cacheCategory搜尋，會有問題，用｜｜好像都會是true，不懂為何不是｜｜
       const filteredData = this.products.filter((item) =>
         item.title.toLowerCase().includes(this.cacheSearch.toLowerCase()) &&
       item.category.toLowerCase().includes(this.cacheCategory.toLowerCase())
       );
       if (filteredData.length === 0 && this.cacheSearch.trim().length === 0) {
         // this.isLoading = false;
         return this.products;
       } else {
         // this.isLoading = false;
         // return filteredData;
         //* 篩選
         if (this.filterCheck) {
           if (this.filterCheck === '2999') {
             return filteredData.filter(item => item.price <= 2999);
           } else if (this.filterCheck === '5000') {
             return filteredData.filter(item => item.price >= 5000);
           } else {
             return filteredData;
           }
         } else {
           //* 排序
           switch (this.selectSort) {
             case 'Low':
               return filteredData.sort((a, b) => a.price - b.price);
             case 'Height':
               return filteredData.sort((a, b) => b.price - a.price);
             case 'AZ':
               return filteredData.sort((a, b) => a.title.localeCompare(b.title));
             case 'ZA':
               return filteredData.sort((a, b) => b.title.localeCompare(a.title));
             default:
               return filteredData;
           }
         }
       }
     }
   }
 },
```

# forEach / new Set() / reduce /

綜合以上優化，您可以參考以下程式碼：

```javascript
const uniqueCategories = new Set();
this.products.forEach((product) => {
  uniqueCategories.add(product.category);
});
this.uniqueCategories = Array.from(uniqueCategories);
```

- 或者：

```javascript
const uniqueCategories = this.products.reduce((categories, product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
  return categories;
}, []);
this.uniqueCategories = uniqueCategories;
```

-

```javascript
const uniqueCategories = this.products
  .filter(
    (product, index, self) =>
      self.findIndex((p) => p.category === product.category) === index
  )
  .map((product) => product.category);
this.uniqueCategories = uniqueCategories;
```

這個方法會遍歷 products 數組，並使用 findIndex 方法查找第一個符合條件的元素的索引，如果當前元素的索引等於第一個符合條件的元素的索引，則保留當前元素。最後使用 map 方法將保留下來的元素轉換為類別數組。
這種方法可以在一次循環中完成過濾和轉換操作，因此比使用 forEach 或 reduce 方法更高效。

- 使用 Set 可以有效地避免重複的類別，因此在效率方面已經非常高效了。如果您希望進一步提高效率，可以考慮使用 for...of 循環代替 forEach 方法，因為 for...of 循環比 forEach 方法更快。例如：

```javascript
const uniqueCategories = new Set();
for (const product of this.products) {
  uniqueCategories.add(product.category);
}
this.uniqueCategories = Array.from(uniqueCategories);
```

# localStorage

let reData = [
{ 'left_wifeName': 'Happy' },
{ 'right_wifeName': 'Happy2' },
];
localStorage.setItem('neiDetail', JSON.stringify(reData));
//將陣列&物件資料印在網頁上
let childNameLeft = localStorage.getItem('neiDetail');
let childNameLeftObj = JSON.parse(childNameLeft)
https://5xruby.tw/posts/localstorage
https://codepen.io/ice12031110/full/PomoBOR
https://codepen.io/snowman12320/pen/mdQEXZq?editors=1010

# element-plus

https://element-plus.org/en-US/component/tag.html#edit-dynamically
上述轉成 vue data() 寫法 ，只要 script 標籤內容就好

# 一鍵部屬 sh deploy.sh

先是第一種看 push 會不會錯誤
不行的話最後要改
git push --set-upstream git@github.com:snowman12320/hexschool-question.git main
https://israynotarray.com/vue/20200214/1055437216/

多使用 bash 去用 git 可知道分支位置 > 有錯誤可以傳信箱的 flow 給 AI
上述會失敗 因為
根据提供的错误消息，以下是可能的解决办法：
检查构建和部署优先级：错误消息中提到了一个更高优先级的请求正在等待执行。这可能是由于同时进行了多个构建和部署请求。请确认在您的仓库中是否有其他正在进行的构建和部署任务，并等待它们完成。一旦较高优先级的任务完成，您的任务将会继续执行。
可能就要自己手動
git push origin --delete gh-pages
npm run build > cd dist > git init > git add . > git commit -m "use hand build" > main or master
git push -f git@github.com:snowman12320/hexschool-question.git main:gh-pages

> cd ..
> 有時手動失敗就用自動化的，交互使用，且 pages 要先切回 none，下次推就先推，不要刪除分支，能覆蓋就覆蓋(自動化去覆蓋有成功過)
> pages 成功就會自動切到 gh-page

> 查看 github action 錯誤訊息
> 註解 .md 錯誤

 <!-- If the `str` contains more `a` than `b` / there are unmatched pairs, the first match that was closed will be used. For example, `{{a}}` will match `['{', 'a', '']` and `{a}}` will match `['', 'a', '}']`. -->

> 設定 vue.confing.js 路徑 (用官方的建議方式才能，不用刪分支和 CK 編輯器設定黨，手動自動都可)
> index.html中的路徑問題，會慢點更新!!!，要看 /dist中的index

## CKEditor 5

// 无法 plugins > 需使用官方設定黨下載取代 ckeditor5-build-classic 夾，或者在此夾中，npm 套件並 build 即可
// 官網線上新增功能 https://ckeditor.com/ckeditor-5/online-builder/
// ＋＋＋ 新增外掛 https://hackmd.io/@YuXiangLiao/HJ8U-c1tO#
// ＋＋＋ 設定樣式 新增外掛 設定外掛的樣式 https://ithelp.ithome.com.tw/articles/10211769
// 簡單版 https://hackmd.io/@SkT7-27LSWWQi5G2DJBLkw/HyRzmUCDq
// 可能是 js 版 https://adminhk.com/ckeditor5%E6%95%99%E5%AD%B8-%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%9D-%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8-2022%E5%B9%B4%E7%89%88/
// https://docfunc.com/posts/9/ckeditor-5-%E6%95%99%E5%AD%B8%E4%BA%8C%E5%AE%A2%E8%A3%BD%E5%8C%96%E7%B7%A8%E8%BC%AF%E5%99%A8%E7%9A%84%E5%8A%9F%E8%83%BD%E5%88%97-post
// import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
// import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
// import { CKEditorTranslationsPlugin } from '@ckeditor/ckeditor5-dev-translations';
官方 source-editing 外掛
https://ckeditor.com/docs/ckeditor5/latest/features/source-editing.html
使用 source-editing 外掛或其他外掛的問題
https://stackoverflow.com/questions/70787904/vuejs-ckeditor-typeerror-cannot-read-properties-of-null-reading-getattribute

## 商品內頁 放大鏡

<!-- <div v-for="item in gallery" :key="item"> -->
<!-- <img :src="item.src" @click="startFancy" /> -->
<!-- </div> -->

<img :src="gallery[0].src" @click="startFancy" />

// https://stackoverflow.com/questions/68762154/popup-gallery-plugin-with-video-support-for-vue-3
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm';
// 這個 pins plugin 沒有內建 options https://fancyapps.com/panzoom/plugins/pins/
// 理解原生 js 即可使用（查看 node 夾路徑），並複製官網 example 中開發者工具中的 css
import { Pins } from '@fancyapps/ui/dist/panzoom/panzoom.pins.esm';
import { Panzoom } from '@fancyapps/ui/dist/panzoom/panzoom.esm';

methods: {
startFancy () {
Fancybox.show(this.gallery, {}); // starts fancybox with the gallery object
},

# 技術問題////////////////////////////////////////////////////////////////////////////////////////////////////////

- [x] 關於 元件傳遞資料的使用
      "HomeView"用 props 和 "productsView"用 emit 去改變，isLoading 和 isLogin 的布林值，開發上有建議用哪種嗎
      看起來 props+mixin(每個 view) 程式碼比較簡潔好懂 > emit 要用兩次傳兩次 isLoading

- [x] 另外還有嘗試，
      讓"Header"中，判斷是否登入的載入動畫出現一次就好，
      這樣其他頁面就不用重複判斷是否登入，但發現只要引入 header 元件的頁面，就還是都會執行一次 created()
      xCartOffcanvas 的 mounted ()，會偶爾失敗傳入加總數字零，有時會傳入正確值，但 getCart ()產生的 carts 已經在 created 執行才對，getCart ()也有嘗試去加總也是失敗

- [x] 關於 "emitter"
      不用（），名字好像也無所謂，因都會執行某個函式
      請問使用 emitter
      this.emitter.emit('customEvent_getCart', this.getCart);
      那在另一個元件有辦法跨元件觸發函式嗎，試過幾次沒辦法，不知道哪裡寫錯

  > this.emitter.on('customEvent_getCart', () => {
  > this.getCart();
  > });

- [x] 關於"seleted"
      在 CartList 中，想讓勾選優惠券後，固定在勾選該優惠券，但無法依照判斷有優惠碼時就固定勾選它，會一直回復到無勾選狀態
  > 應該要存進去 api 已存但無法

<!-- !! 雙重否定運算子：將值強制轉換為布林值。將值兩次否定後，結果就是該值的布林表示 ，:selected="Boolean(couponCode)-->

> //! 有新增優惠券時 或 重新整理判斷有無優惠券，避免沒有變數錯誤或下拉選單重整

- [x] 關於"computed"
      在 productList 使用 filtersData，為啥要用 &&，不然 cacheCategory 搜尋會有問題，但我的認知是，用｜｜才是判斷，cacheCategory 或 cacheSearch 有符合的都返回才對
      ，還有在我點選 cacheCategory 時，我設定清空 cacheSearch，當我要再搜尋時要點兩下才能輸入，點一下就會讓一個字輸入失敗

> 如果是 || 的話代表"或"，意思是兩個條件符合一個就可以
> 至於有問題推測主因是目前在 ProductsSide.vue 分別 watch cacheSearch 和 cacheCategory
> 只要任何一方改變就會清空另一個變數
> 因此推論這個功能一次僅能使用 cacheSearch 或是 cacheCategory 兩者其一

- [x] 關於"vee-validate""
      安裝的指令 npm i vee-validate @vee-validate/rules @vee-validate/i18n --save --force
      在 CartList 和 CartForm 中 嘗試使用驗證表單
      但會出現 export 'toValue' (imported as 'toValue') was not found in 'vue'錯誤 ，
      Uncaught (in promise) TypeError: (0 , vue**WEBPACK_IMPORTED_MODULE_4**.toValue) is not a function （開發者工具）
      ，好像是 vee-validate 版本要改，不太確定
      只要註解的 field 打開都會出現上述錯誤
- [x] 關於"編譯後的終端機中"
      出現以下警告資訊，是指我需要 npm run build，然後再運行伺服器嗎，修正 VEE 套件錯誤(降版本號/老師的 commit 有版本)就消失
      Note that the development build is not optimized.
      To create a production build, run npm run build.

  > 直接輸入 npm i vee-validate@4.9.6 即可降回

- [x] 關於 "@change"
      CartOffcanvas 中 @change="updateCart(item)" 嘗試讓 input 數值變動就觸發函式，但沒有觸發函式
      v-model.number="item.qty" 和:value="item.qty"都嘗試過也是無法，要使用＠click 在增加或減少按鈕上才會觸發

  > 在 input 輸入完後要點旁邊的任意空白處才會觸發
  > x 關於"CartList"中
  > 我在 productItem 中，按直接購買，跳轉到 CartList，我的 carts 不會更新，有使用 emitter 去 getCart()和該 created(){getCart()}，但也沒用，在要套用優惠券時才會更新
  > 助教這裡測試會直接更新
  > 不過我在 ProductsList.vue 修改了 API 的路徑
  > 變成：https://vue3-course-api.hexschool.io/api/william-api/products/?page=1
  > 這樣使用者不需登入也能看到產品列表

- [x] (公司更改沒紀錄的 - 選都保留才都有)
      warning: in the working copy of 'storyItem.html', LF will be replaced by CRLF the next time Git touches it
      這個警告意味著在 Git 下一次操作 storyItem.html 檔案時，LF（Unix/Linux 系統的換行符號）將會被 CRLF（Windows 系統的換行符號）取代。
      這通常發生在跨不同作業系統的團隊合作中，因為不同的作業系統使用不同的換行符號。Unix/Linux 使用 LF 作為換行符號，而 Windows 使用 CRLF。
      當 Git 操作檔案時，它會自動調整換行符號以符合當前作業系統的預設設定。在這種情況下，Git 準備將 storyItem.html 檔案中的 LF 換行符號轉換為 CRLF 換行符號，以符合 Windows 系統的預設設定。
      這個警告只是提醒你在 Git 操作 storyItem.html 檔案時，換行符號將會被調整。如果你的專案中不需要特定的換行符號格式，你可以忽略這個警告。否則，你可能需要在 Git 設定中進行相應的配置以避免換行符號的自動轉換。

(在家更改有紀錄的)
x header 中
https://v2.cn.vuejs.org/v2/guide/class-and-style.html
:style="{ 'backdrop-filter: blur(5px)': atTop }"

> 按照官網方式寫成物件 > 寫成 class 去使用即可

- [x] .

1.  CartList 中
    :rules="isCheck" 無法顯示錯誤訊息，也沒有阻擋 submit 行為
    > 沒有透過 :class 的方式去判斷 error-message 何時該顯示
    > 另外 Field 後面也要記得利用 v-bind 去綁定 value
    > 2.:selected="Boolean(!couponCode)" ，取消優惠券後，選單會變空白？
    > 把 option 改用動態屬性 :value 的方式傳入 couponCode
    > 接著把「請選擇優惠卷」的那個 option 改成一般 value 的方式並且加上 selected
    > name 要對，這樣 error[]才會抓到，並顯示錯誤

```
<Field type="password" name="密碼" id="password" class="form-control rounded-3" placeholder="password"
    required v-model="user.password" maxlength="20" :rules="validatePassword"
    :class="{ 'is-invalid': errors['密碼'], 'is-valid': !errors['密碼'] }"></Field>
<error-message name="密碼" class="invalid-feedback"></error-message>
```

- [x] .

1. storyItem 中
   背景圖片引入問題：
   style="background-image: url(@/assets/nbaWeb/1126209.png)"
   style="background-image: url(C:\Users\william\Desktop\hexschool-question\src\assets\nbaWeb\1126209.png)"
   還有之前，有使用 lightbox，彈窗的圖片會使用的， 或在 href 屬性中，使用圖片路徑就無法顯示
   嘗試兩種寫法：
   href="C:\Users\william\Desktop\hexschool-question\src\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg"
   href="@\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg"
   > :style="{'background-image': `url(${require('@/assets/nbaWeb/1126209.png')})`}"

- [x] id 和 productId
      要用 this.id ，用 product.id 會錯 ，需分清楚差別 > 看 API 文件 / 產品本身 ID 和陣列中帶的 ID > 當初用陣列 ID 去跑回圈，故之後點擊都要透過這個 ID 分辨或比對

  > $route.params.productId帶的ID是$router.push 推的 (所以並非產品本身 ID)
  > 沒有這個產品本身 ID ，只有訂單產生時會有新的產品陣列並帶 ID
  > 取得訂單列表
  > "orders": [
  > {
  > "create_at": 1523539834,
  > "id": "-L9u2EUkQSoEmW7QzGLF",
  > "is_paid": true,
  > "message": "這是留言",
  > "paid_date": 1523539924,
  > "payment_method": "credit_card",
  > "products": {

      "L8nBrq8Ym4ARI1Kog4t": {
      "id": "L8nBrq8Ym4ARI1Kog4t",
      "product_id": "-L8moRfPlDZZ2e-1ritQ",
      "qty": "3"
      }

  },

- [x] ＋＋＋ import Multiselect from 'vue-multiselect';

  > https://vue-multiselect.js.org/#sub-getting-started
  > ＋ import VueMultiselect from 'vue-multiselect';
  > https://github.com/shentao/vue-multiselect/tree/next
  > components: { VueMultiselect }, //! 少一個 s，就會
  > https://www.cnblogs.com/danhuai/p/16673754.html > https://blog.csdn.net/weixin_44058725/article/details/125293263

  -[x] **全部後台搜尋和篩選和排序都放訂單去實作**
  x 表格 排序(參蔬果) / x 搜尋(產品名) / x 篩選(是否付款)

-[x] 商品列表 使用 extend 擴展(商品內頁也有) >
壓掉原本資料 (created>>mixinextend) ，元件壓得掉嗎 (受本身元件的權重影響，不行) >
props 相關商品(類別) 用 extend 改變篩選等等 (props 只能傳元件中沒有的值)

> 直接傳送資料，比如改變類別就傳類別值

-[x]文章內頁 切換下一頁

- watch computed 哪種消耗資源
  > 在 Vue 中，watch 和 computed 都是用來監聽和追蹤數據的工具，但它們的使用方式和消耗資源程度是不同的。
  > watch 是一個監聽器，它可以用來監聽數據的變化，當數據發生變化時，watch 會執行相應的操作。watch 可以監聽單個數據屬性或者整個對象，並且可以設置深度監聽。watch 的消耗資源程度取決於監聽的數據量和操作的複雜度，如果監聽的數據量很大或者操作很複雜，那麼 watch 會消耗較多的資源。
  > computed 是一個計算屬性，它可以根據數據的變化自動計算出新的值。computed 的特點是它會根據數據的變化進行緩存，只有當數據發生變化時，computed 才會重新計算。這樣可以避免不必要的重複計算，提高性能。computed 的消耗資源程度相對較低，因為它只在需要時才計算。
  > 總的來說，如果需要監聽數據的變化並執行複雜的操作，可以使用 watch；如果只是需要計算數據的值，可以使用 computed。根據具體的需求和場景來選擇使用哪一種方式。

-[x] Vue.js devtools

> 這個套件好像掛了
> 安裝文件 https://devtools.vuejs.org/guide/installation.html#settings-1
> ＋＋＋ https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3
> 快修正 ，這樣不用一直{{}}，可直接看變數
> 安裝非 beta / del 版 chrome 即可 ，有影片示範 > 選一般版 vue dev 插件

- [x] storyModal 中
      日期時間元件(使用 element-plus)，只能選擇日期，其他功能都會跳掉，但放在 storys 中就可以，在談窗好像都會有一些奇怪的 bug
      https://element-plus.org/zh-CN/component/datetime-picker.html#%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4%E7%82%B9
      有去官方 github 查看元件內部，但看不到什麼問題
      https://github.com/element-plus/element-plus/blob/dev/docs/examples/datetime-picker/date-and-time.vue -[x]prodcutModal 中
      " 一般不會將 base64 的圖片存到資料庫，所以請同學務必上傳一般圖片的格式 "
      在 uploadFile_more()，已轉格式，但都只能上傳一張，有嘗試用迴圈，但無法上傳多張
  > 迴圈包住全部上傳流程即可 -[x] delImage()中
  > 為何執行刪除圖片會關閉彈跳窗？，我找了很久，只有看到刪除陣列項目的動作，但就會關掉視窗
  > 有試過改用 a 或 button 以外的標籤，或 click.stop > click.stop 但刪最後一個就會 -[x] productList 中
  > 鞋子在第二頁就會搜尋或篩選不到，要載入第二頁才有
  > 全部顯示用 有頁數 API
  > 搜尋時用 沒有頁數限制 API
- [x] storys 中 openModal
      嘗試將原本的時間秒數轉成日期格式，並顯示在已編輯彈窗的日期中，但都失敗，會是空值，
  > // ! StoryModal 日期要轉成 yyyy-mm-dd 格式才會在彈窗正確顯示
  > const date = new Date(this.tempStory.create_at \* 1000);
  > this.create_at = date.toISOString().split('T')[0];
- [x] StoryModal 中
      v-model="tempStory.content" 寫不進去資料庫，api 送進去有顯示更新成功，查看 item 中也有，但編輯時，彈窗資料讀出來就沒有，
      但 description 卻有
  > 寫入和讀取單個文章的 API，不同
- [x] StoryList 中
      isPublic 是 false 但還是會顯示的原因
  > 沒有抓資料後，沒有先篩選掉，無啟用的
- [x] StoryModal 中
      想在 description 增加一個 height 的欄位，但好像不行轉成物件格式，是不是因為這個欄位是固定輸入字串，所以實際開發時，只能請後端改 api 呢？ > 轉字串存 > 商品描述的編輯器若可以就可以
- [x]想確認 couponModal 中的 watch 的功用
  是先使用 due_date () 將毫秒數字轉成日期時間後，const dateAndTime 再去掉時間，只留日期嗎？
  可是 好像只要 due_date ()後， 加上$filters.data 就會轉成日期 > 所以兩個方式都可吧
- [x] 收藏的陣列要可以要多個 > 先存成陣列或物件，再轉型 json 字串存入，取出時要轉解析 parse
- [x] 商品切換時 路徑 ID 也要改 > 透過$router 傳遞 id，並轉換商品頁，先儲存收藏，再確認目前商品 id 和收藏 id 是否相同
- [x] 首頁的產品要渲染 改回圈或用 extend / mixin (都是 JS 擴增) > .slice(0, 4) > 重新抓資料
- [x] 左側購物車 小計要整數(final_total > total) -[x] 搜尋有提示框 ：列表渲染類別，並即時搜尋，點擊後送出到搜尋框中
  > https://vue-multiselect.js.org/#sub-getting-started
  > 怪怪的，可能要自己做一個 > 已修正

-[x] Q：使用 this.emitter.emit('customEvent_category', this.product.category); 試圖更新產品列表元件的分類項目，達到依照各種商品，呈現相關商品類別效果，但失敗
A：
ProductsList.vue 第 112 行的 if 判斷有問題
所以進到單一產品頁面時雖然有成功觸發 customEvent_category 事件
但是沒有根據 this.cacheCategory 重新計算資料
可以再重新檢查一下這塊的邏輯

- Q：如何在 productItem 元件中，使用 class 去隱藏，引入的 productsList 元件的元素，例如下拉選單
  A：目前透過 props 的做法可以，改成像下面這樣就 OK 了
  <ProductsList :customClass="['d-none']"></ProductsList>
- Q：上述提到的下拉選單，為何在 productItem 元件引入就無法運作？
  A：跟第一個問題一樣，ProductsList.vue 第 112 行的 if 判斷有問題，所以永遠不會跑 else 的部分

-[x]多檔上傳

```
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
  <!-- 多檔上傳/原本寫法 -->
  <div class="mt-3">
    <label for="other_photo" class="btn btn-outline-primary btn-sm d-block w-100">
      <input multiple id="other_photo" type="file" class="form-control d-none" ref="fileInput_more"
        @change="uploadFile_more" />
      新增圖片
    </label>
  </div>
<!--  -->
    // 多檔轉檔/原本元件
    uploadFile_more () {
      const uploadedFiles = this.$refs.fileInput_more.files;//* FileList
      // console.log(uploadedFiles[0].name);
      for (let i = 0; i < uploadedFiles.length; i++) {
        const name = uploadedFiles[i].name; // 圖檔名
        const uid = Math.floor(Math.random() * 10000000000000); // 隨機產生uid
        const status = 'success';
        //
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
            // this.tempProduct.imagesUrl.push(res.data.imageUrl);
            this.other_photo = false;
          }
        });
      }
    }
```

```
// 失敗的多檔上傳 > vue 需要用 formData 轉
handleFileUpload (event) {
// 第一種可以渲染，但無法儲存
this.other_photo = true;
const files = event.target.files; // 取得上傳的檔案
// console.log(files);
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
//_ 第二種，嘗試轉檔，但只能上傳一個，但還是不能存 base64
// try {
// const files = event.target.files;
// const formData = new FormData();
// for (let i = 0; i < files.length; i++) {
// formData.append('images[]', files[i]); // 將檔案加入到 FormData 物件中
// }
// } finally {
// const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
// this.$http.post(url, this.formData).then((res) => {
// if (res.data.success) {
// this.tempProduct.imagesUrl.push(res.data.imageUrl);
// this.other_photo = false;
// }
// });
// }
//_ 一樣是 base64
// this.other_photo = true;
// const files = event.target.files; // 取得上傳的檔案
// for (let i = 0; i < files.length; i++) { // 迭代每個檔案並新增至圖片陣列
// const reader = new FileReader();
// reader.onload = (e) => {
// const img = new Image();
// img.onload = () => {
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = img.width;
// canvas.height = img.height;
// ctx.drawImage(img, 0, 0);
// const imageUrl = canvas.toDataURL('image/jpeg');
// // 將圖片轉換成 JPEG 格式
// this.tempProduct.imagesUrl.push(imageUrl);
// // 將圖片資料新增至陣列
// console.log(imageUrl);
// };
// img.src = e.target.result;
// console.log(img.src);
// };
// reader.readAsDataURL(files[i]); // 讀取檔案資料
// }
}
```

-[x] productsModal 中
使用 el-upload 元件圖片上傳功能(38 行)，我使用他們的按鈕觸發@change 會出現破圖，偶爾可以正常，需重新整理後，就會出現本來正常的圖破圖，而且會重複上傳，然後最後一張都會是成功的，後來我使用自己的寫的按鈕(47 行)就可以正常上傳，但會沒有載入進度，想了解造成的原因
有嘗試： 1.了解元件內部，查不到 el-upload 的結構，就是想查看 v-model:file-list="fileList"(這應該是一個 props 傳入插槽改寫資料的方式)，想找到插槽結構，並修改樣式及了解問題
https://github.com/element-plus/element-plus/blob/dev/docs/examples/upload/file-list-with-thumbnail.vue 2.查看文件
嘗試在屬性中加入 header 和 method，但是非必填，感覺也不是問題點
https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7

> blob:http://localhost:8080/107fc007-8aa1-489b-a415-cc40d589fff4 要再轉 -在 productsModal 中
> 1.el-upload 元件，使用 el_handleChange()上傳的檔案連結都會有 blob 開頭連結，導致破圖，有嘗試兩種轉檔方式也還是一樣，
> 上傳一張會重複兩次上傳，第一張 blob 開頭，第二張才是正常
> blob：http://localhost:8080/107fc007-8aa1-489b-a415-cc40d589fff4
> 由於 el-upload 選擇圖片後本身就會觸發一次上傳（有設置 action 所以知道上傳 API）,而 el-upload 又設定了 on-change，因此觸發了 el_handleChange 上傳
> 所以會上傳兩次,解決方法可以參考這篇文章https://juejin.cn/post/6958762366561419277#heading-2

-[x] 1.關於上述提到的警告

> [Vue Router warn]: No match found for location with path "/products-view/products-content"
> 在回首頁或首頁重新整理就會出現，想了解原因
> router-link to 不存在連結舊會

-[x]在 ProductModal 中
目的：透過產品圖片中的編輯 icon，將圖片帶入 CropperModal 中 ，並進行裁切，確認後覆蓋原本的圖片
針對目的嘗試：使用 props 傳遞圖片，並用 watch 更新 tempImg 的值，就是要裁切的圖片
預期結果：可以帶入將圖片帶入 CropperModal 中，並裁切，然後覆蓋原本圖片

結果（問題）：
將圖片帶入 CropperModal 中的圖片會無法使用，出現 CORS 錯誤，好像是不能直接使用雲端的資料
Access to image at 'https://storage.googleapis.com/vue-course-api.appspot.com/william-api/1690362062055.jpg?GoogleAccessId=fi....(省略) from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

上述問題嘗試：
將雲端的圖片下載，模擬本地上傳圖片去裁切，
CropperModal 中 watch，使用 fetch 去下載成 base64data 來裁切，但一樣是上述的錯誤代碼，所以認為是否是雲端連結有限制之類

參考文章：
(請後端設置 CORS header)
https://blog.huli.tw/2021/02/19/cors-guide-2/#%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%A7%A3%E6%B3%95%E8%AB%8B%E5%BE%8C%E7%AB%AF%E8%A8%AD%E7%BD%AE-cors-header
https://ithelp.ithome.com.tw/articles/10268821
https://shubo.io/what-is-cors/
(官方安全原因，因不同源導致阻擋) https://stackoverflow.com/questions/71016448/error-access-to-xmlhttprequest-at-https-storage-googleapis-com-url-from-origi

> 由於直接抓雲端資料的圖片來裁切這個做法會產生 CORS 的問題
> 因此，會建議將目標改成上傳前就先裁切圖片，上傳後不提供編輯功能
> 從這個方向來下手，問題就能夠解決囉～

-[x]productsItem 中，
就是產品內頁，下面的列表中，尺寸輸入，加入購物車有問題
productList 中加入購物俥正常，
但在產品內頁裡的引入該產品列表元件，加入購物車會失敗
，但加入收藏正常，明明都有用 mixin 引入方法

猜側可能，內頁有加入購物，引入的產品列表也有，導致衝突
有將 v-model 改寫不同，productSize_item 和 productSize_list 來取值
但還是無法寫入尺寸，然後加入購物俥

> label ID 重複

-[x]click.away

> 使用套件即可，幾乎不用自己寫自定義事件
> https://github.com/VinceG/vue-click-away

-[x] vue 修改後都要重新整理?
我發現在開發時，需要一直重新整理才能更新修改，除了有 style 會即時更新，然後編譯完有錯誤也會更新，那不知道有沒有類似 live server 可以自動即時更新
，讓.vue 中，template 和 script 修改時，即時更新，如參考的連結中一樣的效果

> 好像改夠多就自己更新 也不用一直案儲存 為了整理用並除錯
> Vue.$set()
> Vue 3.x 版本，則可以使用 Vue CLI 進行開發。Vue CLI 默認使用 webpack 作為打包工具，並提供了一個預設的配置文件 vue.config.js
> 嘗試：
> 安裝套件，但參考連結中，起步分頁有提到， vue cli 好像已經內建熱重載這些功能
> npm install vue-loader vue-template-compiler --save-dev

    在vue.config.js中加入
    chainWebpack: (config) => {
    // 配置 vue-loader
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // 修改選項
        options.hotReload = true;
        return options;
      });

}

熱重載測試是在 productItem 中
切換 style 中的背景色可以熱重載
但註解 template 和 script 中某區塊，都需要重新刷新才有效果

參考：
https://vue-loader.vuejs.org/zh/guide/hot-reload.html#%E7%8A%B6%E6%80%81%E4%BF%9D%E7%95%99%E8%A7%84%E5%88%99
或在 vue.config.js 設定
https://stackoverflow.com/questions/53589853/vue-cli-3-hot-reload-suddenly-not-working-in-browsers

> 同樣測試助教的方式，也無法不刷新更新，
> 請問我該去哪裡開啟 hotReload 設定，若專案都一樣的狀態，助教可以正常熱重載，
> 我這邊不行，我懷疑是 VScode 安裝的套件或本身設定上有問題，有這個可能嗎?
> 有沒有哪些 VScode 套件或設定，是有可能造成熱重載失敗，我可以嘗試刪除或設定看看
>
> 在其他環境(vite 新 cli nuxt.js 都正常)
> 移轉到 vite

> -[x] 在 productModal 中，
> 使用全域註冊 validator 事件，嘗試將課程中自訂義 valisator 加入 cli 環境中，但會出現
> Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'deep')

我找不到任何東西造成 undfined，
噴錯的位置也跟這個輸入框驗證沒有關連，
不知道是不是 validator.js 的寫法有問題

> 關於 validator.js，有修正為助教的寫法，但有一些錯誤問題， 1.開頭的前面用 validator = 會顯示此變數不曾使用的錯誤 且需先定義 所以直接拿掉物件名稱 2.正則表達式會被 eslint 阻擋
> 嘗試：npm install --save-dev eslint-plugin-security --force
> 並在.eslintrc.js 中加入

```
plugins: [
```

    'security',

],
rules: {
// ...
'security/detect-unsafe-regex': 'error',
},

```
但使用正則表達式還是噴錯

> 如截圖中會噴 eslint 錯誤，
> 暫時先用強迫忽略的方式，讓程式碼正常運作，
> 註解中有三種寫法，不知道哪一種比較接近正確的?
>
> validator.js 有解決

## -[x]
https://github.com/snowman12320/hexschool-question/tree/gh-pages
Q：vue CLI 無法部屬上去試過手動部屬
npm run build > cd dist > git init > git add . > git commit -m "use hand build"
git push -f git@github.com:snowman12320/hexschool-question.git main:gh-pages
以及https://github.com/snowman12320/hexschool-question中 main分支，使用sh deploy.sh 自動部屬

但有時候pages，就不會更新或沒有連結....
不知道是不是vue.config.js有設定錯誤，有參考官方部屬的設定方式，
也有嘗試'./'目錄寫法 （這是成功數次的寫法）
官方信件的錯誤提示 ( github的action頁籤分頁 )
https://github.com/snowman12320/hexschool-question/actions/runs/5822682833/job/15787855841

```

Liquid Exception: Liquid syntax error (line 50): Variable '{{a}' was not properly terminated with regexp: /\}\}/ in ckeditor5-build-classic/node_modules/balanced-match/README.md 872

/usr/local/bundle/gems/liquid-4.0.4/lib/liquid/block_body.rb:136:in `raise_missing_variable_terminator': Liquid syntax error (line 50): Variable '{{a}' was not properly terminated with regexp: /\\}\\}/ (Liquid::SyntaxError)

```
看來是node_module/中的套件的.md資料夾有錯誤，已註解處理 ( github也檢查太詳細 )
> 解決流程：
部屬失敗可至設定的電子信箱中或github action中查看錯誤訊息 (標示紅色叉叉點進去可以看到)，
也可以看到部屬進度，不用一直重新整理，會有暫存一下下，才會更新 ( index.html中檔案路徑需加上儲存庫的名稱)，
vue.config.js設定
```

// vue.config.js
// vue cli 官方文件中的部屬路徑
module.exports = defineConfig({
transpileDependencies: true,
// publicPath: './'
publicPath: process.env.NODE_ENV === 'production' ? '/hexschool-question/' : '/'
});

```
進行上述手動或自動部屬即可

pages  - 404()
/hexschool-question > CLI congfig要預設，vite要加base:'...'
https://www.reddit.com/r/learnprogramming/comments/wv56eo/404_errors_when_using_custom_domain_on_github/?rdt=59694
https://www.reddit.com/r/Frontend/comments/z5w62s/failed_to_load_resource_the_server_responded_with/
https://stackoverflow.com/questions/68497926/how-can-i-fix-failing-to-load-resource-status-404-github-pages
https://www.twblogs.net/a/5ccddc52bd9eee67a77e7697



# MARKDOWN/////////////////////////////////////////////////////////////////////////////////////////////

---

js

    /* 123 */
    /**
    * 123
    * 123
    */
    // ////////////////////////////////////////////123321///////////////////////

---

https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf

- 123 - 123
  > 123

# 123

## 123

- [x] 123

```

for (let i = 0; i < 10; i++) {
setTimeout(function () {
console.log('這執行第' + i + '次');
}, 0);
}

```

| thead 1 | thrad 2 | thread 3 |
| ------- | ------- | -------- |
| td      | td      | td       |

還是要 **"勉強自己"** ，笑起來處子般通紅

[Google](https://www.google.com.tw/)

![unsplash 圖片](https://images.unsplash.com/photo-1573900941478-7cc800f708f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)
```
