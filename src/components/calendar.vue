 <template>
  <div>
 <div class="floatleft  p-margin www">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </div>
</div>
</template>
<style>
.el-date-editor.el-input{
  width: 153px;
  
}
.el-input__inner{
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
        value1: ''
      };
    }
  };
</script>

