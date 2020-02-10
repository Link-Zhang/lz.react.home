const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const partition = require('./modules/index');
const server = restify.createServer({
    name: 'Home Mock Server',
    version: '1.0.0',
});

server.use(restify.plugins.bodyParser());

const cors = corsMiddleware({
        origins: ['http://localhost:2130', 'http://localhost:2180', 'http://localhost:3000', 'http://10.30.14.134:2130', 'http://10.30.14.134:2180', 'http://10.30.14.134:3000'],
        credentials:
            true,
    })
;
server.pre(cors.preflight);
server.use(cors.actual);

server.listen(2130, function () {
    console.log('%s listening at %s', server.name, server.url);
});
partition(server);
