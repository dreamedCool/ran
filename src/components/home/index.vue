<style src='./less/index.less' lang="less" scoped></style>
<template>
    <div class="container">
        <banner></banner>
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
        <div class="life">
          <div class="life-title">
            <h3>燃活动</h3>
            <div class="more">
              <span>更多</span>
              <i class="icon i-more"></i>
            </div>
          </div>
          <div class="life-detail-wrapper">
            <span class="life-detail-name">燃画布</span>
            <span class="life-detail-english">MYCANVAS</span>
            <i class="icon i-store life-detail-store"></i>
            <span class="pic-name">油画.回眸</span>
            <em class="pic-price">￥299</em>
            <div class="pic-date">
              <i class="icon i-date"></i>
              <time>2017-02-02</time>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  import banner from './child/banner'
  export default {
    name: 'test',
    data () {
      return {}
    },
    components: {
      banner
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
