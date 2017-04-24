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
        this.$http.get('/lw/collections/094c9ec162967dc3c4c2').then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
