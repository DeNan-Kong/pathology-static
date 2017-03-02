<template>
    <div class="all">
     <div id="filmmaking">
        <top-menu/>
        <div  id="filmmaking-main">
           <div class="filmmaking-main">
                <div class="case-tabss">
                    <a class="embedding" :class="{filmmakingactive: embedding}" @click="fetchData">{{$t('register.embedding_list')}}(<span>3</span>)</a>
                    <a class="section" :class="{filmmakingactive: medicalSection}" @click="fetchSectionData">{{$t('register.slice_list')}}(<span>5</span>)</a>
                    <a class="advice" :class="{filmmakingactive: advice}" @click="fetchAdviceData">{{$t('register.advice_list')}}(10)</a>
                    <a class="filmmaking" :class="{filmmakingactive: filmmaking}" @click="fetchFilmmarkingData">{{$t('register.production_list')}}(5)</a><br>
                </div>
                <div class="tabs-embedding" v-show="embedding" >
                    <embedding />
                </div>
                <div class="tabs-section" v-show="medicalSection">    
                    <medicalsection />
                </div>
                <div class="tabs-advice" v-show="advice">    
                    <advice/>
                </div>
                <div class="tabs-filmmaking" v-show="filmmaking">
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
                embedding:true,
                medicalSection:false,
                advice:false,
                filmmaking:false,
                pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                    this.state={
                    lists:[],//初始白名单为空
                        }
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
            "advice":Advice
        },
        methods:{
            fetchData:function(){
                this.embedding=true;
                this.medicalSection=false;
                this.advice=false;
                this.filmmaking=false;
            },
            fetchSectionData:function(){
                this.embedding=false;
                this.medicalSection=true;
                this.advice=false;
                this.filmmaking=false;
            },
            fetchAdviceData:function(){
                this.embedding=false;
                this.medicalSection=false;
                this.advice=true;
                this.filmmaking=false;
            },
            fetchFilmmarkingData:function(){
                this.embedding=false;
                this.medicalSection=false;
                this.advice=false;
                this.filmmaking=true;
            },            
        }
    }
</script>
