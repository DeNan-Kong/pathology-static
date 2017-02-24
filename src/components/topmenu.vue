<template>
    <div id="main">
        <div id="header" class="m_panel">
            <div class="container">
                <div class="row" ng-controller="NavbarCtrl">
                    <nav class="navbar navbar-default" role="navigation">
                        <div class="navbar-header">
                            <img src="../assets/images/logo.png" id="logo">
                        </div>
                        <div class="header-icon-group" style="float:right;">
                            <img class="header-icon" src="../assets/images/setting.png">
                            <img class="header-icon" src="../assets/images/help.png">
                            <img class="header-icon" src="../assets/images/logout.png" v-on:click="logout()">
                        </div>
                        <div class="collapse navbar-collapse navbar-ex1-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active" data-toggle="modal" data-target="#myModal"><a href="#">病历管理</a></li>
                                <li><a href="#">制片管理</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">图像管理 <b
                                            class="caret"></b></a>
                                    <ul class="dropdown-menu menu-top">
                                        <li><a href="#">Level 1</a></li>
                                        <li class="dropdown-submenu"><a tabindex="-1" href="#">More options</a>
                                            <ul class="dropdown-menu">
                                                <li><a tabindex="-1" href="#">Level 2</a>
                                                </li>
                                                <li class="dropdown-submenu"><a href="#">More..</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Level 3</a>
                                                        </li>
                                                        <li><a href="#">Level 3</a>
                                                        </li>
                                                        <li class="dropdown-submenu"><a href="#">More..</a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Level 4</a>
                                                                </li>
                                                                <li><a href="#">Level 4</a>
                                                                </li>
                                                                <li class="dropdown-submenu"><a href="#">More..</a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Level 5</a>
                                                                        </li>
                                                                        <li><a href="#">Level 5</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Level 2</a>
                                                </li>
                                                <li><a href="#">Level 2</a>                                    
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Level 1</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">报告管理</a></li>
                                <li><a href="#">窗口</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .container .row {
        height: 45px;
    }
</style>
<script>
    export default{
        data(){
            return {

            }
        }, 
        methods: {
            async logout() {
                const response = await fetch('/index/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const resultJson = await response.text();
                const resultObject = JSON.parse(resultJson);

                // 异常处理
                if (this.$errHandle(resultObject)) {
                    return;
                }

                this.$router.push("/login");
            }
        }
    }
</script>
