let myMethods = {}
import mock from './mock'
myMethods.install = function (Vue) {
  let methods = {}
  Object.assign(methods, mock)
  Vue.prototype.$m = methods
}
export default myMethods
