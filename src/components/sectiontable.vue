<template>
  <el-table
    :data="sectionList"
    border
    height="520"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="病理号"
      fixed
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.taskSourceId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块号"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋操作员"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.embeddingOperatorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋日期"
      width="190">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.embeddingDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      width="190">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.productionStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="切片数"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sectionQuantity }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:["sectionList"],
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(JSON.stringify(val));
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>