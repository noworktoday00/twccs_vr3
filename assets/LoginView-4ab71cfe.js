import{e as l,s as u,f as h}from"./firebaseConfig-43041049.js";import{_ as m,o as p,c as _,a as s,h as a,i as d,f as c}from"./index-b0742f6d.js";const b={data(){return{user:{email:"",password:""}}},methods:{logIn(){const o=l();u(o,this.user.email,this.user.password).then(t=>{t.user,alert("登入成功！"),this.$router.push("/activelist")}).catch(t=>{t.code;const r=t.message;alert(r)})},signOut(){const o=l();h(o).then(()=>{alert("登出成功！"),this.$router.push("/")}).catch(t=>{})}}},g={class:"container pt-20"},w={class:"row justify-content-center mb-4"},f={class:"col-12 col-md-6"},v=s("h2",{class:"text-center text-primary mb-2"},"管理者登入",-1),x={class:"border border-1 bg-white card-shadow rounded-3 py-4 px-8"},y={class:"mb-3"},V=s("label",{for:"loginMail",class:"form-label"},"請輸入 email 帳號",-1),k={class:"mb-3"},M=s("label",{for:"loginPassword",class:"form-label"},"請輸入密碼",-1),B={class:"mb-3"},I={class:"d-grid gap-2"},O=s("i",{class:"bi bi-box-arrow-in-right me-2"},null,-1),P=s("i",{class:"bi bi-box-arrow-in-right me-2"},null,-1);function A(o,t,r,C,i,n){return p(),_("div",g,[s("div",w,[s("div",f,[v,s("div",x,[s("div",y,[V,a(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.user.email=e),type:"email",class:"form-control",id:"loginMail",placeholder:"請輸入登入信箱..."},null,512),[[d,i.user.email]])]),s("div",k,[M,a(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.user.password=e),type:"password",class:"form-control",id:"loginPassword",placeholder:"請輸入密碼..."},null,512),[[d,i.user.password]])]),s("div",B,[s("div",I,[s("button",{type:"button",onClick:t[2]||(t[2]=e=>n.logIn()),class:"btn btn-primary text-white"},[O,c(" 登入 ")]),s("button",{type:"button",onClick:t[3]||(t[3]=e=>n.signOut()),class:"btn btn-danger text-white"},[P,c(" 登出 ")])])])])])])])}const T=m(b,[["render",A]]);export{T as default};