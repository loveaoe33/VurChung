<template>


  <div class="hello">
 <table id="DrugMainTable" class="table table-striped DrugMainTable" style="width:100%">
        <thead>
            <tr>
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
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,key) in CallBackMainData" :key="key">
           
              </tr>
           
               </tbody>
        <tfoot>
          <tr>
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
                
            </tr>
        </tfoot>
    </table>
{{ CallBackMainData }}
 
  </div>
 

<!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
<router-link :to="{ name: 'About' }">About</router-link>  |
<router-link :to="{ name: '3FStation'}">3FStation</router-link> | -->
<router-view/>
  
</template>

<script>
  import axios from "axios";
import "jquery";
// import $ from "jquery";
export default {
   name: 'HelloWorld',
  props: {
    msg: String
    
  },
  created()
  {
    const url =
        "http://192.168.2.192:8080/PostMainData";
        
      axios
        .post(url, {
        })

        .then((response) => {
          
          for(let i =0;i<response.length;i++)
          {
            console.log(response.data[i])
            this.CallBackMainData.push(response.data[i])
          }
          console.log(response.data[0])
        })
        .catch(function (error) {
          alert(error);
          alert("帶入失敗");
        });

  },
   data() {
    return {
      CallBackMainData:[],
    }
   }
}
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
</style>
