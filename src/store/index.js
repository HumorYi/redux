import { createStore, applyMiddleware, combineReducers } from '../redux'
import { thunk, promise, logger } from '../middlewares'

export const countReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload
    //如果state是对象
    // return {...state, ...newState};
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}

console.log(combineReducers)

export default createStore(countReducer, applyMiddleware(thunk, promise, logger))

