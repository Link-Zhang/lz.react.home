import React from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import Bread from '../Bread';
import Foot from '../Foot';
import Head from "../Head";
import Login from '../Login';
import Sidebar from '../Side';
import './index.css';

const {Content} = Layout;

class App extends React.Component {
    renderContent() {
        return (
            <Content style={{margin: '0 16px'}}>
                <Bread routes={this.props.routes}/>
                <div style={{padding: 24, background: '#fff', minHeight: 400}}>Bill is a cat.</div>
            </Content>
        );
    }

    render() {
        // if (this.props.loaded) {
        //加载成功
        if (!this.props.username || this.props.username === '未登录') {
            //需要登录
            return <Login/>
        }
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sidebar/>
                <Layout>
                    <Head username={this.props.username}/>
                    {this.renderContent()}
                    <Foot/>
                </Layout>
            </Layout>
        );
        // }
        // return <div className="center-div"><Spin spinning={true} size="large"/></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.User.username,
    }
};


export default connect(mapStateToProps, null)(App);
