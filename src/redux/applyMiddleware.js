import { compose } from '../utils'

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer)
    const {dispatch, getState} = store

    // 扩展版 dispatch 给 函数、异步调用
    let extendDispatch = null

    const middlewareApi = {
      getState,
      dispatch: (action, ...args) => extendDispatch(action, ...args)
    }

    const middlewaresChain = middlewares.map(middleware => middleware(middlewareApi))

    // 同步还是调原来的 dispatch
    extendDispatch = compose(...middlewaresChain)(dispatch)

    return {
      ...store,
      dispatch: extendDispatch
    }
  }
}


