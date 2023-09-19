<template>
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8">
    <div class="container">
      <div class="bg-light-opacity-5 p-8">
        <h2 class="text-center">愛心商品</h2>
        <h5 class="text-center">Our Products</h5>
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
          <li class="breadcrumb-item active" aria-current="page">愛心商品</li>
        </ol>
      </nav>
    </div>
    <h2>愛心產品</h2>
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row row-cols-2 row-cols-md-3">
          <div v-for="item, key in productsList" :key="'product' + key" class="col mb-4 mb-md-4">
            <div class="card card-shadow p-0">
              <img :src="item.productImg" class="card-img-top product-card-image" alt="...">
              <div class="card-body">
                <h6 class="card-title text-center">{{ item.title }}</h6>
                <p class="card-text text-center">NT＄ <span>{{ item.originPrice * item.discountPercent }}</span> 元 </p>
                <hr>
                <div class="d-flex justify-content-center">
                  <a href="#" @click.prevent="showDetail(item.title)" class="btn btn-success text-light">
                    <i class="bi bi-search"></i>
                    了解資訊
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col mb-4 mb-md-4">
            <div class="card card-shadow p-0">
              <img src="@/assets/images/jason-blackeye-K1uLEiqTQEA-unsplash.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h6 class="card-title text-center">商品名稱名稱名稱名稱</h6>
                <p class="card-text text-center">NT＄ <span>80</span> 元 </p>
                <hr>
                <div class="d-flex justify-content-center">
                  <router-link to="/products/:productTitle" class="btn btn-success text-light">
                    <i class="bi bi-search"></i>
                    了解資訊
                  </router-link>
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
      </div>
      <div class="col-3 d-none d-md-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-prim-back">
            <a href="#" class="text-dark text-decoration-none">皮件 DIY 材料包</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" class="text-dark text-decoration-none">皮件 DIY 工具</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#" class="text-dark text-decoration-none">其他手工藝商品</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <a href="#"
              class="text-dark text-decoration-none">手工點心</a>
          </li>
          <li class="list-group-item bg-prim-back">
            <router-link to="cart" class="text-decoration-none text-dark">
              查看購物車
              <i class="bi bi-cart4 ms-2"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const querySnapshot = await getDocs(collection(db, "products"));
export default {
  data() {
    return {
      productsList: [],
    }
  },
  methods: {
    async getProducts() {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        this.productsList.push(doc.data());
        console.log(this.productsList);
      });
    },
    showDetail(title) {
      this.$router.push(`/products/${title}`);
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>