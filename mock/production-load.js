module.exports = {
    api: '/production/load',
    response: function (req, res) {
        res.send(`{"printStatusList":[{"id":1,"name":"未打印"},{"id":2,"name":"已打印"}],"productionStatusList":[{"id":1,"name":"待核对"},{"id":2,"name":"待包埋"},{"id":3,"name":"待切片"},{"id":4,"name":"制片中"},{"id":5,"name":"已完成"}],"sampleDoctorList":[{"isDelete":false,"name":"张三","sampleDoctorId":1,"sort":0},{"isDelete":false,"name":"李四","sampleDoctorId":2,"sort":1},{"isDelete":false,"name":"王五","sampleDoctorId":3,"sort":2}],"taskSourceList":[{"id":1,"isDelete":false,"name":"常规","sort":0,"taskSourceId":1},{"id":2,"isDelete":false,"name":"冰余","sort":1,"taskSourceId":2},{"id":3,"isDelete":false,"name":"冰石","sort":2,"taskSourceId":3},{"id":4,"isDelete":false,"name":"补取","sort":3,"taskSourceId":4},{"id":5,"isDelete":false,"name":"脱钙","sort":4,"taskSourceId":5}]}`);
    }
}