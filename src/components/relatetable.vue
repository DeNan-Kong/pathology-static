<template>
<div id="relatetable">
 <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%; height: 415px;">
  <div class="hidden-columns">
    <div></div>
     <div></div>
      <div></div> 
      <div></div> 
      <div></div> 
      <div></div> 
      <div></div> 
      <div></div>
    </div>
    <div class="el-table__header-wrapper">
      <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 652px;">
        <col name="el-table_1_column_33" width="144">
        <col name="el-table_1_column_34" width="76">
        <col name="el-table_1_column_35" width="48">
        <col name="el-table_1_column_36" width="47">
        <col name="el-table_1_column_37" width="47">
        <col name="el-table_1_column_38" width="91">
        <col name="el-table_1_column_39" width="111">
        <col name="el-table_1_column_40" width="90">
        <col name="gutter" width="17">
        <thead>
          <tr>
            <th colspan="1" rowspan="1" class="el-table_1_column_33 is-leaf">
              <div class="cell">住院号</div>
            </th>
            <th colspan="1" rowspan="1" class="el-table_1_column_34 is-leaf">
              <div class="cell">设备类型</div>
            </th>
            <th colspan="1" rowspan="1" class="el-table_1_column_35 is-leaf">
            <div class="cell">姓名</div>
          </th>
          <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
            <div class="cell">年龄</div>
          </th>
          <th colspan="1" rowspan="1" class="el-table_1_column_37 is-leaf">
            <div class="cell">性别</div>
          </th>
          <th colspan="1" rowspan="1" class="el-table_1_column_38 is-leaf">
            <div class="cell">检查日期</div>
          </th><th colspan="1" rowspan="1" class="el-table_1_column_39 is-leaf">
          <div class="cell">检查详细信息</div>
        </th>
        <th colspan="1" rowspan="1" class="el-table_1_column_40 is-leaf">
          <div class="cell">图像数量</div>
        </th>
        <th class="gutter" style="width: 17px;">
        </th>
      </tr>
    </thead>
  </table>
</div>
<div class="el-table__body-wrapper" style="height: 358px;">
  <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 637px;">
    <col name="el-table_1_column_33" width="144">
    <col name="el-table_1_column_34" width="76">
    <col name="el-table_1_column_35" width="48">
    <col name="el-table_1_column_36" width="47">
    <col name="el-table_1_column_37" width="47">
    <col name="el-table_1_column_38" width="91">
    <col name="el-table_1_column_39" width="111">
    <col name="el-table_1_column_40" width="90">
    <tbody>
      <tr class="relateclick" @click="relateclick" v-for="list in relationdate.mm">
        <td class="el-table_1_column_33">
          <div class="cell" style="height: 30px;">{{list.inhospitalId}}</div>
        </td>
        <td class="el-table_1_column_34">
          <div class="cell"></div>
        </td>
        <td class="el-table_1_column_35">
          <div class="cell">{{list.patient.patientName}}</div>
        </td>
        <td class="el-table_1_column_36">
          <div class="cell"></div>
        </td>
        <td class="el-table_1_column_37">
          <div class="cell"></div>
        </td>
        <td class="el-table_1_column_38">
          <div class="cell"></div>
        </td>
        <td class="el-table_1_column_39">
          <div class="cell"></div>
        </td>
        <td class="el-table_1_column_40">
          <div class="cell"></div>
        </td>
        <td class="gutter">
        </td>
      </tr>
      </td>
    </tr>
  </tbody>
</table>
</div>
<div class="el-table__column-resize-proxy" style="display: none;"></div>
<div class="resize-triggers"><div class="expand-trigger">
  <div style="width: 673px; height: 400px;"></div>
</div>
<div class="contract-trigger"></div>
</div>
</div>  
</div>
</template>
<style>
body #relatetable .el-table .cell,.el-table__header-wrapper{
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  padding: 0px;
} 
body .el-table__fixed-header-wrapper thead div, .el-table__header-wrapper thead div{
  color:#333;
  font-weight: normal;
}
body .el-table .cell, .el-table th>div{
  padding: auto 0px;
} 
</style>
<script>
export default {
    data() {
      return {
        
      };
    },
    props: ['relationshow','relationdate'],
    methods:{
      relateclick:function(){
          this.relationshow()
      }
    }
  };
</script>