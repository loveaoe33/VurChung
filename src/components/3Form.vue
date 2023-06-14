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
  <hr />
  <div class="FEvetn_Influ">
    <label class="Event_Main_Title">事件影響(通報人填寫):</label><br /><br />
    <label class="Event_Title">病患姓名:</label><br />
    <input
      type="text"
      class="form-control"
      v-model="FEvetn_Influ.Influ_Name"
      name="Patient_Name"
    />

    <label class="Event_Title">病歷號碼:</label><br />
    <input
      type="text"
      class="form-control"
      v-model="FEvetn_Influ.Influ_Number"
      name="Patient_Number"
    />

    <label class="Event_Title">性別:</label><br />
    <input
      type="radio"
      value="男生"
      v-model="FEvetn_Influ.Influ_Sex"
      name="Patient_sex"
    />男生
    <input
      type="radio"
      value="女生"
      v-model="FEvetn_Influ.Influ_Sex"
      name="Patient_sex"
    />女生
    <br />
    <label class="Event_Title">出生年月日:</label><br />
    <input
      type="text"
      class="form-control"
      v-model="FEvetn_Influ.Influ_BirthDay"
      @input="Patient_Age"
      name="Patient_Number"
      placeholder="19xx/xx/xx"
    />
    <label
      class="Event"
      :style="{ color: 'red' }"
      v-if="FEvetn_Influ.Influ_Age !== '格式錯誤'"
    >
      病患: {{ FEvetn_Influ.Influ_Name }} -
      {{ FEvetn_Influ.Influ_Age }} 歲</label
    >
    <label class="Event" v-else :style="{ color: 'red' }">請輸入正確格式</label
    ><br />

    <label class="Event_Title">類別:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Class"
      type="radio"
      value="住院病人"
      id="flexCheckChecked"
    />
    <label>住院病人</label>

    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Class"
      type="radio"
      value="門、急診病人"
      id="flexCheckChecked"
    />
    <label>門、急診病人</label>

    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Class"
      type="radio"
      value="不知道"
      id="flexCheckChecked"
    />
    <label>不知道</label>

    <br />
    <label class="Event_Title">病人反映:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Argu"
      type="checkbox"
      value="無"
      id="flexCheckChecked"
    />
    <label>無</label>

    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Argu"
      type="checkbox"
      value="聲稱向上級反映"
      id="flexCheckChecked"
    />
    <label>聲稱向上級反映</label>

    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Argu"
      type="checkbox"
      value="聲稱要訴訟"
      id="flexCheckChecked"
    />
    <label>聲稱要訴訟</label>
    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Argu"
      type="checkbox"
      value="其他"
      id="flexCheckChecked"
    />
    <label>其他</label>
    <input
      class="form-check-input"
      v-model="FEvetn_Influ.Influ_Argu"
      type="checkbox"
      value="不知道"
      id="flexCheckChecked"
    />
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
    <label class="Event_Main_Title">事件描述(通報者填寫):</label><br /><br />
    <label class="Event_Title">發生時間:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_TimeBool.KnowBool"
      type="radio"
      value="知道"
      id="flexCheckChecked"
    />
    <label>知道</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_TimeBool.KnowBool"
      type="radio"
      value="不知道"
      id="flexCheckChecked"
    />
    <label>不知道</label>
    <textarea
      v-if="FEvetnProcess.FEvetn_TimeBool.KnowBool == '知道'"
      class="form-control know_TextArea"
      type="textarea"
      v-model="FEvetnProcess.FEvetn_TimeBool.knowText"
      name="know_Text"
      rows="2"
    ></textarea
    ><br />
    <label class="Event_Title">發生地點:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.OutSideBool"
      type="radio"
      value="院內區"
      id="flexCheckChecked"
    />
    <label>院內區</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.OutSideBool"
      type="radio"
      value="院外區"
      id="flexCheckChecked"
    />
    <label>院外區</label>
    <textarea
      v-if="FEvetnProcess.FEvetn_Place.OutSideBool == '院外區'"
      class="form-control OutSide_TextArea"
      type="textarea"
      v-model="FEvetnProcess.FEvetn_Place.OutSideBoolText"
      name="know_Text"
      rows="2"
    ></textarea
    ><br />
    <label class="Event_Title">地板潮濕:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_Wather.Place_WatherBoole"
      type="radio"
      value="是"
      id="flexCheckChecked"
    />
    <label>是</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_Wather.Place_WatherBoole"
      type="radio"
      value="否"
      id="flexCheckChecked"
    />
    <label>否</label>
    <textarea
      v-if="FEvetnProcess.FEvetn_Place.Place_Wather.Place_WatherBoole == '是'"
      class="form-control Place_Wather"
      type="textarea"
      v-model="FEvetnProcess.FEvetn_Place.Place_Wather.Place_WatherText"
      name="know_Text"
      rows="2"
    ></textarea
    ><br />

    <label class="Event_Title">單位:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.Place_Department"
      type="radio"
      value="門診"
      id="flexCheckChecked"
    />
    <label>門診</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.Place_Department"
      type="radio"
      value="病房(三樓)"
      id="flexCheckChecked"
    />
    <label>病房(三樓)</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.Place_Department"
      type="radio"
      value="病房(四樓)"
      id="flexCheckChecked"
    />
    <label>病房(四樓)</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.Place_Department"
      type="radio"
      value="病房(五樓)"
      id="flexCheckChecked"
    />
    <label>病房(五樓)</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.Place_Department"
      type="radio"
      value="病房(六樓)"
      id="flexCheckChecked"
    />
    <label>病房(六樓)</label>
    <label class="Event_Title">跌倒位置:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="病床邊"
      id="flexCheckChecked"
    />
    <label>病床邊</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="病室內"
      id="flexCheckChecked"
    />
    <label>病室內</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="病室外"
      id="flexCheckChecked"
    />
    <label>病室外</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="浴室廁所(內)"
      id="flexCheckChecked"
    />
    <label>浴室廁所(內)</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="浴室廁所(外)"
      id="flexCheckChecked"
    />
    <label>浴室廁所(外)</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="病房走道"
      id="flexCheckChecked"
    />
    <label>病房走道</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="樓(電梯間)"
      id="flexCheckChecked"
    />
    <label>樓(電梯間)</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_Place.Place_vPosition"
      type="radio"
      value="公共區域"
      id="flexCheckChecked"
    />
    <label>公共區域</label><br />
    <label class="Event_Title">在場人員:</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="主照顧者"
      id="flexCheckChecked"
    />
    <label>主照顧者</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="護理人員"
      id="flexCheckChecked"
    />
    <label>護理人員</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="照顧服務員"
      id="flexCheckChecked"
    />
    <label>照顧服務員</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="訪客"
      id="flexCheckChecked"
    />
    <label>訪客</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="病患"
      id="flexCheckChecked"
    />
    <label>病患</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="外包人員"
      id="flexCheckChecked"
    />
    <label>外包人員</label><br />
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="其他人員"
      id="flexCheckChecked"
    />
    <label>其他人員</label>
    <input
      class="form-check-input"
      v-model="FEvetnProcess.FEvetn_InEmployee"
      type="checkbox"
      value="不知道"
      id="flexCheckChecked"
    />
    <label>不知道</label><br />

    <label class="Event_Title">事件描述:</label><br />
    <textarea
      class="form-control FEvetn_Describle"
      type="textarea"
      v-model="FEvetnProcess.FEvetn_Describle"
      name="FEvetn_Describle"
      rows="6"
    ></textarea
    ><br />
    <label class="Event_Main_Title">事發處理(通報人填寫):</label><br /><br />
    <label class="Event_Title">立即通知:</label><br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="醫師"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 醫師 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="護理人員"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 護理人員 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="主管"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 主管 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="家屬"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 家屬 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="清潔人員"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />

      <label class="form-check-label"> 清潔人員 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="其他人員"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 其他人員 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        value="不知道"
        id="NotifyEmployeeCheck"
        v-model="FEvetnProcess.Now_Notify"
      />
      <label class="form-check-label"> 不知道 </label>
    </div>
    <br />
    <div v-if="FEvetnProcess.Now_Notify.includes('家屬')">
      <textarea
        class="form-control"
        type="textarea"
        v-model="FEvetnProcess.Notify_Add"
        id="Event_Fix"
        rows="2"
      ></textarea>
      <label style="color: brown">請填入家屬資訊</label>
    </div>

    <label class="Event_Title">立即處理:</label><br />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="監測生命徵象"
        id="flexCheckChecked"
      />
      <label>監測生命徵象</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="加強照護防範 "
        id="flexCheckChecked"
      />
      <label>加強照護防範</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="予以慰問及支持"
        id="flexCheckChecked"
      />
      <label>予以慰問及支持</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="急救"
        id="flexCheckChecked"
      />
      <label>急救</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="傷口照護"
        id="flexCheckChecked"
      />
      <label>傷口照護</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="地板清潔"
        id="flexCheckChecked"
      />
      <label>地板清潔</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="其他"
        id="flexCheckChecked"
      />
      <label>其他</label><br />
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        v-model="FEvetnProcess.Now_Process"
        type="checkbox"
        value="不知道"
        id="flexCheckChecked"
      />
      <label>不知道</label><br />
    </div>
    <label class="Event_Title">其他處置:</label><br />
    <textarea
      class="form-control"
      type="textarea"
      v-model="FEvetnProcess.Other_Process"
      id="Event_Fix"
      rows="6"
    ></textarea>
  </div>
  <div class="ReasonImprove">
    <label class="Event_Main_Title">事件原因(通報者填寫):</label><br /><br />
    <label class="Event_Title">近端原因分析:</label><br />

    <input
      type="radio"
      value="下床如廁"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />下床如廁
    <input
      type="radio"
      value="起身"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />起身
    <input
      type="radio"
      value="走路"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />走路
    <input
      type="radio"
      value="取用尿壺"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />取用尿壺
    <input
      type="radio"
      value="跨床欄"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />跨床欄
    <input
      type="radio"
      value="洗澡"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />洗澡
    <input
      type="radio"
      value="其他"
      v-model="ReasonImprove.Maybe_Reason_Action"
      name="Maybe_Reason_Action"
    />其他
    <br />
    <label class="Event_Title">原因:</label><br />




    <label >傷害等級:</label><br />
    <select
      class="form-select Maybe_Reason_Result"
      v-model="ReasonImprove.Result.Result_Main"
      name="Maybe_Reason_Result"
      aria-label="Default select example"
    >
    <option
        value="跡近錯失：由於不經意或即時介入，並未真正發生在病人身上的事件。"
      >
        跡近錯失：由於不經意或即時介入，並未真正發生在病人身上的事件。
      </option>
      <option
        value="輕微傷害：病人雖發生意外，但是未造成任何傷害也無需額外的醫療照護。"
      >
        輕微傷害：病人雖發生意外，但是未造成任何傷害也無需額外的醫療照護。
      </option>
      <option
        value="輕度傷害：事件雖然造成，但不需要額外處 
  理或指需稍微治療與觀察之傷害程度，如擦  
  傷、挫傷、不需縫合之皮膚小撕裂傷。
。"
      >
        輕度傷害：事件雖然造成，但不需要額外處
        理或指需稍微治療與觀察之傷害程度，如擦
        傷、挫傷、不需縫合之皮膚小撕裂傷。
      </option>
      <option
        value="中度傷害：如扭傷、大或深的撕裂傷、或皮 
  膚撕裂、小挫傷。需額外的探視、評估或觀
  察，僅需要簡單的處理如：抽血、驗尿檢查
  或包紮、止血治療。
"
      >
        中度傷害：如扭傷、大或深的撕裂傷、或皮
        膚撕裂、小挫傷。需額外的探視、評估或觀
        察，僅需要簡單的處理如：抽血、驗尿檢查 或包紮、止血治療。
      </option>
      <option
        value="重度傷害：除需要額外的探視，評估或觀察
  外，還需住院或延長住院時間作特別的處理。
"
      >
        重度傷害：除需要額外的探視，評估或觀察
        外，還需住院或延長住院時間作特別的處理。
      </option>
      <option
        value="嚴重傷害：造成病人永久性殘障或永久性功 
  能障礙。
"
      >
        嚴重傷害：造成病人永久性殘障或永久性功 能障礙。
      </option>
      <option value="死亡。">死亡。</option></select
    ><br />
    <label >傷害部位:</label><br />
    <textarea
      class="form-control"
      type="textarea"
      v-model="ReasonImprove.Result.Attack_Select"
      id="Attach_Select"
      rows="3"
    ></textarea>
    <label >致傷物品:</label><br />

    <textarea
      class="form-control"
      type="textarea"
      v-model="ReasonImprove.Result.Injuring_Item"
      id="Injuring_Item"
      rows="3"
    ></textarea>
    <label>  原因（請依跌倒當時的主要原因勾選一
大項目，而每大項的子項目則可複選）:</label><br />
    <input
      type="radio"
      value="病人健康狀況引起"
      v-model="ReasonImprove.Maybe_Reason.Main_Select"
      name="Main_Select"
    />病人健康狀況引起
    <input
      type="radio"
      value="手術、藥物或麻醉引起"
      v-model="ReasonImprove.Maybe_Reason.Main_Select"
      name="Main_Select"
    />手術、藥物或麻醉引起
    <input
      type="radio"
      value="環境因素引起"
      v-model="ReasonImprove.Maybe_Reason.Main_Select"
      name="Main_Select"
    />環境因素引起  <br />
    <input
      type="radio"
      value="其他"
      v-model="ReasonImprove.Maybe_Reason.Main_Select"
      name="Main_Select"
    />其他


    <div
      v-if="ReasonImprove.Maybe_Reason.Main_Select == '病人健康狀況引起'"
      class="Main_Select_CheckDiv form-control"
    >
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="頭暈眩虛弱"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 頭暈眩虛弱 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="視力障礙"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 視力障礙 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="活動障礙"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 活動障礙 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="排泄障礙"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 排泄障礙 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="步態不穩、軟弱、平衡 
   感差
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 步態不穩、軟弱、平衡 
   感差
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="過去一年有跌倒"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 過去一年有跌倒 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="未意識會跌 
   倒或下床時不喜歡麻煩別人
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 未意識會跌 
   倒或下床時不喜歡麻煩別人
 </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="年齡70 
   歲以上
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 年齡70 
   歲以上
 </label>
 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="年齡70 
   歲以上
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他 
      
 </label>
    </div>
  </div>
  
  </div>

    <div
    v-if="ReasonImprove.Maybe_Reason.Main_Select == '環境因素引起'"
      class="Main_Select_CheckDiv form-control"
    >
      
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="地面濕滑

"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 地面濕滑</label>

      </div>

      <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="地面
   有障礙物，如電線、腳凳等


"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 地面
   有障礙物，如電線、腳凳等
</label>

      </div>


      <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="IV架


"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> IV架
</label>

      </div>


      <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="輪椅

"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 輪椅</label>

      </div>



      <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="其他

"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他</label>

      </div>


      <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="建  
   築結構設計不當


"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 建築結構設計不當
</label>

      </div>


  
     
  
  </div>

    <div
    v-if="ReasonImprove.Maybe_Reason.Main_Select == '手術、藥物或麻醉引起'"
      class="Main_Select_CheckDiv form-control"

    >

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="醫療處置
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 醫療處置 
      
 </label>
    </div>


    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="麻醉
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 麻醉 
      
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="藥物給藥
   時間____

"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 藥物給藥
   時間____
 
      
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="手術
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 手術 
      
 </label>
    </div>



    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="軟便劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 軟便劑 
      
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="鎮靜安眠劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 鎮靜安眠劑 
      
 </label>
    </div>

    
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="降壓劑

"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 降壓劑
 
      
 </label>
    </div>

    
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="利尿劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 利尿劑 
      
 </label>
    </div>


    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="降血糖劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 降血糖劑 
      
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="抗癲癇劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 抗癲癇劑 
      
 </label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="抗癲癇劑
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 止痛藥 
      
 </label>
    </div>


    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.Maybe_Reason.Attach_Select"
        value="其他
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他 
      
 </label>
    </div>




    
    </div>


    <div
    v-if="ReasonImprove.Maybe_Reason.Main_Select == '其他'"
      class=" Main_Select_CheckDiv"
    >
    <input type="text" class="form-control"  v-model="ReasonImprove.Maybe_Reason.Other_Select" name="Main_Select_Text" >
  </div>


    <br />
    <label class="Event_Title">根本原因:</label><br />
    <input
      type="radio"
      value="A人力資源管理"
      v-model="ReasonImprove.True_Reason.Main_Select"
      name="True_Reason_Main_Select"
    />A人力資源管理
    <input
      type="radio"
      value="B資訊系統"
      v-model="ReasonImprove.True_Reason.Main_Select"
      name="True_Reason_Main_Select"
    />B資訊系統
    <input
      type="radio"
      value="C環境設備管理"
      v-model="ReasonImprove.True_Reason.Main_Select"
      name="True_Reason_Main_Select"
    />C環境設備管理
    <input
      type="radio"
      value="D領導溝通"
      v-model="ReasonImprove.True_Reason.Main_Select"
      name="True_Reason_Main_Select"
    />D領導溝通
   <br />
    <input
      type="radio"
      value="E作業標準"
      v-model="ReasonImprove.True_Reason.Main_Select"
      name="True_Reason_Main_Select"
    />E作業標準


    <div
    v-if="ReasonImprove.True_Reason.Main_Select == 'A人力資源管理'"
      class=" True_Reason_CheckDiv form-control"
    >
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="人員配置不當
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 人員配置不當 
      
 </label>
 </div>

 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="缺乏在職教育
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 缺乏在職教育 
      
 </label>
 </div>

 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="未宣導SOP
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 未宣導SOP 
      
 </label>
 </div>

 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="未定期評核SOP
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 未定期評核SOP 
      
 </label>
 </div>

 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="其他
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他 
      
 </label>
 </div>

  </div>

  <div
    v-if="ReasonImprove.True_Reason.Main_Select == 'B資訊系統'"
      class=" True_Reason_CheckDiv form-control"
    >
    <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="資訊不夠清楚
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 資訊不夠清楚 
      
 </label>
 </div>
 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="資訊不易取得
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 資訊不易取得 
      
 </label>
 </div>
 <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="其他
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他 
      
 </label>
 </div>

  </div>

  <div
    v-if="ReasonImprove.True_Reason.Main_Select == 'C環境設備管理'"
    class=" True_Reason_CheckDiv form-control"
    >
    <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="不利事件執行:光線、動線、空間等等...
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 不利事件執行:光線、動線、空間等等... 
      
 </label>
 </div>

 <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="無定期檢查:光線、設備等等...
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 無定期檢查:光線、設備等等... 
      
 </label>
 </div>

</div>


  <div
    v-if="ReasonImprove.True_Reason.Main_Select == 'D領導溝通'"
    class=" True_Reason_CheckDiv form-control"
    >
    <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="病防衛稽核跌倒防範
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 病防衛稽核跌倒防範
      
 </label>
 </div>

 <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="負責護理人員未交班此事件
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 負責護理人員未交班此事件 
      
 </label>
 </div>

 <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="其他
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他
      
 </label>
 </div>



  </div>
  <div
    v-if="ReasonImprove.True_Reason.Main_Select == 'E作業標準'"
    class=" True_Reason_CheckDiv form-control"
    >
    <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="SOP過於簡化
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> SOP過於簡化
      
 </label>
 </div>
 <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="SOP過於繁瑣
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> SOP過於繁瑣
      
 </label>
 </div>
 <div class="form-check form-check-inline ">
      <input
        class="form-check-input "
        type="checkbox"
        v-model="ReasonImprove.True_Reason.Attach_Select"
        value="其他
"
        id="flexCheckChecked"
      />
      <label class="form-check-label"> 其他
      
 </label>
 </div> 
 
</div><br />
<label class="Event_Title">改善措施:</label><br />
<textarea
      class="form-control"
      type="textarea"
      v-model="ReasonImprove.Event_Fix"
      id="Event_Fix"
      rows="6"
    ></textarea>
</div>




  <div class="FqueSecurity Event_Main_Title">
    <label>嚴重程度(病安委員填寫):</label>
    <br />
    <br />
    <label class="Event_Title">此事件再發生頻率:</label>
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
    <label class="Event_Title">病人傷害:</label>
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
    <label class="Event_Title">病人安全委員會:</label>
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
    <label class="Event_Title">其他建議:</label>
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
import { ref, onMounted } from "vue";
export default {
  components: {},
  watch() {},
  setup() {
    // eslint-disable-next-line no-unused-vars
    const mapString = ref("家屬");
    // eslint-disable-next-line no-unused-vars
    const MergeString = ref("");
    const FEvetn_Influ = ref({
      Influ_Name: "",
      Influ_Sex: "",
      Influ_BirthDay: "",
      Influ_Age: "",
      Influ_Class: "",
      Influ_Number: "",
      Influ_Argu: [],
      Influ_Other: "",
    });
    // eslint-disable-next-line no-unused-vars
    const FEvetnProcess = ref({
      FEvetn_TimeBool: {
        KnowBool: "",
        knowText: "",
      },
      FEvetn_Time: "",
      FEvetn_Place: {
        Place_Position: {
          OutSideBool: "",
          OutSideBoolText: "",
        },
        Place_Department: "",
        Place_vPosition: "",
        Place_Wather: {
          Place_WatherBoole: "",
          Place_WatherText: "",
        },
      },
      FEvetn_InEmployee: [],
      FEvetn_Describle: "",
      Now_Notify: [],
      Now_Process: [],
      Other_Process: "",
      Notify_Add: "", //家屬值判斷與新增
    });
    // eslint-disable-next-line no-unused-vars
    const ReasonImprove = ref({
      Maybe_Reason_Action: "",
      Maybe_Reason: {
        Main_Select: "",
        Attach_Select: [],
        Other_Select:"",
      },
      Result: {
        Result_Main: "",
        Attack_Select: "",
        Injuring_Item:"",
      },
      True_Reason: {
        Main_Select: "",
        Attach_Select: [],
      },
      Event_Fix: "",
    });

    // eslint-disable-next-line no-unused-vars
    const FqueSecurity = ref({
      Even_Patient_Frequency: "",
      Even_Patient_Harm: "",
      Security_Suggest: "",
      Security_Other_Suggest: "",
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

    const Date_Limit = ref("10");
    const Patient_Age = () => {
      const regex = /^\d{4}\/\d{2}\/\d{2}$/;
      if (!regex.test(FEvetn_Influ.value.Influ_BirthDay)) {
        FEvetn_Influ.value.Influ_Age = "格式錯誤";
      } else {
        const CurrendDate = new Date();
        const Patient_Date = new Date(FEvetn_Influ.value.Influ_BirthDay);
        const Age = CurrendDate.getFullYear() - Patient_Date.getFullYear();
        FEvetn_Influ.value.Influ_Age = Age;
      }
    };
    //   const Now_Notify_Add=()=>{
    //  MergeString.value=`家屬:(${FEvetnProcess.value.Notify_Add})`;
    //  FEvetnProcess.value.Now_Notify.map((value)=>{
    //   (value.includes(mapString))? MergeString: value
    //  })
    // }
    onMounted(() => {
      AllHide();
    });
    return {
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
};
</script>
<style>
.Event_Title {
  font-size: 15px;
  font-family: "Noto Sans TC", sans-serif;

  color: rgb(208, 0, 255);
  text-shadow: 3px 3px 3px #a8b8c4;
}
.Event_Main_Title {
  color: rgb(255, 0, 60);
  font-size: 20px;
  text-shadow: 3px 3px 3px #bfc4a8;
}

.know_TextArea {
  opacity: 0;
  animation: fade-in 1s ease-in-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.OutSide_TextArea {
  opacity: 0;
  animation: fade-in2 1s ease-in-out forwards;
}

@keyframes fade-in2 {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.Place_Wather {
  opacity: 0;
  animation: fade-in3 1s ease-in-out forwards;
}
@keyframes fade-in3 {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>