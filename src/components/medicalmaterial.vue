 <template>
  <div  class="material-main">
  <div class="material-content">
    <div class="material-top">
        <form  class="material-select-one floatleft material-margin">
            <select class="radius common">
              <option>常规</option>
              <option>大体</option>
              <option>组织</option>
              <option>冰冻</option>
            </select>
        </form>
        <input type="text"  class="material-top-input floatleft  radius common"> 
         <form  class="material-top-two floatleft ">
            <select class="radius common">
              <option>条目一</option>
              <option>条目二</option>
            </select>
        </form>
        <input type="text"  class="material-top-ipttwo floatleft  radius common">
        <form  class="material-top-three floatleft ">
            <select class="threeradius common">
              <option>块</option>
              <option>个</option>
            </select>
        </form> 
        <form  class="material-top-four floatleft ">
            <select class="radius common">
              <option>李医生</option>
              <option>王医生</option>
            </select>
        </form>
        <div class="material-top-date">
          <calendar/>
        </div>
        <button class="material-top-add radius  material-top-btn">添加</button>
        <button class="material-top-del radius  material-top-btn">删除</button>
    </div>
    <div class="material-middle">
      <table class="table">
          <thead>
            <tr>
                <th>任务来源</th>
                <th>材块号</th>
                <th>取材部位</th>
                <th>材块数</th>
                <th>单位</th>
                <th>取材医生</th>
                <th  class="th-three">取材日期</th>
                <th  class="th-three">制片状态</th>
                <th  class="th-three">材块核对</th>
                <th  class="th-three">包埋</th>
                <th  class="th-three">临床诊断</th>
                <th  class="th-three">诊断意见</th>
                <th  class="th-three">主诊医生</th>
                <th  class="th-three">送检日期</th>
                <th  class="th-three">报告日期</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
     </table>
    </div>
    <div class="material-information">
      <div class="informationone">
        <p class="floatleft information-la">蜡块总数：666</p><p class="floatleft information-cai">材块总数：777</p>
        <p class="floatleft information-biao">标本处理：</p>
        <form  class="floatleft  ">
            <select class="radius  information-sel-one  information-sel">
              <option>块</option>
              <option>个</option>
            </select>
        </form> 
        <p class="floatleft">存放位置：</p>
        <form  class="floatleft">
            <select class="radius  information-sel information-sel-two">
              <option>一区</option>
              <option>二区</option>
            </select>
        </form> 
        <p class="floatleft">记录人：</p>
        <form  class="floatleft">
            <select class="radius  information-sel">
              <option>李伟</option>
              <option>刘丽</option>
            </select>
        </form> 
      </div>
      <div class="clear"></div>
      <div class="informationtwo">
        <p class="floatleft informationtwo-p">肉眼所见：</p>
        <form  class="floatleft ">
            <select class="radius  informationtwo-sel informationtwo-sel-one">
              <option>字体大小</option>
              <option>个</option>
            </select>
        </form>
        <button class="informationtwo-button">B</button>
        <p class="floatleft chooseinput">选择通道：</p>
        <form  class="floatleft  ">
            <select class="radius informationtwo-sel-two informationtwo-sel">
              <option>通道一</option>
              <option>通道二</option>
            </select>
        </form>
        <button class=" radius  informationtwo-btn">标签打印</button>
        <textarea></textarea>
      </div>
      
    </div>
    <div  class="mydictionary dictionary  dictionary-active">
      <p>我的词典</p>
    </div>
    <div  class="commondictionary  dictionary">
      常用词典
    </div>
    <div  class="checkdictionary  dictionary">
      检查模板
    </div>
    <div  class="material-middle-right">
        <div   class="dictionary-input">
          <img src="../assets/images/search.png.png"  class="floatleft">
          <input type="text"  class="floatleft  dictionary-text">
          <div class="material-add  floatleft"> </div> 
          <div class="material-modify  floatleft"></div>
          <div class="material-delete  floatleft"></div>
        </div>
        <div class="dictionary-search">
          <ul>
            <li>肿物通用
            <p class="menus-img"><p>
            </li>
            <li>通用2
              <p class="menus-img"><p>
            </li>
            <li>肠
              <p class="menus-img"><p>
            </li>
            <li>乳腺
              <p class="menus-img"><p>
            </li>
            <li>肺组织
                <p class="menus-img"><p>
            </li>
            <li>胃
              <p class="menus-img"><p>
            </li>
            <li>全组织+双附件
              <p class="menus-img"><p>
            </li>
            <li>脾脏
              <p class="menus-img"><p>
            </li>
            <li>肾标本
              <p class="menus-img"><p>
            </li>
            <li>肝组织
              <p class="menus-img"><p>
            </li>
            <li>食道
              <p class="menus-img"><p>
            </li>
            <li>胰腺
              <p class="menus-img"><p>
            </li>
            <li>胰腺及脾
              <p class="menus-img"><p>
            </li>
            <li>胰腺
              <p class="menus-img"><p>
            </li>
            <li>胰腺及脾
              <p class="menus-img"><p>
            </li>
          </ul>
        </div>
    </div>
  </div>
  <div  class="material-bottom">
        <div  class="material-button">
                <button  class="left-button-two  material-button-one"  v-on:click="refund" >补取医嘱</button>
                <button  class="left-button-two"  v-on:click="print">检查模板</button> 
                <button  class="left-button-two" v-on:click="save">冰冻切块</button>
                <button  class="left-button-five" v-on:click="newsave">材料核对</button>
                <button  class="left-button-two" v-on:click="newproject">暂存</button>
                <button  class="left-button-five" v-on:click="newsave">打印</button>
                <button  class="left-button-two" v-on:click="newproject">保存</button>    
        </div>
        <div class="material-image">
            <div  class="picture-img" v-on:click="newproject"></div> 
            <div  class="refresh-img"></div>        
        </div>
    </div>
  </div>
</template>
<style>

.menus-img{
   background: url('../assets/images/materials.png')  -10px -20px no-repeat;
   width:10px;
   height: 10px;
   margin-right: 5px;
   margin-top: -16px;
}
.dictionary-search ul li{
  margin-left: -30px;
  height: 30px;
  list-style: none;
  cursor: pointer;
}
.dictionary-search  p{
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 220px;
}
.dictionary-text{
  width:140px;
  margin-top: 2px;
  border: none;
}
.material-modify{
  background: url('../assets/images/material.png')  -40px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-right: 2px;
  margin-top: -23px;
}
.material-modify:hover{
  background: url('../assets/images/material.png')  -40px -40px no-repeat;
}
.material-delete{
  background: url('../assets/images/material.png')  -72px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-right: 2px;
  margin-top: -23px;
}
.material-delete:hover{
  background: url('../assets/images/material.png')  -72px -40px no-repeat;
}
.material-add{
  background: url('../assets/images/material.png')  -8px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-left: 164px;
  margin-right: 2px;
  margin-top: -23px;
}
.material-middle-right img{
  margin-top: 6px;
  margin-left: 10px;
}
.dictionary-input{
  width: 248px;
  height: 30px;
  border-bottom: 1px solid #ccc;
  border:none;
  background: #fff;
}
.checkdictionary{
  right: 260px;
  top:140px;
  border-bottom-left-radius: 3px;
}
.commondictionary{
  right: 260px;
  top:70px;
}
.mydictionary{ 
  right: 260px;
  top:0px;
  border-top-left-radius: 3px; 
}
.dictionary{
  position: absolute;
  width: 18px;
  height: 68px;
  background: #edf5f9;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
}
.dictionary-active{
  background: #c6e4ee;
}
.material-middle-right{
  width: 250px;
  height: 535px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  position: absolute;
  right: 10px;
  top:0px;
}
.material-main{
  width: 1052px;
  position: relative;
}
.material-image .picture-img:hover{
    background: url('../assets/images/register.png')  -32px -35px no-repeat;
    width:26px;
    height:26px;
    cursor:pointer;
}
.material-image .refresh-img:hover{
    background: url('../assets/images/register.png')  -68px -35px no-repeat;
    width:26px;
    height:26px;
}
.refresh-img{
    background: url('../assets/images/picture.png.png') no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float:left;
    margin-left: 20px;
}
.material-image .picture-img{
    background: url('../assets/images/refresh.png.png') no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float: left;
}
.material-image{
  margin-top: -41px;
  margin-left: 34px;
}
.material-bottom{
  width: 1052px;
}
.material-button-one{
  margin-left: 470px;
}
.material-button{
  margin-top: 510px;
}
.material-button button{
  height: 34px;
  background: #428bca;
  color:#fff;
  border-radius: 3px;
}
.material-content{
    width: 730px;
    height: 68px;
    margin-top: 10px;
    margin-left: 14px;
    color:#333333;
}
.material-top{
  height: 42px;
  border-top: 1px solid #5cbdde;
}
.radius{
  border-radius:3px;
}
.common{
  border:1px solid #ccc;
  margin-top: 8px;
  height: 24px;
}
.material-select-one{ 
  width: 54px; 
}
.material-top-input{
  width: 40px; 
  margin-left: 22px;  
}
.material-top-two{
  margin-left: 22px;
  width: 68px;
}
.material-margin{
  margin-left: 16px;
}
.material-top-ipttwo{
  margin-left: 25px;
  width: 44px;
  border:1px solid #ccc;
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.material-top-three{
  width: 35px;
}
.threeradius{
  margin-left:-1px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.material-top-four{
  margin-left: 18px;
  width:65px;
  margin-right: 10px;
}
.material-top-date{
  margin-top: 8px;
}
.material-top-btn{
  width:54px;
  height: 26px;
  background: #428bca;
  color:#fff;
}
.material-top-add{
  margin-left: 16px;
}
.material-top-del{
  margin-left: 16px;
}
.material-middle{
  width: 714px;
  height: 272px;
  margin-top: 10px;
  margin-left: 14px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc; 
  overflow:scroll;
  color:#333333;
}
.material-information{
  margin-top: 10px;
  width: 730px;
  height: 190px;
}
.material-information p{
  display: block;
  line-height: 28px;
}
.information-la{
  margin-left: 16px;
  margin-right: 18px;
}
.information-cai{
  margin-right: 18px;
}
.informationtwo-button{
  width:22px;
  height: 22px;
  background: #428bca;
  border-radius: 3px;
  margin-left: 6px;
  margin-top: 3px;
  color:#fff;
  float: left;
}
.information-sel{
  width:82px;
  height:24px;
  margin-top: 2px;
}
.information-sel-one,.information-sel-two{
    margin-right: 23px;
}
.informationtwo-p{
  display: block;
  margin-left: 16px;
}
.informationtwo-sel{
  width: 82px;
  height: 24px;
  margin-top: 2px;
}
.chooseinput{
  display: block;  
  height: 24px;
  margin-left: 298px;
}
.informationtwo-btn{
  width: 82px;
  height: 24px;
  background: #428bca;
  border-radius: 3px;
  margin-top: 2px;
  margin-left: 2px;
  color:#fff;
}
textarea{
  width: 730px;
  height: 125px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
<script>
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
  export default {
    data() {
      return {
        
        value1: ''
      };
    },
     components:{
           "calendar":Calendar,
           "medicalmessage":Medicalmessage, 
        },
        methods:{
        }
  };
</script>