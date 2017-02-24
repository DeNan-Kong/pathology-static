<template>
    <div>   
    <div class="modal-dialog modal-materials">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button> -->
                <p class="modal-title" id="myModalLabel">
                   取材信息
                </p>
            </div>
            <div class="modal-body">
                <div style="margin-top:10px;">
                <el-table
                    :data="tableData"
                    border
                    height="154"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="任务来源"
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="材块号"
                      width="72">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="取材部位"
                       width="164">
                    </el-table-column>
                    <el-table-column
                      prop="doctor"
                      label="材块数"
                      width="70">
                    </el-table-column>
                    <el-table-column
                      prop="n"
                      label="单位"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="a"
                      label="取材医生"
                       width="90">
                    </el-table-column>
                    <el-table-column
                      prop="ad"
                      label="取材日期"
                       width="100">
                    </el-table-column>
                    <el-table-column
                      prop="da"
                      label="制片状态"
                      width="132">
                    </el-table-column>
                  </el-table>
                </div>
                <textarea class="el-table__body-wrapper" style="height:176px;margin-top:20px"></textarea>
            </div>
        </div>
      </div>
    </div>
</template>
<style>
.modal-materials .modal-content{
    margin-top: 30%;
    margin-left: -20%;
    width:828px;
    height: 426px;
} 
.modal-materials .modal-header{
    width: 826px;
}
.modal-materials .modal-title{
    width:500px;
}
.modal-materials .modal-body{
    padding:0px 26px;
}
.modal-materials textarea{
    width:100%;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    overflow: auto;
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
