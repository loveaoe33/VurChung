// store/modules/userModule.js
import axios from 'axios'
import Swal from "sweetalert2";

// import { createStore } from 'vuex';


// const Personnel_Attend = createStore({

//   state () {
//     return{
//     // 模組的狀態
//     Attend_Api_Url:"http://localhost:8080/AttendController/",
//     user: null,
//     DepartMent: ["123"],    //部門
//     Employee_List:["1hird item","2hird item"],   //部門員工資料
//     Appli_List:[],      //申請列表
//     Report_List:[],      //報表輸出
//     Employee_Object:{    //員工處理物件
//       Emp_ID:"",
//       Password:"",
//       Emp_Name:"",
//       DepartMent_Key:"",
//       Account_Lv:"",
//       Create_Name:"",
//     },
//     Login_Object:{    //登入物件
//       Emp_ID:"E0010",
//       Emp_Name:"黃立帆",
//       Department_Key:"資訊部",
//       Account_Lv:0,
//       Last_Time:5,
//     },

//     Appli_Object:{   //申請處理物件
      
//     },
//     Attend_Object:{ //審核處理物件
//       Attend_Key:"",
//       ForAttend_key:"",
//       Attend_Mark:"",
//       Appli_Id:"",
//       Attend_State:"",
//       Manager:"",
//       Time_Pon_Mark:"",
//       Time_Log_Key:"",
//       Time_Event:"",
//       Appli_Time:"",


//     },


//   }
// },

// mutations:{
//   // 模組的 mutations
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   GET_Department(state, DepartMent) {
    

//     console.log(DepartMent);
//   },
//   GET_Department_Employee(state, DepartMent_Employee) {
//     state.Employee_List.push(DepartMent_Employee) ;
//   },
// },

//  actions:{
//   // 模組的 actions
//   setUser({ commit }, user) {
//     commit('SET_USER', user);
//   },


//   // 初始化部門
//   getDepartment({ commit }) {
//     {
//       axios
//         .post(this.state.Attend_Api_Url+"Init"
//         ,{
//         })

//         .then(function (response) {
//           commit('GET_Department', response.data);
//         })
//         .catch(function (error) {
//           alert(error);
//           alert("帶入失敗");
          
//         });
//     }

//   },

  
//   setDepartment(DepartMent) {
//     {
//       axios
//         .post( this.state.Attend_Api_Url+"Insert_Department"
//         ,{DepartMent: DepartMent,
//         })

//         .then(function (response) {
//           console.log(response);
//           this.getDepartment_Employee(); //重新呼叫
//         })
//         .catch(function (error) {
//           alert(error);
//           alert("帶入失敗");
          
//         });
//     }

//   },

//   // admin帶入員工
//   getDepartment_Employee({ commit }) {
//     {
//       if(this.Login_Object.Account_Lv==0 || this.Login_Object.Account_Lv==1){
//         axios
//         .post( this.state.Attend_Api_Url+"getEmployee"
//         ,{    Emp_ID: this.Login_Object.Emp_ID, // 文章帳號參數

//         })

//         .then(function (response) {
//           console.log(response.data);
//           commit('GET_Department_Employee', response);
//         })
//         .catch(function (error) {
//           alert(error);
//           alert("帶入失敗");
          
//         });
//       }

//     }

//   },


//   setDepartment_Employee() {
//     {
//       if(this.Login_Object.Account_Lv==0 || this.Login_Object.Account_Lv==1){
//         axios
//         .post( this.state.Attend_Api_Url+"setEmployee"
//         ,{    Emp_Object: this.Employee_Object, // 員工物件
//         })

//         .then(function (response) {
//           console.log(response.data);
//           this.getDepartment_Employee();
//         })
//         .catch(function (error) {
//           alert(error);
//           alert("帶入失敗");
          
//         });
//       }

//     }

//   },
  

 
// },
// modules:{
// },



// });

const state = {
    // 模組的狀態
    Attend_Api_Url:"http://localhost:8080/AttendController/",
    user: null,
    TabelState:"default",
    DepartMent: ["123"],    //部門
    Employee_List:["1hird item","2hird item"],   //部門員工資料
    Appli_List:[],      //申請列表
    Report_List:[],      //報表輸出
    Announcement:[], //布告欄
    Employee_Object:{    //員工處理物件
      Emp_ID:"",
      Password:"",
      Emp_Name:"",
      DepartMent_Key:"",
      Account_Lv:"",
      Create_Name:"",
    },
    Login_Object:{    //登入物件
      Emp_ID:"E0010",
      Emp_Name:"黃立帆",
      Department_Key:"資訊部",
      Account_Lv:0,
      Last_Time:5,
    },

    Appli_Object:{   //申請處理物件
      Admin_Lv:0,
      Export_Depart:"資訊部",
      Export_State:"",
      Export_Swicth:"",
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
    REMOVE_List(state,Index){
      
      let Array_Number=state.Appli_List.findIndex(item => item.id == Index);
      (Array_Number!==-1)?state.Appli_List.splice(Array_Number,1):alert("索引刪除錯誤");
    },
    GET_Department(state, DepartMent) {
      state.DepartMent=DepartMent;
   
    },
    GET_Announcement(state, Announcement){
      state.Announcement=Announcement;
      // console.log(state.Announcement);

    },
    GET_Department_Employee(state, DepartMent_Employee) {
      if(DepartMent_Employee=="查無員工資料"){
        state.Employee_List=["查無員工資料"];

      }
      else{
        state.Employee_List=DepartMent_Employee ;

      }
    },
    GET_Appli_All(state, Appli_Date) {
      if(Appli_Date=="查無相關申請"){
        state.Appli_List=["查無員工資料"];
      }
      else{
        state.Appli_List=Appli_Date ;
      }
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
          .post(state.Attend_Api_Url+"Init"
          ,{
          })
  
          .then(function (response) {
            commit('GET_Department', response.data);
          })
          .catch(function (error) {
            alert(error);
            alert("帶入失敗");
            
          });
      }

    },

    //新增部門
    setDepartment(DepartMent) {
      {
        axios
          .post( state.Attend_Api_Url+"Insert_Department"
          ,{DepartMent: DepartMent,
          })
  
          .then(function (response) {
            Swal.fire("新增成功", "success");
            console.log(response);
          })
          .catch(function (error) {
            Swal.fire(error);
            
          });
      }

    },

        // 初始化布告欄
        getAnnouncement({ commit }) {
          {
            axios
              .post(state.Attend_Api_Url+"Announcement_List"
              ,{
              })
      
              .then(function (response) {
                if(response.data==null)
                {
                  Swal.fire("公告取得錯誤");
                }else{
                  commit('GET_Announcement', response.data);

                }
              })
              .catch(function (error) {
                Swal.fire(error);              
              });
          }
    
        },

    



    // admin帶入員工
    getDepartment_Employee({ commit },Depart_Key) {
      {
      
        if(state.Login_Object.Account_Lv==0 || state.Login_Object.Account_Lv==1){
          axios
          .post( state.Attend_Api_Url+"Get_Department_Employee"
          ,{    Depart_Key_POST: Depart_Key, // 

          })
  
          .then(function (response) {
            if(response.data=="none"){
              commit('GET_Department_Employee', "查無員工資料");

            }else{
              commit('GET_Department_Employee', response.data);

            }
          })
          .catch(function (error) {
            Swal.fire(error);
          });
        }

      }

    },

    //取得所有申請
    getAppli_All({ commit },State,Switch) {
      {
        state.Appli_Object.Export_State=State;
        state.Appli_Object.Export_Swicth=Switch;
        state.Appli_Object.Admin_Lv=state.Login_Object.Account_Lv;
        state.Appli_Object.Export_Depart=state.Login_Object.Department_Key;
        if(state.Login_Object.Account_Lv==0 || state.Login_Object.Account_Lv==1){
          axios
          .post( state.Attend_Api_Url+"Admin_Search_TimeData"
          ,{    
            Appli_Object_Post: state.Appli_Object, // 
          })
  
          .then(function (response) {
            if(response.data==null){
              commit('GET_Appli_All', "查無相關申請");

            }else{
              commit('GET_Appli_All', response.data);
              console.log(state.Appli_List);

            }
          })
          .catch(function (error) {
            Swal.fire(error);
          });
        }

      }

    },
   //員工取得申請
    getAppli_Member({ commit },Member_Object_Post) {
      {

        axios
        .post( state.Attend_Api_Url+"Member_Search_TimeData"
        ,{    
          Member_Object:Member_Object_Post,
        })

        .then(function (response) {
          console.log(response);

          if(response.data==null){
            commit('GET_Appli_All', "查無相關申請");

          }else{
            commit('GET_Appli_All', response.data);
            console.log(state.Appli_List);

          }
        })
        .catch(function (error) {
          Swal.fire(error);
        });

      }

    },



       //員工取得歷史申請
       getDate_Appli({ commit },Member_Object_Post) {
        {
  
          axios
          .post( state.Attend_Api_Url+"SearchEmployee_TimeData_Appli"
          ,{    
            Member_Object:Member_Object_Post,
          })
  
          .then(function (response) {
            console.log(response);
            if(response.data=='false'){
              Swal.fire("伺服器發生錯誤請洽詢");

            }
            else if(response.data=='找無資料'){
              commit('GET_Appli_All', "查無相關申請");
  
            }else{
              commit('GET_Appli_All', response.data);
              console.log(state.Appli_List);
  
            }
          })
          .catch(function (error) {
            Swal.fire(error);
          });
  
        }
  
      },


       //員工取得歷史審核
       getDate_Review({ commit },Member_Object_Post) {
      {
        axios
        .post( state.Attend_Api_Url+"SearchEmployee_TimeData_Review"
        ,{    
          Member_Object:Member_Object_Post,
        })

        .then(function (response) {
          console.log(response.data);

          if(response.data=="找無資料"){
            commit('GET_Appli_All', "查無相關申請");

          }else{
            commit('GET_Appli_All', response.data);
            console.log(state.Appli_List);

          }
        })
        .catch(function (error) {
          Swal.fire(error);
        });

      }

    }, 
       //取得所有log
       getDepart_DateAllLog({ commit },Member_Object_Post) {
      { 
        let url=state.Attend_Api_Url;
        if(Member_Object_Post.Depart!=="")
        {
          url=url+"SearchDepart_TimeData_Log";
        }else{
          url=url+"SearchDepart_TimeData_AllLog";
        }
        axios
        .post( url
        ,{    
          Member_Object:Member_Object_Post,
        })

        .then(function (response) {
          console.log(response);

          if(response.data=="找無資料"){
            commit('GET_Appli_All', "查無相關申請");

          }else{
            commit('GET_Appli_All', response.data);
            console.log(state.Appli_List);

          }
        })
        .catch(function (error) {
          Swal.fire(error);
        });

      }

    },
    //審核申請
    Review_Appli: async ({ commit }, Review_Data) => {
      try {
        console.log(Review_Data.value);
        const response = await axios.post(state.Attend_Api_Url + "Attend_TimeData", {
          Attend_TimeData_Post: Review_Data.value,
        });
    
        console.log(response);
    
        if (response.data === "Error Key...") {
          Swal.fire("員工Key對應錯誤");
          return false;
        }else if(response.data =="false"){
          Swal.fire("審核失敗");
          return false;
        }else {
          Swal.fire("審核成功");
          commit('REMOVE_List', Review_Data.value.Appli_Id);
          alert(Review_Data.value.Appli_Id);
          return true;
        }
      } catch (error) {
        Swal.fire(error);
        return false;
      }
    },

        //審核取消
        Cancel_Appli: async ({ commit }, Review_Data) => {
          try {
            console.log(Review_Data.value);
            const response = await axios.post(state.Attend_Api_Url + "Cancel_Appli", {
              Attend_TimeData_Post: Review_Data.value,
            });
        
            console.log(response);
        
            if (response.data === "Sucess") {
              Swal.fire("審核取消");
              commit('REMOVE_List', Review_Data.value.Appli_Id);
              return true;
            } else {
              Swal.fire("取消失敗");
              return false;
            }
          } catch (error) {
            Swal.fire(error);
            return false;
          }
        }

  }

  const getters = {
    // 模組的 getters
    getUser: state => state.user,
  };
  
  export default {
    namespaced: true, // 添加命名空间

    state,
    mutations,
    actions,
    getters,
    };
  