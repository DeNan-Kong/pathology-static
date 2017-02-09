<template>
  <div class="hello">
    <c-title :text="title"></c-title>
    <img class="logo" src="../assets/images/logo.png">
    <p class="welcome">欢迎使用 vue</p>
    <div v-html="content"></div>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'Hello Vue!',
        content: ''
      }
    },
    methods: {
      async getContent () {
        const response = await fetch('/api/hello');
        this.content = await response.text();
      },
      startHacking () {
          this.$notify({
            title: 'It Works',
            message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
            duration: 6000
          })
      }
    },
    mounted () {
      this.$store.commit('MESSAGE', '欢迎使用 vue！');
      this.getContent();
    },

    components: {cTitle}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
