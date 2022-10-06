<template>


  <div class="AllBodyContext">
    <button
      type="button"
      class="btn btn-primary NewEvent"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      事件新增
    </button>

    |||
    <button
      type="button"
      class="btn btn-danger NewPeople"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal1"
      data-whatever="@mdo"
    >
      人員註冊
    </button>

    <div
      class="modal fade"
      id="ContextModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
        
          </div>
        </div>
      </div>
    </div>

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
            <h5 class="modal-title" id="exampleModalLabel">異常事件</h5>
            <i class="fa-solid fa-person-walking-arrow-right"></i>
            <div class="form-check">
              <input
                class="form-check-input DrugEvent"
                type="checkbox"
                @change="DrugEventF"
                v-model="DrugEvent"
                value="藥物事件單"
                id="DrugEvent"
              />
              <label class="form-check-label"> 藥物事件 </label>
            </div>
            <i class="fa-solid fa-person-walking-arrow-right"></i>
            <div class="form-check">
              <input
                class="form-check-input FallEventE"
                type="checkbox"
                @change="FallE"
                v-model="FallEventE"
                value="跌倒事件單"
                id="FallEventE"
              />
              <label class="form-check-label"> 跌倒事件 </label>
            </div>
            <i class="fa-solid fa-person-walking-arrow-right"></i>
            <div class="form-check">
              <input
                class="form-check-input MixEvent"
                type="checkbox"
                @change="Mix"
                v-model="MixEvent"
                value="綜合事件"
                id="MixEvent"
              />
              <label class="form-check-label"> 綜合事件 </label>
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
              <input
                type="text"
                class="form-control DrugEventInText"
                v-model="EmpAccount"
                style="width: 200px"
              />
            </div>
  
            <div
              class="ShowEmp form-iinline"
              name="ShowEmp"
              v-if="ShowEmp == '無此帳號'"
            >
              {{ ShowEmp }}
            </div>

            <div class="ShowEmp form-iinline" name="ShowEmp" v-else>
              {{ ShowEmp }}
            </div>
            <div class="all">
            <div  v-bind:class="{ line:Loadindbind }"></div>
            </div>

            <i class="fa-solid fa-user DrugEventText"></i
            ><button
              type="button"
              name="DrugEventEmp"
              class="btn btn-link DrugEventText"
              @click="EmpData"
            >
              帶入員工
            </button>

            <i class="fa-solid fa-file-pen DrugEventText"></i
            ><button
              type="button"
              @click="ShowDrugEventPain"
              name="DrugEventPain"
              class="btn btn-link DrugEventText"
            >
              患者資料
            </button>
            <i class="fa-solid fa-heart-circle-exclamation DrugEventText"></i
            ><button
              type="button"
              @click="ShowDrugEventReason"
              name="DrugEventRession"
              class="btn btn-link DrugEventText"
            >
              事件發生原因
            </button>
            <i class="fa-solid fa-file-circle-exclamation DrugEventText"></i
            ><button
              type="button"
              name="DrugEventResult"
              @click="ShowDrugEventResult"
              class="btn btn-link DrugEventText"
            >
              事件結果
            </button>

            <i class="fa-solid fa-file-circle-question DrugEventText"></i
            ><button
              type="button"
              name="DrugEventMayRession"
              class="btn btn-link DrugEventText"
              @click="DrugEventMayRessions"
            >
              事件可能發生原因
            </button>
            <i class="fa-solid fa-file-shield DrugEventText"></i
            ><button
              type="button"
              name="DrugEventDeal"
              class="btn btn-link DrugEventText"
              @click="DrugEventDeals"
            >
              事件處理方式與改善措施</button
            ><br />

            <i
              class="fa-solid fa-circle-info fa-beat-fade DrugEventText"
              style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075"
            ></i
            ><button
              type="button"
              name="DrugEventResult"
              @click="DrugDetails"
              class="btn btn-link DrugEventText"
            >
              藥物明細
            </button>
            <hr />

            <label
              for="EmployeeOc"
              name="DrugEventPainName"
              class="col-form-label DrugEventPain"
              >患者姓名:</label
            >
            <input
              type="text"
              name="DrugEventPainName"
              v-model="DrugEventData.DrugEventPainName"
              class="form-control DrugEventPain"
            />
            <label
              for="EmployeeOc"
              name="DrugEventPainGender"
              class="col-form-label DrugEventPain"
              >患者性別:</label
            >
            <input
              type="text"
              name="DrugEventPainGender"
              v-model="DrugEventData.DrugEventPainGender"
              class="form-control DrugEventPain"
            />
            <label
              for="EmployeeOc"
              name="DrugEventPainNumber"
              class="col-form-label DrugEventPain"
              >病歷號碼:</label
            >
            <input
              type="text"
              name="DrugEventPainNumber"
              v-model="DrugEventData.DrugEventPainNumber"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              class="form-control DrugEventPain"
            />
            <label
              for="EmployeeOc"
              name="DrugEventPainClassification"
              class="col-form-label DrugEventPain"
              >類別:</label
            >
            <select
              class="form-select EmployeeOccuapation DrugEventPain"
              v-model="DrugEventData.DrugEventPainClassification"
              name="DrugEventPainClassification"
              aria-label="Default select example"
            >
              <option value="門診">門診</option>
              <option value="住院">住院</option>
            </select>

            <label
              for="EmployeeOc"
              name="DrugEventPainAge"
              class="col-form-label DrugEventPain"
              >年齡:</label
            >
            <input
              type="text"
              name="DrugEventPainAge"
              v-model="DrugEventData.DrugEventPainAge"
              class="form-control DrugEventPain"
            />
            <label
              for="EmployeeOc"
              name="DrugEventPainDiagnosis"
              class="col-form-label DrugEventPain"
              >診斷:</label
            >
            <input
              type="text"
              name="DrugEventPainDiagnosis"
              v-model="DrugEventData.DrugEventPainDiagnosis"
              class="form-control DrugEventPain"
            />

            <label
              for="EmployeeOc"
              name="DrugEventPainStar"
              class="col-form-label DrugEventPain"
              >發生起始日:</label
            >
            <input
              type="date"
              name="DrugEventPainStar"
              v-model="DrugEventData.DrugEventPainStar"
              @change="DateProcess"
              class="form-control DrugEventPain"
            />

            <label
              for="EmployeeOc"
              name="DrugEventPainEnd"
              class="col-form-label DrugEventPain"
              >事件停止日:</label
            >
            <input
              type="date"
              id="DrugEventPainEnd"
              v-model="DrugEventData.DrugEventPainEnd"
              @change="DateChecks"
              class="form-control DrugEventPain"
            />

            <label
              for="EmployeeOc"
              name="DrugEventPainDFind"
              class="col-form-label DrugEventPain"
              >發現異常日:</label
            >
            <input
              type="date"
              id="DrugEventPainDFind"
              v-model="DrugEventData.DrugEventPainDFind"
              @change="AllDateChecks"
              class="form-control DrugEventPain"
            />
            <div class="DrugEventRessionText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input AboutOder"
                  type="checkbox"
                  v-model="AboutOder"
                  @change="AboutOders"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label"> 醫囑相關 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input PrescriptionSign"
                  type="checkbox"
                  v-model="PrescriptionSign"
                  @change="PrescriptionSigns"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 處方籤交付 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input PrescriptionSign"
                  type="checkbox"
                  v-model="Pharmacy"
                  @change="Pharmacys"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥局相關 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input DeliveryProcess"
                  @change="DeliveryProcesss"
                  v-model="DeliveryProcess"
                  type="checkbox"
                  value=""
                />
                <label class="form-check-label"> 傳送過程 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input NursingRelated"
                  @change="NursingRelateds"
                  v-model="NursingRelated"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 護理相關 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input Other"
                  v-model="Other"
                  @change="Others"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label"> 其他補充 </label>
              </div>
            </div>
            <hr />

            <div class="AboutOtherText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="藥名錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥名錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="途徑錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 途徑錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="劑量錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 劑量錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="劑型錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 劑型錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="數量錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 數量錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="醫囑遺漏"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 醫囑遺漏 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="交互作用"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 交互作用 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="重複用藥"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 重複用藥 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="開立不適用病人病情藥物(如不符合適應症/病情、具禁忌症等)"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  開立不適用病人病情藥物(如不符合適應症、具禁忌症等)
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.AboutOderEvent"
                  value="頻率錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 頻率錯誤 </label>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">其他:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventRession.OtherAboutOrder"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="PrescriptionSignText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PrescriptionSignEvent"
                  value="遺漏未給"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 遺漏未給 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PrescriptionSignEvent"
                  value="交付錯誤病人"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 交付錯誤病人 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">其他:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventRession.OtherPrescriptionSign"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="PharmacyText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PharmacyEvent"
                  value="遺漏給藥"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 遺漏給藥 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PharmacyEvent"
                  value="調劑錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 調劑錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PharmacyEvent"
                  value="病患未領"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患未領 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PharmacyEvent"
                  value="病人辨識錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病人辨識錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.PharmacyEvent"
                  value="衛教不當"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 衛教不當 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">其他:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventRession.OtherPharmacy"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="DeliveryProcessText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.DeliveryProcessEvetn"
                  value="藥物破損"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物破損 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.DeliveryProcessEvetn"
                  value="藥物遺失"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物遺失 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">其他:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventRession.OtherDeliveryProcess"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="NursingRelatedText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingRelatedEvent"
                  value="遺漏給藥"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 遺漏給藥 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingRelatedEvent"
                  value="藥物遺失"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物遺失 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingRelatedEvent"
                  value="藥品保存不當"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥品保存不當 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingRelatedEvent"
                  value="藥物已DC，但仍給藥"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物已DC@但仍給藥 </label>
              </div>
              <br />

              <i class="fa-solid fa-circle-plus fa-beat"></i>
              <span class="TextStlye"><b>給藥錯誤:</b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="藥品錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥品錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="途徑錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 途徑錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="數量錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 數量錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="頻率錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 頻率錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="病人錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病人錯誤 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventRession.NursingForErrorDrugEvent"
                  value="時間錯誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 時間錯誤 </label>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">其他:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventRession.OtherNursingRelated"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="OtherText">
              <div class="form-group">
                <label for="exampleFormControlInput1">其他內容補充:</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="DrugEventRession.OtherEvent"
                ></textarea>
              </div>
            </div>

            <div class="DrugEventResultText">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext"
                  value="藥局尚未發藥，藥師發現異常"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  藥局尚未發藥，藥師發現異常
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext"
                  value="護理站尚未給藥，護理師發現異常"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  護理站尚未給藥，護理師發現異常
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input OtherResultEvenCheck"
                  type="checkbox"
                  @change="ResultEventContexts2"
                  v-model="DrugEventResult.DrugEventResultContext"
                  value="已給藥，請接續回答下列2題"
                />
                <label class="form-check-label">
                  已給藥，請接續回答下列2題
                </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventResult.OtherResult"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="ResultEventContext2">
              <i
                class="fa-solid fa-envelope fa-bounce"
                style="
                  --fa-bounce-start-scale-x: 1;
                  --fa-bounce-start-scale-y: 1;
                  --fa-bounce-jump-scale-x: 1;
                  --fa-bounce-jump-scale-y: 1;
                  --fa-bounce-land-scale-x: 1;
                  --fa-bounce-land-scale-y: 1;
                  --fa-bounce-rebound: 0;
                "
              ></i>
              <span class="TextStlye"><b>事件對病患的影響(可複選):</b></span
              ><br />

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext2"
                  value="病患尚未使用"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患尚未使用 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext2"
                  value="無任何異樣"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 無任何異樣 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext2"
                  value="原病情加重"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 原病情加重 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext2"
                  value="增加不良反應"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 增加不良反應 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventResult.OtherResultPa"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i
                class="fa-solid fa-envelope fa-bounce"
                style="
                  --fa-bounce-start-scale-x: 1;
                  --fa-bounce-start-scale-y: 1;
                  --fa-bounce-jump-scale-x: 1;
                  --fa-bounce-jump-scale-y: 1;
                  --fa-bounce-land-scale-x: 1;
                  --fa-bounce-land-scale-y: 1;
                  --fa-bounce-rebound: 0;
                "
              ></i
              ><span class="TextStlye"><b>病患對本事件的反應(可複選):</b></span
              ><br />

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患不知情"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患不知情 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患知情但無表示"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患知情但無表示 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患可接受"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患可接受 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患有負面情緒"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患有負面情緒 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患不接受"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患不接受 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventResult.DrugEventResultContext3"
                  value="病患擔心不安"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患擔心不安 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventResult.PaOtherResult"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
            </div>

            <div class="DrugEventMayRessionText">
              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>工作狀態流程因素相關:</b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="缺乏標準作業流程"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 缺乏標準作業流程 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="未依照標準作業流程"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 未依照標準作業流程 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="未做覆核"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 未做覆核 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="工作量過大"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 工作量過大 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="團隊合作問題"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 團隊合作問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="人力不足"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 人力不足 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.WorkingProcess"
                  value="診斷前缺乏對病患完整評估"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  診斷前缺乏對病患完整評估
                </label>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other1"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>藥品/資訊系統因素相關: </b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.DrugInformation"
                  value="藥物有多種劑型"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物有多種劑型 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.DrugInformation"
                  value="資訊系統問題"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 資訊系統問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.DrugInformation"
                  value="藥名相似"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥名相似 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.DrugInformation"
                  value="藥品過期/變質/毀損"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥品過期/變質/毀損 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.DrugInformation"
                  value="藥物外觀或包裝相似"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 藥物外觀或包裝相似 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other2"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>環境因素相關: </b></span><br />

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Surroundings"
                  value="環境安全防護問題"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 環境安全防護問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Surroundings"
                  value="環境動線問題"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 環境動線問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Surroundings"
                  value="照明問題"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 照明問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Surroundings"
                  value="路面平整度問題 "
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 路面平整度問題 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Surroundings"
                  value="地面濕滑"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 地面濕滑 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other3"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>人員因素相關:</b></span
              ><br />

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Personnel"
                  value="交班有誤"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 交班有誤 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Personnel"
                  value="訓練不足"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 訓練不足 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Personnel"
                  value="人員疏忽"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 人員疏忽 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other4"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>病人生理及行為因素相關:</b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.PatientPhysiology"
                  value="病患不配合治療 "
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病患不配合治療 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.PatientPhysiology"
                  value="與個人生理或疾病有關"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 與個人生理或疾病有關 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.PatientPhysiology"
                  value="未提供或提供錯誤病史/用藥史"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  未提供或提供錯誤病史/用藥史
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.PatientPhysiology"
                  value="病人抽菸飲酒或使用禁藥"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 病人抽菸飲酒或使用禁藥 </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other5"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>

              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>溝通因素相關:</b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Communicate"
                  value="醫療團隊溝通不足"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 醫療團隊溝通不足 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Communicate"
                  value="未告知患者完整資訊"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 未告知患者完整資訊 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Communicate"
                  value="口頭醫囑交代不清"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 口頭醫囑交代不清 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Communicate"
                  value="交班未落實"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 交班未落實 </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventMayRession.Communicate"
                  value="患者或家屬與醫療團隊溝通不足"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  患者或家屬與醫療團隊溝通不足
                </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventMayRession.Other6"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>其他因素:</b></span
              ><br />
              <textarea
                class="form-control MemoranDum"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="DrugEventMayRession.OtherRession"
              ></textarea>
            </div>

            <div class="DrugEventDealText">
              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"><b>處理方式(可複選):</b></span
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="更正錯誤醫囑"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 更正錯誤醫囑 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="補給處方箋/藥品"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 補給處方箋/藥品 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="追回錯誤藥品/更換正確藥品"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">
                  追回錯誤藥品/更換正確藥品
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="通知病患領取藥品"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 通知病患領取藥品 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="停用錯誤藥品並觀察"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 停用錯誤藥品並觀察 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="使用其他治療藥品"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 使用其他治療藥品 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="門診治療"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 門診治療</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="急診治療或急救處理"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 急診治療或急救處理 </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugEventDeal.ProcessingMethod"
                  value="住院治療"
                  id="flexCheckChecked"
                />
                <label class="form-check-label"> 住院治療 </label>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">請說明:</label>
                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugEventDeal.DrugEventDealOther"
                  id="exampleFormControlInput1"
                  placeholder="如不在選項內請手動填寫"
                />
              </div>
              <i class="fa-solid fa-circle-plus fa-beat"></i
              ><span class="TextStlye"
                ><b>預防再次發生的改善措施和建議::</b></span
              ><br />
              <textarea
                class="form-control MemoranDum"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="DrugEventDeal.Prevention"
              ></textarea>
            </div>
            <div class="DrugDetailText">
              <label class="col-form-label">藥物名稱:</label>
              <input type="text" class="form-control"  v-model="DrugDetail.DrugName"/>
              <label class="col-form-label">藥物劑量:</label>
              <input type="text" class="form-control" v-model="DrugDetail.DrugDose"/>
              <label class="col-form-label">藥物途徑:</label>
              <input type="text" class="form-control"  v-model="DrugDetail.DrugRouter"/>
              <label class="col-form-label">藥物劑型:</label>
              <input type="text" class="form-control" v-model="DrugDetail.DrugDosage" />
              <label class="col-form-label">藥物頻率:</label>
              <input type="text" class="form-control" v-model="DrugDetail.DrugFrequency" />
              <label class="col-form-label">藥物數量:</label>
              <input type="text" class="form-control" v-model="DrugDetail.DrugNumber"  />

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="DrugFalse"
                  value="通知病患領取藥品"
                  id="DrugFalseCheck"
                />
                <label class="form-check-label"> 給藥錯誤請勾選: </label>
              </div>
            </div>
            <div v-if="DrugFalse">
              <div class="HideDrugFalse">
                <label class="col-form-label">請說明錯誤藥物:</label>

                <input
                  type="textbox"
                  class="form-control"
                  v-model="DrugDetail.FalseDrug"
                  @keyup="DrugCheckText"
                />
              </div>
            </div>
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
              v-if="ShowEmp != ''"
              @click="PostForm"
              class="btn btn-primary"
            >
              Save changes
            </button>

            <button
              type="button"
              v-else
              disabled="disabled"
              class="btn btn-primary"
            >
              Save changes
            </button>
            <button type="button" @click="Loadindbind=!Loadindbind" class="btn btn-primary">測試</button> 
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
                  v-model="EmpResAccount"
                  class="form-control EmployeeAccount"
                  v-if="ACHCHECK"
                />
                <input
                  type="text"
                  style="width: 250px"
                  v-model="EmpResAccount"
                  v-else
                  disabled="disabled"
                  class="form-control EmployeeAccount"
                />
                <i class="fa-solid fa-user"></i> |<button
                  type="button"
                  class="btn btn-link AcCheck"
                  @click="Accheck"
                >
                  檢查
                </button>

                <button
                  type="button"
                  class="btn btn-link AcCheck"
                  @click="POSTAcCheckc"
                >
                  測試POST
                </button>

                <button
                  type="button"
                  class="btn btn-link AcCheck"
                  @click="UnLockAc"
                >
                  解鎖欄位
                </button>
              </div>
              <div class="form-group">
                <label for="EmployeeNa" class="col-form-label">申請人:</label>
                <input
                  type="text"
                  v-model="ResEmp"
                  class="form-control EmployeeName"
                />
              </div>

              <div class="form-group">
                <label for="EmployeeOc" class="col-form-label">職稱:</label>
                <select
                  class="form-select EmployeeOccuapation"
                  aria-label="Default select example"
                  v-model="ResEmpOri"
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
                  v-model="ResTexarea"
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

              <button
                type="button"
                v-if="CheckBool"
                class="btn btn-primary"
                @click="PostAcoountData"
              >
                Save changes
              </button>
              <button
                type="button"
                v-else
                class="btn btn-primary"
                disabled="disabled"
              >
                Save changes
              </button>
            
            </div>
          </div>
        </div>
      </div>
    
      <!-- {{ DrugEventData }} -->
      <!-- {{ DrugEventRession }} -->

      <!-- {{ DrugEventResult }}
      {{ DrugEventMayRession }} -->
      <!-- {{ DrugEventRession.AboutOderEvent['0'] }} -->
    </form>



 


    {{ msg }}
      




  </div>




  

</template>>



<script>
import axios from "axios";
import "jquery";
import $ from "jquery";
// import HelloWorld from './HelloWorld.vue'


export default {
  name: "FStation",
  // props:["msgs"],
  props: {
    msg: String,
  

  },
  data() {
    return {
      ND: "",
      Loadindbind: false,//資料傳送讀取動畫
      NLoadindbind: false,//隱藏動畫
      DrugFalse: false, //給藥錯誤
      CheckBool: false, //確認有無申請過
      ACHCHECK: true, //帳號檢查有無重複
      DrugEvent: false, //藥物異常
      FallEventE: false, //跌倒異常
      MixEvent: false, //混和異常
      CheckEmpBool: false, //確認員工有無帶入
      AboutOder: false, //醫囑相關check
      PrescriptionSign: false, //處發籤交付check
      DeliveryProcess: false, //傳送過程check
      Pharmacy: false, //藥局相關check
      NursingRelated: false, //護理相關check
      Other: false, //其他補充check
      DrugConfirmation: false, //給藥確認
      EmpAccount: "", //員工帳號欄位
      ResEmpOri: "選擇職稱", //員工職稱
      ResEmp: "", //申請人
      ResTexarea: "", //申請備註欄為
      EmpResAccount: "", //員工申請帶入的參數
      ShowEmp: "", //帶入員工帳號秀出
      DrugEventData: {
        DrugEventPainName: "",
        DrugEventPainGender: "",
        DrugEventPainNumber: "",
        DrugEventPainClassification: "",
        DrugEventPainAge: "",
        DrugEventPainDiagnosis: "",
        DrugEventPainStar: "",
        DrugEventPainDFind: "",
        DrugEventPainEnd: "",
      },
      DrugEventRession: {
        AboutOderEvent: [], //醫囑相關內容
        PrescriptionSignEvent: [], //處發籤交付內容
        DeliveryProcessEvetn: [], //傳送過程內容
        NursingRelatedEvent: [], //護理相關內容
        PharmacyEvent: [], //藥局相關選項
        OtherPharmacy: "", //藥局相關其他選項
        OtherAboutOrder: "", //醫囑其他選項
        OtherPrescriptionSign: "", //處發籤其他選項
        OtherDeliveryProcess: "", //傳送過程其他選項
        OtherNursingRelated: "", //護理相關其他選項
        NursingForErrorDrugEvent:[],//護理相關給藥錯誤
        OtherEvent: "", //其他補充內容 獨立傳輸參數
      },
      DrugEventResult: {
        DrugEventResultContext: [], //事件結果  如有以給藥要有外來鍵
        DrugEventResultContext2: [], //ResultForPa
        DrugEventResultContext3: [], //PaForResult
        OtherResult: "", //事件結果其他
        OtherResultPa: "", //事件對病患結果其他
        PaOtherResult: "", //病患對本次事件結果其他
      },
      DrugEventMayRession: {
        WorkingProcess: [], //工作狀態流程因素相關
        DrugInformation: [], //藥品/資訊系統因素相關
        Surroundings: [], //環境因素相關
        Personnel: [], //人員因素相關
        PatientPhysiology: [], //病人生理及行為因素相關
        Communicate: [], //溝通因素相關
        Other1: "", //流程因素其他
        Other2: "", //藥品資訊其他
        Other3: "", //環境因素其他
        Other4: "", //人員因素其他
        Other5: "", //病人生理期他
        Other6: "", //溝通因素其他
        OtherRession: "",  //獨立傳輸其他欄位
      },
      DrugDetail: {
        DrugName:"",//藥物名稱
        DrugDose:"",//藥物劑量
        DrugDosage:"",//藥物劑型別
        DrugRouter:"",//藥物途徑錯誤
        DrugFrequency:"",//藥物頻率
        DrugNumber:"",//藥物數量
        FalseDrug: "", //錯誤藥品有外來鍵
      },

      DrugEventDeal: {
        ProcessingMethod: [], //建議處理方式
        DrugEventDealOther: "",
        Prevention: "", //預防 獨立參數
      },
    };
  },
  created() {
    let NDate = new Date();
    const DateString =
      NDate.getFullYear() + "/" + NDate.getMonth() + "/" + NDate.getDate();
    this.ND = DateString;
    
  },
  mounted() {
    $(".DeliveryProcessText").hide(); //表單隱藏
    $(".PharmacyText").hide(); //表單隱藏
    $(".PrescriptionSignText").hide(); //表單隱藏
    $(".DrugEventText").hide(); //表單隱藏
    $(".DrugEventPain").hide(); //表單隱藏
    $(".AboutOtherText").hide(); //表單隱藏
    $(".NursingRelatedText").hide(); //表單隱藏
    $(".DrugEventRessionText").hide(); //事件發生原因隱藏
    $(".OtherText").hide();
    $(".DrugEventResultText").hide(); //事件結果表單隱藏
    $(".ResultEventContext2").hide(); //事件結果表單2隱藏
    $(".DrugEventMayRessionText").hide(); //表單隱藏隱藏
    $(".DrugEventDealText").hide(); //表單隱藏隱藏
    $(".DrugDetailText").hide(); //表單隱藏隱藏
    $("#DrugEventPainDFind").attr("disabled", "disabled"); //默認的發現異常日期
    $("#DrugEventPainEnd").attr("disabled", "disabled"); //默認的結束日期
  },
  methods: {
    alertTrue: function () {
      alert("12");
    },
    alertFalse: function () {
      alert("34");
    },
    add: function () {
      this.number++;
    },
    DrugEventF: function () {
      if (this.DrugEvent == true) {
        $(".DrugEventText").show(); //顯示
        $(".FallEventE").attr("disabled", "disabled"); //跌倒事件隱藏
        $(".MixEvent").attr("disabled", "disabled"); //綜合事件隱藏
      } else {
        this.$swal
          .fire({
            title: "資料還未送出唷!!",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "取消",
            denyButtonText: `不取消`,
          })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              $(".DrugEventText").hide(); //藥物事件表單隱藏
              $(".MixEvent").removeAttr("disabled"); //綜合事件顯示
              $(".FallEventE").removeAttr("disabled"); //跌倒事件顯示
              $(".DrugEventPain").hide(); //表單隱藏
              this.ContextHide();
              this.AllHide();
              Object.assign(this.$data, this.$options.data()); //數據初始化
            } else if (result.isDenied) {
              this.$swal.fire("再好好想想不要衝動!!", "", "info");
              this.DrugEvent = true;
            }
          });
        this.DrugEvent = true;
      }
    },
    Mix: function () {
      if (this.MixEvent == true) {
        $(".DrugEventText").hide(); //藥物事件表單隱藏
        $(".FallEventE").attr("disabled", "disabled"); //跌倒事件隱藏
        $(".DrugEvent").attr("disabled", "disabled"); //藥物事件隱藏
        $(".DrugEventPain").hide(); //表單隱藏
      } else {
        $(".FallEventE").removeAttr("disabled"); //跌倒事件顯示
        $(".DrugEvent").removeAttr("disabled"); //藥物事件顯示
      }
    },

    FallE: function () {
      if (this.FallEventE == true) {
        $(".DrugEventText").hide(); //藥物事件表單隱藏
        $(".MixEvent").attr("disabled", "disabled"); //綜合事件隱藏
        $(".DrugEvent").attr("disabled", "disabled"); //藥物事件隱藏
        $(".DrugEventPain").hide(); //表單隱藏
      } else {
        $(".MixEvent").removeAttr("disabled"); //綜合事件顯示
        $(".DrugEvent").removeAttr("disabled"); //藥物事件顯示
      }
    },
    ShowDrugEventResult: function () //事件結果
    {
      this.AllHide();
      this.ContextHide();
      $(".DrugEventResultText").show();
    },

    ShowDrugEventPain: function () {
      this.AllHide();
      this.ContextHide();
      $(".DrugEventPain").show(); //顯示
    },

    ShowDrugEventReason: function () {
      this.AllHide();
      this.ContextHide();
      $(".DrugEventRessionText").show(); //顯示
    },

    ShowDrugDetail: function () {
      $(".DrugDetailText").show(); //顯示
    },
    AllHide: function () {
      $(".DrugEventPain").hide(); //藥物事件表單隱藏
      $(".DrugEventRessionText").hide(); //藥物事件表單隱藏}
    },
    DetailAllHide: function () {
      $(".AboutOder").attr("disabled", "disabled"); //醫囑相關隱藏
      $(".PrescriptionSign").attr("disabled", "disabled"); //處發籤交付隱藏
      $(".DeliveryProcess").attr("disabled", "disabled"); //傳送過程隱藏
      $(".NursingRelated").attr("disabled", "disabled"); //護理相關隱藏
      $(".Other").attr("disabled", "disabled"); //其他補充隱藏
    },
    RmDetailAllHide: function () {
      $(".AboutOder").removeAttr("disabled"); //醫囑相關移除隱藏
      $(".PrescriptionSign").removeAttr("disabled"); //處發籤交付移除隱藏
      $(".DeliveryProcess").removeAttr("disabled"); //傳送過程移除隱藏
      $(".NursingRelated").removeAttr("disabled"); //護理相關移除隱藏
      $(".Other").removeAttr("disabled"); //其他補充移除隱藏
    },
    ContextHide: function () {
      $(".AboutOtherText").hide(); //表單隱藏
      $(".PrescriptionSignText").hide(); //表單隱藏
      $(".PharmacyText").hide(); //表單隱藏
      $(".AboutOtherText").hide(); //表單隱藏
      $(".DeliveryProcessText").hide(); //表單隱藏
      $(".NursingRelatedText").hide(); //表單隱藏
      $(".OtherText").hide(); //表單隱藏
      $(".DrugEventResultText").hide(); //表單隱藏
      $(".ResultEventContext2").hide(); //表單隱藏
      $(".DrugEventMayRessionText").hide(); //表單隱藏
      $(".DrugEventDealText").hide(); //表單隱藏
      $(".DrugDetailText").hide(); //表單隱藏
      this.DrugFalse = false; //藥物錯誤說明隱藏
    },
    AboutOders: function () {
      if (this.AboutOder == true) {
        this.ContextHide(); //全部隱藏
        $(".AboutOtherText").show(); //表單顯示
      } else {
        this.ContextHide(); //全部隱藏
      }
    },
    PrescriptionSigns: function () {
      if (this.PrescriptionSign == true) {
        this.ContextHide(); //全部隱藏
        $(".PrescriptionSignText").show();
      } else {
        this.ContextHide(); //全部隱藏
      }
    },
    Pharmacys: function () {
      if (this.Pharmacy == true) {
        this.ContextHide(); //全部隱藏
        $(".PharmacyText").show();
      } else {
        this.ContextHide(); //全部隱藏
      }
    },
    DeliveryProcesss: function () {
      if (this.DeliveryProcess == true) {
        this.ContextHide(); //全部隱藏
        $(".DeliveryProcessText").show();
      } else {
        this.ContextHide(); //全部隱藏
      }
    },

    NursingRelateds: function () {
      if (this.NursingRelated == true) {
        this.ContextHide(); //全部隱藏
        $(".NursingRelatedText").show();
      } else {
        this.ContextHide(); //全部隱藏
      }
    },

    Others: function () {
      if (this.Other == true) {
        this.ContextHide(); //全部隱藏
        $(".OtherText").show();
      } else {
        this.ContextHide(); //全部隱藏
      }
    },

    ResultEventContexts2: function () {
      let ConfirmCheck = document.querySelector(".OtherResultEvenCheck");
      if (ConfirmCheck.checked == true) {
        $(".ResultEventContext2").show();
      } else {
        this.DrugEventResult.DrugEventResultContext2 = [];
        this.DrugEventResult.DrugEventResultContext3 = [];
        $(".ResultEventContext2").hide();
        this.$swal("取消勾選資料會消失唷!!");
      }
    },

    DrugEventMayRessions: function () {
      this.AllHide();
      this.ContextHide();
      $(".DrugEventMayRessionText").show();
    },
    DrugEventDeals: function () {
      this.AllHide();
      this.ContextHide();
      $(".DrugEventDealText").show();
    },
    DrugDetails: function () {
      this.AllHide();
      this.ContextHide();
      $(".DrugDetailText").show();
    },
    DateProcess: function () {
      $("#DrugEventPainEnd").removeAttr("disabled"); //結束日期欄位解鎖
      this.DrugEventData.DrugEventPainDFind = "";
      this.DrugEventData.DrugEventPainEnd = "";
    },
    DateChecks: function () {
      let SDate = this.DrugEventData.DrugEventPainStar;
      //  let FDate=this.DrugEventData.DrugEventPainDFind;
      let EDate = this.DrugEventData.DrugEventPainEnd;
      this.DrugEventData.DrugEventPainDFind = "";
      if (Date.parse(SDate).valueOf() > Date.parse(EDate).valueOf()) {
        this.DrugEventData.DrugEventPainEnd = "";
        this.$swal.fire("日期不能小於開始日");
        $("#DrugEventPainDFind").attr("disabled", "disabled");
      } else {
        if (EDate != "") {
          $("#DrugEventPainDFind").removeAttr("disabled"); //發現異常日期欄位解鎖
        }
      }
    },
    AllDateChecks: function () {
      let SDate = this.DrugEventData.DrugEventPainStar;
      let FDate = this.DrugEventData.DrugEventPainDFind;
      let EDate = this.DrugEventData.DrugEventPainEnd;
      if (
        Date.parse(SDate).valueOf() <= Date.parse(FDate).valueOf() &&
        Date.parse(EDate).valueOf() >= Date.parse(FDate).valueOf()
      ) {
        this.DrugEventData.DrugEventPainDFind = FDate;
      } else {
        this.DrugEventData.DrugEventPainDFind = "";
        this.$swal.fire("發現異常日期不能小於起始日或大於結束日!");
      }
    },
    DrugCheckText: function () {
      if (this.DrugDetail.FalseDrug != "") {
        $("#DrugFalseCheck").attr("disabled", "disabled");
      } else {
        $("#DrugFalseCheck").removeAttr("disabled");
      }
    },
    Accheck: function () //Get方式
    {
      const url =
        "http://192.168.2.192:8080/AccountCheck/" + this.EmpResAccount;
        
      axios
        .get(url, {
          EmployeeID: this.EmpResAccount, // 員工帳號參數
        })

        .then(function (response) {
          alert(response.data);
          console.log(response);
        })
        .catch(function (error) {
          this.EmpResAccount = "";
          alert(error);
          alert("帶入失敗");
        });
    },

    POSTAcCheckc: function () {
      const url = "http://192.168.2.192:8080/PostAccountCheck";
      // const url="http://192.168.0.105:8080/PostAccountCheck";
      if (this.EmpResAccount == "") {
        this.$swal.fire("不可為空!");
      } else {
        axios
          .post(url, {
            EmployeeID: this.EmpResAccount, //       員工帳號參數
          })

          .then((response) => {
            console.log(this.ACHCHECK);
            if (response.data == "編號重複") {
              this.$swal.fire("編號重複囉!");
            } else if (response.data == "編號可使用") {
              this.$swal.fire("此帳號可以使用");

              this.ACHCHECK = false;
              this.CheckBool = true;
            }
            console.log(response.data);
            console.log(this.ACHCHECK);
          })
          .catch(function (error) {
            alert(error);
          });
      }
    },

    PostApi: function () {
      for (let [keys, value] of Object.entries(this.DrugEventData)) {
        if (value == "") {
          switch (
            keys //患者資料防呆
          ) {
            case "DrugEventPainName": {
              this.$swal.fire("患者姓名未填寫!");
              break;
            }
            case "DrugEventPainGender": {
              this.$swal.fire("患者性別未填寫!");
              break;
            }
            case "DrugEventPainNumber": {
              this.$swal.fire("患者病歷號碼未填寫!");
              break;
            }
            case "DrugEventPainClassification": {
              this.$swal.fire("類別未填寫!");
              break;
            }
            case "DrugEventPainAge": {
              this.$swal.fire("患者年齡未填寫!");
              break;
            }
            case "DrugEventPainDiagnosis": {
              this.$swal.fire("患者診斷未填寫!");
              break;
            }
            case "DrugEventPainStar": {
              this.$swal.fire("起始日期未填寫!");
              break;
            }
            case "DrugEventPainEnd": {
              this.$swal.fire("停止日期未填寫!");
              break;
            }
            case "DrugEventPainDFind": {
              this.$swal.fire("發現異常日未填寫!");
              break;
            }
          }
          console.log(keys);
        } else {
          return true;
        }
      }
      
    },

    PostForm: function () {
      var BoleanCheck= this.PostApi();
      if(BoleanCheck!=true) 
      {
         console.log("資料不齊全");
      }else{
        this.Loadindbind= true;
      if (this.DrugEventRession.OtherAboutOrder != "") {
        this.DrugEventRession.AboutOderEvent.push(
          this.DrugEventRession.OtherAboutOrder
        );
      }
      if (this.DrugEventRession.OtherPrescriptionSign != "") {
        this.DrugEventRession.PrescriptionSignEvent.push(
          this.DrugEventRession.OtherPrescriptionSign
        );
      }
      if (this.DrugEventRession.OtherDeliveryProcess != "") {
        this.DrugEventRession.DeliveryProcessEvetn.push(
          this.DrugEventRession.OtherDeliveryProcess
        );
      }
      if (this.DrugEventRession.OtherNursingRelated != "") {
        this.DrugEventRession.NursingRelatedEvent.push(
          this.DrugEventRession.OtherNursingRelated
        );
      }
      if (this.DrugEventRession.OtherPharmacy != "") {
        this.DrugEventRession.PharmacyEvent.push(
          this.DrugEventRession.OtherPharmacy
        );
      }
      if (this.DrugEventResult.OtherResult != "") {
        this.DrugEventResult.DrugEventResultContext.push(
          this.DrugEventResult.OtherResult
        );
      }
      if (this.DrugEventResult.OtherResultPa != "") {
        this.DrugEventResult.DrugEventResultContext2.push(
          this.DrugEventResult.OtherResultPa
        );
      }
      if (this.DrugEventResult.PaOtherResult != "") {
        this.DrugEventResult.DrugEventResultContext3.push(
          this.DrugEventResult.PaOtherResult
        );
      }

      if (this.DrugEventMayRession.Other1 != "") {
        this.DrugEventMayRession.WorkingProcess.push(
          this.DrugEventMayRession.Other1
        );
      }

      if (this.DrugEventMayRession.Other2 != "") {
        this.DrugEventMayRession.DrugInformation.push(
          this.DrugEventMayRession.Other2
        );
      }

      if (this.DrugEventMayRession.Other3 != "") {
        this.DrugEventMayRession.Surroundings.push(
          this.DrugEventMayRession.Other3
        );
      }

      if (this.DrugEventMayRession.Other4 != "") {
        this.DrugEventMayRession.Personnel.push(
          this.DrugEventMayRession.Other4
        );
      }

      if (this.DrugEventMayRession.Other5 != "") {
        this.DrugEventMayRession.PatientPhysiology.push(
          this.DrugEventMayRession.Other5
        );
      }

      if (this.DrugEventMayRession.Other6 != "") {
        this.DrugEventMayRession.Communicate.push(
          this.DrugEventMayRession.Other6
        );
      }
            if (this.DrugEventDeal.DrugEventDealOther != "") {
        this.DrugEventDeal.ProcessingMethod.push(
          this.DrugEventDeal.DrugEventDealOther
        );
      }
   var JsonDrugEventData=JSON.stringify(this.DrugEventData)
   console.log(JsonDrugEventData);
   var JsonDrugEventRession=JSON.stringify(this.DrugEventRession);
   console.log(JsonDrugEventRession);
   var JsonDrugEventResult=JSON.stringify(this.DrugEventResult);
   console.log(JsonDrugEventResult);
   var JsonDrugEventMayRession=JSON.stringify(this.DrugEventMayRession);
   console.log(JsonDrugEventMayRession);
   var JsonDrugDetail=JSON.stringify(this.DrugDetail);
   console.log(JsonDrugDetail);
   var JsonDrugEventDeal=JSON.stringify(this.DrugEventDeal);
   console.log(JsonDrugEventDeal);
   const url="http://192.168.2.192:8080/DrugFormData";
  // const url="http://192.168.0.105:8080/DrugFormData";
   console.log(JsonDrugEventRession);
   axios
          .post(url, {
            JsonDrugEventData:JsonDrugEventData,
            JsonDrugEventRession:JsonDrugEventRession,
            JsonDrugEventResult:JsonDrugEventResult,
            JsonDrugEventMayRession:JsonDrugEventMayRession,
            JsonDrugDetail:JsonDrugDetail,
            JsonDrugEventDeal:JsonDrugEventDeal,
          })

          .then((response) => {
            this.Loadindbind= true;
            location.reload()
            console.log(response);
          })
          .catch(function (error) {
             this.Loadindbind= true;
            alert(error);
          });

          // this.$emit('UpdateMainTable');

        }

    },

    test: function () {
      console.log(); //測試用235
    },
    test2: function () {
      console.log(); //測試用235
    },
    EmpData: function () {
      if (this.EmpAccount == "") {
        this.$swal.fire("欄位不可為空值");
      } else {
        const url = "http://192.168.2.192:8080/SelectEmpAccount";
        // const url="http://192.168.0.105:8080/SelectEmpAccount";

        axios
          .post(url, {
            EmpID: this.EmpAccount, // 員工帳號參數
          })

          .then((response) => {
            if (response.data.AcMiss == "無此帳號") {
              this.$swal.fire("搜尋無此帳號");
              this.ShowEmp = "";
            } else {
              let S = response.data.AcSucess;
              this.ShowEmp = S;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    UnLockAc: function () {
      this.ACHCHECK = true;
      this.CheckBool = false;
      this.EmpResAccount = "";
    },
    PostAcoountData: function () {
      if (this.ResEmp == "") {
        this.$swal.fire("申請人不可為空白!");
      } else if (this.ResEmpOri == "選擇職稱") {
        this.$swal.fire("請選擇正確職稱!");
      } else {
        const url = "http://192.168.2.192:8080/PostAccountData";
        // const url="http://192.168.0.105:8080/PostAccountData";

       axios
          .post(url, {
            EmployeeID: this.EmpResAccount, // 員工帳號參數
            Employee: this.ResEmp,
            JobTitle: this.ResEmpOri,
            ResTexarea: this.ResTexarea,
            ResDate: this.ND,
          })

          .then((response) => {
            console.log(response.data);

            this.EmpResAccount = ""; // 員工帳號參數
            this.ResEmp = "";
            this.ResEmpOri = "";
            this.ResTexarea = "";
            this.ACHCHECK = true;
            this.$swal.fire("新增成功!");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },

  },
};
</script>


<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
.AllBodyContext {
  font-family: "DFKai-sb";
  text-align: left;
}
span.TextStlye {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 15px;
  color: rgb(233, 15, 69);
  text-shadow: 3px 3px 3px #a8b8c4;
}
.DrugEventtext {
  display: inline;
  width: 250px;
}


.DrugEventInText {
  width: 200px;
}
.test
{
  width: 100%;
  height: 100%;
  background-color:rgba(255, 0, 55, 0.87)
}




.all 
  {
    
    position:relative;
   left:900;top:450;
    justify-content: center;
    align-content: center;

  }
.line {
  --uib-size: 450px;
  --uib-speed: 1.75s;
  --uib-color: black;
  --uib-line-weight: 5px;

  position: absolute;
  top:0px;
  left:0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: var(--uib-line-weight);
  width: var(--uib-size);
  border-radius: calc(var(--uib-line-weight) / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--uib-color);
  opacity: 0.1;
}

.line::after {
  content: '';
  height: 100%;
  width: 100%;
  border-radius: calc(var(--uib-line-weight) / 2);
  animation: wobble var(--uib-speed) ease-in-out infinite;
  transform: translateX(-95%);
  background-color: var(--uib-color);
}

@keyframes wobble {
  0%,
  100% {
    transform: translateX(-95%);
  }
  50% {
    transform: translateX(95%);
  }
}

</style>