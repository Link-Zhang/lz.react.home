import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import _ from 'lodash';
import TotalHouse from './components/TotalHouse';
import AvgTotalPrice from "./components/AvgTotalPrice";
import AvgUnitPrice from "./components/AvgUnitPrice";
import StatisticChart from "./components/StatisticChart";
import StockChart from "./components/StockChart";
import {dashboardDataDoneActionCreator} from '../../acirs/Dashboard';
import ajax from "../../utils/ajax";

class Dashboard extends React.PureComponent {

    async statisticAll() {
        try {
            return await ajax.statisticAll();
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.statisticAll().then(
            res => {
                let data = _.get(res, "statisticVOList");
                const totalHouse = _.get(_.reverse(data)[0], 'saleCount');
                const avgTotalPrice = _.get(_.reverse(data)[0], 'avgTotalPrice');
                const avgUnitPrice = _.get(_.reverse(data)[0], 'avgUnitPrice');
                data = _.reverse(data);
                this.props.handleDataDone(totalHouse, avgTotalPrice, avgUnitPrice, data);
            }
        )
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '16px', marginTop: '16px'}}>
                    <Row gutter={24}>
                        <Col key={"totalHouse"} lg={8} md={8}>
                            <TotalHouse number={this.props.totalHouse}/>
                        </Col>
                        <Col key={"avgTotalPrice"} lg={8} md={8}>
                            <AvgTotalPrice number={this.props.avgTotalPrice}/>
                        </Col>
                        <Col key={"avgUnitPrice"} lg={8} md={8}>
                            <AvgUnitPrice number={this.props.avgUnitPrice}/>
                        </Col>
                        <Col lg={24} md={24}>
                            <StatisticChart data={this.props.data}/>
                        </Col>
                    </Row>
                </div>
                <div style={{marginBottom: '16px', marginTop: '16px'}}>
                    <Row>
                        <Col lg={24} md={24}>
                            <StockChart data={this.props.data}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        totalHouse: state.Dashboard.totalHouse,
        avgTotalPrice: state.Dashboard.avgTotalPrice,
        avgUnitPrice: state.Dashboard.avgUnitPrice,
        data: state.Dashboard.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDataDone: bindActionCreators(dashboardDataDoneActionCreator, dispatch),
    };
};

Dashboard.propTypes = {
    totalHouse: PropTypes.number,
    avgTotalPrice: PropTypes.number,
    avgUnitPrice: PropTypes.number,
    data: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
