update productsSide / cacheSearch() + cacheCategory() /  ; 
create  ;
fixed  ; 

關於 元件傳遞資料的使用
"HomeView"用props 和 "productsView"用emit去改變，isLoading和isLogin的布林值，開發上有建議用哪種嗎
看起來props+mixin 程式碼比較簡潔好懂

另外還有嘗試，
讓"Header"中，判斷是否登入的載入動畫出現一次就好，
這樣其他頁面就不用重複判斷是否登入，但發現只要引入header元件的頁面，就還是都會執行一次created()


 /////////////////////////////////////////////////////////////////////////////////////////////

//* uniqueCategories
// this.uniqueCategories = this.products
//   .filter((product, index, self) => self.findIndex(p => p.category === product.category) === index)
//   .map(product => product.category);
// filter方法用于遍历原始数组的每个元素，并根据回调函数的返回值来决定是否保留该元素。
// findIndex方法用于在数组中查找满足条件的元素，并返回其索引。如果没有找到满足条件的元素，则返回-1。
// 在回调函数中，使用findIndex方法来检查当前元素的"category"值是否在数组中的其他元素中已经存在。
// 使用self来引用原始数组，以便在回调函数中进行比较和索引查找。
// 如果findIndex方法返回的索引与当前元素在数组中的索引相等，则表示当前元素是第一个具有该"category"值的元素，我们将其保留在结果数组中。
// 最后，我们使用map方法来提取结果数组中每个对象的"category"值，生成一个最终的唯一"category"值的数组。