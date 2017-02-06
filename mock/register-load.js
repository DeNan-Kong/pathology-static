module.exports = {
    api: '/register/load',
    response: function (req, res) {
        res.send(`{"specimenTypeList":[{"code":"dbb","isDelete":false,"name":"大标本","sort":1,"specimenTypeId":1},{"code":"xbb","isDelete":false,"name":"小标本","sort":2,"specimenTypeId":5},{"code":"xbx","isDelete":false,"name":"细胞学","sort":3,"specimenTypeId":6}]}`);
    }
}