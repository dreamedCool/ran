
export default [
  {
    path: '/register',
    name: 'register',
    meta: {
      header: {
        require: true,
        title: '注册',
        back: {
          visible: true
        },
        btn: {
          visible: false
        }
      },
      footer: {
        require: false
      }
    },
    component: (resolve) => require(['../components/user/register.vue'], resolve)
  }
]
