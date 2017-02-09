<template>
    <div>
        <div class="case-content">
            <div class="case-num">
                <div class="case-num-one">
                    <p class="floatleft p-one">HIS识别码:</p><input type="text" class="floatleft  input-his  radium" ref="write1">
                    <form class="floatleft" >
                        <select class="sel-his">
                            <option v-for="item in initialData.specimenTypeList"> 
                                {{ item.name }}
                            </option>
                        </select>
                    </form>
                    <button class="floatleft  but-his">提取</button>
                    <p class="floatleft  p-three">病人ID:</p><input type="text" class="floatleft input-id  radium" ref="write2">
                    <p class="floatleft  p-mark p-four">冰冻标识:</p>
                    <input type="text" class="floatleft  radium input-mark" ref="write3">
                    <button class="arrow"></button>
                </div>
                <br>
                <div class="case-num-two">
                    <p class="floatleft p-one">病理号:</p><input type="text" class="floatleft  p-margin  radium">
                    <p class="floatleft  p-two">申请号:</p><input type="text" class="floatleft  p-margin  radium"
                                                               ref="write4">
                    <p class="floatleft  p-three">门诊号:</p><input type="text" class="floatleft p-margin radium"
                                                                 ref="write5">
                    <p class="floatleft   p-four">住院号:</p><input type="text" class="floatleft p-margin radium "
                                                                 ref="write6">
                </div>
            </div>
            <div class="case-name">
                <div class="name-num-one">
                    <p class="p-one floatleft">姓名:</p><input type="text" class="floatleft  p-margin  radium"
                                                             ref="write7">
                    <p class="floatleft  p-two">性别:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenTypeList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-three">年龄:</p>
                    <input type="text" class="floatleft input-age radium" ref="write8">
                    <form class="floatleft ">
                        <select class="sel-sup  radium-sup">
                            <option v-for="item in initialData.specimenTypeList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft   p-four">民族:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.nationList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="name-num-two">
                    <p class="floatleft p-one">婚否:</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup">
                            <option v-for="item in initialData.maritalStatusList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-two">职业:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.professionList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-three">手机号码:</p><input type="text" class="floatleft p-margin radium" ref="write10">
                    <p class="floatleft   p-four">身份证号:</p><input type="text" class="floatleft p-margin radium" ref="write11">
                </div>
                <div class="name-num-three">
                    <p class="floatleft p-one">联系信息:</p><input type="text" class="floatleft   p-big  radium"
                                                               ref="write12">
                    <p class="floatleft  p-three">末次月经:</p>
                    <calendar/>
                    <p class="floatleft  p-four">绝经:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenTypeList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
            </div>
            <div class="case-hospital">
                <div class="hospital-num-one">
                    <p class="floatleft p-one">送检单位:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.inspectUnitList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-two">送检科室:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.inspectDepartmentList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-three">送检医生:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.submittingPhysicianList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft   p-four">送检日期:</p>
                    <calendar/>
                </div>
                <div class="hospital-num-two">
                    <p class="floatleft p-one">病区:</p><input type="text" class="floatleft  p-margin  radium"
                                                             ref="write13">
                    <p class="floatleft  p-two">床号:</p><input type="text" class="floatleft  p-margin  radium"
                                                              ref="write14">
                    <p class="floatleft  p-three">标本类型:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenTypeList">
                                {{ item.name }}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">标本情况:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenSituationList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="hospital-num-three">
                    <p class="floatleft p-one">标本名称:</p>
                    <form class="floatleft ">
                        <select class="p-big  radium-sup">
                            <option v-for="item in initialData.specimenNameList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-three">不合格原因:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenTypeList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-four">标本接收:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.specimenReceiveList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="hospital-num-four">
                    <p class="floatleft p-one">费别:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option v-for="item in initialData.chargeTypeList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-two">收费:</p><input type="text" class="floatleft p-margin  radium" ref="write9">
                    <p class="floatleft p-three">取材医生:</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup">
                            <option v-for="item in initialData.sampleDoctorList">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-four">接收日期:</p>
                    <calendar/>
                </div>
                <div class="hospital-num-five">
                    <p class="floatleft p-one">临床诊断:</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium  input-doctor">
                            <option v-for="item in initialData.clinicalDiagnosisList"> {{item.name}}</option>
                        </select>
                    </form> 
                    <p  class="floatleft  p-four ">术间电话:</p><input type="text"  class="floatleft  p-margin  radium"  ref="write15">
                </div>
                <div class="hospital-num-six">
                    <p class="floatleft p-one">病史摘要:</p>
                    <textarea class="floatleft ill-abstract radium " ref="write16"></textarea>
                    <p class="floatleft p-one">手术所见:</p>
                    <textarea type="text" class="floatleft ill-see radium " ref="write17"></textarea>
                </div>
            </div>
            <div  class="left-button">
                <button  class="left-button-two"  @click="refund">清&nbsp;除</button>
                <button  class="left-button-two"  @click="print">打&nbsp;印</button> 
                <button  class="left-button-two" @click="save">保&nbsp;存</button>
                <button  class="left-button-five" @click="newsave">保存且新建</button>
                <button  class="left-button-two" @click="newproject">新&nbsp;建</button>    
            </div>
            <div class="left-bottom">
                <div  class="picture-img" @click="refresh"></div> 
                <div  class="refresh-img"></div>    
            </div>
        </div>
    </div>
</template>
<style>
.case-tabs>a{
    display:block;
    width:62px;
    height:22px;
    background:#d0eaf8;
    float:left;
    margin-left: 3px;
    text-align:center;
    line-height:22px;
    color:#999;
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
    cursor: pointer;
    text-decoration: none;
}
.case-tabs .active{
    background:#57bdde;
    color:#fff;
}
.case-content{
    width: 1020px;
    height: 68px;
    margin-left:14px;
    border-bottom: 1px solid #e5e5e5; 
}
.case-num{
    height:66px;
    width: 1020px;
    margin-top: 25px;
}
.radium-sup{
    border-radius:3px;
    border-color:#cccccc; 
}
.input-his{
    width:234px;
    height:24px;
    margin-left: 10px;
    border:1px solid #cccccc;
}
.sel-his{
    width:80px;
    height:23px;
    margin-left: 14px;
    border:1px solid #cccccc;
     border-radius:3px;
}
.arrow{
    width: 24px;
    height: 24px;
    background:url('../assets/images/arrow.png')no-repeat -8px -6px;
    margin-left: 5px;
    border-radius: 3px;
}
.arrow:hover{
    background:url('../assets/images/arrow.png')no-repeat -39px -6px;
}
.but-his{
    width:58px;
    height:24px; 
    margin-left:9px;
    background:#428bca;
    border-radius:3px;
    color:#fff;
}
.but-his:hover{
    background:#3577af;
}
.input-id{
    margin-left: 9px;
    width: 155px;
    height:24px;    
}
.input-mark{
    width:125px;
    margin-left: 13px;
}
.case-num-one,.case-num-two,.name-num-one,.name-num-two,.name-num-three{
    height:33px;
}
.case-num-two{
    margin-top: -15px;
}
.case-name{
    height:100px;
    margin-top: 10px;
    border-bottom: 1px solid #e5e5e5;
}
.case-hospital{
    margin-top: 10px;
}
.sel-sup{
    margin-left: 5px;
    width: 38px;
}
.input-age{
    margin-left: 10px;
    width: 111px;
}
.input-doctor{
    width:659px;
    margin-left: 10px;
}
.ill-abstract{
    width:920px;
    height: 100px;
    margin-left: 10px;
    margin-top: 5px;
}
.ill-see{
    width: 920px;
    height: 54px;
    margin-left: 10px;
    margin-top: 5px;
}
.left-button button{
    background:#428bca;
    color:#fff;
    height:34px;
    border-radius:3px;
    margin-top: 24px;
    float: right;
    margin-left: 15px;
}
.left-button{
    width: 996px;
    height: 68px;
    margin-left:14px; 
    clear: both;
}
.left-button-two{
    width:74px;
}
.left-button-four{
    width:74px;
}
.left-button-five{
    width:88px;

}
.left-bottom .picture-img,.left-bottom .refresh-img{
    margin-left: 6px;
}
.left-bottom .picture-img{
    background: url('../assets/images/refresh.png.png')no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float: left;
}
.big-search-img{
    margin-left: -240px;
    margin-top: 8px;
}
.left-button button:hover{
    background:#3577af;
}
.table-show .th-three{
    width:66px;
}
#header {
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
}
#middle-left{
    width:1043px;
    height:100%;
    margin-top: -655px;
    float: left;
}
.middle-message{
    width:1052px;
    height:30px;
    margin:6px 7px;
    background:#fff;
    line-height: 30px;
    font-size: 14px;
    color: #83a8dc;
    position:relative;
    font-weight: bold;
}
.middle-message>span{
    margin-left: 20px;
}
.middle-message>p{
    display: block;
    width:82px;
    height:24px;
    background:#4d7cbe;
    position:absolute;
    right:10px;
    line-height:24px;
    text-align:center;
    top:3px;
    color:#fff;
}
</style>
<script>
    import TopMenu from 'components/topmenu';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    export default{
        data(){
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                initialData:{}
            }
        },
        components: {
            // "top-menu": TopMenu,
            "searchtable": SearchTable,
            "calendar": Calendar,
            "medicalmessage": Medicalmessage
        },
        methods: {
            async loadData () {
                const response = await fetch('/register/load',{ 
                    method: 'POST',
                    headers: { 
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
                    }, 
                    body: JSON.stringify({ 
                        firstParam: 'yourValue',
                        secondParam: 'yourOtherValue'
                    })
                });
                const json = await response.text();
                const data = JSON.parse(json);
                this.initialData = data;
            },
            newproject: function () {
                $("textarea").val('');
                $("input").val('');
            },
            refresh:function(){
                $("textarea").val('');
                $("input").val(''); 
            },
            newsave:function(){
                $("textarea").val('');
                $("input").val('');
            },
            save: function () {
                console.log("save")
            },
            print: function () {
                console.log("print")
            },
            refund: function () {
                console.log("refund")
            }
        },
        mounted () {
            this.loadData();
        }
    }
</script>



