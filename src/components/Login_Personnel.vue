<template>
  <div class="overlay">
    <!-- LOGN IN FORM by Omar Dsoky -->
    <div class="form">
      <!--   con = Container  for items in the form-->
      <div class="con">
        <!--     Start  header Content  -->
        <header class="head-form">
          <h2>Log In</h2>
          <!--     A welcome message or an explanation of the login form -->
          <p>登入您的人資帳號</p>
        </header>
        <!--     End  header Content  -->
        <br />
        <div class="field-set">
          <!--   user name -->
          <span class="input-item">
            <i class="fa fa-user-circle"></i>
          </span>
          <!--   user name Input-->
          <input
            class="form-input"
            id="txt-input"
            type="text"
            v-model="LoginObject.Account"
            placeholder="@UserName"
            required
          />
          <br />
          <!--   Password -->
          <span class="input-item">
            <i class="fa fa-key"></i>
          </span>
          <!--   Password Input-->
          <input
            class="form-input"
            type="password"
            v-model="LoginObject.Password"
            id="pwd"
            name="@password"
            required
          />

          <!--      Show/hide password  -->
          <span>
            <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
          </span>

          <br />
          <!--        buttons -->
          <!--      button LogIn -->
          <button class="Style_button" @click="checkAuthentication">
            Log In
          </button>
        </div>

        <!--   other buttons -->
        <div class="other">
          <!--      Forgot Password button-->
          <button class="btn submits frgt-pass">Forgot Password</button>
          <!--     Sign Up button -->
          <button class="btn submits sign-up">
            Sign Up
            <!--         Sign Up font icon -->
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </button>
          <!--      End Other the Division -->
        </div>

        <!--   End Conrainer  -->
      </div>

      <!-- End Form -->
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";

export default {
  name: "Login_Personnel",
  components: {},
  data() {
    return {
      Personnel_Api_Url:this.$store.state.Personnel_Attend.Attend_Api_Url,

      LoginObject: {
        Account: "",
        Password: "",
      },
    };
  },
  created() {
    // alert("請先登入使用者");
  },

  methods: {
    StringProcess:function(Depart){
      let index=Depart.idnexOf("_")
      if(index!= -1){
        let textBeforeUnderscore = Depart.substring(0, index); // 使用 substring() 方法
        return textBeforeUnderscore;
      }
    },
    checkAuthentication: function () {
      console.log(this.LoginObject);
      if (this.LoginObject.Account == "" || this.LoginObject.Password == "") {
        this.$swal("不得為空!");
      } else {
        axios
          .post(this.Personnel_Api_Url + "Login_Employee", {
            Login_Object:this.LoginObject
          })

          .then((response) => {
            console.log(response.data);
            if (response.data != "OK" || response.data != null) {
              // 用户已认证
              // 继续执行你的逻辑
              console.log("000"+response.data.Emp_ID);
              this.$router.push({
                name: "Personnel_Attend",
                query: {
                  Emp_ID: response.data.Emp_ID,
                  Emp_Name: response.data.Emp_Name,
                  Department_Key:response.data.Department_Key,
                  Account_Lv:response.data.Account_Lv,
                  Last_Time: response.data.Last_Time,
                  Special_Date: response.data.Special_Date,   
                },
              });
              document.isAuthAttend = true;

            } else {
              this.$swal.fire("帳號或密碼錯誤");
            }
          })
          .catch(function (error) {
            alert(error + "資料庫錯誤請聯繫");
          });
      }
    },
  },
};
</script>
    
    <style>
/* Fonts Form Google Font ::- https://fonts.google.com/  -:: */
@import url("https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur");
/* End Fonts */
/* Start Global rules */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* End Global rules */

/* Start body rules */
body {
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;

  font-family: "Vibur", cursive;
  /*   the main font */
  font-family: "Abel", sans-serif;
  opacity: 0.95;
  /* background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%); */
}

/* |||||||||||||||||||||||||||||||||||||||||||||*/
/* //////////////////////////////////////////// */

/* End body rules */

/* Start form  attributes */
.form {
  width: 450px;
  min-height: 500px;
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 2%;
  background-image: linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%);
}
/* form Container */
.form .con {
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;
  justify-content: space-around;

  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;

  margin: 0 auto;
}

/* the header form form */
header {
  margin: 2% auto 10% auto;
  text-align: center;
}
/* Login title form form */
header h2 {
  font-size: 250%;
  font-family: "Playfair Display", serif;
  color: #ece74b;
}
/*  A welcome message or an explanation of the login form */
header p {
  letter-spacing: 0.05em;
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */

.input-item {
  background: #fff;
  color: #333;
  padding: 14.5px 0px 15px 9px;
  border-radius: 5px 0px 0px 5px;
}

/* Show/hide password Font Icon */
#eye {
  background: #fff;
  color: #333;

  margin: 5.9px 0 0 0;
  margin-left: -20px;
  padding: 15px 9px 19px 0px;
  border-radius: 0px 5px 5px 0px;

  float: right;
  position: relative;
  right: 1%;
  top: -0.2%;
  z-index: 5;

  cursor: pointer;
}
/* inputs form  */
input[class="form-input"] {
  width: 240px;
  height: 50px;

  margin-top: 2%;
  padding: 15px;

  font-size: 16px;
  font-family: "Abel", sans-serif;
  color: #5e6472;

  outline: none;
  border: none;

  border-radius: 0px 5px 5px 0px;
  transition: 0.2s linear;
}
input[id="txt-input"] {
  width: 250px;
}
/* focus  */
input:focus {
  transform: translateX(-2px);
  border-radius: 5px;
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */

/* input[type="text"] {min-width: 250px;} */
/* buttons  */
.Style_button {
  display: inline-block;
  color: #252537;

  width: 280px;
  height: 50px;

  padding: 0 20px;
  background: #fff;
  border-radius: 5px;

  outline: none;
  border: none;

  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;

  margin: 7% auto;
  letter-spacing: 0.05em;
}
/* Submits */
.submits {
  width: 48%;
  display: inline-block;
  float: left;
  margin-left: 2%;
}

/*       Forgot Password button FAF3DD  */
.frgt-pass {
  background: transparent;
}

/*     Sign Up button  */
.sign-up {
  background: #b8f2e6;
}

/* buttons hover */
button:hover {
  transform: translatey(3px);
  box-shadow: none;
}

/* buttons hover Animation */
button:hover {
  animation: ani9 0.4s ease-in-out infinite alternate;
}
@keyframes ani9 {
  0% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
    