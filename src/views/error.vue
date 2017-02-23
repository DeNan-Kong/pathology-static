<template>
    <div id="error">
        <div class="error_pic"></div>
        <div class="error_code">
            <p>错误代码：1d046d95-9193-4eac-aed3-d28ffbaada64</p>
            <p>错误种类代码：1.2.156.123907.10001.500.10001</p>
            <p>系统授权失败-无权访问指定的工作站</p>
        </div>
        <div class="error_back">
            
        </div>
        <button>带我回家</button>
    </div>
</template>
<style type="text/css">
#error{
  width:100%;
  height: 100%;
  min-height: 700px;
  min-width: 1340px;
  background: #fff;
  position: absolute;
  bottom: 0px;
}
.error_pic{
  width: 640px;
  height: 484px;
  position: absolute;
  left: 50%;
  margin-left: -320px;
  bottom:25%;
  background: url('../assets/images/notfound-ch.png');
}
.error_code p{
    display: block;
    width:506px;
    height: 22px;
    font-size: 20px;
    position: absolute;

}
.error_code{
    color:#275883;
    position: absolute;
    bottom: 25%;
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
  bottom: 13.14%;

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