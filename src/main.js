import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import Router from'./router'
import axios from 'axios'
// import Store from './store/store'
// import Vuex from 'vuex'
// import map from './modules/map'

import "bootstrap"
import "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueLoaders from 'vue-loaders';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Personnel_Attend from "./store/modules/Pesronnel_Attend";

// import DataTable from 'datatables.net-dt';
// import 'datatables.net-responsive-dt';




const store = createStore({

    state () {
        return {
          count: 0,
          UpdateBool: "false",
          msg: "vuex測試",
          userList:[{id:"1",name:"leo"},{id:"2",name:"tina"}],
          Sensory_Api_Url:"http://192.168.2.147:8080/",
          SensoryList:[],
          OneSensory:{
            sensorTitle:"",
            sensorDate:"",
            sensorKey:"",
            sensorContext:"",
            sensorEmp:"",
            url:"",
            FileUrl:"",
            QrcodeUrl:"",
          },
          Update_Article_Bool: "false",
          Personnel_Api_Url:"http://192.168.2.147:8080/",
          ArticleList:[],
          ArticleList_Session:[],
          OneArticle:{
            Upload_Check:"",
            articleClass:"",
            articleContext:"",
            articleCreate:"",
            articleEmpl:"",
            articleFileUrl:"",
            articleLock:"",
            articleLv:"",
            articleTitle:"",
            articleUrl:"",
            articleView: "",
            empClass:"",
            id:0


        },
        Employee_Login_Session:{
          id:0,
          Name:"",
          Account:"",
          Password:"",
          ArticleClass:"",
          AccountLevel:"",
          Department:"",
          CreateDate:"",
          Upload_Check:"",
      },
      jsonData : {
        "Upload_Check":"OK",
        "id":3,
        "articleClass":"全部公告",
        "articleEmpl":"黃立帆",
        "articleLv":"",
        "articleLock":"",
        "articleUrl":"1",
        "articleCreate":"2023-10-9",
        "empClass":"",
        "articleTitle":"1",
        "articleContext":"1",
        "articleFileUrl":null,
        "articleView":"test,loveaoe33_黃立帆undefined_undefined2_2"
          },
        }
      },
      
      mutations:{
        intercome(state,Paload)
        {
            state.count=state.count + Paload;
            console.log(state.count);
         
        },
        ChangeBool(state)
        {
          state.UpdateBool= "true";
        },
        ReChangeBool(state)
        {
          state.UpdateBool="false";
        },
        AllSensory(state,Sensory){
         state.SensoryList=Sensory;
        },
        OneSensorty(state,Sensory){
          state.OneSensory=Sensory;

        },
        AreaSensory(state,Sensory){
            state.SensoryList=Sensory;
        },
        DeleSensory(state,SensoryIndex)
         {
            console.log(SensoryIndex)
             state.SensoryList.splice(SensoryIndex,1)

         },
         All_Article(state,Article){  
          state.ArticleList=Article;
          state.ArticleList_Session=Article;
         },
         OneArticle(state,data){
           state.OneArticle=data;
 
         },
         Area_Article(state,Article){
             state.ArticleList=Article;
         },
         Quick_Article(state,Article){
           state.ArticleList=Article;
         },
         Quick_Article_None(state){
           state.ArticleList=state.ArticleList_Session;
         },
         DeleArticle(state,ArticleIndex)
          {
             console.log(ArticleIndex)
              state.ArticleList.splice(ArticleIndex,1)
 
          },
          VuexLogin(state,ProPs_Employee){
           state.Employee_Login_Session=ProPs_Employee;
          },
          Json_Pasre_Process(Json_Array){
           // const parsedData = JSON.parse(Json_Array);
           return Json_Array;
         }

      },
      actions:{
        Copy_Login({commit},LoginEmploye){
          commit("VuexLogin",LoginEmploye);
  
        },
      //所有文章
      PrinSensory({commit}){

        // const url = "http://192.168.2.147:8080/PostMainData";
   
  
        // axios
        //   .post(url, {})
    
        //   .then((response) => {
        //           commit("AllSensory",response);
        //   })
        //   .catch(function (error) {
        //     alert(error);
        //     alert("帶入失敗");
        //   });

        {
          axios
            .post( this.state.Sensory_Api_Url+"Sensory/PrintAllSensory"
            ,{
            })
    
            .then(function (response) {
              console.log(response.data);
              commit("AllSensory",response.data);
            })
            .catch(function (error) {
              alert(error);
              alert("帶入失敗");
              
            });
        }
      },
      //篩選文章
      PrinSensoryArea({commit},Area){
   
        axios
          .post(this.state.Sensory_Api_Url+"Sensory/QueryArea", {
            SensoryArea: Area, // 文章分類
          })
  
          .then(function (response) {
            console.log(response);
            commit("AreaSensory",response.data);
          })
          .catch(function (error) {
        
            alert(error);
     
            
          });

      },
      //文章刪除
      PrinDelete({commit},DipaObject){
      if(DipaObject.SensoryIndex && DipaObject.SensoryID!="")
      {
     
        axios
          .post(this.state.Sensory_Api_Url+"Sensory/DeleteSesory", {
            SensoryID: DipaObject.SensoryID, // 文章帳號參數
          })
  
          .then( (response)=> {
            console.log(response);
            commit("DeleSensory",DipaObject.SensoryIndex);
          
          })
          .catch(function (error) {
  
            alert(error);
            
          });

      }
      

      },
      
      //單一文章呼叫
      PrinSensoryForId({commit},SensoryID){
          axios
            .post(this.state.Sensory_Api_Url+"Sensory/QuerySensoryOne", {
              SensoryID: SensoryID, // 文章帳號參數
            })
    
            .then(function (response) {
              console.log(response);
              commit("OneSensorty",response.data[0]);
            })
            .catch(function (error) {
              this.EmpResAccount = "";
              alert(error);
              
            });
        
      },

      Prin_Article({commit}){   
  
        axios
          .post(this.state.Personnel_Api_Url+"Personnel/Print_Article", {
            EmployeeObject:`${this.state.Employee_Login_Session.id},${this.state.Employee_Login_Session.Department}`
          })
    
          .then((response) => {

            let Parse_Json=[];
            response.data.forEach(element => {
               let Process_Json=JSON.parse(element);
               Parse_Json.push(Process_Json);
            })
        
            // let   jsonData= JSON.parse(response.data[1]); 
            // console.log("解析"+jsonData.Upload_Check);
            commit("All_Article",Parse_Json);


          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
          });



      },
      //篩選文章
      Print_Class_Aricle({commit},Area){  
        axios
          .post(this.state.Personnel_Api_Url+"Personnel/Print_Article_Class", {
            EmployeeObject: `${this.state.Employee_Login_Session.id},${this.state.Employee_Login_Session.Department},${Area}` , // 文章分類
          })
  
          .then(function (response) {
            let Parse_Json=[];
            response.data.forEach(element => {
               let Process_Json=JSON.parse(element);
               Parse_Json.push(Process_Json);
            })
            commit("Area_Article",Parse_Json);
          })
          .catch(function (error) {
        
            alert(error);
     
            
          });

      },
      //文章刪除
      Article_Delete({commit},DipaObject){
      if(DipaObject.Article_ID!="")
      {
        axios
          .post(this.state.Personnel_Api_Url+"Personnel/Delete_Article", {
            Article_ID: `${DipaObject.Article_ID},${DipaObject.PassCode}`, // 文章帳號參數
          })
  
          .then( (response)=> {
            console.log(response);
            commit("DeleArticle",DipaObject.Article_Index);
          
          })
          .catch(function (error) {
  
            alert(error);
            
          });

      }
      

      },
      
      //單一文章呼叫
      Prin_Article_ForId({commit},Article_ID){
    
          axios
            .post(this.state.Personnel_Api_Url+"Personnel/One_Article", {
              Article_ID:`${Article_ID},${this.state.Employee_Login_Session.Account},${this.state.Employee_Login_Session.Name}` , // 文章帳號參數
            })
    
            .then(function (response) {
              console.log(response.data[0])
              commit("OneArticle",response.data[0]);
            })
            .catch(function (error) {
              alert(error);
              
            });
        
      },
            //快搜
            Quick_Search({commit},Quick_String){
    
                axios
                  .post(this.state.Personnel_Api_Url+"Personnel/Quick_Search", {
                    EmployeeObject:`${this.state.Employee_Login_Session.id},${Quick_String}`
                  })
          
                  .then(function (response) {
               
          

                    if(response.data== '')
                    {
                      commit("Quick_Article_None");


                    }else
                    {
                      let Parse_Json=[];
                      response.data.forEach(element => {
                         let Process_Json=JSON.parse(element);
                         Parse_Json.push(Process_Json);
                      })
                      commit("Quick_Article",Parse_Json);

                    }
                  })
                  .catch(function (error) {
                    alert(error);
                    
                  });
              
            }

    
    },
      modules:{
        Personnel_Attend,
      },
      

})

const $=require('jquery')
window.$=$;
var app =createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);
app.config.globalProperties.axios=axios
app.use(Router).use(VueSweetalert2).use(VueLoaders).use(store).mount('#app')




