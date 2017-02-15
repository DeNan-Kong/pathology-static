<template>
<div>
  <el-tree :data="mydictionaryData" :props="defaultProps"></el-tree>
</div>
</template>
<script>
  export default {
    data() {
      return {
        defaultProps: {
          children: 'nodeList',
          label: 'name'
        }
      
    }
  },
   props: ['mydictionaryData'],
  
  };
</script>