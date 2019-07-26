import React from 'react';
import {Table, Input, Button, Icon} from 'antd';
import ReactJson from 'react-json-view';
import {connect} from "react-redux";
import Highlighter from 'react-highlight-words';

class CommunityList extends React.PureComponent {
    state = {
        searchText: '',
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm)} size="small"
                        style={{width: 90, marginRight: 8}}>
                    搜索
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                    重置
                </Button>
            </div>
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        filterIcon: filtered => (
            <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>
        ),
        render: (text) => (
            <Highlighter
                highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text || ""}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({searchText: selectedKeys[0]});
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                // render: (text, record) => <a target="_blank" rel="noopener noreferrer"
                //                              href={`${record.url}`}>{text}</a>,
            },
            {
                title: '市区',
                dataIndex: 'district',
                key: 'district',
            },
            {
                title: '小区',
                dataIndex: 'name',
                key: 'name',

                ...this.getColumnSearchProps('name'),
            },
            {
                title: '在售房屋',
                dataIndex: 'houseCount',
                key: 'houseCount',
            },
            {
                title: '平均总价',
                dataIndex: 'avgTotalPrice',
                key: 'avgTotalPrice',
            },
            {
                title: '平均单价',
                dataIndex: 'avgUnitPrice',
                key: 'avgUnitPrice',
            },
            {
                title: '最大面积',
                dataIndex: 'minStructureArea',
                key: 'minStructureArea',
            },
            {
                title: '最高总价',
                dataIndex: 'maxTotalPrice',
                key: 'maxTotalPrice',
            },
            {
                title: '最小面积',
                dataIndex: 'minStructureArea',
                key: 'minStructureArea',
            },
            {
                title: '最低总价',
                dataIndex: 'minTotalPrice',
                key: 'minTotalPrice',
            },
        ];

        const paginationProps = {
            defaultPageSize: 10,
            simple: true,
        };

        return (
            <div>
                <Table
                    dataSource={this.props.data} columns={columns}
                    expandedRowRender={
                        record => <ReactJson src={record}/>
                    }
                    rowKey={record => {
                        return record.id || ""
                    }}
                    pagination={paginationProps}
                    bordered={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.Community.data,
    }
};


export default connect(mapStateToProps, null)(CommunityList);
