module.exports = {
    api: '/material/loadData',
    response: function (req, res) {
        res.send(`{"result":true,"materialsInfo":{"grossFinding":"444",
        	"materialDetailList":[{"isDelete":false,
        	"materialDetailId":54,
        	"materialNoId":1,
        	"materialPartsId":78,
        	"materialQuantity":1,
        	"materialsInfoId":83,
        	"orderId":94,
        	"quantityUnitId":1,
        	"sampleDate":"2017-02-28",
        	"sampleDoctorId":2,
        	"taskSourceId":2
        },{"isDelete":false,
        "materialDetailId":55,
        "materialNoId":1,
        "materialPartsId":28,
        "materialQuantity":1,
        "materialsInfoId":83,
        "orderId":94,
        "quantityUnitId":1,
        "sampleDate":"2017-02-28",
        "sampleDoctorId":2,
        "taskSourceId":1},
        {"isDelete":false,
        "materialDetailId":56,
        "materialNoId":3,
        "materialPartsId":28,
        "materialQuantity":1,
        "materialsInfoId":83,
        "orderId":94,
        "quantityUnitId":1,
        "sampleDate":"2017-02-28",
        "sampleDoctorId":2,
        "taskSourceId":1}],
        "materialsInfoId":83,
        "noterId":2,
        "orderId":94,
        "passageWayId":2,
        "saveLocationId":3,
        "specimenHandleId":2}}`);
    }
}
