import { isObject } from '../utils/verify'

export default function combineReducers(obj) {
  if (!isObject(obj)) {
    return new Error('请传入一个 object: ' + obj)
  }

  const keys = Object.keys(obj)

  return (state = {}, action) => {
    let hasChanged = false
    const nextState = {}

    keys.forEach(key => {
      const reducer = obj[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey

      if (!hasChanged) {
        const isChange = nextStateForKey !== previousStateForKey

        if (isChange) {
          hasChanged = isChange
        }
      }
    })

    if (!hasChanged) {
      const isChange = keys.length !== Object.keys(state).length

      if (isChange) {
        hasChanged = isChange
      }
    }

    return hasChanged ? nextState : state
  }
}
