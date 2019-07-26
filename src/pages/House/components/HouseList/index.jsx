import React from 'react';
import {Table, Input, Button, Icon} from 'antd';
import ReactJson from 'react-json-view';
import {connect} from "react-redux";
import Highlighter from 'react-highlight-words';

class HouseList extends React.PureComponent {
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
                render: (text, record) => <a target="_blank" rel="noopener noreferrer"
                                             href={`${record.url}`}>{text}</a>,
            },
            {
                title: '市区',
                dataIndex: 'district',
                key: 'district',
            },
            {
                title: '类型',
                dataIndex: 'usage',
                key: 'usage',
            },
            {
                title: '小区',
                dataIndex: 'communityName',
                key: 'communityName',

                ...this.getColumnSearchProps('communityName'),
            },
            {
                title: '户型',
                dataIndex: 'type',
                key: 'type',
                filters: [
                    {
                        text: '1室0厅',
                        value: '1室0厅',
                    },
                    {
                        text: '1室1厅',
                        value: '1室1厅',
                    },
                    {
                        text: '2室0厅',
                        value: '2室0厅',
                    },
                    {
                        text: '2室1厅',
                        value: '2室1厅',
                    },
                ],
                onFilter: (value, record) => record.type.indexOf(value) === 0,
            },
            {
                title: '面积',
                dataIndex: 'structureArea',
                key: 'structureArea',
                sorter: (a, b) => a.structureArea - b.structureArea,
                filters: [
                    {
                        text: '[0,30)平',
                        value: '0-30',
                    },
                    {
                        text: '[30,40)平',
                        value: '30-40',
                    },
                    {
                        text: '[40,50)平',
                        value: '40-50',
                    },
                    {
                        text: '[50,60)平',
                        value: '50-60',
                    },
                    {
                        text: '[60,70)平',
                        value: '60-70',
                    },
                    {
                        text: '[70,80)平',
                        value: '70-80',
                    },
                    {
                        text: '[80,200)平',
                        value: '80-200',
                    },
                ],
                onFilter: (value, record) => {
                    const minValue = value.split("-")[0];
                    const maxValue = value.split("-")[1];
                    return (record.structureArea - minValue >= 0) && (record.structureArea - maxValue < 0);
                }
            },
            {
                title: '总价',
                dataIndex: 'totalPrice',
                key: 'totalPrice',
                sorter: (a, b) => a.totalPrice - b.totalPrice,
                filters: [
                    {
                        text: '[0,50)万',
                        value: '0-50',
                    },
                    {
                        text: '[50,100)万',
                        value: '50-100',
                    },
                    {
                        text: '[100,150)万',
                        value: '100-150',
                    },
                    {
                        text: '[150,200)万',
                        value: '150-200',
                    },
                    {
                        text: '[200,250)万',
                        value: '200-250',
                    },
                    {
                        text: '[250,300)万',
                        value: '250-300',
                    },
                    {
                        text: '[300,350)万',
                        value: '300-350',
                    },
                    {
                        text: '[350,400)万',
                        value: '350-400',
                    },
                ],
                onFilter: (value, record) => {
                    const minValue = value.split("-")[0];
                    const maxValue = value.split("-")[1];
                    return (record.totalPrice - minValue >= 0) && (record.totalPrice - maxValue < 0);
                }
            },
            {
                title: '单价',
                dataIndex: 'unitPrice',
                key: 'unitPrice',
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
        data: state.House.data,
    }
};


export default connect(mapStateToProps, null)(HouseList);
