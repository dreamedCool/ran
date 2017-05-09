<template>
    <i class="icon store-style" :class="{'i-stored':collected, 'i-store':!collected}" @click="toggleCollect"></i>
</template>
<script>
  export default {
    name: 'favorite',
    data () {
      return {
        collected: false
      }
    },
    methods: {
      toggleCollect (event) {
        this.collected = !this.collected
      }
    }
  }
</script>
<style lang="less">
  .store-style {
    font-size: 44/75rem;
    color: #ff5f5f;
  }
</style>
