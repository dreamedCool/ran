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
    <!-- @getActivityDetail 接受来自子组件的方法-->
    <Newest v-show="isHotMenu" @getActivityDetail="getActivityDetail"></Newest>
    <History v-show="!isHotMenu" @getActivityDetail="getActivityDetail"></History>
  </div>
  <Detail ref="detail" :activity="selectedActivity" :sourceType="sourceType"></Detail>
</div>
</template>
<script>
  import Banner from '../common/banner/banner'
  import Newest from './child/newest'
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
        selectedActivity: {},
        sourceType: 1
      }
    },
    components: {
      Banner, Newest, History, Detail
    },
    methods: {
      toggleMenu (param) {
        this.isHotMenu = param
      },
      getActivityDetail (activity, type) {
        this.sourceType = type
        this.showFlag = !this.showFlag
        this.$refs.detail.show()
        this.selectedActivity = activity
      }
    }
  }
</script>

