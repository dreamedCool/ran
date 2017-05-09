<style lang="less" src="./less/activity.less" scoped></style>
<template>
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
</template>
<script>
  import Banner from '../common/banner/banner'
  import Recommend from './child/recommend'
  import History from './child/history'
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
        isHotMenu: true
      }
    },
    components: {
      Banner, Recommend, History
    },
    methods: {
      toggleMenu (param) {
        this.isHotMenu = param
      }
    }
  }
</script>

