<style lang="less" scoped>
  .wrapper {
    width: 10rem;
    height: 100%;
    padding-top: 1.27rem;
    margin-top: 15/75rem;
    .bg {
      background: #fff;
      text-align: center;
    }
    textarea {
      width: 8rem;
      height: 160/75rem;
      border: none;
      outline: none;
      font-size: 42/75rem;
      padding-top: 20/75rem;
      font-size: #000;
    }
    .count {
      width: 10rem;
      display: flex;
      justify-content: flex-end;
      padding-right: 34/75rem;
      padding-bottom: 20/75rem;
      span {
        color: #000;
        opacity: 0.4;
        font-size: 32/75rem;
      }
    }
    .button {
      width: 652/75rem;
      height: 80/75rem;
      background: #f84444;
      border-radius: 30/75rem;
      color: #fff;
      line-height: 80/75rem;
      letter-spacing: 5/75rem;
      font-size: 32/75rem;
      margin: 0 auto;
      margin-top: 48/75rem;
      text-align: center;
    }
  }
</style>
<template>
  <div class="wrapper">
    <div class="bg">
      <textarea cols="20" rows="5" v-model='message' 
      placeholder="请输入个性签名" v-on:input="compute">
      </textarea>
      <div class="count">
        <span>{{count}}</span>
      </div>
    </div>
     <div class="button" @click='save'>保存</div>
  </div>
</template>
<script>
  // import Bus from '../../plugins/bus'
  // import Event from '../../plugins/bus_name'
  export default {
    name: 'sign',
    data () {
      return {
        num: 30,
        message: ''
      }
    },
    computed: {
      count: function () {
        return this.num - this.message.length
      }
    },
    methods: {
      compute () {
        if (this.message.length > 30) {
          this.message = this.message.slice(0, 30)
        }
      },
      save () {
        this.$router.push({
          path: '/pdata',
          query: {
            message: this.message
          }
        })
      }
    }
  }
</script>

