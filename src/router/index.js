import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About2.vue";
import HelloWorld from "@/components/HelloWorld.vue"
import FStation from "@/components/FStation.vue";
import ORForm from "@/components/ORForm.vue";
import Empty from "@/components/Empty.vue";
import Sensory2 from "@/components/Sensory2.vue";
import test from "@/components/test.vue";
import Warning from "@/components/Warning.vue";
import Personnel from "@/components/Personnel.vue";
import Login from "@/components/Login.vue";
import Personnel_Attend from "@/components/Personnel_Attend.vue";
import Login_Personnel from "@/components/Login_Personnel.vue";


const router=createRouter({
  
    routes:[
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
      },
      {
        path:"/Warning",
        name: "Warning",
        component: Warning,
      },
      {
        path:"/ORForm",
        name:"ORForm",
        component:ORForm,
      },
      {
        path:"/Personnel",
        name:"Personnel",
        component:Personnel,
      },
      {
        path:"/Login",
        name:"Login",
        component:Login,
        meta: { requiresAuth: true } // 添加 meta 字段以指示需要身份验证
  ,
      },
      {
        path:"/Personnel_Attend",
        name:"Personnel_Attend",
        component:Personnel_Attend,
      },
      {
        path:"/Login_Personnel",
        name:"Login_Personnel",
        component:Login_Personnel,
      },
      


      
    ],
    history: createWebHistory(),

})

// const routes = [
//     {
//       path: "/Home",
//       name: "Home",
//       component: Home,
//     },
//     {
//       path: "/about",
//       name: "About",
//       component: About,
//     },

//     {
//       path: "/3FStation",
//       name: "3FStation",
//       component: FStation,
//     },
//     {
//       path: "/HelloWorld",
//       name: "HelloWorld",
//       component: HelloWorld,
//     },

//     {
//       path: "/Empty",
//       name: "Empty",
//       component: Empty,
//     },
//     {
//       path: "/Sensory",
//       name: "Sensory2",
//       component: Sensory2,
//     },
//     {
//       path: "/test",
//       name: "test",
//       component: test,
//     },
//     {
//       path:"/Warning",
//       name: "Warning",
//       component: Warning,
//     },
//     {
//       path:"/ORForm",
//       name:"ORForm",
//       component:ORForm,
//     },
//     {
//       path:"/Personnel",
//       name:"Personnel",
//       component:Personnel,
//     },
//     {
//       path:"/Login",
//       name:"Login",
//       component:Login,
//       meta: { requiresAuth: true } // 添加 meta 字段以指示需要身份验证
// ,
//     },
//     history: createWebHistory(),

//   ];
  document.isAuth=false;
  document.isAuthAttend=false;

  router.beforeEach((to,from,next) => {
   if(to.path=="/Personnel"&& document.isAuth==false){
    next("Login");
   }else{
    next();
   }

  });


  router.beforeEach((to,from,next) => {
    if(to.path=="/Personnel_Attend" && document.isAuthAttend==false){
     next("Login_Personnel");
    }else{
     next();
    }
 
   });

  
  export default router;


