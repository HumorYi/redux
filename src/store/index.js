import { createStore, applyMiddleware, combineReducers } from '../redux'
import { thunk, promise, logger } from '../middlewares'

export const homeReducer = (state = 0, { type, payload = 1 }) => {
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

export const loginReducer = (login = false, { type }) => {
  switch (type) {
    case 'LOGIN':
      login = true
      return login
    case 'LOGINOUT':
      login = false
      return login
    default:
      return login
  }
}

export default createStore(
  combineReducers({ home: homeReducer, login: loginReducer }),
  applyMiddleware(thunk, promise, logger)
)
