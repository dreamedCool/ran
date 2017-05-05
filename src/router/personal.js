export default [
  {
    path: '/pdata',
    name: 'pdata',
    component: (resolve) => require(['../components/personal/pdata.vue'], resolve),
    meta: {
      header: {
        require: true,
        title: '个人资料设置',
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
    }
  },
  {
    path: '/sign',
    name: 'sign',
    component: (resolve) => require(['../components/personal/sign.vue'], resolve),
    meta: {
      header: {
        require: true,
        title: '个性签名',
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
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: (resolve) => require(['../components/personal/index.vue'], resolve),
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
