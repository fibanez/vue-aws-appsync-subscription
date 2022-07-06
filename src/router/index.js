import Vue from "vue";
import Router from "vue-router";
import Items from "@/components/Items";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/items",
      name: "Items",
      component: Items
    }
  ]
});
