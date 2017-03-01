<template>
    <div>   
    <div class="modal-dialog modal-materials-check">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <p class="modal-title" id="myModalLabel">
                    材块核对
                </p>
            </div>
            <div class="modal-body">
                <div class="materialsCheckTop">
                    <div class="modalCheckRow">
                        <div class="floatleft colOne">病理号：</div>
                        <form  class="floatleft textleft" >
                            <select class="radius common" style="width:106px;">
                                <option></option> 
                            </select>
                        </form>
                        <p class="floatleft colOne" style="width:76px;">取材医生：</p>
                        <form  class="floatleft colOneSecond textleft" >
                            <select class="radius common" style="width:106px;">
                                <option></option> 
                            </select>
                        </form>
                        <form  class="floatleft">
                            <select class="radius common" style="width:76px;">
                               <option></option>
                            </select>
                        </form>
                        <form  class="floatleft">
                            <select class="radius common" style="width:76px;">
                              <option></option>
                            </select>
                        </form>
                        <a href="" class="floatleft" style="width:76px;">脱钙(0)</a>
                        <a href="" class="floatleft" style="width:76px;">冰冻(0)</a>
                        <button class="floatleft">查询</button>
                        <button class="floatleft">默认</button>
                    </div>
                    <div class="clear"></div>
                    <div class="modalCheckRow">
                        <input type="radio" checked name="time" class="floatleft radio ">
                        <p class="floatleft embedding-four">24小时</p>
                        <input type="radio" name="time" class="floatleft radio timeSelect">
                        <p class="floatleft embedding-five">取材日期:</p>
                        <calendar/>
                        <input type="radio" name="time" class="floatleft radio timeSelect">
                        <p class="floatleft embedding-five">时间范围:</p>
                        <div class="largeSize">
                        <el-date-picker
                          v-model="value6"
                          type="daterange"
                          placeholder="选择日期范围">
                        </el-date-picker>
                        </div>
                    </div>
                    <div class="elTable scroll-flow">
                        <el-table
                        :data="tableData"
                        border
                        height="310"
                        style="width: 100%"
                        @selection-change="handleSelectionChange"
                        highlight-current-row
                        @current-change="handleCurrentChange">
                        <el-table-column
                          type="selection"
                          width="40">
                        </el-table-column>
                        <el-table-column
                          label="病理号"
                          width="120"
                          fixed>
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="任务来源"
                          width="110">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="材块号"
                          show-overflow-tooltip
                          width="80">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          label="姓名"
                          width="96">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="性别"
                          width="56">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="年龄"
                          show-overflow-tooltip
                          width="56">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          label="取材部位"
                          width="120">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="材块数"
                          width="70">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="取材医生"
                          width="90"
                          show-overflow-tooltip>
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          label="取材日期"
                          width="110">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="材块核对"
                          width="90">
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="打印状态"
                          width="90"
                          show-overflow-tooltip>
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="制片状态"
                          width="90"
                          show-overflow-tooltip>
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="核对时间"
                          width="110"
                          show-overflow-tooltip>
                          <template scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                      </el-table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p class="floatleft" style="margin-left:230px;margin-right:10px;">当前待包埋数：4</p>
                <p class="floatleft embedding-bottom-two embedding-bottom-p" style="margin-left:10px;">材块数：4</p>
                <div class="floatleft embedding-bottom-div"><p class="floatleft" style="margin-left:20px;">提前</p>
                <input type="text" class="floatleft inputStyle"><p class="floatleft">天确定</p>
                <button  style="width:90px;height:30px;float:right;margin-top:-7px;">移交打印表</button>
                <button class="buttonStyle">包埋确认</button>
                <button class="buttonStyle">标签打印</button>
                <button class="buttonStyle">材块核对</button>               
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
    </div>
</template>
<style>
.modal-materials-check .modal-content{
    margin-top: 20%;
    margin-left: -30%;
    width:1000px;
    height: 500px;
}
.modal-materials-check .modal-body{
  padding: 10px 20px 0px;
  width:100%;
  height: 405px;
}
.modal-materials-check .modal-header{
   width:998px;
   height: 45px;
}
.adviceselect{
  width:140px;
  height: 24px;
  border:1px solid #c9c9c9;
  border-radius: 3px;
  margin-top: 9px;
}
.modal-advice .modal-footer{
  height: 40px;
  padding-top: 10px;
}
.colOne{
    width:56px;
}
.modalCheckRow{
    height: 24px;
    line-height: 24px;
}
.modal-materials-check .common{
    margin-top: 0px;
    margin-right: 26px;
}
.modal-materials-check button{
   width: 60px;
    height:24px;
    background: #428bca;
    border-radius: 3px;
    margin-left:20px;
    line-height: 24px;
    color:#fff; 
}
.timeSelect{
    margin-left: 20px !important;
    margin-right: 5px !important;
}
.largeSize .el-date-editor.el-input{
    width:240px;
    margin-left: 10px;
}
.elTable{
    width:100%;
    height: 310px;
    overflow-x: auto;
    overflow-y: auto;
}
.modal-materials-check .el-table__fixed{
    height: 300px !important;
}
.modal-materials-check .buttonStyle{
    float:right;
    width:80px;
    height: 30px;
    margin-top: -7px;
}
.inputStyle{
    width:24px;
    height: 24px;
    margin-right: 5px;
    margin-left: 5px;
}
.modal-materials-check .modal-footer{
    border:none;
}
</style>
<script>
import Calendar from 'components/calendar';    
    export default{
        data(){
            return{
               value6: '',
               tableData: [{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            },{
                name: '王小虎'
            }]
        }
        },
        components:{
            "calendar":Calendar
        },
        methods: {
            handleSelectionChange(val) {
            this.multipleSelection = val;
            },
         handleCurrentChange(val) {
        this.currentRow = val;
            }
        }
    }
</script>
