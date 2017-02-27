module.exports = {
    api: '/login/submit',
    response: function (req, res) {
        res.send(`{"workstationId":1,"loginResult":true,"user":{"createDate":"2017-02-15 00:00:00","email":"yu.miao@hinacom.com","firstName":"于淼","identification":"1|admin|3733a193258a2b23edbb001599b61cebe2e6a512a08b4c5a5dddad95c914a5ba","isDelete":true,"lastLoginDate":"2017-02-16 14:51:01","mobile":"18611301980","password":"cb8841767ddfd2a5794cd841b2abb8a6a8afa14b1064e0121e290d92e9add301","salt":"3733a193258a2b23edbb001599b61cebe2e6a512a08b4c5a5dddad95c914a5ba","status":1,"userCode":"admin","userId":1,"userName":"admin"}}`);
    }
}