<template>
    <div>
        <div class="case-content">
            <div class="case-num">
                <div class="case-num-one">
                    <p class="floatleft p-one">{{$t('medicalmessage.his_identification_code')}}</p><input type="text" class="floatleft input-his radium" v-model="bindData.inputss">
                    <form class="floatleft">
                        <select class="sel-his null" v-model="bindData.id">
                            <option v-for="item in initialData.hisCodeList"   :value="item.id"> 
                                {{item.name }}
                            </option>
                        </select>
                    </form>
                    <button class="floatleft but-his">{{$t('medicalmessage.extract')}}</button>
                    <p class="floatleft p-three">{{$t('medicalmessage.patient_id')}}</p>
                    <input type="text" class="floatleft input-id radium" v-model="bindData.patient.patientUid">
                    <p class="floatleft p-mark p-four">{{$t('medicalmessage.frozen_logo')}}</p>
                    <input type="text" class="floatleft radium input-mark null" v-model="bindData.frozenNo">
                    <button class="arrow"></button>
                </div>
                <br>
                <div class="case-num-two">
                    <p class="floatleft p-one">{{$t('medicalmessage.pathology')}}</p>
                    <div class="floatleft">
                        <el-tooltip :manual="true" :content="errors.first('pathologyNo')" placement="right" effect="light"
                                    :value="errors.has('pathologyNo')">
                            <input v-validate="'required'" name="pathologyNo"
                                   class="p-margin radium" type="text" v-model="bindData.pathologyNo" :disabled="bindData.orderId!=null">
                        </el-tooltip>
                    </div>
                    <p class="floatleft p-two">{{$t('medicalmessage.application_number')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.applicationNo">
                    <p class="floatleft  p-three">{{$t('medicalmessage.outpatient_service_no')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.patientNo">
                    <p class="floatleft p-four">{{$t('medicalmessage.hospitalized_no')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.inhospitalId">
                </div>
            </div>
            <div class="case-name">
                <div class="name-num-one">
                    <p class="p-one floatleft">{{$t('medicalmessage.name')}}</p>
                    <el-tooltip :manual="true" :content="errors.first('firstName')" placement="right" effect="light" class="floatleft" :value="errors.has('firstName')">
                    <input v-validate="'required'" name="firstName" type="text" class="floatleft p-margin radium null"
                    v-model="bindData.patient.patientName">
                    </el-tooltip>
                    <p class="floatleft p-two">{{$t('medicalmessage.sex')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.patient.sex">
                            <option v-for="item in initialData.sexList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-three">{{$t('medicalmessage.age')}}</p>
                    <input type="text" class="floatleft input-age radium null" v-model="bindData.patientAge">
                    <form class="floatleft">
                        <select class="sel-sup radium-sup null" v-model="bindData.patient.ageUnit">
                            <option v-for="item in initialData.ageUnitList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">{{$t('medicalmessage.national')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium-sup null" v-model="bindData.patient.nationId">
                            <option v-for="item in initialData.nationList" :value="item.nationId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="name-num-two">
                    <p class="floatleft p-one">{{$t('medicalmessage.marital_status')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.patient.maritalStatusId">
                            <option v-for="item in initialData.maritalStatusList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-two">{{$t('medicalmessage.professional')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.patient.professionId">
                            <option v-for="item in initialData.professionList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft  p-three">{{$t('medicalmessage.phone_number')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.patient.phone">
                    <p class="floatleft p-four">{{$t('medicalmessage.Id_number')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.patient.idCard">
                </div>
                <div class="name-num-three">
                    <p class="floatleft p-one">{{$t('medicalmessage.Contact_information')}}</p>
                    <input type="text" class="floatleft p-big radium null">
                    <p class="floatleft p-three">{{$t('medicalmessage.last_menstrual_period')}}</p>
                    <div class="null">
                        <calendar :date="bindData.lmp"  v-on:change="lmpChange"/>
                    </div>
                    <p class="floatleft p-four">{{$t('medicalmessage.menopause')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup null" v-model="bindData.pausimenia">
                            <option v-for="item in initialData.pausimeniaList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
            </div>
            <div class="case-hospital">
                <div class="hospital-num-one hospital-num">
                    <p class="floatleft p-one">{{$t('medicalmessage.Inspection_unit')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup"
                        v-model="bindData.inspectUnitId">
                            <option v-for="item in initialData.inspectUnitList" :value="item.inspectUnitId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-two">{{$t('medicalmessage.inspection_department')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.inspectDepartmentId">
                            <option v-for="item in initialData.inspectDepartmentList" :value="item.inspectDepartmentId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-three">{{$t('medicalmessage.send_doctor')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.submittingPhysicianId">
                            <option v-for="item in initialData.submittingPhysicianList" :value="item.submittingPhysicianId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">{{$t('medicalmessage.inspection_date')}}</p>
                    <calendar :date="bindData.inspectDate" v-on:change="inspectDateChange"/>
                </div>
                <div class="hospital-num-two hospital-num">
                    <p class="floatleft p-one">{{$t('medicalmessage.ward')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.ward">
                    <p class="floatleft p-two">{{$t('medicalmessage.bed_no')}}</p>
                    <input type="text" class="floatleft p-margin radium null" v-model="bindData.sickbedNo">
                    <p class="floatleft p-three">{{$t('medicalmessage.specimen_type')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup null" v-model="bindData.specimenTypeId">
                            <option v-for="item in initialData.specimenTypeList" :value="item.specimenTypeId">
                                {{ item.name }}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">{{$t('medicalmessage.specimen_situation')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup null" v-model="bindData.specimenSituationId">
                            <option v-for="item in initialData.specimenSituationList" :value="item.specimenSituationId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="hospital-num-three hospital-num">
                    <p class="floatleft p-one">{{$t('medicalmessage.specimen_name')}}</p>
                    <form class="floatleft">
                        <select class="p-big  radium-sup null" v-model="bindData.specimenNameId">
                            <option v-for="item in initialData.specimenNameList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>

                    </form>


                    <!--  <rd-cascader :cascader="cascader"></rd-cascader> -->
                    <p class="floatleft p-three unqualifiedCauseId">{{$t('medicalmessage.unqualified_reason')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup null" v-model="bindData.unqualifiedCauseId">
                            <option v-for="item in initialData.unqualifiedCauseList" :value="item.unqualifiedCauseId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">{{$t('medicalmessage.samples_received')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin radium-sup null" v-model="bindData.specimenReceiveId">
                            <option v-for="item in initialData.specimenReceiveList" :value="item.userId">
                                {{item.fullName}}
                            </option>
                        </select>
                    </form>
                </div>
                <div class="hospital-num-four hospital-num">
                    <p class="floatleft p-one">{{$t('medicalmessage.cost_categories')}}</p>
                    <form class="floatleft" >
                        <select class="p-margin radium-sup null" v-model="bindData.chargeTypeId">
                            <option v-for="item in initialData.chargeTypeList" :value="item.chargeTypeId">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-two">{{$t('medicalmessage.charge')}}</p>
                    <input type="text" class="floatleft p-margin  radium charge" v-model="bindData.charge">
                    <p class="floatleft p-three">{{$t('medicalmessage.draw_materials_doctor')}}</p>
                    <form class="floatleft">
                        <select class="p-margin radium-sup null sampleDoctorId" v-model="bindData.sampleDoctorId">
                            <option v-for="item in initialData.sampleDoctorList" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </form>
                    <p class="floatleft p-four">{{$t('medicalmessage.receiving_date')}}</p>
                    <calendar :date="bindData.receiveDate" v-on:change="receiveDateChange"/>
                </div>
                <div class="hospital-num-five hospital-num">
                    <p class="floatleft p-one">{{$t('medicalmessage.clinical_diagnosis')}}</p>
                    <form class="floatleft ">
                        <select class="p-margin  radium  input-doctor null clinicalDiagnosisId" v-model="bindData.clinicalDiagnosisId">
                            <option v-for="item in initialData.clinicalDiagnosisList" :value="item.id"> {{item.name}}</option>
                        </select>
                    </form> 
                    <p  class="floatleft p-four">{{$t('medicalmessage.operation_phone')}}</p>
                    <input type="text" class="floatleft p-margin radium null"
                     v-model="bindData.operatingRoomPhone">
                </div>
                <div class="hospital-num-six">
                    <p class="floatleft p-one">{{$t('medicalmessage.history_abstract')}}</p>
                    <textarea class="floatleft ill-abstract radium null" v-model="bindData.medicalHistory"></textarea>
                    <p class="floatleft p-one">{{$t('medicalmessage.operative_findings')}}</p>
                    <textarea type="text" class="floatleft ill-see radium null" v-model="bindData.operativeFindings"></textarea>
                </div>
            </div>
            <div  class="left-button">
                <button  class="left-button-two"  @click="refund">{{$t('medicalmessage.clear')}}</button>
                <button class="left-button-two" @click="print">{{$t('medicalmessage.print')}}</button>
                <button  class="left-button-two" @click="save">{{$t('medicalmessage.save')}}</button>
                <button  class="left-button-five" @click="newsave">{{$t('medicalmessage.save_and_create')}}</button>
                <button class="left-button-two" @click="createOrder">{{$t('medicalmessage.create')}}</button>
            </div>
            <div class="left-bottom">
                <div class="picture-img" @click="refresh"></div>
                <div class="refresh-img"></div>
            </div>
        </div>
    </div>
</template>
<style>
.left-bottom .refresh-img{
    margin-left: 5px;
}
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
.hospital-num{
    width:1024px;
    height: 28px;
    margin-top: 3px;
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
#header{
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
        // template: '<rd-cascader :cascader="cascader"></rd-cascader>',
        data(){
            return {
                initialData:{},
                bindData:{}
            }
        },
        components: {
            "searchtable": SearchTable,
            "calendar": Calendar,
            "medicalmessage": Medicalmessage
        },
        methods: {
            async loadData () {
                const self=this;
                const response = await fetch('/register/load', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({

                    })
                });
                const json = await response.text();
                const data = JSON.parse(json);
                self.initialData = data;
            }, async createOrder(){
                const response = await fetch('/register/create-order', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: {}
                });
                const json = await response.text();
                const data = JSON.parse(json);
                // 初始化绑定对象
                let newBindData = this.newBindData();
                // 合并对象
                let mergedBindData = Object.assign(newBindData,data);
                this.bindData = mergedBindData;

                // 不验证
                // this.errors.clear('firstName');
                return false;
            }, async newsave(){
                await this.save();
                this.createOrder();
            }, refund: function () {
                $(".null").val('');
            }, async save(){
                this.$validator.validateAll().then(success => {
                }).then(failing => {
                }, rejected => {
                });
                if (this.errors.any() == false) {
                    const response = await fetch('/register/save', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(this.bindData)
                    });
                    const resultJson = await response.text();
                    const resultObject = JSON.parse(resultJson);

                    // 异常处理
                    if (this.$errHandle(resultObject)) {
                        return;
                    }
                    // 重新加载 Order
                    this.loadOrder(resultObject.orderId);

                    // 保存事件
                    this.$emit("orderSaved");
                }
            }, print: function () {
                console.log("print");
            }, refresh: function () {
                console.log("refresh");
            },
            inspectDateChange: function (date) {
                this.bindData.inspectDate = date;
            },
            receiveDateChange: function (date) {
                this.bindData.receiveDate = date;
            },
            lmpChange: function (date) {
                this.bindData.lmp = date;
            },async loadOrder(orderId) {
                const response = await fetch('/register/load-order', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        orderId: orderId
                    })
                });
                const resultJson = await response.text();
                const resultObject = JSON.parse(resultJson);
                // 异常处理
                if (this.$errHandle(resultObject)) {
                    return;
                }

                this.bindData = resultObject;
            }, newBindData: function (order) {
                return {
                    "orderId":null,
                    "applicationNo": "",
                    "frozenNo": "",
                    "infobaseId": 30000001,
                    "inhospitalId": "",
                    "pathologyNo": "",
                    "patientNo": "",
                    "inspectDate": "",
                    "inspectDepartmentId": null,
                    "inspectUnitId": null,
                    "specimenNameId": null,
                    "specimenTypeId": null,
                    "submittingPhysicianId": null,
                    "sickbedNo": "",
                    "ward": "",
                    "unqualifiedCauseId": null,
                    "specimenSituationId": null,
                    "specimenReceiveId": null,
                    "chargeTypeId": null,
                    "charge": null,
                    "sampleDoctorId": null,
                    "clinicalDiagnosisId": null,
                    "receiveDate": "",
                    "operatingRoomPhone": "",
                    "medicalHistory": "",
                    "operativeFindings": "",
                    "patientAge": null,
                    "lmp": "",
                    "pausimenia": null,
                    "patient": {
                        "patientName": "",
                        "patientUid": "",
                        "sex": null,
                        "age": null,
                        "ageUnit": null,
                        "nationId": null,
                        "professionId": null,
                        "maritalStatusId": null,
                        "phone": "",
                        "idCard": "",
                        "address": ""
                    }
                }
            }
        },
        created () {
            this.loadData();
            this.bindData = this.newBindData();
        }
    }
</script>



