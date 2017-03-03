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
                <filmmakingtable :productionList="productionList" />
            </div>
            <div class="filmmaking-adddelete">
                <p class="floatleft top-p-seven textright">任务来源:</p>
               <form  class="floatleft top-p-four">
                    <select class="radius common ">
                        <option v-for="item in initialData.taskSourceList" :value="item.id"> {{item.name}}</option>                     
                    </select>
                </form>
                <p class="floatleft top-p-four  textright">制片时间:</p>
                <calendar/>
                <p class="floatleft top-p-three textright">制片人:</p>
                <form  class="floatleft top-p-four">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-four  textright">制片说明:</p>
                <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-three  textright">序号:</p> 
                <form  class="floatleft top-p-four">
                    <select class="radius">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form> 
               <p class="floatleft top-p-three textright">病理号:</p>
               <input type="text"  class="floatleft top-ipt radius common">
                <button class="floatright add-btn ">添加</button>
                <button class="floatright delete-btn">删除</button>
            </div>
            <div class="clear"></div>
            <div class="filmmaking-bottom">
                <button class="floatright filmmaking-bottom-btnlong filmmaking-bottom-btn">移交表单打印</button>
                <button class="floatright filmmaking-bottom-btn">玻片核对</button>
                <button class="floatright filmmaking-bottom-btn">HE染色</button>
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
    margin: 10 auto;
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
                    patientNo: "",
                    taskSourceId: 1,
                    hours24: true,
                    scopeDateStart:null,
                    scopeDateEnd:null,
                    printStatus: 1,
                    productionStatus:1 
                }
            }
        },
        props: [],
        components:{
           "calendar":Calendar,
           "filmmakingtable":Filmmakingtable
        },
        created(){ // 生命周期 created,获取数据
            this.filmmaking();
            this.loadData();
            this.listData();
        },
        methods:{
            async listData(){
                const self = this;
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
                self.productionList = data;
            },
            async loadData(){
                const self = this;
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
                self.initialData = data;
            },
            checkall:function(){
                if($(".checkall").hasClass("selectbox")){
                    $(".checkall").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".checkall").removeClass("noselectbox").addClass("selectbox"); 
                    }   
            },
            filmmaking:function(){
                var xhr = new XMLHttpRequest()
                var self = this 
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                self.datas=JSON.parse(xhr.responseText);
              }
              xhr.send()
            },
            async filmmakingSearch(){
                if($('.filmmakingHours').is(':checked')){
                    this.filmmakingSearchData.hours24=true
               }else{
                    this.filmmakingSearchData.hours24=false
               }
                const response = await
                fetch('/production/sectionlist', {
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
        }
    }
</script>