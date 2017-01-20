<template>
    <div class="filmmaking-main">
        <div class="filmmaking-contains">
            <div class="filmmaking-top">
                <p class="floatleft top-p-one">病理号:</p>
                <input type="text"  class="floatleft top-ipt radius common"> 
                 <p class="floatleft top-p-two">分组:</p>
                 <form  class="floatleft top-form">
                    <select class="radius common ">
                      <option>一</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-three">制片时间:</p>
                <calendar/>
                <p class="floatleft top-p-four">时间范围:</p>
                <calendar/>
                <p class="floatleft top-p-six">至</p>
                <calendar/>
                <p class="floatleft top-p-five"><input type="radio" checked>24小时范围内</p>
                <button class="floatleft top-btn" @click="shuju">查询</button>
                <p class="floatleft top-p-four rightp"><span class="bmobboximg floatleft checkspan noprint"  @click="noprint"></span>未打印</p>
                <p class="floatleft top-p-four rightp"><span class="bmobboximg floatleft checkspan nocolor" @click="nocolor"></span>未染色</p>
                <p class="floatleft top-p-four rightp"><span class="bmobboximg floatleft checkspan nocheck" @click="nocheck"></span>未核对</p>
            </div>
            <div class="filmmaking-table">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="table-three "><p class="bmobboximg tablecheck checkall" @click="checkall"></p></th>
                        <th  class="table-eight">病理号</th>
                        <th class="table-six">病理来源</th>
                        <th class="table-six">任务来源</th>
                        <th class="table-five">制片子号</th>
                        <th  class="table-five">制片说明</th>
                        <th  class="table-five">姓名</th>
                        <th  class="table-three">性别</th>
                        <th  class="table-three">年龄</th>
                        <th  class="table-five">申请人</th>
                        <th  class="table-five">制片人</th>
                        <th  class="table-seven">制片时间</th>
                        <th  class="table-five">制片状态</th>
                        <th  class="table-five">打印状态</th>
                        <th  class="table-five">制片说明</th>
                        <th  class="table-five">玻片核对</th>
                        <th  class="table-seven">核对时间</th>
                        <th  class="table-three">切片评级</th>
                        <th  class="table-five">评级人</th>
                        <th  class="table-five">染色人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in list">
                        <td>{{data[0]}}</td>
                        <td>{{data.applicationid}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="filmmaking-adddelete">
               <p class="floatleft top-p-one">病理号:</p>
               <input type="text"  class="floatleft top-ipt radius common">
               <p class="floatleft top-p-seven">任务来源:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-two">序号:</p> 
                <form  class="floatleft top-p-four">
                    <select class="radius">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form> 
                <p class="floatleft top-p-seven">制片说明:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-three">制片人:</p>
               <form  class="floatleft top-p-three">
                    <select class="radius common ">
                      <option>免疫组化</option>
                      <option>二</option>
                    </select>
                </form>
                <p class="floatleft top-p-four">制片时间:</p>
                <calendar/>
                <button class="floatleft add-btn ">添加</button>
                <button class="floatleft delete-btn">删除</button>
            </div>
            <div class="clear"></div>
            <div class="filmmaking-bottom">
                <p class="floatleft">当前制片数：<span>(4)</span></p>
                <button class="floatleft filmmaking-bottom-btn">标签打印</button>
                <button class="floatleft filmmaking-bottom-btn">HE染色</button>
                <button class="floatleft filmmaking-bottom-btn">玻片核对</button>
                <button class="floatleft filmmaking-bottom-btnlong filmmaking-bottom-btn">移交表单打印</button>
            </div>
        </div>
    </div>
</template>
<style>
 .filmmaking-main{
    margin-top: 5px;
    height: 660px;
 }
 .filmmaking-contains{
    margin: 10 auto;
    height: 620px;
 } 
 .filmmaking-top{
    height: 40px;
 }
.filmmaking-top p{
    display: block;
    line-height: 40px;
    text-align: center;
} 
.top-p-one{
    width: 4%;
} 
.top-ipt{
    width: 8%;
}
.top-p-two{
    width: 3%;
}
.filmmaking-top .rightp{
    text-align: left;
}
.top-form{
    width: 3%;
}
.top-p-three{
    width: 5%;
}
.top-p-four{
    width: 6%;
} 
.top-p-five{
    width: 8%;
}
.top-p-seven{
    width:7%;
}
.top-btn{
    width:4%;
    height: 24px;
    background:#428bca; 
    margin-top: 8px;
    border-radius: 3px;
    color:#fff;
}
.top-p-six{
    width:2%;
}
.filmmaking-table{
    width: 100%;
    height: 500px;
    border-top:1px solid #ccc;
    border-bottom: 1px solid #ccc;
    overflow-y: scroll; 
}
.filmmaking-adddelete{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.add-btn,.delete-btn{
    width:4%;
    height: 24px;
    background:#428bca; 
    margin-top: 8px;
    border-radius: 3px;
    color:#fff;
    margin-left: 2%;
    line-height: normal;
}
.filmmaking-bottom{
    height: 40px;
}
.filmmaking-bottom-btn{
    width: 5%;
    height: 32px;
    background:#428bca; 
    margin-top: 3px;
    border-radius: 3px;
    color:#fff;
    margin-left: 2%;
    line-height: normal;
}
.filmmaking-bottom p{
    display: block;
    margin-left: 47%;
    line-height: 40px;
}
.filmmaking-bottom-btnlong{
    width: 7%;
}
.table-two{
    width: 2%;
}
.table-three{
    width:3%;
}
.table-four{
    width:4%;
}
.table-five{
    width:5%;
}
.table-six{
    width:6%;
}
.table-seven{
    width:7%;
}
.table-eight{
    width:8%;
}
.table{
    text-align: center;
    line-height: 40px;
}
.checkspan{
    margin-left: 2%;
    margin-top: 12px;
}
.tablecheck{
    margin:auto;
}
body .filmmaking-table .table{
    height: 32px;
}
</style>
<script>
import Calendar from 'components/calendar';
import $ from "jQuery"
    export default{
        data(){
            return{
               
            }
        },
        components:{
           "calendar":Calendar
        },
        methods:{
            noprint:function(){
            if($(".noprint").hasClass("bmobboximg")){
                $(".noprint").removeClass("bmobboximg").addClass("bmobboximgtwo");
                }else{
                $(".noprint").removeClass("bmobboximgtwo").addClass("bmobboximg"); 
                }
            },
            nocolor:function(){
            if($(".nocolor").hasClass("bmobboximg")){
                $(".nocolor").removeClass("bmobboximg").addClass("bmobboximgtwo");
                }else{
                $(".nocolor").removeClass("bmobboximgtwo").addClass("bmobboximg"); 
                }
            },
            nocheck:function(){
             if($(".nocheck").hasClass("bmobboximg")){
                    $(".nocheck").removeClass("bmobboximg").addClass("bmobboximgtwo");
                    }else{
                    $(".nocheck").removeClass("bmobboximgtwo").addClass("bmobboximg"); 
                    }   
            },
            checkall:function(){
                if($(".checkall").hasClass("bmobboximg")){
                    $(".checkall").removeClass("bmobboximg").addClass("bmobboximgtwo");
                    }else{
                    $(".checkall").removeClass("bmobboximgtwo").addClass("bmobboximg"); 
                    }   
            },
            shuju:function(){
                var _self = this;
                $.ajax({
                            type: 'POST',
                            url: '/api/hello',
                            data:{
                                id:0
                            },
                            success:function(data) {
                                var len=data.length;
                                console.log(data)
                               var obj=JSON.parse(data);
                                _self.list=obj.slice(0,len-1)
                                console.log( _self.list)
                            }
                        });
            }
        }
    }
</script>