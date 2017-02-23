<template>
    <div> 
        <div  class="right-inner">    
            <div class="right-top">
               <button v-for="(item,index) in searchTableData.orderStatusList" class="rightbtntwo right-top-two"  v-bind:style="{background:getOrderStatusColor(index)}" @click="orderStatusClick(item.id)">{{item.name}}
                </button>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label="$t('searchtable.all_library')"></el-checkbox>
                </el-checkbox-group>
            </div>
            <br>
            <div class="grop-search">
                <input type="text" class="floatleft big-search-input" id="app">
                <img src="../assets/images/search.png.png" class="big-search-img">
                <form  class="floatleft ">
                    <select class="big-search-sel  ">
                        <option v-for="item in searchTableData.selectNoList">{{item.name}}</option>  
                    </select>
                </form>
                <button  class="select-search-btn floatleft" @click="find">{{$t('searchtable.extract')}}</button>
            </div>
            <!-- <div class="big-search">
                
            </div> -->
            <div class="reportSearch">
                <p class="searchcontent"><span>我的未诊断报告</span></p>
                <p class="searchcontent"><span>我的未审核报告</span></p>
                <p class="searchcontent"><span>我的未打印报告</span></p>
                <p class="searchcontent"><span>我的未发送报告</span></p>
                <p class="searchcontent"><span>我的收藏病例</span></p>
                <p class="searchcontent"><span>我的延期报告</span></p>
                <p class="searchcontent"><span>我提交的报告</span></p>
                <p class="searchcontent"><span>我的报告</span></p>
            </div>
            <div class="clear"></div>
            <div class="table-show tabtwotable">
                <div>
                <table >
                    <thead>
                        <tr>
                            <th class="pictable"></th>
                            <th class="statustable"></th>
                            <th class="pathology-table">病理号</th>
                            <th class="name-table">姓名</th>
                            <th class="sex-table">性别</th>
                            <th class="age-table">年龄</th>
                            <th class="hospitalized-table">住院号</th>
                            <th class="unit-table">送检单位</th>
                            <th class="department-table">送检科室</th>
                            <th class="sample-table">标本名称</th>  
                        </tr>
                    </thead>
                </table>
                </div>
                <div class="el-table__body-wrapper">
                <table style="table-layout:fixed">
                    <tbody v-for="item in tabledatas.orderlist">
                        <tr  @click="showRegisterMessage(item.patient.patientId)">
                            <td class="pictable"> 
                                 <el-tooltip class="item"  content="相关诊断" placement="top">
                                <el-tag>
                                <div class="relateimgon relateclick" @click="showrelate" :id="item.patient.patientId"></span>
                                </div>
                                </el-tag>
                                </el-tooltip>
                            </td>
                            <td class="statustable">冰</td>
                            <td class="pathology-table">{{item.pathologyNo}}</td>
                            <td class="name-table"><div class="textoverflow nameover">{{item.patient.patientName}}</div></td>
                            <td class="sex-table">{{item.patient.sex}}</td>
                            <td class="age-table">{{item.patient.age}}</td>
                            <td class="hospitalized-table"><div class="textoverflow hospitalized-over">20106235261svhgghdcvashgdc</div></td>
                            <td class="unit-table">20106235261</td>
                            <td class="department-table">20106235261</td>
                            <td class="sample-table">1</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div class="right-bottom">
                <a class="activecolor"  v-for="item in searchTableData.aList" @click="modalSelect(item.id)">{{item.name}}</a>
            </div>
        </div>
    <div class="relatelist" v-if="listshow">
        <relatetable :relationshow="method" :relationdate="(relateListDatas)" />
    </div> 
    <div class="modal fade" id="historycheck" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modalhistorycheck/>
    </div> 
    <div class="modal fade" id="apply" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modalapply/>
    </div> 
    <div class="modal fade" id="advice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modaladvice/>
    </div> 
    <div class="modal fade" id="filllist" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modalfilllist/>
    </div> 
    <div class="modal fade" id="frozenorder" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modalfrozenorder/>
    </div>
    <div class="modal fade" id="delayreason" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <modaldelayreason/>
    </div>    
</div>
</template>
<style>
.tabtwotable{
    height: 330px;
    margin-top: 0px;
}
.reportSearch{
    margin-top: 5px;
    width: 260px;
    height: 90px;
}
.searchcontent{
    display: block;;
    width: 125px;
    height: 20px;
    float: left;
    line-height: 20px;
    color:#2eacd5;
    
}
.searchcontent span{
    cursor: pointer;
}
</style>
<script>
    import {mapState} from 'vuex';
    import $ from "jQuery";
    import Calendar from 'components/calendar';
    import Relatetable from 'components/relatetable';
    import Modalhistorycheck from 'components/modalhistorycheck';
    import Modalapply from 'components/modalapply';
    import Modaladvice from 'components/modaladvice';
    import Modalfilllist from 'components/modalfilllist';
    import Modalfrozenorder from 'components/modalfrozenorder';
    import Modaldelayreason from 'components/modaldelayreason';
    export default{
        data() {
            return {
                listshow:false,
                checkList: [],
                relateListDatas: {},
                searchTableData: {},
                bmobCheckList: [],
                tabledatas: {},
                statusColors:["#4d7cbe","#6bc664","#5acdce","#d99165","#e975c1","#dc5b5b","dfd06d","#b0bec5","dfd06d","#b0bec5","dfd06d","#b0bec5","dfd06d","#b0bec5"]
            }
        },
        components: {
            "calendar": Calendar,
            "relatetable": Relatetable,
            "modalhistorycheck":Modalhistorycheck,
            "modalapply":Modalapply,
            "modaladvice":Modaladvice,
            "modalfilllist":Modalfilllist,
            "modalfrozenorder":Modalfrozenorder,
            "modaldelayreason":Modaldelayreason
        },
        props: ['tableshow'],
        created(){
            this.tableData();
            this.searchTable();
        },
        methods: {
            async relateListData () {
                const response = await
                fetch('/api/hello', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        firstParam: 'yourValue',
                    })
                });
                const json = await
                response.text();
                const data = JSON.parse(json);
                this.relateListDatas = data;
            },

            async tableData () {
            const response = await fetch('/api/test',{ 
                method: 'POST',
                headers: { 
                   "Content-type": "application/json; charset=UTF-8" 
                }, 
                body: JSON.stringify({ 
                    firstParam: 'yourValue',
                })
            });
            const json = await response.text();
            const data = JSON.parse(json);
            this.tabledatas = data;
            console.log(this.tabledatas)
            },

            async searchTable () {

                // const response = await fetch('/api/test',{ 

                const response = await
                fetch('/search-panel/load', {

                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({})
                });
                const json = await response.text();
                const data = JSON.parse(json);
                this.searchTableData = data;

            },
            toggle: function () {
                $(".bmobbox").animate({marginLeft: "538px"}, 100).fadeToggle();
                if ($(".grop-search-lines").hasClass('grop-search-line1')) {
                    $(".grop-search-lines").removeClass('grop-search-line1').addClass('grop-search-line2')
                } else {
                    $(".grop-search-lines").addClass('grop-search-line1').removeClass('grop-search-line2')
                }
                if ($(".grop-search-imgs").hasClass('grop-search-img1')) {
                    $(".grop-search-imgs").removeClass('grop-search-img1').addClass('grop-search-img2')
                } else {
                    $(".grop-search-imgs").addClass('grop-search-img1').removeClass('grop-search-img2')
                }
                if ($(".grop-search-btns").hasClass('grop-search-btn1')) {
                    $(".grop-search-btns").removeClass('grop-search-btn1').addClass('grop-search-btn2')
                } else {
                    $(".grop-search-btns").addClass('grop-search-btn1').removeClass('grop-search-btn2')
                }
            },
            orderStatusClick: function (id) {
                this.$emit('orderStatusClick',id)
                console.log(id)
            },
            getOrderStatusColor:function(index)
            {
                return this.statusColors[index];
            },
            cancle: function () {
                $(".bmobbox").fadeOut(500);
                if ($(".grop-search-lines").hasClass('grop-search-line1')) {
                    $(".grop-search-lines").removeClass('grop-search-line1').addClass('grop-search-line2')
                } else {
                    $(".grop-search-lines").addClass('grop-search-line1').removeClass('grop-search-line2')
                }
                if ($(".grop-search-imgs").hasClass('grop-search-img1')) {
                    $(".grop-search-imgs").removeClass('grop-search-img1').addClass('grop-search-img2')
                } else {
                    $(".grop-search-imgs").addClass('grop-search-img1').removeClass('grop-search-img2')
                }
                if ($(".grop-search-btns").hasClass('grop-search-btn1')) {
                    $(".grop-search-btns").removeClass('grop-search-btn1').addClass('grop-search-btn2')
                } else {
                    $(".grop-search-btns").addClass('grop-search-btn1').removeClass('grop-search-btn2')
                }
            },
            find: function () {

            },
            showrelate:function(e){
                var vvv=$(e.target).attr('id');
                this.listshow=!(this.listshow);
                this.relateListData ();
                e.stopPropagation();
            },
            showRegisterMessage:function(id){
                // var patientId=$(e.target).parents("tr:eq(0)").attr('data-patientId');
                this.$emit('showRegisterMessage',id)
            },
            modalSelect:function(id){
                // var id=$(e.target).attr('id');
               this.$emit('modalSelect',id) 
               console.log(id)
           },
            method: function () {
                this.tableshow();
                $('.relatelist').hide()
            },
            handleEdit: function (index, row) {
                console.log(index, row);
            },
            mounted () {
                this.searchTableData();
            },
        }
    };
</script>