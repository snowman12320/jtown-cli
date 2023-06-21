<template>
  <!-- 上面row響應 下面col也要響應~~~ -->
  <aside class="col-lg-2 lh-lg aside">
    <h3 class="text-center text-lg-start">Player</h3>
    <!--  -->
    <div class="my-3">
      <input type="text"
        class="form-control rounded-0" name="" id="" aria-describedby="helpId" placeholder="🍳 search player">
    </div>
    <!-- BS內建margin 很多推不到位 可能要設定0 用開發者看會有淡黃區域 -->
    <ul class="list-unstyled d-flex flex-lg-column justify-content-center my-3">
      <li>
        <a class="text-decoration-none d-block px-3 px-lg-0 py-lg-1" href="#"
          ><span class="aside_span"> － </span> All</a
        >
      </li>
      <li v-for="(item, index) in 5" :key="index">
        <a class="text-decoration-none d-block px-3 px-lg-0 py-lg-1" href="#"
          ><span class="aside_span" > － </span> Kobe Bryant</a
        >
      </li>
    </ul>
  </aside>
</template>
