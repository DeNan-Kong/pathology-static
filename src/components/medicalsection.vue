 <template>
<div>
   <div class="embedding-contains">
      <div class="section-top">
         <p class="floatleft embedding-four">病理号:</p>
         <input type="text"  class="floatleft radius common embedding-six">
          <form class="section-fourseven floatleft">
              <p class="floatleft section-top-p"><input type="radio" checked name="time" class="floatleft radio">24小时</p>
              <input type="radio" name="time" class="floatleft radio section-four"><p class="floatleft">取材日期:</p>
              <calendar/>
              <input type="radio" name="time" class="floatleft radio section-three"><p class="floatleft">时间范围:</p>
              <calendar/>
              <p class="floatleft  zzz">至</p>
              <calendar/>
          </form>
           <button class="floatleft section-top-btn">查询</button>
      </div>
   </div>
</div>
</template>
<style>
.section-top{
  width: 100%;
  height: 36px;
  line-height: 36px;
}
.section-fourseven{
  width:56%;
  margin-left: 20px;
}
.section-top .radio{
  margin-top: 12px;
  margin-right: 3px;
}
.section-top-p{
  margin-right: 20px;
}
.section-top-btn{
   width: 4%;
    height:24px;
    background: #428bca;
    border-radius: 3px;
    margin-left:3px;
    margin-top: 7px;
    line-height: 24px;
    color:#fff;
}
.zzz{
  margin-right: 20px;
  margin-left: 20px;
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