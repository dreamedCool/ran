<style lang="less" src="./less/public.less" scoped></style>
<style lang="less" src="./less/setpwd.less" scoped></style>
<template>
  <div class="wrapper">
    <div class='form-wrapper'>
        <div class="pwd">
          <input type="text" id="password" 
          placeholder="设置6位以上数字和字母密码" 
          v-model="pwd.val" v-on:blur='check(pwd)'/>
          <i class="icon i-close close" @click='close'
          v-show='pwd.val'></i>
          <div class="pwd-iswatch">
            <i class="icon i-password" v-if='isWatch' @click='toggle'></i>
            <i class="icon i-passwordnot" v-else @click='toggle'></i>
          </div>
        </div>
    </div>
    <div class="btn">
      <input type="button" class="next" :class='this.tip ? "can" : ""'
       value="下一步" @click='next'/>
    </div>
    <div class="agreement">注册登录代表同意用户协议</div>
  </div>
</template>
<script>
  import validate from './validate.js'
  import { mapActions } from 'vuex'
  export default {
    name: 'setpassword',
    data () {
      return {
        pwd: {
          name: '密码',
          val: ''
        },
        isWatch: true
      }
    },
    computed: {
      tip: function () {
        if (validate(this.pwd)) {
          return true
        } else {
          return false
        }
      }
    },
    mounted () {
    },
    methods: {
      ...mapActions(['setTip']),
      close () {
        this.pwd.val = ''
      },
      check (data) {
        if (!validate(data)) {
          this.setTip({
            text: '密码格式不正确'
          })
          this.tip = false
          return
        } else {
          this.tip = true
        }
      },
      next () {
        if (validate(this.pwd)) {
          this.$router.push({
            name: 'pdata'
          })
        }
      },
      toggle () {
        let pwdInput = document.getElementById('password')
        this.isWatch = !this.isWatch
        if (this.isWatch) {
          pwdInput.type = 'text'
        } else {
          pwdInput.type = 'password'
        }
      }
    }
  }
</script>
