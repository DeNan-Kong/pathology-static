<template>
  <el-table
    :data="productionList"
    border
    height="492"
    highlight-current-row
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      min-width="40">
    </el-table-column>
    <el-table-column
      label="病理号"
      show-overflow-tooltip
      fixed
     min-width="102">
      <template scope="scope">
        <span>{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      show-overflow-tooltip
      min-width="75">
      <template scope="scope">
        <span>{{ scope.row.taskSourceId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片子号"
      show-overflow-tooltip
      min-width="76">
      <template scope="scope">
        <span>{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片说明"
      show-overflow-tooltip
      min-width="80">
      <template scope="scope">
        <span>{{ scope.row.productionExplain }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      show-overflow-tooltip
      min-width="60">
      <template scope="scope">
        <span>{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      show-overflow-tooltip
      min-width="46">
      <template scope="scope">
        <span>{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      show-overflow-tooltip
      min-width="46">
      <template scope="scope">
        <span>{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="申请人"
      show-overflow-tooltip
      min-width="60">
      <template scope="scope">
        <span>{{ scope.row.proposerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="收费情况"
      show-overflow-tooltip
      min-width="72">
      <template scope="scope">
        <span>{{ scope.row.chargeTypeId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="收费时间"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.chargeDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片人"
      show-overflow-tooltip
      min-width="66">
      <template scope="scope">
        <span>{{ scope.row.producerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片时间"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.productionDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      show-overflow-tooltip
      min-width="75">
      <template scope="scope">
        <span>{{ scope.row.productionStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="打印状态"
      show-overflow-tooltip
      min-width="75">
      <template scope="scope">
        <span>{{ scope.row.printStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="玻片核对"
      show-overflow-tooltip
      min-width="75">
      <template scope="scope">
        <span>{{ scope.row.slideCheckerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="核对时间"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.slideCheckDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="切片评级"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.slideCheckDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="评级人"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.rateOperatorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="染色人"
      show-overflow-tooltip
      min-width="90">
      <template scope="scope">
        <span>{{ scope.row.dyeOperatorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="染色时间"
      show-overflow-tooltip
      min-width="100">
      <template scope="scope">
        <span>{{ scope.row.dyeDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材医生"
      show-overflow-tooltip
      min-width="90">
      <template scope="scope">
        <span>{{ scope.row.sampleDoctorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋人"
      show-overflow-tooltip
      min-width="90">
      <template scope="scope">
        <span>{{ scope.row.embeddingOperatorId }}</span>
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
    props:["productionList"],
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(JSON.stringify(val));
      },
    }
  }
</script>