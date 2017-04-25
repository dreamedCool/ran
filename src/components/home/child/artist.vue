<style lang="less" src="../less/artist.less" scoped></style>
<template>
  <div>
    <div class="title">
        <h3>艺术家</h3>
        <div class="more">
          <span>更多</span>
          <i class="icon i-more"></i>
        </div>
    </div>
    <div class="artist">
      <div class="focus">
        <div class="focus-wrapper">
          <div class='people-info' v-for='item in artist'>
            <div class="p-portrait" :style="{backgroundImage: 'url('+item.url+')'}">
            </div>
            <span class="p-name">{{item.name}}</span>
            <p class="p-desc">{{item.desc}}</p>
            <div class="fans-activity">
              <span>粉丝 {{item.fans}}</span> |
              <span>活动 {{item.activity}}</span>
            </div>
            <div class="p-works">
              <img v-for="i in item.works" :src="i"/>
            </div>
            <div class="focus-btn not-focus">+关注</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'activity',
    data () {
      return {
        artist: [
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          },
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          },
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          }
        ]
      }
    }
  }
</script>
