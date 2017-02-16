<template>
    <div>
      <div class="cytology-content cytologyfour">
        <div class="cytology-row">
               <span class="floatleft color rowlength">标本满意度&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;满意</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;基本满意</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;不满意</p>
               <form class="floatleft ">
                  <select class="cytology-form cytology-form">
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </form>
                <el-checkbox v-model="checked" class="floatleft">需重新取样</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color rowlength">细胞量&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="cell-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;>2000</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cell-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;<2000</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cell-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;>5000</p>
                <input type="radio" class="floatleft cytology-col-radio" name="cell-four">
                <p class="floatleft cytologysecond-p">&nbsp;&nbsp;<5000</p>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color rowlength">炎症反应&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="ill-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;轻度</p>
               <input type="radio" class="floatleft cytology-col-radio" name="ill-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;中度</p>
               <input type="radio" class="floatleft cytology-col-radio" name="ill-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;重度</p>
               <input type="radio" class="floatleft cytology-col-radio" name="ill-four">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;少量炎症细胞</p>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
                <span class="floatleft color rowlength">细胞项目&nbsp;：&nbsp;</span>
                <el-checkbox v-model="checked" class="floatleft">鳞状细胞</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">颈管细胞</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">化生细胞</el-checkbox> 
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color rowlength">微生物项目&nbsp;：&nbsp;</span>
               <el-checkbox v-model="checked" class="floatleft">滴虫感染</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">霉菌感染</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">球杆菌感染</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">放线菌感染</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">疱疹病毒感染</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">HPV感染</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">线索细胞</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">念珠菌感染</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-checkbox">
              <div class="cytology-row-left floatleft">
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">未见上皮病变细胞或恶性细胞</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">正常</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">炎症</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">表皮细胞萎缩</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">宫内避孕器反应</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">放疗反应</el-checkbox>
                </div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">有腺细胞（子宫切除后）</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">妊娠</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">有宫内膜细胞（>40岁）</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">其他</el-checkbox>
                </div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">非典型鳞状细胞</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">不能明确意义</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">倾向上皮内瘤病变</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">不能除外上皮内高度病变</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">倾向良性反应性改变</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">鳞状上皮内低度病变</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">鳞状上皮内高度病变</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">鳞状细胞癌</el-checkbox>
                </div>
              </div>
              <div class="cytology-row-right floatleft">
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">非典型腺细胞（无具体指定）</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">宫颈管</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">宫内膜</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">不能确定来源</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">非典型腺细胞（倾向瘤变）</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">宫颈管</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">宫内膜</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">不能确定来源</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">颈管原位腺癌</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-main">
                 <el-checkbox v-model="checked" class="floatleft">腺癌</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">宫颈管</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">宫内膜</el-checkbox>
                </div>
                <div class="clear"></div>
                <div class="checkbox-contain">
                   <el-checkbox v-model="checked" class="floatleft">子宫以外</el-checkbox>
                   <el-checkbox v-model="checked" class="floatleft">不能确定来源</el-checkbox>
                </div>
              </div>
            </div>
            <div class="floatleft cytology-row cytologyfour-check-advice">
              <span class="checkbox-contain floatleft color cytology-check-advice">诊断意见：</span>
              <textarea></textarea>
            </div>
            <div class="floatleft cytology-row cytology-add-advice">
              <span class="checkbox-contain floatleft color cytology-check-advice">补充意见：</span>
              <textarea class="add-advice-textarea"></textarea>
            </div>
            <div class="cytology-row cytologyfour-row-check">
                 <span class="floatleft color cytology-yes-no">是否阳性&nbsp;：&nbsp;</span>
                 <form class="floatleft">
                      <select class="cytologyfour-form">
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                  </form>
                 <span class="floatleft color">报告医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfour-form" type="text">
                 <span class="floatleft color">审核医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfour-form" type="text">
                 <span class="floatleft color">报告日期&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfour-form" type="text">
            </div>
            <div class="clear"></div>
             <div class="cytology-row cytologyfour-row-check">
                 
                 <span class="floatleft color cytology-yes-no">审核医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfour-form" type="text">
                 <span class="floatleft color">报告日期&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfour-form" type="text">
                 <span class="floatleft color">打印格式&nbsp;：&nbsp;</span>
                 <form class="floatleft">
                      <select class="cytologyfour-form">
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                  </form>
            </div>
            <div class="clear"></div>
            <div class="cytologysecond-bottom cytologyfour-bottom">
                <button>打印</button>
                <button>保存</button>
                <button>常用词</button>
                <button>检查模板</button>
                <button>切片信息</button>
                <button>特殊医嘱</button>   
            </div>
            <div  class="picture-img"></div> 
            <div  class="refresh-img"></div>
      </div>  
    </div>
</template>
<style>
.cytology-form{
  margin-right: 55px;
}
.cytologyfour-form{
  width: 140px;
  height: 24px;
  border:1px solid #ccc;
  border-radius: 3px;
  margin-right: 34px;
}
.rowlength{
  width: 94px;
  height: 24px;
  text-align: right;
}
.cytologyfour-row-length{
  padding-left: 20px;
}
.cytology-checkbox{
  width:100%;
  height: 230px;
  padding-left: 20px;
}
.cytology-row-left{
  width:620px;
  height: 230px;
}
.checkbox-contain{
  padding-left: 20px;
}
.cytology-row-right{
  width: 360px;
}
.checkbox-main,.checkbox-contain{
  width: 620px;
  height: 28px;
}
.cytologyfour .cytology-row{
  height: 16px;
  line-height: 16px;
}
.cytologyfour .cytology-row input[type='radio']{
  margin-top: 2px;
}
.cytologyfour .cytology-row textarea{
  float: left;
  width: 896px;
  height: 54px;
}
.cytology-check-advice{
  width:94px;
  display: block;
}
.cytologyfour .cytology-row .add-advice-textarea{
  height: 24px;
}
.cytologyfour .cytologyfour-check-advice{
    height: 54px;
    margin-bottom: 6px;
}
.cytologyfour .cytology-add-advice{
  height: 24px;
}
.cytologyfour .cytologyfour-row-check{
  line-height: 24px;
  margin-top: 5px;
}
.cytology-yes-no{
  width: 94px;
  height: 24px;
  text-align: right;
}
.cytologyfour .cytologyfour-row-check select{
  margin-top: 3px;
}
.cytologyfour .picture-img ,.cytologyfour .refresh-img{
  bottom: 20px;
}
.cytologysecond-bottom button{
  margin-top: 20px;
} 
</style>
<script>
    export default{
        data(){
            return{
                
            }
        },
        components:{
           
        }
    }
</script>
