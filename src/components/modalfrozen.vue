<template>
    <div>   
    <div class="modal-dialog modal-technical">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button> -->
                <p class="modal-title" id="myModalLabel">
                    冰冻报告&nbsp;&nbsp;病理号：000312163131&nbsp;&nbsp;李伟&nbsp;男&nbsp;31岁
                </p>
            </div>
            <div class="modal-body">
                <div class="frozen-content">历次冰冻检查记录：（2）</div>
                <div>
                <el-table
                    :data="tableData3"
                    border
                    height="154"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="序号"
                      width="54">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="接收时间"
                      width="127">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="报告日期"
                       width="127">
                    </el-table-column>
                    <el-table-column
                      prop="doctor"
                      label="报告医生"
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="n"
                      label="审核医生"
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="a"
                      label="冰冻符合"
                       width="84">
                    </el-table-column>
                    <el-table-column
                      prop="ad"
                      label="审核状态"
                       width="71">
                    </el-table-column>
                    <el-table-column
                      prop="da"
                      label="打印状态"
                      width="71">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="制片用时"
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="ress"
                      label="报告用时"
                       width="84">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="frozen-content" style="border:none">冰冻结果：</div>
                <textarea class="el-table__body-wrapper" style="height:176px;"></textarea>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
    </div>
</template>
<style>
.modal-technical .modal-content{
    margin-top: 30%;
    margin-left: -232px;
    width:828px;
    height: 426px;
} 
/*.modal-frozen .modal-header{
    width: 927px;
}
.modal-frozen .modal-title{
    width:500px;
}
.modal-frozen .modal-body{
    padding:0px 26px;
}
.frozen-content{
    height: 30px;
    line-height: 30px;
    border-bottom:1px solid #d9d9d9;      
}
.modal-frozen textarea{
    width:100%;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    overflow: auto;
}*/
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
