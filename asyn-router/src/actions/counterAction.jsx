import {INCREMENT, DECREMENT } from '../constants/actionTypes';
import { ASYNC } from 'redux-amrc';
import fetch from 'isomorphic-fetch';

export function increment() {
    return {type : INCREMENT};
}

export function decrement() {
    return {type : DECREMENT};
}
//通过中间件 applyMiddleware(thunk) 支持， 传递dispatch, getState两个值
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const {async} = getState();
        if(async.counter.value % 2 === 0){
            return;
        }
        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}

export function load() {
  return {
    [ASYNC]: {
      key: 'counter',
      promise: () => fetch('http://localhost:7788/api/counter')
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
    }
  };
}



