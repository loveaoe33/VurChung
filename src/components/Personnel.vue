<template>
  <div class="ImagePush">
    <!-- 轮播 -->
  <div id="demo" class="carousel slide carouselArea" data-bs-ride="carousel">
   
   <!-- 指示符 -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="./jp3.jpg" class="d-block" >
    </div>
    <div class="carousel-item">
      <img  src="./jp4.jpg" class="d-block" >
    </div>
    <div class="carousel-item">
      <img  src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" class="d-block" style="width:100%">
    </div>
  </div>
  
  <!-- 左右切换按钮 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  </div>
    </div>
  
  
  <div class="TotalContext">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">圖/檔案上傳</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="uploadForm" action='upload_file' role="form" method="post" enctype=multipart/form-data>
          <li class="liTitle">檔案 <i class="fa-solid fa-file IconImage"></i></li>
      <input type="file" class="form-control Contextext" ref="fileClear" @change="fileChange($event)"><br>
      <!-- <li class="liTitle">QRCode <i class="fa-solid fa-cubes-stacked IconImage"></i></li>
      <input type="file" class="form-control Contextext" ref="QrClear" accept="image/git,image/jpeg" @change="QrChange($event)"><br> -->
      </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary"  data-bs-toggle="modal" @click="FileUpload" data-bs-dismiss="modal">上傳</button>
        </div>
      </div>
    </div>
  </div>
  
  
    <nav id ="siderbar" :style=LoginObject>
      <p>公告發布站</p>
      <ul>
    
    <li class="liTitle">公告類別 </li>
    <select class="form-select form-select-sm SelectItem"  v-model="Perosnnel_Article.ArticleClass" aria-label=".form-select-sm example">
    <option value="全部公告" selected>全部公告</option>
    <option value="人事">人事</option>
    <option value="行政">行政</option>
    <option value="感控">感控</option>
    <option value="健管">健管</option>
    <option value="門診">門診</option>
    <option value="放射">放射</option>
    <option value="藥局">藥局</option>
    <option value="櫃台">櫃台</option>
    <option value="開刀房">開刀房</option>
    <option value="護理部">護理部</option>
    <option value="復健">復健</option>
    </select>
  
  <div class="ContextextArea2">

  </div>
  
  <div class="ContextextArea">
      <li class="liTitle">抬頭  <i class="fa-sharp fa-solid fa-key IconImage"></i></li>
      <input type="textbox" class="form-control Contextext"  v-model="Perosnnel_Article.ArticleTitle" id="FormTitle"  placeholder="Enter Title"><br>
      <!-- <small id="emailHelp" class="form-text text-muted">文章標題請輸入</small><br> -->
      <li class="liTitle">內容 <i class="fa-sharp fa-solid fa-comments IconImage"></i></li>
      <textarea class="form-control Contextext" id="exampleFormControlTextarea1" v-model="Perosnnel_Article.ArticleContext" rows="15"></textarea><br>
      <li class="liTitle">日期 <i class="fa-sharp fa-solid fa-trademark IconImage"></i></li>
      <input type="textbox" class="form-control Contextext" v-model="Perosnnel_Article.ArticleCreate"  id="FormDate" ><br>
      <li class="liTitle">網址 <i class="fa-solid fa-display IconImage"></i></li>
      <input type="textbox"  class="form-control Contextext" v-model="Perosnnel_Article.ArticleUrl"  id="" ><br>
      <li class="liTitle">發布者 <i class="fa-sharp fa-solid fa-user IconImage"></i></li>
      <input type="textbox"  class="form-control Contextext" readonly v-model="Employee_Login_Object.Name"  id="" ><br>
      <li class="liTitle">文章等級限制 <i class="fa-sharp fa-solid fa-user IconImage"></i></li>
      <input type="number"  class="form-control Contextext" v-model="Perosnnel_Article.ArticleLv"  id=""  placeholder="無打0"><br>
      <li class="liTitle">部門限定 <i class="fa-sharp fa-solid fa-user IconImage"></i></li>
      <select class="form-select form-select-sm SelectItem"  v-model="Perosnnel_Article.ArticleLock" aria-label=".form-select-sm example">
    <option value="" selected>無</option>
    <option value="人事">人事</option>
    <option value="行政">行政</option>
    <option value="感控">感控</option>
    <option value="健管">健管</option>
    <option value="門診">門診</option>
    <option value="放射">放射</option>
    <option value="藥局">藥局</option>
    <option value="櫃台">櫃台</option>
    <option value="開刀房">開刀房</option>
    <option value="護理部">護理部</option>
    <option value="復健">復健</option>
    </select>

      




  </div>
      </ul>

      <button id="PostContext" @click="POSTArticle"  class="btn btn-danger PostContext">新增文章</button>
      <button id="PostContext_Employee" @click="POSTEmployee"  class="btn btn-primary PostContext_Employee">新增使用者</button>

    </nav>



    



       <div class="ArticleContext">
        <button id="collapse-btn" class="collapse-btn" @click="SlibarFunction">   
        <i class="fa-sharp fa-solid fa-pen"></i>
      </button>

      



      <p>{{ Article_Class_Title }}</p>
  
  <div class="insideArea"> 
    <select class="form-select form-select-sm SelectItem"  @change="SelectOnChange($event.target.value),Init_Preious" aria-label=".form-select-sm example">
    <option value="全部公告" selected>全部公告</option>
    <option value="人事">人事</option>
    <option value="行政">行政</option>
    <option value="感控">感控</option>
    <option value="健管">健管</option>
    <option value="門診">門診</option>
    <option value="放射">放射</option>
    <option value="藥局">藥局</option>
    <option value="櫃台">櫃台</option>
    <option value="開刀房">開刀房</option>
    <option value="護理部">護理部</option>
    <option value="復健">復健</option>
  </select>
  <input type="textbox" class="form-control Quick_Search" @keyup.enter="Quick_Search" v-model="Perosnnel_Article.Article_quick_Search" width="49px" id="FormTitle"  placeholder="快搜"><br>

  <table id="SensoryView"  class="table" v-bind:class="{ActiveTable:ViewBoolT,HideTable:ViewBoolF}">
        <thead>
          <th class="ViewTitle" style="color: red;"><button class=" PreButton" @click="PrePage"><i class="fa-solid fa-xmark"></i></button><span>文章分類:</span>{{ One_Article_List.articleClass}}<span>日期:</span>{{ One_Article_List.articleCreate}}<span>抬頭:</span>{{ One_Article_List.articleTitle}}</th>
          <th ></th>
          
        </thead>
        <tbody>
          <tr>
           <td><textarea class="form-control Contextext" id="exampleFormControlTextarea1" v-model="One_Article_List.articleContext" rows="15" ></textarea></td>
          </tr>
        </tbody>
        <tfood>
        <span>發布人:</span>{{ One_Article_List.articleEmpl }},
<br>


        <span>網址:</span><span v-if="One_Article_List.articleUrl!=null"><a style="color:red"  :href="UrlFun(One_Article_List.articleUrl)">{{ One_Article_List.articleUrl }} </a></span><br>
        <span>檔案下載:</span><span v-if="One_Article_List.articleFileUrl!=null"><a style="color:red" :href="FileUrlFun(One_Article_List.articleFileUrl,'File')" download>{{ One_Article_List.articleTitle }} </a></span><br>
        <!-- <span>Qrcode:</span><span v-if="OneSensoryList.qrcodeUrl!=null">  <img :src="FileUrlFun(OneSensoryList.qrcodeUrl,'Qr')" width="80" height="80" ></span> -->
        <span>已查看:</span>{{ One_Article_List.articleView }}<br>

        </tfood>
  
          </table>
          
          <table id="SensoryContext" class="table " v-bind:class="{ActiveSensoryContextTable:ViewBoolF,HideSensoryContextTable:ViewBoolT}">
  
            <thead>
              <tr> 
                  <th>分類</th>
                  <th>抬頭</th>
                  <th>內容</th>
                  <th>發布者</th>
                  <th>查看</th>
                  <th>刪除</th>
                  <th>圖檔</th>
              </tr>
          </thead>
          
  
          <tbody>
          <tr v-for="(Article,index) in displayedData" :key="index+1">
  
          <td>{{ Article.articleClass }}</td>
  
          <td>{{ Article.articleTitle }}</td>
  
          <td>{{ Article.articleContext }}</td>
  
          <td>{{ Article.articleEmpl }}</td>

          <td><input type="button"  id="{{ Article.id }}" @click="ViewSensory(Article.id)" class="btn btn-primary ViewButton" value="查看"></td>
          <td><input type="button"  id="{{ Article.id }}"  @click="Dele_Article(index,Article.id)"  class="btn btn-danger ViewButton" value="刪除"></td>
          <td  v-if="Article.articleFileUrl!='' && Article.articleFileUrl!=null " style="color:red;"><i class="fa-sharp fa-solid fa-check"></i>已完成</td>    
          <td v-else ><input type="button" data-bs-toggle="modal" href="#exampleModalToggle" @click="SetId(Article.id)" role="button" class="btn btn-success UpLoadButton"  value="缺少檔案"></td>
  
          </tr>
           </tbody>

          </table>
          <div v-bind:class="{paginationView:paginationTrue,paginationHide:paginationFalse}" >  
           <button class="Style_button" @click="Preious">上一頁</button>
           <span>{{ currentPage }}</span>
           <button class="Style_button" @click="Next">下一頁</button>
            </div>
    </div>
  
  
         <div class="outsideArea"></div>
         
      </div>
    </div>
    </template>
    
    <script>
  import { Carousel, Slide } from 'vue-carousel';
  import { mapState } from 'vuex';
  import axios from 'axios';
  // import { computed } from 'vue';
  // import { mapMutations, mapState } from 'vuex';
  
  
    export default {
      name: 'Sensory2',
      components: {
   Carousel,
          Slide
      },
      data() {
            return {
            Personnel_Api_Url:"http://192.168.2.147:8080/",
            LoginObject:{
              display:"",
            },
            Perosnnel_Article:{
              id:"0",
              EmpClass:"Admin",
              ArticleClass:"",
              ArticleTitle:"",
              ArticleContext:"",
              ArticleEmpl:"",
              ArticleLv:"",
              ArticleCreate:"5",
              ArticleLock:"",
              Article_quick_Search:"",
              ArticleUrl:"",
              ArticleFileUrl:"",
              ArticleView:"",
              Upload_Check:"",
              Article_Session_Account:"",  //從中央資源拿取登入中暫存資訊
              Article_Session_Name:"",
            },
            
            Perosnnel_Employee:{
              id:0,
                Name:"測試",
                Account:"123",
                Password:"",
                ArticleClass:"",
                AccountLevel:"",
                Department:"",
                CreateDate:"",
                Upload_Check:"",

            },
            paginationTrue:true,
            paginationFalse:false,
            currentPage: 1,
            pageSize: 10, // 每页显示的数据数量
            UpLoads: new FormData(),
            UploadId:"",
            ModalBind:"",
            Passcode:"",
            ViewBoolT:true,
            ViewBoolF:false,
            Article_Class_Title:"公告專區",
            SensoryObject:{
            Url:"",
            ContextKey:"",
            ContextTitle:"",
            Context:"",
            ContextDate:"",
            ContextEmp:"",
            }
  
            };
        },
    created(){
      this.Login_Copy();
      this.PrintAllArticle();  
      this.CatchDate();
      this.Employee_Information();

    },
        methods:
      {
        Login_Copy(){
            if(this.$store.state.Employee_Login_Session.Account==""){
              this.$store.dispatch("Copy_Login",this.$route.params);
            }
            // this.$store.dispatch("Copy_Login",this.$route.params);
             console.log(this.$store.state.Employee_Login_Session);

        },
        Employee_Information(){   //改到這
          const Level=this.Employee_Login_Object.AccountLevel;
          if(Level!=0){
           this.LoginObject.display="none";
          }else{
           this.LoginObject.display="";
          }

        },
        Init_Preious:function(){
          this.currentPage==1;
        },
        Preious:function(){
         if(this.currentPage>1){
          this.currentPage--;
         }
        },
        Next:function(){
          if(this.currentPage<this.totalPages){
            this.currentPage++;
  
          }
        },
        SlibarFunction:function(){
        const Dom=document.getElementById("siderbar");


        Dom.classList.toggle("active");
      //   const DomBtn=document.getElementById("collapse-btn")
      //   DomBtn.classList.toggle("fa-solid fa-bars");
      
        
      },

      CatchDate:function(){
      const DateObject=new Date();
      let TDay=DateObject.getDate();
      let TMount= DateObject.getMonth();  
      let TYear=DateObject.getFullYear();
      this.Perosnnel_Employee.CreateDate=`${TYear}-${TMount+1}-${TDay}`
      this.Perosnnel_Article.ArticleCreate=`${TYear}-${TMount+1}-${TDay}`

      },
      POSTEmployee:function(){
         
          const self=this;
          this.$swal.fire({
              title: '帳戶申請',
              html: 
              ' <label class="form-check-label" for="flexRadioDefault2">使用者姓名:</label><input type="textbox" id="Employee_Name" class="form-control Employee_Name"placeholder="姓名"></br><label class="form-check-label" for="flexRadioDefault2">使用者帳號:</label><input type="textbox" id="Employee_Acount" class="form-control Employee_Acount"    placeholder="帳號"><br><label class="form-check-label" for="flexRadioDefault2">使用者密碼:</label><input type="password" id="Employee_Password" class="form-control Contextext Employee_Password"  placeholder="密碼"><br><label class="form-check-label" for="flexRadioDefault2">使用者權限:</label><input type="number" id="Employee_Level" class="form-control Contextext Employee_Level"    placeholder="權限等級"><br><label class="form-check-label" for="flexRadioDefault2">使用者部門:</label> <select class="form-select form-select-sm SelectItem Employee_Department" id="Employee_Department" ><option value="人事">人事</option><option value="行政">行政</option><option value="感控">感控</option><option value="健管">健管</option><option value="門診">門診</option><option value="放射">放射</option><option value="藥局">藥局</option><option value="櫃台">櫃台</option><option value="開刀房">開刀房</option><option value="護理部">護理部</option><option value="復健">復健</option></select>',

              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Save',
              denyButtonText: `Don't save`,
              }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                  // self.Account_value=document.getElementById('Employee_Acount').value;
                  // self.Password=document.getElementById('Employee_Acount').value;
                  // self.Level=document.getElementById('Employee_Level').value;
                  // self.Department=document.getElementById('Employee_Department').value;
                  this.CatchDate();
                  this.Perosnnel_Employee.Name=document.getElementById('Employee_Name').value;
                  this.Perosnnel_Employee.Account=document.getElementById('Employee_Acount').value;
                  this.Perosnnel_Employee.Password=document.getElementById('Employee_Password').value;
                  this.Perosnnel_Employee.AccountLevel=document.getElementById('Employee_Level').value;
                  this.Perosnnel_Employee.Department=document.getElementById('Employee_Department').value;
                  
                  if(this.Perosnnel_Employee.Name==""||this.Perosnnel_Employee.Account=="" || this.Perosnnel_Employee.Password==""|| this.Perosnnel_Employee.AccountLevel=="")
                  {
                    setTimeout(function()
                    { self.POSTEmployee();},1500)
                    this.$swal.fire('error!','資料皆為必填','error')


                  }else{
                    axios
                      .post(this.Personnel_Api_Url+"Personnel/Insert_Employee", {
                        Employee_Post:this.Perosnnel_Employee,
                      })
                      
                      .then((response) => {
                        console.log(response.data[0].Upload_Check);
                        if(response.data[0].Upload_Check=="OK")
                        {
                          this.$swal.fire("員工新增成功");

                        }else
                        {
                          this.$swal.fire("員工帳號重複");
                        }

                      })
                      .catch(function (error) {
                        alert(error+"資料庫錯誤請聯繫");
                      });

                  }
              } else if (result.isDenied) {
                  this.$swal.fire('Changes are not saved', '', 'info')
              }
              })
      },
      PrintAllArticle:function(){
        this.$store.dispatch("Prin_Article");  
      },
      InsertArticle:function(){
        console.log(this.Perosnnel_Article.ArticleLv);
        for(let [key,value] of Object.entries(this.Perosnnel_Article)){
            if(value==""){
              if(this.Perosnnel_Article.ArticleClass==""||this.Perosnnel_Article.ArticleTitle==""||this.Perosnnel_Article.ArticleContext==""||
                this.Perosnnel_Article.ArticleCreate==""||this.Employee_Login_Object.Name==""||
                this.Perosnnel_Article.ArticleLv===""){

                console.log(key);
                switch(key){
                  
                case "ArticleLv":
                this.$swal.fire("新增失敗-文章等級不可為空");
                break;
                case "ArticleClass":
                this.$swal.fire("新增失敗-分類不可為空");
                break;
                case "ArticleTitle":
                this.$swal.fire("新增失敗-標頭不可為空");
                break;
                case "ArticleContext":
                this.$swal.fire("新增失敗-內容不可為空");
                break;
                case "ArticleCreate":
                this.$swal.fire("新增失敗-日期不可為空");
                break;
                case "ArticleEmpl":
                this.$swal.fire("新增失敗-輸入人不可為空");
                continue;
                case "Article_Session_Account":
                continue;
                case "Article_Session_Name":
                continue;
            
   
              }
              return false

            }else{
              return true
            }
            }
          }
          return true;
      },
      SelectOnChange:function(Aritcle_Class){
      //  if(Aritcle_Class=="全部公告"){
      //     this.Article_Class_Title="公告專區";
      //  }
       if(Aritcle_Class!="全部公告")
       {
        this.Article_Class_Title=Aritcle_Class+"公告專區";
       }else
       {
        this.Article_Class_Title="公告專區";
       }
        this.$store.dispatch("Print_Class_Aricle",Aritcle_Class)
    },
    ViewSensory:function(Article_ID){
      this.ViewBoolT=false;
      this.ViewBoolF=true;
      this.paginationTrue=false;
      this.paginationFalse=true;
  this.$store.dispatch("Prin_Article_ForId",Article_ID);
    },
      Dele_Article:function(Article_Index,Article_ID){
    let PassCode_Post="";
        this.$swal.fire({
    title: '輸入刪除碼',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Post',
    showLoaderOnConfirm: true,
    preConfirm: (PassCode) => {
      PassCode_Post=PassCode;
      return fetch(this.Personnel_Api_Url+`Personnel/Code/${PassCode}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          this.$swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !this.$swal.isLoading()
  }).then((result) => {
    if (result.value.ReTuCheck=="OK") {
         const DipaObject={};
         DipaObject.Article_Index=Article_Index;
         DipaObject.Article_ID=Article_ID;
         DipaObject.PassCode=PassCode_Post;
         console.log(DipaObject);
         this.$store.dispatch("Article_Delete",DipaObject);
    }else{
      this.$swal.fire("驗證碼錯誤");
      console.log(result.value);
    }
    
  })
    },
    /*
    Uploadverify:function(SensoryId){
      this.$swal.fire({
    title: '輸入上傳碼',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Post',
    showLoaderOnConfirm: true,
    preConfirm: (PassCode) => {
      return fetch(`http://localhost:8080/Sensory/Code/${PassCode}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          this.$swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !this.$swal.isLoading()
  }).then((result) => {
    if (result.value.ReTuCheck=="OK") {
      this.Passcode="A0738"
      this.UploadId=SensoryId;
    }else{
      this.$swal.fire("上傳碼錯誤");
    }
    
  })
    },
    */
    
      fileChange:function(e){
      
       
        this.UpLoads.append("file",e.target.files[0]);
  
  
  
      },
      QrChange:function(e){
        
        this.UpLoads.append("Qr",e.target.files[0]);
  
  
  
  
      },
      SetId:function(UploadId){
      this.UploadId=UploadId;
      console.log(UploadId)

       },
      FileUpload:function(){
        if(this.UpLoads.has("file"))
        {
          this.UpLoads.set("Article_Id",this.UploadId);
          console.log(this.UpLoads.get("Article_Id"))
            axios.post(this.Personnel_Api_Url+"Personnel/UpLoad", this.UpLoads, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      }).then((response) =>{
        this.$refs.fileClear.value="";
        this.$swal.fire("上傳成功");
        this.$store.dispatch("Prin_Article");
        console.log(response);
      }).catch((error) =>{
  
        this.$swal.fire(error+"上傳錯誤");
  
      })
  
        }
        else{
          this.$swal.fire("至少需上傳一項");
        }
      },
      UrlFun:function(Url){
      return Url;
      },
      FileUrlFun:function(Url,Class){
      if(Class=="File")
      {
        const FileUrl=`./PersonnelFile/${Url}`;   
        return FileUrl;
      }
      },
      Quick_Search:function(){
         
             this.$store.dispatch("Quick_Search",this.Perosnnel_Article.Article_quick_Search);
          },
          
      POSTArticle:function(){
        let InserCheck=this.InsertArticle();
         if(InserCheck==true)
         
        {
          this.Perosnnel_Article.Article_Session_Account=this.Employee_Login_Object.Account
          this.Perosnnel_Article.Article_Session_Name=this.Employee_Login_Object.Name
          axios
            .post(this.Personnel_Api_Url+"Personnel/Insert_Article", {
             Article_Post:this.Perosnnel_Article   //中央管理Employee的暫存登入資訊

            })
             
            .then((response) => {
              Object.assign(this.$data, this.$options.data());
              console.log(response);
              if(response.data[0].Upload_Check=="OK")
              {
              this.$swal.fire("文章新增成功");
              this.CatchDate();
              this.PrintAllArticle();  

              }else
              {
              this.$swal.fire("文章新增失敗");
              this.CatchDate();

              }
          
              // this.PrintAllArticle();
            })
            .catch(function (error) {
               alert(error+"資料庫錯誤請聯繫");
            });
  
  
         }
      },
      PrePage:function(){
      this.ViewBoolT=true;
      this.ViewBoolF=false;
      this.paginationTrue=true;
      this.paginationFalse=false;
      },
      
      test:function(){ 
          alert("123");
        },
        test2(){
         return "123";
  
        }
    },
    
    computed:
    {
      /*mapState可以簡化code*/
      ...mapState({
        Messagetest:state=>state.msg,
        UserTest:state=>state.userList,
        Article_List:state=>state.ArticleList,
        One_Article_List:state=>state.OneArticle,
        Employee_Login_Object:state=>state.Employee_Login_Session,
        
      }),
          // Employee_Login_Session:function(){
          //    return this.Employee_Login_Session;
          // },
          displayedData:function(){
          const startIndex=(this.currentPage-1)*this.pageSize;
          const endIndex=startIndex+this.pageSize;
          return  this.Article_List.slice(startIndex,endIndex);
          },
          totalPages:function(){
          return Math.ceil(this.Article_List.length/this.pageSize);
          },

   
      /*更縮減寫法
      ...mapState(['msg','userList'])
      */
  
      // Messagetest:function(){
      //   return this.$store.state.msg;
      // },
  
      // UserTest:function(){
      //   return this.$store.state.userList;
      // }
    }
  }
    
    
    
    </script>
    
    
    <style>
     .insideArea .paginationView{
    position: absolute;
    left: 44%;
    top:45%;
    transition: 1.2s;
    opacity: 1;
     }
     .insideArea .paginationHide{
      opacity: 0;
      pointer-events: none;

     }
     .insideArea .paginationHide{
    position: absolute;
    left: 44%;
    top:45%;
     }

    .TotalContext{
      display: flex;
    }
    .carouselArea img{
      width: 100%;
      height: 500px;
    }
    #siderbar{
      position: relative;
  
      background-color: rgb(30, 31, 66);
      width: 500px;
      height: 2000px;
      color: white;
      transition: 0.4s;
    }




  
    #siderbar p{
      text-align: center;
      font-size:30px;
      font-style: italic;
    }

    #siderbar .SelectItem {
      width: 315px;
    }

    #siderbar ul li a{
     display: block;
    }
    #siderbar.active {
      margin-left:-500px;
      transition: 1s;

    }






  
    .liTitle{
      font-size:20px;
      font-style:normal;
  
    }
  
    .ContextextArea{
      margin: 10px 50px 20px 0;
    }
    
   .IconImage{
    float: left;
   }
  
  
    .collapse-btn{
      padding: 15px;
      position:absolute;
      background-color:  rgb(30, 31, 66);
      border: none;
      color: white;
      width:50px;
      top: 0%;
      left: 0px;
  
    }


  
  
    
    .collapse-btn:hover{
      background-color: rgb(47, 182, 45);
      transition: 0.5s;
    }

    .collapse-btn2:hover{
      background-color: rgb(47, 182, 45);
      transition: 0.5s;
    }
  

    .PostContext_Employee{
      text-align: center;
      position: absolute;
      top: 63%;
      left: 65px;
      width: 60%;
      font-size:30px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
    }
  
    .PostContext_Employee:hover{
     width: 30%;
     left: 125px;
     transition: 0.5s;
     font-size:20px;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     border-radius: 5px;
    
  
  
    }

    .PostContext{
      text-align: center;
      position: absolute;
      top: 60%;
      left: 65px;
      width: 60%;
      font-size:30px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
    }
  
    .PostContext:hover{
     width: 30%;
     left: 125px;
     transition: 0.5s;
     font-size:20px;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     border-radius: 5px;
    
  
  
    }



  
    .IconImage{
   
      left: 100%;
    }
  
  .ArticleContext{
    position: relative;
    width: 100%;
    height: 2000px;
    font-weight: bolder;
    color: rgb(233, 22, 50);
     
  
  }
   .ArticleContext p{
    
    text-align: center;
    font-size: 60px;
    font-style: oblique;
   }
  
   .insideArea{
    
    margin: 0px 10px 20px 20px;
    display: inline;
    width: 100%;
    opacity: 1;
    transition: 0.5s;
    font-size: 30px;
  
  
   }
  
   .insideArea .SelectItem
   {
    top:0%;
    width: 10%;
    font-size: 15px;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: rgb(220, 220, 226);
    border-block-color:rgb(192, 94, 107);
    margin: 0px 10px 20px 20px;
    display: inline-block;
  
   }

   .insideArea .Quick_Search {

    width: 20%;
    display: inline-block;

   }
  
  
  
   /* .insideArea:hover{
    opacity: 0;
    transition: 0.5s;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
   } */
  
   .outsideArea{
    display: inline;
    position:relative;
    width: 100%;
    background-color: rgb(44, 54, 51);
   }
  
  
    .insideArea{
      /* background-color:black; */
      
    }
  
  
    
  
  @media(max-width: 750px){
    #siderbar {
      margin-left:-500px;
    }
  
    #siderbar.active {
      margin-left:0px;
    }
    #siderbar.SelectItem {
      width: 300px;
    }

  
    .ArticleContext p{
    text-align: center;
    font-size: 25px;
    font-style: oblique;
   }
   .insideArea .SelectItem
  {
    width: 40%;
  }
  
  }
   .ViewTitle .PreButton{
    font-size: 20px;
    border: 0;
  }
  
  .ArticleContext .ActiveTable{
    
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    opacity: 0;
    font-size: 5px;;
    transition: 1s;
    z-index: -100;
  
  
  }
  .ArticleContext .HideTable
  {
    position: absolute;
      top: 10%;
      left: 0px;
      width: 100%;
   opacity: 1;
   transition: 1s;
  
  }
  
  .ArticleContext .ActiveSensoryContextTable{
    position: absolute;
      top: 42%;
      left: 0px;
      width: 100%;
   transition: 1s;
  
  }
  
  .ArticleContext .HideSensoryContextTable {
    position: absolute;
      top: 10%;
      left: 0px;
      width: 100%;
   transition: 1s;
  }
  .HideTable{
    font-size: 23px;
  }
  .HideTable span{
    color: black;
    font-size: 25px;
  }
  
  .HideTable tfood{
   color: red;
   font-size: 23px;
   font-weight: bolder;
  
   font-family:Arial, Helvetica, sans-serif
   
  }
  
  .HideTable tfood span{
    font-weight: bolder;
    color: black;
    font-size:25px;
  }
  
  .HideTable textarea{
    resize: none;
  }
  .ContextextArea textarea{
    resize: none;
  }
  
    </style>
    