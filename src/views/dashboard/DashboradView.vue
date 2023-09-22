<template>
  <div class="container pt-20">
    <div class="row">
      <div class="col-2">
        <ul class="list-group list-group-flush">
          <!-- <li class="list-group-item bg-prim-back text-center">
            <router-link class="text-dark text-decoration-none" to="/newslist">
              <i class="bi bi-newspaper me-1"></i>
              文章管理
              <i class="bi bi-chevron-right ms-1"></i>
            </router-link>
          </li> -->
          <li class="list-group-item bg-prim-back text-center">
            <router-link class="text-dark text-decoration-none" to="/activelist">
              <i class="bi bi-card-heading me-1"></i>
              文章管理
              <i class="bi bi-chevron-right ms-1"></i>
            </router-link>
          </li>
          <li class="list-group-item bg-prim-back text-center">
            <router-link class="text-dark text-decoration-none" to="/productlist">
              <i class="bi bi-box-seam me-1"></i>
              商品管理
              <i class="bi bi-chevron-right ms-1"></i>
            </router-link>
          </li>
          <li class="list-group-item bg-prim-back text-center">
            <router-link class="text-dark text-decoration-none" to="/orderlist">
              <i class="bi bi-box-seam me-1"></i>
              訂單管理
              <i class="bi bi-chevron-right ms-1"></i>
            </router-link>
          </li>
          <li class="list-group-item bg-prim-back text-center">
            <a class="text-danger text-decoration-none" @click="signOut()" href="#">
              <i class="bi bi-door-closed"></i>
              登出管理
              <i class="bi bi-chevron-right ms-1"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseAuth } from "@/assets/config/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
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
    // 登入驗證
    getUser() {
      const auth = firebaseAuth;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // console.log(uid);
          // ...
        } else {
          // User is signed out
          this.$router.push('/');
          // ...
        }
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
  },
    mounted() {
    this.getUser();
  }
}
</script>