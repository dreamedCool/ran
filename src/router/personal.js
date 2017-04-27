export default [
  {
    path: '/personal',
    name: 'personal',
    component: (resolve) => require(['../components/personal/index.vue'], resolve),
    meta: {
      header: {
        require: false
      },
      footer: {
        require: false
      }
    }
  }
]
