function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args))
}

export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  const boundActionCreators = {}

  Object.keys(actionCreators).forEach(key => {
    boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
  })

  return boundActionCreators
}
