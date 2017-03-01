export default{
    installed: false,
    install: function (Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$errHandle = function (data) {
            // 如果有错误跳转到错误页面
            if (data.error) {
                this.$store.commit('error',data.error)
                this.$router.push("/error");

                return true;
            }
        }
    }
}

