<template>
    <div>
        <div id="loginmain" class="hmias-common">
            <div class="hmias hmias-common">{{$t('login.title')}}</div>
            <div class="hmias-p hmias-common">{{$t('login.description')}}</div>
            <div id="login" class="hmias-common">
                <div class="login-p">{{$t('login.sub_title')}}</div>
                <div class="login-img">
                    <div class="login-folder">
                        <img src="../assets/images/folder.png" class="image-folder">
                    </div>
                    <select class="folder-select" v-model="bindData.workstationId">
                        <option v-for="item in initialData.workstationList" v-bind:value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="login-img">
                    <div class="login-folder">
                        <img src="../assets/images/username.png" class="image-folder">
                    </div>
                    <el-tooltip :manual="true" :content="errors.first('userName')" placement="right" effect="light"
                                :value="errors.has('userName')">
                        <input v-validate="'required'" name="userName"
                               class="folder-select" type="text" v-model="bindData.userName"
                               v-bind:placeholder="$t('login.user_name')">
                    </el-tooltip>
                </div>
                <div class="login-img">
                    <div class="login-folder">
                        <img src="../assets/images/password.png" class="image-folder">
                    </div>
                    <el-tooltip :manual="true" :content="errors.first('password')" placement="right" effect="light"
                                :value="errors.has('password')">
                        <input v-validate="'required'" name="password"
                               class="folder-select" type="password" v-model="bindData.password"
                               v-bind:placeholder="$t('login.password')" >
                    </el-tooltip>
                </div>
                <div class="login-btn">
                    <button class="loginin" v-on:click="login">登录</button>
                    <button class="loginout">退出</button>
                </div>
                <div class="login-manage">
                    <a href="#" class="manage">用户管理</a>
                    <a href="#" class="forget">忘记密码？</a>
                </div>
            </div>
            <div class="hmias-bottom hmias-common">Copyright&nbsp;2016&nbsp; 海纳医信&nbsp;（北京）&nbsp;软件科技有限责任公司&nbsp; 版权所有
            </div>
        </div>
    </div>
</template>
<style>
    #loginmain {
        margin: 0px;
        padding: 0px;
        min-height: 700px;
        min-width: 1340px;
    }

    #loginmain {
        width: 100%;
        height: 100%;
        background: url('../assets/images/bg.png');
        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    #login {
        width: 302px;
        height: 328px;
        background: url("../assets/images/login_bg.png") no-repeat;
        left: 50%;
        margin-left: -151px;
        top: 27.5%;
    }

    .hmias-common {
        position: absolute;
        text-align: center;
    }

    .hmias {
        width: 150px;
        height: 36px;
        line-height: 36px;
        top: 6.5%;
        left: 50%;
        margin-left: -75px;
        font-size: 36px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 5px;
    }

    .hmias-p {
        width: 450px;
        height: 20px;
        line-height: 20px;
        top: 18%;
        left: 50%;
        margin-left: -225px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 2px;
    }

    .hmias-bottom {
        width: 450px;
        height: 12px;
        line-height: 12px;
        top: 90%;
        left: 50%;
        margin-left: -225px;
        font-size: 12px;
        color: #fff;
    }

    .login-p {
        width: 88px;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        margin-top: 25px;
        margin-left: 108px;
        margin-bottom: 22px;
    }

    .login-img {
        width: 216px;
        height: 36px;
        background: #fff;
        margin-bottom: 14px;
        margin-left: 40px;
    }

    .login-folder {
        width: 36px;
        height: 36px;
        float: left;
        line-height: 36px;
    }

    .folder-select {
        width: 180px;
        height: 36px;
        border: none;
        border-left: 1px solid #66bdd2;
        color: #ccc;
        outline: none;
        padding-left: 12px;
    }

    .login-btn button {
        width: 76px;
        height: 34px;
        color: #fff;
        font-size: 16px;
        line-height: 34px;
        border: none;
        outline: none;
        margin-top: 12px;
        border-radius: 3px;
        letter-spacing: 5px;
    }

    .loginin {
        background: #357ebc;
        margin-right: 8px;
    }

    .loginout {
        background: #d95450;
        margin-left: 8px;
    }

    .login-manage {
        margin-top: 20px;
        font-size: 12px;
    }

    .login-manage a {
        color: #fff;
        text-decoration: underline;
    }

    .login-manage .manage {
        margin-right: 14px;
    }

    .login-manage .forget {
        margin-left: 14px;
    }

</style>
<script>
    export default {
        data() {
            return {
                loading: false,
                initialData: {
                    password:""
                },
                bindData: {
                    workstationId: 0,
                    userName: '',
                    password: ''
                }
            };
        },
        methods: {
            async loadData(){
                // 加载信息
                const response = await fetch('/login/load', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                });
                const resultJson = await response.text();
                const resultObject = JSON.parse(resultJson);

                // 异常处理
                if (this.$errHandle(resultObject)) {
                    return;
                }

                this.initialData = resultObject;
                // 默认选择第一个工作站
                this.bindData.workstationId = resultObject.workstationList[0].id;
            },
            async login() {
                this.$validator.validateAll().then(success => {
                }).then(failing => {
                }, rejected => {
                });

                // validate succuess
                if (this.errors.any() == false) {

                    const resultJson = await this.loginSubmit();
                    const resultObject = JSON.parse(resultJson);

                    // 异常处理
                    if (this.$errHandle(resultObject)) {
                        return;
                    }

                    // 登录成功
                    if (resultObject.loginResult == true) {
                        // 验证权限
                        if (resultObject.requiredAction) { // 无登录工作站权限

                            this.$message({
                                message: this.$t("login.action_failure"),
                                type: 'error',
                                duration: 2000
                            });
                        }

                        // 跳转到工作站
                        switch (resultObject.workstationId) {
                            case 1:
                                this.$router.push("/register");
                                break;
                            case 2:
                                this.$router.push("/materials");
                                break;
                            case 3:
                                this.$router.push("/production");
                                break;
                            case 4:
                                this.$router.push("/diagnose");
                                break;
                        }
                    }
                    else {
                        this.$message({
                            message: this.$t("login.login_failure"),
                            type: 'error',
                            duration: 2000
                        });
                    }
                }
            },
            async loginSubmit() {
                const response = await fetch('/login/submit', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.bindData)
                });

                const json = await response.text();
                return json;
            }
        },
        mounted () {
            this.loadData();
        }
    };
</script>
