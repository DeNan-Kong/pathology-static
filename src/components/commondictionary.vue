<template>
<div>
  <el-tree :data="commondictionaryData" :props="defaultProps" ></el-tree>
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
  created(){
    console.log(this.commondictionaryData)
  },
   props: ['commondictionaryData'], 
  };
</script>