<style lang="less" src="./less/activity.less" scoped></style>
<template>
  <div class="container">
    <Banner></Banner>
    <div class="nav">
      <div class="nav-item">
        <div class="hot" :class="{active:isHotMenu}" @click="toggleMenu(true)"></div>
      </div>
      <div class="nav-item">
        <div class="history" :class="{active:!isHotMenu}" @click="toggleMenu(false)"></div>
      </div>
    </div>
    <div class="hotList-wrapper" v-show="isHotMenu">
      <div class="list-item" v-for="item in hotList">
        <div class="top">
          <div class="timer-wrapper">
            <span class="date">2.19</span>
            <span class="time">周三10:00</span>
          </div>
          <div class="button-wrapper" v-show="item.ticketCount===0">
            <div class="btn-remind">空位提醒</div>
          </div>
        </div>
        <div class="main-img">
          <img :src="item.photo.url">
        </div>
        <div class="info-wrapper">
          <div class="info-top">
            <div class="main">
              <div class="avator">
                <img :src="item.teacher.avatar">
              </div>
              <div class="tit-wrapper">
                <div class="title">
                  <span class="topic">{{item.topic}}</span>
                  <span class="tip" :class="{full:item.ticketCount === 0}">{{item.ticketCount>0?'报名中':'已报满'}}</span>
                </div>
                <span class="teacher">指导: {{item.teacher.name}}</span>
              </div>
            </div>
            <div class="store">
              <i class="icon i-store"></i>
            </div>
          </div>
          <div class="info-bottom">
            <div class="addr-msg">
              <i class="icon i-location"></i>
              <span class="address">{{item.location.name}}</span>
              <span class="distance">1.3km</span>
            </div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="historyList-wrapper" v-show="!isHotMenu">
      <div class="list-item" v-for="item in historyList">
        <div class="main-photo">
          <img :src="item.photo.url">
        </div>
        <div class="detail-message">
          <div class="topic">{{item.topic}}</div>
          <div class="teacher">艺术家：{{item.teacher.name}}</div>
          <div class="msg">
            <div class="location">
              <i class="icon i-location"></i>
              <span>{{item.location.name}}</span>
            </div>
            <div class="time">
              <i class="icon i-date"></i>
              <span>2017.2.2 10：00~12：00</span>
            </div>
          </div>
          <div class="artTime">
            <div class="artTit">燃时刻</div>
            <ul class="imgList">
              <li><img src="static/activityImg.png"></li>
              <li><img src="static/activityImg.png"></li>
              <li><img src="static/activityImg.png"></li>
              <li class="more">
                <img src="static/activityImg.png">
                <span>查看更多</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  import Banner from './child/banner'
  let ERR_CODE = 0
  export default {
    name: 'activity',
    data () {
      return {
        isHotMenu: true,
        hotList: [],
        historyList: []
      }
    },
    components: {
      Banner
    },
    computed: {
      tipText () {
        return this.ticketCount > 0 ? '报名中' : '已报满'
      }
    },
    mounted () {
      this.getHotList()
      this.getHistoryList()
    },
    methods: {
      toggleMenu (param) {
        this.isHotMenu = param
      },
      getHotList () {
        this.$http.get('/lw/events/recommended').then(res => {
          let resData = res.body
          if (resData.errorCode === ERR_CODE) {
            this.hotList = resData.data
          }
        })
      },
      getHistoryList () {
        this.$http.get('/lw/events/history').then(res => {
          let resData = res.body
          if (resData.errorCode === ERR_CODE) {
            this.historyList = resData.data.list
          }
        })
      }
    }
  }
</script>

