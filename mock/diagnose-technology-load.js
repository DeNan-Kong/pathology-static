module.exports = {
    api: '/diagnose/technology/load',
    response: function (req, res) {
        res.send(`{"doctorAdviceTypeList":[{"doctorAdviceTypeId":1,"isDelete":false,"name":"常规","type":1},{"doctorAdviceTypeId":2,"isDelete":false,"name":"补取","type":2},{"doctorAdviceTypeId":3,"isDelete":false,"name":"重切","type":1},{"doctorAdviceTypeId":4,"isDelete":false,"name":"深切","type":1},{"doctorAdviceTypeId":5,"isDelete":false,"name":"薄切","type":1},{"doctorAdviceTypeId":6,"isDelete":false,"name":"连切","type":1},{"doctorAdviceTypeId":7,"isDelete":false,"name":"切全","type":1},{"doctorAdviceTypeId":8,"isDelete":false,"name":"重做","type":1},{"doctorAdviceTypeId":9,"isDelete":false,"name":"不削连切","type":1}],"technologyDoctorAdviceList":[{"applyDate":"2017-02-17 00:00:00","applyDoctor":111,"orderId":3,"technologyDoctorAdviceId":1},{"applyDate":"2017-02-01 00:00:00","applyDoctor":666,"orderId":3,"technologyDoctorAdviceId":2}],"materialNoList":[]}`);
    }
}