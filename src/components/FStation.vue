<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    事件新增
  </button>

  |||
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal1"
    data-whatever="@mdo"
  >
    人員註冊
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="fa-2x">
 <i class="fa-solid fa-triangle-exclamation fa-fade"></i>
</div>
          <h5 class="modal-title" id="exampleModalLabel">異常事件</h5><i class="fa-solid fa-person-walking-arrow-right"></i>
<div class="form-check">
  <input class="form-check-input DrugEvent" type="checkbox" @change="DrugEventF"  v-model="DrugEvent" value="藥物事件單" id="DrugEvent">
  <label class="form-check-label" for="flexCheckDefault">
   藥物事件
  </label>
</div>
<i class="fa-solid fa-person-walking-arrow-right"></i>
<div class="form-check">
  <input class="form-check-input FallEventE" type="checkbox"  @change="FallE" v-model="FallEventE" value="跌倒事件單" id="FallEventE" >
  <label class="form-check-label" for="flexCheckChecked">
    跌倒事件
  </label>
</div>
<i class="fa-solid fa-person-walking-arrow-right"></i>
<div class="form-check">
  <input class="form-check-input MixEvent" type="checkbox"  @change="Mix"  v-model="MixEvent" value="綜合事件" id="MixEvent" >
  <label class="form-check-label" for="flexCheckChecked">
    綜合事件
  </label>
</div>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
       
        <div class="modal-body">

          <div class="DrugEventText">
          <input type="text" class="form-control " style="width: 250px"> </div><i class="fa-solid fa-user DrugEventText"></i><button type="button"  name="DrugEventEmp" class="btn btn-link DrugEventText">帶入員工</button>
         <i class="fa-solid fa-file-pen DrugEventText"></i><button type="button" @click="ShowDrugEventPain" name="DrugEventPain" class="btn btn-link DrugEventText">患者資料</button>
         <i class="fa-solid fa-heart-circle-exclamation DrugEventText"></i><button type="button"   name="DrugEventRession"  class="btn btn-link DrugEventText">事件發生原因</button>
         <i class="fa-solid fa-file-circle-exclamation DrugEventText"></i><button type="button"   name="DrugEventResult"  class="btn btn-link DrugEventText">事件結果</button>
         <i class="fa-solid fa-file-circle-question DrugEventText"></i><button type="button" name="DrugEventMayRession"   class="btn btn-link DrugEventText">事件可能發生原因</button>
         <i class="fa-solid fa-file-shield DrugEventText"></i><button type="button" name="DrugEventDeal"  class="btn btn-link DrugEventText">事件處理方式與改善措施</button><hr>


          <label for="EmployeeOc" name="DrugEventPainName" class="col-form-label DrugEventPain">患者姓名:</label>
          <input type="text" name="DrugEventPainName"   v-model="DrugEventData.DrugEventPainName"  class="form-control DrugEventPain" >
          <label for="EmployeeOc" name="DrugEventPainGender" class="col-form-label DrugEventPain">患者性別:</label>
          <input type="text" name="DrugEventPainGender"    v-model="DrugEventData.DrugEventPainGender"  class="form-control DrugEventPain" >
          <label for="EmployeeOc" name="DrugEventPainNumber" class="col-form-label DrugEventPain">病歷號碼:</label>
          <input type="text" name="DrugEventPainNumber"    v-model="DrugEventData.DrugEventPainNumber" class="form-control DrugEventPain" >
          <label for="EmployeeOc" name="DrugEventPainClassification" class="col-form-label DrugEventPain">類別:</label>
                     <select
              class="form-select EmployeeOccuapation DrugEventPain"  v-model="DrugEventData.DrugEventPainClassification" name="DrugEventPainClassification"
              aria-label="Default select example"
            > <option value="門診">門診</option>
              <option value="住院">住院</option>
            </select>
       
           <label for="EmployeeOc" name="DrugEventPainAge" class="col-form-label DrugEventPain">年齡:</label>
          <input type="text" name="DrugEventPainAge"   v-model="DrugEventData.DrugEventPainAge"  class="form-control DrugEventPain">
           <label for="EmployeeOc" name="DrugEventPainDiagnosis" class="col-form-label DrugEventPain">診斷:</label>
          <input type="text" name="DrugEventPainDiagnosis"    v-model="DrugEventData.DrugEventPainDiagnosis"   class="form-control DrugEventPain" >

                     <label for="EmployeeOc" name="DrugEventPainStar" class="col-form-label DrugEventPain">發生起始日:</label>
          <input type="date" name="DrugEventPainStar"    v-model="DrugEventData.DrugEventPainStar"  class="form-control DrugEventPain" >

                     <label for="EmployeeOc" name="DrugEventPainDFind" class="col-form-label DrugEventPain">發現異常日:</label>
          <input type="date" name="DrugEventPainDFind"    v-model="DrugEventData.DrugEventPainDFind"  class="form-control DrugEventPain" >

                     <label for="EmployeeOc" name="DrugEventPainEnd" class="col-form-label DrugEventPain">事件停止日:</label>
          <input type="date" name="DrugEventPainEnd"    v-model="DrugEventData.DrugEventPainEnd"  class="form-control DrugEventPain" >
          </div>
   
          
         

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="test" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

<form>
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">執行人員註冊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="EmployeeAc" class="col-form-label">院內帳號:</label>
            <input
              type="text"
              style="width: 250px"
              class="form-control EmployeeAccount"
            />| <i class="fa-solid fa-user"></i> |<button
              type="button"
              class="btn btn-link AcCheck"
            >
              檢查
            </button>
          </div>
          <div class="form-group">
            <label for="EmployeeNa" class="col-form-label">申請人:</label>
            <input type="text" class="form-control EmployeeName" />
          </div>

          <div class="form-group">
            <label for="EmployeeOc" class="col-form-label">職稱:</label>
            <select
              class="form-select EmployeeOccuapation"
              aria-label="Default select example"
            >
              <option selected>選擇職稱</option>
              <option value="護理師">護理師</option>
              <option value="護士">護士</option>
              <option value="醫師">醫師</option>
              <option value="藥師">藥師</option>
              <option value="行政人員">行政人員</option>
              <option value="資訊專員">資訊專員</option>
              <option value="警衛人員">警衛人員</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">備註</label>
            <textarea
              class="form-control MemoranDum"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="EmployeeOc" class="col-form-label">註冊日期:</label>
            <input
              type="text"
              v-model="ND"
              class="form-control EmployeeOccuapation"
              disabled="disabled"
            />
          </div>
        </div>
          <!-- <div class="form-check">
  <input class="form-check-input check" v-model="CheckBool" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
  </div> -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        
          <button type="button" v-if="CheckBool" class="btn btn-primary" >Save changes</button>
          <button type="button" v-else class="btn btn-primary" disabled="disabled">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  {{ DrugEventData }}

</form>
</template>>



<script>
import "jquery";
import $ from "jquery";
export default {
  name: "FStation",
  props: {
    msg: String,
  },
  data() {
    return {
      ND: "5",
      CheckBool: false, //確認有無申請過
      DrugEvent: false, //藥物異常
      FallEventE: false, //跌倒異常
      MixEvent: false, //混和異常
      CheckEmpBool: false, //確認員工有無帶入
      DrugEventData:
       {
        DrugEventPainName:"",
        DrugEventPainGender:"",
        DrugEventPainNumber :"",
        DrugEventPainClassification :"",
        DrugEventPainAge :"",
        DrugEventPainDiagnosis :"",
        DrugEventPainStar :"",
        DrugEventPainDFind :"",
        DrugEventPainEnd:"",
       },
       DrugEventRession:
       {
        
       },
       DrugEventResult:
       {},
       DrugEventMayRession:
       {},
       DrugEventDeal:
       {},
    };
  },
  created() {
    let NDate = new Date();
    this.ND = NDate;
  },
  mounted()
  {
    $(".DrugEventText").hide();//隱藏
    $(".DrugEventPain").hide();//表單隱藏
  },
  methods: {
    alert: function () {
      alert("12");
    },
    add: function () {
      this.number++;
    },
    DrugEventF: function()
    {
      if(this.DrugEvent==true)
      {
        $(".DrugEventText").show();//顯示
        $(".FallEventE").attr("disabled","disabled");//跌倒事件隱藏
        $(".MixEvent").attr("disabled","disabled");//綜合事件隱藏
        
      }else
      {
         $(".DrugEventText").hide();//藥物事件表單隱藏
         $(".MixEvent").removeAttr("disabled");//綜合事件顯示
         $(".FallEventE").removeAttr("disabled");//跌倒事件顯示
         $(".DrugEventPain").hide();//表單隱藏
         Object.assign(this.$data, this.$options.data());//數據初始化
       
      }
     
    },
    Mix: function()
    {
      if(this.MixEvent==true)
      {
        $(".DrugEventText").hide();//藥物事件表單隱藏
        $(".FallEventE").attr("disabled","disabled");//跌倒事件隱藏
        $(".DrugEvent").attr("disabled","disabled");//藥物事件隱藏
        $(".DrugEventPain").hide();//表單隱藏
      }else
      {
        $(".FallEventE").removeAttr("disabled");//跌倒事件顯示
        $(".DrugEvent").removeAttr("disabled");//藥物事件顯示
      }

    },

    FallE: function()
    {
      if(this.FallEventE==true)
      {
        $(".DrugEventText").hide();//藥物事件表單隱藏
        $(".MixEvent").attr("disabled","disabled");//綜合事件隱藏
        $(".DrugEvent").attr("disabled","disabled");//藥物事件隱藏
        $(".DrugEventPain").hide();//表單隱藏
      }else
      {
        $(".MixEvent").removeAttr("disabled");//綜合事件顯示
        $(".DrugEvent").removeAttr("disabled");//藥物事件顯示
      }

    },

    ShowDrugEventPain: function ()
    {
         $(".DrugEventPain").show();//顯示
    },

    test: function()
    {
    console.log(this.DrugEventData);
    }
  },
};
</script>
