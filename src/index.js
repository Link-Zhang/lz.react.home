import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import history from './redux/History';
import store from './redux/Store';
import App from './components/App';

const root = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
