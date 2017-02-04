<template>
    <div>
        <div class="cytology-content">
            <div class="cytology-bodyleft">
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">标本满意度:</p>
                  <input type="radio" class="floatleft cytology-col-one cytology-col-radio" name="satisfaction">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;满意</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="satisfaction">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;基本满意</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="satisfaction">
                  <p class="floatleft cytology-nosatisfaction">&nbsp;&nbsp;不满意</p>
                  <form class="floatleft cytology-form">
                      <select class="cytology-form">
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                  </form>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">细胞量:</p>
                  <input type="radio" class="floatleft cytology-col-one cytology-col-radio" name="satisfaction">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;>2000</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="cellnum">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;<2000</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="cellnum">
                  <p class="floatleft cytology-nosatisfaction cytology-col-three">&nbsp;&nbsp;>5000</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="cellnum">
                  <p class="floatleft cytology-nosatisfaction cytology-col-four">&nbsp;&nbsp;<5000</p>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">炎症反应:</p>
                  <input type="radio" class="floatleft cytology-col-one cytology-col-radio" name="satisfaction">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;轻度</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="rection">
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;中度</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="rection">
                  <p class="floatleft cytology-nosatisfaction cytology-col-three">&nbsp;&nbsp;重度</p>
                  <input type="radio" class="floatleft cytology-col-radio" name="rection">
                  <p class="floatleft cytology-nosatisfaction cytology-col-four">&nbsp;&nbsp;少量炎症细胞</p>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">细胞项目:</p>
                  <div class="noselectbox floatleft cytology-check" id="aa" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two ">&nbsp;&nbsp;鳞状细胞</p>
                  <div class="noselectbox floatleft cytology-check" id="bb" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;颈管细胞</p>
                  <div class="noselectbox floatleft cytology-check" id="cc" @click="cytologyselect"></div>
                  <p class="floatleft cytology-nosatisfaction cytology-col-three">&nbsp;&nbsp;化生细胞</p>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">微生物项目:</p>
                  <div class="noselectbox floatleft cytology-check" id="dd" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;滴虫感染</p>
                  <div class="noselectbox floatleft cytology-check" id="ee" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;霉菌感染</p>
                  <div class="noselectbox floatleft cytology-check" id="ff" @click="cytologyselect"></div>
                  <p class="floatleft cytology-nosatisfaction cytology-col-three">&nbsp;&nbsp;念珠菌感染</p>
                  <div class="noselectbox floatleft cytology-check" id="gg" @click="cytologyselect"></div>
                  <p class="floatleft cytology-nosatisfaction cytology-col-four">&nbsp;&nbsp;球杆菌感染</p>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols"></p>
                  <div class="noselectbox floatleft cytology-check" id="hh" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;球杆菌感染</p>
                  <div class="noselectbox floatleft cytology-check" id="ii" @click="cytologyselect"></div>
                  <p class="floatleft cytology-col-two">&nbsp;&nbsp;HPV病毒感染</p>
                  <div class="noselectbox floatleft cytology-check" id="jj" @click="cytologyselect"></div>
                  <p class="floatleft cytology-nosatisfaction cytology-col-three">&nbsp;&nbsp;疱疹病毒感染</p>
                  <div class="noselectbox floatleft cytology-check" id="kk" @click="cytologyselect"></div>
                  <p class="floatleft cytology-nosatisfaction cytology-col-four">&nbsp;&nbsp;类似乳头状病毒感染</p>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows-eyesee">
                  <p class="floatleft cytology-cols ">肉眼所见:</p>
                  <textarea class="floatleft cytology-eyesee"> </textarea>  
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">诊断意见:</p>
                  <textarea class="floatleft cytology-diagnosticadvice cytology-advice"></textarea>
              </div>
              <div class="clear"></div>
              <div class="cytology-rows-addadvice">
                  <p class="floatleft cytology-cols">补充意见:</p>
                  <input type="text" class="floatleft cytology-addadvice cytology-advice">
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                  <p class="floatleft cytology-cols">诊断批注:</p>
                  <input type="text" class="floatleft cytology-pizhu">
                  <p class="floatleft cytology-cols">诊断符合：</p>
                  <input type="text" class="floatleft cytology-ipt-four">
                 
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                    <p class="floatleft cytology-cols ">是否阳性:</p>
                    <form class="floatleft">
                        <select class="cytology-ipt-four">
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </form>
                    <p class="floatleft cytology-cols-bottom">诊断关键词：</p>
                    <input type="text" class="floatleft cytology-ipt-four">
                    <p class="floatleft cytology-cols">初诊医生：</p>
                    <input type="text" class="floatleft cytology-ipt-four">
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                    <p class="floatleft cytology-cols ">主诊医生:</p>
                    <form class="floatleft">
                        <select class="cytology-ipt-four">
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </form>
                    <p class="floatleft cytology-cols-bottom">审核医生：</p>
                    <input type="text" class="floatleft cytology-ipt-four">
                    <p class="floatleft cytology-cols">报告日期：</p>
                    <input type="text" class="floatleft cytology-ipt-four">
              </div>
              <div class="clear"></div>
              <div class="cytology-rows">
                    <p class="floatleft cytology-cols ">打印格式:</p>
                    <input type="text" class="floatleft cytology-ipt-four">
                    <p class="floatleft cytology-cols-bottom">请选择报告格式：</p>
                    <form class="floatleft">
                        <select class="cytology-ipt-four">
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </form>
              </div>
          </div>
          <div class="cytology-bodyright">
                <div  class="dictionary">
                        <p>我的词典</p>
                </div>
                <div class="cytology-dictionary">
                  <div   class="dictionary-input2 cytology-input">
                    <img src="../assets/images/search.png.png" class="floatleft cytology-searchimg">
                    <input type="text"  class="floatleft  dictionary-text cytology-dictionarytext">
                    <div class="material-add2  floatleft cytology-addimg"></div> 
                    <div class="material-modify  floatleft"></div>
                    <div class="material-delete  floatleft"></div>
                  </div>
                  <div class="dictionary-search2 cytology-background list">
                    <ul>
                      <li><a href="#" class="inactive">乳腺</a>
                      </li>
                      <li id="qq"><a href="#" class="inactive" id="zhongwu" @click="menushow">肿物通用</a>
                          <ul style="display: block">
                            <li><a href="#">故事</a></li>
                            <li><a href="#">Vectors </a></li>
                            <li><a href="#">Photoshop </a></li>
                            <li><a href="#">Fonts </a></li>
                          </ul>
                      </li>
                      <li id="mm">
                        <a href="#" class="inactive" >乳腺</a>
                      </li>
                      <!-- <li><a href="#" class="inactive" id="chang" @click="menushow">肠</a>
                        <ul >
                            <li><a href="#">故事</a></li>
                            <li><a href="#">Vectors </a></li>
                            <li><a href="#">Photoshop </a></li>
                            <li><a href="#">Fonts </a></li>
                          </ul>
                      <li><a href="#" class="ina
                      ctive">乳腺</a>
                      </li>
                      <li><a href="#" class="inactive">乳腺</a>
                      </li>
                      <li><a href="#" class="inactive" id="ruxian" @click="menushow">乳腺</a>
                        <ul style="display: none">
                            <li><a href="#">故事</a></li>
                            <li><a href="#">Vectors </a></li>
                            <li><a href="#">Photoshop </a></li>
                            <li><a href="#">Fonts </a></li>
                          </ul>
                      </li>
                      <li><a href="#" class="inactive">乳腺</a>
                      </li>
                      <li><a href="#" class="inactive">脾脏</a>
                      </li>
                      <li><a href="#" class="inactive">肾标本</a>
                      </li>
                      <li><a href="#" class="inactive">乳腺</a>
                      </li>
                      <li><a href="#" class="inactive">肺组织</a>
                      </li>
                      <li><a href="#" class="inactive">胃</a>
                      </li>
                      <li><a href="#" class="inactive">全组织+双附件</a>
                      </li>
                      <li><a href="#" class="inactive">全组织+双附件</a>
                      </li>
                      <li><a href="#" class="inactive">脾脏</a>
                      </li>
                      <li><a href="#" class="inactive">肾标本</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
          </div>
          <div class="clear"></div>
          <div class="cytology-bodybottom pic-ref">
                <button>特检医嘱</button>
                <button>切片信息</button>
                <button>检查模板</button>
                <button>常用词</button>
                <button>保存</button>
                <button>打印</button>
                <div  class="picture-img" v-on:click="newproject"></div> 
               <div  class="refresh-img"></div>
          </div>
       </div> 
    </div>
</template>
<style>

.pic-ref .picture-img{
    background: url('../assets/images/refresh.png.png')no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float: left;
    margin-top: 6px;
    margin-left: 10px;
}
.pic-ref .refresh-img{
    margin-top: 6px;
}
.cytology-bodyleft .cytology-check{
    margin-top: 5px;
    margin-left:8px;
}
.cytology-bodyleft{
    width:726px;
    height: 560px;
    float: left;
}
.cytology-rows{
    height: 28px;
    line-height: 28px; 
}
.cytology-rows p{
    display: block;
}
.cytology-cols{
    width: 83px;
    text-align: right;
}  
.cytology-content{
    width: 1026px;
    height: 570px;
    margin:10px auto;
}
.cytology-rows .cytology-col-one{
    margin-left: 10px;
}
.cytology-col-two{
    width:102px;
    text-align: left;
} 
.cytology-nosatisfaction{
    width:60px;
    text-align: left;
} 
.cytology-form{
    width:154px;
    height: 24px;
}
.cytology-rows .cytology-col-radio{
    margin-top:7px;
}
.cytology-col-three{
    width:106px;
}
.cytology-col-four{
    width: 200px;
}
.cytology-eyesee{
    width:630px;
    height: 66px;
    border-radius: 3px;
    border:1px solid #ccc;
    margin-left: 5px;
    overflow-y: scroll;
}
.cytology-rows-eyesee{
    height: 74px;
    width:100%;
}
.cytology-diagnosticadvice{
     height: 84px;
}
.cytology-advice{
    width:630px;
    border-radius: 3px;
    border:1px solid #ccc;
    margin-left: 5px;
    overflow-y: scroll;
}
.cytology-addadvice{
    height: 24px;
}
.cytology-rows-addadvice{
    margin-top: 8px;
}
.cytology-pizhu{
    width:404px;
    border-radius: 3px;
    border:1px solid #ccc;
    margin-left: 5px;
    height: 22px;
    margin-top: 3px;
} 
.cytology-ipt-four{
   width:140px;
    border-radius: 3px;
    border:1px solid #ccc;
    height: 22px;
    margin-left: 3px;
    margin-top: 3px; 
}
.cytology-cols-bottom{
    width:114px;
    text-align: right;
    margin-left: 9px;
}
.cytology-bodyright{
    width:300px;
    height: 482px;
    float: left;
    position: relative;
}
.cytology-bodybottom{
    width:1026px;
    height: 36px;
    margin-top: 15px;
}
.cytology-bodybottom button{
    float: right;
    margin-left: 20px;
    background: #428bca;
    color:#fff;
    width:74px;
    height: 36px;
    border-radius: 3px;
}
.cytology-bodybottom button:hover{
     background:#3577af;
} 
.cytology-dictionary{
    width:282px;
    height: 482px;
    border:1px solid #ccc;
    position: absolute;
    right: 0px;
}
.cytology-searchimg{
    margin-top: 5px;
    margin-left: 5px;
}
.cytology-addimg{
    margin-left: 196px;
}
.cytology-input{
    width:280px;
}
.cytology-background{
    background: #f9f9f9;
    height: 450px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.cytology-background ul li{
    /*width:260px;
    height: 30px;
    line-height: 30px;*/
   /* margin-left: -40px;
    padding-left: 5px;*/
}
.cytology-background ul li:hover{
    background:#f5f5f5;
}
.cytology-background .cytology-listimg{
    margin-left: 228px;
}
.cytology-dictionarytext{
    width:168px;
}

.list ul li{
    border-bottom:0;
    height: 30px;
    line-height: 30px;
    position: relative;
}
.list ul li ul{
    position: absolute;
    top:30px;
}
.list ul li a{
    padding-left: 10px;
    color: #000;
    font-size:12px;
    display: block;
    position: relative;
}
.list ul li .inactive{ 
    background:url('../assets/images/off.png') no-repeat 224px center;
}
.list ul li .inactives{
    background:url('../assets/images/on.png') no-repeat 224px center;
} 
.list ul li ul li{
    border-left:0;
    border-right:0;
    height: 30px;
    line-height: 30px;
}
.list ul li ul li ul{
    display: none;
}
.list ul li ul li a{
    padding-left:20px;
}
.list ul li ul li ul li a{
    color:#316a91;
    padding-left:30px;
}
</style>
<script>
    import $ from "jQuery";
    export default{
        data(){
            return{
                
            }
        },
        components:{
            
        },
        methods:{
            cytologyselect:function(e){
                var checkid=$(e.target).attr("id");
                if($("#"+checkid).hasClass('selectbox')){
                $("#"+checkid).removeClass("selectbox").addClass("noselectbox");
                    }else{
                $("#"+checkid).addClass("selectbox").removeClass("noselectbox");
                }
            },
            menushow:function(e){
              var selectid=$(e.target).attr("id");
              console.log($("#"+selectid).parent('li').next('li').attr("id"))
              console.log(($("#"+selectid).parent('li').children('ul').children().length))
              if($("#"+selectid).siblings('ul').css('display')=='none'){
              $("#"+selectid).parent('li').siblings('li').removeClass('inactives');
              $("#"+selectid).addClass('inactives');
              // $("#"+selectid).parent('li').next('li').attr("id").css('top',($('#'+selectid).parent('li').children('ul').children().length)*30+'px' );
              $("#"+selectid).siblings('ul').slideDown(100).children('li');
              if($("#"+selectid).parents('li').siblings('li').children('ul').css('display')=='block'){
                $("#"+selectid).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $("#"+selectid).parents('li').siblings('li').children('ul').slideUp(100);
              }
            }else{
              //控制自身变成+号
              $("#"+selectid).removeClass('inactives');
              //控制自身菜单下子菜单隐藏
              $("#"+selectid).siblings('ul').slideUp(100);
              //控制自身子菜单变成+号
              $("#"+selectid).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
              //控制自身菜单下子菜单隐藏
              $("#"+selectid).siblings('ul').children('li').children('ul').slideUp(100);
              //控制同级菜单只保持一个是展开的（-号显示）
              $("#"+selectid).siblings('ul').children('li').children('a').removeClass('inactives');
            }
            }
        }
    }
</script>