


productList中
下滾載入有問題

StoryModal中
1.
v-model="tempStory.content" 寫不進去資料庫，data讀出來都沒有，但有寫入v-model?{{}}
但description卻有
2.
想在description增加一個height的欄位，但好像不行轉成物件格式，是不是因為這個欄位是固定輸入字串，所以實際開發時，只能請後端改api呢？
<div class="mb-3 col-md-6">
    <label for="height" class="form-label">身高</label>
    <input type="number" class="form-control" id="height" v-model="tempStory.description.height"
    placeholder="請輸入身高" />
</div>
3.
storys中openModal
嘗試將原本的時間秒數轉成日期格式，並顯示在彈窗的日期中，但都失敗

想確認 couponModal中的watch的功用
 是先使用due_date () 將毫秒數字轉成日期時間後，const dateAndTime 再去掉時間，只留日期嗎？
可是 好像只要due_date ()後， 加上$filters.data就會轉成日期 > 所以兩個方式都可吧





x id 和 productId
要用this.id ，用product.id會錯 ，需分清楚差別 > 看API文件 / 產品本身ID和陣列中帶的ID > 當初用陣列ID去跑回圈，故之後點擊都要透過這個ID分辨或比對
> $route.params.productId帶的ID是$router.push推的 (所以並非產品本身ID)
> 沒有這個產品本身ID ，只有訂單產生時會有新的產品陣列並帶ID
取得訂單列表
"orders": [
{
"create_at": 1523539834,
"id": "-L9u2EUkQSoEmW7QzGLF",
"is_paid": true,
"message": "這是留言",
"paid_date": 1523539924,
"payment_method": "credit_card",
"products": {
    "L8nBrq8Ym4ARI1Kog4t": {
    "id": "L8nBrq8Ym4ARI1Kog4t",
    "product_id": "-L8moRfPlDZZ2e-1ritQ",
    "qty": "3"
    }
},

x 收藏的陣列要可以要多個 > 先存成陣列或物件，再轉型json字串存入，取出時要轉解析parse
x 商品切換時 路徑ID也要改 > 透過$router傳遞id，並轉換商品頁，先儲存收藏，再確認目前商品id和收藏id是否相同






https://github.com/snowman12320/hexschool-question
//////////////////////////////////////////////////////////////////////////////////////////////////////////技術筆記
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

//_ UserCheckout
// const date = new Date(this.create_at _ 1000); // 将秒转换为毫秒
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

{{}} 用于插值表达式，用于将数据绑定到模板中。除了基本的插值表达式外，Vue 还提供了一些进阶的写法，包括：
1. 过滤器（Filters）：可以在插值表达式中使用过滤器来对数据进行处理和格式化。例如： {{ message | capitalize }} ，其中 capitalize 是一个自定义的过滤器。
2. 计算属性（Computed Properties）：可以在 Vue 组件中定义计算属性，并在插值表达式中使用它们。计算属性可以根据响应式数据的变化自动更新。例如： {{ fullName }} ，其中 fullName 是一个计算属性。
3. 方法调用（Method Calls）：在插值表达式中可以调用 Vue 组件中定义的方法。例如： {{ getMessage() }} ，其中 getMessage 是一个方法。
4. 动态绑定属性（Dynamic Binding）：可以在插值表达式中动态绑定 HTML 属性。例如：`<div :class="{'active': isActive}"></div> ，其中 isActive 是一个布尔值，根据其值动态绑定 active 类。
5. 表达式（Expressions）：插值表达式支持 JavaScript 表达式的语法。可以在表达式中使用条件语句、三元表达式等。例如： {{ isTrue ? 'Yes' : 'No' }}`。

「extends 和 mixins 表达了不同的意图。
mixins 选项主要用来组合功能，而 extends 主要用来考虑继承性。」
也可以說 extends 主要擴展元件功能， mixins 則可組合不同的功能
希望有幫助到你，有問題歡迎發問，我們會在線上等你。

//! 直接跨元件溝通，使用土司元件，不經過httpMessageState，去判斷res
this.emitter.emit('push-message', {
    style: 'danger',
    title: '移除我的收藏'
});

Yup (npm install yup
是一個 JavaScript 庫，用於對 JavaScript 對象進行驗證的工具。它提供了一種簡單且可靠的方式來定義對象的驗證規則，並且可以輕鬆地集成到前端和後端的應用程序中。
主要功能包括：
1. 驗證規則定義：Yup 允許開發人員定義對象的驗證規則，並且可以對各種數據類型進行驗證，如字符串、數字、日期等。開發人員可以使用鏈式語法來定義驗證規則，例如 `Yup.string().required().min(6)` 表示字符串必填且最小長度為 6。
2. 錯誤處理：Yup 提供了一個錯誤處理機制，可以捕獲和處理驗證過程中出現的錯誤。開發人員可以通過使用 `try-catch` 塊來捕獲錯誤，並使用錯誤對象的屬性和方法來獲取有關錯誤的詳細信息。
3. 鏈式語法：Yup 的驗證規則可以使用鏈式語法進行連接，使得定義規則變得簡單和直觀。開發人員可以按照自己的需求添加多個驗證規則，並且可以通過調用不同的方法來定義這些規則，例如 `required()`、`min()`、`max()` 等。
4. 多語言支持：Yup 支持多語言，可以根據不同的語言環境顯示相應的錯誤消息。開發人員可以通過使用 `setLocale()` 方法來設置語言，並且可以自定義錯誤消息以適應特定的應用程序需求。
總結來說，Yup 是一個功能強大且易於使用的 JavaScript 驗證庫，可以幫助開發人員輕鬆地對對象進行驗證，從而提高應用程序的可靠性和安全性。
https://stackblitz.com/edit/vue-3-veevalidate-required-checkbox?file=src%2FApp.vue
https://jasonwatmore.com/post/2020/10/11/vue-3-veevalidate-required-checkbox-example

////////////////////////////////////////////////////////////////////////////////////////////////////////技術問題
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
> this.getCart();
> });

x 關於"seleted"
在 CartList 中，想讓勾選優惠券後，固定在勾選該優惠券，但無法依照判斷有優惠碼時就固定勾選它，會一直回復到無勾選狀態
> 應該要存進去 api 已存但無法

<!-- !! 雙重否定運算子：將值強制轉換為布林值。將值兩次否定後，結果就是該值的布林表示 ，:selected="Boolean(couponCode)-->
> //! 有新增優惠券時 或 重新整理判斷有無優惠券，避免沒有變數錯誤或下拉選單重整

x 關於"computed"
在 productList 使用 filtersData，為啥要用 &&，不然 cacheCategory 搜尋會有問題，但我的認知是，用｜｜才是判斷，cacheCategory 或 cacheSearch 有符合的都返回才對
，還有在我點選 cacheCategory 時，我設定清空 cacheSearch，當我要再搜尋時要點兩下才能輸入，點一下就會讓一個字輸入失敗

> 如果是 || 的話代表"或"，意思是兩個條件符合一個就可以
> 至於有問題推測主因是目前在 ProductsSide.vue 分別 watch cacheSearch 和 cacheCategory
> 只要任何一方改變就會清空另一個變數
> 因此推論這個功能一次僅能使用 cacheSearch 或是 cacheCategory 兩者其一

x 關於"vee-validate""
安裝的指令 npm i vee-validate @vee-validate/rules @vee-validate/i18n --save --force
在 CartList 和 CartForm 中 嘗試使用驗證表單
但會出現 export 'toValue' (imported as 'toValue') was not found in 'vue'錯誤 ，
Uncaught (in promise) TypeError: (0 , vue**WEBPACK_IMPORTED_MODULE_4**.toValue) is not a function （開發者工具）
，好像是 vee-validate 版本要改，不太確定
只要註解的 field 打開都會出現上述錯誤
x 關於"編譯後的終端機中"
出現以下警告資訊，是指我需要 npm run build，然後再運行伺服器嗎，修正 VEE 套件錯誤(降版本號/老師的 commit 有版本)就消失
Note that the development build is not optimized.
To create a production build, run npm run build.
> 直接輸入 npm i vee-validate@4.9.6 即可降回

x 關於 "@change"
CartOffcanvas 中 @change="updateCart(item)" 嘗試讓 input 數值變動就觸發函式，但沒有觸發函式
v-model.number="item.qty" 和:value="item.qty"都嘗試過也是無法，要使用＠click 在增加或減少按鈕上才會觸發
> 在 input 輸入完後要點旁邊的任意空白處才會觸發
> x 關於"CartList"中
> 我在 productItem 中，按直接購買，跳轉到 CartList，我的 carts 不會更新，有使用 emitter 去 getCart()和該 created(){getCart()}，但也沒用，在要套用優惠券時才會更新
> 助教這裡測試會直接更新
> 不過我在 ProductsList.vue 修改了 API 的路徑
> 變成：https://vue3-course-api.hexschool.io/api/william-api/products/?page=1
> 這樣使用者不需登入也能看到產品列表


(公司更改沒紀錄的 - 選都保留才都有)
warning: in the working copy of 'storyItem.html', LF will be replaced by CRLF the next time Git touches it
這個警告意味著在 Git 下一次操作 storyItem.html 檔案時，LF（Unix/Linux 系統的換行符號）將會被 CRLF（Windows 系統的換行符號）取代。
這通常發生在跨不同作業系統的團隊合作中，因為不同的作業系統使用不同的換行符號。Unix/Linux 使用 LF 作為換行符號，而 Windows 使用 CRLF。
當 Git 操作檔案時，它會自動調整換行符號以符合當前作業系統的預設設定。在這種情況下，Git 準備將 storyItem.html 檔案中的 LF 換行符號轉換為 CRLF 換行符號，以符合 Windows 系統的預設設定。
這個警告只是提醒你在 Git 操作 storyItem.html 檔案時，換行符號將會被調整。如果你的專案中不需要特定的換行符號格式，你可以忽略這個警告。否則，你可能需要在 Git 設定中進行相應的配置以避免換行符號的自動轉換。

(在家更改有紀錄的)
x header 中
https://v2.cn.vuejs.org/v2/guide/class-and-style.html
:style="{ 'backdrop-filter: blur(5px)': atTop }"
> 按照官網方式寫成物件  > 寫成class去使用即可

CartList 中 
1.
:rules="isCheck" 無法顯示錯誤訊息，也沒有阻擋 submit 行為
>沒有透過 :class 的方式去判斷 error-message何時該顯示
另外 Field 後面也要記得利用 v-bind 去綁定 value 
2.
:selected="Boolean(!couponCode)" ，取消優惠券後，選單會變空白？
>把 option 改用動態屬性 :value 的方式傳入 couponCode
接著把「請選擇優惠卷」的那個 option 改成一般 value 的方式並且加上 selected

storyItem 中
背景圖片引入問題：
style="background-image: url(@/assets/nbaWeb/1126209.png)"
style="background-image: url(C:\Users\william\Desktop\hexschool-question\src\assets\nbaWeb\1126209.png)"
還有之前，有使用lightbox，彈窗的圖片會使用的， 或在href屬性中，使用圖片路徑就無法顯示
嘗試兩種寫法：
href="C:\Users\william\Desktop\hexschool-question\src\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg"
href="@\assets\nbaWeb\olivier-collet-H7cIqigZOBo-unsplash.jpg"
>:style="{'background-image': `url(${require('@/assets/nbaWeb/1126209.png')})`}"