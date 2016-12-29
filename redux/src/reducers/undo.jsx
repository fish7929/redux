import { INCREMENT_TYPE, DECREMENT_TYPE } from '../constants/actionTypes';


//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function undo(state = 0, action) {
  switch (action.type) {
    case INCREMENT_TYPE:
      return state + 1
    case DECREMENT_TYPE:
      return state - 1
    default:
      return state
  }
}