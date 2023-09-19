<template>
  <div class="container pt-20">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-6">
        <h2 class="text-center text-primary mb-2">管理者登入</h2>
        <div class="border border-1 bg-white card-shadow rounded-3 py-4 px-8">
          <div class="mb-3">
            <label for="loginMail" class="form-label">請輸入 email 帳號</label>
            <input v-model="user.email" type="email" class="form-control" id="loginMail" placeholder="請輸入登入信箱...">
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">請輸入密碼</label>
            <input v-model="user.password" type="password" class="form-control" id="loginPassword" placeholder="請輸入密碼...">
          </div>
          <div class="mb-3">
            <div class="d-grid gap-2">
              <button type="button" @click="logIn()" class="btn btn-primary text-white">
                <i class="bi bi-box-arrow-in-right me-2"></i>
                登入
              </button>
              <button type="button" @click="signOut()" class="btn btn-danger text-white">
                <i class="bi bi-box-arrow-in-right me-2"></i>
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//這邊卡住了，卡在一個要先初始化才能使用登入，可是 import 不進來的窘境，好像是一個不太難的問題，可是暫時想不到原因，有可能是 vite 資料夾檔案結構上的跟我搜尋到的做法的方式不一樣的原因，也有可能是因為 firebase 版本不同的關係 目前顯示錯誤是一個 400 還找不到相關原因 希望可以趕快解決我哭
import { firebaseAuth } from "@/assets/config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    logIn() {      
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(user != null) {
            console.log(user.uid);
          }
          alert("登入成功！");
          this.$router.push('/activelist');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
    signOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        alert("登出成功！");
        this.$router.push('/');
      }).catch((error) => {
        // An error happened.
      });
    }
  }
}
</script>