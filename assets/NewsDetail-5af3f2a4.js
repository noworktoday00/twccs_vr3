import{a as w,d as b,b as p}from"./firebaseConfig-43041049.js";import{_ as f,r as g,o as t,c as i,a as s,b as a,w as r,t as d,F as _,d as u,f as c}from"./index-08e5645d.js";const v={data(){return{newsTitle:"",newsDetail:{}}},methods:{async getNews(){const m=w(b,"activities",`${this.newsTitle}`),n=await p(m);n.exists()?this.newsDetail=n.data():console.log("No such document!")}},created(){this.newsTitle=this.$route.params.newsTitle,this.getNews()}},y=s("section",{class:"container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8"},null,-1),x={class:"container"},D={class:"mt-2"},T={"aria-label":"breadcrumb"},k={class:"breadcrumb"},N={class:"breadcrumb-item"},B={class:"breadcrumb-item"},L=s("li",{class:"breadcrumb-item active","aria-current":"page"},"最新消息內容",-1),V={class:"row justify-content-between align-items-center"},C={class:"col-12 col-md-10"},F={class:"text-md-end col-12 col-md-2 mb-0"},H={class:"row mx-2 my-2"},I={class:"bg-primary text-center text-white rounded-2 py-1"},M=s("i",{class:"bi bi-tag-fill"},null,-1),S=["src"],j=["innerHTML"],E={class:"row mb-4"},R=["src"],U={class:"text-end"},q=s("i",{class:"bi bi-arrow-return-left ms-1"},null,-1);function z(m,n,A,G,e,J){const l=g("router-link");return t(),i(_,null,[y,s("div",x,[s("div",D,[s("nav",T,[s("ol",k,[s("li",N,[a(l,{to:"/"},{default:r(()=>[c("首頁")]),_:1})]),s("li",B,[a(l,{to:"/news"},{default:r(()=>[c("最新消息")]),_:1})]),L])])]),s("div",V,[s("h2",C,d(e.newsDetail.title),1),s("p",F,d(e.newsDetail.updateTime),1)]),s("div",H,[(t(!0),i(_,null,u(e.newsDetail.hashtags,o=>(t(),i("div",{key:o.key,class:"col-4 col-md-2"},[s("p",I,[M,c(" "+d(o),1)])]))),128))]),s("img",{class:"fluid-img-cover",src:e.newsDetail.activityImg,alt:""},null,8,S),s("section",null,[s("div",{innerHTML:e.newsDetail.content},null,8,j),s("div",E,[(t(!0),i(_,null,u(e.newsDetail.activityImgs,(o,h)=>(t(),i("div",{key:h,class:"col-4"},[s("img",{class:"fluid-img-cover mb-2",src:o.imgUrl,alt:""},null,8,R)]))),128))]),s("p",U,[a(l,{to:"/news",class:"text-primary"},{default:r(()=>[c(" 返回最新消息 "),q]),_:1})])])])],64)}const P=f(v,[["render",z]]);export{P as default};