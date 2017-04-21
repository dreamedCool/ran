export default {
  mock (obj) {
    if (!window.mock) {
      window.Mock = require('mockjs')
      return window.Mock.mock(obj)
    }
  }
}
