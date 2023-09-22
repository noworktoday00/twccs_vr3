import{q as _,w as h,c as u,g as v,d as p}from"./firebaseConfig-43041049.js";import{_ as b,r as f,o as r,c as n,a as t,b as x,w as k,F as g,d as w,g as c,e as C,f as q,t as d}from"./index-08e5645d.js";const A={data(){return{activitiesList:[]}},methods:{async getActivities(){const i=_(u(p,"activities"),h("category","in",["event-registration","activity-results"]));(await v(i)).forEach(a=>{this.activitiesList.push(a.data())})},async getCategory(i){this.activitiesList=[];const s=_(u(p,"activities"),h("category","==",i));(await v(s)).forEach(l=>{this.activitiesList.push(l.data())})},showDetail(i){this.$router.push(`/activities/${i}`)}},mounted(){this.getActivities()}},L=C('<section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8"><div class="container"><div class="bg-light-opacity-5 p-8"><h2 class="text-center">活動紀錄</h2><h5 class="text-center">Activity Record</h5></div></div></section>',1),S={class:"container"},V={class:"mt-2"},$={"aria-label":"breadcrumb"},D={class:"breadcrumb"},N={class:"breadcrumb-item"},B=t("li",{class:"breadcrumb-item active","aria-current":"page"},"活動紀錄",-1),E=t("h2",null,"活動紀錄",-1),F={class:"row"},Q={class:"col-12 col-md-9"},T={class:"col mb-4"},I={class:"card card-shadow mb-3 p-1"},M={class:"row g-0"},R={class:"col-md-4 p-1"},j=["src"],z={class:"col-md-8"},G={class:"card-body"},H={class:"card-title"},J={class:"card-text"},K={class:"card-text text-end"},O=["onClick"],P={class:"col-3 d-none d-md-block"},U={class:"list-group list-group-flush"},W={class:"list-group-item bg-prim-back"},X={class:"list-group-item bg-prim-back"},Y={class:"list-group-item bg-prim-back"};function Z(i,s,a,l,m,o){const y=f("router-link");return r(),n(g,null,[L,t("div",S,[t("div",V,[t("nav",$,[t("ol",D,[t("li",N,[x(y,{to:"/"},{default:k(()=>[q("首頁")]),_:1})]),B])])]),E,t("div",F,[t("div",Q,[(r(!0),n(g,null,w(m.activitiesList,e=>(r(),n("div",{key:e.title,class:"row row-cols-1"},[t("div",T,[t("div",I,[t("div",M,[t("div",R,[t("img",{class:"news-card-img rounded-1",src:e.activityImg,alt:""},null,8,j)]),t("div",z,[t("div",G,[t("h5",H,d(e.title),1),t("h6",null,d(e.updateTime.substr(0,10)),1),t("p",J,d(e.intro.substr(0,15))+"...",1),t("p",K,[t("a",{href:"#",onClick:c(tt=>o.showDetail(e.title),["prevent"]),class:"text-primary"}," 閱讀詳細資訊... ",8,O)])])])])])])]))),128))]),t("div",P,[t("ul",U,[t("li",W,[t("a",{href:"#",onClick:s[0]||(s[0]=c(e=>o.getActivities(),["prevent"])),class:"text-dark text-decoration-none"},"所有活動資訊")]),t("li",X,[t("a",{href:"#",onClick:s[1]||(s[1]=c(e=>o.getCategory("event-registration"),["prevent"])),class:"text-dark text-decoration-none"},"活動報名")]),t("li",Y,[t("a",{href:"#",onClick:s[2]||(s[2]=c(e=>o.getCategory("activity-results"),["prevent"])),class:"text-dark text-decoration-none"},"活動成果")])])])])])],64)}const it=b(A,[["render",Z]]);export{it as default};
