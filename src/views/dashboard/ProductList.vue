<template>
  <div class="row mb-2">
    <div class="col-10">
      <h4 class="">商品列表</h4>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="newProduct()">
        <i class="bi bi-plus-lg"></i>
        新增商品
      </button>
    </div>
  </div>
  <table class="table table-hover text-center align-middle">
    <thead>
      <tr>
        <th style="width:10%;">分類</th>
        <th style="width:15%;">商品名稱</th>
        <th style="width:20%;">商品縮圖</th>
        <th style="width:15%;">售價</th>
        <th style="width:15%;">是否啟用</th>
        <th style="width:25%;">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in productsList" :key="item.title">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          <img class="table-list-image" :src="item.productImg" alt="">
        </td>
        <td>{{ item.originPrice }}</td>
        <td></td>
        <td>
          <button type="button" class="btn btn-primary text-white mb-2 mb-lg-0 me-lg-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal" @click="editProduct(item.title)">
            <i class="bi bi-pencil-square"></i>
            編輯
          </button>
          <button type="button" class="btn btn-danger text-white" @click="deleteProduct(item.title)">
            <i class="bi bi-trash"></i>
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-8">
              <div class="mb-3">
                <label for="productName" class="form-label">產品名稱</label>
                <input v-model="productDetail.title" type="text" class="form-control" id="productName"
                  placeholder="請輸入產品名稱">
              </div>
            </div>
            <div class="col-4">
              <label for="productCategory" class="form-label">產品分類</label>
              <select v-model="productDetail.category" class="form-select" id="productCategory"
                aria-label="Default select example">
                <option selected>請選擇產品分類</option>
                <option value="手作皮件">手作皮件</option>
                <option value="手工藝品">手工藝品</option>
                <option value="農特產品">農特產品</option>
                <option value="禮品禮盒">禮品禮盒</option>
                <option value="其他類別">其他類別</option>
              </select>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-6">
              <div class="mb-5">
                <label for="originPrice" class="form-label">產品售價</label>
                <input v-model="productDetail.originPrice" type="number" min="0" class="form-control" id="originPrice">
              </div>
              <div class="mb-5">
                <label for="discountPercent" class="form-label">產品折扣</label>
                <input v-model="productDetail.discountPercent" type="number" min="0" max="1" class="form-control"
                  id="discountPercent">
              </div>
              <div class="mb-5">
                <label for="productQuantity" class="form-label">上架數量</label>
                <input v-model="productDetail.quantity" type="number" min="0" class="form-control" id="productQuantity">
              </div>
              <div class="mb-5">
                <label for="productImg1">上傳產品主圖</label>
                <input @change="uploadMainImg()" ref="mainImgInput" class="form-control" type="file" accept="image/*"
                  id="productImg1">
              </div>
            </div>
            <div class="col-6">
              <img class="fluid-img-cover" :src="productDetail.productImg" alt="">
            </div>
          </div>
          <hr>
          <div class="d-flex mb-3">
            <div class="col-4 align-self-center">
              <label for="productImgs" class="form-label mb-0">上傳其他產品圖（3張）：</label>
            </div>
            <div class="col-8">
              <input @change="uploadOtherImgs()" ref="fileInput" class="form-control" type="file" accept="image/*"
                id="activeImgs">
            </div>
          </div>
          <div class="row mb-8">
            <div v-for="item, key in productDetail.productImages" :key="key" class="col-4">
              <img class="fluid-img-cover" id="activityImg" :src="item.imgUrl" alt="">
              <p class="text-center mb-0">
                <a href="#" class="text-decoration-none text-danger" @click="deleteImg(key,item.imgName)">
                  取消上傳<i class="bi bi-x-lg"></i>
                </a>
              </p>
            </div>
          </div>
          <hr>
          <div class="my-2">
            <label for="activeIntro" class="form-label">產品描述：</label>
            <textarea v-model="productDetail.content" class="form-control" name="" id="activeIntro" cols="10"
              rows="6"></textarea>
          </div>
          <div class="my-2">
            <label for="activeIntro" class="form-label">購物須知：</label>
            <textarea v-model="productDetail.note_1" class="form-control" name="" id="activeIntro" cols="10"
              rows="6"></textarea>
          </div>
          <div class="my-2">
            <label for="activeIntro" class="form-label">規格說明：</label>
            <textarea v-model="productDetail.note_2" class="form-control" name="" id="activeIntro" cols="10"
              rows="6"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">關閉</button>
          <button @click="uploadProduct()" type="button" class="btn btn-primary text-white"
            data-bs-dismiss="modal">儲存商品</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// firestore 抓資料
import { db } from "@/assets/config/firebaseConfig";
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
// firebase storage
import { storage } from "@/assets/config/firebaseConfig"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default {
  data() {
    return {
      productDetail: {
        title: '',
        category: '',
        originPrice: 0,
        discountPercent: 1,
        quantity: '',
        productImg: '',
        productImages: [],
        content: '',
        note_1: '',
        note_2: '',
      },
      productsList: [],
      uploadedFile: '',
    };
  },
  methods: {
    // 取得文章列表
    async getProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        // firestore 是沒有辦法把整個 array 抓下來的，所以要自己把資料組成一個 array 來做 v-for
        this.productsList.push(doc.data());
        // console.log(this.productsList);
      });
    },
    newProduct() {
      this.productDetail = {
        title: '',
        category: '',
        originPrice: 0,
        discountPercent: 1,
        quantity: '',
        productImg: '',
        productImages: [],
        content: '',
        note_1: '',
        note_2: '',
      };
    },
    // 上傳圖片
    uploadMainImg() {
      // 這邊要綁一個 ref 去找到檔案～
      let uploadedFile = this.$refs.mainImgInput.files[0];
      let fileName = uploadedFile.name;
      console.log(uploadedFile.name);
      const imgStorage = storage;
      // 這邊遇到問題，我就問，到底為什麼 this.uploadFile.name 會是 TypeError: Cannot read properties of undefined (reading 'name') ??? 
      // 目前解法：我這邊抓不到名稱，我就在外層抓好再放進去就好，所以在上面定義一個 fileName 先準備好名稱在後面帶入
      let storageRef = ref(imgStorage, `product/${fileName}`);
      uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        // console.log('上傳成功');
        alert('上傳成功！')
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          this.productDetail.productImg = downloadURL;
        });
      });
    },
    // 多圖上傳
    uploadOtherImgs() {
      // 這邊要綁一個 ref 去找到檔案～
      let uploadedFile = this.$refs.fileInput.files[0];
      let fileName = uploadedFile.name;
      console.log(uploadedFile.name);
      const imgStorage = storage;
      let storageRef = ref(imgStorage, `product/${fileName}`);
      uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        // console.log('上傳成功');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          this.productDetail.productImages.push(
            {
              imgName: fileName,
              imgUrl: downloadURL,
            }
          );
          console.log(this.productDetail.productImages);
        });
      });
    },
    // 刪除照片
    deleteImg(key, name) {
      // console.log(key, name);
      const imgStorage = storage;
      const desertRef = ref(imgStorage, `product/${name}`);

      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        this.productDetail.productImages.splice(key, 1);
        // console.log(this.productDetail.productImages);
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    },
    // 上傳產品
    async uploadProduct() {
      const docData = this.productDetail;
      await setDoc(doc(db, "products", this.productDetail.title), docData);
      // console.log('更新成功');
      alert('更新商品成功！')
      this.productsList = [];
      this.getProducts();
    },
    //編輯文章
    async editProduct(title) {
      const docRef = doc(db, 'products', `${title}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.productDetail = docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    // 刪除文章
    async deleteProduct(title) {
      await deleteDoc(doc(db, 'products', `${title}`));
      this.productsList = [];
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
  },
}
</script>