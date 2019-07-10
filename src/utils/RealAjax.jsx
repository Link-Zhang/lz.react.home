import superAgent from 'superagent';
import globalConfig from '../config';

class Ajax {
    requestWrapper(method, url, {params, data, headers} = {}) {
        return new Promise((resolve, reject) => {
            const tmp = superAgent(method, url);
            if (globalConfig.isCrossDomain()) {
                tmp.withCredentials();
            }
            if (globalConfig.api.timeout && !isNaN(globalConfig.api.timeout)) {
                tmp.timeout(globalConfig.api.timeout);
            }
            tmp.set('Content-Type', 'application/json').set('Accept', 'application/json');
            if (headers) {
                tmp.set(headers);
            }
            if (params) {
                tmp.query(params);
            }
            if (data) {
                tmp.send(data);
            }
            tmp.end((err, res) => {
                if (res && res.body) {
                    resolve(res.body);
                } else {
                    reject(err || res);
                }
            });
        });
    }

    get(url, opts = {}) {
        return this.requestWrapper('GET', url, {...opts});
    }

    post(url, data, opts = {}) {
        return this.requestWrapper('POST', url, {...opts, data});
    }

    getCurrentUser() {
        return this.get(`${globalConfig.getAPIPath()}${globalConfig.login.getCurrentUser}`);
    }

    login(username, password) {
        const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        return this.post(`${globalConfig.getAPIPath()}${globalConfig.login.validate}`, {username, password}, {headers});
    }
}

export default Ajax;

