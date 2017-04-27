<style lang="less" src="./less/header.less" scoped></style>
<style lang="less" scoped>

</style>
<template>
  <div class="container" v-if="state.title !==''">
    <div>
      <a @click='goback'>
        <i class="icon i-back back"></i>
      </a>
    </div>
    <h3 class="center">{{state.title}}</h3>
    <div>
      <a class="right" v-html='state.btn.text'></a>
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
