export default [
  {
    path: '/activity',
    name: 'activity',
    components: (resolve) => require(['../components/activity/activity.vue'], resolve),
    meta: {
      footer: {
        require: true
      }
    }
  }
]
