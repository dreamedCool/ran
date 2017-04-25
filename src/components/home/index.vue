<style src='./less/index.less' lang="less" scoped></style>
<template>
    <div class="container">
        <Banner></Banner>
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
  import Banner from './child/banner'
  import Life from './child/activity'
  import Artist from './child/artist'
  import Topic from './child/topic'
  import Circles from './child/circles'
  export default {
    name: 'test',
    data () {
      return {
      }
    },
    components: {
      Banner, Life, Artist, Topic, Circles
    },
    mounted () {
      let data = this.$m.mock({
        'string|3': '★★★'
      })
      console.log(data)
    },
    methods: {
    }
  }
</script>
