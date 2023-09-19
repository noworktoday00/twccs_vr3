<template>
  <div class="row mb-2">
    <div class="col-10">
      <h4 class="">文章管理</h4>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-plus-lg"></i>
        新增文章
      </button>
    </div>
  </div>
  <table class="table table-hover text-center align-middle">
    <thead>
      <tr>
        <th style="width:20%;">分類</th>
        <th style="width:20%;">文章名稱</th>
        <th style="width:20%;">文章首圖</th>
        <th style="width:15%;">發佈日期</th>
        <th style="width:25%;">編輯文章</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in newsList" :key="item.title">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          <img class="fluid-img-cover table-list-image" :src="item.newsImg" alt="">
        </td>
        <td>{{ item.updateTime }}</td>
        <td>
          <button type="button" class="btn btn-primary text-white me-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal" @click="editPost(item.title)">
            <i class="bi bi-pencil-square"></i>
            編輯
          </button>
          <button type="button" class="btn btn-danger text-white" @click="deletePost(item.title)">
            <i class="bi bi-trash"></i>
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    data-bs-focus="false">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            新增最新消息
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-8">
              <div class="mb-3">
                <label for="newsName" class="form-label">文章名稱</label>
                <input v-model="newsArticle.title" type="text" class="form-control" id="newsName" placeholder="請輸入文章名稱">
              </div>
            </div>
            <div class="col-4">
              <label for="newsType" class="form-label">文章分類</label>
              <select v-model="newsArticle.category" class="form-select" id="newsType"
                aria-label="Default select example">
                <option selected>請選擇活動類別</option>
                <option value="最新公告">最新公告</option>
                <option value="資訊分享">資訊分享</option>
                <option value="身心障礙輔導">身心障礙創業</option>
                <option value="二度就業">二度就業</option>
                <option value="婦女就業">婦女就業</option>
                <option value="參訪活動">參訪活動</option>
                <option value="身心障礙職訓">身心障礙職訓</option>
              </select>
            </div>
          </div>
          <hr>
          <div class="mb-3">
            <label for="newsHashtags">活動標籤</label>
            <textarea v-model="tempHashtags" class="form-control mb-2" name="" id="newsHashtags" cols="30" rows="2"
              placeholder="請輸入活動標籤，每個標籤中間請用空格斷開~"></textarea>
            <div class="row justify-content-end">
              <div class="col-2">
                <button @click="makeHashtags()" type="button" class="btn btn-outline-success">製作標籤</button>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="updateday" class="form-label">預設發送時間</label>
                <input v-model="newsArticle.updateTime" @change="makeTimeStamp()" type="datetime-local" id="updateday"
                  class="form-control">
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-6">
              <input @change="uploadMainImg()" ref="fileInput" class="form-control" type="file" accept="image/*"
                id="activeImg1">
            </div>
            <div class="col-6">
              <img class="fluid-img-cover" :src="newsArticle.newsImg" alt="">
            </div>
          </div>
          <hr>
          <div class="my-2">
            <label for="activeIntro" class="form-label">文章內容：</label>
            <!-- <textarea v-model="newsArticle.content" class="form-control" name="" id="activeIntro" cols="10"
              rows="6"></textarea> -->
            <ckeditor :editor="editor" v-model="newsArticle.content" :config="editorConfig" style="z-index: 10055">
            </ckeditor>
          </div>
          <hr>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">關閉</button>
          <button @click="uploadArticle()" type="button" class="btn btn-primary text-white"
            data-bs-dismiss="modal">儲存文章</button>
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
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
// 超連結功能引入會出問題，還在找原因 目前官方文檔解釋：
// This error is thrown when due to a mistake in how CKEditor 5 was installed or initialized, some of its modules were duplicated (evaluated and executed twice). Module duplication leads to inevitable runtime errors. 
// 當由於 CKEditor 5 安裝或初始化方式錯誤而導致其某些模塊重複（評估和執行兩次）時，會引發此錯誤。模塊重複會導致不可避免的運行時錯誤。
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import  AutoLink  from '@ckeditor/ckeditor5-link/src/autolink';
// 結果其實是，已經有導入過了，只是因為 z-index 的關係被 bootstrap 的 modal 遮擋住了，只要調整一下 ck-balloon-panel 的 z-index 就可以了
// 接下來要解決無法輸入的問題，目前找到的原因是因為輸入功能數窗沒有被 focus ， focus 一直停留在 bootstrap 的 modal 上，

export default {
  data() {
    return {
      newsArticle: {
        title: '',
        category: '',
        newsTime: '',
        updateTime: '',
        newsImg: '',
        content: '',
        hashtags: [],
        updateTimeStamp: '',
      },
      newsList: [],
      uploadedFile: '',
      tempHashtags: '',
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'link', 'mediaEmbed'],
        mediaEmbed: {
          previewsInData: true
        },
        link: {
          addTargetToExternalLinks: true,
        },
      },
    };
  },
  methods: {
    // 取得文章列表
    async getNews() {
      const querySnapshot = await getDocs(collection(db, "news"));
      querySnapshot.forEach((doc) => {
        // firestore 是沒有辦法把整個 array 抓下來的，所以要自己把資料組成一個 array 來做 v-for
        this.newsList.push(doc.data());
        console.log(this.newsList);
      });
    },
    // 上傳圖片
    uploadMainImg() {
      // 這邊要綁一個 ref 去找到檔案～
      let uploadedFile = this.$refs.fileInput.files[0];
      let fileName = uploadedFile.name;
      console.log(uploadedFile.name);
      const imgStorage = storage;
      // 這邊遇到問題，我就問，到底為什麼 this.uploadFile.name 會是 TypeError: Cannot read properties of undefined (reading 'name') ??? 
      // 目前解法：我這邊抓不到名稱，我就在外層抓好再放進去就好，所以在上面定義一個 fileName 先準備好名稱在後面帶入
      let storageRef = ref(imgStorage, `news/${fileName}`);
      uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        console.log('上傳成功');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.newsArticle.newsImg = downloadURL;
        });
      });
    },
    // 製作 hashtag
    makeHashtags() {
      this.newsArticle.hashtags = this.tempHashtags.split(' ');
      console.log(this.newsArticle.hashtags);
      alert('標籤製作成功！')
    },
    // 轉 timestamp 用這邊做一個假的預約上傳判斷標的
    makeTimeStamp() {
      this.newsArticle.updateTimeStamp = new Date().valueOf(this.newsArticle.updateTime);
      console.log(this.newsArticle.updateTimeStamp);
    },
    // 上傳文章
    async uploadArticle() {
      const docData = this.newsArticle;
      await setDoc(doc(db, "news", this.newsArticle.title), docData);
      console.log('更新成功');
      alert('更新文章成功！')
      this.newsList = [];
      this.getNews();
    },
    //編輯文章
    async editPost(title) {
      const docRef = doc(db, 'news', `${title}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.newsArticle = docSnap.data();
        this.tempHashtags = this.newsArticle.hashtags.join(' ');
        // this.activityArticle.updateTime = this.activityArticle.updateTimeStamp;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    // 刪除文章
    async deletePost(title) {
      await deleteDoc(doc(db, 'news', `${title}`));
      this.newsList = [];
      this.getNews();
    },

  },
  mounted() {
    this.getNews();
  },
}
</script>

<style lang="scss">
.ck-balloon-panel {
  z-index: 99999 !important;
}
</style>