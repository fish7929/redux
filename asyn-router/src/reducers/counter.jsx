import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const initialState = {
  value: 0
};

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      };
    case DECREMENT:
      return {
        value: state.value - 1
      };
    default:
      return state
  }
}