<template>
    <div>
        <div class="cytology-content">
            <div class="cytology-row">
               <span class="floatleft color">1、标本类型&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;涂片</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;液基</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytologysecond-p">&nbsp;&nbsp;其他</p>
               <span class="floatleft color">检测方法&nbsp;：&nbsp;</span>
               <form class="floatleft">
                    <select class="cytologysecond-form">
                        <option></option>
                    </select>
                </form>
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
body{
   background-color: #edeef2; 
}
.cytology-content{
    width: 1026px;
    height: 570px;     
    margin:10px auto;
    color:#333;
    font-size:14px;
}
.cytology-row{
    width: 100%;
    height: 28px;    
    margin-bottom: 2px;
    line-height: 28px;
}
.cytology-row .color{
    color:#4d7cbe;
}
.cytology-row input{
    margin-top: 3px;
}
.cytology-row input[type='radio']{
    margin-top: 7px;
}
.cytology-row p{
    margin-bottom: 0px;
    margin-right: 20px;
}
.cytologysecond-form{
    width:252px;
    height: 25px;
    outline: none;
    border: none;
    border:1px solid #ccc;
    border-radius: 3px;
}
.cytology-row .el-checkbox__inner::after{
    box-sizing: content-box;
    content: "";
    border: 2px solid #000;
    border-left: 0;
    border-top: 0;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 1px;
    -ms-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 4px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    -ms-transform-origin: center;
    transform-origin: center;
}  
.cytology-row .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #fff;
    border-color: #ccc;
}
.cytology-row .el-checkbox__input.is-focus .el-checkbox__inner,.cytology-row .el-checkbox__input.is-hover .el-checkbox__inner,.cytology-row .el-checkbox__input .el-checkbox__inner{
    border-color: #ccc;
}
.cytology-row-check{
    padding-left: 25px;
}
.cytologysecond-textarea textarea{
    width: 980px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-left:25px;
    margin-bottom: 5px;
}
.cytologysecond-input{
    width:126px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 30px;
}
.cytologysecond-bottom button{
    width:74px;
    height: 36px;
    background: #428bca;
    outline: none;
    color: #fff;
    border-radius: 3px;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
}
.cytologysecond-bottom button:hover{
     background:#3577af;
}
.cytology-content .refresh-img{
    left: 53px;
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
