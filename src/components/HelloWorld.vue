<template>
  <div class="hello">
    <table
      id="DrugMainTable"
      class="table table-striped DrugMainTable"
      style="width: 100%"
    >

      <thead>
        <tr style="text-align: center">
          <th>病歷號碼</th>
          <th>病患姓名</th>
          <th>病患性別</th>
          <th>病患年齡</th>
          <th>發生類別</th>
          <th>診斷</th>
          <th>事件起始日</th>
          <th>事件結束日</th>
          <th>發現異常日</th>
          <th>建立員工</th>
          <th>建立日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody  v-if="Render">
        <tr
         
          style="text-align: center"
          v-for="(item, key) in CallBackMainData"
          :key="key"
          :id="item.id"
          @dblclick="ClickTable(item.id)"
      
        >
          <td>{{ item.paNumber }}</td>
          <td>{{ item.paName }}</td>
          <td>{{ item.paGender }}</td>
          <td>{{ item.paAge }}</td>
          <td>{{ item.paClass }}</td>
          <td>{{ item.paDia }}</td>
          <td>{{ item.paStart }}</td>
          <td>{{ item.paEnd }}</td>
          <td>{{ item.paFiD }}</td>
          <td>{{ item.buildEmp }}</td>
          <td>{{ item.buildDate }}</td>
          <td><button @click="DeletePost(item.id)">刪除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr style="text-align: center">
          <th>病歷號碼</th>
          <th>病患姓名</th>
          <th>病患性別</th>
          <th>病患年齡</th>
          <th>發生類別</th>
          <th>診斷</th>
          <th>事件起始日</th>
          <th>事件結束日</th>
          <th>發現異常日</th>
          <th>建立員工</th>
          <th>建立日期</th>
          <th>操作</th>
        </tr>
      </tfoot>
    </table>
    <button type="button " id="ShowButton" class="btn btn-primary ShowButton" data-bs-toggle="modal" data-bs-target="#PaDataModal" hidden="hidden">
  Launch demo modal
</button>
</div>

<!-- Modal -->
<div class="modal fade PaDataModal" id="PaDataModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">異常事件表單</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="PaTitle"><h2>患者資料:</h2></div>
        <a>患者姓名:{{ MPaName }}</a><br>
        <a>患者性別:{{ MPaName }}</a><br>
        <a>患者病歷號碼:{{ MPaName }}</a><br>
        <a>患者年齡:{{ MPaAge }}</a><br>
        <a>事件類別:{{ MPaClass }}</a><br>
        <a>事件診斷:{{ MPaDia }}</a><br>
        <a>事件開始日期:{{ MPaStart }}</a><br>
        <a>異常事件發現日:{{ MPaFiD }}</a><br>
        <a>事件結束日期:{{ MPaEnd }}</a><br>
        <hr>
        <div class="PaTitle"><h2>紀載內容:</h2></div>
        <a>醫囑相關:{{ MAboutOtherEvent }}</a><br>
        <a>處方籤交付相關:{{ MPreScript }}</a><br>
        <a>運送過程相關:{{ MDeliveryProcessEvent }}</a><br>
        <a>藥局相關:{{ MPharMacyEvent }}</a><br>
        <a>護理相關:{{ MNursingReEvent }}</a><br>
        <a>其他補充(發生原因):{{ MOtherEvent }}</a><br>


        <a>事件結果(未給藥物):{{ MNursionNonFor }}</a><br>
        <a>已發藥:{{ MErrorEvent }}</a><br>

        <a>工作流程因素:{{ MWorkStatusProcess }}</a><br>
        <a>藥品/資訊系統因素:{{ MDrugInfoStatusProcess }}</a><br>
        <a>環境因素:{{ MEnvironmentStatusProcess }}</a><br>
        <a>人員因素:{{ MPhysiologicalStatusProcess }}</a><br>
        <a>病人生理/行為因素:{{ MPersonStatusProcess }}</a><br>
        <a>溝通因素:{{ MCommunicateStatusProcess }}</a><br>
        <a>其他因素(事件可能發生原因):{{ MOtherStatusProcess }}</a><br>


        <a>處理方式:{{ MProcessMethod }}</a><br>
        <a>建議:{{ MSuggest }}</a><br>

        <a>藥物名稱:{{ MDrugName }}</a><br>
        <a>藥物劑量:{{ MDrugDose }}</a><br>
        <a>藥物途徑:{{ MDrugRouter }}</a><br>
        <a>藥物劑型:{{ MDrugDosage }}</a><br>
        <a>藥物頻率:{{ MDrugFrequency }}</a><br>
        <a>藥物數量:{{ MDrugNumber }}</a><br>
        <a>給錯藥物說明:{{ MErrorName }}</a><br>


        <hr>
        <div class="PaTitle"><h2>紀載日期:</h2></div>
        <a>紀載員工 :{{ MEmployeeID }}</a><br>
        <a>紀載日期:{{ MInsertDate }}</a><br>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <!-- {{ CallBackMainData }} -->
  
<!-- 
 <router-link :to="{ name: 'Home' }">Home</router-link> |
<router-link :to="{ name: 'About' }">About</router-link>  |
<router-link :to="{ name: '3FStation'}">3FStation</router-link>  -->
  <router-view />
</template>

<script>
import axios from "axios";
import "jquery";
// import Empty from './components/Empty.vue';

// import $ from "jquery";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    const url = "http://192.168.2.192:8080/PostMainData";
    axios
      .post(url, {})

      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.CallBackMainData.push(response.data[i]);
        }

        console.log(response.data[0]);
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });
  },
  data() {
    return {
      CallBackMainData: [],
      CallBackMainDetetailData:{
        MPaName:"",
        MPaGender:"",
        MPaNumber:"",
        MPaClass:"",
        MPaAge:"",
        MPaDia:"",
        MPaFiD:"",
        MPaStart:"",
        MPaEnd:"",

        MAboutOtherEvent:"",
        MPreScript:"",
        MDeliveryProcessEvent:"",
        MPharMacyEvent:"",
        MNursingReEvent:"",
        MOtherEvent:"",
        MNursionNonFor:"",
        MWorkStatusProcess:"",
        MDrugInfoStatusProcess:"",
        MEnvironmentStatusProcess:"",
        MPhysiologicalStatusProcess:"",
        MPersonStatusProcess:"",
        MCommunicateStatusProcess:"",
        MOtherStatusProcess:"",
        MProcessMethod:"",
        MSuggest:"",
        MDrugName:"",
        MDrugDose:"",
        MDrugDosage:"",
        MDrugRouter:"",
        MDrugFrequency:"",
        MDrugNumber:"",
        MEmployeeID:"",
        MInsertDate:"",
        MErrorEvent:"",
        MEvenForPa:"",
        MPaForEven:"",
        MErrorName:"",
      },
      Render:true,
    };
  },
  methods: {
    ClickTable: function (tableId) {
      console.log(tableId);

      const url = "http://192.168.2.192:8080/DetailMainData";
    axios
      .post(url, {
       DetailId:tableId,

      })

      .then((response) => {	
        this.MPaName=response.data.PaName;
        this.MPaGender=response.data.PaGender;
        this.MPaNumber=response.data.PaNumber;
        this.MPaClass=response.data.PaClass;
        this.MPaAge=response.data.PaAge;
        this.MPaDia=response.data.PaDia;
        this.MPaFiD=response.data.PaFiD;
        this.MPaStart=response.data.PaStart;
        this.MPaEnd=response.data.PaEnd;
        this.MAboutOtherEvent=response.data.AboutOtherEvent;
        this.MPreScript=response.data.PreScript;
        this.MDeliveryProcessEvent=response.data.DeliveryProcessEvent;
        this.MPharMacyEvent=response.data.PharMacyEvent;
        this.MNursingReEvent=response.data.NursingReEvent;
        this.MOtherEvent=response.data.OtherEvent;
        this.MNursionNonFor=response.data.NursionNonFor;
        this.MWorkStatusProcess=response.data.WorkStatusProcess;
        this.MDrugInfoStatusProcess=response.data.DrugInfoStatusProcess;
        this.MEnvironmentStatusProcess=response.data.EnvironmentStatusProcess;
        this.MPhysiologicalStatusProcess=response.data.PhysiologicalStatusProcess;
        this.MPersonStatusProcess=response.data.PersonStatusProcess;
        this.MCommunicateStatusProcess=response.data.CommunicateStatusProcess;
        this.MOtherStatusProcess=response.data.OtherStatusProcess;

        this.MProcessMethod=response.data.ProcessMethod;
        this.MSuggest=response.data.Suggest;
        this.MDrugName=response.data.DrugName;
        this.MDrugDose=response.data.DrugDose;
        this.MDrugDosage=response.data.DrugDosage;
        this.MDrugRouter=response.data.DrugRouter;
        this.MDrugFrequency=response.data.DrugFrequency;
        this.MDrugNumber=response.data.DrugNumber;
        this.MEmployeeID=response.data.EmployeeID;
        this.EmployeeName=response.data.EmployeeName;
        this.MInsertDate=response.data.InsertDate;
        this.MErrorEvent=response.data.ErrorEvent;
        this.MEvenForPa=response.data.EvenForPa;
        this.MPaForEven=response.data.PaForEven;
        this.MErrorName=response.data.ErrorName;

        console.log(response.data[0]);
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });



      let PaModalButton=document.getElementById("ShowButton");
      PaModalButton.click();
    },
     AxiosEmit:function ()
     {

     },
     DeletePost:function (PostPaId)
     {
      console.log(PostPaId);
      const url = "http://192.168.2.192:8080/PostDelData";
    axios
      .post(url, {
        PaID: PostPaId,
      })

      .then((response) => {
       
        console.log(response);
        location.reload()

        // this.$router.replace=({path:'/Empty'});

       
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });
  
  
     },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.DrugMainTable
{
  opacity: 0.8;
}
.DrugMainTable tbody tr
{
  background: #dee4e4	;
  color: #212121;
  transition: background 0.4s;
}

.DrugMainTable tbody tr:hover {
  background: #2fe791;
  color: #f5ecec;

}


.hello
{
   width: 100%;
   background-image: url("C:/Users/loveaoe33/Desktop/vue/newvue/src/assets/img/background.jpg") center center no-repeat;
   position: flex;
   background-size: 100% 100%;

   
  
}




</style>
