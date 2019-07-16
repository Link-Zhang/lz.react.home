import React from 'react';
import './index.css';
import globalConfig from '../../config';
import {connect} from "react-redux";

class Logo extends React.PureComponent {
    render() {
        return (
            <div className={this.props.collapse ? "ant-layout-logo-collapse" : "ant-layout-logo-normal"}>
                <div className="ant-layout-logo-text">
                    <a href="#/">{this.props.collapse ? globalConfig.name[0] : globalConfig.name}</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collapse: state.Side.collapse,
    };
};

export default connect(mapStateToProps, null)(Logo);
