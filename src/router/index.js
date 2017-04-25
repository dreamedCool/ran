import Vue from 'vue'
import Router from 'vue-router'
import doc from '../store/module/doc'
import store from '../store/store'
import index from '@/components/home/index'
import activity from './activity'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        footer: {
          require: true
        }
      }
    },
    {
      path: '/',
      redirect: '/index'
    },
    ...activity
  ]
})
router.afterEach((route) => {
  if (route.meta.footer.require) {
    doc.actions.showNav(store)
  } else {
    doc.actions.hideNav(store)
  }
})
export default router
