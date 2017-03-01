module.exports = {
    api: '/login/validate',
    response: function (req, res) {
        res.send(`{"authorityFailed":{"result":false,"type":1}}`);
    }
}