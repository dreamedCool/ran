<style lang="less" src='./less/feedback.less' scoped></style>
<template>
  <div class="feedback">
    <h3 class="title">反馈类型</h3>
    <div class="feed-style">
      <div>
        <input type="radio" v-model='feedstyle' value="1"/>功能需求
      </div>
      <div>
        <input type="radio" v-model='feedstyle' value="2"/>报告错误
      </div>
      <div>
        <input type="radio" v-model='feedstyle' value="3"/>活动选题建议
      </div>
      <div>
        <input type="radio" v-model='feedstyle' value="4"/>其他
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        feedstyle: ''
      }
    }
  }
</script>
