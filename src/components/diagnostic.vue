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
      <div class="diagnostic-message-text">
        <p>肉眼检查</p>
        <textarea></textarea>
        <p>镜下所见</p>
        <textarea></textarea>
        <p>病理诊断</p>
        <textarea></textarea>
      </div>
  </div>
  <div class="diagnostic-right">
    <div class="diagnostic-right-top">
      <div  class="mydictionary2 dictionary  dictionary-active">
        <p>我的词典</p>
      </div>
      <div  class="commondictionary2  dictionary">
        常用词典
      </div>
      <div  class="checkdictionary2  dictionary">
        检查模板
      </div>
      <div  class="diagnostic-right-search">
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
            </ul>
          </div>
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
  height: 680px;
  border:2px solid #eceef2;
  margin-left: 4px;
  margin-top: 12px;
  padding: 18px;
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
.diagnostic-right-top{
  width: 315px;
  height: 610px;
}
.diagnostic-right-search{
  width: 250px;
  height: 535px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  position: absolute;
  right: 10px;
  top:0px;
}

</style>
<script>
  export default {
    data() {
      return {
       
       
      };
    }
  };
</script>