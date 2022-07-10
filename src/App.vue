<template>
  <div id="nav">
    <!--1.Vue Cli 中使用 Vue Router 開發  -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{
          name: '新增頁面'
        }">新增頁面</router-link> -->

            <!--2. CSS only 加入 Bootstrap樣式-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item" >
              <router-link class="nav-link"
                :to="{
                  name: '新增頁面',
                }">新增頁面</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-view/>
  </div>
  <!--1.Vue Cli 中使用 Vue Router 每個都會顯示內容  -->
  <!-- <router-view/> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 有空格 都有可能報錯 要寫一點就存起來看有無錯誤
</style>
