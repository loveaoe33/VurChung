<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> <img src="./assets/logo.png" alt="" width="100" height="88" class="d-inline-block align-text-top"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          
          <router-link :to="{ name: '3FStation'}">異常事件通報</router-link> 

        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>









  <HelloWorld msg= '555556555' />


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
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Apps',
  components: {
    HelloWorld,

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
</style>
