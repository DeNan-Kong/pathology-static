/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`
      [{img: "1", style: "冰",num:"20160105",name:"小明",sex:"男",age:"120",one: "1", two: "冰",three:"20160105",four:"小明",five:"男",six:"120",seven: "1", eight: "冰",nine:"20160105"},
      {img: "1", style: "冰",num:"20160105",name:"小明",sex:"男",age:"120",one: "1", two: "冰",three:"20160105",four:"小明",five:"男",six:"120",seven: "1", eight: "冰",nine:"20160105"},
      {img: "1", style: "冰",num:"20160105",name:"小明",sex:"男",age:"120",one: "1", two: "冰",three:"20160105",four:"小明",five:"男",six:"120",seven: "1", eight: "冰",nine:"20160105"}]
    `);
  }
}