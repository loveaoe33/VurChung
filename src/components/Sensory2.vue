<template>
<div class="ImagePush">
  <!-- 轮播 -->
<div id="demo" class="carousel slide carouselArea" data-bs-ride="carousel">
 
 <!-- 指示符 -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<!-- 轮播图片 -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img  src="./jp3.jpg" class="d-block" >
  </div>
  <div class="carousel-item">
    <img  src="./jp4.jpg" class="d-block" >
  </div>
  <div class="carousel-item">
    <img  src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" class="d-block" style="width:100%">
  </div>
</div>

<!-- 左右切换按钮 -->
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
  </div>


<div class="TotalContext">
  
  <nav id ="siderbar">
    <p>疫情發布站</p>
    <ul>
  
    <li class="liTitle">國/內外疫情 </li>
<div class="form-check">
  <input class="form-check-input inside" type="radio" value="國內疫情" v-model="SensoryObject.ContextKey" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    國內疫情
  </label>
</div>
<div class="form-check">
  <input class="form-check-input outside" type="radio" value="國外疫情" name="flexRadioDefault" v-model="SensoryObject.ContextKey" id="flexRadioDefault2" >
  <label class="form-check-label" for="flexRadioDefault2">
    國外疫情
  </label>
</div>



<div class="ContextextArea">
    <li class="liTitle">標頭  <i class="fa-sharp fa-solid fa-key IconImage"></i></li>
    <input type="textbox" class="form-control Contextext"  v-model="SensoryObject.ContextTitle" id="FormTitle"  placeholder="Enter Title"><br>
    <!-- <small id="emailHelp" class="form-text text-muted">文章標題請輸入</small><br> -->
    <li class="liTitle">內容 <i class="fa-sharp fa-solid fa-comments IconImage"></i></li>
    <textarea class="form-control Contextext" id="exampleFormControlTextarea1" v-model="SensoryObject.Context" rows="15"></textarea><br>
    <li class="liTitle">日期 <i class="fa-sharp fa-solid fa-trademark IconImage"></i></li>
    <input type="textbox" class="form-control Contextext" v-model="SensoryObject.ContextDate" readonly id="FormDate" ><br>
    <li class="liTitle">發布者 <i class="fa-sharp fa-solid fa-user IconImage"></i></li>
    <select class="form-select EmpSelect"  v-model="SensoryObject.ContextEmp" aria-label="Default select example">
  <option selected value="楊珉珊">感控：楊珉珊</option>
  <option  value="黃立帆">資訊：黃立帆</option>

</select>
</div>
    </ul>
    <button id="PostContext" @click="POSTSensory"  class="btn btn-danger PostContext">新增文章</button>
  </nav>
     <div class="ArticleContext">
      <button id="collapse-btn" class="collapse-btn" @click="SlibarFunction">
      <i class="fa-sharp fa-solid fa-pen"></i>
    </button>
    <p>{{ SensryTitle }}</p>

      <div class="insideArea"> 
  <select class="form-select form-select-sm SelectItem" @change="SelectOnChange($event.target.value)" aria-label=".form-select-sm example">
  <option value="所有疫情" selected>所有疫情</option>
  <option value="國內疫情">國內疫情</option>
  <option value="國外疫情">國外疫情</option>
</select>

<table id="SensoryView"  class="table" v-bind:class="{ActiveTable:ViewBoolT,HideTable:ViewBoolF}">
      <thead>
        <th class="ViewTitle" style="color: red;"><button class=" PreButton" @click="PrePage"><i class="fa-solid fa-xmark"></i></button>疫情分類:{{ OneSensoryList.sensorKey}}-日期{{ OneSensoryList.sensorDate}}-抬頭:{{ OneSensoryList.sensorTitle}}</th>
        <th ></th>
        
      </thead>
      <tbody>
        <tr>
         <td><textarea class="form-control Contextext" id="exampleFormControlTextarea1" v-model="OneSensoryList.sensorContext" rows="15" ></textarea></td>
        </tr>
      </tbody>
      <tfood>
     發布人:{{ OneSensoryList.sensorEmp }}
      </tfood>

        </table>
        
        <table id="SensoryContext" class="table " v-bind:class="{ActiveSensoryContextTable:ViewBoolF,HideSensoryContextTable:ViewBoolT}">

          <thead>
            <tr> 
                <th>分類</th>
                <th>抬頭</th>
                <th>日期</th>
                <th>發布者</th>
                <th>查看</th>
                <th>刪除</th>

            </tr>
        </thead>
        

        <tbody>
        <tr v-for="(Sensory,index) in SensoryList" :key="index">

        <td>{{ Sensory.sensorKey }}</td>

        <td>{{ Sensory.sensorTitle }}</td>

        <td>{{ Sensory.sensorDate }}</td>

        <td>{{ Sensory.sensorEmp }}</td>
        <td><input type="button"  id="{{ Sensory.id }}" @click="ViewSensory(Sensory.id)" class="btn btn-primary ViewButton" value="查看"></td>
        <td><input type="button"  id="{{ Sensory.id }}"  @click="DeleSensory(index,Sensory.id)"  class="btn btn-danger ViewButton" value="刪除"></td>

        </tr>
         </tbody>
        </table>
  </div>


       <div class="outsideArea"></div>
    </div>
  </div>






  </template>
  
  <script>
import { Carousel, Slide } from 'vue-carousel';
import { mapState } from 'vuex';
import axios from 'axios';
// import { computed } from 'vue';
// import { mapMutations, mapState } from 'vuex';


  export default {
    name: 'Sensory2',
    components: {
 Carousel,
        Slide
    },
    data() {
          return {
          ViewBoolT:true,
          ViewBoolF:false,
          SensryTitle:"國內外疫情專區",
          SensoryObject:{
          ContextKey:"",
          ContextTitle:"",
          Context:"",
          ContextDate:"",
          ContextEmp:"",
          }

          };
      },
  created(){
    this.PrintAllSensort();  
    const DateObject=new Date();
    let TDay=DateObject.getDate();
    let TMount= DateObject.getMonth();
    let TYear=DateObject.getFullYear();
    this.SensoryObject.ContextDate=`${TYear}-${TMount+1}-${TDay}`
  },
  
      methods:
    {
      SlibarFunction:function(){
      const Dom=document.getElementById("siderbar");
      Dom.classList.toggle("active");
      const DomBtn=document.getElementById("collapse-btn")
      DomBtn.classList.toggle("fa-solid fa-bars");
      
    },
    PrintAllSensort:function(){
      this.$store.dispatch("PrinSensory","");
    },
    InsertSensory:function(){
      for(let [key,value] of Object.entries(this.SensoryObject)){
          if(value==""){
            switch(key){
              case "ContextKey":
              this.$swal.fire("新增失敗-分類不可為空");
              break;
              case "ContextTitle":
              this.$swal.fire("新增失敗-標頭不可為空");
              break;
              case "Context":
              this.$swal.fire("新增失敗-內容不可為空");
              break;
              case "ContextDate":
              this.$swal.fire("新增失敗-日期不可為空");
              break;
              case "ContextEmp":
              this.$swal.fire("新增失敗-輸入人不可為空");
              break;
            }
            return false;
          }
        }
        return true;

    },
    SelectOnChange:function(Area){
     if(Area=="國外疫情"){
     this.SensryTitle="國外疫情"
     }else if(Area=="國內疫情"){
      this.SensryTitle="國內疫情"
     }else
     {
      this.SensryTitle="國內外疫情"
     }
     this.$store.dispatch("PrinSensoryArea",Area)
  },
  ViewSensory:function(SensoryID){
    this.ViewBoolT=false;
    this.ViewBoolF=true;
this.$store.dispatch("PrinSensoryForId",SensoryID);
  },
    DeleSensory:function(SensoryIndex,SensoryID){
       console.log("id:"+SensoryID);
       const DipaObject={};
       DipaObject.SensoryIndex=SensoryIndex;
       DipaObject.SensoryID=SensoryID;
       console.log(DipaObject);
    // alert(SensoryIndex+SensoryID);
       this.$store.dispatch("PrinDelete",DipaObject);
  },


    POSTSensory:function(){
      const url="http://localhost:8080/Sensory/PostData";
      let InserCheck=this.InsertSensory();
       if(InserCheck==true)
       {
        console.log(this.SensoryObject);
        axios
          .post(url, {
            SensryPOST: this.SensoryObject, 
          })
           
          .then((response) => {
            Object.assign(this.$data, this.$options.data());
            console.log(response);
            this.$swal.fire("文章新增成功");
            this.PrintAllSensort();

          })
          .catch(function (error) {
            this.$swal.fire(error+"文章新增失敗");
          });


       }
    },
    PrePage:function(){
      this.ViewBoolT=true;
    this.ViewBoolF=false;
    },
    
    test:function(){ 
        alert("123");
      },
      test2(){
       return "123";

      }
  },
  
  computed:
  {
    /*mapState可以簡化code*/
    ...mapState({
      Messagetest:state=>state.msg,
      UserTest:state=>state.userList,
      SensoryList:state=>state.SensoryList,
      OneSensoryList:state=>state.OneSensory,
    })

    /*更縮減寫法
    ...mapState(['msg','userList'])
    */

    // Messagetest:function(){
    //   return this.$store.state.msg;
    // },

    // UserTest:function(){
    //   return this.$store.state.userList;
    // }
  }
}
  
  
  
  </script>
  
  
  <style>

  .TotalContext{
    display: flex;
  }
  .carouselArea img{
    width: 100%;
    height: 500px;
  }
  #siderbar{
    position: relative;

    background-color: rgb(30, 31, 66);
    width: 500px;
    height: 2000px;
    color: white;
    transition: 0.4s;
  }

  #siderbar p{
    text-align: center;
    font-size:30px;
    font-style: italic;
  }
  #siderbar ul li a{
   display: block;
  }
  #siderbar.active {
    margin-left:-500px;
  }

  .liTitle{
    font-size:20px;
    font-style:normal;

  }

  .ContextextArea{
    margin: 10px 50px 20px 0;
  }
  
 .IconImage{
  float: left;
 }


  .collapse-btn{
    padding: 15px;
    position:absolute;
    background-color:  rgb(30, 31, 66);
    border: none;
    color: white;
    width:50px;
    top: 0%;
    left: 0px;

  }


  
  .collapse-btn:hover{
    background-color: rgb(83, 83, 99);
    transition: 0.5s;
  }

  .PostContext{
    text-align: center;
    position: absolute;
    top: 45%;
    left: 65px;
    width: 60%;
    font-size:30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  }

  .PostContext:hover{
   width: 30%;
   left: 125px;
   transition: 0.5s;
   font-size:20px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   border-radius: 5px;
  


  }

  .IconImage{
 
    left: 100%;
  }

.ArticleContext{
  position: relative;
  width: 100%;
  height: 2000px;
  color: rgb(213, 216, 40);
   

}
 .ArticleContext p{
  
  text-align: center;
  font-size: 60px;
  font-style: oblique;
 }

 .insideArea{
  
  margin: 0px 10px 20px 20px;
  display: inline;
  width: 100%;
  opacity: 1;
  transition: 0.5s;
  font-size: 30px;


 }

 .insideArea .SelectItem
 {
  top:0%;
  width: 10%;
  font-size: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: rgb(220, 220, 226);
  border-block-color:rgb(94, 133, 192);
  margin: 0px 10px 20px 20px;

 }

 /* .insideArea:hover{
  opacity: 0;
  transition: 0.5s;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
 } */

 .outsideArea{
  display: inline;
  position:relative;
  width: 100%;
  background-color: rgb(44, 54, 51);
 }


  .insideArea{
    /* background-color:black; */
    
  }


  

@media(max-width: 600px){
  #siderbar {
    margin-left:-500px;
  }

  #siderbar.active {
    margin-left:0px;
  }

  .ArticleContext p{
  text-align: center;
  font-size: 30px;
  font-style: oblique;
 }
}
 .ViewTitle .PreButton{
  font-size: 20px;
  border: 0;
}

.ArticleContext .ActiveTable{
  
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  opacity: 0;
  font-size: 5px;;
  transition: 1s;
  z-index: -100;


}
.ArticleContext .HideTable
{
  position: absolute;
    top: 10%;
    left: 0px;
    width: 100%;
 opacity: 1;
 transition: 1s;

}

.ArticleContext .ActiveSensoryContextTable{
  position: absolute;
    top: 35%;
    left: 0px;
    width: 100%;
 transition: 1s;

}

.ArticleContext .HideSensoryContextTable {
  position: absolute;
    top: 10%;
    left: 0px;
    width: 100%;
 transition: 1s;
}

.HideTable tfood{
 font-size: 20px;
 font-family:Arial, Helvetica, sans-serif
}
  </style>
  