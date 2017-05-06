<template>
  <div class="wrapper">
    <div class="banner" v-for="item in banners">
      <img :src="item.url" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'activityBanner',
    data () {
      return {
        banners: [
          {
            url: 'static/banner.jpg'
          }
        ]
      }
    },
    mounted () {
      this.getBannerList()
    },
    methods: {
      getBannerList () {
        this.$http.get('/lw/home').then(res => {
          let result = res.body
          console.log(result)
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .wrapper {
    width: 10rem;
    height: 360/75rem;
    img {
      width: 10rem;
      height: 360/75rem;
    }
  }
</style>
