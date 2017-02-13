<template>
    <div>
        <div id="loginmain" class="hmias-common">
            <div class="hmias hmias-common">HMIAS</div>
            <div class="hmias-p hmias-common">2000W高清晰度彩色医学图文分析管理系统</div>
            <div id="login" class="hmias-common">
                <div class="login-p">用户登录</div>
                <div class="login-img">
                    <div class="login-folder">
                        <img src="../assets/images/folder.png" class="image-folder">
                    </div>
                    <select class="folder-select">
                        <option v-for="item in initialData.workstationList">
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
                               placeholder="用户名">
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
                               placeholder="密码">
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
                initialData: {},
                bindData: {
                    workstation: '',
                    userName: '',
                    password: ''
                }

            };
        },
        methods: {
            async loadData(){
                const response = await fetch('/login/load', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: this.data
                    })
                });
                const json = await response.text();
                const data = JSON.parse(json);
                this.initialData = data;
            },
            login: function () {
                this.$validator.validateAll().then(success => {
                }).then(failing => {
                }, rejected => {
                });

                if (this.errors.any() == false) {
                    alert('123');
                }
            }
        },
        mounted () {
            this.loadData();
        }
    };
</script>
