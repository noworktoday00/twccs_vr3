import{q as k,l as L,w as C,c as u,g as v,d as p}from"./firebaseConfig-43041049.js";import{_ as D,r as S,o as e,c as o,a as t,b as y,w,F as h,d as x,e as N,f as l,t as i,g}from"./index-fdcd7206.js";import{_ as q,a as P}from"./240460735_388463379449517_3767017185314368732_n-365e3b62.js";const T={data(){return{newsList:[],activitiesList:[],productsList:[]}},methods:{async getNews(){const c=k(u(p,"activities"),C("category","in",["news","work-record","event-registration"]),L(6));(await v(c)).forEach(_=>{this.newsList.push(_.data())})},async getActivities(){const c=Date.now();console.log(c,typeof c);const a=k(u(p,"activities"),C("category","==","activity-results"),L(3));(await v(a)).forEach(b=>{this.activitiesList.push(b.data()),console.log(this.activitiesList),this.activitiesList.forEach((d,n)=>{console.log(d.updateTimeStamp,n)})})},async getProducts(){(await v(u(p,"products"))).forEach(a=>{this.productsList.push(a.data())})},showNewsDetail(c){this.$router.push(`/news/${c}`)},showActivityDetail(c){this.$router.push(`/activities/${c}`)},showProductDetail(c){this.$router.push(`/products/${c}`)}},mounted(){this.getNews(),this.getActivities(),this.getProducts()}},$=N('<section class="container-fluid fluid-img-bg my-4 py-16 py-md-18 my-md-8"><div class="container"><div class="bg-light-opacity-7 p-8"><h2 class="text-center">台灣共創技藝發展協會</h2><h5 class="text-center">Association of Taiwan Co-Creation Services</h5><p class="text-center">著重於讓身心障礙者適應團體生活與作業職場技能之培育。</p></div></div></section>',1),A={class:"container my-4 my-md-8"},j={class:"row justify-content-between"},E=t("div",{class:"col-6"},[t("h2",{class:"mb-2 mb-md-6"},"最新消息 & 報名")],-1),V={class:"col-2 d-none d-md-block pt-2 text-center"},B={class:"container"},I={class:"row row-cols-1 row-cols-md-2"},F={class:"card card-shadow mb-3 p-1"},Q={class:"row g-0"},M={class:"col-md-5 p-2"},z=["src"],G={class:"col-md-7"},H={class:"card-body"},J={class:"card-title text-start"},K={class:"text-start"},O={class:"card-text text-start"},R={class:"card-text text-end"},U=["onClick"],W=N('<section class="container-fluid fluid-img-bg-2 my-4 py-16 py-md-18 my-md-8"><div class="container"><div class="bg-light-opacity-4 p-8"><h2 class="text-center text-white">台灣共創技藝發展協會</h2><h5 class="text-center text-white">Association of Taiwan Co-Creation Services</h5><p class="text-center text-white">著重於讓身心障礙者適應團體生活與作業職場技能之培育。</p></div></div></section><section class="container mx-auto my-4 my-md-16"><h2 class="mb-2 mb-md-6">關於我們</h2><div class="row row-cols-1 row-cols-md-2"><div class="col my-8 my-md-0"><div class="d-block bg-cloud-blue card-shadow rotate-1 mx-auto p-2" style="width:80%;"><img class="fluid-img-cover" src="'+q+'" alt=""><p class="text-center my-2">在協會中一起學習與成長</p></div></div><div class="col my-auto"><h3 class=""> 我們所提供的不只有魚，也提供釣竿 </h3><p class=""> 運用共創與各類技藝的發展研究，提出讓身心障礙者能掌握上手的生活技能，協助身心障礙者快速學習一技之長。 </p><h3 class=""> 協助適應工作環境團體生活 </h3><p class=""> 關於工作團體生活，我們也提供相關輔導，協助身心障礙者能夠更有效並且迅速的融入工作環境，順利上手工作崗位。 </p></div></div><div class="row row-cols-1 row-cols-md-2 my-4"><div class="col order-2 order-md-1 px-md-16 my-auto"><h3 class=""> 為身心障礙者找到新方向 </h3><p class=""> 全方位的帶領與陪伴，我們期望的是在他們成長的路上，都有我們隨時的陪伴，不只是最一開始的職能訓練，也包含後續的追蹤陪伴等等，台灣共創技藝發展協會期許自己能成為身心障礙者們在就業上，最安穩的依靠。 </p></div><div class="col my-8 my-md-0 order-1 order-md-2"><div class="d-block bg-cloud-blue card-shadow rotate-2 mx-auto p-2" style="width:80%;"><img class="fluid-img-cover" src="'+P+'" alt=""><p class="text-center my-2">在參訪中探索無限可能</p></div></div></div></section><div class="container"><hr></div>',3),X={class:"container my-4 my-md-8"},Y={class:"row justify-content-between"},Z=t("div",{class:"col-6"},[t("h2",{class:"mb-2 mb-md-6"},"活動紀錄")],-1),tt={class:"col-2 d-none d-md-block pt-2 text-center"},st={class:"row row-cols-1 row-cols-md-3"},ct={class:"card card-shadow p-2"},et=["src"],ot={class:"card-body"},it={class:"row justify-content-bewteen"},at={class:"col-12 col-md-6"},dt={class:"card-title text-start"},nt={class:"col-12 col-md-6"},rt={class:"text-end"},lt={class:"card-text text-end"},ht=["onClick"],_t=t("div",{class:"container"},[t("hr")],-1),mt={class:"container my-4 mt-md-8 mb-md-16"},ut={class:"row justify-content-between"},vt=t("div",{class:"col-6"},[t("h2",{class:"mb-2 mb-md-6"},"愛心商品")],-1),pt={class:"col-2 d-none d-md-block pt-2 text-center"},yt={class:"row row-cols-1 row-cols-md-4"},wt={class:"card card-shadow p-0"},xt=["src"],gt={class:"card-body"},bt={class:"card-title text-center"},ft={class:"card-text text-center"},kt=t("hr",null,null,-1),Lt={class:"d-flex justify-content-center"},Ct=["onClick"];function Nt(c,a,_,b,d,n){const m=S("router-link");return e(),o(h,null,[$,t("section",A,[t("div",j,[E,t("div",V,[y(m,{to:"/news",class:"h5 text-primary text-decoration-none"},{default:w(()=>[l("查看更多")]),_:1})])]),t("div",B,[t("div",I,[(e(!0),o(h,null,x(d.newsList,(s,r)=>(e(),o("div",{key:r+"news",class:"col"},[t("div",F,[t("div",Q,[t("div",M,[t("img",{class:"news-card-img rounded-2",src:s.activityImg,alt:""},null,8,z)]),t("div",G,[t("div",H,[t("h5",J,i(s.title),1),t("h6",K,i(s.activityTime),1),t("p",O,i(s.intro.substr(0,15)),1),t("p",R,[t("a",{href:"#",onClick:g(f=>n.showNewsDetail(s.title),["prevent"]),class:"text-decoration-none text-primary"},"閱讀更多...",8,U)])])])])])]))),128))])])]),W,t("section",X,[t("div",Y,[Z,t("div",tt,[y(m,{to:"/activities",class:"h5 text-primary text-decoration-none"},{default:w(()=>[l("查看更多")]),_:1})])]),t("div",st,[(e(!0),o(h,null,x(d.activitiesList,(s,r)=>(e(),o("div",{key:r+"act",class:"col"},[t("div",ct,[t("img",{src:s.activityImg,class:"product-card-image",alt:"..."},null,8,et),t("div",ot,[t("div",it,[t("div",at,[t("h5",dt,i(s.title),1)]),t("div",nt,[t("p",rt,i(s.activityTime),1)])]),t("p",lt,[t("a",{href:"#",onClick:g(f=>n.showActivityDetail(s.title),["prevent"]),class:"text-decoration-none text-secondary"},"閱讀更多...",8,ht)])])])]))),128))])]),_t,t("section",mt,[t("div",ut,[vt,t("div",pt,[y(m,{to:"/products",class:"h5 text-primary text-decoration-none"},{default:w(()=>[l("查看更多")]),_:1})])]),t("div",yt,[(e(!0),o(h,null,x(d.productsList,(s,r)=>(e(),o("div",{key:r+"product",class:"col"},[t("div",wt,[t("img",{src:s.productImg,class:"product-card-image",alt:"..."},null,8,xt),t("div",gt,[t("h5",bt,i(s.title),1),t("p",ft,[l("NT＄ "),t("span",null,i(s.originPrice),1),l(" 元 ")]),kt,t("div",Lt,[t("a",{href:"#",onClick:g(f=>n.showProductDetail(s.title),["prevent"]),class:"btn btn-success text-light"},"了解商品資訊",8,Ct)])])])]))),128))])])],64)}const Pt=D(T,[["render",Nt]]);export{Pt as default};