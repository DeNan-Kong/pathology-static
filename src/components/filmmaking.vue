<template>
    <div class="filmmaking-main">
        <div class="filmmaking-contains">
            <div class="filmmaking-top">
                <p class="floatleft top-p-one">病理号:</p>
                <input type="text"  class="floatleft top-ipt radius common"> 
                 <p class="floatleft top-p-three">任务来源:</p>
                 <form  class="floatleft top-form">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <input type="radio" checked name="filmmakingdate" class="floatleft filmmakingradio"><p class="floatleft top-p-two radioleft">24小时</p>
                <input type="radio" class="floatleft filmmakingradio" name="filmmakingdate">
                <p class="floatleft top-p-form radioleft">制片时间:</p>
                <calendar/>
                <input type="radio" class="floatleft filmmakingradio" name="filmmakingdate">
                <p class="floatleft top-p-form radioleft">时间范围:</p>
                <calendar/>
                <p class="floatleft top-p-six">至</p>
                <calendar/>
                 <form  class="floatleft top-p-four">
                    <select class="radius common ">
                      <option>未打印</option>
                      <option>已打印</option>
                    </select>
                </form>
                 <form  class="floatleft top-p-four">
                    <select class="radius common ">
                      <option>未核对</option>
                      <option>已核对</option>
                    </select>
                </form>
                <button class="floatleft top-btn" @click="shuju">查询</button>
            </div>
            <div class="filmmaking-table">
                <filmmakingtable/>
                <!-- <table class="table">
                    <thead>
                    <tr>
                        <th class="table-three "><p class="noselectbox tablecheck checkall" @click="checkall"></p></th>
                        <th  class="table-eight">病理号</th>
                        <th class="table-six">任务来源</th>
                        <th class="table-five">制片子号</th>
                        <th  class="table-five">制片说明</th>
                        <th  class="table-five">姓名</th>
                        <th  class="table-three">性别</th>
                        <th  class="table-three">年龄</th>
                        <th  class="table-five">申请人</th>
                        <th  class="table-three">收费情况</th>
                        <th  class="table-five">收费时间</th>
                        <th  class="table-five">制片人</th>
                        <th  class="table-seven">制片时间</th>
                        <th  class="table-five">制片状态</th>
                        <th  class="table-five">打印状态</th>
                        <th  class="table-five">玻片核对</th>
                        <th  class="table-seven">核对时间</th>
                        <th  class="table-three">切片评级</th>
                        <th  class="table-five">评级人</th>
                        <th  class="table-five">染色人</th>
                        <th  class="table-five">染色时间</th>
                        <th  class="table-five">取材医生</th>
                        <th  class="table-five">包埋人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas">
                        <td><p  class='noselectbox tablecheck checkall first'></p></td>
                        <td>{{data.patient.patientId}}</td>
                        <td>{{data.patient.task}}</td>
                        <td>{{data.patient.cainum}}</td>
                        <td>{{data.patient.cainum}}</td>
                        <td>{{data.patient.name}}</td>
                        <td>{{data.patient.sex}}</td>
                        <td>{{data.patient.age}}</td>
                        <td>{{data.patient.name}}</td>
                        <td>{{data.patient.position}}</td>
                        <td>{{data.patient.kuainum}}</td>
                        <td>{{data.patient.doctor}}</td>
                        <td>{{data.patient.date}}</td>
                        <td>{{data.patient.check}}</td>
                        <td>{{data.patient.statu}}</td>
                        <td>{{data.patient.zhistatus}}</td>
                        <td>{{data.patient.checktime}}</td>
                        <td>{{data.patient.date}}</td>
                        <td>{{data.patient.check}}</td>
                        <td>{{data.patient.statu}}</td>
                        <td>{{data.patient.zhistatus}}</td>
                        <td>{{data.patient.checktime}}</td>
                        <td>{{data.patient.name}}</td>
                    </tr>
                </tbody>
                </table> -->
            </div>
            <div class="filmmaking-adddelete">
                <p class="floatleft top-p-seven">任务来源:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-four">制片时间:</p>
                <calendar/>
                <p class="floatleft top-p-three">制片人:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-seven">制片说明:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-two">序号:</p> 
                <form  class="floatleft top-p-four">
                    <select class="radius">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form> 
               <p class="floatleft top-p-one">病理号:</p>
               <input type="text"  class="floatleft top-ipt radius common">
                <button class="floatleft add-btn ">添加</button>
                <button class="floatleft delete-btn">删除</button>
            </div>
            <div class="clear"></div>
            <div class="filmmaking-bottom">
                <p class="floatleft">当前制片数：4</p>
                <button class="floatleft filmmaking-bottom-btn">标签打印</button>
                <button class="floatleft filmmaking-bottom-btn">HE染色</button>
                <button class="floatleft filmmaking-bottom-btn">玻片核对</button>
                <button class="floatleft filmmaking-bottom-btnlong filmmaking-bottom-btn">移交表单打印</button>
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
}
.top-p-four{
    width: 5.5%;
    text-align: center;
} 
.top-p-five{
    width: 8%;
}
.top-p-seven{
    width:7%;
}
.top-btn{
    width:4%;
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
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.add-btn,.delete-btn{
    width:4%;
    height: 24px;
    background:#428bca; 
    margin-top: 8px;
    border-radius: 3px;
    color:#fff;
    margin-left: 2%;
    line-height: normal;
}
.filmmaking-bottom{
    height: 40px;
}
.filmmaking-bottom-btn{
    width: 5%;
    height: 32px;
    background:#428bca; 
    margin-top: 3px;
    border-radius: 3px;
    color:#fff;
    margin-left: 2%;
    line-height: normal;
}
.filmmaking-bottom p{
    display: block;
    margin-left: 47%;
    line-height: 40px;
}
.filmmaking-bottom-btnlong{
    width: 7%;
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
import $ from "jQuery"
    export default{
        data(){
            return{
               
            }
        },
        props: ['datas'],
        components:{
           "calendar":Calendar,
           "filmmakingtable":Filmmakingtable
        },
        created(){ // 生命周期 created,获取数据
          this.filmmaking()
        },
        methods:{
            checkall:function(){
                if($(".checkall").hasClass("selectbox")){
                    $(".checkall").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".checkall").removeClass("noselectbox").addClass("selectbox"); 
                    }   
            },
            shuju:function(){
                var _self = this;
                $.ajax({
                            type: 'POST',
                            url: '/api/hello',
                            data:{
                                id:0
                            },
                            success:function(data) {
                                var len=data.length;
                                console.log(data)
                               var obj=JSON.parse(data);
                                _self.list=obj.slice(0,len-1)
                                console.log( _self.list)
                            }
                        });
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
        }
    }
</script>