<template>
  <div class="hello">
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
      <tbody  v-if="Render">
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
          <td><button @click="DeletePost(item.id)">刪除</button></td>
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
    <!-- {{ CallBackMainData }} -->
  </div>
<!-- 
 <router-link :to="{ name: 'Home' }">Home</router-link> |
<router-link :to="{ name: 'About' }">About</router-link>  |
<router-link :to="{ name: '3FStation'}">3FStation</router-link>  -->
  <router-view />
</template>

<script>
import axios from "axios";
import "jquery";
// import Empty from './components/Empty.vue';

// import $ from "jquery";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    const url = "http://192.168.2.192:8080/PostMainData";
    axios
      .post(url, {})

      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.CallBackMainData.push(response.data[i]);
        }

        console.log(response.data[0]);
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });
  },
  data() {
    return {
      CallBackMainData: [],
      Render:true,
    };
  },
  methods: {
    ClickTable: function (tableId) {
      console.log(tableId);
    },
     AxiosEmit:function ()
     {
      const url = "http://192.168.2.192:8080/PostMainData";
    axios
      .post(url, {})

      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.CallBackMainData.push(response.data[i]);
        }

        console.log(response.data[0]);
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });

     },
     DeletePost:function (PostPaId)
     {
      console.log(PostPaId);
      const url = "http://192.168.2.192:8080/PostDelData";
    axios
      .post(url, {
        PaID: PostPaId,
      })

      .then((response) => {
       
        console.log(response);
        location.reload()

        // this.$router.replace=({path:'/Empty'});

       
      })
      .catch(function (error) {
        alert(error);
        alert("帶入失敗");
      });
  
  
     },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
.DrugMainTable
{
  opacity: 0.8;
}
.DrugMainTable tbody tr
{
  background: #dee4e4	;
  color: #212121;
  transition: background 0.4s;
}

.DrugMainTable tbody tr:hover {
  background: #2fe791;
  color: #f5ecec;

}


.hello
{
   width: 100%;
   background-image: url("C:/Users/loveaoe33/Desktop/vue/newvue/src/assets/img/background.jpg") center center no-repeat;
   position: flex;
   background-size: 100% 100%;

   
  
}


</style>
