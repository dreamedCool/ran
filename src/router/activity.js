export default [
  {
    path: '/activity',
    name: 'activity',
    component: (resolve) => require(['../components/activity/activity.vue'], resolve),
    meta: {
      header: {
        require: false
      },
      footer: {
        require: true
      }
    }
  }
]
