<template>
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-5 p-8">
        <h2 class="text-center">關於我們</h2>
        <h5 class="text-center">About Us</h5>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="mt-2">
      <!-- breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">關於我們</li>
        </ol>
      </nav>
    </div>
    <section class="container">
      <h3 class="text-center mb-6">成立起源</h3>
      <p class="text-center">
        2020 年，台灣共創技藝發展協會-耍皮器社區日間小型作業所創立，開始了協助身心障礙者進入就業輔導的進程。
      </p>
      <p class="">
        對於有就業意願但其工作能力不足且經過職業輔導評量不符合進入庇護工場之身心障礙者，台灣共創技藝發展協會提供作業活動，加強其職業能力，並輔以長期就業支持，促進身心障礙者態度培養及參與社會活動，提供身心障礙者在社區中接受訓練、學習技能、從事參與生產工作，繼而促進其社會參與能力，增進生活能力及品質，培養有獨立生活能力。
      </p>
    </section>
    <hr>
    <section class="container mb-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <h3 class="text-center text-md-start mb-6">目標宗旨</h3>
          <h5 class="">
            我們所提供的不只有魚，也提供釣竿
          </h5>
          <p class="">
            運用共創與各類技藝的發展研究，提出讓身心障礙者能掌握上手的生活技能，協助身心障礙者快速學習一技之長。
          </p>
          <h5 class="">
            協助適應工作環境團體生活
          </h5>
          <p class="">
            關於工作團體生活，我們也提供相關輔導，協助身心障礙者能夠更有效並且迅速的融入工作環境，順利上手工作崗位。
          </p>
          <h5 class="">
            為身心障礙者找到新方向
          </h5>
          <p class="">
            全方位的帶領與陪伴，我們期望的是在他們成長的路上，都有我們隨時的陪伴，不只是最一開始的職能訓練，也包含後續的追蹤陪伴等等，台灣共創技藝發展協會期許自己能成為身心障礙者們在就業上，最安穩的依靠。
          </p>
        </div>
        <div class="col mt-md-4">
          <div class="d-block bg-cloud-blue card-shadow rotate-2 mx-auto p-2" style="width: 80%;">
            <img class="fluid-img-cover" src="@/assets/images/happy-rainbow.jpeg" alt="">
            <p class="text-center my-2">在參訪中探索無限可能</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container mb-8">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <div class="d-block bg-cloud-blue card-shadow rotate-1 mx-auto p-2" style="width: 80%;">
            <img class="fluid-img-cover" src="@/assets/images/240460735_388463379449517_3767017185314368732_n.jpeg" alt="">
            <p class="text-center my-2">在參訪中探索無限可能</p>
          </div>
        </div>
        <div class="col">
          <h3 class="text-center text-md-start mb-6">從事活動</h3>
          <h5>作業活動</h5>
          <p>相關代工作業、手工藝創意產品</p>
          <h5>休閒文康</h5>
          <p>體適能運動、藝文休閒、音樂律動等</p>
          <h5>課程訓練</h5>
          <p>自我倡導、道德倫理、自立訓練及衛教與安全宣導等</p>
          <h5>社區參與</h5>
          <p>規劃社區適應活動、社區服務與參與社區活動</p>
        </div>
      </div>
    </section>
  </div>
</template>