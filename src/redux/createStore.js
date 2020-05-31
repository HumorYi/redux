export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let state
  let listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)

    listeners.forEach(listener => listener())

    return action
  }

  function subscribe(listener) {
    listeners.push(listener)

    return () => listeners.splice(listeners.indexOf(listener), 1)
  }

  dispatch({ type: 'REDUX/HumorYi/Dispatch' })

  return { getState, dispatch, subscribe }
}
