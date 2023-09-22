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
            <router-link to="/activities">活動成果</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">活動成果內容</li>
        </ol>
      </nav>
    </div>
    <div class="row justify-content-between align-items-center">
      <h2 class="col-12 col-md-8">{{ activityDetail.title }}</h2>
      <p class="text-md-end col-12 col-md-4 mb-0">更新時間：{{ activityDetail.updateTime }}</p>
    </div>
    <div class="row mx-2 my-2">
      <div v-for="item, key in activityDetail.hashtags" :key="key + 'hashtag'" class="col-4 col-md-2">
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
      </div> -->
    </div>
    <img class="fluid-img-cover" :src="activityDetail.activityImg" alt="">
    <section>
      <!-- <p class="mt-2 mb-12" style="white-space: pre-wrap">
        {{ activityDetail.content }}
      </p> -->
      <div v-html="activityDetail.content"></div>
      <div class="row mb-4">
        <div v-for="item, key in activityDetail.activityImgs" :key="key" class="col-4">
        <img class="fluid-img-cover mb-2" :src="item.imgUrl" alt="">
        <!-- <img class="fluid-img-cover mb-2" src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg" alt="">
        <img class="fluid-img-cover mb-2" src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg" alt=""> -->
        </div>
      </div>
      <p class="text-end">
        <router-link to="/activities" class="text-primary">
          返回活動成果
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
      activityTitle: '',
      activityDetail: {},
    };
  },
  methods: {
    async getActivity() {
      const docRef = doc(db, "activities", `${this.activityTitle}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.activityDetail = docSnap.data();
        // console.log(this.activityDetail);
      } else {
        // docSnap.data() will be undefined in this case
        // console.log("No such document!");
      }
    }
  },
  created() {
    this.activityTitle = this.$route.params.activityTitle;
    this.getActivity();
  }
}
</script>