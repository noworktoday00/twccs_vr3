<template>
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8"></section>
  <div class="container">
    <div class="mt-2">
      <!-- breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/news">最新消息</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">最新消息內容</li>
        </ol>
      </nav>
    </div>
    <div class="row justify-content-between align-items-center">
      <h2 class="col-12 col-md-10">{{ newsDetail.title }}</h2>
      <p class="text-md-end col-12 col-md-2 mb-0">{{ newsDetail.updateTime }}</p>
    </div>
    <div class="row mx-2 my-2">
      <div v-for="item in newsDetail.hashtags" :key="item.key" class="col-4 col-md-2">
        <p class="bg-primary text-center text-white rounded-2 py-1">
          <i class="bi bi-tag-fill"></i>
          {{ item }}
        </p>
      </div>
      <!-- <div class="col-4 col-md-2">
        <p class="bg-primary text-center text-white rounded-2 py-1">
          <i class="bi bi-tag-fill"></i>
          政府補助
        </p>
      </div>
      <div class="col-4 col-md-2">
        <p class="bg-primary text-center text-white rounded-2 py-1">
          <i class="bi bi-tag-fill"></i>
          身心障礙
        </p>
      </div>
      <div class="col-4 col-md-2">
        <p class="bg-primary text-center text-white rounded-2 py-1">
          <i class="bi bi-tag-fill"></i>
          相關活動
        </p>
      </div> -->
    </div>
    <img class="fluid-img-cover" :src="newsDetail.activityImg" alt="">
    <section>
      <div v-html="newsDetail.content"></div>
      <div class="row mb-4">
        <div v-for="item, key in newsDetail.activityImgs" :key="key" class="col-4">
        <img class="fluid-img-cover mb-2" :src="item.imgUrl" alt="">
        <!-- <img class="fluid-img-cover mb-2" src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg" alt="">
        <img class="fluid-img-cover mb-2" src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg" alt=""> -->
        </div>
      </div>
      <p class="text-end">
        <router-link to="/news" class="text-primary">
          返回最新消息
          <i class="bi bi-arrow-return-left ms-1"></i>
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      newsTitle: '',
      newsDetail: {},
    };
  },
  methods: {
    async getNews() {
      const docRef = doc(db, "activities", `${this.newsTitle}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.newsDetail = docSnap.data();
        // console.log(this.newsDetail);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  },
  created() {
    this.newsTitle = this.$route.params.newsTitle;
    this.getNews();
  }
}
</script>
