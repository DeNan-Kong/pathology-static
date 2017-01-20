 <template>
<div>
   <div class="embedding-contains">
      <div class="section-top">
         <p class="floatleft embedding-four">病理号:</p>
         <input type="text"  class="floatleft radius common embedding-six">
          
              <input type="radio" checked name="time" class="floatleft radio"><p class="floatleft section-three section-top-p">24小时</p>
              <input type="radio" name="time" class="floatleft radio"><p class="floatleft section-four">取材日期:</p>
              <calendar/>
              <input type="radio" name="time" class="floatleft radio"><p class="floatleft section-four">时间范围:</p>
              <calendar/>
              <p class="floatleft  zzz">至</p>
              <calendar/>
              <button class="floatleft section-top-btn">查询</button>
      </div>
      <div class="section-table">
        <table class="table">
           <thead>
              <tr>
                  <th class="table-three"><p class="bmobboximg tablecheck checkall" @click="checkall"></p></th>
                  <th  class="table-eight">病理号</th>
                  <th class="table-six">任务来源</th>
                  <th class="table-six">材块号</th>
                  <th  class="table-five">姓名</th>
                  <th  class="table-three">性别</th>
                  <th  class="table-three">年龄</th>
                  <th  class="table-five">包埋操作员</th>
                  <th  class="table-five">包埋日期</th>
                  <th  class="table-seven">切片数</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
        </table>    
        </div>
        <div class="section-bottom">
          <p class="floatleft section-bottom-one">当前待切片数:(12)</p>
          <p class="floatleft ection-bottom-two">当前</p><input type="text" class="floatleft"><p class="floatleft">天确定</p>
          <button class="floatleft ection-bottom-btn">切片确认</button>
        </div>
      </div>
   </div>
</div>
</template>
<style>
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
.section-four{
  width: 4.5%;
  text-align: center;
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
  export default {
    data() {
      return {
        
      }
    },
    components:{
            "calendar":Calendar,
        },
  };
</script>