update    ;
create  isCheck ;
fixed  ;

CartList中 :rules="isCheck" 無法顯示錯誤訊息，也沒有阻擋submit行為

首頁加入視差 用WOW 或AOS 
首頁的產品要渲染 改回圈或用extend >  .slice(0, 4)


結帳頁都改成 英文 / 結帳完 導覽購物車要清空
要做付款時間 訂單成立時間
要做結帳確認頁面
結帳完 商品總計經過計算會 變成十倍 但原始資料無誤 推測經過計算會錯誤 可能要先算過再塞回去
選擇超商（綠界物流）
付款彈窗或confirm

確認頁面 可能要放 cartview下 才能跨元件更新購物車
使用文章api 前後台增刪查改



HomeBanner 的lightbox使用的href的圖片路徑就無法顯示，
嘗試兩種寫法：
href="C:\Users\william\Desktop\hexschool-question\src\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg"
href="@\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg" 



//////////////////////////////////////////////////技術筆記
//\* uniqueCategories
// this.uniqueCategories = this.products
// .filter((product, index, self) => self.findIndex(p => p.category === product.category) === index)
// .map(product => product.category);
// filter 方法用于遍历原始数组的每个元素，并根据回调函数的返回值来决定是否保留该元素。
// findIndex 方法用于在数组中查找满足条件的元素，并返回其索引。如果没有找到满足条件的元素，则返回-1。
// 在回调函数中，使用 findIndex 方法来检查当前元素的"category"值是否在数组中的其他元素中已经存在。
// 使用 self 来引用原始数组，以便在回调函数中进行比较和索引查找。
// 如果 findIndex 方法返回的索引与当前元素在数组中的索引相等，则表示当前元素是第一个具有该"category"值的元素，我们将其保留在结果数组中。
// 最后，我们使用 map 方法来提取结果数组中每个对象的"category"值，生成一个最终的唯一"category"值的数组。


//* UserCheckout
// const date = new Date(this.create_at * 1000); // 将秒转换为毫秒
// const year = date.getFullYear();
// const month = date.getMonth() + 1; // 月份从0开始，所以要加1
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// this.create_at = year + '-' + month.toString().padStart(2, '0') + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds; 
> 怪怪的日期
//*
// 将日期时间对象转为字符串 > 錯誤
// this.paid_date = new Date(this.order.paid_date * 1000).toISOString().slice(0, 19).replace('T', ' ');

///////////////////////////////////////////技術問題
x 關於 元件傳遞資料的使用
"HomeView"用 props 和 "productsView"用 emit 去改變，isLoading 和 isLogin 的布林值，開發上有建議用哪種嗎
看起來 props+mixin(每個 view) 程式碼比較簡潔好懂 > emit 要用兩次傳兩次 isLoading

x 另外還有嘗試，
讓"Header"中，判斷是否登入的載入動畫出現一次就好，
這樣其他頁面就不用重複判斷是否登入，但發現只要引入 header 元件的頁面，就還是都會執行一次 created()
xCartOffcanvas 的 mounted ()，會偶爾失敗傳入加總數字零，有時會傳入正確值，但 getCart ()產生的 carts 已經在 created 執行才對，getCart ()也有嘗試去加總也是失敗

x 關於 "emitter"
不用（），名字好像也無所謂，因都會執行某個函式
請問使用 emitter
this.emitter.emit('customEvent_getCart', this.getCart);
那在另一個元件有辦法跨元件觸發函式嗎，試過幾次沒辦法，不知道哪裡寫錯
> this.emitter.on('customEvent_getCart', () => {
this.getCart();
});

x 關於"seleted"
在 CartList 中，想讓勾選優惠券後，固定在勾選該優惠券，但無法依照判斷有優惠碼時就固定勾選它，會一直回復到無勾選狀態
> 應該要存進去 api 已存但無法
<!-- !! 雙重否定運算子：將值強制轉換為布林值。將值兩次否定後，結果就是該值的布林表示 ，:selected="Boolean(couponCode)-->
> //! 有新增優惠券時 或 重新整理判斷有無優惠券，避免沒有變數錯誤或下拉選單重整


x 關於"computed"
在 productList 使用 filtersData，為啥要用 &&，不然 cacheCategory 搜尋會有問題，但我的認知是，用｜｜才是判斷，cacheCategory 或 cacheSearch 有符合的都返回才對
，還有在我點選 cacheCategory 時，我設定清空 cacheSearch，當我要再搜尋時要點兩下才能輸入，點一下就會讓一個字輸入失敗
>如果是 || 的話代表"或"，意思是兩個條件符合一個就可以
至於有問題推測主因是目前在 ProductsSide.vue 分別 watch cacheSearch 和 cacheCategory
只要任何一方改變就會清空另一個變數
因此推論這個功能一次僅能使用 cacheSearch 或是 cacheCategory 兩者其一

x 關於"vee-validate""
安裝的指令 npm i vee-validate @vee-validate/rules @vee-validate/i18n --save --force
在 CartList 和 CartForm 中 嘗試使用驗證表單
但會出現 export 'toValue' (imported as 'toValue') was not found in 'vue'錯誤 ，
Uncaught (in promise) TypeError: (0 , vue**WEBPACK_IMPORTED_MODULE_4**.toValue) is not a function （開發者工具）
，好像是 vee-validate 版本要改，不太確定
只要註解的 field 打開都會出現上述錯誤
x 關於"編譯後的終端機中"
出現以下警告資訊，是指我需要 npm run build，然後再運行伺服器嗎，修正VEE套件錯誤(降版本號/老師的commit有版本)就消失
  Note that the development build is not optimized.
  To create a production build, run npm run build.
  >直接輸入 npm i vee-validate@4.9.6 即可降回

x 關於 "@change"
CartOffcanvas 中 @change="updateCart(item)" 嘗試讓 input 數值變動就觸發函式，但沒有觸發函式
v-model.number="item.qty" 和:value="item.qty"都嘗試過也是無法，要使用＠click 在增加或減少按鈕上才會觸發
 > 在 input 輸入完後要點旁邊的任意空白處才會觸發
x 關於"CartList"中
我在 productItem 中，按直接購買，跳轉到 CartList，我的 carts 不會更新，有使用 emitter 去 getCart()和該 created(){getCart()}，但也沒用，在要套用優惠券時才會更新
> 助教這裡測試會直接更新
不過我在 ProductsList.vue 修改了 API 的路徑
變成：https://vue3-course-api.hexschool.io/api/william-api/products/?page=1
這樣使用者不需登入也能看到產品列表

「extends 和 mixins 表达了不同的意图。mixins 选项主要用来组合功能，而 extends 主要用来考虑继承性。」
也可以說 extends 主要擴展元件功能， mixins 則可組合不同的功能
希望有幫助到你，有問題歡迎發問，我們會在線上等你。



