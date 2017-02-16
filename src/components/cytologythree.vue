<template>
    <div>
      <div class="cytology-content">
        <div class="cytology-row">
               <span class="floatleft color">1、结果分析&nbsp;：&nbsp;</span>
               <el-checkbox v-model="checked" class="floatleft">轻度发炎</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">中度发炎</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color">2、标本质量&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;满意</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;基本满意</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;需要新采样</p>
               <span class="floatleft color">细胞量&nbsp;：&nbsp;</span>
                <input type="radio" class="floatleft cytology-col-radio" name="cellno">
                <p class="floatleft cytologysecond-p">&nbsp;&nbsp;>5000个细胞</p>
                <input type="radio" class="floatleft cytology-col-radio" name="cellno">
                <p class="floatleft cytologysecond-p">&nbsp;&nbsp;<5000个细胞</p>
               <span class="floatleft color">说明&nbsp;：&nbsp;</span>
               <input class="cytologysecond-form floatleft">  
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color">3、一般分类&nbsp;：&nbsp;</span>
               <el-checkbox v-model="checked" class="floatleft">无上皮内病变或恶性病变细胞</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">炎症</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">轻度</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">中度</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">重度</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">上皮细胞不正常</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">鳞状细胞</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">腺上皮</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">其他</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
                <span class="floatleft color">4、微&nbsp;生&nbsp;&nbsp;物&nbsp;：&nbsp;</span>
                <el-checkbox v-model="checked" class="floatleft">滴虫</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">线索细胞</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">真菌（念珠菌等）</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">放线菌</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">单纯疱疹病毒感染</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">HPV感染</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
               <span class="floatleft color">5、其他非肿瘤性所见&nbsp;：&nbsp;</span>
               <el-checkbox v-model="checked" class="floatleft">红细胞</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">放射线影响</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">子宫内避孕器（IUD）</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">萎缩</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">化生细胞</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">颈管细胞</el-checkbox>
               <el-checkbox v-model="checked" class="floatleft">子宫内膜细胞（>40岁，具体说明）</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row">
                <span class="floatleft color">6、上皮细胞异常&nbsp;：&nbsp;</span><span class="floatleft">鳞状细胞</span>
            </div>
            <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">不典型鳞状细胞（ASC）</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">属意义不名者（ASC-US）</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">倾向良性反应性（>40岁，具体说明）</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">倾向LSIL</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">不能排除H_SIL（ASC-H）</el-checkbox>
            </div>
            <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">低级别鳞状上皮内病变（L-SIL），包括HPV轻度异型性CIN I</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">高级别鳞状上皮内病变（H-SIL）</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">CIN2-3</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">鳞状细胞癌</el-checkbox>
            </div>
            <div class="clear"></div>
             <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">非典型的腺细胞</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">宫颈管</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">宫内膜</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">不能确定来源</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">颈管原位癌</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-row-check">
                 <el-checkbox v-model="checked" class="floatleft">腺癌</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">宫颈管</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">宫颈内膜</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">子宫以外</el-checkbox>
                 <el-checkbox v-model="checked" class="floatleft">不能确定来源</el-checkbox>
            </div>
            <div class="cytologysecond-textarea">
            <textarea></textarea>
            </div>
            <div class="cytology-row cytology-row-check">
                 <span class="floatleft">是否阳性&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologysecond-input" type="text">
                 <span class="floatleft">报告医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologysecond-input" type="text">
                 <span class="floatleft">审核医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologysecond-input" type="text">
                 <span class="floatleft">报告日期&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologysecond-input" type="text">
            </div>
            <div class="cytologysecond-bottom">
                <button>保存结果</button>
                <button>打印报告</button>   
            </div>
            <div  class="picture-img"></div> 
            <div  class="refresh-img"></div>
      </div>  
    </div>
</template>
<style>
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
