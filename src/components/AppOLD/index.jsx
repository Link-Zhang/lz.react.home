import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginSuccessCreator} from '../../reduxOld/User';
import {Spin, Layout} from 'antd';
// import 'antd/dist/antd.css';
import './index.css';
import Login from '../Login';
import Foot from '../Foot';
import Sidebar from '../Sidebar';
import Head from "../Head";
import Bread from '../Bread';

const {Content} = Layout;

class App extends React.Component {
    // state = {
    //     tryingLogin: true,
    // };
    //
    // componentDidMount() {
    //     if (!this.props.login) {
    //         this.setState({
    //             tryingLogin: false,
    //         });
    //     }
    // }

    componentWillUpdate() {
        console.log("Update");
    }

    componentWillMount() {
        console.log("Mount");
    }

    renderContent() {
        return (
            <Content style={{margin: '0 16px'}}>
                <Bread routes={this.props.routes}/>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>Bill is a cat.</div>
            </Content>
        );
    }

    render() {
        // if (this.state.tryingLogin) {
        //     return <div className="center-div"><Spin spinning={true} size="large"/></div>;
        // }

        const isAuthenticated = sessionStorage.getItem('isAuthenticated');

        if (!isAuthenticated) {
            return <Login/>;
        }
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sidebar/>
                <Layout>
                    <Head username={isAuthenticated}/>
                    {this.renderContent()}
                    <Foot/>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // collapse: state.Sidebar.collapse,
        login: state.User.login,
        // username: state.User.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginSuccess: bindActionCreators(loginSuccessCreator, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
