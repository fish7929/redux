import {INCREMENT, DECREMENT } from '../constants/actionTypes';

export function increment() {
    return {type : INCREMENT};
}

export function decrement() {
    return {type : DECREMENT};
}
//通过中间件 applyMiddleware(thunk) 支持， 传递dispatch, getState两个值
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const val = getState();
        if(val % 2 === 0){
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



