// store/modules/userModule.js
import axios from 'axios'

const state = {
    // 模組的狀態
    Attend_Api_Url:"http://192.168.2.147:8080/AttendController/",
    user: null,
    DepartMent: ["1hird item","2hird item","3hird item","4hird item","5hird item","6hird item","7hird item","8hird item","9hird item",],    //部門
    Employee_List:["1hird item","2hird item"],   //部門員工資料
    Appli_List:[],      //申請列表
    Report_List:[],      //報表輸出
    Employee_Object:{    //員工處理物件
      Emp_ID:"",
      Password:"",
      Emp_Name:"",
      DepartMent_Key:"",
      Account_Lv:"",
      Create_Name:"",
    },
    Login_Object:{    //登入物件
      Emp_ID:"",
      Emp_Name:"",
      Department_Key:"",
      Account_Lv:0,
    },

    Appli_Object:{   //申請處理物件
      
    },
    Attend_Object:{ //審核處理物件
      Attend_Key:"",
      ForAttend_key:"",
      Attend_Mark:"",
      Appli_Id:"",
      Attend_State:"",
      Manager:"",
      Time_Pon_Mark:"",
      Time_Log_Key:"",
      Time_Event:"",
      Appli_Time:"",


    },



  };
  
  const mutations = {
    // 模組的 mutations
    SET_USER(state, user) {
      state.user = user;
    },
    SET_Department(state, DepartMent) {
      state.DepartMent.push(DepartMent) ;
    },
    SET_Department_Employee(state, DepartMent_Employee) {
      state.Employee_List.push(DepartMent_Employee) ;
    },
  };
  
  const actions = {
    // 模組的 actions
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },


    // 初始化部門
    getDepartment({ commit }) {
      {
        axios
          .post( this.state.Attend_Api_Url+"Init"
          ,{
          })
  
          .then(function (response) {
            console.log(response.data);
            commit('SET_Department', response);
          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
            
          });
      }

    },

    
    setDepartment(DepartMent) {
      {
        axios
          .post( this.state.Attend_Api_Url+"Insert_Department"
          ,{DepartMent: DepartMent,
          })
  
          .then(function (response) {
            console.log(response);
            this.getDepartment_Employee(); //重新呼叫
          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
            
          });
      }

    },

    // admin帶入員工
    getDepartment_Employee({ commit }) {
      {
        if(this.Login_Object.Account_Lv==0 || this.Login_Object.Account_Lv==1){
          axios
          .post( this.state.Attend_Api_Url+"getEmployee"
          ,{    Emp_ID: this.Login_Object.Emp_ID, // 文章帳號參數

          })
  
          .then(function (response) {
            console.log(response.data);
            commit('SET_Department_Employee', response);
          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
            
          });
        }

      }

    },


    setDepartment_Employee() {
      {
        if(this.Login_Object.Account_Lv==0 || this.Login_Object.Account_Lv==1){
          axios
          .post( this.state.Attend_Api_Url+"setEmployee"
          ,{    Emp_Object: this.Employee_Object, // 員工物件
          })
  
          .then(function (response) {
            console.log(response.data);
            this.getDepartment_Employee();
          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
            
          });
        }

      }

    },
    


  };
  
  const getters = {
    // 模組的 getters
    getUser: state => state.user,
  };
  
  export default {
    namespaced: true, // 設置為true表示啟用命名空間
    state,
    mutations,
    actions,
    getters,
  };
  