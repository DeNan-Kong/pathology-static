<template>
<div>
  <el-tree :data="bindingData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</div>
</template>
<script>
  export default {
      props: ['bindingData'],
    data() {
        return {
            data: [],
            defaultProps: {
                children: 'nodeList',
                label: 'name'
            }
      };
    },
    methods: {
      handleNodeClick(data) {
       
      }
    }
  };
</script>