<template>
  <Loading :active="isLoading"></Loading>
  <div id="Ranking"
    class="d-flex justify-content-center align-items-center text-dark border-3 border-nbaBlue border-top pt-5"
    style="margin-top: 104px !important">
    <h2>PLAYER</h2>
    <img src="@/assets/nbaWeb/Lovepik_com-401319703-basketball.png" height="80" alt="storylogo" class="" />
    <h2>STORY</h2>
  </div>
  <div class="container-xxl">
    <p class="fs-6 text-pickBlack text-center mb-5">
      how to become the NBA all star player?
    </p>
    <!-- 球星個人列表 -->
    <!-- 不需要所有元素都在 container 內 --><!-- <div class="container-xxl"> -->
    <!-- row可用g-5 左右推版(column會上下推) / card內用會推上下  / gutter外 gap內-->
    <main class="row row-cols-1 row-cols-xl-2 mx-2 g-5">
      <!-- 必填 -->
      <article class="col col-xl-8 mx-auto mb-xl-5">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="fs-4 lh-xl fw-bold">Kobe bryant - BLACK MAMBA</h2>
            <!-- gap => css grid-gap -->
            <div class="d-md-flex list-unstyled gap-7 fs-6 lh-lg mb-4">
              <ul class="list-unstyled">
                <li>Born｜August 23, 1978</li>
                <li>Listed height｜6 ft 6 in (1.98 m)</li>
                <li>Listed weight｜212 lb (96 kg)</li>
              </ul>
              <ul class="list-unstyled">
                <li>NBA draft｜1996 / Round: 1 / Pick: 13th</li>
                <li>Playing career｜ 1996–2016</li>
                <li>Number｜ 8, 24</li>
              </ul>
            </div>
            <p class="lh-lg fs-6 mb-5 fw-light maxpad_p">
              The all-time leading scorer in Lakers history, Bryant was the
              first guard in NBA history to play 20 seasons. His 18 All-Star
              designations are the second most all time, and he has the most
              consecutive appearances as a starter. Bryant's four NBA All-Star
              Game MVP Awards are tied with Bob Pettit for the most in NBA
              history. He gave himself the nickname "Black Mamba" in the
              mid-2000s, and the epithet became widely adopted by the general
              public. <br />
              <br />
              He won gold medals on the 2008 and 2012 U.S. Olympic teams. In
              2018, he won the Academy Award for Best Animated Short Film for
              the film Dear Basketball (2017).
            </p>
            <!-- 避免超出卡片 不需用寬高調整 ~~~~~ -->
            <img class="img-fluid" src="@/assets/nbaWeb/dean-bennett-nFjLHE4vmn4-unsplash.jpg" alt="" />
          </div>
        </div>
      </article>
      <aside class="col col-xl-4 small_card" style="z-index: 5">
        <div class="card mb-5 text-center text-xl-start">
          <img data-num="001" src="@/assets/nbaWeb/PNG-images-NBA-Players-36png.png" height="424"
            class="of-cover op-top position-absolute pt-3 imgRwd" alt="..." />
          <img src="@/assets/nbaWeb/1126209.png" class="allstaritem_back img-fluid op-center of-cover" alt="">
          <!-- <div class="allstaritem_back img-fluid bgp-center bgs-cover"
            style="background-image: url(~@/assets/nbaWeb/1126209.png)"></div> -->
          <div class="card-body fs-6">
            <ul class="list-unstyled fsRwd">
              <li class="text-muted">5× NBA champion</li>
              <li class="mb-3">2000–2002, 2009, 2010</li>
              <li class="text-muted">2× NBA Finals MVP</li>
              <li class="mb-3">2009, 2010</li>
              <li class="text-muted">NBA Most Valuable Player</li>
              <li class="mb-3">2008</li>
            </ul>
          </div>
          <a type="button" href="product.html"
            class="btn btn-nbaBlue rounded-pill fs-4 btnRwd mx-auto mb-4 stretched-link">Visit Merchandise</a>
        </div>
      </aside>
    </main>

  </div>
</template>
<script>
import loginMixin from '../mixins/loginMixin';
import emitter from '@/methods/emitter';

export default {
  mixins: [loginMixin],
  components: {
  },
  provide () {
    return {
      emitter
    };
  }
};
</script>
