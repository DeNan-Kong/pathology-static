<template>
    <div>
        <div class="embedding-contains">
            <div class="embedding-top">
               <p class="floatleft embedding-bingnum">病理号:</p>
               <input type="text" class="floatleft radius common embedding-six" maxlength="20" v-model="embeddingSearchData.patientNo">
               <p class="floatleft embedding-five">取材医生:</p>
               <form  class="floatleft embedding-six textleft">
                    <select class="radius common" v-model="embeddingSearchData.sampleDoctorId">
                        <option v-for="item in initialData.sampleDoctorList" :value="item.sampleDoctorId">{{item.name}}</option>
                   </select>
                </form>
                    <input type="radio" checked name="embeddingTime" class="floatleft radio embeddingHours">
                    <p class="floatleft embedding-four radioleft">24小时</p>
                    <input type="radio" name="embeddingtime" class="floatleft radio">
                    <p class="floatleft embedding-five radioleft">时间范围:</p>
                    <calendar :date="embeddingSearchData.scopeDateStart" v-on:change="embeddingStartDate"/>
                    <p class="floatleft embeddingzhi">至</p>
                    <calendar :date="embeddingSearchData.scopeDateEnd" v-on:change="embeddingEndDate"/>
                <a href="" class="floatleft embedding-four">脱钙(0)</a>
                <a href="" class="floatleft embedding-four">冰冻(0)</a>
                <form  class="floatleft embedding-five">
                    <select class="radius common" v-model="embeddingSearchData.printStatus">
                        <option v-for="item in initialData.printStatusList" :value="item.id">{{item.name}}</option>
                    </select>
                </form>
                <form  class="floatleft embedding-five">
                    <select class="radius common" v-model="embeddingSearchData.productionStatus">
                        <option v-for="item in initialData.productionStatusList" 
                        :value="item.id">{{item.name}}</option>
                    </select>
                </form>
                <button class="floatleft embedding-three" @click="embeddingSearch">查询</button>
                <button class="floatleft embedding-three" @click="embeddingDefaultSearch">默认</button>
                <div>   
                </div> 
            </div>
            <div class="embedding-table">
                <el-table
                    :data="embeddingList"
                    border
                    height="520"
                    highlight-current-row
                    @selection-change="selectionChange"
                    @current-change="handleCurrentChange">
                    <el-table-column
                            type="selection"
                            min-width="48"
                    >
                    </el-table-column>
                    <el-table-column
                            label="病理号"
                            show-overflow-tooltip
                            min-width="112"
                    >
                        <template scope="scope">
                            <span>{{ scope.row.pathologyNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="任务来源"
                            show-overflow-tooltip
                            min-width="106">
                        <template scope="scope">
                            <span>{{ scope.row.taskSource }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="材块号"
                            show-overflow-tooltip
                            min-width="92">
                        <template scope="scope">
                            <span>{{ scope.row.materialNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="姓名"
                            show-overflow-tooltip
                            min-width="84">
                        <template scope="scope">
                            <span>{{ scope.row.patientName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="性别"
                            show-overflow-tooltip
                            min-width="60"
                    >
                        <template scope="scope">
                            <span>{{ scope.row.sexName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="年龄"
                            show-overflow-tooltip
                            min-width="60"
                    >
                        <template scope="scope">
                            <span>{{ scope.row.age }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="取材部位"
                            show-overflow-tooltip
                            min-width="100">
                        <template scope="scope">
                            <span>{{ scope.row.materialParts }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="材块数"
                            show-overflow-tooltip
                            min-width="56">
                        <template scope="scope">
                            <span>{{ scope.row.materialQuantity }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="取材医生"
                            show-overflow-tooltip
                            min-width="80">
                        <template scope="scope">
                            <span>{{ scope.row.sampleDoctor }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="取材日期"
                            show-overflow-tooltip
                            min-width="102">
                        <template scope="scope">
                            <span>{{ scope.row.sampleDoctorDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="材块核对"
                            show-overflow-tooltip
                            min-width="80">
                        <template scope="scope">
                            <span>{{ scope.row.materialChecker }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="打印状态"
                            show-overflow-tooltip
                            min-width="80">
                        <template scope="scope">
                            <span>{{ scope.row.printStatusName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="制片状态"
                            show-overflow-tooltip
                            min-width="80">
                        <template scope="scope" >
                            <span>{{ scope.row.productionStatusName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="核对时间"
                            show-overflow-tooltip
                            min-width="110">
                        <template scope="scope">
                            <span>{{ scope.row.materialCheckDate }}</span>
                        </template>
                    </el-table-column>
                  </el-table>
               <!--  <embeddingtable :embeddingList="embeddingList" v-on:selectionChange="HandelcurrentChange"/> -->
            </div>
            <div class="embedding-bottom">
                <p class="floatleft embedding-bottom-p">当前待包埋数：{{embeddingNum}}</p>
                <p class="floatleft embedding-bottom-two embedding-bottom-p">材块数：{{blockNum}}</p>
                <div class="floatleft embedding-bottom-div"><p class="floatleft">提前</p>
                    <input type="text" class="floatleft embedding-bottom-text" maxlength="2" v-model="embeddingCheckData.aheadDay"><p class="floatleft">天确定</p>
                </div>
                <button class="floatleft" @click="blockCheck">材块核对</button>
                <button class="floatleft">标签打印</button>
                <button class="floatleft" @click="embeddingConfirm">包埋确认</button>
                <button class="floatleft">移交打印表</button>
            </div>
        </div>
    </div>
</template>
<style>
.embedding-top .common{
    margin-top: 6px;
}
.embedding-contains input[type='radio']{
    margin-right: 2px;
}
.embedding-top .embedding-top .el-date-editor.el-input{
    margin-left: 0px;
}
.embeddingzhi{
    display: block;
    width: 2%;
    height: 38px;
}
.embedding-top .el-date-editor.el-input{
    margin-left: -15px;
}
.radioleft{
    text-align: left;
}
body div .embedding-contains .embedding-top .el-date-editor .el-input{
    width: 123px;
}
.embedding-contains{
    margin: 6px 5px;
    height: 620px;
    min-width: 1340px;
}
.embedding-top{
    width: 100%;
    height:38px;
    line-height: 38px;
    text-align: center;
}
.embedding-bingnum{
    width: 3.5%;
}
.embedding-one{
    width: 1%;
}
.embedding-five{
    width: 4.5%;
}
.embedding-four{
    width: 4%;
}
.embedding-six{
    width: 6%;
}
.embedding-top .radio{
    margin-top: 11px;
}
.embedding-thre{
    width: 3%;
}
.embedding-top button{
    width: 4%;
    height:24px;
    background: #428bca;
    border-radius: 3px;
    margin-left:5px;
    margin-top: 7px;
    line-height: 24px;
    color:#fff;
}
.embedding-top button:hover{
    background: #3577af;
}
.embedding-table{
    width: 100%;
    height: 528px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.embedding-bottom{
    width: 100%;
    height: 36px;
    margin-top: 16px;
    line-height: 36px;
}
.embedding-bottom button{
    width: 6%;
    height: 36px;
    background: #428bca;
    border-radius: 3px;
    color:#fff;
    text-align: center;
    margin-left: 2%;
}
.embedding-bottom button:hover{
    background: #3577af;
}
.embedding-bottom p{
    display: block;
}
.embedding-bottom-text{
    width: 22px;
    height: 22px;
    margin: 7px;
}
.embedding-bottom-div{
    margin-left: 1.5%;
}
.embedding-bottom-p{
    margin-left: 43%;
    color:#2eacd5;
    text-decoration: underline;
    cursor: pointer;
}
.embedding-bottom-two{
    margin-left:20px;
}
</style>
<script>
import $ from "jQuery"
import Calendar from 'components/calendar';
import Embeddingtable from 'components/embeddingtable';
import Vue from 'vue';
    export default{
        data(){
            return{
                items: null,
                apiURL:"/api/hello",
                initialData: {},
                embeddingList:[],
                embeddingNum:0,
                blockNum:0,
                embeddingSearchData:{
                    patientNo: null,
                    sampleDoctorId: null,
                    hours24: true,
                    scopeDateStart: null,
                    scopeDateEnd: null,
                    printStatus: 1,
                    productionStatus:1
                },
                defaultSearchData:{
                    patientNo: null,
                    sampleDoctorId: null,
                    hours24: false,
                    scopeDateStart: null,
                    scopeDateEnd: null,
                    printStatus: -1,
                    productionStatus:-1
                },
                embeddingCheckData:{
                    aheadDay:null,
                    idList:[]
                },
                embeddingConfirmData:{
                    aheadDay:null,
                    idList:[]
                },
                multipleSelection:[]
            }
        },
        components:{
           "calendar":Calendar,
           "embeddingtable":Embeddingtable
        },
        created(){ // 生命周期 created,获取数据
            this.loadData();
            this.listData();
        },
        watch: {  // 观测变化,可以是值也可以是方法
             
        },
        methods:{
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            async listData(){
                const response = await
                fetch('/production/embeddinglist', {
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
                this.embeddingList = data;
                this.embeddingNum=this.embeddingList.length;
                for(let i=0;i<this.embeddingList.length;i++){
                    this.blockNum+=this.embeddingList[i].materialQuantity;
                }                
            },
            async loadData(){
                const response = await
                fetch('/production/load', {
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
            embeddingcheck:function(e){
                var checkid=$(e.target).attr("id");
                if($("#"+checkid).hasClass('selectbox')){
                $("#"+checkid).removeClass("selectbox").addClass("noselectbox");
                }else{
                $("#"+checkid).addClass("selectbox").removeClass("noselectbox");
                    }
            },
            embeddingcheckall:function(){
                if($('.embeddingcheckall').hasClass('selectbox')){
                    $(".embeddingcheckall").removeClass("selectbox").addClass("noselectbox");
                    $(".checkone").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".embeddingcheckall").removeClass("noselectbox").addClass("selectbox");
                    $(".checkone").addClass("selectbox").removeClass("noselectbox");
                    }
            },
            embeddingStartDate:function(date){
                if (date != null) {
                let embeddingStartDate = new XDate(date);
                this.embeddingSearchData.scopeDateStart = embeddingStartDate.toString("yyyy-MM-dd");
                }
            },
            embeddingEndDate:function(date){
                if (date != null) {
                let embeddingEndDate = new XDate(date);
                this.embeddingSearchData.scopeDateEnd = embeddingEndDate.toString("yyyy-MM-dd");
                }
            },
            async embeddingSearch(){
                if($('.embeddingHours').is(':checked')){
                    this.embeddingSearchData.hours24=true
               }else{
                    this.embeddingSearchData.hours24=false
               }
                const response = await
                fetch('/production/queryembedding', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.embeddingSearchData)
                });
                console.log(JSON.stringify(this.embeddingSearchData))
                const json = await  response.text();
                const data = JSON.parse(json);
                this.embeddingList = data;
            },
            async embeddingDefaultSearch(){
                if($('.embeddingHours').is(':checked')){
                    this.embeddingSearchData.hours24=true
               }else{
                    this.embeddingSearchData.hours24=false
               }
                const response = await
                fetch('/production/queryembedding', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.defaultSearchData)
                });
                const json = await response.text();
                const data = JSON.parse(json);
                this.embeddingList = data;
                console.log(JSON.stringify(this.embeddingSearchData));
                },
            selectionChange:function(val){
//                console.log(val[0].materialDetailId)
                for (let i = 0; i < this.embeddingList.length; i++) {
                    let item = this.embeddingList[i];
                    item.isSelected = false;
                }
                for (let i = 0; i < val.length; i++) {
                  let newItem=val[i];
                  newItem.isSelected=true;
                }
            },
            async blockCheck(){
                var newItems = [];
                for (let i = 0; i < this.embeddingList.length; i++) {
                    let item = this.embeddingList[i];
                    if (!item.isSelected==false) {
                        newItems.push(item)
                    }
                  } 
                  // console.log(newItems.length)
                  // console.log(JSON.stringify(newItems))
                  this.embeddingCheckData.idList=[]
                  for(let i=0;i<newItems.length;i++){
                    this.embeddingCheckData.idList.push(newItems[i].materialDetailId)
                  }
                   console.log(JSON.stringify(this.embeddingCheckData.idList))
                   const response = await
                    fetch('/production/materialchecke', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.embeddingCheckData)
                });
                    console.log(JSON.stringify(this.embeddingCheckData))
//                    const json = await
//                    response.text();
//                    const data = JSON.parse(json);
//                    this.embeddingList = data;
                },
            async embeddingConfirm(){
                    var newItems = [];
                for (let i = 0; i < this.embeddingList.length; i++) {
                    let item = this.embeddingList[i];
                    if (!item.isSelected==false) {
                        newItems.push(item)
                    }
                  } 
                  this.embeddingConfirmData.idList=[]
                  for(let i=0;i<newItems.length;i++){
                    this.embeddingConfirmData.idList.push(newItems[i].materialDetailId)
                  }
                   const response = await
                    fetch('/production/embeddingsure', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(this.embeddingConfirmData)
                });
                    console.log(JSON.stringify(this.embeddingConfirmData))
                    const json = await
                    response.text();
                    const data = JSON.parse(json);
                    //this.embeddingList = data;
                }
            }
    };
</script>