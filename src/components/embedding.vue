<template>
    <div>
        <div class="embedding-contains">
            <div class="embedding-top">
               <p class="floatleft embedding-bingnum">病理号:</p>
               <input type="text"  class="floatleft radius common embedding-six">
               <p class="floatleft embedding-five">取材医生:</p>
               <form  class="floatleft embedding-six">
                    <select class="radius common ">
                      <option>欧阳娜娜</option>
                      <option>二</option>
                    </select>
                </form>
                   <input type="radio" checked name="time" class="floatleft radio "><p class="floatleft embedding-four radioleft">24小时</p>
                    <input type="radio" name="time" class="floatleft radio "><p class="floatleft embedding-five radioleft">取材日期:</p>
                    <calendar/>
                    <input type="radio" name="time" class="floatleft radio"><p class="floatleft embedding-five radioleft">时间范围:</p>
                    <calendar/>
                    <p class="floatleft">至</p>
                    <calendar/>
                <a href="" class="floatleft embedding-four">脱钙(0)</a>
                <a href="" class="floatleft embedding-four">冰冻(0)</a>
                <form  class="floatleft embedding-five">
                    <select class="radius common ">
                      <option>未打印</option>
                      <option>已打印</option>
                    </select>
                </form>
                <form  class="floatleft embedding-five">
                    <select class="radius common ">
                      <option>未包埋</option>
                      <option>已包埋</option>
                    </select>
                </form>
                <!-- <p class="floatleft embedding-six rightp"><span class="bmobboximg floatleft checkspan noprint"  @click="noprint"></span>未打印</p>
                <p class="floatleft embedding-six rightp"><span class="bmobboximg floatleft checkspan nocolor" @click="nocolor"></span>已包埋</p> -->
                <button class="floatleft embedding-three" @click="shuju">查询</button>
                <button class="floatleft embedding-three" @click="shuju">默认</button>
            </div>
            <div class="embedding-table">
                 <table class="table">
                    <thead>
                    <tr>
                        <th class="table-three"><p class="bmobboximg tablecheck checkall" @click="checkall"></p></th>
                        <th  class="table-eight">病理号</th>
                        <th class="table-six">任务来源</th>
                        <th class="table-six">材块号</th>
                        <th  class="table-five">姓名</th>
                        <th  class="table-three">性别</th>
                        <th  class="table-three">年龄</th>
                        <th  class="table-five">取材部位</th>
                        <th  class="table-five">材块数</th>
                        <th  class="table-seven">取材医生</th>
                        <th  class="table-five">取材日期</th>
                        <th  class="table-five">材块核对</th>
                        <th  class="table-five">打印状态</th>
                        <th  class="table-five">制片状态</th>
                        <th  class="table-seven">核对时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div class="embedding-bottom">
                <div class="floatleft embedding-bottom-one"><p class="floatleft">提前</p><input type="text" class="floatleft embedding-bottom-text"><p class="floatleft">天确定</p></div>
                <p class="floatleft embedding-bottom-two">当前制片数：4</p>
                <button class="floatleft">标签打印</button>
                <button class="floatleft">HE染色</button>
                <button class="floatleft">玻片核对</button>
                <button class="floatleft">移交表单打印</button>
            </div>
        </div>
    </div>
</template>
<style>
.embedding-top .el-date-editor.el-input{
    margin-left: -15px;
}
.radioleft{
    text-align: left;
}
body div .embedding-contains .embedding-top .el-date-editor .el-input{
    width: 123px;
}
.embedding-contains{
    margin: 6px 5px;
    height: 620px;
    min-width: 1340px;
}
.embedding-top{
    width: 100%;
    height:38px;
    line-height: 38px;
    text-align: center;
}
.embedding-bingnum{
    width: 3.5%;
}
.embedding-one{
    width: 1%;
}
.embedding-five{
    width: 4.5%;
}
.embedding-four{
    width: 4%;
}
.embedding-six{
    width: 6%;
}
.embedding-top .radio{
    margin-top: 13px;
}
.embedding-thre{
    width: 3%;
}
.embedding-top button{
    width: 4%;
    height:24px;
    background: #428bca;
    border-radius: 3px;
    margin-left:5px;
    margin-top: 7px;
    line-height: 24px;
    color:#fff;
}
.embedding-top button:hover{
    background: #3577af;
    }
.embedding-table{
    width: 100%;
    height: 528px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.embedding-bottom{
    width: 100%;
    height: 36px;
    margin-top: 5px;
    line-height: 36px;
}
.embedding-bottom button{
    width: 6%;
    height: 36px;
    background: #428bca;
    border-radius: 3px;
    color:#fff;
    text-align: center;
    margin-left: 2%;
}
.embedding-bottom button:hover{
    background: #3577af;
}
.embedding-bottom p{
    display: block;
}
.embedding-bottom-one{
    margin-left: 51%;
}
.embedding-bottom-text{
    width: 22px;
    height: 22px;
    margin: 7px;
}
.embedding-bottom-two{
    margin-left:20px;
}
</style>
<script>
import $ from "jQuery"
import Calendar from 'components/calendar';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
           "calendar":Calendar, 
        }
    }
</script>