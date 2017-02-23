<template>
    <div>   
    <div class="modal-dialog modal-delay">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <p class="modal-title" id="myModalLabel">
                    延期原因&nbsp;&nbsp;病理号：234567789&nbsp;李薇薇&nbsp;女&nbsp;56岁
                </p>
            </div>
            <div class="modal-body">
                <form class="floatright">
                    <select class="delayselect">
                        <option > 
                           
                        </option>
                    </select>
                </form>
                <textarea></textarea>
            </div>
             <div class="modal-footer">
                <button type="button" class="btn btn-primary" >发送
                </button>
                <button type="button" class="btn btn-primary">
                    保存
                </button>
                <button type="button" class="btn btn-primary">
                    打印
                </button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">
                    退出
                </button>
            </div>
        </div><!-- /.modal-content -->

    </div><!-- /.modal -->
</div>
</template>
<style>
.modal-delay .modal-content{
    margin-top: 35%;
    margin-left: 12%;
    width:450px;
    height: 260px;
} 
.modal-delay .modal-body{
  padding: 3px 20px 0px;
  height: 166px;
}
.modal-delay .modal-title{
  width:400px;
  line-height: 26px;
}
.modal-delay .modal-header{
   width:448px;
}
.delayselect{
  width:410px;
  height: 24px;
  border:1px solid #c9c9c9;
  border-radius: 3px;
  margin-top: 9px;
}
.modal-delay textarea{
  width:408px;
  height: 118px;
  border:1px solid #c9c9c9;
  border-radius: 3px;
  margin-top: 6px;
}
.modal-delay .modal-footer{
  border: none;
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
