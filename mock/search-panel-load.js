module.exports = {
    api: '/search-panel/load',
    response: function (req, res) {
        res.send(`{"orderStatusList":[{"id":1,"name":"登"},{"id":2,"name":"取"},{"id":3,"name":"制"},{"id":4,"name":"暂"},{"id":5,"name":"诊"},{"id":6,"name":"延"},{"id":7,"name":"审"},{"id":8,"name":"印"}],
        	"selectTimeList":[{"id":1,"name":"今天"},{"id":2,"name":"昨天"},{"id":3,"name":"前天"},{"id":4,"name":"本周"},{"id":5,"name":"本月"},{"id":6,"name":"上月"},{"id":7,"name":"本年"}],
        	"selectNoList":[{"id":1,"name":"病理号"},{"id":2,"name":"冰冻标识"},{"id":3,"name":"申请号"},{"id":4,"name":"门诊号"},{"id":5,"name":"住院号"},{"id":6,"name":"病人ID"},{"id":7,"name":"姓名"}],
            "aList":[{"id":1,"name":"历次检查"},{"id":2,"name":"申请单"},{"id":3,"name":"会诊意见"},{"id":4,"name":"冰冻预约"},{"id":5,"name":"延期原因"},{"id":6,"name":"补取列表"}]}`);
    }
}