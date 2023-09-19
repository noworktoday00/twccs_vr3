<template>
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-5 p-8">
        <h2 class="text-center">最新消息</h2>
        <h5 class="text-center">News</h5>
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
          <li class="breadcrumb-item active" aria-current="page">最新消息</li>
        </ol>
      </nav>
    </div>
    <h2>最新消息</h2>
    <div class="row">
      <div class="col-12 col-md-9">
        <div v-for="item in activitiesList" :key="item.title" class="row row-cols-1">
          <div class="col mb-4">
            <div class="card card-shadow mb-3 p-1">
              <div class="row g-0">
                <div class="col-md-4 p-1">
                  <img class="news-card-img rounded-1" :src="item.activityImg"
                    alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6>{{ item.updateTime.substr(0, 10) }}</h6>
                    <p class="card-text">{{ item.intro.substr(0, 15) }}...</p>
                    <p class="card-text text-end">
                      <a href="#" @click.prevent="showDetail(item.title)" class="text-primary">
                        閱讀詳細資訊...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分頁功能 -->
        <!-- <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link text-secondary" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link text-info" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-info" href="#">2</a></li>
            <li class="page-item"><a class="page-link text-info" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link text-secondary" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> -->
      </div>
      <div class="col-3 d-none d-md-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getNews()" class="text-dark text-decoration-none">全部消息</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getCategory('news')" class="text-dark text-decoration-none">最新消息</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getCategory('work-record')" class="text-dark text-decoration-none">小作點滴</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      activitiesList: [],
    }
  },
  methods: {
    async getNews() {
      this.activitiesList = [];
      const categoryQuery = query(collection(db, "activities"), where("category", "not-in", ["workrecord" , "visitingActive"]));
      const querySnapshot = await getDocs(categoryQuery);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        this.activitiesList.push(doc.data());
        // console.log(this.activitiesList);
        this.activitiesList.forEach((item, index)=>{
          const timeNow = Date.now();
          const articlePreTime = item.updateTimeStamp;
          // console.log(articlePreTime > timeNow, index);
          
        })
      });
    },
    async getCategory(categoryName) {
      this.activitiesList = [];
      // console.log(categoryName);
      const categoryQuery = query(collection(db, "activities"), where("category", "==", categoryName));
      const querySnapshot = await getDocs(categoryQuery);
      querySnapshot.forEach((doc) => {
        this.activitiesList.push(doc.data());
        // console.log(this.activitiesList);
      });
    },
    showDetail(title) {
      this.$router.push(`/news/${title}`);
    }
  },
  mounted() {
    this.getNews();
  }
}
</script>