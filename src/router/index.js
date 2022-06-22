import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About2.vue";
import FStation from "@/components/FStation.vue";



const routes = [
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },

    {
      path: "/3FStation",
      name: "3FStation",
      component: FStation,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


