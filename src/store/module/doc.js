import {
  SHOW_NAV,
  HIDE_NAV,
  TOGGLE_NAV,
  SET_HEADER,
  SET_DEFAULTHEADER,
  SET_TIP
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
  },
  header: {
    title: '',
    back: {
      visible: false,
      callback: null
    },
    btn: {
      visible: false,
      text: '',
      callback: null
    }
  },
  tip: {
    text: '',
    time: 2000,
    callback: null
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
  },
  [SET_HEADER] (state, info) {
    state.header = info
  },
  [SET_DEFAULTHEADER] (state) {
    state.header = {
      title: ''
    }
  },
  [SET_TIP] (state, info) {
    if (!info.time) {
      info.time = 2000
    }
    if (!info.text) {
      throw new Error('该字段不能为空')
    }
    state.tip = info
  }
}
const actions = {
  showNav ({ commit }) {
    commit(SHOW_NAV)
  },
  hideNav ({ commit }) {
    commit(HIDE_NAV)
  },
  toggleNav ({ commit }, navs, nav) {
    commit(TOGGLE_NAV, navs, nav)
  },
  setHeader ({ commit }, data) {
    commit(SET_HEADER, data)
  },
  setDefaultHeader ({ commit }) {
    commit(SET_DEFAULTHEADER)
  },
  setTip ({ commit }, info) {
    commit(SET_TIP, info)
  }
}
export default {
  state,
  mutations,
  actions
}
