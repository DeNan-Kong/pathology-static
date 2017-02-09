<template>
<div>
   <div class="embedding-contains">
      <div class="section-top advice-top">
          <form  class="floatleft advice-three textcenter">
              <select class="radiu common">
                <option>病理号</option>
                <option>住院号</option>
                <option>门诊号</option>
                <option>冰冻号</option>
                <option>姓名</option>
                <option>申请号</option>
                <option>病人ID</option>
              </select>
          </form>
          <input type="text"  class="floatleft radius common embedding-six" style="padding-left:3px;">
          <input type="radio" checked name="time" class="floatleft radio"><p class="floatleft advice-three  textcenter">24小时</p>
          <input type="radio" name="time" class="floatleft radio "><p class="floatleft advice-four textcenter">申请日期:</p>
          <calendar/>
          <input type="radio" name="time" class="floatleft radio "><p class="floatleft advice-four textcenter">时间范围:</p>
          <calendar/>
          <p class="floatleft embeddingzhi textcenter">至</p>
          <calendar/>
          <p class="floatleft advice-five textcenter">医嘱类型：</p>
          <form  class="floatleft advice-form">
              <select class="radius common ">
                <option>免疫组化</option>
                <option>已执行</option>
              </select>
          </form>
          <p class="floatleft advice-five textcenter">医嘱状态：</p>
          <form  class="floatleft embedding-five">
              <select class="radius common ">
                <option>未执行</option>
                <option>已执行</option>
              </select>
          </form>
          <p class="floatleft advice-five textcenter">收费状态：</p>
          <form  class="floatleft embedding-five">
              <select class="radius common ">
                <option>已收费</option>
                <option>未收费</option>
              </select>
          </form>
          <button class="floatleft section-top-btn">查询</button>
          <button class="floatleft section-top-btn">默认</button>
          <!-- <p>{{nums}}</p> -->
      </div>
      <div class="section-table">
        <advicetable/>
        <!-- <table class="table">
           <thead>
              <tr>
                  <th class="table-three"><p class="noselectbox tablecheck checkall"></p></th>
                  <th  class="table-three">病理号</th>
                  <th  class="table-five">姓名</th>
                  <th class="table-six">医嘱类型</th>
                  <th class="table-six">住院号</th>
                  <th  class="table-five">门诊号</th>
                  <th  class="table-three">材块号</th>
                  <th  class="table-three">切片数</th>
                  <th  class="table-five">标记物</th>
                  <th  class="table-five">申请医生</th>
                  <th  class="table-seven">申请日期</th>
                  <th  class="table-three">收费情况</th>
                  <th  class="table-three">收费时间</th>
                  <th  class="table-three">医嘱状态</th>
                  <th  class="table-five">执行人</th>
                  <th  class="table-five">执行时间</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="ss in nums">
                  <td><p  class='noselectbox tablecheck checkall first'></p></td>
                  <td>{{ss.patient.patientId}}</td>
                  <td>{{ss.patient.name}}</td>
                  <td>{{ss.patient.cainum}}</td>
                  <td>{{ss.patient.cainum}}</td>
                  <td>{{ss.patient.sex}}</td>
                  <td>{{ss.patient.age}}</td>
                  <td>{{ss.patient.position}}</td>
                  <td>{{ss.patient.kuainum}}</td>
                  <td>{{ss.patient.doctor}}</td>
                  <td>{{ss.patient.date}}</td>
                  <td>{{ss.patient.check}}</td>
                  <td>{{ss.patient.statu}}</td>
                  <td>{{ss.patient.zhistatus}}</td>
                  <td>{{ss.patient.name}}</td>
                  <td>{{ss.patient.checktime}}</td>
              </tr>
          </tbody>
        </table>  -->   
        </div>
        <div class="section-bottom">
          <p class="floatleft section-bottom-one">当前医嘱数:12</p>
          <button class="floatleft ection-bottom-btn">收费确认</button>
          <button class="floatleft ection-bottom-btn">医嘱执行</button>
          <button class="floatleft ection-bottom-btn">工作单打印</button>
        </div>
      </div>
   </div>
</div>
</template>
<style>
body .advice-top .radio{
  margin-left: 10px;
}
.radiu{
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.embedding-contains button:hover{
  background: #3577af; 
}
.advice-threefive{
  width: 3.5%;
}
.advice-three{
  width:3.4%;
}
.advice-four{
  width:4.5%;
}
.advice-five{
  width: 5.25%;
}
.advice-form{
  width: 5.8%;
}
.section-top{
  width: 100%;
  height: 38px;
  line-height: 38px;
}
.section-top p{
  margin-left: 0px;
}
.advice-top .radio{
  margin-top: 12px;
  margin-left: 1px;
}
.advice-top .section-top-btn{
   width: 3%;
    height:24px;
    background: #428bca;
    border-radius: 3px;
    margin-left:3px;
    margin-top: 7px;
    line-height: 24px;
    color:#fff;
}
.embedding-fivefive{
  width: 5.5%;
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
  margin-left: 66%;
}
.section-bottom input{
  width:20px;
  height: 20px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 8px;
}
.ection-bottom-two{
  margin-left: 2%;
}
.ection-bottom-btn{
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
import Advicetable from 'components/advicetable';
  export default {
    data() {
      return {
        lists:null
      }
    },
    props: [],
    components:{
            "calendar":Calendar,
            "advicetable":Advicetable
        },
    created(){ // 生命周期 created,获取数据
        this.fetchAdviceData()
    },
   methods:{
      fetchAdviceData:function(){
        var send={'id':8,'name':'xiaoming'}
        var xhr = new XMLHttpRequest()
        var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
        xhr.open('POST', '/api/hello')
        xhr.onload = function () {
        self.nums=JSON.parse(xhr.responseText);
      }
      xhr.send(send)
    }
    }
  };
</script>