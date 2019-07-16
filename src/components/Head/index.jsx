import React from 'react';
import {connect} from 'react-redux';
import {Menu, Icon, message} from 'antd';
import {bindActionCreators} from "redux";
import './index.css'
import ajax from '../../utils/ajax';
import {logoutSuccessActionCreator} from "../../acirs/User";

const {SubMenu} = Menu;

class Head extends React.PureComponent {
    handleClickLogout = async () => {
        const res = await ajax.logout(this.props.username);
        if (res.success) {
            message.destroy();
            message.success('注销成功', 1);
            this.props.handleLogoutSuccess();
        }
    };

    render() {
        return (
            <Menu mode="horizontal"
                  className=".menu">
                <SubMenu title={<span><Icon type="user"/>{this.props.username}</span>} style={{float: 'right'}}>
                    <Menu.Item key="logout" onClick={this.handleClickLogout}>
                        <Icon type="logout"/>
                        <span>注销</span>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.User.username, //用户名
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogoutSuccess: bindActionCreators(logoutSuccessActionCreator, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
