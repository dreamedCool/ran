<style lang="less" src="./less/header.less" scoped></style>
<template>
  <div class="wrapper">
    <a>
      <i class="icon i-back back"></i>
    </a>
    <span class="center">{{state.title}}</span>
    <a class="right">{{state.btn.text}}</a>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'pubHeader',
    data () {
      return {
      }
    },
    computed: {
      ...mapState({state: ({doc}) => doc.header})
    }
  }
</script>
