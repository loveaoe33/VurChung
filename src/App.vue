<template>
  
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> <img src="./assets/logo.png" alt="" width="100" height="88" class="d-inline-block align-text-top"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse MainNarabr" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          
          <span><i class="fa-solid fa-file icon"></i><router-link :to="{ name: 'Warning'}">異常事件通報</router-link></span>
          <span><i class="fa-solid fa-shield-halved icon" ></i><router-link :to="{name: 'Sensory2'}">感控公告專區</router-link></span>
          <span><i class="fa-solid fa-shield-halved icon" ></i><router-link :to="{name: 'Personnel'}">全院公告專區</router-link></span>
          <span><i class="fa-solid fa-user-secret icon"></i><router-link :to="{name: 'test'}">測試專區</router-link> </span>

          

        </li>
      </ul>

    </div>
  </div>
</nav>

<router-view />
<!-- <FStation/> -->






  


 <!-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </div>


<input type='button' value='test' v-on:click="querytest" class="btn btn-danger">
<label>{{ msg }}</label>
{{ myArray[1] }}
{{ userinfo.age }}
{{ info }}
<input type="text" v-model="msg" class="form-control testtext" >
     -->



</template>

<script>
import $ from "jquery"
import Sensory2 from "./components/Sensory2.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ORForm from "./components/ORForm.vue";
import FStation from "./components/FStation.vue";

export default {
  name: 'Apps',
  components: {
    Sensory2,
    HelloWorld,
    FStation,
    ORForm,
  },
  data() {
        return {
            msg: "你好vue",
            userinfo: {
                username: "张三",
                age: 20
                
            },
            myArray: [1, 2, 3, 4, 5],
            info:""

        };
    },


    methods:
  {
    test:function()
    {
      this.msg='456'
    },

   querytest:function()
   {
      alert($(".testtext").val());
   },
   DataAxios:function()

   {

// var api="Api/api/TestApi";
      //2.使用axios 进行get请求
      this.axios.get('https://127.0.0.1:44376/api/TestAPI', {
     headers: {
              
              }
  }).then((res)=>{
        //请求成功的回调函数
        this.info=res
        console.log(res)
      }).catch((err)=>{
        //请求失败的回调函数
        alert(err)
      })
   }
  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}
.MainNarabr .icon{
  padding:5px;

}
.MainNarabr a{
  padding: 5px;
  text-decoration: none;
  transition: 0.5s;
  font-weight: bolder;

  color: blue;
}
.MainNarabr a:hover{
  color: red;
  font-size: 30px;
  transition: 0.2s
}

.MainNarabr{
  font-size: 20px;
}
</style>
