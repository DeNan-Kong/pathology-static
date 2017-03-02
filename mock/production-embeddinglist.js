module.exports = {
    api: '/production/embeddinglist',
    response: function (req, res) {
        res.send(`[{"materialCheckDate":"2017-02-08 19:55:32","materialCheckerId":4,"materialDetailId":3,"materialNo":1,"materialNoId":2,"materialPartsId":5,"materialQuantity":1,"pathologyNo":"p10001","patientName":"tkong","printStatus":2,"productionStatus":2,"sampleDate":"2017-02-13 10:43:50","sampleDoctorId":1,"sex":1,"taskSourceId":2}]`);
    }
}