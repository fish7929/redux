import {combineReducers} from 'redux';
import { reducerCreator } from 'redux-amrc';
import counter from './counter';
//使用redux的combineReducers方法将所有reducer打包起来

const rootReducer = combineReducers({
    async : reducerCreator({ counter })    //为 counter ： counter
});

export default rootReducer;