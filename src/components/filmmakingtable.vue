<template>
  <el-table
    :data="productionList"
    border
    height="492"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="病理号"
      fixed
      width="130">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pathologyNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="任务来源"
      width="130">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.taskSourceId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片子号"
      width="130">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.materialNo }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片说明"
      width="130">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.productionExplain }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.patientName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="80">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="年龄"
      width="80">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.age }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="申请人"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.proposerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="收费情况"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.chargeTypeId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="收费时间"
      width="150">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.chargeDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片人"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.producerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片时间"
      width="150">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.productionDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="制片状态"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.productionStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="打印状态"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.printStatus }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="玻片核对"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.slideCheckerId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="核对时间"
      width="150">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.slideCheckDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="切片评级"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.slideCheckDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="评级人"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.rateOperatorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="染色人"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.dyeOperatorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="染色时间"
      width="150">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.dyeDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="取材医生"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sampleDoctorId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包埋人"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.embeddingOperatorId }}</span>
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