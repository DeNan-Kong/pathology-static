<template>
  <el-table
    :data="embeddingList"
    border
    height="520"
    highlight-current-row
    @selection-change="selectionChange"
    @current-change="handleCurrentChange">
    <el-table-column
      type="selection"
      min-width="48"
      >
    </el-table-column>
    <el-table-column
      label="病理号"
      show-overflow-tooltip
      min-width="112"
      >
      <template scope="scope">
        <span>{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      show-overflow-tooltip
      min-width="106">
      <template scope="scope">
        <span>{{ scope.row.taskSource }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块号"
      show-overflow-tooltip
      min-width="92">
      <template scope="scope">
        <span>{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      show-overflow-tooltip
      min-width="84">
      <template scope="scope">
        <span>{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      show-overflow-tooltip
      min-width="60"
      >
      <template scope="scope">
        <span>{{ scope.row.sexName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      show-overflow-tooltip
      min-width="60"
      >
      <template scope="scope">
        <span>{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材部位"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.materialParts }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块数"
      show-overflow-tooltip
      min-width="56">
      <template scope="scope">
        <span>{{ scope.row.materialQuantity }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材医生"
      show-overflow-tooltip
      min-width="80">
      <template scope="scope">
        <span>{{ scope.row.sampleDoctor }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材日期"
      show-overflow-tooltip
      min-width="102">
      <template scope="scope">
        <span>{{ scope.row.sampleDoctorDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块核对"
      show-overflow-tooltip
      min-width="80">
      <template scope="scope">
        <span>{{ scope.row.materialChecker }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="打印状态"
      show-overflow-tooltip
       min-width="80">
      <template scope="scope">
        <span>{{ scope.row.printStatusName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      show-overflow-tooltip
      min-width="80">
      <template scope="scope" >
        <span>{{ scope.row.productionStatusName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="核对时间"
      show-overflow-tooltip
      min-width="110">
      <template scope="scope">
        <span>{{ scope.row.materialCheckDate }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
      }
    },
    props:['embeddingList'],
      created(){ // 生命周期 created,获取数据
          },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        },
      handleDelete(index, row) {
          console.log(index, row);
        },
      handleCurrentChange(val) {
        this.currentRow = val;
      
      },
      selectionChange:function(items) { 
        this.$emit('selectionChange',items) 
      },
    }
  }
</script>