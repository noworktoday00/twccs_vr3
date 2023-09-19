<template>
  <div class="row mb-2">
    <div class="col-10">
      <h4 class="">文章管理</h4>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="newArticle()">
        <i class="bi bi-plus-lg"></i>
        新增文章
      </button>
    </div>
  </div>
  <table class="table table-hover text-center align-middle">
    <thead>
      <tr>
        <th style="width:10%;">分類</th>
        <th style="width:15%;">文章名稱</th>
        <th style="width:20%;">文章首圖</th>
        <th style="width:15%;">文章日期</th>
        <th style="width:15%;">發佈時間</th>
        <th style="width:25%;">編輯文章</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in activitiesList" :key="item.title">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          <div class="">
            <img class="table-list-image" :src="item.activityImg" alt="">
          </div>
        </td>
        <td>{{ item.activityTime }}</td>
        <td>{{ item.updateTime }}</td>
        <td>
          <button type="button" class="btn btn-primary text-white mb-2 mb-lg-0 me-lg-2" data-bs-toggle="modal"
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

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增文章</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-8">
              <div class="mb-3">
                <label for="activityName" class="form-label">文章名稱</label>
                <input v-model="activityArticle.title" type="text" class="form-control" id="activityName"
                  placeholder="請輸入活動名稱">
              </div>
            </div>
            <div class="col-4">
              <label for="activityType" class="form-label">文章類別</label>
              <select v-model="activityArticle.category" class="form-select" id="activityType"
                aria-label="Default select example">
                <option selected>請選擇活動類別</option>
                <option value="news">最新公告</option>
                <option value="work-record">小作點滴</option>
                <option value="event-registration">活動報名</option>
                <option value="activity-results">活動成果</option>
              </select>
            </div>
          </div>
          <hr>
          <div class="mb-3">
            <label for="activityHashtags">文章標籤</label>
            <textarea v-model="tempHashtags" class="form-control mb-2" name="" id="activityHashtags" cols="30" rows="2"
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
                <label for="activityDate" class="form-label">文章日期</label>
                <input v-model="activityArticle.activityTime" type="date" class="form-control" id="activityDate">
              </div>
              <div class="mb-3">
                <label for="updateday" class="form-label">預設發送時間</label>
                <input v-model="activityArticle.updateTime" @change="makeTimeStamp()" type="datetime-local" id="updateday"
                  class="form-control">
              </div>
              <div class="mb-3">
                <label for="activeImg1" class="form-label">文章主圖</label>
                <input @change="uploadMainImg()" ref="mainFileInput" class="form-control" type="file" accept="image/*"
                  id="activeImg1">
              </div>
            </div>
            <div class="col-6">
              <img class="fluid-img-cover" id="activityImg" :src="activityArticle.activityImg" alt="">
            </div>
          </div>
          <hr>
          <div class="my-2">
            <label for="activeIntro">文章簡述：</label>
            <textarea class="form-control" v-model="activityArticle.intro" name="" id="activeIntro" cols="30" rows="3">請輸入文章卡片顯示內容...</textarea>
          </div>
          <hr>
          <div class="my-2">
            <label for="activeContent" class="form-label">文章內容：</label>
              <ckeditor :editor="editor" id="activeContent" v-model="activityArticle.content" :config="editorConfig" style="z-index: 10055">
            </ckeditor>
          </div>
          <hr>
          <div class="row mb-3">
            <div class="col-4">
              <label for="activeImgs" class="form-label">上傳其他圖檔：</label>
            </div>
            <div class="col-8">
              <input @change="uploadOtherImgs()" ref="fileInput" class="form-control" type="file" accept="image/*"
                id="activeImgs">
            </div>
          </div>
          <div class="row mb-3">
            <div v-for="item, key in activityArticle.activityImgs" :key="key" class="col-4 pb-8">
              <img class="fluid-img-cover" id="activityImg" :src="item.imgUrl" alt="">
              <p class="text-center mb-3">
                <a href="#" class="text-decoration-none text-danger" @click="deleteImg(key,item.imgName)">
                  取消上傳<i class="bi bi-x-lg"></i>
                </a>
              </p>
            </div>
          </div>
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
import { storage } from "@/assets/config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';

export default {
  data() {
    return {
      activityArticle: {
        title: '',
        category: '',
        activityTime: '',
        updateTime: '',
        activityImg: '',
        content: '',
        hashtags: [],
        activityImgs: [
        ],
        updateTimeStamp: '',
        intro:'',
      },
      activitiesList: [],
      uploadedFile: '',
      tempHashtags: '',
      // ckEditor
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
    async getActivities() {
      const querySnapshot = await getDocs(collection(db, "activities"));
      querySnapshot.forEach((doc) => {
        // firestore 是沒有辦法把整個 array 抓下來的，所以要自己把資料組成一個 array 來做 v-for
        this.activitiesList.push(doc.data());
        // console.log(this.activitiesList);
      });
    },
    newArticle() {
      this.activityArticle = {
        title: '',
        category: '',
        activityTime: '',
        updateTime: '',
        activityImg: '',
        content: '',
        hashtags: [],
        activityImgs: [
        ],
        updateTimeStamp: '',
        intro:'',
      };
      this.tempHashtags =  '';
    },
    // 上傳圖片
    uploadMainImg() {
      // 這邊要綁一個 ref 去找到檔案～
      let uploadedFile = this.$refs.mainFileInput.files[0];
      let fileName = uploadedFile.name;
      console.log(uploadedFile.name);
      const imgStorage = storage;
      // 這邊遇到問題，我就問，到底為什麼 this.uploadFile.name 會是 TypeError: Cannot read properties of undefined (reading 'name') ??? 
      // 目前解法：我這邊抓不到名稱，我就在外層抓好再放進去就好，所以在上面定義一個 fileName 先準備好名稱在後面帶入
      let storageRef = ref(imgStorage, `active/${fileName}`);
      uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        console.log('上傳成功');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.activityArticle.activityImg = downloadURL;
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
      let storageRef = ref(imgStorage, `active/${fileName}`);
      uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        console.log('上傳成功');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.activityArticle.activityImgs.push(
            {
              imgName: fileName,
              imgUrl: downloadURL,
            }
          );
          console.log(this.activityArticle.activityImgs);
        });
      });
    },
    // 刪除照片
    deleteImg(key,name) {
      console.log(key, name);
      const imgStorage = storage;
      const desertRef = ref(imgStorage, `active/${name}`);

      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        this.activityArticle.activityImgs.splice(key, 1);
        console.log(this.activityArticle.activityImgs);
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    },
    testDelete(key){
      console.log(key);
    },
    // 製作 hashtag
    makeHashtags() {
      this.activityArticle.hashtags = this.tempHashtags.split(' ');
      console.log(this.activityArticle.hashtags);
      alert('標籤製作成功！')
    },
    // 轉 timestamp 用這邊做一個假的預約上傳判斷標的
    makeTimeStamp() {
      this.activityArticle.updateTimeStamp = new Date().valueOf(this.activityArticle.updateTime);
      // console.log(this.activityArticle.updateTimeStamp);
    },
    // 上傳文章
    async uploadArticle() {
      const docData = this.activityArticle;
      await setDoc(doc(db, "activities", this.activityArticle.title), docData);
      console.log('更新成功');
      alert('更新文章成功！')
      this.activitiesList = [];
      this.getActivities();
    },
    //編輯文章
    async editPost(title) {
      const docRef = doc(db, 'activities', `${title}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.activityArticle = docSnap.data();
        this.tempHashtags = this.activityArticle.hashtags.join(' ');
        // this.activityArticle.updateTime = this.activityArticle.updateTimeStamp;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    // 刪除文章
    async deletePost(title) {
      await deleteDoc(doc(db, 'activities', `${title}`));
      this.activitiesList = [];
      this.getActivities();
    },
  },
  mounted() {
    this.getActivities();
  },
}
</script>