import {INCREMENT_TYPE, DECREMENT_TYPE, UNDO_TYPE, REDO_TYPE } from '../constants/actionTypes';

export function incrementType() {
    return {type : INCREMENT_TYPE};
}

export function decrementType() {
    return {type : DECREMENT_TYPE};
}

export function undoType() {
    return {type : UNDO_TYPE};
}

export function redoType() {
    return {type : REDO_TYPE};
}



