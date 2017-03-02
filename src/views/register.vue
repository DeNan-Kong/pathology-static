<template>
    <div class="all">


        <div id="register" >
            <top-menu/>
            <div id="middle-left">
                <topmessage ref="topmessage"/>
                <div class="case-message">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a>
                        <a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a>
                        <a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a>
                        <a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck">
                        <p class="close" @click="closebtn"></p>
                    </a><br>
                    </div>
                    <medicalmessage ref="medicalMessage" v-on:orderSaved="orderSaved"/>
                </div>
                <div class="tabs-img">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a
                            class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a
                            class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a
                            class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p
                            class="close" @click="closebtn"></a><br>
                    </div>
                    123
                </div>
                <div class="tabs-pay">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a
                            class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a
                            class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a
                            class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p
                            class="close" @click="closebtn"></p></a><br>
                    </div>
                    456
                </div>
                <div class="tabs-check">
                    <div class="case-tabs">
                        <a class="active  medicalInformation" v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a
                            class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a
                            class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a
                            class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p
                            class="close" @click="closebtn"></p></a><br>
                    </div>
                    <div class="tabscheck">789</div>
                </div>
            </div>
            <div  id="middle-right">
            <searchtable v-on:modalSelect="showRegisterModal" v-on:orderItemClick="orderItemClick" ref="searchtable" />
        </div>
        </div>
    </div>
</template>
<style>
    .all {
        min-width: 1340px;
    }

    #register {
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

    body #register .closebtn {
        display: block;
        background: url('../assets/images/relatecheck.png') no-repeat -4px -2px;
        width: 78px;
        height: 22px;
        margin: 0;
        margin-left: 3px;
        margin-top: 0px;
    }

    body #register .closebtnchange {
        background: url('../assets/images/relatecheck.png') no-repeat -4px -26px;
        width: 78px;
        height: 22px;
        margin: 0;
        margin-left: 3px;
        margin-top: 0px;
        display: none;
    }

    #register .close {
        display: block;
        width: 20px;
        height: 22px;
        margin-left: -2px;
    }

</style>
<script>
    import TopMenu from 'components/topmenu';
    import AuthorityValidation from 'components/authorityvalidation';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    import Topmessage from 'components/topmessage';
    export default{
        data(){
            return {
                aa: 10,
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                authorityResult:false //登录成功
            }
        },
        components: {

            "top-menu": TopMenu,
            "searchtable": SearchTable,
            "calendar": Calendar,
            "medicalmessage": Medicalmessage,
            "topmessage": Topmessage,
            "authorityValidation":AuthorityValidation
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
                var self = this
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
            searchByStatus:function (id) {
                alert(id);
            },
            showMessageContent:function(id){
                alert(id)
            },
            showRegisterModal:function(id){
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
            async orderItemClick(orderId) {
                var medicalMessage = this.$refs.medicalMessage;
                medicalMessage.loadOrder(orderId);

                var topmessage = this.$refs.topmessage;
                topmessage.showPatientInformation(orderId);
            },
            async orderSaved(){
                var searchtable = this.$refs.searchtable;
                searchtable.search();
            },   authorityValidationCompleted(authorityResult){
                this.authorityResult = authorityResult;
            }
        },created(){ // 生命周期 created,获取数据
            this.first()
        },mounted(){

        }
    }
</script>
