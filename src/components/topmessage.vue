<template>
    <div>
        <div class="middle-message">
            <span>当前病人：{{bindData.patientName}}</span><span>病理号：{{bindData.pathologyNo}}</span><span>{{bindData.sexName}}</span><span>{{bindData.age}}岁</span><span>住院号：{{bindData.inhospitalId}}</span><span>送检科室：{{bindData.departmentName}}</span><span>标本名称：{{bindData.specimenName}}</span>
            <p><span v-if="bindData.isFrozen" style="margin-right: 10px"> 冰</span>{{bindData.infobaseName}}</p>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return {
                bindData: {
                    patientName: "",
                    pathologyNo: "",
                    sexName: "",
                    age: "",
                    inhospitalId: "",
                    departmentName: "",
                    specimenName: "",
                    isFrozen: false,
                    infobaseName:"常规"
                }
            }
        },
        methods: {
            async showPatientInformation(orderId) {
                const response = await fetch('/register/load-orderRecord', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({"orderId": orderId})
                });
                const json = await response.text();
                const data = JSON.parse(json);

                this.$errHandle(data);
                this.bindData = data;
            }
        }
    }
</script>
