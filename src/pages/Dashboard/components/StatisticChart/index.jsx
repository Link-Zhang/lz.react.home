import React from 'react';
import {Row, Col, Card} from 'antd';
import {Line, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Brush} from 'recharts';
import CustomizedLabel from '../CustomizedLabel';
import ChartContainer from '../ChartContainer';

const data = [
    {
        update_time: '19/07/11',
        house_avg_unit_price: 43990,
        house_sale_count: 37981,
    },
    {
        update_time: '19/07/12',
        house_avg_unit_price: 43977,
        house_sale_count: 37823,
    },
    {
        update_time: '19/07/13',
        house_avg_unit_price: 43975,
        house_sale_count: 37888,
    },
    {
        update_time: '19/07/14',
        house_avg_unit_price: 43960,
        house_sale_count: 37993,
    },
    {
        update_time: '19/07/15',
        house_avg_unit_price: 43925,
        house_sale_count: 38143,
    },
    {
        update_time: '19/07/16',
        house_avg_unit_price: 43900,
        house_sale_count: 38206,
    },
    {
        update_time: '19/07/17',
        house_avg_unit_price: 43974,
        house_sale_count: 37743,
    },
    {
        update_time: '19/07/18',
        house_avg_unit_price: 43952,
        house_sale_count: 37874,
    },
];

const totalHouseData = [
    {
        update_time: '19/07/11',
        house_sale_count: 37981,
    },
    {
        update_time: '19/07/12',
        house_sale_count: 37823,
    },
    {
        update_time: '19/07/13',
        house_sale_count: 37888,
    },
    {
        update_time: '19/07/14',
        house_sale_count: 37993,
    },
    {
        update_time: '19/07/15',
        house_sale_count: 38143,
    },
    {
        update_time: '19/07/16',
        house_sale_count: 38206,
    },
    {
        update_time: '19/07/17',
        house_sale_count: 37743,
    },
    {
        update_time: '19/07/18',
        house_sale_count: 37874,
    },
];

const avgTotalPriceData = [
    {
        update_time: '19/07/11',
        house_avg_total_price: 263.48,
    },
    {
        update_time: '19/07/12',
        house_avg_total_price: 263.28,
    },
    {
        update_time: '19/07/13',
        house_avg_total_price: 263.32,
    },
    {
        update_time: '19/07/14',
        house_avg_total_price: 263.26,
    },
    {
        update_time: '19/07/15',
        house_avg_total_price: 263.25,
    },
    {
        update_time: '19/07/16',
        house_avg_total_price: 263.14,
    },
    {
        update_time: '19/07/17',
        house_avg_total_price: 263.29,
    },
    {
        update_time: '19/07/18',
        house_avg_total_price: 263.24,
    },
];

class StatisticChart extends React.PureComponent {
    render() {
        return (
            <Card>
                <Row gutter={24}>
                    <Col lg={12} md={24} span={12}>
                        <Card title="房屋总数" bordered={false}>
                            <ChartContainer>
                                <LineChart data={totalHouseData}
                                           margin={{
                                               top: 16, right: 16, left: 16, bottom: 16,
                                           }}
                                           syncId="StatisticChart"
                                >
                                    <Line type="monotone" dataKey="house_sale_count" stroke="#8884d8"
                                          label={<CustomizedLabel/>}/>
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                                    <XAxis dataKey="update_time"/>
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Tooltip/>
                                    <Brush/>
                                </LineChart>
                            </ChartContainer>
                        </Card>
                    </Col>
                    <Col lg={12} md={24} span={12}>
                        <Card title="平均总价" bordered={false}>
                            <ChartContainer>
                                <LineChart data={avgTotalPriceData}
                                           margin={{
                                               top: 16, right: 16, left: 16, bottom: 16,
                                           }}
                                           syncId="StatisticChart"
                                >
                                    <Line type="monotone" dataKey="house_avg_total_price" stroke="#8884d8"
                                          label={<CustomizedLabel/>}/>
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                                    <XAxis dataKey="update_time"/>
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Tooltip/>
                                    <Brush/>
                                </LineChart>
                            </ChartContainer>
                        </Card>
                    </Col>

                    <Col lg={24} md={24} span={12}>
                        <Card title="房价情况统计表" bordered={false}>
                            <ChartContainer>
                                <LineChart data={data}
                                           margin={{
                                               top: 16, right: 16, left: 16, bottom: 16,
                                           }}
                                           syncId="StatisticChart"
                                >
                                    <Line type="monotone" dataKey="house_avg_unit_price" stroke="#8884d8"
                                          label={<CustomizedLabel/>}/>
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                                    <XAxis dataKey="update_time"/>
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Tooltip/>
                                    <Brush/>
                                </LineChart>
                            </ChartContainer>
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default StatisticChart;
