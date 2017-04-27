<style lang="less" scoped>
  .wrapper {
    width: 10rem;
    background: #fff;
  }
</style>
<template>
  <div class="wrapper">
    <Banner></Banner>
  </div>
</template>
<script>
  import Banner from './child/banner'
  export default {
    name: 'personal',
    data () {
      return {}
    },
    components: {
      Banner
    }
  }
</script>
