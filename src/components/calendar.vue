 <template>
  <div>
 <div class="floatleft  p-margin www">
    <el-date-picker
      v-model="value1"
      type="date"
      >
    </el-date-picker>
  </div>
</div>
</template>
<style>
.el-date-editor.el-input{
  width: 153px;
  
}
body .embedding-top .el-date-editor.el-input{
    margin-left: -5px;
}
.el-input__inner{
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
body .embedding-contains .el-date-editor.el-input{
  width:132px;
}
body .embedding-contains .p-margin{
  margin-left: 0px;
  width:132px;
}
</style>
<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: new Date()
      };
    },
    prop:['today']
  };
</script>

