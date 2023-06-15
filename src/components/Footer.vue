<!-- eslint-disable vue/no-parsing-error -->
    <template>
        <!-- 小圖示 -->
          <a href="customzied.html">
            <!-- <img
              onmouseover="hover_custom(this);"
              onmouseout="unhover_custom(this);"
              src="./nbaWeb/silhouette-basket-05.svg"
              alt=""
              height="150"
              width="150"
              class="custom_img position-fixed bottom-0 end-0 me-5"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Let's customized jersey !"
            /> -->
          </a>
        <!-- 徵才 -->
        <section class="container-lg border-nbaBlue border-top border-3 talent">
          <div
            class="row row-cols-1 row-cols-lg-2 d-flex flex-column flex-md-row justify-content-center align-items-center mb-5 mt-5 gap-0"
          >
            <div class="col d-flex justify-content-center mb-3 mb-lg-0">
              <!-- ms-auto 可推動本身寬度 -->
              <!-- 不用設定小於md 要設定0 就不會在RWD跑版 ~~~~-->
              <img
                class="ms-lg-auto"
                height="130"
                src="nbaWeb/1506074059.svg"
                alt=""
              />
              <div class="">
                <h3>JOIN TEAM</h3>
                <p>jersey fundraising</p>
                <a
                  href="customzied.html"
                  class="btn btn-outline-dark rounded-pill fs-5"
                  >SEND MESSAGE</a
                >
              </div>
            </div>
            <div class="col d-flex justify-content-center px-0">
              <!-- <img
                class=""
                height="130"
                src="nbaWeb/05284b30a1fda6bcdc09420b5c1e7127.svg"
                alt=""
              /> -->
              <div class="me-lg-auto">
                <h3>JOIN TEAM</h3>
                <p>customized jersey</p>
                <a
                  href="customzied.html"
                  class="btn btn-outline-dark rounded-pill fs-5"
                  >SEND MESSAGE</a
                >
              </div>
            </div>
          </div>
        </section>
        <footer class="footer bg-dark text-center text-white py-2 pt-4">
          <p>Copyright © 2022 JerseyTown.All rights reserved.</p>
        </footer>
    </template>
