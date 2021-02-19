import Vue from "vue";
import VueRouter from "vue-router";
import BookApp from "../views/BookApp.vue";
import BookDetails from "../views/BookDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/book/:id",
    component: BookDetails
  },
  {
    path: "/book",
    name: "Books",
    component: BookApp
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
