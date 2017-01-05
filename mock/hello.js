/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`
      
      <p>
        You may also want to checkout
        <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
        <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      </p>
    `);
  }
}