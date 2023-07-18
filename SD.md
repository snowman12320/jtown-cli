update ;
create ;
fixed ;

/////////////////////////////////////////////////////////////////////////////////////////////

繼續看影片 教到的都要用到
擴展 mixin 夾(區域)methods 夾(全域) / extend /
元件溝通 props /emit / mitt /  
路由器 param / push / path /

“接近實際運作的網站” 經營，以下部分可先多加強
產品文案可多加調整 (吸引用戶買該產品)
網頁可增加互動性內容 (我的最愛、類似品項、優惠券介紹．．．)

# 有關程式功能優先!!! 版型非必要

# 請資深 vue 工程師優化程式碼

/////////////////////////////////////////////////////////////////////////////////////////////
好看的鞋
https://www.bandier.com/collections/shoes

https://tailwindcomponents.com/component/application-header-with-clip-path
https://www.costco.com.tw/Costco-Grocery/Costco-Grocery-Kitchen-Dining/c/GCY601
https://codyhouse.co/ds/components/app/image-interest-points
https://shop.lululemon.com/shop/luluGiftCards.jsp
https://www.newrocktw.com/
英文表單
https://azusa5526.github.io/vue-computer-parts/#/shopping_cart/front_orderlist
運動課
https://wen0720.github.io/vueShop/#/lesson/-LYeJo0S7A7Mfv0cbQL0
https://hsuan777.github.io/VFitness/#/productsList
test123 / 編輯器 / 訂單列表
https://front-gym.web.app/#/admin/course-edit
抽獎
https://nahugd.github.io/vueshopping/#/discount/turn
篩選多個 / 評論 /登入登出
https://aureate0116.github.io/VueProjectLR/#/resource-list/Python
產品圖左右 大圖 / 視差 / 彈窗 
https://www.outdoorvoices.com/
我的收藏 愛心 / 結帳折扣馬 > 有會員登入的了　因沒設輸入欄
https://a94s84.github.io/Hermosa/#/wishlist
https://jordan-ttc-design.github.io/boaboly-art-store/#/products
文章內頁輪播 vuetify
下拉輸入  訂單篩選 /  搜尋編號
https://vuetifyjs.com/zh-Hans/components/autocompletes/
下拉搜尋 最下面的
https://vuetifyjs.com/zh-Hans/components/autocompletes/
查看下面的其他 的驗證很簡單
https://vuetifyjs.com/zh-Hans/components/forms/
隐私政策 / 本地接收選擇 (需了解拒絕的差異)
Creating a Privacy Policy notification is a great use case for the v-sheet component.
We use cookies and other technologies to provide you with a better user experience.
Agree
Learn more
全域搜尋 / 要錢
https://www.algolia.com/developers/web-instantsearch-vue/
評論對話
https://bootsnipp.com/snippets/nNg98
評分 懸停小數點和單純顯示
https://vuetifyjs.com/zh-Hans/components/ratings/

# 最後 ：

整理 SCSS / 拿掉非必要註解 > 繳交時再整理
結帳頁都改成 英文 > 最後再轉
圖片檔語意化
RWD
客製頁面改聯絡我們
md 中加入哪業使用的技術
git readme / gitpages https://github.com/a94s84/Hermosa
編譯後的檔案(dist)（分支中） 上傳至 Github Pages 和 沒編譯的（原本的），共兩種



# home





# article
商品列表 使用 extend 擴展(商品內頁也有) > 壓掉原本資料 (created>extend>mixin) ，元件壓得掉嗎 > props
相關商品(類別) 用 extend 改變篩選等等 （參考 程式筆 谷歌

晚上看
> 參考課程的前面部分
> :is
> $route.path


# products-item


商品內頁 放大鏡 

## coupon
加時間區間 超過開始就倒數 超過結束就顯示結束樣式
優惠倦加上日期
https://element.eleme.io/#/zh-CN/component/datetime-picker
有小數點倒數 和 結束樣式
https://element.eleme.io/#/zh-CN/component/statistic
# login


> 帶預設資料，搭配開啟修改的元件
登入就到這頁
會員資料
https://vuetifyjs.com/zh-Hans/components/autocompletes/



# dashboard
未付款無法更新

表格 排序(參蔬果) / RWD (datatable) / x搜尋(產品名) / x篩選(是否付款)
https://element.eleme.io/#/zh-CN/component/table

可搜尋訂單
https://codyhouse.co/ds/components/app/property-table

控制台抽屜
https://vuetifyjs.com/zh-Hans/components/navigation-drawers/




# rank

橫的改值的
https://element.eleme.io/#/zh-CN/component/rate
右邊放五星評分
https://codyhouse.co/ds/components/app/countup--prefix
進度條放總數除以個別的分數 等於 進度
https://element.eleme.io/#/zh-CN/component/progress
https://bootstrap-vue.org/docs/components/progress
https://ithelp.ithome.com.tw/articles/10272921
底色換掉 > 換相關的圖 並 fixed
加上商品連結 > 名稱帶到搜尋欄有問題
底下其他球員
加上 aos

# story
要連到該球員搜尋頁

使用文章 api 前後台增刪查改：
x 準備畫面 x 新增後台資料 / 新增兩個圖片>只能一張圖 / 取得資料 x 後台刪除 x 前台取得資料 x 頁數切換
搜尋 API

不改結構 球衣圖+名字 / hover 浮出球員 > hover球衣內文大圖也是球衣
https://carbon38.com/en-tw

可放多張圖
照片墙 / 上傳列表 > 拖拉順序
https://element.eleme.io/#/zh-CN/component/upload
內文不要框 底色反差 不改結構(紫金 ) > 某一個欄位存色碼，後台設定時增加色碼欄位 ，渲染到內文背景裡
https://element.eleme.io/#/zh-CN/component/color-picker
https://codyhouse.co/ds/components/app/reading-progressbar

# footer

> 改 keep 截圖那樣 簡單
x > 關於我們 （左邊
x > 聯絡我們 （右邊 icon > 信件 哀居 fb linkdin 履歷 
x > 寄信給我功能（谷歌 api？ / 訂閱 欄位
x > 徵才用彈窗 / 表單驗證 / 上傳文件

https://vuetifyjs.com/zh-Hans/components/footers/

# 錯誤頁
https://stackblitz.com/edit/quasarframework-webpack-oyx9lk?file=src%2Fpages%2FErrorNotFound.vue











