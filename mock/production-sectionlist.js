module.exports = {
    api: '/production/sectionlist',
    response: function (req, res) {
        res.send(`[
    {
        "age": 5,
        "embeddingDate": "2017-02-21 18:51:16",
        "embeddingOperatorId": 5,
        "materialDetailId": 1,
        "materialNo": 1,
        "materialNoId": 1,
        "pathologyNo": "p10001",
        "patientName": "tkong",
        "productionStatus": 3,
        "sectionQuantity": 1,
        "sex": 1,
        "taskSourceId": 2
    },
    {
        "age": 5,
        "embeddingDate": "2017-02-21 18:51:16",
        "embeddingOperatorId": 5,
        "materialDetailId": 2,
        "materialNo": 1,
        "pathologyNo": "p10001",
        "patientName": "tkong",
        "productionStatus": 3,
        "sectionQuantity": 1,
        "sex": 1,
        "taskSourceId": 2
    },
    {
        "age": 5,
        "embeddingDate": "2017-03-28 19:55:54",
        "embeddingOperatorId": 4,
        "materialDetailId": 5,
        "materialNo": 1,
        "materialNoId": 1,
        "pathologyNo": "p10001",
        "patientName": "tkong",
        "productionStatus": 3,
        "sectionQuantity": 1,
        "sex": 1,
        "taskSourceId": 2
    }
]`);
    }
}