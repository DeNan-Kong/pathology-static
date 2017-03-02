<template>
    <div>
        <div class="embedding-contains">
            <div class="embedding-top">
               <p class="floatleft embedding-bingnum">病理号:</p>
               <input type="text" class="floatleft radius common embedding-six" maxlength="20">
               <p class="floatleft embedding-five">取材医生:</p>
               <form  class="floatleft embedding-six textleft">
                    <select class="radius common">
                        <option v-for="item in initialData.sampleDoctorList" :value="item.sampleDoctorId">{{item.name}}</option>
                   </select>
                </form>
                    <input type="radio" checked name="time" class="floatleft radio " >
                    <p class="floatleft embedding-four radioleft">24小时</p>
                    <input type="radio" name="time" class="floatleft radio ">
                    <p class="floatleft embedding-five radioleft">取材日期:</p>
                    <calendar/>
                    <input type="radio" name="time" class="floatleft radio">
                    <p class="floatleft embedding-five radioleft">时间范围:</p>
                    <calendar/>
                    <p class="floatleft embeddingzhi">至</p>
                    <calendar/>
                <a href="" class="floatleft embedding-four">脱钙(0)</a>
                <a href="" class="floatleft embedding-four">冰冻(0)</a>
                <form  class="floatleft embedding-five">
                    <select class="radius common">
                        <option v-for="item in initialData.printStatusList" :value="item.sampleDoctorId">{{item.name}}</option>
                    </select>
                </form>
                <form  class="floatleft embedding-five">
                    <select class="radius common">
                        <option v-for="item in initialData.productionStatusList" :value="item.sampleDoctorId">{{item.name}}</option>
                    </select>
                </form>
                <button class="floatleft embedding-three">查询</button>
                <button class="floatleft embedding-three">默认</button>
                <div>   
                </div> 
            </div>
            <div class="embedding-table" id="s">
                <embeddingtable :embeddingList="embeddingList" />
            </div>
            <div class="embedding-bottom">
                <p class="floatleft embedding-bottom-p">当前待包埋数：4</p>
                <p class="floatleft embedding-bottom-two embedding-bottom-p">材块数：4</p>
                <div class="floatleft embedding-bottom-div"><p class="floatleft">提前</p>
                    <input type="text" class="floatleft embedding-bottom-text" maxlength="2"><p class="floatleft">天确定</p></div>
                <button class="floatleft">材块核对</button>
                <button class="floatleft">标签打印</button>
                <button class="floatleft">包埋确认</button>
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
                embeddingList:[]
            }
        },
        components:{
           "calendar":Calendar,
           "embeddingtable":Embeddingtable
        },
        created(){ // 生命周期 created,获取数据
            this.fetchData();
            this.loadData();
            this.listData();
        },
        watch: {  // 观测变化,可以是值也可以是方法
             
        },
        methods:{
            async listData(){
                const self = this;
                const response = await
                fetch('/production/embeddinglist', {
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
                self.embeddingList = data;
                console.log(self.embeddingList)
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
            fetchData:function(){
                var items=null;
                var xhr = new XMLHttpRequest()
                var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
                xhr.open('POST', this.apiURL)
                xhr.onload = function () {
                self.item = JSON.parse(xhr.responseText);
                }
                xhr.send()
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
            }
        }

    };
</script>