<style src='../less/banner.less' lang='less' scoped></style>
<template>
  <div class="wrapper">
    <div class="banner" v-for='item in list'>
      <img :src="item.url"/>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        list: [
          {
            url: 'static/banner.jpg'
          }
        ]
      }
    },
    mounted () {
      this.getAjax()
    },
    methods: {
      getAjax () {
        this.$http.get('/lw/home').then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
