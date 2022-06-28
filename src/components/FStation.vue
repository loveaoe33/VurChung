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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
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
            <input type="text" class="form-control" style="width: 250px" />
          </div>
          <i class="fa-solid fa-user DrugEventText"></i
          ><button
            type="button"
            name="DrugEventEmp"
            class="btn btn-link DrugEventText"
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
          >
            事件可能發生原因
          </button>
          <i class="fa-solid fa-file-shield DrugEventText"></i
          ><button
            type="button"
            name="DrugEventDeal"
            class="btn btn-link DrugEventText"
          >
            事件處理方式與改善措施
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
            name="DrugEventPainDFind"
            v-model="DrugEventData.DrugEventPainDFind"
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
            name="DrugEventPainEnd"
            v-model="DrugEventData.DrugEventPainEnd"
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

            <i class="fa-solid fa-user"></i>
            <span style="color: red; font-size: 0.5cm"><b>給藥錯誤:</b></span
            ><br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
                value="藥品錯誤"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 藥品錯誤 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
                value="途徑錯誤"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 途徑錯誤 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
                value="數量錯誤"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 數量錯誤 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
                value="頻率錯誤"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 頻率錯誤 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
                value="病人錯誤"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病人錯誤 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventRession.NursingRelatedEvent"
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
            <i class="fa-solid fa-face-downcast-sweat"></i>
            <span style="font-family:標楷體; color: red; font-size: 0.5cm" 
              ><b>事件對病患的影響(可複選):</b></span
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

            <i class="fa-regular fa-face-mask"></i
            ><span style="font-family:標楷體; color: red; font-size: 0.5cm"
              ><b>病患對本事件的反應(可複選):</b></span
            ><br />

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
                value="病患不知情"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病患不知情 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
                value="病患知情但無表示"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病患知情但無表示 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
                value="病患可接受"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病患可接受 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
                value="病患有負面情緒"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病患有負面情緒 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
                value="病患不接受"
                id="flexCheckChecked"
              />
              <label class="form-check-label"> 病患不接受 </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="DrugEventResult.DrugEventResultContext2"
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
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="test" class="btn btn-primary">
            Save changes
          </button>
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

            <button type="button" v-if="CheckBool" class="btn btn-primary">
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
    {{ DrugEventRession }}
    {{ DrugEventResult.DrugEventResultContext2 }}
    <!-- {{ DrugEventRession.AboutOderEvent['0'] }} -->
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
      AboutOder: false, //醫囑相關check
      PrescriptionSign: false, //處發籤交付check
      DeliveryProcess: false, //傳送過程check
      Pharmacy: false, //藥局相關check
      NursingRelated: false, //護理相關check
      Other: false, //其他補充check
      DrugConfirmation: false, //給藥確認
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
        OtherEvent: "", //其他補充內容
      },
      DrugEventResult: {
        DrugEventResultContext: [], //事件結果
        DrugEventResultContext2: [], //事件2結果
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
        OtherRession: "",
      },
      DrugEventDeal: {
        ProcessingMethod: [], //建議處理方式
        Prevention: "", //預防
      },
    };
  },
  created() {
    let NDate = new Date();
    this.ND = NDate;
    
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
        $(".ResultEventContext2").hide();
        this.$swal("取消勾選資料會消失唷!!");
      }
    },

    test: function () {
<<<<<<< HEAD
      123131313
      console.log(this.DrugEventData);
=======
      console.log(this.DrugEventData);//測試用
>>>>>>> Develop
    },
  },
};
</script>
