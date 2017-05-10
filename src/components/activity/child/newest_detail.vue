<template>
  <div class="newest_detail">
    <div class="photo">
      <img src="/static/activityDetail.jpg" alt="">
    </div>
    <div class="topic"></div>
    <div class="teacher"></div>
    <h1>最新活动的详情页</h1>
    <p>{{activity}}</p>
    <div class="back" @click="hide" style="width:100px; height:100px; background: green;">
      返回
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      activity: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    methods: {
      hide () {
        this.$emit('hide')
      }
    }
  }
</script>
