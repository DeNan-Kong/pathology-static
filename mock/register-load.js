module.exports = {
    api: '/register/load',
    response: function (req, res) {
        res.send(`{"specimen":[{"id":1,"name":"良好"},{"id":2,"name":"重切"},{"id":3,"name":"深切"}]}`);
    }
}