module.exports = {
    api: '/login/load',
    response: function (req, res) {
        res.send(`{"systemAuthority":{"authoritiedWorkstationList":["Register","Material","Specimen"],"id":1000001,"name":"海纳医信（北京）软件科技有限责任公司"},"workstationList":[{"id":1,"name":"登记工作站"},{"id":2,"name":"取材工作站"},{"id":3,"name":"切片工作站"}]}`);
    }
}