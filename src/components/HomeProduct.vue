<template>
  <!-- 最新球衣 -->
  <div
    id="Product"
    class="my-5 d-flex justify-content-center align-items-center"
  >
    <h2>NEW</h2>
    <img
      src="../assets/nbaWeb/05284b30a1fda6bcdc09420b5c1e7127.svg"
      height="80"
      alt="recentlyLogo"
      class=""
    />
    <h2>PRODUCTS</h2>
  </div>
  <!-- 目前的排版會感覺上下都沒有對齊，可先避免過多的水平間距調整 -->
  <section class="row row-cols-2 row-cols-lg-4 g-4">
    <div class="col ">
      <div class="card w-100 position-relation newproduct_img">
        <div class="newproduct_cloth">
          <h6>Player</h6>
          <h4>Kobe Bryant</h4>
        </div>
        <!-- 嘗試前面加上 ../../assets/ 還是無法 -->
        <img
          height="312"
          width="312"
          class="card-img of-cover"
          src="../assets/nbaWeb/olivier-collet-H7cIqigZOBo-unsplash.jpg"
          alt="new1"
        />
      </div>
    </div>
    <div class="col ">
      <div class="card w-100 position-relation newproduct_img">
        <div class="newproduct_cloth">
          <h6>Player</h6>
          <h4>Derrick Rose</h4>
        </div>
        <img
          height="312"
          width="312"
          class="card-img of-cover newproduct_img"
          src="../assets/nbaWeb/eddy-lackmann-6MmfmBJd8PE-unsplash.jpg"
          alt="new2"
        />
      </div>
    </div>
    <div class="col ">
      <div class="card w-100 position-relation newproduct_img">
        <div class="newproduct_cloth">
          <h6>Player</h6>
          <h4>Kevin Durant</h4>
        </div>
        <img
          height="312"
          width="312"
          class="card-img of-cover newproduct_img"
          src="@/assets/nbaWeb/mingxuan_leng-EXqK7oqvKhQ-unsplash.jpg"
          alt="new3"
        />
      </div>
    </div>
    <div class="col ">
      <div class="card w-100 position-relation newproduct_img">
        <div class="newproduct_cloth">
          <h6>Player</h6>
          <h4>Stephen Curry</h4>
        </div>
        <img
          height="312"
          width="312"
          class="card-img of-cover newproduct_img"
          src="@/assets/nbaWeb/tyler-martoia-nVpT1jeu3f0-unsplash.jpg"
          alt="new4"
        />
      </div>
    </div>
  </section>

  <div
    class="text-center mt-4 d-flex flex-column flex-md-row justify-content-center"
  >
    <a
      type="button"
      href="product.html"
      class="btn btn-outline-dark rounded-pill fs-5 me-md-3 me-0 mb-3 mb-md-0"
      >MORE PRODUCT</a
    >
    <a
      type="button"
      href="customzied.html"
      class="btn btn-nbaBlue rounded-pill fs-5"
      >CUSTOMIZED JERSEY</a
    >
  </div>
</template>
