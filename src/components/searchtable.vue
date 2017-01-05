<template>
    <div> 
    <div  id="middle-right">
        <div  class="right-inner">
            
        <div class="right-top">
            <p  class="right-top-one">申</p><p  class="right-top-two">登</p>
            <p  class="right-top-three">取</p><p  class="right-top-four">制</p>
            <p  class="right-top-five">暂</p><p  class="right-top-six">诊</p>
            <p  class="right-top-seven">延</p><p  class="right-top-eight">审</p>
            <p  class="right-top-nine">印</p>
        </div>
        <br>
        <div class="grop-search">
             <form  class="floatleft ">
                <select class="grop-search-sel  radium">
                    <option>当天</option>
                    <option>一天内</option>
                    <option>两天内</option>
                    <option>十天内</option>
                    <option>全部</option>
                </select>
            </form>
            <button  class="grop-search-btn" v-on:click="toggle">组合查询</button>
            <br>
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
            <div  class="floatleft  checkbox bmobboximg checkbox-one" id="e"  v-on:click="changecheckbox"></div><p  class="floatleft  allmessage">全库</p>
            <div  class="floatleft checkbox bmobboximg checkbox-two" id="f"  v-on:click="changecheckbox"></div><p  class="floatleft  cannotsee">模糊</p>
            <button  class="select-search-btn" v-on:click="find">提取</button>
        </div>
        <div   class="table-show">
            <table class="table ">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
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
                        <td><!-- <img src="../image/imagehistory.png" class="table-image"> --></td>
                        <td  ></td>
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
                        <td></td>
                        <td>7</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td><!-- <img src="../image/imagehistory.png" class="table-image"> --></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>7</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td><!-- <img src="../image/imagehistory.png" class="table-image"> --></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>7</td>
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
                        <td></td>
                        <td>冰</td>
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
                        <td></td>
                        <td>冰</td>
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
    <div id="bmobbox">
        <div class="bmobbox-top" >
            <p>组合查询</p>
        </div>
        <div class="bmobbox-body">
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">送检日期&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinput  floatleft">
                <p  class="floatleft  zhi">至</p>
                <input  type="text"  class="bmobboxinput  floatleft">
                <div  class="floatleft bmobboximg"  id="h"  v-on:click="changecheckbox"></div>
            </div>
            <div class="bmobboxone">
                <p class="floatleft  bmobboxleft">报告日期&nbsp;:&nbsp;<p>
                <input  type="text"  class="bmobboxinput  floatleft">
                <p  class="floatleft  zhi">至</p>
                <input  type="text"  class="bmobboxinput  floatleft">
                <div  class="floatleft bmobboximg"  id="i"  v-on:click="changecheckbox"></div>
                
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
                <p  class="floatleft  age">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:&nbsp;</p>
                <input  type="text"  class="bmobboxage  floatleft">
                <p  class="floatleft  agezhi">至</p>
                <input  type="text"  class="bmobboxage  floatleft">
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
                <div  class="floatleft bmobboximg" id="a"  v-on:click="changecheckbox"></div><p  class="floatleft">延期报告</p>
                <div  class="floatleft bmobboximg" id="b"  v-on:click="changecheckbox"></div><p  class="floatleft">冰冻报告</p> 
                <div  class="floatleft bmobboximg" id="c"  v-on:click="changecheckbox"></div><p  class="floatleft">补充报告</p> 
                <div  class="floatleft bmobboximg" id="d"  v-on:click="changecheckbox"></div><p  class="floatleft">会诊报告</p>   
            </div>
            <div class="example">
                <p>说明：临床诊断、病理诊断、诊断关键词输入多个关键词时用“l”隔开</p>
            </div>
        </div>
        <div class="bmobbox-bottom">
            <button class="bmobbox-btnone">查询</button>
            <button class="bmobbox-btntwo">取消</button>
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
.bmobboximg{
    width: 20px;
    height: 20px;
    background: url('../assets/images/checkbox.png')  -12px -8px no-repeat;
    margin-right:4px;
}
.bmobboximgtwo{
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
    margin-left: 15px;
    margin-right: 15px;
}
.bmobboxleft{
    width:70px;

    text-align: right;
}
.bmobboxage{
    width:48px;
    height: 24px;
    border:1px solid #e5e5e5;
    border-radius: 3px;
}
#bmobbox{
    width:527px;
    height:660px;
    position:absolute;
    z-index: 10;
    margin-top: -662px;
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
    margin-right: 25px;
}
.table-show .table th:first-child,.table-show .table td:first-child{
    width:30px;
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
.right-top>p{
    display: block;
    width:20px;
    height:20px;
    border-radius: 3px;
    float:left;
    line-height:20px;
    text-align:center;
    color:#fff;
    font-size:14px;
    margin-left: 5px;
}
.right-top .right-top-one{
    background:#a366bd;
}
.right-top .right-top-two{
    background:#4d7cbe;
}
.right-top .right-top-three{
    background:#6bc664;
}
.right-top .right-top-four{
    background:#5acdce;
}
.right-top .right-top-five{
    background:#d99165;
}
.right-top .right-top-six{
    background:#e975c1;
}
.right-top .right-top-seven{
    background:#dc5b5b;
}
.right-top .right-top-eight{
    background:#dfd06d;
}
.right-top .right-top-nine{
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
.grop-search-sel{
    width: 67px;
    height:27px;
}
.grop-search-btn{
    width:76px;
    height:27px;
    background:#428bca;
    margin-left: 15px;
    border:1px solid #428bca;
    color:#fff;
    border-radius:3px;
}
.big-search{
     margin-top:5px;
}
.big-search-input{
    width: 183px;
    height:28px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border:1px solid #ccc;
}
.big-search-sel{
    width:66px;
    height:28px;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.select-search{
    width: 300px;
    height:30px;
    margin-top: 15px;
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
    margin-right: 48px;
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
                    console.log("toggle")
                    $("#bmobbox").slideToggle(1000)
                },
                changecheckbox:function(e){
                   var targetid=$(e.target).attr("id");
                   console.log(targetid);
                    if($("#"+targetid).hasClass("bmobboximg")){
                    $("#"+targetid).removeClass("bmobboximg").addClass("bmobboximgtwo");
                    }else{
                    $("#"+targetid).removeClass("bmobboximgtwo").addClass("bmobboximg"); 
                    }
                }
               }
                    
        //    gettablemessage:function(){
        //     var self=this;
        //      $.ajax({
        //     url: 'api/hello/',
        //     type: 'POST',
        //     dataType: 'json',
        //     data:{
              
        //     },
        //     cache: false,
        //     error: function(error){
        //         if(isMounted(self)){
        //             self.setState({isLoading:false,loadErr:true});
        //         }
        //     },
        //     success:function(error){
        //         console.log("______")
        //     }
        // }
        //    }
                   
                    };

</script>