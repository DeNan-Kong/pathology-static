<template>
  <el-table
    :data="embeddingList"
    border
     style="width:1880px;position:relative"
    height="520">
    <el-table-column
      type="selection"
      :row-class-name='pppppp'
      >
    </el-table-column>
    <el-table-column
      label="病理号"
      show-overflow-tooltip
      style="width:6.88%">
      <template scope="scope">
        <span>{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      show-overflow-tooltip
      style="width:8.49%">
      <template scope="scope">
        <span>{{ scope.row.taskSourceId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块号"
      show-overflow-tooltip
      style="width:6.18%">
      <template scope="scope">
        <span>{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      show-overflow-tooltip
      style="width:7.41%">
      <template scope="scope">
        <span>{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      show-overflow-tooltip
      style="width:4.32%">
      <template scope="scope">
        <span>{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      show-overflow-tooltip
      style="width:4.32%">
      <template scope="scope">
        <span>{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材部位"
      show-overflow-tooltip
      style="width:7.72%">
      <template scope="scope">
        <span>{{ scope.row.materialPartsId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块数"
      show-overflow-tooltip
      style="width:4.02%">
      <template scope="scope">
        <span>{{ scope.row.materialQuantity }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材医生"
      show-overflow-tooltip
      style="width:7.1%">
      <template scope="scope">
        <span>{{ scope.row.sampleDoctorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材日期"
      show-overflow-tooltip
      style="width:7%">
      <template scope="scope">
        <span>{{ scope.row.sampleDoctorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块核对"
      show-overflow-tooltip
      style="width:6%">
      <template scope="scope">
        <span>{{ scope.row.materialCheckerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="打印状态"
      show-overflow-tooltip
      style="width:6%">
      <template scope="scope">
        <span>{{ scope.row.printStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      show-overflow-tooltip
      style="width:6%">
      <template scope="scope">
        <span>{{ scope.row.productionStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="核对时间"
      show-overflow-tooltip
      style="width:7%">
      <template scope="scope">
        <span>{{ scope.row.materialCheckDate }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<style>
 .el-table .pppppp{
  width:3.86%;
}
</style>
<script>
  export default {
    data() {
      return {
      }
    },
    props:['embeddingList'],
      created(){ // 生命周期 created,获取数据
          console.log("hello")
          },
    methods: {
        handleEdit(index, row) {
        console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
    }
  }
</script>