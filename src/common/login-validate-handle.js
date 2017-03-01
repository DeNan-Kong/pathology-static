export default{
    installed: false,
    install: function (Vue, options) {
        // 4. 添加实例方法
        Vue.prototype.$loginValidateHandle = function (data) {
            // 如果有错误跳转到错误页面
            if (data.requiredLogin) {
                this.$router.push("/login");
                return true;
            }

            // 验证权限失败
            if (data.requiredAction) {
                data.requiredAction

                this.$alert( this.$t("requiredAction.alert_message"), this.$t("requiredAction.alert_title"), {
                    confirmButtonText: this.$t("requiredAction.alert_ok"),
                    type:'error',
                    callback: action => {
                        this.$router.push("/login");
                    }
                });
                return true;
            }
        }
    }
}