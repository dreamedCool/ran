export default [
  {
    path: '/register',
    name: 'register',
    meta: {
      header: {
        require: true,
        title: '绑定手机',
        btn: {
          visible: true,
          text: '跳过'
        }
      },
      footer: {
        require: false
      }
    },
    component: (resolve) => require(['../components/user/register.vue'], resolve)
  }
]
