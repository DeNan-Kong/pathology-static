<template>
    <div class="all">
     <div id="filmmaking">
        <top-menu/>
        <div  id="filmmaking-main">
           <div class="filmmaking-main">
                <div class="tabs-embedding">
                    <div class="case-tabss">
                        <a class="embedding filmmakingactive" v-on:click="fetchData">待包埋列表(<span>3</span>)</a>
                        <a class="section"  v-on:click="fetchSectionData">待切片列表(<span>5</span>)</a>
                        <a class="advice" v-on:click="fetchAdviceData">医嘱列表(10)</a>
                        <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                    </div>
                    <!-- <embedding :item="(lists)" :get-datas="fetchData" /> -->
                    <embedding />
                </div>
                <div class="tabs-section">
                    <div class="case-tabss">
                        <a class="embedding filmmakingactive" v-on:click="fetchData">待包埋列表(<span>3</span>)</a>
                        <a class="section"  v-on:click="fetchSectionData">待切片列表(<span>5</span>)</a>
                        <a class="advice" v-on:click="fetchAdviceData">医嘱列表(10)</a>
                        <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                    </div>
                    <medicalsection />
                </div>
                <div class="tabs-advice">
                    <div class="case-tabss">
                        <a class="embedding filmmakingactive" v-on:click="fetchData">待包埋列表(<span>3</span>)</a>
                        <a class="section"  v-on:click="fetchSectionData">待切片列表(<span>5</span>)</a>
                        <a class="advice" v-on:click="fetchAdviceData">医嘱列表(10)</a>
                        <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                    </div>
                    <advice/>
                </div>
                <div class="tabs-filmmaking">
                    <div class="case-tabss">
                        <a class="embedding filmmakingactive" v-on:click="fetchData">待包埋列表(<span>3</span>)</a>
                        <a class="section"  v-on:click="fetchSectionData">待切片列表(<span>5</span>)</a>
                        <a class="advice" v-on:click="fetchAdviceData">医嘱列表(10)</a>
                        <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                    </div>
                    <filmmaking/>
                </div>
           </div>    
        </div>
     </div>
 </div>
</template>
<style>
.all{
    min-width: 1340px;
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
#cytology .medicalcytology{
    width: 74px;
}
#cytology .cytologyimg{
    width: 66px;
}

</style>
<script>
    import TopMenu from 'components/topmenu';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmaterial from 'components/medicalmaterial';
    import Filmmaking from 'components/filmmaking';
    import Embedding from 'components/embedding';
    import Medicalsection from 'components/medicalsection';
    import Advice from 'components/advice';
    export default{
        data(){
            return{
                aa:10,
                pickerOptions0: {
               disabledDate(time) {
                 return time.getTime() < Date.now() - 8.64e7;
                 this.state={
            
                lists:[],//初始白名单为空
                };
            }
        }
    }
        },
        created(){ // 生命周期 created,获取数据
         
        },
        components:{
            "top-menu":TopMenu,
            "calendar":Calendar,
            "medicalmaterial":Medicalmaterial,
            "filmmaking":Filmmaking,
            "embedding":Embedding,
            "medicalsection":Medicalsection,
            "advice":Advice,
        },
        methods:{
            filmmaking:function(){
                $(".filmmaking").addClass("filmmakingactive");
                $(".filmmaking").siblings().removeClass("filmmakingactive");
                $('.tabs-filmmaking').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-embedding').css('display','none');
            },
            fetchSectionData:function(){
                $(".section").addClass("filmmakingactive");
                $(".section").siblings().removeClass("filmmakingactive");
                $('.tabs-section').css('display','block');
                $('.tabs-embedding').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-filmmaking').css('display','none');
            },
            fetchData:function(){
                $(".embedding").addClass("filmmakingactive");
                $(".embedding").siblings().removeClass("filmmakingactive");
                $('.tabs-embedding').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-filmmaking').css('display','none');
            },
            method:function(){
                $('.register_check').css('display','block');
                $(".medicalCheck").addClass("closebtnchange").removeClass("closebtn");
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
            },
    }   
}
</script>
