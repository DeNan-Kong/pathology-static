<template>
  <div>   
    <div class="modal-dialog modal-fill">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;
                </div>
                <p class="modal-title" id="myModalLabel">
                    补取列表
                </p>
            </div>
            <div class="modal-body">
              <div>
                <el-table
                    :data="tableData3"
                    border
                    height="258"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="医嘱号"
                      width="82">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="类型"
                      width="82">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="蜡块号"
                       width="90">
                    </el-table-column>
                    <el-table-column
                      prop="doctor"
                      label="数量"
                      width="70">
                    </el-table-column>
                    <el-table-column
                      prop="n"
                      label="申请医生"
                      width="110">
                    </el-table-column>
                    <el-table-column
                      prop="a"
                      label="申请日期"
                       width="120">
                    </el-table-column>
                    <el-table-column
                      prop="ad"
                      label="状态"
                       width="80">
                    </el-table-column>
                    <el-table-column
                      prop="da"
                      label="备注"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="执行人"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="报告日期"
                      width="120">
                    </el-table-column>
                  </el-table>
                </div>        
        </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal -->
</div>
</template>
<style>
.modal-fill .modal-content{
    margin-top: 30%;
    margin-left: -37%;
    width:996px;
    height: 356px;
} 
.modal-fill .modal-header{
    width: 994px;
}
.modal-fill .modal-title{
    width:500px;
}
.modal-fill .modal-body{
    padding:10px 20px 0px;
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
