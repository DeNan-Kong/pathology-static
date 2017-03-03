<template>
<div>
   <div class="embedding-contains">
      <div class="section-top">
          <p class="floatleft embedding-four textcenter">病理号:</p>
          <input type="text"  class="floatleft radius common embedding-six" v-model="selectData.patientNo">
          <input type="radio" checked name="sectiontime" class="floatleft radio hours24"><p class="floatleft section-three section-top-p textcenter">24小时</p>
          <input type="radio" name="sectiontime" class="floatleft radio"><p class="floatleft section-four textcenter">时间范围:</p>
          <calendar :date="selectData.scopeDateStart" v-on:change="sectionStartDate"/>
          <p class="floatleft  embeddingzhi textcenter">至</p>
          <calendar :date="selectData.scopeDateEnd" v-on:change="sectionEndDate"/>
          <button class="floatleft section-top-btn" @click="sectionTableShow">查询</button>    
      </div>
      <div class="section-table">
        <!-- <sectiontable :sectionList="(sectionList)"/>  -->
        <el-table
          :data="sectionList"
          border
          height="520"
          @selection-change="sectionChange"
          highlight-current-row>
          <el-table-column
            type="selection"
            min-width="35">
          </el-table-column>
          <el-table-column
            label="病理号"
            fixed
            show-overflow-tooltip
            min-width="127">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.pathologyNo }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="任务来源"
            show-overflow-tooltip
            min-width="180">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.taskSourceId }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="材块号"
            show-overflow-tooltip
            min-width="112">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.materialNo }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            show-overflow-tooltip
            min-width="120">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.patientName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="性别"
            show-overflow-tooltip
            min-width="90">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="年龄"
            show-overflow-tooltip
            min-width="90">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.age }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="包埋操作员"
            show-overflow-tooltip
            min-width="138">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.embeddingOperatorId }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="包埋日期"
            show-overflow-tooltip
            min-width="170">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.embeddingDate }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="制片状态"
            show-overflow-tooltip
            min-width="100">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.productionStatus }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="切片数"
            show-overflow-tooltip
            min-width="120">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sectionQuantity}}</span>
            </template>
          </el-table-column>
        </el-table> 
      </div>
        <div class="section-bottom">
          <p class="floatleft section-bottom-one">当前待切片数:{{nowSectionNum}}</p>
          <p class="floatleft section-bottom-two">提前</p><input type="text" class="floatleft section-bottom-input" v-model="sectionConfirmData.aheadDay"><p class="floatleft">天确定</p>
          <button class="floatleft section-bottom-btn" @click="sectionConfirm">切片确认</button>
        </div>
      </div>
   </div>
</div>
</template>
<style>
.cannotsee{
  display: none;
}
.section-top{
  width: 100%;
  height: 38px;
  line-height: 3px;
}
.section-top .radio{
  margin-top: 12px;
  margin-left: 10px;
}
.section-top .section-top-btn{
   width: 4.5%;
    height:28px;
    background: #428bca;
    border-radius: 3px;
    margin-left:15px;
    margin-top: 5px;
    line-height: 24px;
    color:#fff;
}
.section-top-p{
  margin-left: 7px;
}
.section-three{
  width:3.5%;
}
.section-four{
  width: 4.5%;
}
thead{
  height: 31px;
  line-height: 31px;
}
.section-table{
  width: 100%;
  height: 528px;
  border-top: 1px solid #ccc;
  border-bottom:1px solid #ccc;
}
.section-bottom{
  height: 48px;
  margin-top: 5px;
}
.section-bottom p{
  display: block;
  line-height: 36px;
}
.section-bottom-one{
  margin-left: 71%;
  color:#2eacd5;
  text-decoration: underline;
  cursor:pointer;
}
.section-bottom .section-bottom-input{
  width:20px;
  height: 20px;
  margin-left: 2px;
  margin-right: 2px;
  margin: 7px;
}
.section-bottom-two{
  margin-left: 2%;
}
.section-bottom-btn{
  width:76px;
  height: 36px;
  background: #428bca;
  border-radius: 3px;
  margin-left: 3%;
  color:#fff;
}
</style>
<script>
import $ from "jQuery"
import Calendar from 'components/calendar';
import Sectiontable from 'components/sectiontable';
  export default {
    data() {
      return {
          lists:null,
          sectionList:[],
          nowSectionNum:0,
          selectData:{
            patientNo:null,
            hours24: true,
            scopeDateStart:null,
            scopeDateEnd:null
          },
          sectionConfirmData:{
            aheadDay:null,
            idList:[]
          }
      }
    },
    props: [],
    components:{
          "calendar":Calendar,
          "sectiontable":Sectiontable
    },
    created(){ // 生命周期 created,获取数据
        this.fetchSectionData(),
        this.listData()
    },
    methods:{
        async listData(){
            const response = await
            fetch('/production/sectionlist', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify()
            });
            const json = await
            response.text();
            const data = JSON.parse(json);
            this.sectionList = data;
            for(var i=0;i<this.sectionList.length;i++){
              this.nowSectionNum+=this.sectionList[i].sectionQuantity
            }
        },
        async sectionTableShow(){
           if($('.hours24').is(':checked')){
             this.selectData.hours24=true
           }else{
            this.selectData.hours24=false
           }
            
            const self = this;
            const response = await
            fetch('/production/sectionlist', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(this.selectData)
            });
            console.log(JSON.stringify(this.selectData))
            const json = await
            response.text();
            const data = JSON.parse(json);
            self.sectionList = data;
        },
        sectioncheck:function(e){
          var checkid=$(e.target).attr("id");
          console.log(checkid)
          if($("#"+checkid).hasClass('selectbox')){
          $("#"+checkid).removeClass("selectbox").addClass("noselectbox");
          }else{
          $("#"+checkid).addClass("selectbox").removeClass("noselectbox");
              }
       },
      sectioncheckall:function(){
        if($('.sectioncheckall').hasClass('selectbox')){
            $(".sectioncheckall").removeClass("selectbox").addClass("noselectbox");
            $(".sectionone").removeClass("selectbox").addClass("noselectbox");
            }else{
            $(".sectioncheckall").removeClass("noselectbox").addClass("selectbox");
            $(".sectionone").addClass("selectbox").removeClass("noselectbox");
                }
        },
        fetchSectionData:function(){
                var xhr = new XMLHttpRequest()
                var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                self.list = JSON.parse(xhr.responseText);
      }
      xhr.send()
    },
    sectionStartDate:function(date){
      if (date != null) {
          let sectionStartDate = new XDate(date);
          this.selectData.scopeDateStart = sectionStartDate.toString("yyyy-MM-dd");
        }
    },
    sectionEndDate:function(date){
      if (date != null) {
          let sectionEndDate = new XDate(date);
           this.selectData.scopeDateEnd = sectionEndDate.toString("yyyy-MM-dd");
        }
    },
    sectionChange:function(val){
        for (let i = 0; i < this.sectionList.length; i++) {
          let item = this.sectionList[i];
          item.isSelected = false;
        }
        for (let i = 0; i < val.length; i++) {
          let newItem=val[i];
          newItem.isSelected=true;
        }
    },
    async sectionConfirm(){
      var newItems = [];
      for (let i = 0; i < this.sectionList.length; i++) {
          let item = this.sectionList[i];
          if (!item.isSelected==false) {
              newItems.push(item)
          }
        } 
        this.sectionConfirmData.idList=[]
        for(let i=0;i<newItems.length;i++){
          this.sectionConfirmData.idList.push(newItems[i].materialDetailId)
        }
         const response = await
          fetch('/production/sectionlist', {
          method: 'POST',
          credentials: 'include',
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(this.sectionConfirmData)
      });
          console.log(JSON.stringify(this.sectionConfirmData))
          const json = await  response.text();
          const data = JSON.parse(json);
          this.sectionList = data;

    }

    }
  };
</script>