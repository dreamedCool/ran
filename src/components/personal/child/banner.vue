<style lang="less" src='../less/banner.less'></style>
<template>
  <div class="container">
    <div class="back">
      <i class="icon i-back"></i>
    </div>
    <div class="person-info">
      <div class="portrait" :style="{backgroundImage: 'url('+personInfo.portrait+')'}">
      </div>
      <div class="name">
        <div class="person-name">{{personInfo.name}}</div>
        <div class="person-address">
          <i class="icon i-location"></i>
          <span>{{personInfo.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {
        personInfo: {
          bgUrl: '',
          portrait: 'static/head.jpg',
          name: 'Erikkk',
          address: '北京，朝阳'
        }
      }
    },
    mounted () {
      this.getAjax()
    },
    methods: {
      getAjax () {
        this.$http.get('/lw/user/info').then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
