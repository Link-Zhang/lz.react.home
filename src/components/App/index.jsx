import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {appOnLoadActionCreator, appOnDirectActionCreator} from '../../aircs/App';
import Head from "../Head";
import Welcome from '../Welcome';

class App extends React.Component {
    render() {
        if (this.props.loaded) {
            return (
                <Head
                    username={this.props.username}/>
            );
        }
        return (
            <Welcome/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loaded: state.App.loaded,
        name: state.App.name,
        username: state.App.username,
        redirect: state.App.redirect
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnLoad: bindActionCreators(appOnLoadActionCreator, dispatch),
        handleOnDirect: bindActionCreators(appOnDirectActionCreator, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
