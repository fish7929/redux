import React from 'react';
//通过redux来实现
import { Provider } from 'react-redux';

import store from '../stores/store';
import Counter from './counter/Counter';
import Undo from './counter/Undo';
import Async from './async/Async';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/*<Counter />
                <Undo />*/}
                <Async />
            </Provider>
        );
    }
}

