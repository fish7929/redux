import React from 'react';
//通过redux来实现
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '../stores/store';
import Counter from './counter/Counter';
import Home from './containers/Home';
import Main from './containers/Main';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute  component={Counter} />
                        <Route path="counter" component={Counter} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

