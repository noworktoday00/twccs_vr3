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
            <router-link to="/products">愛心商品</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">愛心商品內容</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="container py-8">
          <div class="row">
            <!-- 商品照片 -->
            <div class="col-12 col-md-6 mb-8 mb-md-2">
              <img class="fluid-img-product mb-3" :src="productDetail.productImg" alt="">
              <div class="row justify-content-center mb-8">
                <div v-for="item, key in productDetail.productImages" :key="'productkey' + key" class="col-4">
                  <img class="fluid-img-product-2" :src="item.imgUrl" alt="">
                </div>
              </div>
            </div>
            <!-- 商品描述 -->
            <div class="col-12 col-md-6">
              <h2>{{ productDetail.title }}</h2>
              <hr>
              <h5>商品描述：</h5>
              <p style="white-space: pre-wrap">
                {{ productDetail.content }}
              </p>
              <hr>
              <!-- 價格 & 數量 -->
              <div class="row">
                <div class="col-6 align-self-center">
                  <h5 class="mb-0">
                    建議售價：<span class="text-success">{{ productDetail.originPrice }}</span>元
                  </h5>
                </div>
                <div class="col-6">
                  <select v-model="orderQty" class="form-select" aria-label="Default select example">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <hr>
              <!-- 控制按鈕 -->
              <div class="row justify-content-around">
                <p class="col text-center">
                  <button type="button" @click="addToCart(productDetail.title, orderQty, productDetail.productImg, productDetail.originPrice )"
                    class="btn btn-primary text-white">
                    <i class="bi bi-bag me-1"></i>加入購物車
                  </button>
                </p>
                <p class="col text-center">
                  <router-link to="/cart" class="btn btn-warning text-white">
                    <i class="bi bi-cart me-1"></i>購物車(
                      <span v-if="localStorageCart"> {{ localStorageCart.length }} </span>
                      <span v-else>0</span>
                      )
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <hr>
          <!-- 其他描述 -->
          <h5 class="text-center text-white bg-primary">購物須知</h5>
          <div class="px-4">
            <p style="white-space: pre-wrap">
              {{ productDetail.note_1 }}
            </p>
          </div>
          <h5 class="text-center text-white bg-secondary">規格說明</h5>
          <div class="px-4">
            <p style="white-space: pre-wrap">
              {{ productDetail.note_2 }}
            </p>
          </div>
          <h5 class="text-center text-white bg-info">折扣優惠</h5>
          <div class="px-4">
            <p>量大另議，歡迎公司行號、行政機關洽詢。</p>
          </div>
          <h5 class="text-center text-white bg-warning">運費規則</h5>
          <div class="px-4">
            <p style="white-space: pre-wrap">
              台灣地區│郵寄掛號：運費40元(依數量多寡增加)
              <br>
              ※支持寄送香港、澳門、馬來西亞、新加坡等海外地區，歡迎洽詢。
            </p>
          </div>
          <h5 class="text-center text-white bg-success">付款相關</h5>
          <div class="px-4">
            <p>付款方式一率採先付款後製作方式進行。</p>
          </div>
        </div>
      </div>
      <div class="col-3 d-none d-md-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-prim-back">商品分類[1]</li>
          <li class="list-group-item bg-prim-back">商品分類[2]</li>
          <li class="list-group-item bg-prim-back">商品分類[3]</li>
          <li class="list-group-item bg-prim-back">商品分類[4]</li>
          <li class="list-group-item bg-prim-back">商品分類[5]</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      productTitle: '',
      productDetail: {},
      cart: [],
      localStorageCart: [],
      orderQty: 0,
    };
  },
  methods: {
    async getProduct() {
      const docRef = doc(db, "products", `${this.productTitle}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.productDetail = docSnap.data();
        // console.log(this.productDetail);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    addToCart(title, qty, img, price) {
      // console.log(title);
      // console.log(qty);
      let msgCart = localStorage.getItem('cart');
      // console.log(msgCart);
      if(msgCart) {
        msgCart = JSON.parse(msgCart);
        let key = false;
        msgCart.forEach(v => {
          if(v.title == title){
            v.qty = ( v.qty - 0 ) + ( qty - 0 );
            key = true;
          };
        });
        if(!key) {
          msgCart.push({
            title,
            qty,
            img,
            price
          })
        }
        localStorage.setItem('cart', JSON.stringify(msgCart));
      } else {
        let objItem = {
          title,
          qty,
          img,
          price
        };
        let arrItems = [objItem];
        localStorage.setItem('cart', JSON.stringify(arrItems));
      };
      this.getCart();
    },
    clearCart(){
      localStorage.removeItem('cart');
      // console.log('刪除購物車資訊');
      this.getCart();
    },
    getCart() {
      let storageCart = localStorage.getItem("cart");
      this.localStorageCart = JSON.parse(storageCart);
      // console.log('這是購物車資訊：', this.localStorageCart);
    }
  },
  created() {
    this.productTitle = this.$route.params.productTitle;
    this.getProduct();
    this.getCart();
  }
}
</script>