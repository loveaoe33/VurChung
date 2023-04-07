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

// import DataTable from 'datatables.net-dt';
// import 'datatables.net-responsive-dt';




const store = createStore({

    state () {
        return {
          count: 0,
          UpdateBool: "false",
          msg: "vuex測試",
          userList:[{id:"1",name:"leo"},{id:"2",name:"tina"}],
          SensoryList:[],
          OneSensory:{
            sensorTitle:"",
            sensorDate:"",
            sensorKey:"",
            sensorContext:"",
            sensorEmp:"",
            senSoryUrl:"",
            senSoryFile:"",
            senSoryQrcode:"",
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

         }


      },
      actions:{
      
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
          const url = "http://localhost:8080/Sensory/PrintAllSensory";
          axios
            .post(url,{
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
        const url = "http://localhost:8080/Sensory/QueryArea";
        axios
          .post(url, {
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
        const url = "http://localhost:8080/Sensory/DeleteSesory";
        axios
          .post(url, {
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
    
        const url = "http://localhost:8080/Sensory/QuerySensoryOne";
          axios
            .post(url, {
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
        
      }
    
    },
      modules:{},
      

})

const $=require('jquery')
window.$=$;
var app =createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);
app.config.globalProperties.axios=axios
app.use(Router).use(VueSweetalert2).use(VueLoaders).use(store).mount('#app')




