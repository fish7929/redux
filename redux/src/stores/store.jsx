import {createStore, applyMiddleware, compose} from 'redux';
// import {INCREMENT, DECREMENT } from '../constants/actionTypes';
import thunk from 'redux-thunk';
// import {increment, decrement, incrementIfOdd, incrementAsync } from '../actions/counterAction';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Counter from '../components/counter/Counter';

import reducer from '../reducers';
//compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
//compose 函数合成， applyMiddleware用于激活中间件，window.devToolsExtension ? window.devToolsExtension() : f => f用于激活
//REDUX 开发者工具
const store =  createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

 export default store;  
//手动连接react
// let currentValue = store.getState();

// const listener = () => {
//     const previousValue = currentValue;
//     currentValue = store.getState();
//     console.log('pre state: ', previousValue, 'next state: ', currentValue);
// };

// function render() {
//     ReactDOM.render(<Counter value={store.getState()} onIncrement={() => {store.dispatch(increment());}} onDecrement={() => {store.dispatch(decrement());}}/>, document.getElementById("app"));
// }
// render();
// store.subscribe(render);

// store.subscribe(listener);
// store.dispatch({type : INCREMENT});
// store.dispatch({type : INCREMENT});
// store.dispatch({type : DECREMENT});

// store.dispatch(increment());
// store.dispatch(incrementIfOdd());
// store.dispatch(incrementAsync());
// store.dispatch(decrement());