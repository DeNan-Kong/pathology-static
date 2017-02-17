<template>
    <div class="cytologyfive">
        <div class="cytology-content">
            <div class="cytology-row">
                <span class="floatleft cytologyfive-length">标本类型&nbsp;：&nbsp;</span>
                <form class="floatleft ">
                  <select class="cytology-form cytology-form">
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </form>
                <span class="floatleft rowlength">标本状态&nbsp;：&nbsp;</span>
                <form class="floatleft ">
                  <select class="cytology-form cytology-form">
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </form>
            </div>
            <div class="cytology-row">
                <span class="floatleft cytologyfive-length">检测类型&nbsp;：&nbsp;</span>
                <span class="floatleft cytologyfive-color-span">低危型HPV病毒型别&nbsp;：&nbsp;</span>
                <div class="blue-color cytologyfive-color floatleft"></div>
                <span class="floatleft cytologyfive-color-span">高危型HPV病毒型别&nbsp;：&nbsp;</span>
                <div class="yellow-color cytologyfive-color floatleft"></div>
            </div>
            <div class="cytology-row">
                <span class="floatleft cytologyfive-length"></span>
                <el-checkbox v-model="checked" class="floatleft">6</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">11</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">42</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">43</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">44</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">CP8304</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-row-yellow">
                <span class="floatleft cytologyfive-length"></span>
                <el-checkbox v-model="checked" class="floatleft">B</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft ">IC</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">16</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">18</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">31</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">33</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">35</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft ">39</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">45</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">51</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytology-row-yellow">
                <span class="floatleft cytologyfive-length"></span>
                <el-checkbox v-model="checked" class="floatleft">52</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft ">53</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">56</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">58</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">59</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">66</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">68</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft ">73</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">82</el-checkbox>
                <el-checkbox v-model="checked" class="floatleft">83</el-checkbox>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytologyfive-text">
                <span class="floatleft cytologyfive-length">检查结果&nbsp;：&nbsp;</span>
                <textarea></textarea>
            </div>
            <div class="clear"></div>
            <div class="cytology-row cytologyfive-text">
                <span class="floatleft cytologyfive-length">高危型HPV(15种)&nbsp;：&nbsp;</span>
                <textarea></textarea>
            </div>
            <div class="cytology-row cytologyfive-text">
                <span class="floatleft cytologyfive-length">高危型HPV(6种)&nbsp;：&nbsp;</span>
                <textarea></textarea>
            </div>
            <div class="clear"></div>
             <div class="cytology-row cytologyfour-row-check">
                 <span class="floatleft cytologyfive-length">主诊医生&nbsp;：&nbsp;</span>
                  <form class="floatleft">
                      <select class="cytologyfive-form">
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                  </form>
                 <span class="floatleft">审核医生&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfive-form" type="text">
                 <span class="floatleft">报告日期&nbsp;：&nbsp;</span>
                 <input class="floatleft cytologyfive-form" type="text">
                  <span class="floatleft">报告格式&nbsp;：&nbsp;</span>
                 <form class="floatleft">
                      <select class="cytologyfive-form">
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                  </form>
            </div>
            <div class="cytologysecond-bottom">
                <button class="cytologyfive-button">打印</button>
                <button>保存</button>       
            </div>
            <div  class="picture-img"></div> 
            <div  class="refresh-img"></div>
        </div>
    </div>
</template>
<style>
.cytologyfive-form{
    width: 124px;
    height: 24px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-right: 30px;
}
.cytologyfive .cytologyfive-button{
   margin-right: 72px;

}
.cytologyfive button{
    margin-top: 36px;
}
.cytologyfive-length{
    width: 134px;
    height: 24px;
    line-height: 24px;
    text-align: right;
} 
.cytologyfive-color-span{
    width: 150px;
    height: 24px;
    line-height: 24px;
    text-align: right;
}
.cytologyfive-color{
    width:30px;
    height: 20px;
    margin-left: 18px;
    margin-right: 24px;
    margin-top: 3px;
} 
.blue-color{
    background: #4d7cbe;
} 
.yellow-color{
    background: #ca602c;
}  
.cytologyfive .cytology-row .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #fff;
    border-color: #4d7cbe;
}
.cytologyfive .cytology-row .el-checkbox__input.is-focus .el-checkbox__inner,.cytologyfive .cytology-row .el-checkbox__input.is-hover .el-checkbox__inner,.cytologyfive .cytology-row .el-checkbox__input .el-checkbox__inner{
    border-color: #4d7cbe;
}
.cytology-row .el-checkbox__inner::after{
    box-sizing: content-box;
    content: "";
    border: 2px solid #4d7cbe;
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
.cytologyfive .cytology-row-yellow .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #fff;
    border-color: #ca602c;
}
.cytologyfive .cytology-row-yellow .el-checkbox__input.is-focus .el-checkbox__inner,.cytologyfive .cytology-row-yellow .el-checkbox__input.is-hover .el-checkbox__inner,.cytologyfive .cytology-row-yellow .el-checkbox__input .el-checkbox__inner{
    border-color: #ca602c;
}
.cytology-row-yellow .el-checkbox__inner::after{
    box-sizing: content-box;
    content: "";
    border: 2px solid #ca602c;
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
/*.cytology-row .el-checkbox{
    color:#4d7cbe;
}*/
.cytology-row-yellow .el-checkbox{
    color:#ca602c;
}
.cytologyfive .el-checkbox__label {
    width:22px;
    font-size: 14px;
    padding-left: 5px;
}
.cytologyfive label{
    width: 38px;
}
.cytologyfive textarea{
    width:820px;
    height: 90px;
}
.cytologyfive-text{
    height: 95px;
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
