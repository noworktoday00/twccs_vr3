<template>
    <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-5 p-8">
        <h2 class="text-center">活動紀錄</h2>
        <h5 class="text-center">Activity Record</h5>
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
          <li class="breadcrumb-item active" aria-current="page">活動紀錄</li>
        </ol>
      </nav>
    </div>
    <h2>活動紀錄</h2>
    <div class="row">
      <div class="col-12 col-md-9">
          <!-- 原本版面 -->
          <!-- <div v-for="item in activitiesList" :key="item.title" class="col my-2">
            <div class="card card-shadow rounded-0 p-2">
              <img :src="item.activityImg" class="activity-card-img"
                alt="...">
              <div class="card-body pb-0">
                <div class="d-flex justify-content-between">
                  <h6 class="card-title">{{ item.title }}</h6>
                  <h6>{{ item.activityTime }}</h6>
                </div>
                <p class="text-end mb-2">
                  <a href="#" @click.prevent="showDetail(item.title)" class="text-primary">閱讀更多內容...</a>
                </p>
              </div>
            </div>
          </div> -->

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
          <!-- <div class="col mb-4">
            <div class="card card-shadow mb-3 p-1">
              <div class="row g-0">
                <div class="col-md-4 p-1">
                  <img class="news-card-img rounded-1" src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg"
                    alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">新聞標題標題標題標題...</h5>
                    <h6>2023/08/07</h6>
                    <p class="card-text">最新消息內文，白日依山盡黃河日海流欲窮千里目更上一層樓，楚河漢界又一江，昨天吃了一碗陽春麵，今天要吃肉羹麵...</p>
                    <p class="card-text text-end">
                      <router-link to="/news/:newsTitle"  class="text-primary">
                        閱讀詳細資訊...
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
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
      </div><div class="col-3 d-none d-md-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getActivities()" class="text-dark text-decoration-none">所有活動資訊</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getCategory('event-registration')" class="text-dark text-decoration-none">活動報名</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" @click.prevent="getCategory('activity-results')" class="text-dark text-decoration-none">活動成果</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.activity-card-img {
  height: 200px;
  object-fit: cover;
}
</style>


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
    async getActivities() {
      const timeNow = Date.now();
      // console.log(timeNow, typeof(timeNow));
      const categoryQuery = query(collection(db, "activities"), where("category", "in", ["event-registration" , "activity-results"]));
      const querySnapshot = await getDocs(categoryQuery);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        this.activitiesList.push(doc.data());
        // console.log(this.activitiesList);
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
      this.$router.push(`/activities/${title}`);
    }
  },
  mounted() {
    this.getActivities();
  }
}
</script>