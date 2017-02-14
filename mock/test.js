module.exports = {
    api: '/api/test',
    response: function (req, res) {
        res.send(`{
    "orderlist": [
        {
            "applicationNo": "a10001",
            "chargeTypeId": 1,
            "frozenNo": "f10001",
            "infobaseId": 30000001,
            "inhospitalId": "123231",
            "inspectDate": "2017-02-13 10:15:25",
            "inspectDepartmentId": 4,
            "inspectUnitId": 1,
            "orderId": 8,
            "pathologyNo": "p10001",
            "patient": {
                "age": 5,
                "ageUnit": 1,
                "birthday": "2017-01-17 00:00:00",
                "patientId": 1,
                "patientName": "tkong",
                "patientUid": "pid-001",
                "sex": 1
            },
            "patientId": 1,
            "patientNo": "p10001",
            "specimenNameId": 2,
            "specimenTypeId": 1,
            "status": 1
        },
        {
            "applicationNo": "a10001",
            "chargeTypeId": 1,
            "frozenNo": "f10001",
            "infobaseId": 30000001,
            "inhospitalId": "123231",
            "inspectDate": "2017-01-10 10:15:31",
            "inspectDepartmentId": 4,
            "inspectUnitId": 1,
            "orderId": 10,
            "pathologyNo": "p10055",
            "patient": {
                "age": 12,
                "ageUnit": 1,
                "birthday": "2017-01-17 00:00:00",
                "patientId": 3,
                "patientName": "tom",
                "patientUid": "3pid-003",
                "sex": 2
            },
            "patientId": 3,
            "patientNo": "p10001",
            "specimenNameId": 2,
            "specimenTypeId": 2,
            "status": 1
        },
        {
            "applicationNo": "a103421",
            "chargeTypeId": 1,
            "frozenNo": "f10001",
            "infobaseId": 30000001,
            "inhospitalId": "123231",
            "inspectDate": "2017-01-09 11:34:47",
            "inspectDepartmentId": 4,
            "inspectUnitId": 1,
            "orderId": 11,
            "pathologyNo": "p10003",
            "patient": {
                "age": 5,
                "ageUnit": 1,
                "birthday": "2017-01-17 00:00:00",
                "patientId": 1,
                "patientName": "tkong",
                "patientUid": "pid-001",
                "sex": 1
            },
            "patientId": 1,
            "patientNo": "p10001",
            "specimenNameId": 2,
            "specimenTypeId": 1,
            "status": 1
        },
        {
            "applicationNo": "a103421",
            "chargeTypeId": 1,
            "frozenNo": "f10001",
            "infobaseId": 30000001,
            "inhospitalId": "123231",
            "inspectDepartmentId": 7,
            "inspectUnitId": 1,
            "orderId": 12,
            "pathologyNo": "p10004",
            "patient": {
                "age": 23,
                "ageUnit": 1,
                "birthday": "2017-01-17 00:00:00",
                "patientId": 9,
                "patientName": "tom",
                "patientUid": "pid-001",
                "sex": 2
            },
            "patientId": 9,
            "patientNo": "p10001",
            "specimenNameId": 2,
            "specimenTypeId": 1,
            "status": 1
        }
    ]
}`);
    }
}