// 最多2级菜单,key值唯一不可重复
const sidebarMenu = [
    {
        key: '#',  // url，必选
        name: '仪表盘',  // name,必选
        icon: 'dashboard',  // 图标，1级必选，其他可选
    },
    {
        key: 'home',  // url，必选
        name: '房屋',  // name,必选
        icon: 'home',  // 图标，1级必选，其他可选
    },
    {
        key: 'community',  // url，必选
        name: '社区',  // name,必选
        icon: 'deployment-unit',  // 图标，1级必选，其他可选
    },
    {
        key: 'history',  // url，必选
        name: '历史价格',  // name,必选
        icon: 'history',  // 图标，1级必选，其他可选
    },
    {
        key: 'statistic',
        name: '统计',
        icon: 'line-chart',
        child: [
            {
                key: 'shanghai',  // url，必选
                name: '上海',  // name,必选
                // icon: 'home',  // 图标，1级必选，其他可选
            },
            {
                key: 'changning',  // url，必选
                name: '长宁',  // name,必选
                // icon: 'home',  // 图标，1级必选，其他可选
            },
        ],
    },
];

export default sidebarMenu;
