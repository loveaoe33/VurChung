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
    @click="ShowOREventDiscrable('SEE')"
    value="hide"
    name="OREventDiscrable"
    class="btn btn-link"
  >
    事件類別/事件描述
  </button>

  <i class="fa-solid fa-heart-circle-exclamation"></i
  ><button
    type="button"
    @click="ShowOREventProcess('SEE')"
    name="OREventProcess"
    class="btn btn-link"
  >
    事件處理/事件影響
  </button>
  <i class="fa-solid fa-file-circle-exclamation"></i
  ><button
    type="button"
    name="OREventReason"
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

  <hr />
  <div class="ClassAndDiscrible">
    <label>選擇事件(通報者填寫):</label><br />
    <select
      class="form-select OREvent_DiscrableForm"
      v-model="Even_Object"
      name="OREvent_DiscrableForm"
      aria-label="Default select example"
    >
      <option value="輸血相關事件">輸血相關事件</option>
      <option value="手術相關事件">手術相關事件</option>
      <option value="檢查相關事件">檢查相關事件</option>
      <option value="檢驗相關事件">檢驗相關事件</option>
      <option value="醫療相關事件">醫療相關事件</option>
      <option value="管路相關事件">管路相關事件</option>
      <option value="公共意外相關事件">公共意外相關事件</option>
      <option value="治安相關事件">治安相關事件</option></select
    ><br />

    <label>描述事件(通報者填寫):</label>
    <br />
    <label class="form-check-label">發生時間:</label>
    <input type="textbox" class="form-control" />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input OREvent_Place_Check"
        type="checkbox"
        value="不知道"
        id="flexCheckChecked"
      />
      <label class="form-check-label">不知道請勾選</label>
    </div>
    <br /><br />
    <label class="form-check-label">發生地點:</label>
    <select
      class="form-select OREvent_DiscrableForm"
      v-model="Even_Object"
      name="OREvent_DiscrableForm"
      aria-label="Default select example"
    >
      <option value="病房">病房</option>
      <option value="門診">門診</option>
      <option value="放射室">放射室</option>
      <option value="檢驗室">檢驗室</option>
      <option value="手術室">手術室</option>
      <option value="藥局">藥局</option>
      <option value="公共區域">公共區域</option>
      <option value="其他">其他</option>
      <option value="不知道">不知道</option>
    </select>

    <br />
    <br />
    <label>在場人員(通報者填寫):</label>
    <br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="醫師"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 醫師 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="護理人員"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 護理人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="藥事人員"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 藥事人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="放射/檢驗人員"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 放射/檢驗人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="電腦/工務人員"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 電腦/工務人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="外包清潔人員"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 外包清潔人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="看護/家屬/訪客"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 看護/家屬/訪客 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Event_discrable.Event_InEmployee"
        value="其他病患"
        id="InEmployeeCheck"
      />
      <label class="form-check-label"> 其他病患 </label>
    </div>
    <br />
    <label class="form-check-label"> 事件描述 </label>
    <textarea
      class="form-control"
      type="textarea"
      v-model="Event_discrable.Event_TextArea"
      id="Event_TextArea"
      rows="6"
    ></textarea>
  </div>

  <div class="ProcessAndInfluence">
    <label>事發處理(通報者填寫):</label>
    <br />
    <label>立即通知:</label>
    <br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="醫師"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 醫師 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="護理人員"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 護理人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="主管"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 主管 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="家屬"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 家屬 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="值班人員"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 值班人員 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="警衛"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 警衛 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Notify"
        value="其他人員"
        id="NotifyEmployeeCheck"
      />
      <label class="form-check-label"> 其他人員 </label>
    </div>
    <br />
    <br />
    <label>醫療處置:</label>
    <br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="監測生命跡象"
        id="Medical_Process"
      />
      <label class="form-check-label"> 監測生命跡象 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="加強照護措施"
        id="Medical_Process"
      />
      <label class="form-check-label"> 加強照護措施 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="慰問與支持"
        id="Medical_Process"
      />
      <label class="form-check-label"> 慰問與支持 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="急救"
        id="Medical_Process"
      />
      <label class="form-check-label"> 急救 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="警衛"
        id="Medical_Process"
      />
      <label class="form-check-label"> 傷口照護 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Process.Event_Medical_Process"
        value="警衛"
        id="Medical_Process"
      />
      <label class="form-check-label"> 其他 </label>
    </div>
    <br />
    <br />
    <label>其他處置:</label>
    <textarea
      class="form-control"
      type="textarea"
      v-model="Even_Process.Event_Other_Process"
      id="Other_Process"
      rows="6"
    ></textarea>
    <br />
    <label>事件影響(通報者填寫):</label>
    <br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Influence.InfluenceObject"
        value="影響病人"
        id="Patien_Influence"
      />
      <label class="form-check-label"> 影響病人 </label>
      <div class="PatienDiv"></div>
    </div>
    <br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="Even_Influence.InfluenceObject"
        value="其他影響"
        id="Other_Influence"
      />
      <label class="form-check-label"> 其他影響 </label>
      <div class="OtherDiv"></div>
    </div>
  </div>

  <div class="ReasonandImprove">
    <label>可能原因(主管填寫):</label>
    <br />
    <label>近端原因:</label>
    <textarea
      class="form-control"
      type="textarea"
      v-model="Even_Reason.Event_MaybeReasion"
      id="Event_MaybeReasion"
      rows="6"
    ></textarea>
    <br />
    <label>根本原因:</label>
    <textarea
      class="form-control"
      type="textarea"
      v-model="Even_Reason.Event_TrueReasion"
      id="Event_TrueReasion"
      rows="6"
    ></textarea>
    <br />
    <br />
    <label>改善措施(主管填寫):</label>
    <br />
    <textarea
      class="form-control"
      type="textarea"
      v-model="Even_Reason.Event_Fix"
      id="Event_Fix"
      rows="6"
    ></textarea>
  </div>

  <div class="Fqu">
    <label>嚴重程度(病安委員填寫):</label>
    <br />
    <label>此事件再發生頻率:</label>
    <select
      class="form-select Even_Frequency"
      v-model="Even_Frequency.Even_Patient_Frequency"
      name="Even_Frequency"
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
      v-model="Even_Frequency.Even_Patient_Harm"
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
      v-model="Security_Committee.Security_Response"
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
      v-model="Security_Committee.Security_Response"
      id="Event_Fix"
      rows="6"
    ></textarea>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeMount } from "vue";

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const Loadindbind = ref(false);
    const Even_Employee = ref({
      Employee_ShowEmp: "456",
      Employee_EmpAccount: "",
      Employee_Name: "",
      Employee_Depart: "",
      Emloyee_identity: "",
    });

    // eslint-disable-next-line no-unused-vars
    const Even_Object = ref("請選擇");
    // eslint-disable-next-line no-unused-vars
    const Event_discrable = ref({
      Event_Time: "",
      Event_Place: "",
      Event_InEmployee: [],
      Event_TextArea: "",
    });
    // eslint-disable-next-line no-unused-vars
    const Even_Process = ref({
      Event_Notify: [],
      Event_Medical_Process: [],
      Event_Other_Process: "",
    });
    // eslint-disable-next-line no-unused-vars
    const Even_Influence = ref({
      Influence_PatientCheck: false,
      Influence_OtherCheck: false,
      Influence_Patient_Name: "",
      Influence_Patient_sex: "",
      Influence_Patient_class: "",
      Influence_Patient_Callback: "",
      InfluenceObject: [],
      Influence_Maybe_Season: "",
      Influence_True_Season: "",
      Influence_Improve: "",
    });
    // eslint-disable-next-line no-unused-vars
    const Even_Reason = ref({
      Event_MaybeReasion: "",
      Event_TrueReasion: "",
      Event_Fix: "",
    });
    // eslint-disable-next-line no-unused-vars
    const Even_Frequency = ref({
      Even_Patient_Frequency: "",
      Even_Patient_Harm: "",
    });
    // eslint-disable-next-line no-unused-vars
    const Security_Committee = ref({
      Security_Response: "",
    });

    const FormArray = ref([
      ".ClassAndDiscrible",
      ".ProcessAndInfluence",
      ".ReasonandImprove",
      ".Fqu",
    ]);
    // OREventDiscrableForm: function(){

    // }
    // eslint-disable-next-line no-unused-vars

    //清空物件初始化，data為物件常數宣告
    // eslint-disable-next-line no-unused-vars
    // const _init=()=>{
    //   Object.keys(data.value).forEach(key=>{
    //     data.value[key]=null;
    //     delete data.value[key];
    //   })
    // }

    //事件描述與類別表單
    const ShowOREventDiscrable = (Swicth) => {
      AllHide();
      const element = document.querySelector(".ClassAndDiscrible");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    //事件處理與影響
    // eslint-disable-next-line no-unused-vars
    const ShowOREventProcess = (Swicth) => {
      AllHide();
      const element = document.querySelector(".ProcessAndInfluence");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };

    const ShowReasonImprove = (Swicth) => {
      AllHide();
      const element = document.querySelector(".ReasonandImprove");
      Swicth == "hide"
        ? element.classList.add("hidden")
        : element.classList.remove("hidden");
    };
    const ShowFqueSecurity = (Swicth) => {
      AllHide();
      const element = document.querySelector(".Fqu");
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
    //事件原因與改善
    // eslint-disable-next-line no-unused-vars
    const ShowOREventReason = () => {};
    //嚴重程度與委員會
    // eslint-disable-next-line no-unused-vars
    const ShowOREventFqu = () => {};

    onMounted(() => {
      AllHide();
    });
    onBeforeMount(() => {});

    return {
      Loadindbind,
      Event_discrable,
      Even_Process,
      Security_Committee,
      Even_Frequency,
      Even_Influence,
      Even_Object,
      Even_Employee,
      Even_Reason,
      ShowOREventDiscrable,
      ShowOREventProcess,
      ShowReasonImprove,
      ShowFqueSecurity,
      AllHide,
    };
  },
};
</script>
<style >
.hidden {
  display: none;
}
</style>
