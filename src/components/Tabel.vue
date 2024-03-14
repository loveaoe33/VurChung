<template>
  <div
    class="modal fade"
    id="AppliModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" style="color: black">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">積借休申請</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body" style="color: black">
          <div class="modal-body-employee">
            <span class="Title">員編:</span>
            <span class="Context">{{ Login_Object.Emp_ID }}</span>

            <span class="Title">員工:</span>
            <span class="Context">{{ Login_Object.Emp_Name }}</span>

            <span class="Title">部門:</span>
            <span class="Context">{{ Login_Object.Department_Key }}</span>

            <span class="Title">剩餘時數:</span>
            <span class="Context">{{ Login_Object.Last_Time }}</span>
          </div>
          <br />
          申請理由:<br /><input
            type="text"
            class="form-control"
            v-model="Appli_Object.ReasonMark"
            @keyup="Radio_Event()"
          /><br />
          <div class="appli-radio-buttons">
            <label for="Over_Time">加班</label>
            <input
              type="radio"
              id="Over_Time"
              v-model="Appli_Object.Reason"
              @change="Radio_Event()"
              value="Over_Time"
            />
            <br />
            <label for="Rest">補休</label>
            <input
              type="radio"
              id="Rest"
              v-model="Appli_Object.Reason"
              @change="Radio_Event()"
              value="Rest"
            />

            <label for="Person_Holi">事假</label>
            <input
              type="radio"
              id="Person_Holi"
              v-model="Appli_Object.Reason"
              @change="Radio_Event()"
              value="Person_Holi"
            />

            <label for="Public_Holi">公假</label>
            <input
              type="radio"
              id="Public_Holi"
              v-model="Appli_Object.Reason"
              @change="Radio_Event()"
              value="Public_Holi"
            />
          </div>

          申請時數:<br /><input
            type="number"
            class="form-control"
            min="0"
            v-model="Appli_Object.Appli_Time"
            :disabled="Radio_Check"
            @change="Time_Check($event.target.value)"
          /><br />
          目前資料:<br />
          <div class="Post_Context">
            <span class="Title">員編:</span>
            <span class="Context">{{ Login_Object.Emp_ID }}</span
            ><br />
            <span class="Title">員工:</span>
            <span class="Context">{{ Login_Object.Emp_Name }}</span
            ><br />
            <span class="Title">部門:</span>
            <span class="Context">{{ Login_Object.Department_Key }}</span
            ><br />
            <span class="Title">申請理由:</span>
            <span class="Context">{{ Appli_Object.ReasonMark }}</span
            ><br />
            <span class="Title">申請時數:</span>
            <span class="Context">{{ Appli_Object.Appli_Time }}</span
            ><br />
            <span class="Title">申請後時數:</span>
            <span class="Context">{{ Appli_Object.Total_Time }}</span
            ><br />
          </div>
          <br />

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
            id="Post_Appli"
            @click="Post_Appli"
            :disabled="Appli_Disable"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

    <h1>員工報表區</h1>
    <div class="Top_button">
      <input type="text" class="Search_text" v-model="Appli_searchName" />

      <button class="button-17" @click="HistorySwicth(Login_Object.Emp_ID,'Appli')" role="button">已申請</button>
      <button class="button-17" @click="HistorySwicth(Login_Object.Emp_ID,'Review')" role="button">已審核</button>

      <button
        class="button-17"
        role="button"
        data-bs-toggle="modal"
        data-bs-target="#AppliModal"
      >
        申請加班/補休
      </button>

      <button class="button-17" role="button" @click="printExcel()">列印此頁面</button>
      <button
        class="button-17"
        role="button"
        data-bs-toggle="modal"
        data-bs-target="#HistoryModal"
        @click="History(Login_Object.Emp_ID,'Employee')"
      >
        列印歷史總紀錄
      </button>
      <div class="Mark_Div">
        <input
          type="textbox"
          class="form-control Mark_text"
          v-model="Review_Data.Time_Mark"
          placeholder="備註"
        />
      </div>
    </div>
    <EasyDataTable v-if="Tabel_Switch=='default'"
      buttons-pagination
      :rows-per-page="5"
      show-index
      v-model:items-selected="Appli_itemsSelected"
      @click-row="showRow"
      :headers="Appli_headers"
      :items="AppliTableData"
      :sort-by="Appli_sortBy"
      :sort-type="Appli_sortType"
      :search-field="Appli_searchField"
      :search-value="Appli_searchName"
      multi-sort
      theme-color="#1d90ff"
      table-class-name="customize-table"
    >
      <template
        v-if="Login_Employee_Lv == 0 || Login_Employee_Lv == 1"
        #item-Process="item"
      >
        <div v-if="item.Check_State == 'No_Process'">
          <button class="button-18" @click="Review_Button(item, 'Pass')">
            通過
          </button>
          <button class="button-19" @click="Review_Button(item, 'NPass')">
            不通過
          </button>
        </div>
        <div v-else-if="item.Check_State == 'Process' && item.Review_Result==='Pass'">
          <button class="button-19" @click="Cancel_Button(item)">註銷</button>
        </div>
      </template>
      <template v-else #item-Process="item">
        <div v-if="item.Check_State == 'No_Process'"></div>
        <div v-else-if="item.Check_State == 'Process'">
        </div>
      </template>

      <template  #expand="item">
        <div style="padding: 15px">
          員工:{{ item.Emp_Name }}<br />剩餘時數為:{{ item.Last_Time
          }}<br />申請時數:{{ item.Appli_Time }}<br />扣除後時數:{{
            item.Apli_Total
          }}<br />申請備註:{{ item.Reason_Mark }}<br/>審核備註:{{ item.Time_Mark }}
        

        </div>
      </template>
      




      <template #loading>
        <img
          src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
          style="width: 100px; height: 80px"
        />
      </template>
    </EasyDataTable>
    <EasyDataTable v-else-if="Tabel_Switch=='Log'"
      buttons-pagination
      :rows-per-page="5"
      show-index
      @click-row="showRow"
      :headers="History_Log_Header"
      :items="AppliTableData"
      multi-sort
      theme-color="#1d90ff"
      table-class-name="customize-table"
    >
  </EasyDataTable>

    <div id="row-clicked"></div>

</template>
  
  <script>
import { onMounted, ref, watch } from "vue";
// eslint-disable-next-line no-unused-vars
import { Header, Item } from "vue3-easy-data-table";
// eslint-disable-next-line no-unused-vars
import { useStore } from "vuex";
import axios from "axios";
import * as XLSX from "xlsx";
// import Swal from "sweetalert2";

export default {
  name: "DataTable",

  components: {
    EasyDataTable: require("vue3-easy-data-table").EasyDataTable,
  },
  props: {
    fatherALert: Function,
    HistoryFunction:Function,
    Review:Function,
    Appli:Function,
  },

  setup(props) {
    const store = useStore();
    

    const Alert = (Msg, Key) => {
      props.fatherALert(Msg, Key);
    };

    
    const HistorySwicth=(Emp_Key,Switch)=>{
      (Switch=="Appli")? props.Appli(Emp_Key):props.Review(Emp_Key);
    }

    const History = (Emp_Key,Switch)=>{
      props.HistoryFunction(Emp_Key,Switch);
    }

    const Tabel_Switch=ref("default");

    watch(
      () => store.state.Personnel_Attend.Appli_List,
      (newValue) => {
        
        AppliTableData.value = newValue;
      }
    );

    watch(
      () => store.state.Personnel_Attend.TabelState,
      (newValue) => {
        Tabel_Switch.value=newValue;
      }
    );


    const Login_Employee_Lv =
      store.state.Personnel_Attend.Login_Object.Account_Lv;
    const Api_Url = store.state.Personnel_Attend.Attend_Api_Url;
    const { Emp_ID, Emp_Name, Department_Key, Last_Time } =
      store.state.Personnel_Attend.Login_Object;
    const Insert_Msg = ref("");
    const Radio_Check = ref(true);
    const Appli_Disable = ref(true);
    const Appli_Objct_Export = ref([]);
    // const Appli_Objct_Export=ref({
    //   Apli_Total: "",
    //   Appli_Date: "",
    //   Appli_Time: 0,
    //   Check_State: "",
    //   Department: "",
    //   Emp_Key: "",
    //   Emp_Name: "",
    //   Last_Time: 0,
    //   Reason: "",
    //   Reason_Mark: "",
    //   Review_Date: "",
    //   Review_ID_Key: "",
    //   id: "",
    // })
    const Login_Object = ref({
      Emp_ID: "",
      Emp_Name: "",
      Department_Key: "",
      Last_Time: "",
    });

    const Appli_Object = ref({
      Emp_ID: "",
      Employee: "",
      DepartMent: "",
      Reason: "",
      ReasonMark: "",
      Appli_Time: "",
      Total_Time: "",
    });
    const AppliTableData = ref([]);
    const Appli_headers = ref([
      { text: "Emp_Key", value: "Emp_Key" },
      { text: "Emp_Name", value: "Emp_Name" },
      { text: "Department", value: "Department" },
      { text: "Reason", value: "Reason" },
      { text: "Reason_Mark", value: "Reason_Mark" },
      { text: "Appli_Time", value: "Appli_Time" },
      { text: "Last_Time", value: "Last_Time", sortable: true },
      { text: "Apli_Total", value: "Apli_Total" },
      { text: "Appli_Date", value: "Appli_Date" },
      { text: "Check_State", value: "Check_State" },
      { text: "Review_Result", value: "Review_Result" },
      { text: "Process", value: "Process" },
    ]);
    const LogTableData = ref([]);

    const History_Log_Header=ref([
    { text: "Emp_ID", value: "Emp_ID" },
      { text: "Emp_Name", value: "Emp_Name" },
      { text: "Department", value: "Department" },
      { text: "Old_Time", value: "Old_Time" },
      { text: "Insert_Time", value: "Insert_Time" },
      { text: "New_Time", value: "New_Time" },
      { text: "Special_Date", value: "Special_Date", sortable: true },
      { text: "Time_Event", value: "Time_Event" },
      { text: "Time_Mark", value: "Time_Mark" },
      { text: "Time_Pon_Mark", value: "Time_Pon_Mark" },
      { text: "Update_Time", value: "Update_Time" },
    ])

    const Appli_sortBy = ["Appli_Time", "Last_Time"];
    const Appli_sortType = ["desc", "asc"];
    const Appli_itemsSelected = ref([]);
    const Appli_searchField = ["Emp_Name"];
    const Appli_searchName = ref("");
    const Review_Data = ref({
      Appli_Id: "",
      Appli_Time: null,
      Manager: "", //主管
      Appli_Employee: "", //申請者
      State: "", //通過與否
      Time_Event: "", //申請事件
      Time_Mark: "", //註記
    });

    // const headers = ref([

    //   { text: 'Name', value: 'name' },
    //   { text: 'Age', value: 'age',sortable: true},
    //   { text: 'Time2', value: 'ages' },
    //   { text: 'Time3', value: 'agea' },
    //   { text: 'Time4', value: 'aged' },
    //   { text: 'Time5', value: 'agefw' },
    //   { text: 'Time6', value: 'aged' },
    //   { text: '', value: 'Pass' },
    // ]);
    // const sortBy = ["age", "age"];
    // const sortType = ["desc", "asc"];
    // const itemsSelected= ref([]);
    // const searchField = ["name"];
    //   const searchName = ref("");
    // const tableData = ref([
    //   { id:1,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 30 },
    //   { id:2,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 30 },
    //   { id:3,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 30 },
    //   { id:4,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 26 },
    //   { id:5,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 24 },
    //   { id:6,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 62 },
    //   { id:7,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 25 },
    //   { id:8,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 60 },
    //   { id:9,"championships": [2017, 2018, 2019, 2022],name: 'Jadne Doe', age: 85 },
    //   { id:10,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 95 },
    //   { id:8,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 60 },
    //   { id:9,"championships": [2017, 2018, 2019, 2022],name: 'Jadne Doe', age: 85 },
    //   { id:10,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 95 },

    // ]);
    const arrayFilter=(Start,data)=>{
      let end=0;
      for(let i=Start+1;i<data.length;i++){
         if(data[Start].Emp_Name==data[i].Emp_Name){
        end++
        data[i].Emp_ID="";
        data[i].Emp_Name="";
        data[i].Department=""; 
        data[i].Last_Time="";
        data[i].Special_Date="";
        data[i].Time_Pon_Mark=""; 
        data[i].Update_Time="";
         }
      }
      return end;

    }
    const tableFilter=(data)=>{
      let end=0;
      for(let i=0;i<data.length;i++){
        end=arrayFilter(i,data);
        if(data.Emp_ID!=""){
          arrayFilter(end+1,data);
      }
     }
    }
    const exportExcel=(data, filename)=>{
     const ws=XLSX.utils.json_to_sheet(data);
     const wb=XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb,ws,"sheet1")
     XLSX.writeFile(wb,filename);
    }
    const printExcel=()=>{
      if(Tabel_Switch.value=="Log"){
        tableFilter(AppliTableData.value);
      }
      exportExcel(AppliTableData.value,'excel.xlsx');
    }
    const handleButtonClick = (row) => {
      console.log("Button clicked for row:", row);
    };

    const showRow = (item) => {
      document.getElementById("row-clicked").innerHTML = JSON.stringify(item);
    };
    const Radio_Event = () => {
      if (Appli_Object.value.Reason == "Public_Holi") {
        Radio_Check.value = true;
        Appli_Object.value.Appli_Time = 0;
        Appli_Object.value.Total_Time = Last_Time;
        Time_Check(Appli_Object.value.Appli_Time);
      } else if (Appli_Object.value.ReasonMark == "") {
        Radio_Check.value = true;
      } else {
        Radio_Check.value = false;
        Time_Check(Appli_Object.value.Appli_Time);
      }
    };
    const Time_Check = (item) => {
      if (item == "" || item == null) {
        Appli_Object.value.Total_Time = Last_Time;
      } else {
        let Process_Number =
          Appli_Object.value.Reason == "Public_Holi" ||
          Appli_Object.value.Reason == "Over_Time"
            ? item
            : -item;
        Appli_Object.value.Total_Time =
          parseFloat(Process_Number) + parseFloat(Login_Object.value.Last_Time);
      }

      Msg_Event();
    };
    const isEmptyObject = (obj) => {
      let NaNCheck = isNaN(obj.value.Appli_Time);

      if (
        obj.value?.Emp_ID == "" ||
        obj.value?.Employee == "" ||
        obj.value?.DepartMent == "" ||
        obj.value?.Reason == "" ||
        obj.value?.ReasonMark == "" ||
        NaNCheck != false ||
        obj.value?.Total_Time == ""
      ) {
        return false;
      } else {
        return true;
      }
    };
    const Msg_Event = () => {
      if (
        isEmptyObject(Appli_Object) &&
        Appli_Object.value.Reason != "Public_Holi" &&
        Appli_Object.value.Appli_Time != 0
      ) {
        Insert_Msg.value = "資料正確";
        Appli_Disable.value = false;
      } else if (
        isEmptyObject(Appli_Object) &&
        Appli_Object.value.Reason != "Public_Holi" &&
        Appli_Object.value.Appli_Time == 0
      ) {
        Insert_Msg.value = "只有公假可為0";
        Appli_Disable.value = true;
      } else if (
        isEmptyObject(Appli_Object) &&
        Appli_Object.value.Reason == "Public_Holi" &&
        Appli_Object.value.Appli_Time == 0
      ) {
        Insert_Msg.value = "資料正確";
        Appli_Disable.value = false;
      } else {
        Insert_Msg.value = "資料不正確";
        Appli_Disable.value = true;
      }
    };
    const Post_Appli = () => {
      {
        axios
          .post(Api_Url + "Insert_TimeData", {
            Appli_Object: Appli_Object.value, // 員工物件
          })

          .then(function (response) {
            if (response.data == "Sucess") {
              Alert(response.data, "Sucess");
              Appli_Object.value.Reason = "";
              Appli_Object.value.ReasonMark = "";
              Appli_Object.value.Appli_Time = "";
              Appli_Object.value.Total_Time = 0;
              Appli_Disable.value = true;
              Radio_Check.value=true;
              Insert_Msg.value = "";
            } else if(response.data=="OrderRepeat..."){
              Alert("當月申請有尚未審核請連絡主管", "fail");
            }else if (response.data == "false") {
              Alert(response.data, "fail");
            }
          })
          .catch(function (error) {
            Alert(error, "Error");
          });
      }
    };
    
    const Review_Object = (Item, Switch, State) => {
      if (Switch == "Post") {
        Review_Data.value.Appli_Id = Item.id;
        Review_Data.value.Appli_Employee = Item.Emp_Key;
        Review_Data.value.State = State;
        Review_Data.value.Time_Event = Item.Reason;
        Review_Data.value.Appli_Time = Item.Appli_Time;
      } else if (Switch == "Cancel") {
        Review_Data.value.Appli_Id = Item.id;
        Review_Data.value.Appli_Employee = Item.Emp_Key;


      }else if(Switch == "Init"){
        Review_Data.value.Appli_Id = "";
        Review_Data.value.Appli_Employee = "";
        Review_Data.value.State = "";
        Review_Data.value.Time_Event = "";
        Review_Data.value.Appli_Time = null;
      }
    };

    const Review_Button = async (item, State) => {
      Review_Object(item, "Post", State);
      let Msg = await store.dispatch(
        "Personnel_Attend/Review_Appli",
        Review_Data
      );
      Msg == true
        ? Review_Object(item, "Init", State)
        : Review_Object(item, "Init", State);
    };
    const Cancel_Button = async(item, State) => {
      Review_Object(item, "Cancel", State);
      let Msg = await store.dispatch(
        "Personnel_Attend/Cancel_Appli",
        Review_Data
      );
      Msg == true
        ? Review_Object(item, "Init", State)
        : Review_Object(item, "Init", State);
    };


  
    onMounted(() => {
      Login_Object.value = { Emp_ID, Emp_Name, Department_Key, Last_Time };
      Appli_Object.value.Total_Time = Last_Time;
      Appli_Object.value.Emp_ID = Emp_ID;
      Appli_Object.value.Employee = Emp_Name;
      Appli_Object.value.DepartMent = Department_Key;
      Review_Data.value.Manager = Emp_ID; //審核人物件資料
      store.state.Personnel_Attend.Appli_Object.Account_Lv ==
        store.state.Personnel_Attend.Login_Employee_Lv; //Appli固定物件資料
      store.state.Personnel_Attend.Appli_Object.Export_Depart ==
        store.state.Personnel_Attend.DepartMent; //Appli固定物件資料
    });
    return {
      Login_Employee_Lv,
   
      Appli_headers,
      Tabel_Switch,
      History_Log_Header,
      AppliTableData,
      Appli_sortBy,
      Appli_sortType,
      Appli_itemsSelected,
      Appli_searchField,
      Appli_searchName,
      Appli_Object,
      Login_Object,
      Insert_Msg,
      Radio_Check,
      Appli_Disable,
      Appli_Objct_Export,
      Review_Data,
      LogTableData,
      Review_Button,
      Cancel_Button,
      handleButtonClick,
      Time_Check,
      showRow,
      Radio_Event,
      Post_Appli,
      History,
      HistorySwicth,
      printExcel,
    };
  },
};
</script>
  
  <style scoped>
/* Add your styles here if needed */
</style>
  