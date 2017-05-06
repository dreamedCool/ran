<style lang="less" src="./less/activity.less" scoped></style>
<template>
  <div class="container">
    <Banner></Banner>
    <div class="nav">
      <div class="nav-item">
        <div class="hot active"></div>
      </div>
      <div class="nav-item">
        <div class="history"></div>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list-item">
        <div class="top">
          <div class="timer-wrapper">
            <span class="date">2.19</span>
            <span class="time">周三10:00</span>
          </div>
          <div class="button-wrapper">
            <div class="btn-remind">{{btnText}}</div>
          </div>
        </div>
        <div class="main-img">
          <img src="static/activityImg.png">
        </div>
        <div class="info-wrapper">
          <div class="info-top">
            <div class="main">
              <div class="avator">
                <img src="static/portait.png">
              </div>
              <div class="tit-wrapper">
                <div class="title">
                  <span>油画.回眸</span>
                  <span class="tip">已报满</span>
                </div>
                <span class="teacher">指导: 陈文夏</span>
              </div>
            </div>
            <div class="store">
              <i class="icon i-store"></i>
            </div>
          </div>
          <div class="info-bottom">
            <div class="addr-msg">
              <i class="icon i-location"></i>
              <span class="address">北京三里屯朝外soho</span>
              <span class="distance">1.3km</span>
            </div>
            <div class="price">￥299</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from './child/banner'
  export default {
    name: 'activity',
    data () {
      return {
        btnText: '空位提醒'
      }
    },
    components: {
      Banner
    }
  }
</script>

