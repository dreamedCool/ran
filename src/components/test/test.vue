<style lang="less" src="./less/test.less" scoped></style>
<template>
  <div>
    <Mytitle></Mytitle>
    <div class="bg">
      <img src="/static/test/pointer.png" class="pointer">
      <img src="/static/test/turntable.png" class="turntable" ref='turntable'>
    </div>
    <div class="button" @click="turn">点击</div>
  </div>
</template>
<script>
  import Mytitle from './title.vue'
  export default {
    data () {
      return {
        cat: 51.4, // 每格的度数
        deg: 0, // 转动的初始度数,
        offOn: true,
        num: 0
      }
    },
    components: {Mytitle},
    methods: {
      turn () {
        if (this.offOn) {
          this.offOn = !this.offOn
          this.ratating()
        }
      },
      ratating () {
        this.offOn = !this.offOn
        let oTurntable = document.getElementsByTagName('img')[1]
        this.deg = 810 - 51.4
        this.num = this.deg % 360
        console.log(this.num)
        oTurntable.style.transform = 'rotate(' + this.deg + 'deg)'
        setTimeout(() => {
          switch (this.num) {
            // case
          }
        }, 4000)
      }
    }
  }
</script>
