// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './store/store'
import router from './router'
import method from './plugins/method'
Vue.use(method)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.headers = {
  'Content-Type': 'application/text; charset=UTF-8',
  'rpc-key': 'ovvTH9HICcdb6K9I',
  'Authorization': 'ZjBkODBiNzAxY2MyNDE0MWEzMzVkNmE4YjBhYzU0NDI6MTg2MTI3OTIxMTA6MToxNzIyOjFjYmViM2Y0MjEyM2ZhOGVkOGRjMzc3OWYzOTJmYzU2'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
