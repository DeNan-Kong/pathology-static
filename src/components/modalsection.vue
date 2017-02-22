<template>
    <div>   
    <div class="modal-dialog modal-section">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button> -->
                <p class="modal-title" id="myModalLabel">
                    切片信息
                </p>
            </div>
            <div class="modal-body">
                <div class="frozen-content" style="border:none">
                 <input type="radio" class="floatleft cytology-col-radio" name="section-score"> <p class="floatleft">Ⅰ级</p>
                 <input type="radio" class="floatleft cytology-col-radio" name="section-score" style="margin-left:5px;"> <p class="floatleft">Ⅱ级</p>
                 <input type="radio" class="floatleft cytology-col-radio" name="section-score" style="margin-left:5px;"> <p class="floatleft">Ⅲ级</p>
                 <p class="floatleft" style="margin-left:25px;">切片总数：3</p>
                 <button class="section-btn">切片评级</button>
                </div>
                <el-table
                  :data="tableData3"
                  border
                  style="width: 100%"
                  height="320"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="35">
                  </el-table-column>
                  <el-table-column
                    label="任务来源"
                    width="76">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="蜡块号"
                    width="92">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="切片条码号"
                    width="100">
                    <template scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                  <el-table-column
                    label="切片说明"
                    width="96">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="切片评级"
                    width="72">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="不良因素"
                    width="80">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    label="评级人"
                    width="112">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="备注"
                    width="66">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="切片状态"
                    width="80">
                    <template scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                </el-table>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
    </div>
</template>
<style>
.modal-section .modal-content{
    margin-top: 30%;
    margin-left: -232px;
    width:852px;
    height: 430px;
} 
.modal-section .modal-body{
  padding-top: 0px;
}
.modal-section .modal-header{
   width:850px;
}
.frozen-content{
  height: 30px;
  line-height: 30px;
}
.section-btn{
  width:74px;
  height: 24px;
  margin-top: 3px;
  color:#fff;
  line-height: 24px;
  background:#428bca;
  border-radius: 3px;
  margin-left: 498px; 
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
