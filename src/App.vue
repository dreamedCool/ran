<style src='./assets/less/ran.less' lang="less"></style>
<template>
  <div id="app" class="container">
    <pub-head></pub-head>
    <tip></tip>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import pubHead from './components/common/header'
import tip from './components/common/tip'
import footerNav from './components/common/footer_nav'
export default {
  name: 'app',
  components: {
    footerNav, pubHead, tip
  }
}
</script>

