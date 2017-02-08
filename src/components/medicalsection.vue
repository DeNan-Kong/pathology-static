<template>
<div>
   <div class="embedding-contains">
      <div class="section-top">
          <p class="floatleft embedding-four textcenter">病理号:</p>
          <input type="text"  class="floatleft radius common embedding-six">
          <input type="radio" checked name="time" class="floatleft radio"><p class="floatleft section-three section-top-p textcenter">24小时</p>
          <input type="radio" name="time" class="floatleft radio"><p class="floatleft section-four textcenter">取材日期:</p>
          <calendar/>
          <input type="radio" name="time" class="floatleft radio"><p class="floatleft section-four textcenter">时间范围:</p>
          <calendar/>
          <p class="floatleft  zzz">至</p>
          <calendar/>
          <button class="floatleft section-top-btn">查询</button>
          
      </div>
      <div class="section-table">
        <sectiontable/>
        <!-- <table class="table">
           <thead>
              <tr>
                  <th class="table-three"><p class="noselectbox tablecheck checkall sectioncheckall" @click="sectioncheckall"></p></th>
                  <th  class="table-eight">病理号</th>
                  <th class="table-six">任务来源</th>
                  <th class="table-six">材块号</th>
                  <th  class="table-five">姓名</th>
                  <th  class="table-three">性别</th>
                  <th  class="table-three">年龄</th>
                  <th  class="table-five">包埋操作员</th>
                  <th  class="table-five">包埋日期</th>
                  <th  class="table-five">制片状态</th>
                  <th  class="table-seven">切片数</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="l in list">
                  <td><p  class='noselectbox tablecheck  first sectionone' @click="sectioncheck"></p></td>
                  <td>{{l.patient.patientId}}</td>
                  <td>{{l.patient.task}}</td>
                  <td>{{l.patient.cainum}}</td>
                  <td>{{l.patient.name}}</td>
                  <td>{{l.patient.sex}}</td>
                  <td>{{l.patient.age}}</td>
                  <td>{{l.patient.check}}</td>
                  <td>{{l.patient.date}}</td>
                  <td>{{l.patient.statu}}</td>
                  <td>{{l.patient.cainum}}</td>
              </tr>
            </tbody>
        </table>  -->   
        </div>
        <div class="section-bottom">
          <p class="floatleft section-bottom-one">当前待切片数:12</p>
          <p class="floatleft section-bottom-two">提前</p><input type="text" class="floatleft section-bottom-input"><p class="floatleft">天确定</p>
          <button class="floatleft section-bottom-btn">切片确认</button>
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
          lists:null
      }
    },
    props: ['list'],
    components:{
          "calendar":Calendar,
          "sectiontable":Sectiontable
    },
    created(){ // 生命周期 created,获取数据
        this.fetchSectionData()
    },
    methods:{
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
      
      
    }
  };
</script>