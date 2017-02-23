<template>
    <div>   
    <div class="modal-dialog modal-advice">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <p class="modal-title" id="myModalLabel">
                    会诊意见
                </p>
            </div>
            <div class="modal-body">
                <el-table
                  :data="tableData3"
                  border
                  style="width: 100%"
                  height="260"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    label="病理号"
                    width="72">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="90">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="性别"
                    width="70">
                    <template scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                  <el-table-column
                    label="年龄"
                    width="70">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="科室"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="诊断结果"
                    width="90">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    label="报告时间"
                    width="112">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="会诊意见"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="会诊单位"
                    width="100">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="会诊时间"
                    width="112">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                </el-table>

                <form class="floatright">
                    <select class="adviceselect">
                        <option > 
                           100%
                        </option>
                    </select>
                </form>
                <p class="floatright" style="margin-top:9px;">会诊符合率：</p>
            </div>
             <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">取消
                </button>
                <button type="button" class="btn btn-primary">
                    确定
                </button>
            </div>
        </div><!-- /.modal-content -->

    </div><!-- /.modal -->
</div>
</template>
<style>
.modal-advice .modal-content{
    margin-top: 30%;
    margin-left: -30%;
    width:948px;
    height: 400px;
} 
.modal-advice .modal-body{
  padding: 3px 20px 0px;
  height: 305px;
}
.modal-advice .modal-header{
   width:946px;
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
</style>
<script>
    export default{
        data(){
            return{
               
            }
        },
        components:{
            
        },
        methods:{
          handleSelectionChange(val) {
        this.multipleSelection = val;
      }
        }
    }
</script>
