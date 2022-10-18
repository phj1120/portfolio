import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/projects/doing",
    component: () =>
      import("../views/projects/doing.vue"),
  },
  {
    path: "/projects/haenaem",
    component: () =>
      import("../views/projects/haenaem.vue"),
  },
  {
    path: "/projects/mogakco",
    component: () =>
      import("../views/projects/mogakco.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
