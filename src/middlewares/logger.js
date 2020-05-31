export default function logger({ getState }) {
  return originalDispatch => action => {
    console.log('-----------------------')

    console.info(action.type + '执行了！')

    const prevState = getState()
    console.table('prev state', prevState)

    const returnValue = originalDispatch(action)

    const nextState = getState()
    console.table('next state', nextState, returnValue)

    console.log('-----------------------')

    return returnValue
  }
}
