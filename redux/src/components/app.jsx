import React from 'react';
//通过redux来实现
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '../stores/store';
import Counter from './counter/Counter';
import Undo from './counter/Undo';
import Async from './async/Async';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/*利用redux 的计算器*/}
                {/*<Counter />*/}
                {/*利用redux redux-undo 撤销和重置功能*/}
                {/*<Undo />*/}
                {/*利用redux isomorphic-fetch 异步处理*/}
                {/*<Async />*/}
                
                <Router history={browserHistory}>
                    <Route path="/" >
                        <IndexRoute  component={Counter} />
                        <Route path="async" component={Async} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

