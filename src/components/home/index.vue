<style src='./less/index.less' lang="less" scoped></style>
<template>
    <div class="container">
        <Banner :listImg="banners"></Banner>
        <template>
          <div class="tab">
            <div class="per-tab">
              <i class="icon i-lecture"></i>
              <span>燃专题</span>
            </div>
            <div class="per-tab">
              <i class="icon i-circle"></i>
              <span>燃圈子</span>
            </div>
            <div class="per-tab">
              <i class="icon i-artist"></i>
              <span>艺术家</span>
            </div>
          </div>
        </template>
        <div id="detail">
          <Life></Life>
          <Artist></Artist>
          <Topic></Topic>
          <Circles></Circles>
        </div>
    </div>
</template>
<script>
  import Banner from '../common/banner/banner'
  import Life from './child/activity'
  import Artist from './child/artist'
  import Topic from './child/topic'
  import Circles from './child/circles'
  export default {
    name: 'home',
    data () {
      return {
        banners: [
          {
            url: 'static/topic.jpg'
          },
          {
            url: 'static/topic2.jpg'
          },
          {
            url: 'static/activityImg.png'
          },
          {
            url: 'static/banner.jpg'
          }
        ]
      }
    },
    components: {
      Banner, Life, Artist, Topic, Circles
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
