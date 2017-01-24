<template>
    <div> 
    <div  id="middle-right">
        <div  class="right-inner">
            
        <div class="right-top">
            <button class="right-top-one shen  rightbtnone" v-on:click="shenbtn">申</button><button  class="rightbtntwo right-top-two  deng" v-on:click="dengbtn">登</button>
            <button  class="rightbtnthr right-top-three qu" v-on:click="qubtn">取</button><button  class="rightbtnfou right-top-four zhizi" v-on:click="zhibtn">制</button>
            <button  class="rightbtnfiv right-top-five zan" v-on:click="zanbtn">暂</button><button  class="rightbtnsix right-top-six zhen" v-on:click="zhenbtn">诊</button>
            <button  class="rightbtnsev right-top-seven yan" v-on:click="yanbtn">延</button><button  class="rightbtneig right-top-eight  shen2" v-on:click="shen2btn">审</button>
            <button  class="rightbtnnin right-top-nine yin" v-on:click="yinbtn">印</button>
        </div>
        <br>
        <div class="grop-search ">
            <button class="grop-search-line grop-search-line1 floatleft  grop-search-lines"  v-on:click="toggle"><div class="grop-search-img2 grop-search-img  grop-search-imgs" ></div></button>
            <button  class="grop-search-btn grop-search-btn1 floatleft  grop-search-btns" v-on:click="toggle">组合查询</button>
            <p  class="floatleft">按时间检索:</p>
             <form  class="floatleft ">
                <select class="grop-search-sel  radium">
                    <option>当天</option>
                    <option>一天内</option>
                    <option>两天内</option>
                    <option>十天内</option>
                    <option>全部</option>
                </select>
            </form>
        </div>
        <div class="big-search">
            <input type="text"  class="floatleft big-search-input "  id="app">
            <img src="../assets/images/search.png.png"   class="big-search-img">
            <form  class="floatleft ">
                <select class="big-search-sel  ">
                    <option>病理号</option>
                    <option>住院号</option>
                    <option>门诊号</option>
                    <option>冰冻号</option>
                    <option>姓名</option>
                    <option>申请号</option>
                    <option>病人ID</option>
                </select>
            </form>
        </div>
        <div  class="select-search">
            <div  class="noselectbox floatleft  checkbox g  checkbox-one" id="e"  v-on:click="changecheckbox7"></div><p  class="floatleft  allmessage">全库</p>
            <div  class="noselectbox floatleft checkbox  h checkbox-two" id="f"  v-on:click="changecheckbox8"></div><p  class="floatleft  cannotsee">模糊</p>
            <button  class="select-search-btn" v-on:click="find">提取</button>
        </div>
        <div class="clear"></div>
        <div   class="table-show">
            <table class="table ">
                <thead>
                    <tr>
                        
                        <th class="table-show-one"></th>
                        <th  class="th-three">病理号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th  class="th-three">住院号</th>
                        <th  class="th-three">送检单位</th>
                        <th  class="th-three">送检科室</th>
                        <th  class="th-three">标本名称</th>
                        <th  class="th-three">临床诊断</th>
                        <th  class="th-three">诊断意见</th>
                        <th  class="th-three">主诊医生</th>
                        <th  class="th-three">送检日期</th>
                        <th  class="th-three">报告日期</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td class="table-show-one"><!-- <img src="../image/imagehistory.png" class="table-image"> --></td>
        
                        <td>3001</td>
                        <td>张华</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr class="selected">
                       
                        <td class="table-show-one">7</td>
                        <td class="blue-bg">3002</td>
                        <td>小强</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                   
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                     
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                       
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                     <tr >
                        
                        <td class="table-show-one">冰</td>
                        <td>3001</td>
                        <td>张华</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr class="selected">
                       
                        <td class="table-show-one">7</td>
                        <td class="blue-bg">3002</td>
                        <td>小强</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                  
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                       
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                    
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                     <tr >
                        
                        <td class="table-show-one">冰</td>
                        <td>3001</td>
                        <td>张华</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr class="selected">
                     
                        <td class="table-show-one">7</td>
                        <td class="blue-bg">3002</td>
                        <td>小强</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
                  
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                    <tr>
               
                        <td class="table-show-one">冰</td>
                        <td>3003</td>
                        <td>小王</td>
                        <td>男</td>
                        <td>23</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                        <td>20106235261</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="right-bottom">
                <p  class="activecolor"><a class="activecolor" href="#">历史检查(0)</a></p>
                <p  class="urgecolor"><a class="urgecolor" href="#">申请单(1)</a></p>
                <p  class="activecolor"><a class="activecolor" href="#">会诊意见(0)</a></p>
            </div>
        </div>
    </div>
    <div class="bmobbox">
        <div class="bmobbox-top" >
            <p>组合查询</p>
        </div>
        <div class="bmobbox-body">
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">送检日期&nbsp;:&nbsp;<p>
                 <calendar/>
                <p  class="floatleft  zhi">至</p>
               <calendar/>
                <div  class="noselectbox e floatleft teshudate" v-on:click="changecheckbox5"></div>
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">报告日期&nbsp;:&nbsp;<p>
                <calendar/>
                <p  class="floatleft  zhi">至</p>
                <calendar/>
                <div  class="noselectbox f floatleft teshudate" v-on:click="changecheckbox6"></div>
                
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;:&nbsp;<p>
                <form  class="floatleft">
                    <select class="floatleft bmobboxinputcom">
                        <option>男</option>
                        <option>女</option>
                        <option>未知</option>
                    </select>
                </form> 
                <p  class="floatleft  age">年龄&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxage  floatleft">
                <form  class="floatleft">
                    <select class="floatleft selectage">
                        <option>岁</option>
                        <option>女</option>
                        <option>未知</option>
                    </select>
                </form> 
                <p  class="floatleft  agezhi">至</p>
                <input  type="text"  class="bmobboxage  floatleft">
                <form  class="floatleft">
                    <select class="floatleft selectage">
                        <option>岁</option>
                        <option>女</option>
                        <option>未知</option>
                    </select>
                </form> 
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">送检单位&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputcom  floatleft">
                <p  class="floatleft ">送检科室&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxinput2  floatleft">
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">标本类型&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputcom  floatleft">
                <p  class="floatleft ">标本名称&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxinput2  floatleft">
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">报告状态&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputcom  floatleft">
                <p  class="floatleft ">初诊医生&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxinput2  floatleft">
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">主诊医生&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputcom  floatleft">
                <p  class="floatleft ">审核医生&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxinput2  floatleft">
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">临床诊断&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputlong  floatleft">  
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">病理诊断&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputlong  floatleft">  
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft2">诊断关键词&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinputlong2  floatleft">  
            </div>
            <div class="bmobboxtwo">
                <div  class="noselectbox  a floatleft"   v-on:click="changecheckbox1"></div><p  class="floatleft">延期报告</p>
                <div  class="noselectbox b floatleft"   v-on:click="changecheckbox2"></div><p  class="floatleft">冰冻报告</p> 
                <div  class="noselectbox c floatleft"   v-on:click="changecheckbox3"></div><p  class="floatleft">补充报告</p> 
                <div  class="noselectbox d floatleft"  v-on:click="changecheckbox4"></div><p  class="floatleft">会诊报告</p>   
            </div>
            <div class="example">
                <p>说明：临床诊断、病理诊断、诊断关键词输入多个关键词时用“l”隔开</p>
            </div>
        </div>
        <div class="bmobbox-bottom">
            <button class="bmobbox-btnone">查询</button>
            <button class="bmobbox-btntwo" @click="cancle">取消</button>
        </div>
    </div>
    
</div>
</template>
<style>
.checkbox{
    width: 20px;
    height: 20px;
    margin-top: 5px;
}
.bmobbox-btnone{
    position: absolute;
    background: #fff;
    border: 1px solid #e5e5e5;
    color:#333333;
    right: 130px;
    top: 15px;
}
.bmobbox-btntwo{
    position: absolute;
    background: #428cca;
    border: 1px solid #428cca; 
    color: #fff;
    right: 30px;
    top: 15px;
}
.bmobbox-bottom{
    position: relative;
    width:527px;
    height: 60px;
    margin-top: 120px;
    border-top: 1px  solid #e5e5e5;
}
.bmobbox-bottom button{
    width:60px;
    height: 34px;
    border-radius: 3px;
}
.example{
    margin-top: 20px;
    margin-left: 6px;
    width: 450px;
    height: 30px;
    color:#2eacd5;
    padding:0px;
}
.teshudate{
    margin-left: 15px;
}
.selectbox{
    width: 20px;
    height: 20px;
    background: url('../assets/images/checkbox.png')  -12px -8px no-repeat;
    margin-right:4px;
}
.noselectbox{
    width: 20px;
    height: 20px;
    background: url('../assets/images/checkbox.png')  -44px -8px no-repeat;
    margin-right:4px;
}
.bmobboxtwo p{
    line-height: 20px;
    display: block;
    margin-right:10px;
}
.bmobboxtwo{
    margin-top: 36px;
    margin-left: 83px;
}
.bmobboxleft2{
    width:83px;
    text-align: right;
}
.bmobboxinputlong2{
    width:375px;
    height:24px;
    border-radius: 3px;
    border:1px solid #e5e5e5;
}
.bmobboxinputlong{
    width:388px;
    height:24px;
    border-radius: 3px;
    border:1px solid #e5e5e5;    
}
.bmobboxinputcom{
    width:142px;
    height:24px;
    border-radius: 3px;
    border:1px solid #e5e5e5;
    margin-right: 35px;
}
.bmobboxinput2{
   width:142px;
    height:24px;
    border-radius: 3px;
    border:1px solid #e5e5e5;
}
.agezhi{
    margin-left: 5px;
    margin-right: 5px;
}
.bmobboxleft{
    width:70px;
    text-align: right;
}
.bmobboxage{
    width:34px;
    height: 24px;
    border:1px solid #e5e5e5;
    border-radius: 3px;
   
}
.selectage{
    margin-left: 3px;
    width:36px;
    height: 24px;
    border:1px solid #e5e5e5;
    border-radius: 3px;
}
.bmobbox{
    width:527px;
    height:660px;
    position:absolute;
    z-index: 99999;
    margin-top: -663px;
    margin-left: 538px;
    background: #fff;
    box-shadow: -3px 3px 5px rgba(0,0,0,0.15);
    display:none;
}
.bmobboxone,.bmobboxtwo{
    height:24px;
    font-size:14px;
    margin-bottom: 4px;
    line-height: 24px;
}
.bmobbox-top{
    width:527px;
    height:34px;
    border-bottom: 1px solid  #e5e5e5;
    line-height:34px;
    color:#333333;
    font-size:16px;
}
.bmobbox-top p{
    display:block;
    margin-left:16px;
}
.bmobbox-body{
    width:527px;
    height:434px;
    padding:16px 30px;
    color:#333333; 
}
.bmobboxinput{
    width:142px;
    height:24px;
    border-radius: 3px;
    border:1px solid #e5e5e5;
    margin-right: 25px;
}
.zhi{
    margin-right: 5px;
    margin-left: 5px;
}
.table-show{
    width:100%;
    min-width:255px;
    height: 425px;
    overflow: scroll;
}
.table-show .table th:first-child,.table-show .table td:first-child{
    width:48px;
}
#middle-right{
    margin-top: -650px;
    margin-left:1066px;
    height:700px;
    padding:10px;
    background:#fff;
    margin-right:5px;
    overflow-x:scroll;
}
.right-top button{
    width:20px;
    height:20px;
    border-radius: 3px;
    float:left;
    line-height:20px;
    text-align:center;
    color:#fff;
    font-size:14px;
    margin-left: 5px;
    outline: none;
}
.right-top .right-top-one{
    background:#a366bd;
}
.shen{
    background:#a366bd;  
}
.right-top .right-top-two{
    background:#4d7cbe;
}
.deng{
    background:#4d7cbe; 
}
.right-top .right-top-three{
    background:#6bc664;
}
.qu{
    background:#6bc664;   
}
.right-top .right-top-four{
    background:#5acdce;
}
.zhizi{
    background:#5acdce;
}
.right-top .right-top-five{
    background:#d99165;
}
.zan{
    background:#d99165;
}
.right-top .right-top-six{
    background:#e975c1;
}
.zhen{
    background:#e975c1;
}
.right-top .right-top-seven{
    background:#dc5b5b;
}
.insetcolor{
    box-shadow: -5px -5px 5px  rgba(0,0,0,0.5) inset,5px 5px 5px rgba(0,0,0,0.5) inset;
    -moz-box-shadow: -5px -5px 5px  rgba(0,0,0,0.5) inset,5px 5px 5px rgba(0,0,0,0.5) inset;
    -ms-box-shadow: -5px -5px 5px  rgba(0,0,0,0.5) inset,5px 5px 5px rgba(0,0,0,0.5) inset;
    -webkit-box-shadow: -5px -5px 5px  rgba(0,0,0,0.5) inset,5px 5px 5px rgba(0,0,0,0.5) inset;
}
.yan{
    background:#dc5b5b;   
}
.right-top .right-top-eight{
    background:#dfd06d;
}
.shen2{
    background:#dfd06d;   
}
.right-top .right-top-nine{
    background:#b0bec5;
}
.yin{
    background:#b0bec5;   
}
.right-top{
    width:250px;
    height:30px;
}
.grop-search{
    width:250px;
    height:30px;
    margin-top:-15px; 
}
.grop-search button{
    outline: none;
}
.grop-search-sel{
    width: 67px;
    height:27px;
}
.grop-search-btn{
    width:65px;
    height:27px;
    margin-right:8px;
    color:#fff;
    border-radius:3px;
    padding-right: 3px;
    text-align: right;   
}
.grop-search-btn1{
    background:#428bca;
    border:1px solid #428bca;
}
.grop-search-btn2{
    background:#57bdde;
    border:1px solid #57bdde;
}
.grop-search-line{
    width: 27px;
    height: 27px;   
    border-radius: 3px;
}
.grop-search-line1{
    background:#428bca;
}
.grop-search-line2{
    background:#57bdde;
}
.grop-search-img{
    width: 27px;
    height: 27px;    
}
.grop-search-img1{
    background: url('../assets/images/combinationsearch.png')  -151px -10px no-repeat; 
}
.grop-search-img2{
    background: url('../assets/images/combinationsearch.png')  -151px -51px no-repeat;
}
.grop-search p{
    display:block;
    height:27px;
    line-height: 27px;
    margin-right: 8px;
}
.big-search{
    width:250px;
    height:30px;
    margin-top:5px;
}
.big-search-input{
    width: 183px;
    height:28px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border:1px solid #ccc;
    padding-left:30px;
}
.big-search-sel{
    width:66px;
    height:28px;
    border:1px solid #ccc;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.select-search{
    width: 300px;
    height:30px;
    margin-top: 10px;
    line-height:26px;
    font-size:14px;
}
.checkbox-one,.checkbox-two{
    width:20px;
    height:20px;
}
input[type='checkbox'] .checkbox-one{
    border:1px solid #ccc;
    background:#fff;
}
.allmessage{
    margin-right: 34px;
    margin-left: 7px;
}
.cannotsee{
    margin-left: 7px;
    margin-right: 55px;
}
.select-search-btn{
    width:43px;
    height:24px;
    background:#428bca;
    border:1px solid #428bca;
    color:#fff;
    border-radius: 3px;
    line-height:20px;
    text-align:center;
}
.right-bottom>p{
    display:block;
    float:left;
    margin-top: 10px;
    margin-left:20px;
    text-decoration:underline;
}
.activecolor{
    color:#2eacd5;
}
.urgecolor{
    color:#c94646;
}
body .table-show-one{
    width: 48px;
}
</style>
<script>
import {mapState} from 'vuex';
import $ from "jQuery";
import Calendar from 'components/calendar';
    export default{
        data(){
            return{
                name: 'Vue.js',
            }
        },
        components:{
            "calendar":Calendar
        },
        methods:{
           // async  find(){
           //      const response = await fetch('/api/hello');
           //      if(response.ok){
           //          console.log("__________________");
           //          this.content = await response.text();
           //          console.log(this.content);
                  
           //          var jsondata=JSON.parse(this.content);

           //          console.log(jsondata.length);
           //      }
           //          },
                toggle:function(){
                    console.log("+++++++")
                    $(".bmobbox").animate({marginLeft:"538px"},100).fadeToggle();
                    if($(".grop-search-lines").hasClass('grop-search-line1')){
                        $(".grop-search-lines").removeClass('grop-search-line1').addClass('grop-search-line2')
                    }else{
                        $(".grop-search-lines").addClass('grop-search-line1').removeClass('grop-search-line2')
                    }
                    if($(".grop-search-imgs").hasClass('grop-search-img1')){
                        $(".grop-search-imgs").removeClass('grop-search-img1').addClass('grop-search-img2')
                    }else{
                        $(".grop-search-imgs").addClass('grop-search-img1').removeClass('grop-search-img2')
                    }
                     if($(".grop-search-btns").hasClass('grop-search-btn1')){
                        $(".grop-search-btns").removeClass('grop-search-btn1').addClass('grop-search-btn2')
                    }else{
                        $(".grop-search-btns").addClass('grop-search-btn1').removeClass('grop-search-btn2')
                    }
                },
                changecheckbox1:function(e){
                    if($(".a").hasClass("selectbox")){
                    $(".a").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".a").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox2:function(e){
                    if($(".b").hasClass("selectbox")){
                    $(".b").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".b").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox3:function(e){
                    if($(".c").hasClass("selectbox")){
                    $(".c").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".c").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox4:function(e){
                    if($(".d").hasClass("selectbox")){
                    $(".d").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".d").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox5:function(e){
                    if($(".e").hasClass("selectbox")){
                    $(".e").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".e").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox6:function(e){
                    if($(".f").hasClass("selectbox")){
                    $(".f").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".f").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox7:function(e){
                    if($(".g").hasClass("selectbox")){
                    $(".g").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".g").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                changecheckbox8:function(e){
                    if($(".h").hasClass("selectbox")){
                    $(".h").removeClass("selectbox").addClass("noselectbox");
                    }else{
                    $(".h").removeClass("noselectbox").addClass("selectbox"); 
                    }
                },
                shenbtn:function(){
                    
                    if(!$(".rightbtnone").hasClass('insetcolor')){
                       $(".rightbtnone").addClass('insetcolor');
                       $(".rightbtnone").siblings().removeClass('insetcolor')
                    }
                },
                dengbtn:function(){
                    if(!$(".rightbtntwo").hasClass('insetcolor')){
                       $(".rightbtntwo").addClass('insetcolor');
                       $(".rightbtntwo").siblings().removeClass('insetcolor')
                    }
                },
                qubtn:function(){
                    if(!$(".rightbtnthr").hasClass('insetcolor')){
                       $(".rightbtnthr").addClass('insetcolor');
                       $(".rightbtnthr").siblings().removeClass('insetcolor')
                    }
                },
                zhibtn:function(){
                    if(!$(".rightbtnfou").hasClass('insetcolor')){
                       $(".rightbtnfou").addClass('insetcolor');
                       $(".rightbtnfou").siblings().removeClass('insetcolor')
                    }
                },
                zanbtn:function(){
                    if(!$(".rightbtnfiv").hasClass('insetcolor')){
                       $(".rightbtnfiv").addClass('insetcolor');
                       $(".rightbtnfiv").siblings().removeClass('insetcolor')
                    }
                },
                zhenbtn:function(){
                    if(!$(".rightbtnsix").hasClass('insetcolor')){
                       $(".rightbtnsix").addClass('insetcolor');
                       $(".rightbtnxis").siblings().removeClass('insetcolor')
                    }
                },
                yanbtn:function(){
                    if(!$(".rightbtnsev").hasClass('insetcolor')){
                       $(".rightbtnsev").addClass('insetcolor');
                       $(".rightbtnsev").siblings().removeClass('insetcolor')
                    }
                },
                shen2btn:function(){
                    if(!$(".rightbtneig").hasClass('insetcolor')){
                       $(".rightbtneig").addClass('insetcolor');
                       $(".rightbtneig").siblings().removeClass('insetcolor')
                    }
                },
                yinbtn:function(){
                    if(!$(".rightbtnnin").hasClass('insetcolor')){
                       $(".rightbtnnin").addClass('insetcolor');
                       $(".rightbtnnin").siblings().removeClass('insetcolor')
                    }
                },
                cancle:function(){
                    console.log("00000")
                    $(".bmobbox").fadeOut(500);
                    if($(".grop-search-lines").hasClass('grop-search-line1')){
                        $(".grop-search-lines").removeClass('grop-search-line1').addClass('grop-search-line2')
                    }else{
                        $(".grop-search-lines").addClass('grop-search-line1').removeClass('grop-search-line2')
                    }
                    if($(".grop-search-imgs").hasClass('grop-search-img1')){
                        $(".grop-search-imgs").removeClass('grop-search-img1').addClass('grop-search-img2')
                    }else{
                        $(".grop-search-imgs").addClass('grop-search-img1').removeClass('grop-search-img2')
                    }
                     if($(".grop-search-btns").hasClass('grop-search-btn1')){
                        $(".grop-search-btns").removeClass('grop-search-btn1').addClass('grop-search-btn2')
                    }else{
                        $(".grop-search-btns").addClass('grop-search-btn1').removeClass('grop-search-btn2')
                    }
                },
                find:function(){
                    console.log("ooooo")
                }
               }
            };
</script>