update    ;
create   ;
fixed  ;

 /////////////////////////////////////////////////////////////////////////////////////////////

繼續看影片 教到的都要用到
擴展 mixin(全/區域) /  extend / 
元件溝通 props /emit / mitt /  
路由器  param / push / path / 

 “接近實際運作的網站” 經營，以下部分可先多加強
網頁主要文案 (怎麼吸引用戶在這個網站購買)
產品文案可多加調整 (吸引用戶買該產品)
網頁可增加互動性內容 (我的最愛、類似品項、優惠券介紹．．．)

編譯後的檔案(dist) 上傳至 Github Pages
x有規定依定要使用BS完成嗎 我想用TW > bs片段有變好用 style改到scss > 寫到style專用區域

 /////////////////////////////////////////////////////////////////////////////////////////////

x 首頁的產品要渲染 改回圈或用extend / mixin (都是JS擴增) >  .slice(0, 4) > 重新抓資料
x 左側購物車 小計要整數(final_total > total)

# 最後 ：
整理SCSS / 拿掉非必要註解 > 繳交時再整理 
結帳頁都改成 英文 > 最後再轉
圖片檔語意化
RWD
客製頁面改聯絡我們


# 簡單 :


 
# 嚴肅的  :




products-item / artical  
產品列表 右上排序價格低到高/上架時間新到舊/
要有主圖片和兩張其他圖片上傳
加上tag
https://element.eleme.io/#/zh-CN/component/tag
https://codyhouse.co/ds/components/app/product
搜尋有提示框
列表渲染類別，並即時搜尋，點擊後送出到搜尋框中

加商品描述 / 後台用編輯器
商品列表 使用extend擴展(商品內頁也有) > 壓掉原本資料 (created>extend>mixin) ，元件壓得掉嗎 > props
相關商品(類別) 用extend 改變篩選等等 （參考 程式筆 谷歌

加上評論 用本地存 / 用創意風版 星星 標題 評論（金魚的對話框） / 要判斷登入 / 用陣列物件 （帳號 評分 標題 內文） 
https://bootsnipp.com/snippets/nNg98

組合包
https://codyhouse.co/ds/components/app/image-interest-points


# login

# dashbord
分 商品管理 和 會員紅按鈕(  側邊基本資料 收藏清單 / 登入就到這頁) 
表格 排序(參蔬果) / RWD (datatable) / 搜尋(產品名) / 篩選(是否付款)
https://element.eleme.io/#/zh-CN/component/table
後台加上 ：
基本資料 用本地儲存資料
https://element.eleme.io/#/zh-CN/component/upload
可搜尋訂單
https://codyhouse.co/ds/components/app/property-table

優惠券介紹(談窗立即加入會員享有優惠券>用黑人抓衣服圖  / 置頂快速倒數優惠券期限 >keep 節圖)
以上參考 設計的網址
https://demos.creative-tim.com/material-bootstrap-wizard/wizard-book-room.html?_ga=2.86000216.1189495791.1688610280-530679729.1688610280
https://bootstrap5.hexschool.com/docs/5.1/components/alerts/
https://element.eleme.io/#/zh-CN/component/statistic
https://element.eleme.io/#/zh-CN/component/datetime-picker

footer
關於我們 （左邊
聯絡我們 （右邊 icon > 信件 哀居 fb linkdin 履歷 
寄信給我功能（谷歌api？  / 訂閱 欄位
徵才用彈窗 / 表單驗證 / 上傳文件

rank
橫的改值的
https://element.eleme.io/#/zh-CN/component/rate
右邊放五星評分
https://codyhouse.co/ds/components/app/countup--prefix
進度條放總數除以個別的分數 等於 進度
https://element.eleme.io/#/zh-CN/component/progress
https://bootstrap-vue.org/docs/components/progress


後台使用編輯器：
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

story
使用文章api 前後台增刪查改
x準備畫面 x新增後台資料 / 新增兩個圖片>只能一張圖 / 取得資料 x後台刪除 x前台取得資料 x頁數切換
搜尋API


---------------------
https://www.newrocktw.com/
git readme / gitpages https://github.com/a94s84/Hermosa

設計：
首頁 
x 拿球衣當用淡入效果
x 導覽列上滑出現效果
x 臉書聊天機器人 (股歌雲端上應該有教學) / 開關不同圖 / 頭上加icon
xUSD
https://shop.lululemon.com/shop/luluGiftCards.jsp
加favicon.ico
倒數兩天領優惠券 
股歌翻譯的按鈕
+
彈窗加入會員  80%領優惠卷資訊 
產品圖左右 大圖
https://www.outdoorvoices.com/
+我的收藏 愛心 / 結帳折扣馬 >有會員登入的了　因沒設輸入欄
https://a94s84.github.io/Hermosa/#/wishlist
https://jordan-ttc-design.github.io/boaboly-art-store/#/products

產品
hover放大
上滑 最愛和購物車
內頁
有尺寸 看有沒有api的位置 > 選單可以存本地，選擇時就加入 商品名稱後面去送出
https://www.bandier.com/collections/shoes

文章
列表大圖
不改結構 球衣圖+名字 / hover 浮出球員
https://carbon38.com/en-tw
內文
不要框 底色反差 不改結構(紫金 ) > 某一個欄位存色碼，後台設定時增加色碼欄位 ，渲染到內文背景裡
https://element.eleme.io/#/zh-CN/component/color-picker
https://codyhouse.co/ds/components/app/reading-progressbar

排行
改直的
底色換掉 > 換相關的圖 並fixed 
加上商品連結  > 名稱帶到搜尋欄有問題
底下其他球員
加上aos

登入 社群登入 賴和臉書和古歌
> 嘗試串接 

footer
信箱 電話 @2023

英文表單
https://azusa5526.github.io/vue-computer-parts/#/shopping_cart/front_orderlist

運動課
https://wen0720.github.io/vueShop/#/lesson/-LYeJo0S7A7Mfv0cbQL0
https://hsuan777.github.io/VFitness/#/productsList

test123  / 編輯器 / 訂單列表
https://front-gym.web.app/#/admin/course-edit
抽獎
https://nahugd.github.io/vueshopping/#/discount/turn
篩選多個 / 評論 /登入登出
https://aureate0116.github.io/VueProjectLR/#/resource-list/Python

