<template>
    <div class="filmmaking-main">
        <div class="filmmaking-contains">
            <div class="filmmaking-top">
                <p class="floatleft top-p-one">病理号:</p>
                <input type="text" class="floatleft top-ipt radius common" v-model="filmmakingSearchData.patientNo"> 
                 <p class="floatleft top-p-three">任务来源:</p>
                 <form  class="floatleft top-form">
                    <select class="radius common" v-model="filmmakingSearchData.taskSourceId">
                        <option v-for="item in initialData.taskSourceList" :value="item.id">{{item.name}}</option>
                    </select>
                </form>
                <input type="radio" checked name="filmmakingdate" class="floatleft filmmakingradio filmmakingHours">
                <p class="floatleft top-p-two radioleft">24小时</p>
                <input type="radio" class="floatleft filmmakingradio" name="filmmakingdate">
                <p class="floatleft top-p-form radioleft">制片时间:</p>
                <calendar :date="filmmakingSearchData.scopeDateStart" v-on:change="filmmakingStartDate"/>
                <p class="floatleft top-p-six">至</p>
                <calendar :date="filmmakingSearchData.scopeDateStart" v-on:change="filmmakingEndDate"/>
                 <form  class="floatleft top-p-four">
                    <select class="radius common" v-model="filmmakingSearchData.printStatus">
                        <option v-for="item in initialData.printStatusList" :value="item.id"> {{item.name}}
                        </option>
                    </select>
                </form>
                 <form  class="floatleft top-p-four">
                    <select class="radius common" v-model="filmmakingSearchData.productionStatus">
                        <option v-for="item in initialData.productionStatusList" :value="item.id"> {{item.name}}
                        </option>
                    </select>
                </form>
                <button class="floatleft top-btn" @click="filmmakingSearch">查询</button>
            </div>
            <div class="filmmaking-table">
                <el-table
                    :data="productionList"
                    border
                    height="492"
                    highlight-current-row
                    @selection-change="filmmakingChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="病理号"
                            show-overflow-tooltip
                            fixed
                            min-width="102">
                        <template scope="scope">
                            <span>{{ scope.row.pathologyNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="任务来源"
                            show-overflow-tooltip
                            min-width="75">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.taskSource }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片子号"
                            show-overflow-tooltip
                            min-width="76">
                        <template scope="scope">
                            <span>{{ scope.row.materialNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片说明"
                            show-overflow-tooltip
                            min-width="80">
                        <template scope="scope">
                            <span>{{ scope.row.productionExplain }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="姓名"
                            show-overflow-tooltip
                            min-width="60">
                        <template scope="scope">
                            <span>{{ scope.row.patientName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="性别"
                            show-overflow-tooltip
                            min-width="46">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.sexName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="年龄"
                            show-overflow-tooltip
                            min-width="46">
                        <template scope="scope">
                            <span>{{ scope.row.age }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="申请人"
                            show-overflow-tooltip
                            min-width="60">
                        <template scope="scope">
                            <span>{{ scope.row.proposerId }}</span>
                            <span style="margin-left: 10px">{{ scope.row.proposer }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="收费情况"
                            show-overflow-tooltip
                            min-width="72">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.chargeType }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="收费时间"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span>{{ scope.row.chargeDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片人"
                            show-overflow-tooltip
                            min-width="66">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.producer }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片时间"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span>{{ scope.row.productionDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片状态"
                            show-overflow-tooltip
                            min-width="75">
                        <template scope="scope">
                            <span>{{ scope.row.productionStatusName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="打印状态"
                            show-overflow-tooltip
                            min-width="75">
                        <template scope="scope">
                            <span>{{ scope.row.printStatusName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="玻片核对"
                            show-overflow-tooltip
                            min-width="75">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.slideChecker }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="核对时间"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span>{{ scope.row.slideCheckDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="切片评级"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.rate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="评级人"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.rateOperator }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="染色人"
                            show-overflow-tooltip
                            min-width="90">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.dyeOperator }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="染色时间"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span>{{ scope.row.dyeDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="取材医生"
                            show-overflow-tooltip
                            min-width="90">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.sampleDoctor }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="包埋人"
                            show-overflow-tooltip
                            min-width="90">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.embeddingOperator }}</span>
                        </template>
                    </el-table-column>
                  </el-table>
                <!-- <filmmakingtable :productionList="productionList" /> -->
            </div>
            <div class="filmmaking-adddelete">
                <p class="floatleft top-p-seven textright">任务来源:</p>
               <form  class="floatleft top-p-four">
                    <select class="radius common" v-model="filmmakingBtnData.taskSourceId">
                        <option v-for="item in initialData.taskSourceList" :value="item.taskSourceId"> {{item.name}}
                        </option>                     
                    </select>
                </form>
                <p class="floatleft top-p-four textright">制片时间:</p>
                <calendar :date="filmmakingBtnData.productionDate" v-on:change="productionDate"/>
                <p class="floatleft top-p-three textright">制片人:</p>
                <form  class="floatleft top-p-four">
                    <select class="radius common" v-model="filmmakingBtnData.producerId">
                      <option v-for="item in initialData.producerList" :value="item.sampleDoctorId">{{item.name}}</option>
                    </select>
                </form>
                <p class="floatleft top-p-four textright">制片说明:</p>
                <form  class="floatleft top-p-three">
                    <select class="radius common" v-model="filmmakingBtnData.productionExplainId">
                      <option v-for="item in initialData.productionExplainList" :value="item.productionExplainId">{{item.name}}</option>
                    </select>
                </form>
                <p class="floatleft top-p-three  textright">序号:</p> 
                <form  class="floatleft top-p-four">
                    <select class="radius" v-model="filmmakingBtnData.materialIDX">
                      <option v-for="item in initialData.materialNoList" :value="item.materialNoId">{{item.name}}</option>
                    </select>
                </form> 
               <p class="floatleft top-p-three textright" >病理号:</p>
               <input type="text" class="floatleft top-ipt radius common" v-model="filmmakingBtnData.pathologyNo">
               <button class="floatright delete-btn" @click="filmmakingDelete">删除</button>
               <button class="floatright add-btn" @click="filmmakingAdd">添加</button>
                
            </div>
            <div class="clear"></div>
            <div class="filmmaking-bottom">
                <button class="floatright filmmaking-bottom-btnlong filmmaking-bottom-btn">移交表单打印</button>
                <button class="floatright filmmaking-bottom-btn"
                @click="glassCheck">玻片核对</button>
                <button class="floatright filmmaking-bottom-btn" @click="dyeingHE">HE染色</button>
                <button class="floatright filmmaking-bottom-btn">标签打印</button>
                 <p class="floatright"><a href="#">当前制片数：{{productionList.length}}</a></p>
            </div>
        </div>
    </div>
</template>
<style>
.filmmaking-main button:hover{
    background: #3577af; 
}
.filmmaking-main{
    margin-top: 5px;
    height: 660px;
}
.filmmaking-contains{
    margin: 10px auto;
    height: 620px;
} 
.filmmaking-top{
    height: 40px;
}
.filmmaking-top p{
    display: block;
    line-height: 40px;
    text-align: center;
} 
.filmmaking-top .radioleft{
    text-align: left;
}
.filmmaking-top .p-margin{
    margin-top: 8px;
}
.filmmaking-top .filmmakingradio{
    margin-top: 13px;
    margin-left: 3px;
}
.top-p-one{
    width: 4%;
} 
.top-ipt{
    width: 8%;
    margin-left: 3px;
}
.top-p-two{
    width: 3.5%;
}
.filmmaking-top .rightp{
    text-align: left;
}
.top-form{
    width: 6.2%;
}
.top-p-three{
    width: 4.7%;
    margin-left: 5px;
}
.top-p-four{
    width: 5.6%;
    margin-left: 5px;
} 
.top-p-five{
    width: 8%;
}
.top-p-seven{
    width:7%;
}
.top-btn{
    width:54px;
    height: 24px;
    background:#428bca; 
    margin-top: 8px;
    border-radius: 3px;
    color:#fff;
}
.top-p-six{
    width:2%;
}
.filmmaking-table{
    width: 100%;
    height: 500px;
    border-top:1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.filmmaking-adddelete{
    margin-top: 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.add-btn,.delete-btn{
    width:58px;
    height: 24px;
    background:#428bca; 
    margin-top: 8px;
    border-radius: 3px;
    color:#fff;
    margin-right: 10px;
    line-height: normal;
}
.filmmaking-bottom{
    height: 40px;
}
.filmmaking-bottom-btn{
    width: 76px;
    height: 32px;
    background:#428bca; 
    margin-top: 3px;
    border-radius: 3px;
    color:#fff;
    margin-left: 1.6%;
    line-height: normal;
}
.filmmaking-bottom p{
    width:110px;
    display: block;
    line-height: 40px;
}
.filmmaking-bottom-btnlong{
    width:110px;
    margin-right: 10px;
}
.table-two{
    width: 2%;
}
.table-three{
    width:3%;
}
.table-four{
    width:4%;
}
.table-five{
    width:5%;
}
.table-six{
    width:6%;
}
.table-seven{
    width:7%;
}
.table-eight{
    width:8%;
}
.table{
    text-align: center;
    line-height: 40px;
}
.checkspan{
    margin-left: 2%;
    margin-top: 12px;
}
.tablecheck{
    margin:auto;
}
body .filmmaking-table .table{
    height: 32px;
}
</style>
<script>
import Calendar from 'components/calendar';
import Filmmakingtable from 'components/filmmakingtable';
import $ from "jQuery";
    export default{
        data(){
            return{
                initialData:{},
                productionList:[],
                filmmakingSearchData:{
                    patientNo: null,
                    taskSourceId: null,
                    hours24: true,
                    scopeDateStart:null,
                    scopeDateEnd:null,
                    printStatus: -1,
                    productionStatus:-1
                },
                filmmakingBtnData:{
                    taskSourceId: 1,
                    productionDate: null,
                    producerId: 1,
                    productionExplainId:1,
                    materialIDX: 1,
                    pathologyNo: null
                },
                selectId:[],
                deleteId:[],
                glassCheckId:[]
            }
        },
        components:{
           "calendar":Calendar,
           "filmmakingtable":Filmmakingtable
        },
        created(){ // 生命周期 created,获取数据
            this.loadData();
            this.listData();
        },
        methods:{
            async listData(){
                const response = await
                    fetch('/production/productionlist', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify([])
                    });
                const json = await response.text();
                const data = JSON.parse(json);
                this.productionList = data;
            },
            async loadData(){
                const response = await fetch('/production/load', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify([])
                });
                const json = await
                response.text();
                const data = JSON.parse(json);
                this.initialData = data;
            },
            async filmmakingSearch(){
                if($('.filmmakingHours').is(':checked')){
                    this.filmmakingSearchData.hours24=true
               }else{
                    this.filmmakingSearchData.hours24=false
               }
                const response = await fetch('/production/queryproduction', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.filmmakingSearchData)
                });
                console.log(JSON.stringify(this.filmmakingSearchData))
                const json = await
                response.text();
                const data = JSON.parse(json);
                this.productionList = data;
            },
            filmmakingStartDate:function(date){
                if (date != null) {
                let filmmakingStartDate = new XDate(date);
                this.filmmakingSearchData.scopeDateStart = filmmakingStartDate.toString("yyyy-MM-dd");
                }
            },
            filmmakingEndDate:function(date){
                if (date != null) {
                let filmmakingEndDate = new XDate(date);
                this.filmmakingSearchData.scopeDateEnd = filmmakingEndDate.toString("yyyy-MM-dd");
                }
            },
            filmmakingChange(val) {
                for (let i = 0; i < this.productionList.length; i++) {
                    let item = this.productionList[i];
                    item.isSelected = false;
                }
                for (let i = 0; i < val.length; i++) {
                  let newItem=val[i];
                  newItem.isSelected=true;
                }
            },
            productionDate:function(date){
                if (date != null) {
                let productionDate = new XDate(date);
                this.filmmakingBtnData.productionDate = productionDate.toString("yyyy-MM-dd");
                }
            },
            async filmmakingAdd(){
                const response = await fetch('/production/addproduction', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.filmmakingBtnData)
                });
                console.log(JSON.stringify(this.filmmakingBtnData))
                const json = await
                response.text();
                const data = JSON.parse(json);
                //this.productionList = data;
            },
            async dyeingHE(){
                var newItems = [];
                for (let i = 0; i < this.productionList.length; i++) {
                    let item = this.productionList[i];
                    if (!item.isSelected==false) {
                        newItems.push(item)
                    }
                  } 
                  this.selectId=[]
                  for(let i=0;i<newItems.length;i++){
                    this.selectId.push(newItems[i].materialDetailId)
                  }
                   const response = await
                    fetch('/production/dye', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.selectId)
                });
                    console.log(JSON.stringify(this.selectId))
            },
            async filmmakingDelete(){
                var newItems = [];
                for (let i = 0; i < this.productionList.length; i++) {
                    let item = this.productionList[i];
                    if (!item.isSelected==false) {
                        newItems.push(item)
                    }
                  } 
                  this.deleteId=[]
                  for(let i=0;i<newItems.length;i++){
                    this.deleteId.push(newItems[i].materialDetailId)
                  }
                   const response = await fetch('/production/deleteproduction', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.deleteId)
                });
                    console.log(JSON.stringify(this.deleteId))
                    const json = await  response.text();
                    const data = JSON.parse(json);
                    //this.productionList = data;
            },
            async glassCheck(){
                console.log("mmmm")
               var newItems = [];
                for (let i = 0; i < this.productionList.length; i++) {
                    let item = this.productionList[i];
                    if (!item.isSelected==false) {
                        newItems.push(item)
                    }
                  } 
                  this.glassCheckId=[];
                  for(let i=0;i<newItems.length;i++){
                    this.glassCheckId.push(newItems[i].materialDetailId)
                  }
                   const response = await fetch('/production/slidechecke', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(this.glassCheckId)
                });
                 console.log(JSON.stringify(this.glassCheckId))
            }
        }
    }
</script>