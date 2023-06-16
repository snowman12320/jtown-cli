<template>
  <!-- 銷售排行 -->
  <div
    id="Ranking"
    class="d-flex justify-content-center align-items-center mt-5"
  >
    <h2>TOP</h2>
    <img
      src="../assets/nbaWeb/Lovepik_com-401319703-basketball.png"
      height="80"
      alt="sellLogo"
      class=""
    />
    <h2>SELLING</h2>
  </div>
  <p class="fs-6 text-dark text-center mb-5">
    which are the top-selling NBA jerseys?
  </p>
  <!-- 目前的排版會感覺上下都沒有對齊，可先避免過多的水平間距調整 -->
  <section class="row row-cols-1 row-cols-lg-3 g-4 rank_card mt-5">
    <div class="col mb-5 mb-lg-0">
      <div class="card" style="height: 424px">
        <img
          src="@/assets/nbaWeb/PNG-images-NBA-Players-41png.png"
          height="300"
          class="card-img-top animated_down of-none op-top position-absolute mt-n5 position-relative"
          alt="..."
        />
        <div class="img_back img_back_kobe"></div>
        <div class="card-body">
          <h3 class="card-title fw-bold fs-6">kobe bryant</h3>
          <p class="card-text fs-6">
            Bryant won five NBA championships, was an 18-time All-Star, a
            15-time member of the All-NBA Team, a 12-time member of the
            All-Defensive Team, the 2008 NBA Most Valuable Player (MVP), and a
            two-time NBA Finals MVP. Bryant also led the NBA in scoring twice,
            and ranks fourth in league all-time regular season and postseason
            scoring. He was posthumously voted into the Naismith Memorial
            Basketball Hall of Fame in 2020 and named to the NBA 75th
            Anniversary Team in 2021.
          </p>
          <a
            href="storyItem.html"
            class="text-decoration-none stretched-link text-dark rank_a d-flex justify-content-center"
            >MORE</a
          >
        </div>
      </div>
    </div>
    <div class="col mb-5 mb-lg-0">
      <div class="card position-relative" style="height: 424px">
        <img
          src="@/assets/nbaWeb/PNG-images-NBA-Players-28png.png"
          height="300"
          class="card-img-top animated_down of-none op-top position-absolute mt-n5"
          alt="..."
        />
        <div class="img_back img_back_lebron"></div>
        <div class="card-body">
          <h3 class="card-title fw-bold fs-6">LeBron James</h3>
          <p class="card-text fs-6">
            James has won four NBA championships, four NBA MVP awards, four NBA
            Finals MVP awards, three All-Star MVP awards, and two Olympic gold
            medals. James has scored the most points in the playoffs, the second
            most career points, and has the seventh most career assists.
          </p>
          <a
            href="storyItem.html"
            class="text-decoration-none stretched-link text-dark rank_a d-flex justify-content-center"
            >MORE</a
          >
        </div>
      </div>
    </div>
    <div class="col mb-3 mb-lg-0">
      <div class="card position-relative" style="height: 424px">
        <img
          src="@/assets/nbaWeb/PNG-images-NBA-Players-1png.png"
          height="300"
          class="card-img-top animated_down of-none op-top position-absolute mt-n5"
          alt="..."
        />
        <div class="img_back img_back_curry"></div>
        <div class="card-body">
          <h3 class="card-title fw-bold fs-6">Stephen Curry</h3>
          <p class="card-text fs-6">
            Curry won his first league MVP award and led the Warriors to their
            first championship since 1975. The following season, he became the
            first player to be elected MVP by a unanimous vote and lead the
            league in scoring while shooting above 50–40–90. That same year, the
            Warriors broke the record for the most wins in an NBA season en
            route to reaching the 2016 NBA Finals, which they lost to the
            Cleveland Cavaliers in seven games.
          </p>
          <a
            href="storyItem.html"
            class="text-decoration-none stretched-link text-dark rank_a d-flex justify-content-center"
            >MORE</a
          >
        </div>
      </div>
    </div>
  </section>
  <div class="text-center">
    <a
      type="button"
      href="story.html"
      class="btn btn-outline-dark rounded-pill my-5 fs-5 sellbtn_Rwd"
      >MORE LISTS</a
    >
  </div>
</template>
