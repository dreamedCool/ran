export default [
  {
    path: '/test',
    name: 'test',
    component: (resolve) => require(['../components/test/test.vue'], resolve),
    meta: {
      header: {
        require: false
      },
      footer: {
        require: false
      }
    }
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: (resolve) => require(['../components/test/canvas.vue'], resolve),
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
