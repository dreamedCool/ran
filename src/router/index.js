import Vue from 'vue'
import Router from 'vue-router'
import doc from '../store/module/doc'
import store from '../store/store'
import Activity from './activity'
import User from './user'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['../components/home/index.vue'], resolve),
      meta: {
        header: {
          require: false
        },
        footer: {
          require: true
        }
      }
    },
    {
      path: '/',
      redirect: '/index'
    },
    ...Activity,
    ...User
  ]
})
router.afterEach((route) => {
  const arr = ['index', 'activity', 'personal']
  let i = arr.indexOf(route.name)
  if (route.meta.header.require) {
    doc.actions.setHeader(store, route.meta.header)
  } else {
    doc.actions.setDefaultHeader(store)
  }
  if (route.meta.footer && route.meta.footer.require) {
    doc.actions.showNav(store)
    doc.actions.toggleNav(store, store.state.doc.navInfo.navs[i])
  } else {
    doc.actions.hideNav(store)
  }
})
export default router
