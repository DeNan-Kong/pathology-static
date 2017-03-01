<template>
</template>
<style>
</style>

<script>
    export default{
        methods: {
            async loginValidate(){ // 生命周期 created,获取数据
                const response = await
                    fetch('/login/validate', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: {}
                    });
                const json = await
                    response.text();
                const data = JSON.parse(json);

                // 异常处理
                if (this.$errHandle(data)) {
                    return;
                }

                // 登录验证
                if (this.$loginValidateHandle(data)) {
                    return;
                }

                this.$emit("authorityValidationCompleted", true);
            }

        }, created(){ // 生命周期 created,获取数据
            this.loginValidate();
        }
    }
</script>