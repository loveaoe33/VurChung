<template>

<div class="Container">
  <div class="Announcement">
    <div id="Announcement_Box">
      <div class="marquee-container">
    <div class="marquee-content">
      <div class="marquee-item">Item 1</div>
      <div class="marquee-item">Item 2</div>
      <div class="marquee-item">Item 3</div>
      <!-- 添加更多项目根据需要 -->
    </div>
  </div>      </div>


    <h1>123</h1>
  </div>
  <div class="Left_Area">

<div id="Left_Area_box">


<button class="btn-98">
  <span>新增員工</span>
</button>
<button class="btn-98">
  <span>新增部門</span>
</button>
<button class="btn-98">
  <span>編輯員工</span>
</button>
<button class="btn-98">
  <span>新增測試</span>
</button>


  <div id="Left_Area_Department_box">
 <ol>
<li v-for="(item,index) in Department_List" :key="index"  @click="DepartClick(item)">
  {{ item }}
</li>
  
  
</ol>
      </div>

  <div id ="Left_Area_Context_box">
    <ol>
<li v-for="(item,index) in Employee_List" :key="index" >
  {{ item }} <button class="btn-98 ">
  <span>總時數</span>
</button>
<button class="btn-98">
  <span>總申請</span>
</button>
<button class="btn-98">
  <span>總審核</span>
</button>
</li>
  
  
</ol>

</div>
</div>
  </div>
  <div class="Mid_Area">
 
    <div id="Mid_Area_box">
      <div>
  </div>

      </div>
  </div>
  <div class="Right_Area">
    <div id="Right_Area_Box">
      <h1>{{test}}</h1>
      </div>

   
  </div>
  <div class="Buttom_Area">
    <div id="Buttom_Area_Box">
      <h1>{{test}}</h1>
      </div>

   
  </div>
  <h1>123</h1>

</div>

</template>
    
<script>
import {  onMounted, onBeforeMount, ref } from "vue";
// import { mapState } from 'vuex';
import { useStore } from 'vuex';


export default {
  components: {
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = useStore();
    const test=store.state.Personnel_Attend.Attend_Api_Url;
    const Department_List=ref(store.state.Personnel_Attend.DepartMent);
    const Employee_List=ref(store.state.Personnel_Attend.Employee_List);
    const DepartClick=(event)=>{ alert(event) };






    const options = ref({
      // DataTable options can be configured here
    });
    onMounted(() => {
    
    });
    onBeforeMount(() => {});

    return {
      test,
      Employee_List,
      Department_List,
      options,
      DepartClick,
    };
  },
};
</script>
    
    <style>

    </style>
    