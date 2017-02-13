/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`{
     "mm":[{"applicationNo":"a10001","chargeTypeId":1,"frozenNo":"f10001",
     "infobaseId":30000001,"inhospitalId":"123231","orderId":8,
     "pathologyNo":"p10001","patient":{"birthday":"2017-01-17 00:00:00",
     "patientId":1,"patientName":"tkong","patientUid":"pid-001"},
     "patientId":1,"patientNo":"p10001","status":1},
     {"applicationNo":"a10001","chargeTypeId":1,"frozenNo":"f10001",
     "infobaseId":30000001,"inhospitalId":"123231","orderId":10,
     "pathologyNo":"p1005454","patient":{"birthday":"2017-01-17 00:00:00",
     "patientId":1,"patientName":"tkong","patientUid":"pid-001"},
     "patientId":1,"patientNo":"p10001","status":1}]}

    `);
  }
}