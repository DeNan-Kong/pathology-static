export default{
    installed: false,
    install: function (Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$loginValidateHandle = function (data) {
            // 如果有错误跳转到错误页面
            if (data.authorityFailed) {
                this.$router.push("/login");
                return true;
            }
        }
    }
}