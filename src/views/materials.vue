<template>
    <div class="all">
    <div id="materials">
        <top-menu/>
        <div  id="middle-left">
            <topmessage />
            <div class="case-message">
                <div class="case-tabs">
                    <a  class="active medicalInformation"  v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p class="close" @click="closebtn"></p></a><br>    
                </div>
                <medicalmessage ref="medicalMessage" v-on:orderSaved="orderSaved"/>
            </div>
            <div  class="tabs-materials">
                <div class="case-tabs">
                    <a  class="active medicalInformation"  v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a class="medicalMaterials"  v-on:click="medicalMaterials">{{$t('register.draw_materials_message')}}</a><a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p class="close" @click="closebtn"></p></a><br>
                </div>
                <medicalmaterial ref="medicalmaterial"/>
            </div>
            <div  class="tabs-img">
                <div class="case-tabs">
                    <a  class="active medicalInformation"  v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a class="medicalMaterials"  v-on:click="medicalMaterials">{{$t('register.draw_materials_message')}}</a><a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p class="close" @click="closebtn"></p></a><br>
                </div>
                123
            </div>
            <div  class="tabs-pay">
                <div class="case-tabs">
                    <a  class="active medicalInformation"  v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a class="medicalMaterials"  v-on:click="medicalMaterials">{{$t('register.draw_materials_message')}}</a><a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p class="close" @click="closebtn"></p></a><br>
                </div>
                456
            </div>
            <div  class="tabs-check">
                <div class="case-tabs">
                    <a  class="active medicalInformation"  v-on:click="medicalInformation">{{$t('register.medical_information')}}</a><a class="medicalMaterials"  v-on:click="medicalMaterials">{{$t('register.draw_materials_message')}}</a><a class="medicalImage" v-on:click="medicalImage">{{$t('register.medical_img')}}(10)</a><a class="medicalPay" v-on:click="medicalPay">{{$t('register.medical_pay')}}</a><a class="medicalCheck register_check closebtnchange" v-on:click="medicalCheck"><p class="close" @click="closebtn"></p></a><br>
                </div>
                <div class="tabscheck">789</div>
            </div>
        </div>
        <div  id="middle-right">
            <searchtable :tableshow="method" v-on:orderItemClick="orderItemClick" ref="searchtable"/>
    </div>
     </div>
 </div>
</template>
<style>
.all{
    min-width: 1340px;
}
#materials{
    font-size: 14px;
    width: 100%;
    min-width:1340px;
    position: relative;
}
.case-message,.tabs-pay,.tabs-img,.tabs-check,.tabs-materials{
    width: 1052px;
    margin:6px 7px;
    height:660px;
    background:#fff;    
}
.tabs-pay,.tabs-img,.tabs-check,.tabs-materials{
    display:none;
}
.left-bottom .picture-img:hover{
    background: url('../assets/images/register.png')  -32px -35px no-repeat;
}
.left-bottom .refresh-img{
    background: url('../assets/images/picture.png.png') no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float:left;
}
.left-bottom .refresh-img:hover{
    background: url('../assets/images/register.png')  -68px -35px no-repeat;
}
#filmmaking-main{
    height: 660px;
    background: #eceef2;
    margin-top: -655px;
}
.filmmaking-main{
    margin:6px;
    background: #fff;
    height: 650px;
}
.filmmaking-main-top .tabs-case{
    width: 100%;
    height:30px;
    background: red;
    min-width: 1330px;
}
.case-tabss .filmmakingactive{
    background: #57bdde;
    color: #fff;
}
#middle-left .medicalPay{
    width: 38px;
}
.tabs-embedding,.tabs-section,.tabs-advice,.tabs-filmmaking{
    width:100%;
    height: 660px;
}
.tabs-section,.tabs-advice,.tabs-filmmaking{
    display: none;
}
body #materials .closebtn{
    display: block;
    background: url('../assets/images/relatecheck.png') no-repeat  -4px -2px;
    width:78px;
    height:22px;
    margin: 0;
    margin-left: 3px;
    margin-top: 0px;
}
body #materials .closebtnchange{
    background: url('../assets/images/relatecheck.png') no-repeat  -4px -26px;
    width:78px;
    height:22px;
    margin: 0;
    margin-left: 3px;
    margin-top: 0px;
    display: none; 
}
body #materials .register_check{
    background-color: transparent;
}
#materials .close{
    display: block;
    width: 20px;
    height: 22px;
    margin-left: -2px;
}
</style>
<script>
import {mapState} from 'vuex';
    import TopMenu from 'components/topmenu';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    import Medicalmaterial from 'components/medicalmaterial';
    import Topmessage from 'components/topmessage';
    export default{
        data(){
            return{
                aa:10,
                pickerOptions0: {
               disabledDate(time) {
                 return time.getTime() < Date.now() - 8.64e7;
                            },
                
        },
        materialInitialData:{},
         materialPartsList:{}
    }
        },
        created(){ // 生命周期 created,获取数据
          this.first()
        },

        components:{
            "top-menu":TopMenu,
            "searchtable":SearchTable,
            "calendar":Calendar,
            "medicalmessage":Medicalmessage,
            "medicalmaterial":Medicalmaterial,
            "topmessage":Topmessage
        },
        methods:{
            medicalInformation:function(){
                $(".medicalInformation").addClass("active");
                $(".medicalInformation").siblings().removeClass("active");
                $('.case-message').css('display','block');
                $(".tabs-materials").css('display','none');
                $('.tabs-img').css('display','none');
                $('.tabs-pay').css('display','none');
                $('.tabs-check').css('display','none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if($('.aaaa').css('display','block')){
                   $('.register_check').css('display','none') 
               }else{
                $('.closebtnchange').css('display','block')
               }
            },
            medicalMaterials:function(){
                $(".medicalMaterials").addClass("active");
                $(".medicalMaterials").siblings().removeClass("active");
                $('.tabs-materials').css('display','block');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $('.tabs-pay').css('display','none');
                $('.tabs-check').css('display','none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if($('.aaaa').css('display','block')){
                   $('.register_check').css('display','none') 
               }else{
                $('.closebtnchange').css('display','block')
               }
            },
            medicalImage:function(){
                $(".medicalImage").addClass("active");
                $(".medicalImage").siblings().removeClass("active");
                $('.tabs-img').css('display','block');
                $('.case-message').css('display','none');
                $('.tabs-pay').css('display','none');
                $('.tabs-check').css('display','none');
                $(".tabs-materials").css('display','none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if($('.aaaa').css('display','block')){
                   $('.register_check').css('display','none') 
               }else{
                $('.closebtnchange').css('display','block')
               }
            },
            medicalPay:function(){
                $(".medicalPay").addClass("active");
                $(".medicalPay").siblings().removeClass("active");
                $('.tabs-pay').css('display','block');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $('.tabs-check').css('display','none');
                $(".tabs-materials").css('display','none');
                $(".medicalCheck").addClass("closebtn");
                $(".medicalCheck").removeClass("closebtnchange");
                if($('.aaaa').css('display','block')){
                   $('.register_check').css('display','none') 
               }else{
                $('.closebtnchange').css('display','block')
               }
            },
            medicalCheck:function(){
                $(".medicalCheck").addClass("active");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display','block');
                $('.tabs-pay').css('display','none');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $(".tabs-materials").css('display','none');
                $(".medicalCheck").addClass("closebtnchange");
                $(".medicalCheck").removeClass("closebtn");
            },
            fetchData:function(){
                $(".embedding").addClass("filmmakingactive");
                $(".embedding").siblings().removeClass("filmmakingactive");
                $('.tabs-embedding').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-filmmaking').css('display','none');
                var items=null;
                var xhr = new XMLHttpRequest()
                var self = this  // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
                xhr.open('POST','/api/hello' )
                xhr.onload = function () {
                self.lists = JSON.parse(xhr.responseText);
                }
                xhr.send()
            },
            method:function(){
                $('.register_check').css('display','block');
                $(".medicalCheck").addClass("closebtnchange")
                $(".medicalCheck").removeClass("closebtn");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display','block');
                $('.tabs-pay').css('display','none');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $(".tabs-materials").css('display','none');
                $(".aaaa").css('display','none');

            },
            fetchAdviceData:function(){
                $(".advice").addClass("filmmakingactive");
                $(".advice").siblings().removeClass("filmmakingactive");
                $('.tabs-advice').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-embedding').css('display','none');
                $('.tabs-filmmaking').css('display','none');
                var xhr = new XMLHttpRequest()
                var self = this 
                xhr.open('POST', '/api/hello')
                xhr.onload = function () {
                self.lists=JSON.parse(xhr.responseText);
              }
              xhr.send()
            },
            closebtn:function(){
                $('.tabscheck').hide();
                $('.register_check').hide();
            },
            first:function(){
                 $(".aaaa").css('display','block');
            },
            showMaterialsModal:function(id){
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
            }, async orderItemClick(orderId) {

                var medicalMessage = this.$refs.medicalMessage;
                medicalMessage.loadOrder(orderId);

                var medicalmaterial = this.$refs.medicalmaterial;
                medicalmaterial.setOrderId(orderId);
            }, async orderSaved(){
                var searchtable = this.$refs.searchtable;
                searchtable.search();
            }
    }   
}
</script>
