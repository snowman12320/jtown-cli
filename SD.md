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

# 最後 ：

整理 SCSS / 拿掉非必要註解 > 繳交時再整理
結帳頁都改成 英文 > 最後再轉
圖片檔語意化
RWD
客製頁面改聯絡我們
md 中加入哪業使用的技術
git readme / gitpages https://github.com/a94s84/Hermosa
編譯後的檔案(dist)（分支中） 上傳至 Github Pages 和 沒編譯的（原本的），共兩種

# 簡單:

# 嚴肅的 :

# home

加 favicon.ico
倒數兩天領優惠券
股歌翻譯的按鈕

- 彈窗加入會員 80%領優惠卷資訊
  產品圖左右 大圖
  https://www.outdoorvoices.com/
- 我的收藏 愛心 / 結帳折扣馬 > 有會員登入的了　因沒設輸入欄
  https://a94s84.github.io/Hermosa/#/wishlist
  https://jordan-ttc-design.github.io/boaboly-art-store/#/products

# article
可放多張圖

商品列表 使用 extend 擴展(商品內頁也有) > 壓掉原本資料 (created>extend>mixin) ，元件壓得掉嗎 > props
相關商品(類別) 用 extend 改變篩選等等 （參考 程式筆 谷歌

> 參考課程的前面部分
> :is
> $route.path

# products-item
用創意風版 星星 標題 評論（金魚的對話框）
加上評論 用本地存 
用陣列物件 （帳號 評分 標題 內文）
/ 要判斷登入 / 
https://bootsnipp.com/snippets/nNg98


商品描述用 後台用編輯器

搜尋有提示框 ：列表渲染類別，並即時搜尋，點擊後送出到搜尋框中
> https://vue-multiselect.js.org/#sub-getting-started
> 怪怪的，可能要自己做一個


# login

註冊 + TODO JS > 應該不用因為 註冊也燈不進去後台
https://todoo.5xcamp.us/api-docs/index.html
後台中間 歡迎~XXXXX
註冊會員以滿的小圖 風測中位開放註冊

# dashboard

分 商品管理 和 會員紅按鈕( 側邊基本資料 收藏清單 / 登入就到這頁)
表格 排序(參蔬果) / RWD (datatable) / 搜尋(產品名) / 篩選(是否付款)
https://element.eleme.io/#/zh-CN/component/table
後台加上 ：
基本資料 用本地儲存資料 > yup驗證
https://element.eleme.io/#/zh-CN/component/upload
可搜尋訂單
https://codyhouse.co/ds/components/app/property-table

優惠券介紹(談窗立即加入會員享有優惠券>用黑人抓衣服圖 / 置頂快速倒數優惠券期限 >keep 節圖)
以上參考 設計的網址
https://demos.creative-tim.com/material-bootstrap-wizard/wizard-book-room.html?_ga=2.86000216.1189495791.1688610280-530679729.1688610280
https://bootstrap5.hexschool.com/docs/5.1/components/alerts/
https://element.eleme.io/#/zh-CN/component/statistic
https://element.eleme.io/#/zh-CN/component/datetime-picker

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
使用文章 api 前後台增刪查改
x 準備畫面 x 新增後台資料 / 新增兩個圖片>只能一張圖 / 取得資料 x 後台刪除 x 前台取得資料 x 頁數切換
搜尋 API
文章下放 FB 留言區
文章
列表大圖
不改結構 球衣圖+名字 / hover 浮出球員
https://carbon38.com/en-tw
內文
不要框 底色反差 不改結構(紫金 ) > 某一個欄位存色碼，後台設定時增加色碼欄位 ，渲染到內文背景裡
https://element.eleme.io/#/zh-CN/component/color-picker
https://codyhouse.co/ds/components/app/reading-progressbar

# footer

> 改 keep 截圖那樣 簡單
> 關於我們 （左邊
> 聯絡我們 （右邊 icon > 信件 哀居 fb linkdin 履歷
> 寄信給我功能（谷歌 api？ / 訂閱 欄位
> 徵才用彈窗 / 表單驗證 / 上傳文件

# 後台使用編輯器
