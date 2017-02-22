<template>
    <div>   
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="close" data-dismiss="modal" aria-hidden="true">&times;</div>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button> -->
                <p class="modal-title" id="myModalLabel">
                    选择表单
                </p>
            </div>
            <div class="modal-body">
                <form>
                    <select class="modal-select">
                        <option>病历号条码</option>
                    </select>
                </form>
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
