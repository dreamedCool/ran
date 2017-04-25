import activity from '@/components/activity/activity'
export default [
  {
    path: '/activity',
    name: 'activity',
    components: activity,
    meta: {
      footer: {
        require: true
      }
    }
  }
]
