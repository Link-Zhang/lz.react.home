import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import history from './redux/History';
import store from './redux/Store';
import App from './components/App';
import Welcome from './components/Welcome';
import Dashboard from './pages/Dashboard';

const root = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" exact component={App}>
                <IndexRoute component={Dashboard}/>
                <Route path="dashboard" component={Welcome}/>
                <Route path="home" component={Welcome}/>
                <Route path="community" component={Welcome}/>
                <Route path="history" component={Welcome}/>
                <Route path="statistic">
                    <Route path="shanghai" component={Welcome}/>
                    <Route path="changning" component={Welcome}/>
                </Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
