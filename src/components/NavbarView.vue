<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">
          <h1 class="head-logo">台灣共創技藝發展協會</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link active fs-4" aria-current="page" to="/about">
                <img class="d-none d-md-block" src="@/assets/images/navLinkImg/aboutUs.png" alt="">
                <span class="d-block d-md-none">
                  關於我們
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/news">
                <img class="d-none d-md-block" src="@/assets/images/navLinkImg/OurNews.png" alt="">
                <span class="d-block d-md-none">
                  最新消息
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/activities">
                <img class="d-none d-md-block" src="@/assets/images/navLinkImg/ActivityRecord.png" alt="">
                <span class="d-block d-md-none">
                  活動紀錄
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/products">
                <img class="d-none d-md-block" src="@/assets/images/navLinkImg/OurProducts.png" alt="">
                <span class="d-block d-md-none">
                  愛心商品
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.head-logo {
  background-image: url('@/assets/images/twccs_logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: auto;
  height: 72px;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
</style>