module.exports = {
    api: '/register/query-time',
    response: function (req, res) {
        res.send(`[{"age":"23","birthday":"1994-02-22 00:00:00","departmentId":8,"departmentName":"眼科门诊","inhospitalId":"ZY0001","inspectName":"本院","inspectUnitId":1,"isFrozen":false,"orderId":1,"pathologyNo":"P0001","patientId":8,"patientName":"沈开霁","patientNo":"MZ0001","sexId":1,"sexName":"男","specimenName":"淋巴结","specimenNameId":43},{"age":"28","birthday":"1989-02-22 00:00:00","departmentId":7,"departmentName":"内镜诊疗部","frozenNo":"","inhospitalId":"","inspectUnitId":0,"isFrozen":true,"orderId":2,"pathologyNo":"P0002","patientId":9,"patientName":"和佳盛","patientNo":"","sexId":1,"sexName":"男","specimenName":"胆囊","specimenNameId":4},{"age":"","departmentId":0,"frozenNo":"","inhospitalId":"","inspectUnitId":0,"isFrozen":true,"orderId":3,"pathologyNo":"P0003","patientId":10,"patientName":"潘芳巧","patientNo":"","sexId":2,"sexName":"女","specimenNameId":0}]`);
    }
}