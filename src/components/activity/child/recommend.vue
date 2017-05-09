<template>
<div class="hotList-wrapper">
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
    <div class="main-img" @click="getActivityDetail(item, $event)">
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
          <Collection></Collection>
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
</template>
<script>
  import Collection from '../../common/collection/collection'
  export default {
    name: 'recommend',
    data () {
      return {
        hotList: [],
        selectedActivity: {}
      }
    },
    components: {
      Collection
    },
    mounted () {
      this.getHotList()
    },
    methods: {
      getHotList () {
        this.$http.get('/lw/events/recommended').then(res => {
          let resData = res.body
          if (resData.errorCode === 0) {
            this.hotList = resData.data
          }
        })
      },
      getActivityDetail (activity, event) {
        console.log('子组件接收到点击事件')
        this.$http.get('/lw/events/' + activity.id).then(res => {
          let resData = res.body
          if (resData.errorCode === 0) {
            this.selectedActivity = resData.data
          }
        })
        // 向父组件通信
        this.$emit('getActivityDetail', this.selectedActivity)
        // this.$refs.detail.show()
        // this.selectedFood = food
      }
    }
  }
</script>
<style lang="less" scoped>
.hotList-wrapper {
  .top {
    position: relative;
    height: 116.4/75rem;
    background-color: #fff;
    .timer-wrapper {
      position: absolute;
      left: 48/75rem;
      top: 50%;
      transform: translateY(-50%);
      .date {
        display: block;
        border-bottom: 1/75rem solid #303030;
        text-align: center;
        font-size: 40/75rem;
        color: #303030;
      }
      .time {
        font-size: 20/75rem;
        line-height: 22/75rem;
      }
    }
    .button-wrapper {
      position: absolute;
      right: 32/75rem;
      top: 50/75rem;
      .btn-remind {
        width: 116/75rem;
        height: 42/75rem;
        line-height: 42/75rem;
        text-align: center;
        border: 1/75rem solid #ff4949;
        border-radius: 24/75rem;
        color: #ff4949;
      }
    }
  }
  .main-img {
    width: 10rem;
    img {
      width: 100%;
      height: 779.6/75rem;
    }
  }
  .info-wrapper {
    width: 100%;
    height: 230/75rem;
    margin-bottom: 12/75rem;
    .info-top {
      position: relative;
      height: 147/75rem;
      background-color: #fff;
      .main {
        padding: 32/75rem 0 32/75rem 48/75rem;
        white-space: nowrap;
        .avator {
          display: inline-block;
          img{
            width: 84/75rem;
            height: 84/75rem;
            border-radius: 50%;
          }
        }
        .tit-wrapper {
          display: inline-block;
          width: 100%;
          padding-left: 24/75rem;
          .title {
            padding-bottom: 12/75rem;
            .topic {
              display: inline-block;
              max-width: 50%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #181818;
              font-size: 40/75rem;
            }
            .tip {
              display: inline-block;
              vertical-align: top;
              margin-left: 24/75rem;
              padding: 6/75rem 16/75rem;
              border-radius: 28/75rem;
              font-size: 20/75rem;
              color: #fff;
              background-color: #FF5F5F;
              &.full{
                background-color: #525151;
              }
            }
          }
          .teacher {
            font-size: 24/75rem;
          }
          
        }
      }
      .store {
        position: absolute;
        right: 48/75rem;
        top: 42.4/75rem;
      }
    }
    .info-bottom {
      position: relative;
      height: 83/75rem;
      margin-top: 1/75rem;
      background-color: #fff;
      .addr-msg {
        max-width: 596/75rem;
        line-height: 83/75rem;
        padding-left: 48/75rem;
        white-space: nowrap;        
        overflow: hidden;
        text-overflow: ellipsis;
        color: #616161;
        font-size: 24/75rem;
        .address {
          padding-left: 8/75rem;
          &:after {
            content: '|';
            padding: 0 16/75rem;
          }
        }
      }
      .price {
        position: absolute;
        right: 48/75rem;
        top: 22/75rem;
        font-size: 36/75rem;
        color: #ff3366;
      }
    }
  }
}
</style>
