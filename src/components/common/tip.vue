<style lang="less" scoped>
  .tip-wrapper{
    height: 50/75rem;
    background: #000;
    opacity: 0.68;
    position: fixed;
    top: 31%;
    left: 50%;
    margin-left: -100/75rem;
    text-align: center;
    line-height: 50/75rem;
    padding: 0 15/75rem;
    p {
      color: #fff;
      font-size: 28/75rem;
    }
  }
</style>
<template>
  <div class="tip-wrapper" v-if='tipInitShow'>
    <p>{{tip.text}}</p>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'tip',
    data () {
      return {
        tipInitShow: false
      }
    },
    computed: mapState({tip: ({doc}) => doc.tip}),
    methods: {
      tipShow () {
        let self = this
        self.tipInitShow = true
        setTimeout(function () {
          self.tipInitShow = false
          if (self.tip.callback) {
            self.tip.callback()
          }
        }, self.tip.time)
      }
    },
    watch: {
      tip: 'tipShow'
    }
  }
</script>
