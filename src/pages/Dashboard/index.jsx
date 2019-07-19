import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import TotalHouse from './components/TotalHouse';
import TotalCommunity from './components/TotalCommunity';
import AvgTotalPrice from "./components/AvgTotalPrice";
import AvgUnitPrice from "./components/AvgUnitPrice";
import StatisticChart from "./components/StatisticChart";

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div>
                <Row gutter={24}>
                    <Col key={"totalHouse"} lg={6} md={12}>
                        <TotalHouse/>
                    </Col>
                    <Col key={"avgTotalPrice"} lg={6} md={12}>
                        <AvgTotalPrice/>
                    </Col>
                    <Col key={"avgUnitPrice"} lg={6} md={12}>
                        <AvgUnitPrice/>
                    </Col>
                    <Col key={"totalCommunity"} lg={6} md={12}>
                        <TotalCommunity/>
                    </Col>
                    <Col lg={24} md={24}>
                        <StatisticChart/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Dashboard.propTypes = {
    dashboard: PropTypes.object,
    loading: PropTypes.object,
};

export default Dashboard
