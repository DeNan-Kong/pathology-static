<template>
    <div id="error">
        <div class="error_pic"></div>
        <div class="error_code">
            <p class="code">错误代码：1d046d95-9193-4eac-aed3-d28ffbaada64<br>
            错误种类代码：1.2.156.123907.10001.500.10001<br>
            系统授权失败-无权访问指定的工作站</p>
            
        </div>
        <div class="error_img">
             <p class="error_font"></p>
        </div>
        <button>带我回家</button>
    </div>
</template>
<style type="text/css">
#error{
  width:100%;
  height: 100%;
  min-width: 1340px;
  min-height: 700px;
  background: #fff;
  position: absolute;
}
.error_pic{
  width: 640px;
  height: 385px;
  position: absolute;
  left: 50%;
  margin-left: -320px;
  top:10%;
  background:url('../assets/images/error.png')no-repeat -52px -3px;
}
.error_code,.error_img{
    display: block;
    width:506px;
    height: 70px;
    font-size: 20px;
    position: absolute;
    left:50%;
    margin-left: -253px;
    top:65.71%; 
    color:#275883;
}
.error_img{
    top:81%;
}
.error_font{
    width: 370px;
    height: 30px;
    background:url('../assets/images/error.png')no-repeat -52px -400px;
}
#error button{
  color:#fff;
  width:76px;
  height: 34px;
  border-radius: 3px;
  background: #428bca;
  position: absolute;
  left: 50%;
  margin-left: -38px;
  top: 87.43%;

}
</style>
<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            // a computed getter
            error : function () {
                // `this` points to the vm instance
                return this.$store.state.error
            }
        },
        mounted () {
        }
    }
</script>