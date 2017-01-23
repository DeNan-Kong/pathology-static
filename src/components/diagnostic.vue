<template>
<div  class="index">
  <div class="diagnostic-top">
      <form  class="floatleft">
          <select class="floatleft diagnostic-top-one border">
              <option>诊断报告图一</option>
              <option>诊断报告图二</option>
              <option>诊断报告图三</option>
          </select>
      </form> 
      <form  class="floatleft">
          <select class="floatleft diagnostic-top-two border">
              <option>125%</option>
              <option>100%</option>
              <option>75%</option>
          </select>
      </form> 
      <form  class="floatleft">
          <select class="floatleft diagnostic-top-three border">
              <option>字体大小</option>
              <option>颜色</option>
              <option>纸张大小</option>
          </select>
      </form> 
      <p class="diagnostic-top-p  floatleft">缓发原因</p>
      <form  class="floatleft">
          <select class="floatleft diagnostic-top-four border">
              <option>免疫组化</option>
              <option>颜色</option>
              <option>纸张大小</option>
          </select>
      </form> 
  </div>
  <div class="diagnostic-middle">
     <div  class="diagnostic-middle-top">
       <p class="diagnostic-middle-font ">辽宁中医药大学附属医院</p>
       <p class="diagnostic-middle-font">病理检查报告单</p>
       <span class="diagnostic-middle-span">病检号：CC131224000</span>
     </div>
    <div class="diagnostic-message">
      <p  class="floatleft">姓名：</p><span class="floatleft  diagnostic-message-span">组织常规</span><p class="floatleft">性别：</p><span class="floatleft  diagnostic-message-span">女</span><p class="floatleft">年龄：</p><span class="floatleft  diagnostic-message-span">76</span><p class="floatleft">收到时间：</p><span class="floatleft  diagnostic-message-span">2016.09.07</span>
      <p class="floatleft">送检院别：</p><span class="floatleft  diagnostic-message-span2">本院</span><p class="floatleft">送检科室：</p><span class="floatleft  diagnostic-message-span2">外一科</span><p class="floatleft">送检医生：</p><span class="floatleft  diagnostic-message-span2">李医生</span><p class="floatleft">送检材料：</p><span class="floatleft  diagnostic-message-span2">宫颈刮片</span>
      <p class="floatleft">临床诊断：</p>
    </div>
    <div  class="diagnostic-message-picture">
      <p>附图</p>
    </div>
    <div class="diagnostic-message-text">
      <p>肉眼检查</p>
      <textarea></textarea>
      <p>镜下所见</p>
      <textarea></textarea>
      <p>病理诊断</p>
      <textarea></textarea>
    </div>
    <div  class="diagnostic-message-bottom">
      <div class="diagnostic-one floatleft">
        <p  class="floatleft">病&nbsp;理&nbsp;医&nbsp;生：</p><span  class="floatleft">李雄丽</span>
      </div>
        <p  class="floatleft diagnostic-two">诊&nbsp;断&nbsp;日&nbsp;期：</p><span  class="floatleft">2017.01.01</span>
      <div class="clear"></div>
      <div class="diagnostic-three" >
        <p  class="floatleft ">上&nbsp;级&nbsp;医&nbsp;师：</p><span  class="floatleft">李伟</span>
      </div>
      <div class="clear"></div>
      <div class="diagnostic-three">
        <p  class="floatleft"><strong>*此报告仅供临床参考，如有不符请及时联系！</strong></p>
      </div>
      <div class="clear"></div>
      <p  class="floatleft"><strong>*电话：024-86291312</stron</p>
    </div>
  </div>
  <div class="diagnostic-right">
    <div class="diagnostic-right-top">
      <div  class="mydictionary2 dictionary  dictionary-active" @click="mydictionary2">
        <p>我的词典</p>
      </div>
      <div  class="commondictionary2  dictionary"  @click="commondictionary2">
        <p>常用词典</p>
      </div>
      <div  class="checkdictionary2  dictionary" @click="checkdictionary2">
        <p>检查模板</p>
      </div>
      <div  class="diagnostic-right-search2">
          <div   class="dictionary-input2">
            <img src="../assets/images/search.png.png"  class="floatleft">
            <input type="text"  class="floatleft  dictionary-text">
            <div class="material-add2  floatleft"></div> 
            <div class="material-modify  floatleft"></div>
            <div class="material-delete  floatleft"></div>
          </div>
          <div class="dictionary-search2">
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
            </ul>
          </div>
      </div>
      <div  class="diagnostic-right-iptmesssage">
        <p  class="floatleft">初诊医生</p>
        <form  class="floatleft">
            <select class="radius  iptmesssage-size  iptmesssage-input">
              <option>李小龙</option>
              <option>胡夏</option>
            </select>
        </form>
        <p  class="floatleft  diagnostic-right-coltwo">复诊医生</p>
        <form  class="floatleft">
            <select class="radius  iptmesssage-size  iptmesssage-input">
              <option>黎明</option>
              <option>小燕子</option>
            </select>
        </form>
        <div class="clear"></div>
        <p  class="floatleft">审核医生</p>
        <form  class="floatleft">
            <select class="radius  iptmesssage-size  iptmesssage-input">
              <option>李小龙</option>
              <option>胡夏</option>
            </select>
        </form>
        <p  class="floatleft  diagnostic-right-coltwo">诊断符合</p>
        <form  class="floatleft ">
            <select class="radius  iptmesssage-size  iptmesssage-input">
              <option>符合</option>
              <option>不符合</option>
            </select>
        </form>
        <div class="clear"></div>
        <p  class="floatleft doctorshen">报告日期</p>
        <calendar/>
        <p  class="floatleft yang">是否阳性</p>
        <form  class="floatleft">
            <select class="radius  diagnostic-right-colone">
              <option>是</option>
              <option>否</option>
            </select>
        </form>
        <p  class="floatleft iptmesssage-p-long">诊断关键词</p>
        <form  class="floatleft">
            <select class="radius  iptmesssage-long iptmesssage-input">
              <option>是</option>
              <option>否</option>
            </select>
        </form>
        <div class="clear"></div>
        <p  class="floatleft iptmesssage-p-long">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注</p>
        <input type="text" class="radius  iptmesssage-long iptmesssage-input">
      </div>
      <div class="diagnostic-right-a">
        <a class="floatleft " href="#">取材信息</a>
        <a class="floatleft " href="#">切片信息</a>
        <a class="floatleft " href="#">技术医嘱</a>
        <a class="floatleft rightnone" href="#">特检医嘱</a>
        <a class="floatleft " href="#">诊断意见</a>
        <a class="floatleft " href="#">特检报告</a>
      </div>
      <div  class="diagnostic-right-bottom">
        <div class="checkpic-one checkpic floatleft"></div><div  class="checkpic-two checkpic floatleft"></div>
        <div class="checkpic-thr checkpic floatleft"></div><div  class="checkpic-four checkpic floatleft"></div>
        <div class="checkpic-five checkpic floatleft"></div><div  class="checkpic-six checkpic floatleft"></div>
        <div class="checkpic-sev checkpic floatleft"></div><div  class="checkpic-eig checkpic floatleft"></div>
      </div>
    </div>
  </div>
</div>
</template>
<style>
.index{
  position: relative;
}
.border{
  border: 1px solid #ccc;
  border-radius: 3px; 
  height: 28px;
}
.diagnostic-top{
  width:439px;
  height: 30px;
  float: left;
  margin-left: 264px;
  margin-top: -30px;
}
.diagnostic-top-one{
  width:110px;  
  margin-left: 5px;   
}
.diagnostic-top-two{
  width:66px;
  margin-left: 12px;
}
.diagnostic-top-three{
  width:80px;
  margin-left: 12px;
}
.diagnostic-top-p{
  display: block;
  width: 58px;
  margin-left: 12px;
  margin-top: 5px;
  margin-right: 2px;
}
.diagnostic-top-four{
  width: 80px;
  margin-left: 2px;
}
.diagnostic-middle{
  width:700px;
  height: 630px;
  border:2px solid #eceef2;
  margin-left: 4px;
  margin-top: 12px;
  padding: 18px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.diagnostic-message-bottom p,.diagnostic-message-bottom span{
  display: block;
}
.diagnostic-one{
  width:490px;
  height: 30px;
}
.diagnostic-right-search2 img{
  margin-top: 7px;
  margin-left: 3px;
}
.diagnostic-message-bottom{
  width:660px;
  height: 180px;
}
.diagnostic-middle-top{
  width: 664px;
  height: 125px;
  border-bottom: 1px solid #000;  
  line-height: 50px;
}
.diagnostic-message{
  width: 664px;
  height: 118px;
  padding-top: 16px;
  border-bottom: 1px solid #000; 
  padding-left: 6px;
   font-family: "黑体"; 
}
.diagnostic-middle-font{
  font-size: 24px;
  height: 50px;
  font-family: "黑体";
  margin-top: -10px;
  margin-right: 10px;
  text-align: center;
}
.diagnostic-middle-span{
  display: block;
  font-size:18px; 
  font-family: "宋体";
  margin-left: 480px;
  margin-top: -24px;
}
.diagnostic-message-span{
  display: block;
  width: 112px;
  height: 32px;
   font-family: "宋体";
}
.diagnostic-three{
  width:600px;
  height: 44px;
  line-height: 44px;
}
.diagnostic-message-span2{
  display: block;
  width: 84px;
  height: 32px;
   font-family: "宋体";
}
.diagnostic-message-text  textarea{
  width: 660px;
  height: 86px;
}
.diagnostic-right{
  width: 315px;
  height: 610px;
  margin-left: 728px;
  margin-top: -710px;
}
.diagnostic-message-picture{
  width:660px;
  height: 180px;
  border-bottom: 2px solid #000;
  margin-bottom: 10px;
}
.diagnostic-right-top{
  width: 315px;
  height: 610px;
}
.diagnostic-right-search2{
  width: 300px;
  height: 318px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  position: absolute;
  right: 10px;
  top:-30px;
}
.dictionary-input2{
  width: 298px;
  height: 30px;
  border-bottom: 1px solid #ccc;
  border:none;
  background: #fff;
}
.material-add2{
  background: url('../assets/images/material.png')  -6px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-left: 213px;
  margin-right: 2px;
  margin-top: -23px;
}
.material-add2:hover{
  background: url('../assets/images/material.png')  -6px -40px no-repeat;
  cursor:pointer;
  }
.dictionary-search2 ul li{
  margin-left: -30px;
  height: 30px;
  list-style: none;
  cursor: pointer;
}
.dictionary-search2 ul li:first-child{
  margin-top: 10px;
}
.dictionary-search2  p{
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 260px;
}
.mydictionary2{ 
  right: 310px;
  top:-30px;
  border-top-left-radius: 3px; 
}
.checkdictionary2{
  right: 310px;
  top:106px;
  border-bottom-left-radius: 3px;
}
.checkdictionary2:hover,.commondictionary2:hover,.mydictionary2:hover{
  background: #c6e4ee; 
  cursor: pointer;
}
.commondictionary2{
  right: 310px;
  top:38px;
}
.diagnostic-right-iptmesssage{
  margin-top: 10px;
  width:324px;
  height: 180px;
  margin-top: 380px;
  margin-left: -10px;
}
.diagnostic-right-iptmesssage p{
  display: block;
  width: 65px;
  line-height: 24px;
}
.diagnostic-right-coltwo{
  margin-left: 36px;
}
.iptmesssage-size{
  width: 78px;
  height: 24px;
}
.diagnostic-right-colone{
  width: 40px;
}
.diagnostic-right-iptmesssage .p-margin{
  margin-left: 0px;
}
.yang{
  margin-left: -3px;
}
.iptmesssage-long{
  width: 242px;
  height: 24px;
  margin-left: 10px;
}
body .iptmesssage-p-long{
  width: 70px;
}
.iptmesssage-input{
  border: 1px solid #ccc;
}
.diagnostic-right-a{
  width:310px;
  height: 66px;
}
.diagnostic-right-a a{
  display: block;
  width: 80px;
  height: 32px;
  text-decoration: underline;
  color: #2eacd5;
}
.diagnostic-right-a .rightnone{
  width: 77px;
}
.diagnostic-right-bottom{
  width:310px;
  height: 50px;
}
.checkpic{
  width:30px;
  height: 30px;
  margin-right:2px; 
}
.checkpic-one{
  background: url('../assets/images/check.png')  -4px -4px no-repeat;
  margin-right: 7px;
}
.checkpic-one:hover{
  background: url('../assets/images/check.png')  -4px -40px no-repeat;
  margin-right: 7px;
  margin-top: 3px;
}
.checkpic-two{
  background: url('../assets/images/check.png')  -40px -4px no-repeat;
}
.checkpic-two:hover{
  background: url('../assets/images/check.png')  -40px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-thr{
  background: url('../assets/images/check.png')  -70px -4px no-repeat;
}
.checkpic-thr:hover{
  background: url('../assets/images/check.png')  -70px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-four{
  background: url('../assets/images/check.png')  -104px -4px no-repeat;
}
.checkpic-four:hover{
  background: url('../assets/images/check.png')  -104px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-five{
  background: url('../assets/images/check.png')  -136px -4px no-repeat;
}
.checkpic-five:hover{
  background: url('../assets/images/check.png')  -136px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-six{
  background: url('../assets/images/check.png')  -168px -4px no-repeat;
}
.checkpic-six:hover{
  background: url('../assets/images/check.png')  -168px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-sev{
  background: url('../assets/images/check.png')  -200px -4px no-repeat;
}
.checkpic-sev:hover{
  background: url('../assets/images/check.png')  -200px -40px no-repeat;
  margin-top: 3px;
}
.checkpic-eig{
  background: url('../assets/images/check.png')  -232px -4px no-repeat;
}
.checkpic-eig:hover{
  background: url('../assets/images/check.png')  -232px -40px no-repeat;
  margin-top: 3px;
}
</style>
<script>
import Calendar from 'components/calendar';
  export default {
    data() {
      return {
       
       
      }
    },
    components:{
            "calendar":Calendar,
        },
    methods:{
      mydictionary2:function(){

      }
    }
  };
</script>