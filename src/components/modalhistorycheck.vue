<template>
  <div>   
    <div class="modal-dialog modal-history">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;
                </div>
                <p class="modal-title" id="myModalLabel">
                    历次检查记录列表
                </p>
            </div>
            <div class="modal-body">
              <div>
                <el-table
                    :data="tableData3"
                    border
                    height="162"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="病理号"
                      width="82">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="病人ID"
                      width="126">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="姓名"
                       width="90">
                    </el-table-column>
                    <el-table-column
                      prop="doctor"
                      label="性别"
                      width="70">
                    </el-table-column>
                    <el-table-column
                      prop="n"
                      label="年龄"
                      width="70">
                    </el-table-column>
                    <el-table-column
                      prop="a"
                      label="住院号"
                       width="122">
                    </el-table-column>
                    <el-table-column
                      prop="ad"
                      label="初诊医生"
                       width="102">
                    </el-table-column>
                    <el-table-column
                      prop="da"
                      label="主诊医生"
                      width="102">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="审核医生"
                      width="102">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="报告日期"
                      width="136">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="history-bottom">
                  <div class="floatleft history-content">
                    <p class="history-col floatleft">肉眼所见：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                  <div class="floatleft history-content history-right">
                    <p class="history-col floatleft">诊断意见：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                  <div class="floatleft history-content">
                    <p class="history-col floatleft">冰冻结果：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                  <div class="floatleft history-content history-right">
                    <p class="history-col floatleft">初诊意见：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                  <div class="floatleft history-content">
                    <p class="history-col floatleft">补充意见：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                  <div class="floatleft history-content history-right">
                    <p class="history-col floatleft">主诊意见：</p>
                    <textarea class="scroll-flow"></textarea>
                  </div>
                </div>
                
        </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal -->
</div>
</template>
<style>
.modal-history .modal-content{
    margin-top: 30%;
    margin-left: -37%;
    width:1054px;
    height: 496px;
} 
.modal-history .modal-header{
    width: 1052px;
}
.modal-history .modal-title{
    width:500px;
}
.modal-history .modal-body{
    padding:10px 20px 0px;
}
.history-bottom{
  width:100%;
  height: 260px;
  margin-top: 13px;
}
.history-content{
  width:506px;
  height: 82px;
  margin-top: 3px;
}
.history-col{
  width:75px;
  height: 20px;
}
.history-content textarea{
  width:400px;
  height: 75px;
  float:left;
  border:1px solid #c9c9c9;
  overflow: auto;
}
.history-right{
  padding-left: 30px;
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
