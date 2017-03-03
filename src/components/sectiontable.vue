<template>
  <el-table
    :data="sectionList"
    border
    height="520"
    @selection-change="handleSelectionChange"
    highlight-current-row>
    <el-table-column
      type="selection"
      min-width="35">
    </el-table-column>
    <el-table-column
      label="病理号"
      fixed
      show-overflow-tooltip
      min-width="127">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      show-overflow-tooltip
      min-width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.taskSource }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="材块号"
      show-overflow-tooltip
      min-width="112">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      show-overflow-tooltip
      min-width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      show-overflow-tooltip
      min-width="90">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sexName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      show-overflow-tooltip
      min-width="90">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋操作员"
      show-overflow-tooltip
      min-width="138">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.embeddingOperator }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋日期"
      show-overflow-tooltip
      min-width="170">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.embeddingDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.productionStatusName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="切片数"
      show-overflow-tooltip
      min-width="120">
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