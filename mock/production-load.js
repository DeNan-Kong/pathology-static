module.exports = {
    api: '/production/load',
    response: function (req, res) {
        res.send(`{"printStatusList":[{"id":1,"name":"未打印"},{"id":2,"name":"已打印"}],"productionStatusList":[{"id":1,"name":"待核对"},{"id":2,"name":"待包埋"},{"id":3,"name":"待切片"},{"id":4,"name":"制片中"},{"id":5,"name":"已完成"}],"productionExplainList":[{"code":"2","isDelete":false,"name":"test","productionExplainId":1,"sort":2},{"code":"1","isDelete":false,"name":"test","productionExplainId":2,"sort":1}],"sampleDoctorList":[{"isDelete":false,"name":"张三","sampleDoctorId":1,"sort":0},{"isDelete":false,"name":"李四","sampleDoctorId":2,"sort":1},{"isDelete":false,"name":"王五","sampleDoctorId":3,"sort":2}],"materialNoList":[{"isDelete":false,"materialNoId":1,"name":"1","sort":0},{"isDelete":false,"materialNoId":2,"name":"A","sort":1},{"isDelete":false,"materialNoId":3,"name":"A1","sort":2},{"isDelete":false,"materialNoId":4,"name":"B1","sort":3},{"isDelete":false,"materialNoId":5,"name":"C1","sort":4},{"isDelete":false,"materialNoId":6,"name":"1°","sort":5},{"isDelete":false,"materialNoId":7,"name":"①","sort":6},{"isDelete":false,"materialNoId":8,"name":"1-8","sort":7},{"isDelete":false,"materialNoId":9,"name":"A-E","sort":8}],"taskSourceList":[{"id":1,"isDelete":false,"name":"常规","sort":0,"taskSourceId":1},{"id":2,"isDelete":false,"name":"冰余","sort":1,"taskSourceId":2},{"id":3,"isDelete":false,"name":"冰石","sort":2,"taskSourceId":3},{"id":4,"isDelete":false,"name":"补取","sort":3,"taskSourceId":4},{"id":5,"isDelete":false,"name":"脱钙","sort":4,"taskSourceId":5}],"producerList": [
        {
            "isDelete": false,
            "name": "张三",
            "sampleDoctorId": 1,
            "sort": 0
        },
        {
            "isDelete": false,
            "name": "李四",
            "sampleDoctorId": 2,
            "sort": 1
        },
        {
            "isDelete": false,
            "name": "王五",
            "sampleDoctorId": 3,
            "sort": 2
        }
    ]}`);
    }
}