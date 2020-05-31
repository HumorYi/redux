import { isPromise } from '../utils/verify'

export default function promise({ dispatch }) {
  return originalDispatch => action => (isPromise(action) ? action.then(dispatch) : originalDispatch(action))
}
