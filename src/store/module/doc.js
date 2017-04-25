import {
  SHOW_NAV,
  HIDE_NAV,
  TOGGLE_NAV
} from '../mutation_types'
const state = {
  navInfo: {
    hasNav: false,
    navs: [
      {
        icon: 'i-home',
        text: '首页',
        route: 'index',
        active: true
      },
      {
        icon: 'i-activity',
        text: '活动',
        route: 'activity',
        active: false
      },
      {
        icon: 'i-personal',
        text: '我的',
        route: 'personal',
        active: false
      }

    ]
  }
}
const mutations = {
  [SHOW_NAV] (state) {
    state.navInfo.hasNav = true
  },
  [HIDE_NAV] (state) {
    state.navInfo.hasNav = false
  },
  [TOGGLE_NAV] (state, nav) {
    for (let ele of state.navInfo.navs) {
      ele.active = false
    }
    nav.active = true
  }
}
const actions = {
  showNav ({ commit }) {
    commit(SHOW_NAV)
  },
  hideNav ({ commit }) {
    commit(HIDE_NAV)
  },
  toggleNav ({ commit }) {
    commit(TOGGLE_NAV)
  }
}
export default {
  state,
  mutations,
  actions
}
