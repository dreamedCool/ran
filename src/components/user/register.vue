<style lang="less" src="./less/public.less" scoped></style>
<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <div class="tel">
        <input type="number" placeholder="请输入手机号码"
        v-model='tel.val' v-on:blur='check(tel)'
        :class="this.tip==='手机号码'?'wrong':''" maxlength="11"/>
        <i class="icon i-close close" @click='close(tel)' v-show='tel.val'></i>
      </div>
      <div class="code">
        <input type="number" placeholder="请输入验证码" 
        v-model='code.val' v-on:blur='check(code)'
        :class="this.tip==='验证码'?'wrong':''"/>
        <i class="icon i-close close" @click='close(code)' v-show='code.val'></i>
        <input type="button" class="validate" 
         @click='sendMsg(tel)' 
        v-show='!countState' :value='initShow' readonly="true">
        <span class="countdown" v-show='countState'>{{count}}s重新发送</span>
      </div>
    </div>
    <div class="btn">
      <p class="error-tip" v-show='tip'>{{tip}}</p>
      <input type="button" class="next" 
      :class="nextStatus ? 'can' : ''" value="下一步" @click="next()"
      :disabled="!nextStatus"/>
    </div>
    <div class="agreement">注册登录代表同意用户协议</div>
  </div>
</template>
<script>
  import validate from './validate.js'
  export default {
    name: 'register',
    data () {
      return {
        tel: {
          name: '手机号码',
          val: ''
        },
        code: {
          name: '验证码',
          val: ''
        },
        initShow: '获取验证码',
        tip: ' ', // 错误提示
        count: 60, // 验证码的发送时间
        countState: false, // 重新发送的状态
        time: '' // 定时器
      }
    },
    computed: {
      nextStatus: function () {
        if (this.tel.val && this.code.val && this.tip.trim() === '') {
          return true
        } else {
          return false
        }
      }
    },
    mounted () {
    },
    methods: {
      close (data) {
        if (data.name === '手机号码') {
          this.tel.val = ''
        }
        if (data.name === '验证码') {
          this.code.val = ''
        }
      },
      check (data) {
        let result = validate(data)
        if (!result) {
          this.tip = data.name + '不正确'
          return false
        } else {
          this.tip = ''
          return true
        }
      },
      sendMsg (tel) {
        let result = validate(this.tel)
        if (!result) {
          this.tip = '手机号码不正确'
          return
        }
        this.checkTel()
      },
      checkTel () { // 检查手机号是否绑定
        this.$http.get('/lw/tels/' + this.tel.val + '/existed').then((res) => {
          let resData = res.body
          if (resData.errorCode === 0) {
            if (resData.data.existed) {
              this.tip = '手机号码已经注册'
              return
            } else {
              this.countState = true
              this.time = setInterval(() => {
                this.count--
                if (this.count === 0) {
                  this.initShow = '重新发送'
                  this.countState = false
                  this.count = 60
                  clearInterval(this.time)
                }
              }, 1000)
              this.getCheckNumber()
            }
          }
        })
      },
      getCheckNumber () { // 获取验证码
        this.$http({
          url: '/lw/sms/verification_code',
          method: 'POST',
          body: JSON.stringify({tel: this.tel.val})
        }).then((res) => {
          let resData = res.body
          if (resData.errCode !== 0) {
            console.log(resData.message)
          }
        })
      },
      next () { // 验证号码和验证码
        this.$http({
          url: '/lw//user/binding_tel',
          method: 'POST',
          body: {
            tel: this.tel.val,
            code: this.code.val
          }
        }).then((res) => {
          let resData = res.data
          if (resData.errorCode !== 0) {
            this.tip = resData.message
          } else {
            this.$router.push({
              name: 'setpassword'
            })
          }
          this.$router.push({
            name: 'setpassword'
          })
        })
      }
    }
  }
</script>
