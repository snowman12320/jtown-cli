<template>
  <div class="about"><h1>新增頁面</h1></div>

  <!--     // 3.巢狀路由 -->
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <router-link to="/newpage/a" class="list-group-item list-group-item-act">
            元件 A
          </router-link>
          <router-link to="/newpage/b" class="list-group-item list-group-item-act">
            元件 B
          </router-link>
                <!-- // 4.多個視圖 具名視圖 -->
           <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-act">
          命名視圖 c2a
        </router-link>
        <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-act">
          命名視圖 a2b
        </router-link>

        </div>
    </div>
    <div class="col-8">
      <!-- 因為 children 裡面的元件要顯示畫面的話
需要在父元件 newpage 設定 router-view 
設定好後，接著網址路徑連到 /newpage/a 才會顯示子元件的畫面 -->
      <router-view></router-view>
    </div>
  </div>
</template>
