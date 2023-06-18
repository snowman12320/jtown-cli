<template>
  <div class="container-xxl">
    <!-- <i class="fa-solid fa-heart fa-flip display-1 mt-20"></i> -->
    <div class="row row-cols-md-2 g-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide col-md-6"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1500x1200/?basketball"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x1200/?coat"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1500x1200/?coat"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--  -->
      <div
        class="col-md-6 d-flex flex-column justify-content-around text-center"
      >
        <h1 class="mb-5">球衣名</h1>
        <h2 class="text-center">$15,555</h2>
        <div
          class="justify-content-center d-flex align-items-center my-3 gap-5"
        >
          <div class="fs-3 d-flex justify-content-center gap-3">
            <span class="">-</span><span class="">0</span
            ><span class="">+</span>
          </div>
          <i class="fa-solid fa-heart"></i>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-center gap-md-5 mt-5 gap-1"
        >
          <button class="btn-primary btn">加入購物車</button>

          <router-link to="/cart-view/cart-list"><button class="btn btn-danger">立即購買</button></router-link>
        </div>
      </div>
    </div>
    <!--  -->
    <h3 class="mt-7">相關商品</h3>
    <ProductsList></ProductsList>
  </div>
</template>
<script>
import ProductsList from '@/components/ProductsList.vue';
export default {
  components: {
    ProductsList
  }
};
</script>
