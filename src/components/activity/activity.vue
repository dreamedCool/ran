<style lang="less" src="./less/activity.less" scoped></style>
<template>
<div>
  <div class="container">
    <Banner :listImg="banners"></Banner>
    <div class="nav">
      <div class="nav-item">
        <div class="hot" :class="{active:isHotMenu}" @click="toggleMenu(true)"></div>
      </div>
      <div class="nav-item">
        <div class="history" :class="{active:!isHotMenu}" @click="toggleMenu(false)"></div>
      </div>
    </div>
    <Recommend v-show="isHotMenu"></Recommend>
    <History v-show="!isHotMenu"></History>
  </div>
  <!-- 活动详情页 @getActivityDetail 接受来自子组件的方法-->
  <Detail @getActivityDetail="getActivityDetail" :activity="selectedActivity" ref="detail"></Detail>
</div>
</template>
<script>
  import Banner from '../common/banner/banner'
  import Recommend from './child/recommend'
  import History from './child/history'
  import Detail from './child/detail'
  export default {
    name: 'activity',
    data () {
      return {
        banners: [
          {
            url: 'static/banner.jpg'
          },
          {
            url: 'static/bg.jpg'
          },
          {
            url: 'static/activityImg.png'
          }
        ],
        isHotMenu: true,
        selectedActivity: {}
      }
    },
    components: {
      Banner, Recommend, History, Detail
    },
    methods: {
      toggleMenu (param) {
        this.isHotMenu = param
      },
      getActivityDetail (activity) {
        console.log('父组件监听到了来自子组件的事件')
        this.$refs.detail.show()
        this.selectedActivity = activity
      }
    }
  }
</script>

