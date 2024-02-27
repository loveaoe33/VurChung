<template>
  {{ Special_Object }}

  <div class="modal fade" id="SpecialModal" tabindex="-1" aria-labelledby="SpecialModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="SpecialModalLabel">特休新增</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">新增特休:</label>
            <input type="number"  v-model="Special_Object.Plus_Special" placeholder="如需修正請輸入負數"  class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">備註:</label>
            <textarea class="form-control" v-model="Special_Object.Remark" id="message-text"></textarea>
          </div>
        </form>
        <span class="Special-Employee">員工訊息:</span><br><br>
        <span class="Special-Context">
          <label>【員工代號】:</label> {{ Special_Object.Emp_Key }}<br>
          <label>【剩餘時數】:</label> {{ Special_Object.Last_Time }}<br>
          <label>【剩餘特休】:</label> {{ Special_Object.Last_Special }}<br>
          <label>【最後更新時間】:</label> {{ Special_Object.Last_UpdateTime }}<br><br>

        </span>
      
        <span class="Special-Manager">審核主管:</span><span class="Special-Context">{{ Login_Object.Emp_Name }} </span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="Special_Insert()" >新增特休</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="AnnouncementModal" tabindex="-1" aria-labelledby="AnnouncementModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AnnouncementModalLabel">公告新增</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text"  v-model="Announcement.Announcement_Title" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" v-model="Announcement.Announcement_Context" id="message-text"></textarea>
          </div>
        </form>
        <span class="Announcement-Title">已發布公告:</span><br><span v-for="(item, index) in Announcement_List"
              :key="index"><div v-if="JsonParse(item,'Create_Name')==Announcement.Emp_Name">   {{ JsonParse(item,"Announcement")  }} <button type="button" class="btn btn-primary Announcement_Delete" @click="Delete_Announcement(JsonParse(item,'id'),'Delete')" >刪除公告</button></div></span>
        <span class="Announcement-Employee">發布人:</span><span class="Announcement-Context">{{ Announcement.Emp_Name }} </span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="Save_Announcement('Insert')" >發布公告</button>
      </div>
    </div>
  </div>
</div>



  <div
    class="modal fade"
    id="DepartModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">部門新增</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          部門新增:<br /><input
            type="text"
            class="form-control"
            v-model="Depart"
            @keyup="Check_Depart()"
          /><br /><br />
          目前部門:<br />{{ Department_List }}<br /><br />
          訊息:<span style="color: red">{{ Insert_Msg }}</span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="Save_Depart"
            @click="Save_Depart"
            :disabled="Depart_Disable"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="EmpModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">員工新增</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <label class="form-check-label" for="flexRadioDefault2"
            >使用者姓名:</label
          ><input
            type="textbox"
            @keyup="Check_Emp"
            id="Employee_Name"
            class="form-control Employee_Name"
            v-model="Insert_Employee.Emp_Name"
            placeholder="姓名"
          /><br />
          <label class="form-check-label" for="flexRadioDefault2"
            >使用者帳號:</label
          ><input
            type="textbox"
            @keyup="Check_Emp"
            id="Employee_Acount"
            class="form-control Employee_Acount"
            v-model="Insert_Employee.Emp_Account"
            placeholder="帳號"
          /><br />
          <label class="form-check-label" for="flexRadioDefault2"
            >使用者密碼:</label
          ><input
            type="password"
            @keyup="Check_Emp"
            id="Employee_Password"
            class="form-control Employee_Password"
            v-model="Insert_Employee.Emp_Password"
            placeholder="密碼"
          /><br />
          <label class="form-check-label" for="flexRadioDefault2"
            >使用者權限:</label
          ><input
            type="number"
            @change="Check_Emp"
            id="Employee_Level"
            class="form-control Employee_Level"
            v-model="Insert_Employee.Emp_Lv"
            placeholder="權限等級"
          /><br />
          <label class="form-check-label" for="flexRadioDefault2"
            >使用者部門:</label
          >
          <select
            class="form-select form-select-sm SelectItem Employee_Department"
            id="Employee_Department"
            @change="Check_Emp"
            v-model="Insert_Employee.Emp_Department"
          >
            <option
              v-for="option in Department_List"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <br />
          目前資料:<br />{{ Insert_Employee }}<br /><br />
          訊息:<span style="color: red">{{ Insert_Msg }}</span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="Save_Emp"
            @click="Save_Emp"
            :disabled="Emp_Disable"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="EmpModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">部門新增</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          部門新增:<br /><input
            type="text"
            v-model="Depart"
            @keyup="Check_Depart()"
          /><br /><br />
          目前部門:<br />{{ Department_List }}<br /><br />
          訊息:<span style="color: red">{{ Insert_Msg }}</span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="Save_Depart"
            :disabled="Depart_Disable"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="HistoryModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">部門新增</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          起始日期:<br /><input
            type="date"
            id="datepicker"
            name="datepicker"
          /><br /><br />
          終點日期:<br /><input
            type="date"
            id="datepicker"
            name="datepicker"
          /><br /><br />
          訊息:<span style="color: red">{{ Insert_Msg }}</span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id="Save_Depart"
            :disabled="Depart_Disable"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="Container">
    <div class="Announcement">
      <div id="Announcement_Box">
        <div class="marquee-container">
          <div class="marquee-content">
            <div class="marquee-item"  v-for="(item, index) in Announcement_List"
              :key="index">
              {{ JsonParse(item,"Announcement") }}
            </div>
     
            <!-- 添加更多项目根据需要 -->
          </div>
        </div>
      </div>

      <h1>123</h1>
    </div>
    <div class="Left_Area">
      <div id="Left_Area_box">
        <button
          class="btn-98"
          data-bs-toggle="modal"
          data-bs-target="#EmpModal"
        >
          <span>新增員工</span>
        </button>
        <button
          class="btn-98"
          data-bs-toggle="modal"
          data-bs-target="#DepartModal"
        >
          <span>新增部門</span>
        </button>
        <button class="btn-98">
          <span>編輯員工</span>
        </button>
        <button class="btn-98" data-bs-toggle="modal" data-bs-target="#AnnouncementModal" data-bs-whatever="@mdo">

          <span>新增公告</span>
        </button>
        <button class="btn-98"  @click="Export_All_Applie">
          <span>總單位已申請</span>
        </button>
        <button class="btn-98" @click="Export_All_review">
          <span>總單位已審核</span>
        </button>

        <div id="Left_Area_Department_box">
          <ol>
            <li
              v-for="(item, index) in Department_List"
              :key="index"
              @click="DepartClick(item)"
            >
              {{ item }}
            </li>
          </ol>
        </div>

        <div id="Left_Area_Context_box">
          <ol>
            <li v-for="(item, index) in Employee_List" :key="index">
              <span v-if="item == '查無員工資料'">
                {{ item }}
              </span>
              <span v-else>
                <p>{{ JsonParse(item, "Employee") }}</p>
                <button
                  class="btn-98"
                  @click="get_EmpLst(JsonParse(item, 'Emp_Key'))"
                >
                  <span>總時數</span>
                </button>
                <button class="btn-98"  data-bs-toggle="modal" data-bs-target="#SpecialModal" data-bs-whatever="@mdo" @click="Special_Button(JsonParse(item, 'Emp_Key'))">
                  <span>新增特休</span> 
                </button>
                <button class="btn-98"  @click="Member_Appli(JsonParse(item, 'Emp_Key'))">
                  <span>總申請</span> 
                </button>
                <button class="btn-98" @click="Member_Review(JsonParse(item, 'Emp_Key'))">
                  <span>總審核</span>
                </button>
                <button class="btn-98">
                  <span>歷史</span>
                </button>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="Mid_Area">
      <div id="Mid_Area_box">
        <Table-component :fatherALert="Alert"></Table-component>

        <!-- <label class="form-check-label" for="flexRadioDefault2">使用者姓名:</label><input type="textbox" id="Employee_Name" class="form-control Employee_Name"placeholder="姓名"></br><label class="form-check-label" for="flexRadioDefault2">使用者帳號:</label><input type="textbox" id="Employee_Acount" class="form-control Employee_Acount"    placeholder="帳號"><br><label class="form-check-label" for="flexRadioDefault2">使用者密碼:</label><input type="password" id="Employee_Password" class="form-control Contextext Employee_Password"  placeholder="密碼"><br><label class="form-check-label" for="flexRadioDefault2">使用者權限:</label><input type="number" id="Employee_Level" class="form-control Contextext Employee_Level"    placeholder="權限等級"><br><label class="form-check-label" for="flexRadioDefault2">使用者部門:</label> <select class="form-select form-select-sm SelectItem Employee_Department" id="Employee_Department" ><option value="人事">人事</option><option value="行政">行政</option><option value="感控">感控</option><option value="健管">健管</option><option value="門診">門診</option><option value="放射">放射</option><option value="藥局">藥局</option><option value="櫃台">櫃台</option><option value="開刀房">開刀房</option><option value="護理部">護理部</option><option value="復健">復健</option></select> -->

        <div></div>
      </div>
    </div>
    <div class="Right_Area">
      <div id="Right_Area_Box">
        <h3>員工資料</h3>
        <br />
        <h4>
          員編: <span>{{ Login_Object.Emp_ID }}</span>
        </h4>
        <br />
        <h4>
          部門: <span>{{ Login_Object.Department_Key }}</span>
        </h4>
        <br />
        <h4>
          員工: <span>{{ Login_Object.Emp_Name }}</span>
        </h4>
        <br />
        <h4>
          剩餘時數: <span>{{ Login_Object.Last_Time }}</span>
        </h4>
        <br />

        <div id="Change_Box">
          <h3>密碼修改</h3>
          <br />
          <h4>舊密碼:<input type="password" class="password_A" /></h4>
          <br />
          <h4>新密碼:<input type="password" class="password_A" /></h4>
          <br />
          <h4>密碼確認:<input type="password" class="password_B" /></h4>
          <br />
          <button class="button-17">修改</button>
        </div>
      </div>
    </div>
    <div class="Buttom_Area">
      <div id="Buttom_Area_Box"></div>
    </div>
    <li v-for="(item, index) in Employee_List" :key="index"></li>
  </div>

</template>
    
<script>
import { onMounted, onBeforeMount, ref, watch } from "vue";
// import { mapState } from 'vuex';
import { useStore } from "vuex";
import Tabel from "./Tabel.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  components: {
    "Table-component": Tabel,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = useStore();
    const Department_List = ref([]);
    const Employee_List = ref([]);
    const Login_Object = store.state.Personnel_Attend.Login_Object;
    const Api_Url = store.state.Personnel_Attend.Attend_Api_Url;
    const Announcement_List=ref([]);
    const Announcement=ref({
      Announcement_Id:"",
      Emp_Name:Login_Object.Emp_Name,
      Announcement_Title:"",
      Announcement_Context:"",
      State_Key:"",
    })
    const Insert_Employee = ref({
      Emp_Name: "",
      Emp_Account: "",
      Emp_Password: "",
      Emp_Lv: "",
      Emp_Department: "",
      Create_Emp: Login_Object.Emp_Name,
    });
    const History_Data = ref({
      Start_Date: "",
      End_Date: "",
      History_Select: "",
    });
    const Member_Object_Post=ref({
      State: "",
      Emp_Key:"",
      Switch:"",
    })
    const Special_Object=ref({
      Emp_Key:"",
      Plus_Special:0,
      Manager:"",
      State:"",
      Remark:"",
      Last_Time:"",
      Last_Special:"",
      Last_UpdateTime:"",

    })
    // const EmpMapState=mapState('Personnel_Attend', ['Employee_List']);
    const Insert_Msg = ref("");
    const Depart = ref("");
    const Depart_Disable = ref(true);
    const Emp_Disable = ref(true);
    const Tmpla_Init = () => {
      store.dispatch("Personnel_Attend/getDepartment");
      store.dispatch("Personnel_Attend/getAnnouncement");

    };
    const Alert = (Msg, Key) => {
      if (Key == "Sucess") {
        Swal.fire(`成功:${Msg}`, "", "success");
      } else if (Key == "fail") {
        Swal.fire(`錯誤:${Msg}`, "", "info");
      } else if (Key == "Error") {
        Swal.fire(`資料庫錯誤:${Msg}`, "", "info");
      }
    };
    watch(
      () => store.state.Personnel_Attend.Employee_List,
      (newValue) => {
        // 在这里可以执行其他逻辑
        Employee_List.value = newValue;
      }
    );
    watch(
      () => store.state.Personnel_Attend.Announcement,
      (newValue) => {
        // 在这里可以执行其他逻辑
        Announcement_List.value = newValue;
      }
    );

    watch(
      () => store.state.Personnel_Attend.DepartMent,
      (newValue) => {
        // 在这里可以执行其他逻辑
        Department_List.value = newValue;
      }
    );

    const JsonParse = (JsonString, Switch_String) => {
       
      try {
        let Proecess_String = JSON.parse(JsonString);
        if (Switch_String == "Employee") {
          return `員工:${Proecess_String.Emp_ID}_${Proecess_String.Emp_Name}`;
        } else if (Switch_String == "Emp_Key") {
          return Proecess_String.Emp_ID;
        } else if (Switch_String == "Announcement") {
          return `【${Proecess_String.Title}】:${Proecess_String.Context}`;
        }else if (Switch_String == "id") {
          return Proecess_String.id;
        }else if (Switch_String == "Create_Name") {
          return Proecess_String.Create_Name;
        }
        

        //  return  (JsonString=="查無員工資料")?"查無員工資料":JSON.parse(JsonString)
      } catch (error) {
        return `${error}:解析發生錯誤`;
      }
    };
    const DepartClick = (event) => {
      store.dispatch("Personnel_Attend/getDepartment_Employee", event);
    };
    const get_EmpLst = (Emp_Key) => {
      axios
        .post(
          Api_Url + "get_Emp_LstTime",
          { Emp_Key: Emp_Key },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then(function (response) {
          Swal.fire(`剩餘時數:${response.data}`, "", "success");
        })
        .catch(function (error) {
          Swal.fire(`資料錯誤:${error}`, "", "erroe");
        });
    };
    const Init_Emp = () => {
      Insert_Msg.value = "";

      Insert_Employee.value.Emp_Name = "";
      Insert_Employee.value.Emp_Account = "";
      Insert_Employee.value.Emp_Password = "";
      Insert_Employee.value.Emp_Lv = "";
      Insert_Employee.value.Emp_Department = "";
      Emp_Disable.value = true;
    };
    const Init_Depart = () => {
      Insert_Msg.value = "";
      Depart.value = "";
      Depart_Disable.value = true;
    };

    const Special_Insert=()=>{
      axios
        .post(
          Api_Url + "Insert_Special_TimeData",
          { Special_Object: Special_Object.value },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          (response.data==true)?Alert(response.data,"Sucess"):Alert(response.data,"fail");
        })
        .catch(function (error) {
          Alert(error,"Error");
        });

      
    }


    const Special_Button=(item)=>{
      axios
        .post(
          Api_Url + "Select_Emp_Data",
          { Emp_Key: item },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          Special_Object.value={ Emp_Key:item,Manager:Login_Object.EmpKey,State:"Special",Remark:"",Last_Time: response.data.Last_Time,Last_Special:response.data.Special_Date,Last_UpdateTime:response.data.Update_Time}

           console.log(response.data);
        })
        .catch(function (error) {
          Alert(error,"Error");
        });

      
    }

    const Delete_Announcement=(id,State_Key)=>{
      Announcement.value.State_Key=State_Key;
      Announcement.value.Announcement_Id=id;
        axios
        .post(
          Api_Url + "Announcement_Post",
          { Announcement_Post: Announcement.value },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
           (response.data=="Sucess")?Alert(response.data,"Sucess"):Alert(response.data,"fail");
           Announcement.value.Announcement_Id="";
           store.dispatch("Personnel_Attend/getAnnouncement");
        })
        .catch(function (error) {
          Alert(error,"Error");
        });
    
      
    }


    const Save_Announcement=(State_Key)=>{
      Announcement.value.State_Key=State_Key;
      if(Announcement.value.Announcement_Title=="" || Announcement.value.Announcement_Context==""){
        Alert("不可為空","fail");
      }else{
        axios
        .post(
          Api_Url + "Announcement_Post",
          { Announcement_Post: Announcement.value },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
           (response.data=="Sucess")?Alert(response.data,"Sucess"):Alert(response.data,"fail");
           Announcement.value.Announcement_Title="";
           Announcement.value.Announcement_Context="";
           Announcement.value.State_Key="";
           store.dispatch("Personnel_Attend/getAnnouncement");
        })
        .catch(function (error) {
          Alert(error,"Error");
        });
      }
      
    }
    const Save_Depart = () => {
      axios
        .post(
          Api_Url + "Insert_Department",
          { Department_Value: Depart.value },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then(function (response) {
          console.log(Depart.value);

          console.log(response);
          if (response.data == "Deaprtment value Cant Empty..") {
            console.log(Depart.value);

            Alert(response.data, "fail");
          } else {
            Alert(response.data, "Sucess");
          }
          Init_Depart();
        })
        .catch(function (error) {
          alert(error);
          alert("帶入失敗");
        });
    };
    const Save_Emp = () => {
      if (
        store.state.Personnel_Attend.Login_Object.Account_Lv == 0 ||
        store.state.Personnel_Attend.Login_Object.Account_Lv == 1
      ) {
        axios
          .post(Api_Url + "Insert_Employee", {
            Emp_Object: Insert_Employee.value, // 員工物件
          })

          .then(function (response) {
            if (response.data == "Sucess") {
              Alert(response.data, "Sucess");
            } else if (
              response.data == "Insert_TimeData_New Error.." ||
              response.data == "Account Repeat.."
            ) {
              Alert(response.data, "fail");
            }
          })
          .catch(function (error) {
            Alert(error, "Error");
          });
      }
      Init_Emp();
    };
    const Check_Emp = () => {
      Emp_Disable.value = true;
      if (
        Insert_Employee.value?.Emp_Name == "" ||
        Insert_Employee.value?.Emp_Account == "" ||
        Insert_Employee.value?.Emp_Password == "" ||
        Insert_Employee.value?.Emp_Lv == "" ||
        Insert_Employee.value?.Emp_Department == ""
      ) {
        Insert_Msg.value = "欄位不可為空";
        Emp_Disable.value = true;
      } else {
        Insert_Msg.value = "資料正確";
        Emp_Disable.value = false;
      }
    };
    const Check_Depart = () => {
      Depart_Disable.value = true;

      if (Department_List.value.includes(Depart.value)) {
        Insert_Msg.value = "已重複";
        Depart_Disable.value = true;
      } else if (Depart.value == "") {
        Insert_Msg.value = "不可為空";
      } else {
        Insert_Msg.value = "可使用";
        Depart_Disable.value = false;
      }
    };
    const Export_All_Applie=()=>{
      store.dispatch("Personnel_Attend/getAppli_All","No_Process","ALL");
    }
    const Export_All_review=()=>{
      store.dispatch("Personnel_Attend/getAppli_All","Process","ALL");
    }


    const Member_Appli=(item)=>{
      Member_Object_Post.value.Emp_Key=item;
      Member_Object_Post.value.State="No_Process"
      Member_Object_Post.value.Switch="Member"

      store.dispatch("Personnel_Attend/getAppli_Member",Member_Object_Post.value);

    }
    const Member_Review=(item)=>{

      Member_Object_Post.value.Emp_Key=item;
      Member_Object_Post.value.State="Process"
      Member_Object_Post.value.Switch="Member"
      store.dispatch("Personnel_Attend/getAppli_Member",Member_Object_Post.value);

    }

    const options = ref({
      // DataTable options can be configured here
    });

    onMounted(() => {
      Tmpla_Init();
    });
    onBeforeMount(() => {

    });

    return {
      Employee_List,
      Department_List,
      options,
      Login_Object,
      Insert_Msg,
      Depart,
      Emp_Disable,
      Depart_Disable,
      Insert_Employee,
      History_Data,
      Api_Url,
      Announcement,
      Announcement_List,
      Special_Object,
      // EmpMapState,
      Member_Appli,
      Member_Review,
      Save_Announcement,
      Alert,
      Export_All_Applie,
      Export_All_review,
      get_EmpLst,
      JsonParse,
      Tmpla_Init,
      Check_Emp,
      Save_Emp,
      DepartClick,
      Check_Depart,
      Save_Depart,
      Delete_Announcement,
      Special_Button,
      Special_Insert,
    };
  },
};
</script>
    
    <style>
</style>
    