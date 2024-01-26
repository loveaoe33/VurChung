<template>
  <div>
    <h1>Vue3 Easy Data Table Example</h1>
    <div class="Top_button">
    <input type="text" class="Search_text" v-model="searchName">
    <button class="button-17" role="button">已申請</button>
    <button class="button-17" role="button">已審核</button>

    <button class="button-17" role="button">申請加班/補休</button>

    <button class="button-17" role="button">列印此頁面</button>
    <button class="button-17" role="button">列印歷史總紀錄</button>
    </div>


    <EasyDataTable
  buttons-pagination
  :rows-per-page="10"
  show-index
  v-model:items-selected="itemsSelected"
  @click-row="showRow"
  :headers="headers"
  :items="tableData"
  :sort-by="sortBy"
  :sort-type="sortType"
  :search-field="name"
  :search-value="searchName"
  multi-sort
  theme-color="#1d90ff"
    table-class-name="customize-table"

  
  v-if="Login_Employee_Lv==0"
> 

<template  v-if="Login_Employee_Lv==0" #item-Pass="item">
        <button class="button-18" @click="handleButtonClick(item)">通過</button>
        <button class="button-19" @click="handleButtonClick(item)">取消</button>

      </template>
<template #expand="item">
      <div style="padding: 15px">
        {{item.Nane}} won championships in {{item.championships.join(",")}}
      </div>
    </template>
    <template #loading>
    <img
      src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
      style="width: 100px; height: 80px;"
    />
  </template>
</EasyDataTable>

 row clicked:<br />
  <div id="row-clicked"></div>
  
  </div>
</template>

<script>
import { ref } from 'vue';
// eslint-disable-next-line no-unused-vars
import  { Header, Item } from "vue3-easy-data-table";
// eslint-disable-next-line no-unused-vars
import { useStore } from 'vuex';


export default {
  name: 'DataTableExample',
  components: {
    EasyDataTable: require('vue3-easy-data-table').EasyDataTable,
  },
  setup() {
    const store = useStore();

    const Login_Employee_Lv=store.state.Personnel_Attend.Login_Object.Account_Lv;
    const headers = ref([

      { text: 'Name', value: 'name' },
      { text: 'Age', value: 'age',sortable: true},
      { text: 'Time2', value: 'ages' },
      { text: 'Time3', value: 'agea' },
      { text: 'Time4', value: 'aged' },
      { text: 'Time5', value: 'agefw' },
      { text: 'Time6', value: 'aged' },
      { text: 'Time7', value: 'Pass' },


   

      
      
    ]);
    const sortBy = ["age", "age"];
    const sortType = ["desc", "asc"];
    const itemsSelected= ref([]);
    const searchField = ["name"];
      const searchName = ref("");
    



    const handleButtonClick = (row) => { console.log('Button clicked for row:', row);};

    const showRow = (item) => {

  document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
};
    const tableData = ref([
      { id:1,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 30 },
      { id:2,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 30 },
      { id:3,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 30 },
      { id:4,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 26 },
      { id:5,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 24 },
      { id:6,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 62 },
      { id:7,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 25 },
      { id:8,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 60 },
      { id:9,"championships": [2017, 2018, 2019, 2022],name: 'Jadne Doe', age: 85 },
      { id:10,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 95 },
      { id:8,"championships": [2017, 2018, 2019, 2022],name: 'John Doe', age: 60 },
      { id:9,"championships": [2017, 2018, 2019, 2022],name: 'Jadne Doe', age: 85 },
      { id:10,"championships": [2017, 2018, 2019, 2022],name: 'Jane Doe', age: 95 }, 
       


    ]);

    return {
      Login_Employee_Lv,
      headers,
      tableData,
      itemsSelected,
      sortType,
      sortBy,
      searchField,
      searchName,
      handleButtonClick,
      showRow,
    };
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
