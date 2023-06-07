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
            <div  v-bind:class="{ line:Loadindbind }"></div>
            </div>
            <i class="fa-solid fa-user "></i
            ><button
              type="button"
              name="OREventEmp"
              class="btn btn-link "
            >
              帶入員工
            </button>





            <i class="fa-solid fa-file-pen "></i
            ><button
              type="button"
              @click="ShowOREventDiscrable"
              name="OREventDiscrable"
              class="btn btn-link "
            >
              事件類別/事件描述
            </button>

            <i class="fa-solid fa-heart-circle-exclamation "></i
            ><button
              type="button"
              @click="ShowOREventProcess"
              name="OREventProcess"
              class="btn btn-link "
            >
             事件處理/事件影響
            </button>
            <i class="fa-solid fa-file-circle-exclamation "></i
            ><button
              type="button"
              name="OREventReason"
              @click="ShowOREventReason"
              class="btn btn-link "
            >
              事件原因/改善措施
            </button>

            <i class="fa-solid fa-file-circle-question "></i
            ><button
              type="button"
              name="OREventFqu"
              class="btn btn-link "
              @click="ShowOREventFqu"
            >
              嚴重程度/委員會
            </button>
            
            <hr />
           <div v-html="OREventDiscrableForm()"></div>
</template>
<script>
import { ref,reactive,onMounted} from 'vue';

export default ({
    setup() {
        
        // eslint-disable-next-line no-unused-vars
        const Loadindbind=ref(false);

        const Even_Employee=ref({
            Employee_ShowEmp:"456",
            Employee_EmpAccount:"",
            Employee_Name:"",
            Employee_Depart:"",
            Emloyee_identity:'',
        });

        // eslint-disable-next-line no-unused-vars
        const Even_Object =ref("請選擇");
        // eslint-disable-next-line no-unused-vars
        const Event_discrable=ref({
            Event_Time:"",
            Event_Place:"",
            Event_InEmployee:"",
            Event_TextArea:"",

        });
        // eslint-disable-next-line no-unused-vars
        const Even_Process=ref({
            Event_Notify:"",
            Event_Medical_Process:"",
            Event_Other_Process:"",
        });
        // eslint-disable-next-line no-unused-vars
        const Even_Influence=ref({
            Influence_Patient_Name:"",
            Influence_Patient_sex:"",
            Influence_Patient_class:"",
            Influence_Patient_Callback:"",
            Influence_Maybe_Season:"",
            Influence_True_Season:"",
            Influence_Improve:"",

        })
        // eslint-disable-next-line no-unused-vars
        const Even_Frequency=ref({
            Even_Patient_Frequency:"",
            Even_Patient_Harm:"",
        });
        // eslint-disable-next-line no-unused-vars
        const Security_Committee=ref({
            Security_Response:"",
        });

        // OREventDiscrableForm: function(){

        // }
        // eslint-disable-next-line no-unused-vars
        

function OREventDiscrableForm() {
  return `
    <div>
      <label>選擇事件(通報者填寫):</label></br>
      <select
        class="form-select OREvent_DiscrableForm"
        v-model="Even_Object"
        name="OREvent_DiscrableForm"
        aria-label="Default select example"
      >
        <option value="跌倒相關事件">跌倒相關事件</option>
        <option value="手術相關事件">手術相關事件</option>
        <option value="檢查相關事件">檢查相關事件</option>
        <option value="檢驗相關事件">檢驗相關事件</option>
        <option value="醫療相關事件">醫療相關事件</option>
        <option value="管路相關事件">管路相關事件</option>
        <option value="公共意外相關事件">公共意外相關事件</option>
        <option value="治安相關事件">治安相關事件</option>
      </select></br>
      
      <label>描述事件(通報者填寫):</label>
          </br>
              <label class="form-check-label">發生時間:</label>
              <input type="textbox" class="form-control">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input OREvent_Place_Check"
                  type="checkbox"
                  v-model=""
                  @change=""
                  value="不知道"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">不知道請勾選</label>
                </div></br></br>
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
      </select>
        <div class="form-check form-check-inline">
                <input
                  class="form-check-input OREvent_Place_Check"
                  type="checkbox"
                  v-model=""
                  @change=""
                  value="不知道"
                  id="flexCheckChecked"
                />
                <label class="form-check-label">不知道請勾選</label>
        </div> 
        </br>
        </br>
    <label>在場人員(通報者填寫):</label>




    </div>
  `;
}

        const text=ref("12");
        const person=reactive({
            Name: "立凡"
        })

        const person2=reactive([{
            Name: "立凡2"
        },{
            Name: "立凡3"
        }])
        onMounted(()=>{
            person2[0].Name="onMounted改立凡4"
         })
        return{
            text,
            person,
            person2,
            Loadindbind,
            Event_discrable,
            Even_Process,
            Security_Committee,
            Even_Frequency,
            Even_Influence,
            Even_Object,
            Even_Employee,
            OREventDiscrableForm,
            

        }
    },
})
</script>
