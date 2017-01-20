<template>
    <div>
     <div id="register">
        <top-menu/>
        <div  id="middle-left">
            <div class="middle-message">
                <span>当前病人：测试</span><span>病理号：20070305</span><span>男</span><span>65岁</span><span>住院号：20073154</span><span>送检科室：放射科</span><span>标本名称：大体</span>
                <p>冰冻&nbsp;&nbsp;常规</p>
            </div>
            <div class="case-message">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                <medicalmessage/>
            </div>
            <div  class="tabs-img">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                123
            </div>
            <div  class="tabs-pay">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                456
            </div>
            <div  class="tabs-check">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                789
            </div>
        </div>
        <searchtable/>
    </div>
     <div id="materials">
        <top-menu/>
        <div  id="middle-left">
            <div class="middle-message">
                <span>当前病人：测试</span><span>病理号：20070305</span><span>男</span><span>65岁</span><span>住院号：20073154</span><span>送检科室：放射科</span><span>标本名称：大体</span>
                <p>冰冻&nbsp;&nbsp;常规</p>
            </div>
            <div class="case-message">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>    
                </div>
                <medicalmessage/>
            </div>
            <div  class="tabs-materials">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                <medicalmaterial/>
            </div>
            <div  class="tabs-img">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                123
            </div>
            <div  class="tabs-pay">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                456
            </div>
            <div  class="tabs-check">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">取材信息</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalPay" v-on:click="medicalPay">收费</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                789
            </div>
        </div>
        <searchtable/>
     </div>
     <div id="diagnostic">
        <top-menu/>
        <div  id="middle-left">
            <div class="middle-message">
                <span>当前病人：测试</span><span>病理号：20070305</span><span>男</span><span>65岁</span><span>住院号：20073154</span><span>送检科室：放射科</span><span>标本名称：大体</span>
                <p>冰冻&nbsp;&nbsp;常规</p>
            </div>
            <div class="case-message">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">病理诊断</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>    
                </div>
               <medicalmessage/>
            </div>
            <div  class="tabs-materials">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">病理诊断</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
             <diagnostic/> 
            </div>
            <div  class="tabs-img">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">病理诊断</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                123
            </div>
            <div  class="tabs-pay">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">病理诊断</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                456
            </div>
            <div  class="tabs-check">
                <div class="case-tabs">
                    <a  class="active  medicalInformation"  v-on:click="medicalInformation">病历信息</a><a class="medicalMaterials"  v-on:click="medicalMaterials">病理诊断</a><a class="medicalImage" v-on:click="medicalImage">图像(10)</a><a class="medicalCheck" v-on:click="medicalCheck">相关诊断</a><br>
                </div>
                789
            </div>
        </div>
        <searchtable/>
     </div>
     <div id="filmmaking">
        <top-menu/>
        <div  id="filmmaking-main">
           <div class="filmmaking-main">
               
                    <div class="tabs-embedding">
                        <div class="case-tabss">
                            <a class="embedding filmmakingactive" v-on:click="embedding">待包埋列表(<span>3</span>)</a>
                            <a class="section"  v-on:click="section">待切片列表(<span>5</span>)</a>
                            <a class="advice" v-on:click="advice">医嘱列表(10)</a>
                            <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                        </div>
                        <embedding/>
                    </div>
                    <div class="tabs-section">
                        <div class="case-tabss">
                            <a class="embedding filmmakingactive" v-on:click="embedding">待包埋列表(<span>3</span>)</a>
                            <a class="section"  v-on:click="section">待切片列表(<span>5</span>)</a>
                            <a class="advice" v-on:click="advice">医嘱列表(10)</a>
                            <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                        </div>
                        <medicalsection/>
                    </div>
                    <div class="tabs-advice">
                        <div class="case-tabss">
                            <a class="embedding filmmakingactive" v-on:click="embedding">待包埋列表(<span>3</span>)</a>
                            <a class="section"  v-on:click="section">待切片列表(<span>5</span>)</a>
                            <a class="advice" v-on:click="advice">医嘱列表(10)</a>
                            <a class="filmmaking" v-on:click="filmmaking">已制片列表(5)</a><br>
                        </div>
                        <advice/>
                    </div>
                    <div class="tabs-filmmaking">
                        <div class="case-tabss">
                            <a class="embedding filmmakingactive" v-on:click="embedding">待包埋列表(<span>3</span>)</a>
                            <a class="section"  v-on:click="section">待切片列表(<span>5</span>)</a>
                            <a class="advice" v-on:click="advice">医嘱列表(10)</a>
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
#register,#materials,#diagnostic{
    font-size: 14px;
    width: 100%;
}
#diagnostic{
   display: none;
}
#materials{
   display: none;   
}
#register{
 display: none;
}
#filmmaking{
  
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
    width:26px;
    height:26px;
    cursor:pointer;
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
    width:26px;
    height:26px;
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
.case-tabss>a{
    display:block;
    width: 7%;
    height: 22px;
    background:#d0eaf8;
    float:left;
    margin-left: 3px;
    text-align:center;
    line-height:22px;
    color:#999;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    cursor: pointer;
    text-decoration: none;
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
    export default{
        data(){
            return{
                pickerOptions0: {
               disabledDate(time) {
                 return time.getTime() < Date.now() - 8.64e7;
            }
        }
    }
        },
        components:{
            "top-menu":TopMenu,
            "searchtable":SearchTable,
            "calendar":Calendar,
            "medicalmessage":Medicalmessage,
            "medicalmaterial":Medicalmaterial,
            "diagnostic":Diagnostic,
            "filmmaking":Filmmaking,
            "embedding":Embedding,
            "medicalsection":Medicalsection,
            "advice":Advice
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
            },
            medicalMaterials:function(){
                console.log("-------")
                $(".medicalMaterials").addClass("active");
                $(".medicalMaterials").siblings().removeClass("active");
                $('.tabs-materials').css('display','block');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $('.tabs-pay').css('display','none');
                $('.tabs-check').css('display','none');
            },
            medicalImage:function(){
                $(".medicalImage").addClass("active");
                $(".medicalImage").siblings().removeClass("active");
                $('.tabs-img').css('display','block');
                $('.case-message').css('display','none');
                 $('.tabs-pay').css('display','none');
                $('.tabs-check').css('display','none');
                $(".tabs-materials").css('display','none');
            },
            medicalPay:function(){
                $(".medicalPay").addClass("active");
                $(".medicalPay").siblings().removeClass("active");
                $('.tabs-pay').css('display','block');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $('.tabs-check').css('display','none');
                $(".tabs-materials").css('display','none');
            },
            medicalCheck:function(){
                $(".medicalCheck").addClass("active");
                $(".medicalCheck").siblings().removeClass("active");
                $('.tabs-check').css('display','block');
                $('.tabs-pay').css('display','none');
                $('.case-message').css('display','none');
                $('.tabs-img').css('display','none');
                $(".tabs-materials").css('display','none');
            },
            embedding:function(){
                $(".embedding").addClass("filmmakingactive");
                $(".embedding").siblings().removeClass("filmmakingactive");
                $('.tabs-embedding').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-filmmaking').css('display','none');
            },
            section:function(){
                $(".section").addClass("filmmakingactive");
                $(".section").siblings().removeClass("filmmakingactive");
                $('.tabs-section').css('display','block');
                $('.tabs-embedding').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-filmmaking').css('display','none');
            },
            advice:function(){
                $(".advice").addClass("filmmakingactive");
                $(".advice").siblings().removeClass("filmmakingactive");
                $('.tabs-advice').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-embedding').css('display','none');
                $('.tabs-filmmaking').css('display','none');
            },
            filmmaking:function(){
                $(".filmmaking").addClass("filmmakingactive");
                $(".filmmaking").siblings().removeClass("filmmakingactive");
                $('.tabs-filmmaking').css('display','block');
                $('.tabs-section').css('display','none');
                $('.tabs-advice').css('display','none');
                $('.tabs-embedding').css('display','none');
            }


    },
    value1: '',
}
</script>
