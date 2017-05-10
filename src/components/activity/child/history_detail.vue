<template>
  <div class="history_detail">
    <h1>历史活动的详情页-------</h1>
    <div class="back" @click="hide" style="width:100px; height:100px; background: yellow;">
      返回
    </div>
  </div>
</template>
<script>
  export default {
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
