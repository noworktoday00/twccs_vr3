<template>
  <div class="row mb-2">
    <div class="col-10">
      <h4 class="">訂單列表：未處理訂單 -> 已付款訂單 -> 已寄出訂單</h4>
    </div>
  </div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link text-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
        role="tab" aria-controls="home" aria-selected="true">未處理訂單</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
        role="tab" aria-controls="profile" aria-selected="false">已付款訂單</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
        role="tab" aria-controls="contact" aria-selected="false">已寄出訂單</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <table class="table table-hover text-center align-middle">
        <thead>
          <tr>
            <th style="width:10%;">姓名</th>
            <th style="width:15%;">電話</th>
            <th style="width:20%;">email</th>
            <th style="width:15%;">訂單明細</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, key in newOrder" :key="key + 'order'">
            <td>{{ item.contactInfo.contactName }}</td>
            <td>{{ item.contactInfo.contactPhone }}</td>
            <td>{{ item.contactInfo.contactMail }}</td>
            <td>
              <button type="button" class="btn btn-success text-white" data-bs-toggle="modal"
                data-bs-target="#orderDetail" @click="viewDetail(item.contactInfo.contactName)">
                查看明細
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <table class="table table-hover text-center align-middle">
        <thead>
          <tr>
            <th style="width:10%;">姓名</th>
            <th style="width:15%;">電話</th>
            <th style="width:20%;">email</th>
            <th style="width:15%;">訂單明細</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, key in isPayOrder" :key="key + 'order'">
            <td>{{ item.contactInfo.contactName }}</td>
            <td>{{ item.contactInfo.contactPhone }}</td>
            <td>{{ item.contactInfo.contactMail }}</td>
            <td>
              <button type="button" class="btn btn-success text-white" data-bs-toggle="modal"
                data-bs-target="#orderDetail" @click="viewDetail(item.contactInfo.contactName)">
                查看明細
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <table class="table table-hover text-center align-middle">
        <thead>
          <tr>
            <th style="width:10%;">姓名</th>
            <th style="width:15%;">電話</th>
            <th style="width:20%;">email</th>
            <th style="width:15%;">訂單明細</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, key in isSendOrder" :key="key + 'order'">
            <td>{{ item.contactInfo.contactName }}</td>
            <td>{{ item.contactInfo.contactPhone }}</td>
            <td>{{ item.contactInfo.contactMail }}</td>
            <td>
              <button type="button" class="btn btn-success text-white" data-bs-toggle="modal"
                data-bs-target="#orderDetail" @click="viewDetail(item.contactInfo.contactName)">
                查看明細
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal fade" id="orderDetail" tabindex="-1" aria-labelledby="orderDetailLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="orderDetailLabel">訂單資訊</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>訂單詳細資訊</p>
          <p>聯絡人資訊</p>
          <div class="row justify-content-around">
            <p class="col-4">訂購人姓名：{{ orderDetail.contactInfo.contactName }}</p>
            <p class="col-6">訂購人電話：{{ orderDetail.contactInfo.contactPhone }}</p>
          </div>
          <div class="row justify-content-around">
            <p class="col-4">
              訂購人Mail：
              <br>
              {{ orderDetail.contactInfo.contactMail }}
            </p>
            <p class="col-6">
              訂購人地址：
              <br>
              {{ orderDetail.contactInfo.contactAddress }}
            </p>
          </div>
          <div class="row justify-content-around">
            <p class="col-12">
              備註：
              <br>
              {{ orderDetail.contactInfo.contactNote }}
            </p>
          </div>
          <hr>
          訂購商品資訊：
          <table class="table table-hover text-center align-middle">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>數量</th>
                <th>金額</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item, key in orderDetail.orderList" :key="'buyIt' + key">
                <td>{{ item.title }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.qty * item.price }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">總共 {{ totalQty }} 件商品</td>
                <td colspan="2">金額共計 {{ totalPrice }} 元</td>
              </tr>
            </tfoot>
          </table>
          <hr>
          <div class="row justify-content-around">
            <div class="col-4">
              <div class="form-check">
                <input v-model="orderDetail.isPay" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  是否確認付款
                </label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check">
                <input v-if="!orderDetail.isPay" v-model="orderDetail.isSend" class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled>
                <input v-else v-model="orderDetail.isSend" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  是否完成寄出
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">關閉</button>
          <button @click="uploadOrder()" type="button" class="btn btn-primary text-white" data-bs-dismiss="modal">更新訂單進度</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// firestore 抓資料
import { db } from "@/assets/config/firebaseConfig";
import { collection, getDocs, getDoc,setDoc, deleteDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      orderList: [],
      orderDetail: {
        contactInfo: {
          contactName: '',
          contactPhone: '',
          contactMail: '',
          contactAddress: '',
          contactNote: '',
        },
        orderList: [],
        isPay: false,
        isSend: false,
      },
      newOrder: [],
      isPayOrder: [],
      isSendOrder: [],
    };
  },
  methods: {
    // 取得訂單列表
    async getOrders() {
      const querySnapshot = await getDocs(collection(db, "orderList"));
      querySnapshot.forEach((doc) => {
        this.orderList.push(doc.data());
      });
      this.orderList.forEach((item, index) => {
        if(!item.isPay && !item.isSend) {
          this.newOrder.push(item);
        }
        if(item.isPay && !item.isSend){
          this.isPayOrder.push(item);
        }
        if(item.isSend){
          this.isSendOrder.push(item);
        }
      });
      // console.log(this.newOrder);
      // console.log(this.isPayOrder);
      // console.log(this.isSendOrder);
    },
    // 看訂單明細
    async viewDetail(title) {
      const docRef = doc(db, 'orderList', `${title}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.orderDetail = docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    // 更新訂單狀況
    async uploadOrder() {
      const docData = this.orderDetail;
      await setDoc(doc(db, 'orderList', this.orderDetail.contactInfo.contactName), docData);
      // console.log('更新訂單成功');
      alert('更新訂單成功！')
      this.orderList = [];
      this.newOrder = [];
      this.isPayOrder = [];
      this.isSendOrder = [];
      this.getOrders();
    },
  },
  // 用 computed 計算產品總數 & 總金額
  computed: {
    totalQty() {
      return this.orderDetail.orderList.reduce((total, item) => total + item.qty, 0);
    },
    totalPrice() {
      return this.orderDetail.orderList.reduce((total, item) => total + item.price * item.qty, 0);
    }
  },
  mounted() {
    this.getOrders();
  },
}
</script>