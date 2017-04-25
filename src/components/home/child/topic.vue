<style lang="less" scoped>
.title {
  padding: 64/75rem 32/75rem 32/75rem 32/75rem;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 36/75rem;
    font-family: bold;
  }
  .more {
    color: #919191;
  }
}
.special-topic {
    padding: 0 32/75rem;
    .special-detail-pic {
      width: 686/75rem;
      height: 240/75rem;
      margin-bottom: 20/75rem;
    }
 }
</style>
<template>
  <div>
    <div class="title">
      <h3>燃专题</h3>
      <div class="more">
        <span>更多</span>
        <i class="icon i-more"></i>
      </div>
    </div>
    <div class="special-topic">
      <div class="special-detail">
        <div class="special-detail-pic" v-for="item in topic"
        :style="{backgroundImage: 'url('+item+')'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'activity',
    data () {
      return {
        topic: [
          'static/topic.jpg', 'static/topic2.jpg'
        ]
      }
    }
  }
</script>
