import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import Router from'./router'
import axios from 'axios'
// import Store from './store/store'
// import Vuex from 'vuex'
// import map from './modules/map'


import "jquery"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueLoaders from 'vue-loaders';



const store = createStore({

    state () {
        return {
          count: 0,
          UpdateBool: "false",
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
        }
      },
      actions:{},
      modules:{},

})

const $=require('jquery')
window.$=$;
var app =createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);
app.config.globalProperties.axios=axios
app.use(Router).use(VueSweetalert2).use(VueLoaders).use(store).mount('#app')




