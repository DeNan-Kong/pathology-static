/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`
     [{"applicationid":"a-001","frozenNo":"fn-001","infobaseId":1,"orderId":1,"pathologyNo":"py-001",
     "patient":{"birthday":148,"patientId":1,"patientName":"tom","patientUid":"pid-001"},
     "patientId":1,"patientNo":"pno-001","status":1},
     {"applicationid":"a-002","frozenNo":"fn-001","infobaseId":1,"orderId":2,"pathologyNo":"py-001",
     "patient":{"birthday":1484582400000,"patientId":2,"patientName":"jack","patientUid":"pid-002"},
     "patientId":2,"patientNo":"pno-002","status":2}]
    `);
  }
}