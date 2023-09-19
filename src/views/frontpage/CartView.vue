<template>
  <section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8"></section>
  <div class="container mb-5">
    <h2 class="text-center">購物車填資料頁面</h2>
    <table class="table table-hover text-center align-middle">
      <thead>
        <tr>
          <th>品名</th>
          <th style="width:15%;">照片</th>
          <th>單價</th>
          <th style="width:10%;">數量</th>
          <th>金額</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, key in localStorageCart" :key="'storage' + key">
          <td> {{ item.title }} </td>
          <td>
            <img class="fluid-img-cover" :src="item.img" alt="">
          </td>
          <td> {{ item.price }} </td>
          <td>
            <input class="form-control" type="number" v-model="item.qty" @change="changeQty()"> 
          </td>
          <td> {{ item.price * item.qty }} </td>
          <td>
            <button class="btn btn-danger" @click="removeFromCart(key)">
              <i class="bi bi-trash"></i>
              刪除
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">總共 {{ totalQty }} 件商品</td>
          <td colspan="3">金額總計 {{ totalPrice }} 元</td>
        </tr>
      </tfoot>
    </table>
    <hr>
    <h5>收件人資訊：</h5>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="mb-3">
          <label for="orderpersonName" class="ms-1 form-label">
            訂購人姓名：
          </label>
          <input type="name" v-model="orderDetail.contactInfo.contactName" class="form-control" id="orderpersonName" placeholder="請輸入姓名...">
        </div>
      </div>
      <div class="col-12 col-md-6">
        <label for="orderpersonMail" class="ms-1 form-label">
          訂購人電子信箱：
        </label>
        <input type="email" v-model="orderDetail.contactInfo.contactMail" class="form-control" id="orderpersonMail" placeholder="請輸入電子信箱...">
      </div>
      <div class="col-12 col-md-6">
        <label for="orderpersonPhone" class="ms-1 form-label">
          訂購人聯絡電話：
        </label>
        <input type="phone" v-model="orderDetail.contactInfo.contactPhone" class="form-control" id="orderpersonPhone" placeholder="請輸入聯絡電話...">
      </div>
      <div class="col-12 col-md-6">
        <label for="orderpersonAddress" class="ms-1 form-label">
          訂購人聯絡地址：
        </label>
        <input type="address" v-model="orderDetail.contactInfo.contactAddress" class="form-control" id="orderpersonAddress" placeholder="請輸入寄件地址...">
      </div>
      <div class="col-12">
        <label for="orderpersonNote" class="ms-1 form-label">
          訂購備註：
        </label>
        <textarea v-model="orderDetail.contactInfo.contactNote" class="form-control" name="orderpersonNote" id="orderpersonNote" cols="" rows="6"></textarea>
      </div>
    </div>
    <hr>
    <div class="row justify-content-center">
      <p class="col-6">
        <router-link to="/products" class="text-decoration-none text-primary">
          <i class="bi bi-arrow-return-left"></i>
          繼續購物
        </router-link>
      </p>
      <p class="col-6 text-end">
        <button @click="sendOrder()" type="button" class="btn btn-primary text-white">送出訂單</button>
      </p>
    </div>
  </div>
</template>

<script>
import { db } from "@/assets/config/firebaseConfig";
import { doc,setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      // 傳送訂單資料用
      orderDetail: {
        contactInfo: {
          contactName:'',
          contactMail:'',
          contactPhone:'',
          contactAddress:'',
          contactNote:'',
        },
        orderList: [],
        isPay: false,
        isSend: false,
      },
      // 顯示訂單商品用
      localStorageCart: [],
    };
  },
  methods: {
    getCart() {
      let storageCart = localStorage.getItem("cart");
      this.localStorageCart = JSON.parse(storageCart);
      // console.log('這是購物車資訊：', this.localStorageCart);
    },
    removeFromCart(key){
      console.log(key);
      this.localStorageCart.splice(key, 1);
      localStorage.setItem('cart', JSON.stringify(this.localStorageCart));
      this.getCart();
    },
    changeQty(){
      localStorage.setItem('cart', JSON.stringify(this.localStorageCart));
      this.getCart();
    },
    // 送出訂單
    async sendOrder() {
      this.orderDetail.orderList = this.localStorageCart;
      const docData = this.orderDetail;
      await setDoc(doc(db, "orderList", this.orderDetail.contactInfo.contactName), docData);
      console.log('訂購成功');
      alert('訂單送出成功！')
      this.orderDetail = {
        contactInfo: {
          contactName:'',
          contactMail:'',
          contactPhone:'',
          contactAddress:'',
          contactNote:'',
        },
      };
      this.localStorageCart= [],
      localStorage.removeItem('cart');
      console.log(localStorage);
    },
  },
  computed: {
    totalQty(){
      if(!this.localStorageCart){
        return;
      }
      return this.localStorageCart.reduce((total, item) => total + Number(item.qty), 0);
    },
    totalPrice(){
      if(!this.localStorageCart){
        return;
      };
      return this.localStorageCart.reduce((total, item) => total + item.price * Number(item.qty), 0);
    }
  },
  created() {
    this.getCart();
  }
}
</script>