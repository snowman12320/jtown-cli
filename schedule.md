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

最後 ：
整理SCSS > 繳交時再整理 
結帳頁都改成 英文 > 最後再轉
圖片檔語意化
RWD
客製頁面改聯絡我們

簡單 ：
userCheck
結帳完 導覽購物車要清空 (看結帳後怎麼清) 
左側購物車 小計要整數(final_total > total)
付款時間 / 優惠券判斷 ， 先隱藏
合併done頁面


嚴肅的  :
story
使用文章api 前後台增刪查改
x準備畫面
讀資料API
頁數切換
後台畫面和彈窗
新增刪除修改API
搜尋API

offcanvas
本地存(參考todo list)
加入我的最愛要驗證登入 / 用offcanvas商品評價也是 
加入購物車要驗證登入

products-item / artical  
加上麵包屑 (home/shoe/kobe) 商品要依照當下商品 
加商品描述
商品列表 使用extend擴展(商品內頁也有) > 壓掉原本資料 (created>extend>mixin) ，元件壓得掉嗎
產品列表 右上排序價格低到高/上架時間新到舊/
要有主圖片和兩張其他圖片上傳
加上評論 用本地存

login
美化
登入後 按鈕改字 分登入和登出 > 統一在後台登出 (藍紅 - 選項 -  登出)

dashbord
分 商品管理 和 會員紅按鈕(  側邊基本資料 收藏清單 / 登入就到這頁) 
表格 排序(參蔬果) / RWD (datatable) / 搜尋(產品名) / 篩選(是否付款)
後台加上 基本資料 用本地儲存資料


footer
關於我們
聯絡我們 icon > 信件 哀居 fb linkdin 履歷 
徵才用彈窗 / 表單驗證 / 上傳文件

