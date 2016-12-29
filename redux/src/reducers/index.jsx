import {combineReducers} from 'redux';
import undoable, {includeAction} from 'redux-undo';
import counter from './counter';
import undo from './undo';
import {INCREMENT_TYPE, DECREMENT_TYPE, UNDO_TYPE, REDO_TYPE } from '../constants/actionTypes';
//使用redux的combineReducers方法将所有reducer打包起来

const rootReducer = combineReducers({
    counter :   counter,    //为 counter ： counter
    undo : undoable(undo, {     //撤销与重做
        filter: includeAction([INCREMENT_TYPE, DECREMENT_TYPE]),
        limit: 10,
        debug: true,
        undoType: UNDO_TYPE,
        redoType: REDO_TYPE
    })
});



export default rootReducer;