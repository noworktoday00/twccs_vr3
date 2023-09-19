<template>
  <footer>
    <div class="container-fluid bg-primary py-md-8">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <h2 class="footer-logo mx-auto mx-md-0 mb-4 mt-2 mt-md-0">台灣共創技藝</h2>
          </div>
          <div class="col my-auto">
            <h2 class="text-white text-center text-md-end d-none d-md-block">
              台灣共創技藝發展協會
            </h2>
            <h5 class="text-white text-center text-md-end d-none d-md-block">
              Association of Taiwan Co-Creation Services
            </h5>
            <p class="text-white text-center text-md-end">
              | 身障創業輔導 | 職場技能發展 |
              <br class="d-block d-md-none">
              <span class="d-inline-block d-md-none">|</span> 二度就業輔導 | 就業媒合 |
            </p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-6 justify-content-between my-3">
              <div class="col">
                <router-link to="/" class="text-decoration-none text-light">首頁</router-link>
              </div>
              <div class="col">
                <router-link to="/about" class="text-decoration-none text-light">關於我們</router-link>
              </div>
              <div class="col">
                <router-link to="/news" class="text-decoration-none text-light">最新消息</router-link></div>
              <div class="col">
                <router-link to="/activities" class="text-decoration-none text-light">活動成果</router-link>
              </div>
              <div class="col">
                <router-link to="/products" class="text-decoration-none text-light">愛心商品</router-link>
              </div>
              <div class="col">
                <router-link to="/login" class="text-decoration-none text-light">登入管理</router-link>
              </div>
            </div>
            <div class="mx-auto text-light my-12">
              <p>地址: 台灣 彰化縣 員林市 建國路 233 號</p>
              <p>Email：<a class="text-decoration-none text-white" href="mailto: taiwancca@gamil.com">taiwancca@gamil.com</a>
                <!-- <p>Email: taiwancca@gamil.com</p> -->
              </p>
              <p>電話: 04 835 0115</p>
              <p>facebook：
                <a class="text-decoration-none text-white" href="https://www.facebook.com/Leatherplay10903" target="_blank">台灣共創技藝發展協會 Facebook</a>
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="map-area py-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.7920788448278!2d120.57527547599898!3d23.967791480394624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346937cff073b159%3A0x5f5266f75a6b7af7!2z5Y-w54Gj5YWx5Ym15oqA6Jed55m85bGV5Y2U5pyD!5e0!3m2!1szh-TW!2stw!4v1693288448013!5m2!1szh-TW!2stw" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4">
      <p class="text-center">本網站是由逸騰整合資訊管理顧問有限公司公益贊助及心騰數位流通庇護工場維護</p>
      <p class="text-center">Copyright © 2013 台灣共創技藝發展協會 版權所有</p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-logo {
  background-image: url('@/assets/images/twccs_footer_logo_2.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 128px;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
  .map-area {
    width: 100%;
    height: 100%;
  }
</style>