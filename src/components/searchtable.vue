<template>
    <div> 
    <div  id="middle-right">
        <div  class="right-inner">    
        <div class="right-top">
            <!-- <button class="right-top-one shen  rightbtnone" v-on:click="shenbtn">申</button> --><button  class="rightbtntwo right-top-two  deng" v-on:click="dengbtn">登</button>
            <button  class="rightbtnthr right-top-three qu" v-on:click="qubtn">取</button><button  class="rightbtnfou right-top-four zhizi" v-on:click="zhibtn">制</button>
            <button  class="rightbtnfiv right-top-five zan" v-on:click="zanbtn">暂</button><button  class="rightbtnsix right-top-six zhen" v-on:click="zhenbtn">诊</button>
            <button  class="rightbtnsev right-top-seven yan" v-on:click="yanbtn">延</button><button  class="rightbtneig right-top-eight  shen2" v-on:click="shen2btn">审</button>
            <button  class="rightbtnnin right-top-nine yin" v-on:click="yinbtn">印</button>
             <el-checkbox-group v-model="checkList">
                <el-checkbox label="全库"></el-checkbox>
            </el-checkbox-group>
        </div>
        <br>
        <div class="grop-search ">
            <button class="grop-search-line grop-search-line1 floatleft  grop-search-lines"  v-on:click="toggle"><div class="grop-search-img2 grop-search-img  grop-search-imgs" ></div></button>
            <button  class="grop-search-btn grop-search-btn1 floatleft  grop-search-btns" v-on:click="toggle">组合查询</button>
            <p  class="floatleft">送检时间:</p>
             <form  class="floatleft ">
                <select class="grop-search-sel  radium">
                    <option v-for="item in searchTableData.selectTimeList">{{item.name}}</option>
                </select>
            </form>
        </div>
        <div class="big-search">
            <input type="text"  class="floatleft big-search-input "  id="app">
            <img src="../assets/images/search.png.png"   class="big-search-img">
            <form  class="floatleft ">
                <select class="big-search-sel  ">
                    <option v-for="item in searchTableData.selectNoList">{{item.name}}</option>
                    
                </select>
            </form>
            <button  class="select-search-btn floatleft" @click="find">提取</button>
        </div>
        
        <div class="clear"></div>
        <div   class="table-show" >
            <el-table :data="tabledatas.orderlist" border style="width: 100%" height="400">
            <el-table-column label="" width="53" fixed>
              <template scope="scope">
               <!--  <el-popover trigger="hover" placement="top">
                <p>相关诊断</p> -->
                <div slot="reference" class="name-wrapper">
                <el-tooltip class="item"  content="相关诊断" placement="top">
                <el-tag>
                <div >
                    <p class="relateimgon  relateclick"  @click="showrelate" :id='scope.row.patient.birthday'></p>
                </div>
                </el-tag>
                </el-tooltip>    
                </div>
            </el-popover>
            </template>
            </el-table-column>
             <el-table-column label="" width="20" fixed>
              <template scope="scope">
                <div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="病理号" width="114" fixed> 
              <template scope="scope" >
                <span>{{ scope.row.pathologyNo}}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="72" fixed>
              <template scope="scope">
                <span>{{ scope.row.patient.patientName}}</span>
              </template>
            </el-table-column>
            <el-table-column label="性别" width="40">
              <template scope="scope">
                <span>{{ scope.row.patient.sex}}</span>
              </template>
            </el-table-column>
            <el-table-column label="年龄" width="40">
              <template scope="scope">
                <span>{{ scope.row.patient.age}}</span>
              </template>
            </el-table-column>
            <el-table-column label="住院号" width="114">
              <template scope="scope">
                <span>{{ scope.row.inhospitalId }}</span>
              </template>
            </el-table-column>
            <el-table-column label="送检单位" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid }}</span>
              </template>
            </el-table-column>
            <el-table-column label="送检科室" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid }}</span>
              </template>
            </el-table-column>
            <el-table-column label="标本名称" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid }}</span>
              </template>
            </el-table-column>
            <el-table-column label="临床诊断" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid}}</span>
              </template>
            </el-table-column>
            <el-table-column label="诊断意见" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid}}</span>
              </template>
            </el-table-column>
            <el-table-column label="主诊医生" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid}}</span>
              </template>
            </el-table-column>
            <el-table-column label="送检日期" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid}}</span>
              </template>
            </el-table-column>
            <el-table-column label="报告日期" width="114">
              <template scope="scope">
                <span>{{ scope.row.applicationid}}</span>
              </template>
            </el-table-column> 
          </el-table>   
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
                <el-checkbox-group v-model="bmobCheckList">
                    <el-checkbox label="延期报告"></el-checkbox>
                    <el-checkbox label="冰冻报告"></el-checkbox>
                    <el-checkbox label="补充报告"></el-checkbox>
                    <el-checkbox label="会诊报告"></el-checkbox>
                </el-checkbox-group>
                <!-- <div  class="noselectbox  a floatleft"   v-on:click="changecheckbox1"></div><p  class="floatleft">延期报告</p>
                <div  class="noselectbox b floatleft"   v-on:click="changecheckbox2"></div><p  class="floatleft">冰冻报告</p> 
                <div  class="noselectbox c floatleft"   v-on:click="changecheckbox3"></div><p  class="floatleft">补充报告</p> 
                <div  class="noselectbox d floatleft"  v-on:click="changecheckbox4"></div><p  class="floatleft">会诊报告</p> -->   
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
    <div class="relatelist">
        <relatetable :relationshow="method" :relationdate="(relateListDatas)" />
    </div>    
</div>
</template>
<style>
 body .table-show .el-tag{
    background-color:transparent;
    height: 30px;
}
 body .table-show .el-popover{
    width: 10px;
}
 .el-table tr{
    
    text-overflow:ellipsis;
}
body .el-table .cell{
    color:#333;
    padding: 0px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    white-space:nowrap; 
    text-overflow:ellipsis;
}
.relateimgon{
    display: block;
    width: 22px;
    height: 24px;
    background:url('../assets/images/register.png') no-repeat 0 -3px;
}
.relateimgout{
    display: block;
    width: 22px;
    height: 24px;
    background:url('../assets/images/register.png') no-repeat 0 -37px;
}
.relateimgout:hover,.relateimgon:hover{
    cursor:pointer;
}
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
    z-index: 9;
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
    margin-top: 15px;
}
.table-show .table th:first-child,.table-show .table td:first-child{
    width:48px;
}
#middle-right{
    margin-top: -650px;
    margin-left:1066px;
    height:698px;
    padding:10px;
    min-width: 255px;
    background:#fff;
    margin-right:5px;
    overflow-x:auto;
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
    margin-left: 4px;
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
    border:2px solid #20eedd;
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
    margin-right:22px;
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
    width: 135px;
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
.right-top .el-checkbox-group{
    width: 50px;
    float: left;
    margin-left: 5px;
}
.select-search .el-checkbox-group{
    width: 200px;
    float: left;
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
    margin-left: 5px;
    background:#428bca;
    color:#fff;
    border-radius: 3px;
    line-height:20px;
    text-align:center;
    margin-top: 3px;
}
.select-search-btn:hover{
    background:#3577af;
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
.middle-right .right-bottom .activecolor{
    color:#c94646; 
}
.relatelist{
    display: none;
    width: 674px;
    height: 416px;
    background:#fff;
    margin-left:392px;
    margin-top:-530px;
    position:relative;
    z-index: 10;
    box-shadow: -3px -3px 3px  rgba(4,4,4,0.3);
    -moz-box-shadow: -3px -3px 3px  rgba(4,4,4,0.3);
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.grop-search button:hover{

}
body #relatetable .el-table .cell,.el-table__header-wrapper{
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  padding: 0px;
}  
</style>
<script>
import {mapState} from 'vuex';
import $ from "jQuery";
import Calendar from 'components/calendar';
import Relatetable from 'components/relatetable';
    export default{
       data() {
      return {
       checkList: [],
       relateListDatas:{},
       searchTableData:{},
       bmobCheckList:[],
       tabledatas:{}
      }
    }, 
    components:{
        "calendar":Calendar,
        "relatetable":Relatetable
    },
    props:['tableshow'],
    created(){
          this.tableData();
          this.searchTable ();   
    },
        methods:{
            async relateListData () {
            const response = await fetch('/api/hello',{ 
                method: 'POST',
                headers: { 
                    "Content-type": "application/json; charset=UTF-8" 
                }, 
                body: JSON.stringify({ 
                    firstParam: 'yourValue',
                })
            });
            const json = await response.text();
            const data = JSON.parse(json);
            this.relateListDatas = data;
            },
            async tableData () {
            const response = await fetch('/api/test',{ 
                method: 'POST',
                headers: { 
                   "Content-type": "application/json; charset=UTF-8" 
                }, 
                body: JSON.stringify({ 
                    firstParam: 'yourValue',
                })
            });
         const json = await response.text();
            const data = JSON.parse(json);
            this.tabledatas = data;
            console.log(this.tabledatas)
            },
            async searchTable () {
                const response = await fetch('/api/hello',{ 
                    method: 'POST',
                    headers: { 
                        "Content-type": "application/json; charset=UTF-8" 
                    }, 
                    body: JSON.stringify({ 

                    })
                });
                const json = await response.text();
                 const data = JSON.parse(json);
                this.searchTableData = data;
                
            },
            toggle:function(){
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
                   $(".rightbtnsix").siblings().removeClass('insetcolor')
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
            
            },
            showrelate:function(e){
                var vvv=$(e.target).attr('id')
                if($('.relateclick').hasClass('.relateimgon')){
                    console.log("000")
                    $('.relatelist').hide()
                    $('.relateclick').removeClass('.relateimgon').addClass('.relateimgout')
                }else{
                     console.log("111")
                    $('.relatelist').show()
                    $('.relateclick').removeClass('.relateimgout').addClass('.relateimgon')
                }
                this.relateListData ()
            },
            method:function(){
                this.tableshow();
                $('.relatelist').hide()
            },
            handleEdit:function(index, row) {
                console.log(index, row);
              },
            mounted () {
            this.searchTableData();

        },
           }
        };
</script>