<template>
  <div class="historyList-wrapper">
    <div class="list-item" v-for="item in historyList">
      <div class="main-photo" @click="getActivityDetail(item, $event)">
        <img :src="item.photo.url">
      </div>
      <div class="detail-message">
        <div class="store">
          <Collection></Collection>
        </div>
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
</template>
<script>
  import Collection from '../../common/collection/collection'
  export default {
    name: 'history',
    data () {
      return {
        historyList: []
      }
    },
    components: {
      Collection
    },
    mounted () {
      this.getHistoryList()
    },
    methods: {
      getHistoryList () {
        this.$http.get('/lw/events/history').then(res => {
          let resData = res.body
          if (resData.errorCode === 0) {
            this.historyList = resData.data.list
          }
        })
      },
      getActivityDetail (activity, event) {
        this.$http.get('/lw/events/' + activity.id).then(res => {
          let resData = res.body
          if (resData.errorCode === 0) {
            this.selectedActivity = resData.data
          }
        })
        // 向父组件activity.vue通信
        this.$emit('getActivityDetail', this.selectedActivity, 2)
      }
    }
  }
</script>
<style lang="less" scoped>
.historyList-wrapper {
  .list-item {
    margin-bottom: 20/75rem;
  }
  .main-photo {
    width: 10rem;
    img {
      width: 100%;
    }
  }
  .detail-message {
    position: relative;
    padding: 32/75rem 48/75rem 48/75rem;
    background-color: #fff;
    .store {
      position: absolute;
      right: 48/75rem;
      top: 42.4/75rem;
    }
    .topic {
      font-size: 40/75rem;
      color: #181818;
    }
    .teacher {
      padding-top: 20/75rem;
      font-size: 24/75rem;
      color: #181818;
    }
    .msg {
      display: flex;
      justify-content: space-between;
      padding-top: 24/75rem;
      padding-bottom: 52/75rem;
      font-size: 22/75rem;
      color: #181818;
      .location,.time {
        flex-grow: 1;
        white-space: nowrap;
      }
      .location {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .time {
        flex-basis: 264/75rem;
        text-align: right;
      }
    }
    .artTime {
      padding-bottom: 24/75rem;
      font-size: 28/75rem;
      color: #181818;
      opacity: 0.9;
      .artTit {
        padding-bottom: 24/75rem;
      }
      .imgList {
        width: 100%;
        font-size: 0;
        li {
          display: inline-block;
          width: 25%;
          img {
            width: 144/75rem;
            height: 144/75rem;
            border-radius: 5px;
          }
        }
        .more {
          position: relative;
          img {
            filter: blur(2px);
          }
          span {
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            white-space: nowrap;
            color: #fff;
            font-size: 24/75rem;
          }
        }
      }
    }
  }
}
</style>
