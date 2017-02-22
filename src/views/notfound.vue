<template>
  <div id="notfound">
    <div class="notfound-pic"></div>
    <div><button>返回首页</button></div>
  </div>
</template>
<style type="text/css">
#notfound{
  width:100%;
  height: 100%;
  min-height: 700px;
  min-width: 1340px;
  background: #fff;
  position: absolute;
  bottom: 0px;
}
.notfound-pic{
  width: 640px;
  height: 484px;
  position: absolute;
  left: 50%;
  margin-left: -320px;
  bottom:25%;
  background: url('../assets/images/notfound-ch.png');
}
#notfound button{
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
  import {mapState} from 'vuex'
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'ERROR!',
      }
    },
    computed: mapState([
      'message'
    ]),
    mounted: function () {
      this.$store.commit('MESSAGE', '404 Not Found！');
    },
    components: {cTitle}
  }
</script>