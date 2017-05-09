<template>
  <div v-show="showFlag" ref="detail">
    <h1>详情页</h1>
    <div class="back" @click="hide">
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
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>
