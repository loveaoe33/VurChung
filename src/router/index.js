import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About2.vue";
import HelloWorld from "@/components/HelloWorld.vue"
import FStation from "@/components/FStation.vue";
import Empty from "@/components/Empty.vue";
import Sensory2 from "@/components/Sensory2.vue"
import test from "@/components/test.vue"



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
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld,
    },

    {
      path: "/Empty",
      name: "Empty",
      component: Empty,
    },
    {
      path: "/Sensory",
      name: "Sensory2",
      component: Sensory2,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


