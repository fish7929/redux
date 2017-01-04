import React from 'react';
//通过redux来实现
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '../stores/store';
import Counter from './counter/Counter';
import Home from './containers/Home';
import Main from './containers/Main';
import { load } from '../actions/counterAction';
const preload = (nextState, replace, cb) => {
    console.log(555555);
    if (nextState.location.action === 'PUSH') {
        console.log(7895, nextState.location);
        store.dispatch(load()).then(() => cb());
        if(nextState.location.pathname === "/counter"){
            //跳转路由
            browserHistory.push('/');
        }
        
    } else {
        cb();
    }
};
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute  component={Counter} />
                        <Route path="counter" component={Counter} onEnter={preload}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

