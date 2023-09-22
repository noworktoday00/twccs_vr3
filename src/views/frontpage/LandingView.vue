<template>
  <!-- fluid banner -->
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-7 p-8">
        <h2 class="text-center">台灣共創技藝發展協會</h2>
        <h5 class="text-center">Association of Taiwan Co-Creation Services</h5>
        <p class="text-center">著重於讓身心障礙者適應團體生活與作業職場技能之培育。</p>
      </div>
    </div>
  </section>
  <!-- news -->
  <section class="container my-4 my-md-8">
    <div class="row justify-content-between">
      <div class="col-6">
        <h2 class=" mb-2 mb-md-6">最新消息 & 報名</h2>
      </div>
      <div class="col-2 d-none d-md-block pt-2 text-center">
        <router-link to="/news" class="h5 text-primary text-decoration-none">查看更多</router-link>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        <div v-for="item, key in newsList" :key="key + 'news'" class="col">
          <div class="card card-shadow mb-3 p-1">
            <div class="row g-0">
              <div class="col-md-5 p-2">
                <img class="news-card-img rounded-2" :src="item.activityImg" alt="">
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title text-start">{{ item.title }}</h5>
                  <h6 class="text-start"> {{ item.activityTime
                  }} </h6>
                  <p class="card-text text-start">{{ item.intro.substr(0, 15) }}</p>
                  <p class="card-text text-end"><a href="#" @click.prevent="showNewsDetail(item.title)" class="text-decoration-none text-primary">閱讀更多...</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- fluid banner -->
  <section class="container-fluid fluid-img-bg-2 my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-4 p-8">
        <h2 class="text-center text-white">台灣共創技藝發展協會</h2>
        <h5 class="text-center text-white">Association of Taiwan Co-Creation Services</h5>
        <p class="text-center text-white">著重於讓身心障礙者適應團體生活與作業職場技能之培育。</p>
      </div>
    </div>
  </section>
  <!-- about us -->
  <section class="container mx-auto my-4 my-md-16">
    <h2 class=" mb-2 mb-md-6">關於我們</h2>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col my-8 my-md-0">
        <div class="d-block bg-cloud-blue card-shadow rotate-1 mx-auto p-2" style="width: 80%;">
          <img class="fluid-img-cover" src="@/assets/images/happy-rainbow.jpeg" alt="">
          <p class="text-center my-2">在協會中一起學習與成長</p>
        </div>
      </div>
      <div class="col my-auto">
        <h3 class="">
          我們所提供的不只有魚，也提供釣竿
        </h3>
        <p class="">
          運用共創與各類技藝的發展研究，提出讓身心障礙者能掌握上手的生活技能，協助身心障礙者快速學習一技之長。
        </p>
        <h3 class="">
          協助適應工作環境團體生活
        </h3>
        <p class="">
          關於工作團體生活，我們也提供相關輔導，協助身心障礙者能夠更有效並且迅速的融入工作環境，順利上手工作崗位。
        </p>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 my-4">
      <div class="col order-2 order-md-1 px-md-16 my-auto">
        <h3 class="">
          為身心障礙者找到新方向
        </h3>
        <p class="">
          全方位的帶領與陪伴，我們期望的是在他們成長的路上，都有我們隨時的陪伴，不只是最一開始的職能訓練，也包含後續的追蹤陪伴等等，台灣共創技藝發展協會期許自己能成為身心障礙者們在就業上，最安穩的依靠。
        </p>
      </div>
      <div class="col my-8 my-md-0 order-1 order-md-2">
        <div class="d-block bg-cloud-blue card-shadow rotate-2 mx-auto p-2" style="width: 80%;">
          <img class="fluid-img-cover" src="@/assets/images/240460735_388463379449517_3767017185314368732_n.jpeg"
            alt="">
          <p class="text-center my-2">在參訪中探索無限可能</p>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <hr>
  </div>
  <!-- activity records -->
  <section class="container my-4 my-md-8">
    <div class="row justify-content-between">
      <div class="col-6">
        <h2 class=" mb-2 mb-md-6">活動紀錄</h2>
      </div>
      <div class="col-2 d-none d-md-block pt-2 text-center">
        <router-link to="/activities" class="h5 text-primary text-decoration-none">查看更多</router-link>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div v-for="item, key in activitiesList" :key="key + 'act'" class="col">
        <div class="card card-shadow p-2">
          <img :src="item.activityImg" class="product-card-image" alt="...">
          <div class="card-body">
            <div class="row justify-content-bewteen">
              <div class="col-12 col-md-6">
                <h5 class="card-title text-start">{{ item.title }}</h5>
              </div>
              <div class="col-12 col-md-6">
                <p class="text-end">{{ item.activityTime }}</p>
              </div>
            </div>
            <p class="card-text text-end">
              <a href="#" @click.prevent="showActivityDetail(item.title)" class="text-decoration-none text-secondary">閱讀更多...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <hr>
  </div>
  <!-- products -->
  <section class="container my-4 mt-md-8 mb-md-16 ">
    <div class="row justify-content-between">
      <div class="col-6">
        <h2 class=" mb-2 mb-md-6">愛心商品</h2>
      </div>
      <div class="col-2 d-none d-md-block pt-2 text-center">
        <router-link to="/products" class="h5 text-primary text-decoration-none">查看更多</router-link>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-4">
      <div v-for="item, key in productsList" :key="key + 'product'" class="col">
        <div class="card card-shadow p-0">
          <img :src="item.productImg" class="product-card-image" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.title }}</h5>
            <p class="card-text text-center">NT＄ <span>{{ item.originPrice
            }}</span> 元 </p>
            <hr>
            <div class="d-flex justify-content-center">
              <a href="#" @click.prevent="showProductDetail(item.title)" class="btn btn-success text-light">了解商品資訊</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
export default {
  data() {
    return {
      newsList: [],
      activitiesList: [],
      productsList: [],
    }
  },
  methods: {
    async getNews() {
      const categoryQuery = query(collection(db, "activities"), where("category", "in", ["news", "work-record", "event-registration"]),limit(6));
      const querySnapshot = await getDocs(categoryQuery);
      querySnapshot.forEach((doc) => {
        this.newsList.push(doc.data());
        // console.log(this.newsList);
      });
    },
    async getActivities() {
      const timeNow = Date.now();
      // console.log(timeNow, typeof (timeNow));
      const categoryQuery = query(collection(db, "activities"), where("category", "==", "activity-results"),limit(3));
      const querySnapshot = await getDocs(categoryQuery);
      querySnapshot.forEach((doc) => {
        this.activitiesList.push(doc.data());
        // console.log(this.activitiesList);
        this.activitiesList.forEach((item, index) =>{
          // console.log(item.updateTimeStamp, index);
        })
      });
    },
    async getProducts() {
      const queryProduct = await getDocs(collection(db, "products"));
      queryProduct.forEach((doc) => {
        this.productsList.push(doc.data());
        // console.log(this.productsList);
      });
    },
    showNewsDetail(title) {
      this.$router.push(`/news/${title}`);
    },
    showActivityDetail(title) {
      this.$router.push(`/activities/${title}`);
    },
    showProductDetail(title) {
      this.$router.push(`/products/${title}`);
    }
  },
  mounted() {
    this.getNews();
    this.getActivities();
    this.getProducts();
  }
}
</script>