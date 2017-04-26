<style lang="less" src="./less/register.less" scoped></style>
<template>
  <div class="wrapper">
    <div class="tel">
      <input type="number" placeholder="请输入手机号码"
       v-model='tel' />
      <i class="icon i-close close" @click='close("tel")' v-show='tel'></i>
    </div>
    <div class="pwd">
      <input type="number" placeholder="请输入验证码" v-model='pwd'/>
      <i class="icon i-close close" @click='close("pwd")' v-show='pwd'></i>
      <span class="validate">获取验证码</span>
    </div>
    <input type="button" class="next" value="下一步"/>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data () {
      return {
        tel: '',
        pwd: ''
      }
    },
    components: {
    },
    methods: {
      close (val) {
        if (val === 'tel') {
          this.tel = ''
        }
        if (val === 'pwd') {
          this.pwd = ''
        }
      }
    }
  }
</script>
