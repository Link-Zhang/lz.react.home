import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superAgent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:8080/api/v1';

// const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};

const requests = {
    del: url =>
        superAgent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superAgent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superAgent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superAgent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

export default {
    setToken: _token => {
        token = _token;
    }
};
