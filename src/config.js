module.exports = {
    name: 'Home',// 项目的名字
    host: 'http://localhost:3000', //项目主页
    github: 'https://github.com/link-zhang/lz.react.home',// github项目地址
    favicon: './logo.svg',// 设置网页的favicon,
    debug: true,// 是否开启debug模式
    api: {
        host: 'http://localhost:8080',  // 调用ajax接口的地址, 默认值空, 如果是跨域的, 服务端要支持CORS
        path: '/api/v1',  // ajax请求的路径
        timeout: 5000,  // 请求的超时时间, 单位毫秒
    },
    login: {  // 登录相关配置
        getCurrentUser: '/getCurrentUser',  // 后端必须要提供接口校验当前用户的身份, 如果拿不到用户信息, 才会尝试登录
        validate: '/login',  // 校验用户信息, 表单的submit地址. 如果登录成功, 必须返回用户名
    },
    sidebar: {  // 侧边栏相关配置
        collapsible: true,  // 是否显示折叠侧边栏的按钮
        autoMenuSwitch: true,  // 只展开一个顶级菜单, 其他顶级菜单自动折叠
    },
    isCrossDomain() {
        return !!(this.api.host && this.api.host !== /** @type {boolean} */'');
    },
    getAPIPath() {
        if (this.tmpApiPath) {
            return this.tmpApiPath;
        }
        const paths = [];
        if (this.isCrossDomain()) {
            const tmp = this.api.host;
            let index = tmp.length - 1;
            while (tmp.charAt(index) === '/') {
                index--;
            }
            if (index < 0)
                paths.push('');
            else
                paths.push(tmp.substring(0, index + 1));
        } else {
            paths.push('');
        }
        if (this.api.path) {
            const tmp = this.api.path;
            let begin = 0;
            let end = tmp.length - 1;

            while (tmp.charAt(begin) === '/') {
                begin++;
            }
            while (tmp.charAt(end) === '/') {
                end--;
            }
            if (begin > end)
                paths.push('');
            else
                paths.push(tmp.substring(begin, end + 1));
        } else {
            paths.push('');
        }

        const tmpApiPath = paths.join('/');
        this.tmpApiPath = tmpApiPath;
        return tmpApiPath;
    },
};
