const login = require('./login/login');

module.exports = function (server) {
    login(server);
};
