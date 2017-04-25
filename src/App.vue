<style src='./assets/less/ran.less' lang="less"></style>
<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import footerNav from './components/common/footer_nav'
export default {
  name: 'app',
  components: {
    footerNav
  }
}
</script>

