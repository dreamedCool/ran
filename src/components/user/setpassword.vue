<style lang="less" src="./less/public.less" scoped></style>
<style lang="less" src="./less/setpwd.less" scoped></style>
<template>
  <div class="wrapper">
    <div class='form-wrapper'>
        <div class="pwd">
          <input type="text" placeholder="设置密码" v-model="pwd.val"/>
          <i class="icon i-close close" @click='close' 
          v-show='pwd.val'></i>
        </div>
    </div>
    <div class="btn">
      <p class="error-tip" >不正确</p>
      <input type="button" class="next" value="下一步" @click='next'/>
    </div>
    <div class="agreement">注册登录代表同意用户协议</div>
  </div>
</template>
<script>
  // import validate from './validate.js'
  export default {
    name: 'setpassword',
    data () {
      return {
        pwd: {
          name: '密码',
          val: ''
        }
      }
    },
    computed: {
      tel: function () {
        return this.$route.query.tel
      },
      code: function () {
        return this.$route.query.code
      }
    },
    mounted () {
    },
    methods: {
      close () {
        this.pwd.val = ''
      },
      next () {
        this.$router.push({
          name: 'personal'
        })
      }
    }
  }
</script>
