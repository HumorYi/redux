export function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

export function getType(data) {
  return Object.prototype.toString.call(data).slice(1, -8)
}

export function isObject(obj) {
  return getType(obj) === 'object'
}
