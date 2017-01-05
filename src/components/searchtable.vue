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
            <button  class="grop-search-btn">组合查询</button>
            <br>
        </div>
        <div class="big-search">
            <input type="text"  class="floatleft big-search-input ">
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
            <input type="checkbox" class="floatleft  checkbox-one"><p  class="floatleft  allmessage">全库</p>
            <input type="checkbox" class="floatleft  checkbox-two"><p  class="floatleft  cannotsee">模糊</p>
            <button  class="select-search-btn" v-on:click="gettablemessage">提取</button>
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
    
</div>
</template>
<style>
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
    border-radius: 4px;
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
    border-radius:5px;
}
.big-search{
     margin-top:5px;
}
.big-search-input{
    width: 183px;
    height:28px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
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
    width:17px;
    height:17px;
    border:1px solid #ccc;
    background:#fff;
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
    border-radius: 5px;
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
import $ from "jQuery"
    export default{
        data(){
            return{
                name: 'Vue.js',
            }
        },
        methods:{
           async  gettablemessage(){
                const response = await fetch('/api/hello');
                if(response.ok){
                    console.log("__________________");
                    this.content = await response.text();
                    console.log(this.content);
                  
                    var jsondata=JSON.parse(this.content);

                    console.log(jsondata.length);
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
                  },     
                    }
</script>