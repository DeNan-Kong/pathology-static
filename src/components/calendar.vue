 <template>
  <div>
 <div class="floatleft p-margin www">
    <el-date-picker
            v-model="innerDate"
            :editable="editable"
            :clearable="clearable"
            type="date">
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
      data: function () {
          return {
              innerDate: this.date,
              editable:false,
              clearable:false
          };
      },
      props: ['date'],
      mounted: function () {

      }, watch: {
          date(val) {
              this.innerDate = val;//新增date的watch，监听变更并同步到innerDate上
          },
          innerDate(val){
              //xxcanghai 小小沧海 博客园
              this.$emit("change",val);//③组件内对innerDate变更后向外部发送事件通知
          }
      },
      methods:{

      }
  };
</script>

