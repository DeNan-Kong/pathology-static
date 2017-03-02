module.exports = {
    api: '/register/load-orderRecord',
    response: function (req, res) {
        res.send(`{"age":"23","birthday":"1994-02-22 00:00:00","departmentId":8,"departmentName":"眼科门诊","inhospitalId":"ZY0001","inspectName":"本院","inspectUnitId":1,"isFrozen":false,"orderId":1,"orderStatus":1,"pathologyNo":"P0001","patientId":8,"patientName":"沈开霁","patientNo":"MZ0001","sexId":1,"sexName":"男","specimenName":"淋巴结","specimenNameId":43}`);
    }
}