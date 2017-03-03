<template>
    <div class="all">
        <div id="register" >
            <top-menu/>
            <div id="middle-left">
                <topmessage ref="topmessage" />
                <div class="case-tabs">
                    <a class="medicalInformation" :class="{active: medicalMessage}" @click="medicalInformation">{{$t('register.medical_information')}}
                    </a>
                    <a class="medicalImage" :class="{active: medicalImg}" @click="medicalImage">{{$t('register.medical_img')}}(10)
                    </a>
                    <a class="medicalPay" :class="{active: medicalPay}" @click="medicalCharge">{{$t('register.medical_pay')}}
                    </a>
                    <a class="medicalCheck register_check closebtnchange" @click="medicalCheck">
                        <p class="close" @click="closebtn"></p>
                    </a><br>
                </div>
                <div class="case-message" v-show="medicalMessage">
                    <medicalmessage ref="medicalMessage" v-on:orderSaved="orderSaved"/>
                </div>
                <div class="tabs-img" v-show="medicalImg">
                    123
                </div>
                <div class="tabs-pay" v-show="medicalPay">
                    456
                </div>
                <div class="tabs-check">
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
.case-message, .tabs-pay, .tabs-img, .tabs-check{
    width: 1052px;
    margin: 0px 7px;
    height: 633px;
    background: #fff;
    margin-top: -26px;
}
.tabs-pay, .tabs-img, .tabs-check{
    margin-top: 0px;
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
#middle-left .medicalPay {
    width: 38px;
}
#register .closebtn {
    display: block;
    background: url('../assets/images/relatecheck.png') no-repeat -4px -2px;
    width: 78px;
    height: 22px;
    margin: 0;
    margin-left: 3px;
    margin-top: 0px;
}
#register .closebtnchange {
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
.case-tabs{
    display: block;
    width:1052px;
    height: 30px;
    background: #fff;
    margin-left: 7px;
}
.tabs-check{
    display: none;
}
</style>
<script>
    import TopMenu from 'components/topmenu';
    import AuthorityValidation from 'components/authorityvalidation';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery";
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    import Topmessage from 'components/topmessage';
    export default{
        data(){
            return {
                medicalMessage:true,
                medicalImg:false,
                medicalPay:false,
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
                this.medicalMessage=true;
                this.medicalImg=false;
                this.medicalPay=false;
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
                this.medicalMessage=false;
                this.medicalImg=true;
                this.medicalPay=false;
                $('.tabs-check').css('display', 'none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none')
                } else {
                    $('.closebtnchange').css('display', 'block')
                }
            },
            medicalCharge:function(){
                this.medicalMessage=false;
                this.medicalImg=false;
                this.medicalPay=true;
                $('.tabs-check').css('display', 'none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if ($('.aaaa').css('display', 'block')) {
                    $('.register_check').css('display', 'none');
                } else {
                    $('.closebtnchange').css('display', 'block');
                }
            },
            medicalCheck: function () {
                $(".medicalCheck").addClass("active");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display', 'block');
                $('.tabs-pay').css('display', 'none');
                $('.case-message').css('display', 'none');
                $('.tabs-img').css('display', 'none');
                $(".medicalCheck").addClass("closebtnchange");
                $(".medicalCheck").removeClass("closebtn");
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
        },
        created(){ // 生命周期 created,获取数据
            this.first()
        },
        mounted(){

        }
    }
</script>
