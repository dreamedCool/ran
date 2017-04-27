<style src='./assets/less/ran.less' lang="less"></style>
<template>
  <div id="app" class="container">
    <pub-head></pub-head>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import pubHead from './components/common/header'
import footerNav from './components/common/footer_nav'
export default {
  name: 'app',
  components: {
    footerNav, pubHead
  }
}
</script>

