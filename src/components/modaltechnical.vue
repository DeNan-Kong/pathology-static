<template>
    <div>   
    <div class="modal-dialog modal-technical">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <p class="modal-title" id="myModalLabel">
                    技术医嘱&nbsp;&nbsp;病理号：000312163131
                </p>
            </div>
            <div class="modal-body">
                <div>
                <el-table
                    :data="initialData.doctorAdviceTypeList"
                    border
                    height="330"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="医嘱号"
                      show-overflow-tooltip
                      width="88">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="类型"
                      show-overflow-tooltip
                      width="82">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="蜡块号"
                       width="98">
                    </el-table-column>
                    <el-table-column
                      prop="doctor"
                      label="数量"
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="n"
                      label="申请医生"
                      show-overflow-tooltip
                      width="86">
                    </el-table-column>
                    <el-table-column
                      prop="a"
                      label="申请日期"
                      show-overflow-tooltip
                       width="92">
                    </el-table-column>
                    <el-table-column
                      prop="ad"
                      label="状态"
                       width="86">
                    </el-table-column>
                    <el-table-column
                      prop="da"
                      label="医嘱说明"
                      show-overflow-tooltip
                      width="84">
                    </el-table-column>
                    <el-table-column
                      prop="me"
                      label="执行人"
                      show-overflow-tooltip
                      width="76">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="tech-row">
                  <p class="floatleft">医嘱类型&nbsp;：&nbsp;</p>
                  <form class="floatleft">
                    <select class="tech-one">
                        <option v-for="(item,index) in initialData.doctorAdviceTypeList" :vlue="item.id" >{{item.name}}</option>
                    </select>
                  </form>
                  <p class="floatleft" style="margin-left:34px;">蜡块号&nbsp;：&nbsp;</p>
                  <form class="floatleft">
                    <select class="tech-two">
                        <option v-for="(item,index) in initialData.materialNoList" :vlue="item.id" >{{item.name}}</option>
                    </select>
                  </form>
                  <p class="floatleft" style="margin-left:34px;">数量&nbsp;：&nbsp;</p>
                  <input type="text" class="tech-three">
                  <button class="tech-four">增加</button>
                </div>
                <div class="clear"></div>
                <div class="tech-row tech-row-two">
                  <p class="floatleft">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;：&nbsp;</p>
                  <input type="text" class="tech-five floatleft">
                  <button class="floatleft tech-four" style="margin-left:22px;">删除</button>
                </div>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
    </div>
</template>
<style>
.modal-technical .modal-content{
    margin-top: 30%;
    margin-left: -22%;
    width:828px;
    height: 462px;
} 
.modal-technical .modal-header{
    width: 826px;
}
.modal-technical .modal-title{
    width:500px;
}
.modal-technical .modal-body{
    padding:10px 22px 0px;
}
.frozen-content{
    height: 30px;
    line-height: 30px;
    border-bottom:1px solid #d9d9d9;      
}
.tech-one{
  width: 86px;
  height: 24px;
  border:1px solid #d9d9d9; 
  border-radius: 3px;
}
.tech-two{
  width: 254px;
  height: 24px;
  border:1px solid #d9d9d9; 
  border-radius: 3px;
}
.tech-row{
  margin-top: 5px;
  width: 100%;
  height:26px;
  line-height: 26px;
}
.tech-row-two{
  margin: 0px;
}
.tech-three{
  width:102px;
  height: 24px;
  border:1px solid #d9d9d9; 
  border-radius: 3px;
}
.tech-four{
  width:56px;
  height: 24px;
  margin-top: 3px;
  color:#fff;
  line-height: 24px;
  background:#428bca;
  border-radius: 3px;
  margin-left: 18px; 
}
.tech-five{
  width:624px;
  height: 24px;
  border:1px solid #d9d9d9; 
  border-radius: 3px;
  margin-top: 3px;
}
button:hover{
  background:#3577af;
}
</style>
<script>
    export default{
        data(){
            return{
                initialData:{}
            }
        },
        components: {},
        methods: {
            async loadData(orderId){
                const response = await
                    fetch('/diagnose/technology/load', {
                        method: 'POST',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify({
                            "orderId":orderId
                        })
                    });
                const resultJson = await response.text();
                const resultObject = JSON.parse(resultJson);
                // 异常处理
                if (this.$errHandle(resultObject)) {
                    return;
                }

                this.initialData = resultObject;
            }
        }
    }
</script>
