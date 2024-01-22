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
  <h1>456</h1>
    <a href="javascript: void(0)" class="Department_btn">
    資訊
</a>
  编程适合那些有不同想法的人... <br/>
  对于那些想要创造大事物并愿意改变世界的人们。
  编程适合那些有不同想法的人... <br/>
  对于那些想要创造大事物并愿意改变世界的人们。
  编程适合那些有不同想法的人... <br/>
  对于那些想要创造大事物并愿意改变世界的人们。
  编程适合那些有不同想法的人... <br/>
  对于那些想要创造大事物并愿意改变世界的人们。

  对于那些想要创造大事物并愿意改变世界的人们。
  

</div>
  </div>
  <div class="Mid_Area">
 
    <div id="Mid_Area_box">
      <h1>{{test}}</h1>
      </div>
  </div>
  <div class="Right_Area">
    <div id="Right_Area_Box">
      <h1>{{test}}</h1>
      </div>

    <h1>999</h1>
  </div>

  <h1>123</h1>

</div>

</template>
    
<script>
import {  onMounted, onBeforeMount } from "vue";
// import { mapState } from 'vuex';
import { useStore } from 'vuex';


export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = useStore();
    const test=store.state.Personnel_Attend.Attend_Api_Url;
    
    onMounted(() => {
    
    });
    onBeforeMount(() => {});

    return {
      test,
     
    };
  },
};
</script>
    
    <style>
.Container{
 margin: 0;
 padding: 0;
 display: flex;
 flex-wrap: wrap; /* 允許換行 */


}

.Announcement{

  color:white;
  background: red;
  height: 150px;
  width: 100%;
  padding: 10px;
}

.Left_Area{
  position: relative;
  color:white;
  background: blue;
  padding:10px;
  height: 1000px;
  width: 20%;


}

.Mid_Area{
  position: relative;
  color:white;
  padding:10px;

  background: blueviolet;
  height: 1000px;
  width: 60%;
  
}

.Right_Area{

  position: relative;
  color:white;
  background: rgb(43, 226, 67);
  height: 1000px;
  width: 20%;
  padding:10px;


}
.Department_btn,
.Department_btn:hover,
.Department_btn:focus {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #ed1c5b;
    color: #1a1a1a;
    font-size: 2rem;
    transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
}
.Department_btn:hover {
    transform: rotate(45deg);
    box-shadow: 0 0 1px 15px rgba(138, 59, 88, 0.4), 0 0 1px 30px rgba(138, 59, 88, 0.1), 0 0 1px 45px rgba(138, 59, 88, 0.1);
}

 #Left_Area_box {
  font-family: Arial;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 5px white;
    overflow: hidden;
    word-wrap: break-word;


}

#Mid_Area_box {
  font-family: Arial;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 0 5px rgb(236, 5, 5);
    overflow: hidden;
    word-wrap: break-word;


}

#Right_Area_Box{
  font-family: Arial;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 0 5px rgb(244, 244, 244);
    overflow: hidden;
    word-wrap: break-word;



}
#Announcement_Box{
  font-family: Arial;
  padding: 40px ;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 0 5px rgb(244, 244, 244);
    overflow: hidden;
    word-wrap: break-word;

}




.marquee-content {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
 
  justify-content: center; /* 将内容水平居中 */
  align-items: center; /* 将内容垂直居中 */

  animation: marquee 11s linear infinite, appear 2s linear 10s forwards;
}

.marquee-item {
  flex-shrink: 0;
  margin-right: 20px; /* 每个项目的右边距 */
  padding: 10px;
  background-color: #3498db; /* 项目背景颜色 */
  color: #fff; /* 文本颜色 */
  border-radius: 5px; /* 项目圆角 */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
  
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

    </style>
    