<template>
    <div class="all">
        <div id="diagnostic">
            <top-menu/>
            <div id="middle-left">
                <div class="middle-message">
                    <span>当前病人：测试</span><span>病理号：20070305</span><span>男</span><span>65岁</span><span>住院号：20073154</span><span>送检科室：放射科</span><span>标本名称：大体</span>
                    <p>冰冻&nbsp;&nbsp;常规</p>
                </div>
                <div class="case-message">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}
                        </a>
                        <a class="medicalMaterials" v-on:click="medicalMaterials">{{$t('register.pathological_diagnosis')}}
                        </a>
                        <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)
                        </a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                            <p class="close" @click="closebtn"></p>
                        </a>
                        <br>
                    </div>
                    <medicalmessage/>
                </div>
                <div class="tabs-materials">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a
                            class="medicalMaterials" v-on:click="medicalMaterials">{{$t('register.pathological_diagnosis')}}</a> <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)
                        </a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                            <p class="close" @click="closebtn"></p>
                        </a><br>
                    </div>
                    <diagnostic/>
                </div>
                <div class="tabs-img">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a
                            class="medicalMaterials" v-on:click="medicalMaterials">{{$t('register.pathological_diagnosis')}}</a> <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)
                        </a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                            <p class="close" @click="closebtn"></p>
                        </a><br>
                    </div>
                    123
                </div>
                <div class="tabs-pay">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}
                        </a>
                        <a class="medicalMaterials" v-on:click="medicalMaterials">{{$t('register.pathological_diagnosis')}}
                        </a> 
                        <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)
                        </a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                        <p class="close" @click="closebtn"></p>
                        </a>
                        <br>
                    </div>
                    456
                </div>
                <div class="tabs-check">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}
                        </a>
                        <a class="medicalMaterials" v-on:click="medicalMaterials">{{$t('register.pathological_diagnosis')}}</a>
                        <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)
                        </a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                            <p class="close" @click="closebtn"></p>
                        </a><br>
                    </div>
                    <div class="tabscheck">789</div>
                </div>
            </div>
            <div class="diagnose-second-table">
            <div  id="middle-right">
                <div class="righttabs">
                <a class="activeColor patientlist" v-on:click="patientList">患者列表
                </a>
                <a class="myreport" v-on:click="myReport">我的报告</a>
                </div>
                <div class="righttabs-one" v-show="tabOne">
                <searchtable :get-datas="fetchData" :tableshow="method" v-on:modalSelect="showModalContent" />
                </div>
                <div class="righttabs-two" v-show="tabTwo">
                <searchtabletwo :get-datas="fetchData" :tableshow="method" v-on:modalSelect="showModalContent" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
    .all {
        min-width: 1340px;
    }

    #diagnostic {
        font-size: 14px;
        width: 100%;
        min-width: 1340px;
        position: relative;
    }

    .case-message, .tabs-pay, .tabs-img, .tabs-check, .tabs-materials {
        width: 1052px;
        margin: 6px 7px;
        height: 660px;
        background: #fff;
    }

    .tabs-pay, .tabs-img, .tabs-check, .tabs-materials {
        display: none;
    }

    .left-bottom .picture-img:hover {
        background: url('../assets/images/register.png') -32px -35px no-repeat;
    }

    .left-bottom .refresh-img {
        background: url('../assets/images/picture.png.png') no-repeat;
        width: 26px;
        height: 26px;
        border-radius: 3px;
        float: left;
    }

    .left-bottom .refresh-img:hover {
        background: url('../assets/images/register.png') -68px -35px no-repeat;
    }

    #filmmaking-main {
        height: 660px;
        background: #eceef2;
        margin-top: -655px;
    }

    .filmmaking-main {
        margin: 6px;
        background: #fff;
        height: 650px;
    }

    .filmmaking-main-top .tabs-case {
        width: 100%;
        height: 30px;
        background: red;
        min-width: 1330px;
    }

    .case-tabss > a {
        display: block;
        width: 7%;
        height: 22px;
        background: #d0eaf8;
        float: left;
        margin-left: 3px;
        text-align: center;
        line-height: 22px;
        color: #999;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        cursor: pointer;
        text-decoration: none;
    }

    .case-tabss .filmmakingactive {
        background: #57bdde;
        color: #fff;
    }

    #middle-left .medicalPay {
        width: 38px;
    }

    .tabs-embedding, .tabs-section, .tabs-advice, .tabs-filmmaking {
        width: 100%;
        height: 660px;
    }

    .tabs-section, .tabs-advice, .tabs-filmmaking {
        display: none;
    }

    #cytology .medicalcytology {
        width: 74px;
    }

    #cytology .cytologyimg {
        width: 66px;
    }

    #cytology .active {
        background: #57bdde;
        color: #fff;
    }

    body #diagnostic .closebtn {
        display: block;
        background: url('../assets/images/relatecheck.png') no-repeat -4px -2px;
        width: 78px;
        height: 22px;
        margin: 0;
        margin-left: 3px;
        margin-top: 0px;
    }

    body #diagnostic .register_check {
        background-color: transparent;
    }

    body #diagnostic .closebtnchange {
        background: url('../assets/images/relatecheck.png') no-repeat -4px -26px;
        width: 78px;
        height: 22px;
        margin: 0;
        margin-left: 3px;
        margin-top: 0px;
        display: none;
    }

    #diagnostic .close {
        display: block;
        width: 20px;
        height: 22px;
        margin-left: -2px;
    }
    .righttabs{
        width:200px;
        height: 24px;
        margin-bottom: 8px;
    }
    .righttabs a{ 
        display: block;
        float: left;
        width:62px;
        height:22px;
        background:#d0eaf8;
        margin-left: 3px;
        text-align:center;
        line-height:22px;
        color:#999;
        border-bottom-right-radius:7px;
        border-bottom-left-radius:7px;
        cursor: pointer;
        text-decoration: none;
    }
    .righttabs .activeColor{
        background:#57bdde;
        color:#fff;
    }

</style>
<script>
    import TopMenu from 'components/topmenu';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    import Medicalmaterial from 'components/medicalmaterial';
    import Diagnostic from 'components/diagnostic';
    import Filmmaking from 'components/filmmaking';
    import Embedding from 'components/embedding';
    import Medicalsection from 'components/medicalsection';
    import Advice from 'components/advice';
    import Cytology from 'components/cytology';
    import Login from 'components/login';
    import Searchtabletwo from 'components/searchtabletwo';
    export default{
        data(){
            return {
                aa: 10,
                searchTableData: {},
                tabOne:true,
                tabTwo:false
            }
        },
        created(){ // 生命周期 created,获取数据
            this.first()
            // this.searchTableData()
        },
        components: {
            "top-menu": TopMenu,
            "searchtable": SearchTable,
            "calendar": Calendar,
            "medicalmessage": Medicalmessage,
            "medicalmaterial": Medicalmaterial,
            "diagnostic": Diagnostic,
            "filmmaking": Filmmaking,
            "embedding": Embedding,
            "medicalsection": Medicalsection,
            "advice": Advice,
            "cytology": Cytology,
            "login": Login,
            "searchtabletwo":Searchtabletwo
        },
        methods: {
            medicalInformation: function () {
                $(".medicalInformation").addClass("active");
                $(".medicalInformation").siblings().removeClass("active");
                $('.case-message').css('display', 'block');
                $(".tabs-materials").css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $('.tabs-pay').css('display', 'none');
                $('.tabs-check').css('display', 'none');
                $(".medicalCheck").addClass("closebtn").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            medicalMaterials: function () {
                $(".medicalMaterials").addClass("active");
                $(".medicalMaterials").siblings().removeClass("active");
                $('.tabs-materials').css('display', 'block');
                $('.case-message').css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $('.tabs-pay').css('display', 'none');
                $('.tabs-check').css('display', 'none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            medicalImage: function () {
                $(".medicalImage").addClass("active");
                $(".medicalImage").siblings().removeClass("active");
                $('.tabs-img').css('display', 'block');
                $('.case-message').css('display', 'none');
                $('.tabs-pay').css('display', 'none');
                $('.tabs-check').css('display', 'none');
                $(".tabs-materials").css('display', 'none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            medicalPay: function () {
                $(".medicalPay").addClass("active");
                $(".medicalPay").siblings().removeClass("active");
                $('.tabs-pay').css('display', 'block');
                $('.case-message').css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $('.tabs-check').css('display', 'none');
                $(".tabs-materials").css('display', 'none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            medicalCheck: function () {
                $(".medicalCheck").addClass("active");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display', 'block');
                $('.tabs-pay').css('display', 'none');
                $('.case-message').css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $(".tabs-materials").css('display', 'none');
                $(".medicalCheck").addClass("closebtnchange");
                $(".medicalCheck").removeClass("closebtn");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            filmmaking: function () {
                $(".filmmaking").addClass("filmmakingactive");
                $(".filmmaking").siblings().removeClass("filmmakingactive");
                $('.tabs-filmmaking').css('display', 'block');
                $('.tabs-section').css('display', 'none');
                $('.tabs-advice').css('display', 'none');
                $('.tabs-embedding').css('display', 'none');
                var xhr = new XMLHttpRequest()
                var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                    self.lists = JSON.parse(xhr.responseText);
                }
                xhr.send()
            },
            fetchSectionData: function () {
                $(".section").addClass("filmmakingactive");
                $(".section").siblings().removeClass("filmmakingactive");
                $('.tabs-section').css('display', 'block');
                $('.tabs-embedding').css('display', 'none');
                $('.tabs-advice').css('display', 'none');
                $('.tabs-filmmaking').css('display', 'none');
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                    self.lists = JSON.parse(xhr.responseText);
                }
                xhr.send()
            },
            fetchData: function () {
                $(".embedding").addClass("filmmakingactive");
                $(".embedding").siblings().removeClass("filmmakingactive");
                $('.tabs-embedding').css('display', 'block');
                $('.tabs-section').css('display', 'none');
                $('.tabs-advice').css('display', 'none');
                $('.tabs-filmmaking').css('display', 'none');
                var items = null;
                var xhr = new XMLHttpRequest()
                var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                    self.lists = JSON.parse(xhr.responseText);
                }
                xhr.send()
            },
            method: function () {
                $('.register_check').css('display', 'block');
                $(".medicalCheck").addClass("closebtnchange").removeClass("closebtn");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display', 'block');
                $('.tabs-pay').css('display', 'none');
                $('.case-message').css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $(".tabs-materials").css('display', 'none');
                $(".aaaa").css('display', 'none');

            },
            fetchAdviceData: function () {
                $(".advice").addClass("filmmakingactive");
                $(".advice").siblings().removeClass("filmmakingactive");
                $('.tabs-advice').css('display', 'block');
                $('.tabs-section').css('display', 'none');
                $('.tabs-embedding').css('display', 'none');
                $('.tabs-filmmaking').css('display', 'none');
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                    self.lists = JSON.parse(xhr.responseText);
                }
                xhr.send()
            },
            closebtn: function () {
                $('.tabscheck').hide();
                $('.register_check').hide();
            },
            first: function () {
                $(".aaaa").css('display', 'block');
            },
            showModalContent:function(id){
                // data-toggle="modal" data-target="#printmodal"
                console.log("lll")
                if(id==1){
                $('#historycheck').modal({keyboard: false})
                }
                if(id==2){
                $('#apply').modal({keyboard: false})
                }
                if(id==3){
                $('#advice').modal({keyboard: false})
                }
                if(id==4){
                $('#frozenorder').modal({keyboard: false})
                }
                if(id==5){
                $('#delayreason').modal({keyboard: false})
                }
                if(id==6){
                $('#filllist').modal({keyboard: false})
                }
            },
            patientList:function(){
                this.tabOne=true;
                this.tabTwo=false;
                $('.patientlist').addClass("activeColor");
                $('.myreport').removeClass("activeColor");
            },
            myReport:function(){
                this.tabOne=false;
                this.tabTwo=true;
                $('.myreport').addClass("activeColor");
                $('.patientlist').removeClass("activeColor");
            }
        }
    }
</script>
