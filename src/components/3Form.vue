<template>
    <div class="ORFormText">
    <input
      type="text"
      class="form-control ORFormText"
      v-model="EmpAccount"
      style="width: 200px"
    />
  </div>

  <div
    class="ORShowEmp form-iinline"
    name="ORShowEmp"
    v-if="ShowEmp == '無此帳號'"
  >
    {{ ShowEmp }}
  </div>

  <div class="ORShowEmp form-iinline" name="ORShowEmp" v-else>
    {{ ShowEmp }}
  </div>
  <div class="all">
    <div v-bind:class="{ line: Loadindbind }"></div>
  </div>
  <i class="fa-solid fa-user"></i
  ><button type="button" name="OREventEmp" class="btn btn-link">
    帶入員工
  </button>


  <i class="fa-solid fa-file-pen"></i
  ><button
    type="button"
    @click="ShowFEvetn_Influ('SEE')"
    value="hide"
    name="FEvetn_Influ"
    class="btn btn-link"
  >
    事件影響
  </button>

  <i class="fa-solid fa-heart-circle-exclamation"></i
  ><button
    type="button"
    @click="ShowFEvetnProcess('SEE')"
    name="FEvetn_InfluProcess"
    class="btn btn-link"
  >
    事件描述/事件處理
  </button>
  <br />
  <i class="fa-solid fa-file-circle-exclamation"></i
  ><button
    type="button"
    name="FEvetn_InfluReason"
    @click="ShowReasonImprove('SEE')"
    class="btn btn-link"
  >
    事件原因/改善措施
  </button>

  <i class="fa-solid fa-file-circle-question"></i
  ><button
    type="button"
    name="OREventFqu"
    class="btn btn-link"
    @click="ShowFqueSecurity('SEE')"
  >
    嚴重程度/委員會
  </button>
<hr/>
<div class="FEvetn_Influ">
    <label class="Event_Main_Title">事件影響(通報人填寫):</label><br /><br />
    <label class="Event_Title">病患姓名:</label><br />
    <input type="text" class="form-control"   v-model="FEvetn_Influ.Influ_Name" name="Patient_Name" />

    <label class="Event_Title">病歷號碼:</label><br />
    <input type="text" class="form-control"  v-model="FEvetn_Influ.Influ_Number"  name="Patient_Number" />

    <label class="Event_Title">性別:</label><br />
    <input type="radio"  value="男生" v-model="FEvetn_Influ.Influ_Sex" name="Patient_sex">男生
    <input type="radio"  value="女生" v-model="FEvetn_Influ.Influ_Sex" name="Patient_sex">女生
    <br />
    <label class="Event_Title">出生年月日:</label><br />
    <input type="text" class="form-control"  v-model="FEvetn_Influ.Influ_BirthDay"  @input="Patient_Age" name="Patient_Number" placeholder="19xx/xx/xx" />
    <label class="Event" :style="{ color: 'red' }" v-if="FEvetn_Influ.Influ_Age !== '格式錯誤'">
    病患: {{ FEvetn_Influ.Influ_Name }} - {{ FEvetn_Influ.Influ_Age }} 歲</label>
    <label class="Event" v-else :style="{ color: 'red' }">請輸入正確格式</label><br />

    <label class="Event_Title">類別:</label><br />
    <input class="form-check-input "  v-model="FEvetn_Influ.Influ_Class" type="radio" value="住院病人" id="flexCheckChecked"/>
    <label >住院病人</label>

    <input class="form-check-input" v-model="FEvetn_Influ.Influ_Class" type="radio" value="門、急診病人" id="flexCheckChecked"/>
    <label>門、急診病人</label>

    <input class="form-check-input " v-model="FEvetn_Influ.Influ_Class" type="radio" value="不知道" id="flexCheckChecked"/>
    <label>不知道</label>

    <br />
    <label class="Event_Title">病人反映:</label><br />
    <input class="form-check-input "  v-model="FEvetn_Influ.Influ_Argu" type="checkbox" value="無" id="flexCheckChecked"/>
    <label>無</label>

    <input class="form-check-input" v-model="FEvetn_Influ.Influ_Argu" type="checkbox" value="聲稱向上級反映" id="flexCheckChecked"/>
    <label>聲稱向上級反映</label>

    <input class="form-check-input " v-model="FEvetn_Influ.Influ_Argu" type="checkbox" value="聲稱要訴訟" id="flexCheckChecked"/>
    <label>聲稱要訴訟</label>
    <input class="form-check-input " v-model="FEvetn_Influ.Influ_Argu" type="checkbox" value="其他" id="flexCheckChecked"/>
    <label>其他</label>
    <input class="form-check-input " v-model="FEvetn_Influ.Influ_Argu" type="checkbox" value="不知道" id="flexCheckChecked"/>
    <label>不知道</label><br />

    <label class="Event_Title">其他影響:</label><br />
    <textarea
      class="form-control"
      type="textarea"
      v-model="FEvetn_Influ.Influ_Other"
      id="Influ_Other"
      rows="6"
    ></textarea>



</div>
<div class="FEvetnProcess">
    2
</div>
<div class="ReasonImprove">
    3
</div>
<div class="FqueSecurity">
    <label>嚴重程度(病安委員填寫):</label>
    <br />
    <label>此事件再發生頻率:</label>
    <select
      class="form-select Even_Patient_Frequency"
      v-model="FqueSecurity.Even_Patient_Frequency"
      name="Even_Patient_Frequency"
      aria-label="Default select example"
    >
      <option value="數週或數月內">數週或數月內</option>
      <option value="一年數次">一年數次</option>
      <option value="1-2年一次">1-2年一次</option>
      <option value="2-5年一次">2-5年一次</option>
      <option value="5年以上一次">5年以上一次</option>
      <option value="不知道">不知道</option></select
    ><br />
    <label>病人傷害:</label>
    <select
      class="form-select Even_Patient_Harm"
      v-model="FqueSecurity.Even_Patient_Harm"
      name="Even_Patient_Harm"
      aria-label="Default select example"
    >
      <option
        value="幾近錯誤：由於不經意或即時介入，並未真正發生在病人身上的事件。"
      >
        幾近錯誤：由於不經意或即時介入，並未真正發生在病人身上的事件。
      </option>
      <option value="無傷害：事件發生在病人身上，但沒有造成任何的傷害。">
        無傷害：事件發生在病人身上，但沒有造成任何的傷害。
      </option>
      <option
        value="輕微傷害：病人雖發生意外，但是未造成任何傷害也無需額外的醫療照護。"
      >
        輕微傷害：病人雖發生意外，但是未造成任何傷害也無需額外的醫療照護。
      </option>
      <option value="輕度傷害：病人因非疾病因素導致醫療照護的增加。">
        輕度傷害：病人因非疾病因素導致醫療照護的增加。
      </option>
      <option value="中度傷害：病人因非疾病因素導致永久性功能障礙。">
        中度傷害：病人因非疾病因素導致永久性功能障礙。
      </option>
      <option value="重度傷害：病人因非疾病因素導致永久性功能喪失。">
        重度傷害：病人因非疾病因素導致永久性功能喪失。
      </option>
      <option value="嚴重傷害：病人因非疾病因素導致死亡。">
        嚴重傷害：病人因非疾病因素導致死亡。
      </option>
      <option value="有傷害，但無法判定傷害嚴重程度。">
        有傷害，但無法判定傷害嚴重程度。
      </option>
      <option value="不知道">不知道</option></select
    ><br />
    <label>病人安全委員會:</label>
    <select
      class="form-select Even_Patient_Harm"
      v-model="FqueSecurity.Security_Suggest"
      name="Even_Patient_Harm"
      aria-label="Default select example"
    >
      <option
        value="極度或高度危險事件，建議成立小組調查根本原因及研擬改善措施。"
      >
        極度或高度危險事件，建議成立小組調查根本原因及研擬改善措施。
      </option>
      <option
        value="中度或低度危險事件，建議由該部門提出改善方案，納入委員會追蹤。"
      >
        中度或低度危險事件，建議由該部門提出改善方案，納入委員會追蹤。
      </option>
      <option value="可能造成醫療爭議，建議轉交院長室由專人處理。">
        可能造成醫療爭議，建議轉交院長室由專人處理。
      </option></select
    ><br />
    <label>其他建議:</label>
    <textarea
      class="form-control"
      type="textarea"
      v-model="FqueSecurity.Security_Other_Suggest"
      id="Event_Fix"
      rows="6"
    ></textarea>
  </div>
</template>

<script>
import { ref,onMounted}from"vue";
export default {
    components:{

    },
    watch(){

    },
    setup() {
        // eslint-disable-next-line no-unused-vars
        const FEvetn_Influ=ref({
            Influ_Name:"",
            Influ_Sex:"",
            Influ_BirthDay:"",
            Influ_Age:"",
            Influ_Class:"",
            Influ_Number:"",
            Influ_Argu:[],
            Influ_Other:"",

        });
        // eslint-disable-next-line no-unused-vars
        const FEvetnProcess=ref({
            FEvetn_Time:"",
            FEvetn_Place:{
                Place_Position:"",
                Place_Department:"",
                Place_vPosition:"",
                Place_Wather:"",
            },
            FEvetn_InEmployee:[],
            FEvetn_Describle:"",
            Now_Notify:[],
            Now_Process:[],
            Other_Process:"",

        });
         // eslint-disable-next-line no-unused-vars
        const ReasonImprove=ref({
         Maybe_Reason_Action:"",
         Maybe_Reason:{
            Main_Select:"",
            Attach_Select:"",

         },
         Result:{
            Result_Main:"",
            Attach_Select:"",
         },
         True_Reason:{
            Main_Select:"",
            Attach_Select:"",

         },
         Event_Fix:""
        });


        // eslint-disable-next-line no-unused-vars
        const FqueSecurity=ref({
          Even_Patient_Frequency: "",
          Even_Patient_Harm: "",
          Security_Suggest:"",
          Security_Other_Suggest:"",
        });

    const ShowFEvetn_Influ = (Swicth) => {
      AllHide();
      const element = document.querySelector(".FEvetn_Influ");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    const ShowFEvetnProcess = (Swicth) => {
      AllHide();
      const element = document.querySelector(".FEvetnProcess");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    const ShowReasonImprove = (Swicth) => {
      AllHide();
      const element = document.querySelector(".ReasonImprove");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    const ShowFqueSecurity = (Swicth) => {
      AllHide();
      const element = document.querySelector(".FqueSecurity");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    const AllHide = () => {
      FormArray.value.forEach((element) => {
        let elements = document.querySelector(element);
        elements.classList.add("hidden");
      });
    };
    
    const FormArray = ref([
      ".FEvetn_Influ",
      ".FEvetnProcess",
      ".ReasonImprove",
      ".FqueSecurity",
    ]);

    const Date_Limit=ref("10");
    const Patient_Age=()=>{
        const regex=/^\d{4}\/\d{2}\/\d{2}$/;
      if(!regex.test(FEvetn_Influ.value.Influ_BirthDay)){
        FEvetn_Influ.value.Influ_Age="格式錯誤";
      }else
      {
    const CurrendDate=new Date();
      const Patient_Date=new Date(FEvetn_Influ.value.Influ_BirthDay);
      const Age=CurrendDate.getFullYear()-Patient_Date.getFullYear();
      FEvetn_Influ.value.Influ_Age=Age;
      }

    }
        onMounted(()=>{
            AllHide();
        });
        return{
            FEvetn_Influ,
            FEvetnProcess,
            ReasonImprove,
            FqueSecurity,
            Date_Limit,
            ShowFEvetn_Influ,
            ShowFEvetnProcess,
            ShowReasonImprove,
            ShowFqueSecurity,
            Patient_Age,

        };
    },
}
</script>
<style>
.Event_Title{
    font-size:15px;
    font-family: "Noto Sans TC", sans-serif;

    color:rgb(208, 0, 255);
    text-shadow: 3px 3px 3px #a8b8c4;

}
.Event_Main_Title{
    color: rgb(255, 0, 60);
    font-size: 20px;
    text-shadow: 3px 3px 3px #bfc4a8;

}

</style>