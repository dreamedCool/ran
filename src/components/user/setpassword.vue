<style lang="less" src="./less/public.less" scoped></style>
<style lang="less" src="./less/setpwd.less" scoped></style>
<template>
  <div class="wrapper">
    <div class='form-wrapper'>
        <div class="pwd">
          <input type="text" id="password" placeholder="设置6位以上数字和字母密码" v-model="pwd.val"/>
          <i class="icon i-close close" @click='close' 
          v-show='pwd.val'></i>
          <div class="pwd-iswatch">
            <i class="icon i-password" v-if='isWatch' @click='toggle'></i>
            <i class="icon i-passwordnot" v-else @click='toggle'></i>
          </div>
        </div>
    </div>
    <div class="btn">
      <p class="error-tip" >{{tip}}</p>
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
        },
        tip: '',
        isWatch: true
      }
    },
    computed: {
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
      },
      toggle () {
        let passInput = document.getElementById('password')
        this.isWatch = !this.isWatch
        if (this.isWatch) {
          passInput.type = 'text'
        } else {
          passInput.type = 'password'
        }
      }
    }
  }
</script>
