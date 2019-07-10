let userList = require('./users.json');

let _userList = userList.map(user => {
    return {
        username: user.username,
        password: user.password
    }
});

module.exports = function (server) {
    server.post('/api/v1/login', function (req, res) {
        if (-1 === JSON.stringify(_userList).indexOf(JSON.stringify(req.body))) {
            req.body = {};
            res.send({
                data: req.body,
                message: null,
                success: false
            });
        } else {
            const username = req.body.username;
            req.body = {};
            res.send({
                data: username,
                message: null,
                success: true
            });
        }
    });
};
