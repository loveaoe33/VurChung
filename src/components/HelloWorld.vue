<template>

  <div container>
    <input type="button" class="MaxinAxiosUpdate MaxinAxios" value="資料刷新" @click="CallUpdateMain">
    </div>
  <div class="MainData">
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
      <tbody >
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
          <td><button @click="DeletePost(item.id,key)">刪除</button></td>
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
    <FStation msg="555"/>
    

    <button
      type="button "
      id="ShowButton"
      class="btn btn-primary ShowButton"
      data-bs-toggle="modal"
      data-bs-target="#PaDataModal"
      hidden="hidden"
    >
      Launch demo modal
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade bs-example-modal-lg PaDataModal"
    id="PaDataModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" style="width: 900px">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">異常事件表單</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="PaTitle"><h2>患者資料:</h2></div>
            <ul>
              <!-- @dblclick="alertTd($event.toElement.className)" -->
              <li>
                患者姓名:<span
                  v-if="PaNameCheck"
                  @dblclick="PaNameCheck = !PaNameCheck"
                  class="PaName"
                  >{{ MPaName }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaName"
                  v-else
                  @keyup.enter="
                    PaNameEnter($event.target.className, $event.target.id),
                      (PaNameCheck = !PaNameCheck)
                  "
                  class="Patable"
                  name="PaNameText"
                  id="PaName"
                />
              </li>
              <br />
              <li>
                患者性別:<span
                  class="PaGender"
                  v-if="PaGenderCheck"
                  @dblclick="PaGenderCheck = !PaGenderCheck"
                  >{{ MPaGender }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaGender"
                  v-else
                  @keyup.enter="
                    PaGenderEnter($event.target.className, $event.target.id),
                      (PaGenderCheck = !PaGenderCheck)
                  "
                  class="Patable"
                  name="PaGenderText"
                  id="PaGender"
                />
              </li>
              <br />

              <li>
                患者病歷號碼:
                <span
                  v-if="PaNumberCheck"
                  @dblclick="PaNumberCheck = !PaNumberCheck"
                  class="PaNumber"
                  >{{ MPaNumber }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaNumber"
                  v-else
                  @keyup.enter="
                    PaNumberEnter($event.target.className, $event.target.id),
                      (PaNumberCheck = !PaNumberCheck)
                  "
                  class="Patable"
                  name="PaNumberText"
                  id="PaNumber"
                />
              </li>
              <br />
              <li>
                患者年齡:<span
                  v-if="PaAgeCheck"
                  @dblclick="PaAgeCheck = !PaAgeCheck"
                  class="PaAge"
                  >{{ MPaAge }}</span
                >

                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaAge"
                  v-else
                  @keyup.enter="
                    PaAgeEnter($event.target.className, $event.target.id),
                      (PaAgeCheck = !PaAgeCheck)
                  "
                  class="Patable"
                  name="PaAgeText"
                  id="PaAge"
                />
              </li>
              <br />
              <li>
                事件類別:<span
                  v-if="PaClassCheck"
                  @dblclick="PaClassCheck = !PaClassCheck"
                  class="PaClass"
                  >{{ MPaClass }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaClass"
                  v-else
                  @keyup.enter="
                    PaClassEnter($event.target.className, $event.target.id),
                      (PaClassCheck = !PaClassCheck)
                  "
                  class="Patable"
                  name="PaClassText"
                  id="PaClass"
                />
              </li>
              <br />
              <li>
                事件診斷:<span
                  v-if="PaDiaCheck"
                  @dblclick="PaDiaCheck = !PaDiaCheck"
                  class="PaDia"
                  >{{ MPaDia }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaDia"
                  v-else
                  @keyup.enter="
                    PaDiaEnter($event.target.className, $event.target.id),
                      (PaDiaCheck = !PaDiaCheck)
                  "
                  class="Patable"
                  name="PaDiaText"
                  id="PaDia"
                />
              </li>
              <br />
              <li>
                事件開始日期:<span
                  v-if="PaStartCheck"
                  @dblclick="PaStartCheck = !PaStartCheck"
                  class="PaStart"
                  >{{ MPaStart }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaStart"
                  v-else
                  @keyup.enter="
                    PaStartEnter($event.target.className, $event.target.id),
                      (PaStartCheck = !PaStartCheck)
                  "
                  class="Patable"
                  name="PaStartText"
                  id="PaStart"
                />
              </li>
              <br />
              <li>
                異常事件發現日:<span
                  v-if="PaFiDCheck"
                  @dblclick="PaFiDCheck = !PaFiDCheck"
                  class="PaFiD"
                  >{{ MPaFiD }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaFiD"
                  v-else
                  @keyup.enter="
                    PaFiDEnter($event.target.className, $event.target.id),
                      (PaFiDCheck = !PaGendePaFiDCheckrCheck)
                  "
                  class="Patable"
                  name="PaFiDText"
                  id="PaFiD"
                />
              </li>
              <br />
              <li>
                事件結束日期:<span
                  v-if="PaEndCheck"
                  @dblclick="PaEndCheck = !PaEndCheck"
                  class="PaEnd"
                  >{{ MPaEnd }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaEnd"
                  v-else
                  @keyup.enter="
                    PaEndEnter($event.target.className, $event.target.id),
                      (PaEndCheck = !PaEndCheck)
                  "
                  class="Patable"
                  name="PaEndText"
                  id="PaEnd"
                />
              </li>
              <br />
              <hr />
              <div class="PaTitle"><h2>紀載內容:</h2></div>

              <li>
                醫囑相關:<span
                  v-if="AboutOtherEventCheck"
                  @dblclick="AboutOtherEventCheck = !AboutOtherEventCheck"
                  class="AboutOtherEvent"
                  >{{ MAboutOtherEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MAboutOtherEvent"
                  v-else
                  @keyup.enter="
                    AboutOtherEventEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (AboutOtherEventCheck = !AboutOtherEventCheck)
                  "
                  class="patabledrug"
                  name="AboutOtherEventText"
                  id="AboutOtherEvent"
                />
              </li>
              <br />
              <li>
                處方籤交付相關:<span
                  v-if="PreScriptCheck"
                  @dblclick="PreScriptCheck = !PreScriptCheck"
                  class="PreScript"
                  >{{ MPreScript }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPreScript"
                  v-else
                  @keyup.enter="
                    PreScriptEnter($event.target.className, $event.target.id),
                      (PreScriptCheck = !PreScriptCheck)
                  "
                  class="patabledrug"
                  name="PreScriptext"
                  id="PreScript"
                />
              </li>
              <br />
              <li>
                運送過程相關:<span
                  v-if="DeliveryProcessEventCheck"
                  @dblclick="
                    DeliveryProcessEventCheck = !DeliveryProcessEventCheck
                  "
                  class="DeliveryProcessEvent"
                  >{{ MDeliveryProcessEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDeliveryProcessEvent"
                  v-else
                  @keyup.enter="
                    DeliveryProcessEventEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (DeliveryProcessEventCheck = !DeliveryProcessEventCheck)
                  "
                  class="patabledrug"
                  name="DeliveryProcessEventText"
                  id="DeliveryProcessEvent"
                />
              </li>
              <br />
              <li>
                藥局相關:<span
                  v-if="PharMacyEventCheck"
                  @dblclick="PharMacyEventCheck = !PharMacyEventCheck"
                  class="PharMacyEvent"
                  >{{ MPharMacyEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPharMacyEvent"
                  v-else
                  @keyup.enter="
                    PharMacyEventEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (PharMacyEventCheck = !PharMacyEventCheck)
                  "
                  class="patabledrug"
                  name="PharMacyEventText"
                  id="PharMacyEvent"
                />
              </li>
              <br />
              <li>
                護理相關:<span
                  v-if="NursingReEventCheck"
                  @dblclick="NursingReEventCheck = !NursingReEventCheck"
                  class="NursingReEvent"
                  >{{ MNursingReEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MNursingReEvent"
                  v-else
                  @keyup.enter="
                    NursingReEventEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (NursingReEventCheck = !NursingReEventCheck)
                  "
                  class="patabledrug"
                  name="NursingReEventText"
                  id="NursingReEvent"
                />
              </li>
              <br />
              <li>
                其他補充(發生原因):<span
                  v-if="OtherEventCheck"
                  @dblclick="OtherEventCheck = !OtherEventCheck"
                  class="OtherEvent"
                  >{{ MOtherEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MOtherEvent"
                  v-else
                  @keyup.enter="
                    OtherEventEnter($event.target.className, $event.target.id),
                      (OtherEventCheck = !OtherEventCheck)
                  "
                  class="patabledrug"
                  name="OtherEventText"
                  id="OtherEvent"
                />
              </li>
              <br />

              <li>
                事件結果(未給藥物):<span
                  v-if="NursionNonForheck"
                  @dblclick="NursionNonForheck = !NursionNonForheck"
                  class="NursionNonFor"
                  >{{ MNursionNonFor }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MNursionNonFor"
                  v-else
                  @keyup.enter="
                    NursionNonForEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (NursionNonForheck = !NursionNonForheck)
                  "
                  class="patabledrug"
                  name="NursionNonForText"
                  id="NursionNonFor"
                />
              </li>
              <br />
              <li>
                給藥錯誤:<span
                  v-if="ErrorEventCheck"
                  @dblclick="ErrorEventCheck = !ErrorEventCheck"
                  class="ErrorEvent"
                  >{{ MErrorEvent }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MErrorEvent"
                  v-else
                  @keyup.enter="
                    ErrorEventEnter($event.target.className, $event.target.id),
                      (ErrorEventCheck = !ErrorEventCheck)
                  "
                  class="nursingforerrortable"
                  name="ErrorEventText"
                  id="ErrorEvent"
                />
              </li>
              <br />
              <li>
                事件對病人影響:<span
                  v-if="EvenForPaCheck"
                  @dblclick="EvenForPaCheck = !EvenForPaCheck"
                  class="EvenForPa"
                  >{{ MEvenForPa }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MEvenForPa"
                  v-else
                  @keyup.enter="
                    EvenForPaEnter($event.target.className, $event.target.id),
                      (EvenForPaCheck = !EvenForPaCheck)
                  "
                  class="pharfortable"
                  name="EvenForPaText"
                  id="EvenForPa"
                />
              </li>
              <br />
              <li>
                病人對事件影響:<span
                  v-if="PaForEvenCheck"
                  @dblclick="PaForEvenCheck = !PaForEvenCheck"
                  class="PaForEven"
                  >{{ MPaForEven }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPaForEven"
                  v-else
                  @keyup.enter="
                    PaForEvenEnter($event.target.className, $event.target.id),
                      (PaForEvenCheck = !PaForEvenCheck)
                  "
                  class="pharfortable"
                  name="PaForEvenText"
                  id="PaForEven"
                />
              </li>
              <br />

              <li>
                工作流程因素:<span
                  v-if="WorkStatusProcessCheck"
                  @dblclick="WorkStatusProcessCheck = !WorkStatusProcessCheck"
                  class="WorkStatusProcess"
                  >{{ MWorkStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MWorkStatusProcess"
                  v-else
                  @keyup.enter="
                    WorkStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (WorkStatusProcessCheck = !WorkStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="WorkStatusProcessText"
                  id="WorkStatusProcess"
                />
              </li>
              <br />
              <li>
                藥品/資訊系統因素:<span
                  v-if="DrugInfoStatusProcessCheck"
                  @dblclick="
                    DrugInfoStatusProcessCheck = !DrugInfoStatusProcessCheck
                  "
                  class="DrugInfoStatusProcess"
                  >{{ MDrugInfoStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugInfoStatusProcess"
                  v-else
                  @keyup.enter="
                    DrugInfoStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (DrugInfoStatusProcessCheck = !DrugInfoStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="DrugInfoStatusProcessText"
                  id="DrugInfoStatusProcess"
                />
              </li>
              <br />
              <li>
                環境因素:<span
                  v-if="EnvironmentStatusProcessCheck"
                  @dblclick="
                    EnvironmentStatusProcessCheck =
                      !EnvironmentStatusProcessCheck
                  "
                  class="EnvironmentStatusProcess"
                  >{{ MEnvironmentStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MEnvironmentStatusProcess"
                  v-else
                  @keyup.enter="
                    EnvironmentStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (EnvironmentStatusProcessCheck =
                        !EnvironmentStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="EnvironmentStatusProcessText"
                  id="EnvironmentStatusProcess"
                />
              </li>
              <br />
              <li>
                病人生理/行為因素因素:<span
                  v-if="PhysiologicalStatusProcessCheck"
                  @dblclick="
                    PhysiologicalStatusProcessCheck =
                      !PhysiologicalStatusProcessCheck
                  "
                  class="PhysiologicalStatusProcess"
                  >{{ MPhysiologicalStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPhysiologicalStatusProcess"
                  v-else
                  @keyup.enter="
                    PhysiologicalStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (PhysiologicalStatusProcessCheck =
                        !PhysiologicalStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="PhysiologicalStatusProcessText"
                  id="PhysiologicalStatusProcess"
                />
              </li>
              <br />
              <li>
                人員因素:<span
                  v-if="PersonStatusProcessCheck"
                  @dblclick="
                    PersonStatusProcessCheck = !PersonStatusProcessCheck
                  "
                  class="PersonStatusProcess"
                  >{{ MPersonStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MPersonStatusProcess"
                  v-else
                  @keyup.enter="
                    PersonStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (PersonStatusProcessCheck = !PersonStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="PersonStatusProcessText"
                  id="PersonStatusProcess"
                />
              </li>
              <br />
              <li>
                溝通因素:<span
                  v-if="CommunicateStatusProcessCheck"
                  @dblclick="
                    CommunicateStatusProcessCheck =
                      !CommunicateStatusProcessCheck
                  "
                  class="CommunicateStatusProcess"
                  >{{ MCommunicateStatusProcess }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MCommunicateStatusProcess"
                  v-else
                  @keyup.enter="
                    CommunicateStatusProcessEvenEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (CommunicateStatusProcessCheck =
                        !CommunicateStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="CommunicateStatusProcessText"
                  id="CommunicateStatusProcess"
                />
              </li>
              <br />
              <li>
                其他因素(事件可能發生原因):<span
                  v-if="OtherStatusProcessCheck"
                  @dblclick="OtherStatusProcessCheck = !OtherStatusProcessCheck"
                  class="OtherStatusProcess"
                  >{{ MOtherStatusProcess }}</span
                ><input
                  type="text"
                  style="width: 250px"
                  v-model="MOtherStatusProcess"
                  v-else
                  @keyup.enter="
                    OtherStatusProcessEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (OtherStatusProcessCheck = !OtherStatusProcessCheck)
                  "
                  class="patabledrug"
                  name="OtherStatusProcessText"
                  id="OtherStatusProcess"
                />
              </li>
              <br />

              <li>
                處理方式:<span
                  v-if="ProcessMethodCheck"
                  @dblclick="ProcessMethodCheck = !ProcessMethodCheck"
                  class="ProcessMethod"
                  >{{ MProcessMethod }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MProcessMethod"
                  v-else
                  @keyup.enter="
                    ProcessMethodEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (ProcessMethodCheck = !ProcessMethodCheck)
                  "
                  class="patabledrug"
                  name="ProcessMethodText"
                  id="ProcessMethod"
                />
              </li>
              <br />
              <li>
                建議:<span
                  v-if="SuggestCheck"
                  @dblclick="SuggestCheck = !SuggestCheck"
                  class="Suggest"
                  >{{ MSuggest }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MSuggest"
                  v-else
                  @keyup.enter="
                    SuggestEnter($event.target.className, $event.target.id),
                      (SuggestCheck = !SuggestCheck)
                  "
                  class="patabledrug"
                  name="SuggestText"
                  id="Suggest"
                />
              </li>
              <br />

              <li>
                藥物名稱:<span
                  v-if="DrugNameCheck"
                  @dblclick="DrugNameCheck = !DrugNameCheck"
                  class="DrugName"
                  >{{ MDrugName }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugName"
                  v-else
                  @keyup.enter="
                    DrugNameEnter($event.target.className, $event.target.id),
                      (DrugNameCheck = !DrugNameCheck)
                  "
                  class="patabledrug"
                  name="DrugNameText"
                  id="DrugName"
                />
              </li>
              <br />
              <li>
                藥物劑量:<span
                  v-if="DrugDoseCheck"
                  @dblclick="DrugDoseCheck = !DrugDoseCheck"
                  class="DrugDose"
                  >{{ MDrugDose }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugDose"
                  v-else
                  @keyup.enter="
                    DrugDoseEvenEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (DrugDoseCheck = !DrugDoseCheck)
                  "
                  class="patabledrug"
                  name="DrugDoseText"
                  id="DrugDose"
                />
              </li>
              <br />
              <li>
                藥物途徑:<span
                  v-if="DrugRouterCheck"
                  @dblclick="DrugRouterCheck = !DrugRouterCheck"
                  class="DrugRouter"
                  >{{ MDrugRouter }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugRouter"
                  v-else
                  @keyup.enter="
                    DrugRouterEnter($event.target.className, $event.target.id),
                      (DrugRouterCheck = !DrugRouterCheck)
                  "
                  class="patabledrug"
                  name="DrugRouterText"
                  id="DrugRouter"
                />
              </li>
              <br />
              <li>
                藥物劑型:<span
                  v-if="DrugDosageCheck"
                  @dblclick="DrugDosageCheck = !DrugDosageCheck"
                  class="DrugDosage"
                  >{{ MDrugDosage }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugDosage"
                  v-else
                  @keyup.enter="
                    DrugDosageEnter($event.target.className, $event.target.id),
                      (DrugDosageCheck = !DrugDosageCheck)
                  "
                  class="patabledrug"
                  name="DrugDosageText"
                  id="DrugDosage"
                />
              </li>
              <br />
              <li>
                藥物頻率:<span
                  v-if="DrugFrequencyCheck"
                  @dblclick="DrugFrequencyCheck = !DrugFrequencyCheck"
                  class="DrugFrequency"
                  >{{ MDrugFrequency }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugFrequency"
                  v-else
                  @keyup.enter="
                    DrugFrequencyEnter(
                      $event.target.className,
                      $event.target.id
                    ),
                      (DrugFrequencyCheck = !DrugFrequencyCheck)
                  "
                  class="patabledrug"
                  name="DrugFrequencyText"
                  id="DrugFrequency"
                />
              </li>
              <br />
              <li>
                藥物數量:<span
                  v-if="DrugNumberCheck"
                  @dblclick="DrugNumberCheck = !DrugNumberCheck"
                  class="DrugNumber"
                  >{{ MDrugNumber }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MDrugNumber"
                  v-else
                  @keyup.enter="
                    DrugNumberEnter($event.target.className, $event.target.id),
                      (DrugNumberCheck = !DrugNumberCheck)
                  "
                  class="patabledrug"
                  name="DrugNumberText"
                  id="DrugNumber"
                />
              </li>
              <br />
              <li>
                給錯藥物說明:<span
                  v-if="ErrorNameCheck"
                  @dblclick="ErrorNameCheck = !ErrorNameCheck"
                  class="ErrorName"
                  >{{ MErrorName }}</span
                >
                <input
                  type="text"
                  style="width: 250px"
                  v-model="MErrorName"
                  v-else
                  @keyup.enter="
                    ErrorNameEnter($event.target.className, $event.target.id),
                      (ErrorNameCheck = !ErrorNameCheck)
                  "
                  class="errordrugtable"
                  name="ErrorNameText"
                  id="ErrorName"
                />
              </li>
              <br />

              <hr />
              <div class="PaTitle"><h2>紀載日期:</h2></div>
              <li>
                紀載員工:<span class="EmployeeID">{{ MEmployeeID }}</span>
              </li>
              <br />
              <li>
                員工姓名:<span class="EmployeeName">{{ MEmployeeName }}</span>
              </li>
              <br />
              <li>
                紀載日期:<span class="InsertDate">{{ MInsertDate }}</span>
              </li>
              <br />
            </ul>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>



<!-- 
  <input type="button"  v-if="UpdateBool==true" v-model="UpdateBool" @change="CallUpdateMain"> -->
  <!-- <input type="button" value="測試"  @click="this.ChangeBool()">

  {{ UpdateBool }}
  {{ Count }} -->
  <!-- {{ CallBackMainDetetailData }} -->

  <!-- 
 <router-link :to="{ name: 'Home' }">Home</router-link> |
<router-link :to="{ name: 'About' }">About</router-link>  |
<router-link :to="{ name: '3FStation'}">3FStation</router-link>  -->
<Sensory2/>
</template>

<script>
import axios from "axios";
import "jquery";
import $ from "jquery";
import FStation from './FStation.vue'
import Sensory2 from "./Sensory2.vue";
import { mapMutations, mapState } from 'vuex';


// import Empty from './components/Empty.vue';

// import $ from "jquery";
export default {
  name: "HelloWorld",
  component:{FStation,Sensory2},
  props: {
    msg: String,
  },
  created() {
    const url = "http://localhost:8080/PostMainData";
   
  
    axios
      .post(url, {})

      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.CallBackMainData.push(response.data[i]);
        }
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });
  },
  data() {
    
    return {
      UpdateBoolMain: this.$store.state.UpdateBool,
      /*病患資料 */
      PaNameCheck: true,
      PaGenderCheck: true,
      PaNumberCheck: true,
      PaAgeCheck: true,
      PaClassCheck: true,
      PaDiaCheck: true,
      PaStartCheck: true,
      PaFiDCheck: true,
      PaEndCheck: true,

      /*錯誤內容 */
      AboutOtherEventCheck: true,
      PreScriptCheck: true,
      DeliveryProcessEventCheck: true,
      PharMacyEventCheck: true,
      NursingReEventCheck: true,
      OtherEventCheck: true,

      NursionNonForheck: true,
      ErrorEventCheck: true,
      EvenForPaCheck: true,
      PaForEvenCheck: true,
      WorkStatusProcessCheck: true,
      DrugInfoStatusProcessCheck: true,
      EnvironmentStatusProcessCheck: true,
      PhysiologicalStatusProcessCheck: true,
      PersonStatusProcessCheck: true,
      CommunicateStatusProcessCheck: true,
      OtherStatusProcessCheck: true,

      ProcessMethodCheck: true,
      SuggestCheck: true,

      DrugNameCheck: true,
      DrugDoseCheck: true,
      DrugRouterCheck: true,
      DrugDosageCheck: true,
      DrugFrequencyCheck: true,
      DrugNumberCheck: true,
      ErrorNameCheck: true,

      Str: "",
    
      CallBackMainData: [],
      CallBackMainDetetailData: {
        NursingForKey: "",
        DrugForKey: "",
        PharForKey: "",
        PaId: "",
        PaNumberKey: "",
        MPaName: "",
        MPaGender: "",
        MPaNumber: "",
        MPaClass: "",
        MPaAge: "",
        MPaDia: "",
        MPaFiD: "",
        MPaStart: "",
        MPaEnd: "",

        MAboutOtherEvent: "",
        MPreScript: "",
        MDeliveryProcessEvent: "",
        MPharMacyEvent: "",
        MNursingReEvent: "",
        MOtherEvent: "",
        MNursionNonFor: "",
        MWorkStatusProcess: "",
        MDrugInfoStatusProcess: "",
        MEnvironmentStatusProcess: "",
        MPhysiologicalStatusProcess: "",
        MPersonStatusProcess: "",
        MCommunicateStatusProcess: "",
        MOtherStatusProcess: "",
        MProcessMethod: "",
        MSuggest: "",
        MDrugName: "",
        MDrugDose: "",
        MDrugDosage: "",
        MDrugRouter: "",
        MDrugFrequency: "",
        MDrugNumber: "",
        MEmployeeID: "",
        MEmployeeName: "",
        MInsertDate: "",
        MErrorEvent: "",
        MEvenForPa: "",
        MPaForEven: "",
        MErrorName: "",
      },
      Render: true,
    };
  },
  computed:
  {
...mapState({
  Count:state=>state.count,
  UpdateBool: state=>state.UpdateBool,
}),

  },
  methods: {
    ClickTable: function (tableId) {
      console.log(tableId);

      const url = "http://localhost:8080/DetailMainData";
      axios
        .post(url, {
          DetailId: tableId,
        })

        .then((response) => {
          this.$forceUpdate();

          this.NursingForKey = response.data.NursingForKey;
          this.DrugForKey = response.data.DrugForKey;
          this.PharForKey = response.data.PharForKey;

          this.PaId = response.data.PDrugId;
          this.PaNumberKey = response.data.PaKey;
          this.MPaName = response.data.PaName;
          this.MPaGender = response.data.PaGender;
          this.MPaNumber = response.data.PaNumber;
          this.MPaClass = response.data.PaClass;
          this.MPaAge = response.data.PaAge;
          this.MPaDia = response.data.PaDia;
          this.MPaFiD = response.data.PaFiD;
          this.MPaStart = response.data.PaStart;
          this.MPaEnd = response.data.PaEnd;

          this.MAboutOtherEvent = response.data.AboutOtherEvent;
          this.MPreScript = response.data.PreScript;
          this.MDeliveryProcessEvent = response.data.DeliveryProcessEvent;
          this.MPharMacyEvent = response.data.PharMacyEvent;
          this.MNursingReEvent = response.data.NursingReEvent;
          this.MOtherEvent = response.data.OtherEvent;
          this.MNursionNonFor = response.data.NursionNonFor;
          this.MWorkStatusProcess = response.data.WorkStatusProcess;
          this.MDrugInfoStatusProcess = response.data.DrugInfoStatusProcess;
          this.MEnvironmentStatusProcess =
            response.data.EnvironmentStatusProcess;
          this.MPhysiologicalStatusProcess =
            response.data.PhysiologicalStatusProcess;
          this.MPersonStatusProcess = response.data.PersonStatusProcess;
          this.MCommunicateStatusProcess =
            response.data.CommunicateStatusProcess;
          this.MOtherStatusProcess = response.data.OtherStatusProcess;

          this.MProcessMethod = response.data.ProcessMethod;
          this.MSuggest = response.data.Suggest;
          this.MDrugName = response.data.DrugName;
          this.MDrugDose = response.data.DrugDose;
          this.MDrugDosage = response.data.DrugDosage;
          this.MDrugRouter = response.data.DrugRouter;
          this.MDrugFrequency = response.data.DrugFrequency;
          this.MDrugNumber = response.data.DrugNumber;
          this.MEmployeeID = response.data.EmployeeID;
          this.MEmployeeName = response.data.EmployeeName;
          this.MInsertDate = response.data.InsertDate;
          this.MErrorEvent = response.data.ErrorEvent;
          this.MEvenForPa = response.data.EvenForPa;
          this.MPaForEven = response.data.PaForEven;
          this.MErrorName = response.data.ErrorName;

          console.log(response.data);
        })
        .catch(function (error) {
          alert(error);
          alert("帶入失敗");
        });

      let PaModalButton = document.getElementById("ShowButton");
      PaModalButton.click();
    },
    // alertTd: function (TD) {
    //   console.log(TD);
    //   // let TDEle=document.getElementsByClassName(TD)
    //   let Str = TD + "Check";
    //   "this." + Str == false;
    //   console.log(this.PaNameCheck);
    // },
    PaNameEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaNameText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaGenderEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaGenderText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaNumberEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaNumberText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaAgeEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaAgeText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaClassEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaClassText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaDiaEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaDiaText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaStartEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaStartText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaFiDEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaFiDText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaEndEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaEndText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },

    AboutOtherEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='AboutOtherEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PreScriptEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PreScriptext']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DeliveryProcessEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DeliveryProcessEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PharMacyEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PharMacyEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    NursingReEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='NursingReEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    OtherEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='OtherEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    NursionNonForEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='NursionNonForText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    ErrorEventEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='ErrorEventText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    EvenForPaEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='EvenForPaText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PaForEvenEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PaForEvenText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },

    WorkStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='WorkStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugInfoStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugInfoStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    EnvironmentStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='EnvironmentStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PhysiologicalStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PhysiologicalStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    PersonStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='PersonStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    CommunicateStatusProcessEvenEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='CommunicateStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },

    OtherStatusProcessEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='OtherStatusProcessText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    ProcessMethodEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='ProcessMethodText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    SuggestEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='SuggestText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugNameEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugNameText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugDoseEvenEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugDoseText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugDosageEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugDosageText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugFrequencyEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugFrequencyText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },
    DrugNumberEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='DrugNumberText']").val();
      this.AxiosUpdate(ClassName, UpdateData);
      console.log(ClassName, UpdateData, ClassId);
    },
    ErrorNameEnter: function (ClassName, ClassId) {
      let UpdateData = $("input[name='ErrorNameText']").val();
      let UpdateColumn = ClassId;
      this.AxiosUpdate(ClassName, UpdateData, UpdateColumn);
      console.log(ClassName, UpdateData, ClassId);
    },

    AxiosUpdate: function (ClassName, UpdateData, UpdateColumn) {
      const url = "http://localhost:8080/UpdateDetailData/";

      axios
        .post(url, {
          PostPaId: this.PaId, //傳送要更新資料表id
          PostPaNumberKey: this.PaNumberKey,
          PostNursingForKey: this.NursingForKey, //傳送要更新資料表鍵碼
          PostDrugForKey: this.DrugForKey, //傳送要更新資料表鍵碼
          PostPharForKey: this.PharForKey, //傳送要更新資料表鍵碼
          PostTable: ClassName, //傳送要更新資料表
          PostUpdate: UpdateData, // 傳送要更新資料
          PostColum: UpdateColumn,
        })

        .then( (response)=> {
          console.log(response);
          if (response.data.Sucess) {
            this.$swal.fire("更新成功");
          } else {
            this.$swal.fire("更新失敗");
          }
        })
        .catch( (error)=> {
          this.$swal.fire("資料庫錯誤請聯絡資訊"+error);
        });
    },
    DeletePost: function (PostPaId,key) {
      console.log(PostPaId);
      const url = "http://localhost:8080/PostDelData";
      axios
        .post(url, {
          PaID: PostPaId,
        })

        .then((response) => {
          console.log(response);
          // location.reload();
          // $(".MainData tbody tr").html("");
         this.CallBackMainData.splice(key,1)

        })
        .catch(function (error) {
          alert(error);
          alert("帶入失敗");
        });
    },
...mapMutations(['intercome','ChangeBool','ReChangeBool']),
  CallUpdateMain:function()
{
  this.ReChangeBool();
  const url = "http://192.168.2.147:8080/PostMainData";
  console.log("已刷新");
    
axios
  .post(url, {})

  .then((response) => {
     $(".MainData tbody tr").html("");

    this.CallBackMainDatap=[];
    for (let i = 0; i < response.data.length; i++) {
      this.CallBackMainData.push(response.data[i]);
    }
    
  })
  .catch(function (error) {
    alert(error);
    alert("帶入失敗");
  });
}

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
.DrugMainTable {
  opacity: 0.8;
}
.DrugMainTable tbody tr {
  background: #dee4e4;
  color: #212121;
  transition: background 0.4s;
}

.DrugMainTable tbody tr:hover {
  background: #2fe791;
  color: #f5ecec;
}

.hello {
  width: 100%;
  /* background-image: url("C:/Users/loveaoe33/Desktop/vue/newvue/src/assets/img/background.jpg")
    center center no-repeat; */
  position: flex;
  background-size: 100% 100%;
}

.PaTitle h2 {
  background: linear-gradient(#c4b6b6, #9198e5);
  color: #d60909;
  font-size: 20px;
  text-align: center;
  font-family: DFKai-sb;
  border: 5px #554d55 solid;
  border-width: 5px 1px;
}

.modal-body {
  font-family: DFKai-sb;
}
.modal-body li {
  font-size: 20px;
  color: #380cd6;
}
.modal-body span {
  font-size: 18px;
  color: #a33e5f;
}

.MaxinAxios
{
  border-radius:10px;
  font-size: 18px;
  width: 100%;
  background-color: #95e2d5;
  border: 3px solid ;
  border-color: #d60909;

}

.MaxinAxios:hover 
{
  background-color: #ebf1f0;
  border-color: #d60f51;

}
/* ;border:1px orange solid;margin-right:5px;" */
</style>
