import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/frontpage/LandingView.vue"),
  },

  {
    path: "/about",
    name: "about",
    component: () => import("../views/frontpage/AboutView.vue"),
  },
  {
    path: "/activities",
    name: "activities",
    component: () => import("../views/frontpage/ActivityView.vue"),
  },
  {
    path: "/activities/:activityTitle",
    name: "activitydetail",
    component: () => import("../views/frontpage/ActivityDetail.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/frontpage/NewsView.vue"),
  },
  {
    path: "/news/:newsTitle",
    name: "newsdetail",
    component: () => import("../views/frontpage/NewsDetail.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/frontpage/ProductsView.vue"),
  },
  {
    path: "/products/:productTitle",
    name: "productdetal",
    component: () => import("../views/frontpage/Productdetail.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/frontpage/CartView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard/DashboradView.vue"),
    children: [
      {
        path: "/productlist",
        name: "productlist",
        component: () => import("../views/dashboard/ProductList.vue"),
      },
      // {
      //   path: "/newslist",
      //   name: "newslist",
      //   component: () => import("../views/dashboard/NewsList.vue"),
      // },
      {
        path: "/activelist",
        name: "activelist",
        component: () => import("../views/dashboard/ActiveList.vue"),
      },
      {
        path: "/orderlist",
        name: "orderlist",
        component: () => import("../views/dashboard/OrdersList.vue"),
      },
    ],
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
