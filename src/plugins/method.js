let myMethods = {}
import mock from './mock'
import tool from './tool'
myMethods.install = function (Vue) {
  let methods = {}
  Object.assign(methods, mock, tool)
  Vue.prototype.$m = methods
}
export default myMethods
