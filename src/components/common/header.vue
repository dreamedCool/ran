<style lang="less" src="./less/header.less" scoped></style>
<template>
  <div class="=container" v-if="state.title !==''">
    <div class="wrapper">
      <a @click='goback'>
        <i class="icon i-back back"></i>
      </a>
      <span class="center">{{state.title}}</span>
      <a class="right">{{state.btn.text}}</a>
    </div>
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
    },
    mounted () {
    },
    methods: {
      goback () {
        if (this.state.back.callback) {
          this.state.back.callback()
        } else {
          window.history.go(-1)
        }
      }
    }
  }
</script>
