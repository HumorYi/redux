export default function thunk({ dispatch, getState }) {
  return originalDispatch => action => {
    return typeof action === 'function' ? action(dispatch, getState) : originalDispatch(action)
  }
}
