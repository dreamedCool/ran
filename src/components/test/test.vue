<style lang="less" src="./less/test.less" scoped></style>
<style lang="less" scoped>

</style>
<template>
  <div class="bg">
    <img src="/static/test/pointer.png" class="pointer" @click="turn">
    <img src="/static/test/turntable.png" alt="turntable" class="turntable">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        cat: 51.4,
        num: 0,
        offOn: true
      }
    },
    methods: {
      turn () {
        let oTurntable = document.getElementsByTagName('img')[1]
        if (this.offOn) {
          oTurntable.style.transform = 'rotate(0deg)'
          this.offOn = !this.offOn
          this.ratating()
        }
      },
      ratating () {
        let oTurntable = document.getElementsByTagName('img')[1]
        let timer = null
        let rdm = 0
        clearInterval(timer)
        timer = setInterval(() => {
          if (Math.floor(rdm / 360) < 3) {
            rdm = Math.floor(Math.random() * 3600)
          } else {
            oTurntable.style.transform = 'rotate(' + rdm + 'deg)'
            clearInterval(timer)
            setTimeout(() => {
              this.offOn = !this.offOn
              this.num = rdm % 360
              console.log(this.num)
              if (this.num <= this.cat * 1) {
                alert('4999')
              } else if (this.num <= this.cat * 2) {
                alert('条50元')
              } else if (this.num <= this.cat * 3) {
                alert('10元')
              } else if (this.num <= this.cat * 4) {
                alert('5元')
              } else if (this.num <= this.cat * 5) {
                alert('免息服务')
              } else if (this.num <= this.cat * 6) {
                alert('提交白金')
              } else {
                alert('未中奖')
              }
            }, 4000)
          }
        }, 30)
      }
    }
  }
</script>
