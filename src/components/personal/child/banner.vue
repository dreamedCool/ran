<style lang="less" src='../less/banner.less'></style>
<template>
  <div class="container">
    <i class="icon i-warn"></i>
    <i class="icon i-set"></i>
    <div class="detail-info">
      <div class="portait"></div>
      <p>编辑你的资料</p>
      <div class="option">
        <span>关注 0</span> |
        <span>粉丝 0</span> |
        <span>赞 0</span>
      </div>
      <div class="data-set">
        资料设置<i class="icon i-more"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {
      }
    },
    mounted () {
      // this.getAjax()
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
