<style lang="less" scoped>
  .wrap {
    width: 10rem;
    height: 100%;
    //background: #fff;
    margin-bottom: 200/75rem;
  }
  .tab {
    width: 10rem;
    height: 170/75rem;
    display: flex;
    justify-content: space-around;
    font-size: 22/75rem;
    color: #303030;
  }
  .mine {
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .icon {
      font-size: 48/75rem;
      padding: 20/75rem 0;
    }
    span {
      font-size: 28/75rem;
    }
  }
  .mine-more {
    width: 10rem;
    height: 92/75rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12/75rem;
    padding: 0 34/75rem;
  }
  .mine-mores {
    width: 10rem;
    height: 108/75rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34/75rem;
    border-bottom: solid 1/75rem #f2f2f2;
  }
</style>
<template>
  <div class="wrap">
    <Banner></Banner>
    <div class="tab">
      <div class='mine'>
        <i class="icon i-mine-activity"></i>
        <span>我的活动</span>
      </div>
      <div class='mine'>
         <i class="icon i-wallet"></i>
        <span>我的钱包</span>
      </div>
      <div class='mine'>
         <i class="icon i-store"></i>
        <span>我的收藏</span>
      </div>
      <div class='mine'>
         <i class="icon i-identification"></i>
        <span>申请认证</span>
      </div>
    </div>
    <div class="mine-more">
      <span>个人主页</span><i class="icon i-more"></i>
    </div>
    <div class="mine-more">
      <span>分享有礼</span><i class="icon i-more"></i>
    </div>
    <div class="mine-mores">
      <span>反馈与建议</span>
      <router-link :to='{name: "feedback"}'>
        <i class="icon i-more"></i>
      </router-link>
    </div>
    <div class="mine-mores">
      <span>评价我们</span><i class="icon i-more"></i>
    </div>
    <div class="mine-mores">
      <span>关于我们</span><i class="icon i-more"></i>
    </div>
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
