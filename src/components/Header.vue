<template>
  <navbar class="navbar navbar-expand-md bg-white py-4">
    <div class="container-fluid d-flex justify-content-between">
      <div class="d-flex">
        <a class="navbar-brand" href="index.html">JerseyTown</a>
        <h1 class="fs-3 fw-bold mb-0 ms-n2 nav_h1">JTown</h1>
      </div>
      <!-- 漢堡 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--  -->
      <div
        class="collapse navbar-collapse mb-3 mb-md-0"
        id="navbarSupportedContent"
      >
        <!-- margin-start 自動推到底 好用排版方式 -->
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <!-- 關於active切換時有加上 但接著就會重新整理又不見 方法：- 1. 直接寫在 HTML 上（建議 -->
            <router-link to="/" class="nav-link px-4 py-3 active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4 py-3" href="story.html">Story</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4 py-3" href="product.html">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-4 py-3" href="rank.html">Rank</a>
          </li>
          <li class="ms-1">
            <button class="btn btn-nbaRed rounded-pill mt-lg-2 nav_pill">
              <router-link
                to="/login"
                class="text-decoration-none fs-6 px-3 rounded-pill text-black"
              >
                Login/Sign up
              </router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </navbar>
  <router-view />
</template>
