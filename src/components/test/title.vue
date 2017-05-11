<style lang="less" scoped>
ul,li{margin:0; padding:0; }
li{ list-style:none; }
.container{
  width: 10rem;
  height: 88/75rem;
  background:#efefef;
  margin-bottom: 20/75rem;
  overflow: hidden;
 }
.container .li-box{
    width: 10rem;
   height:88/75rem; 
   overflow:hidden;
}
.container ul{ 
  position:relative;
}
.container li{
  height: 88/75rem; 
  line-height:88/75rem; 
  color:#666; 
  }
</style>
<template>
  <div class="container">
    <div class="li-box">
      <ul ref='wrapper'>
        <li>{{titles[titles.length - 1]}}</li>
        <li v-for="title in titles" v-if='state'>{{title}}</li>
        <li>{{titles[0]}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        titles: ['飞鲨', '勇', '曾驾歼-8', '222222', '333', '444444'],
        num: 0,
        state: true,
        timer: null
      }
    },
    mounted () {
      this.initScroll()
    },
    methods: {
      initScroll () {
        this.timer = setInterval(() => {
          this.scroll()
        }, 3000)
      },
      scroll () {
        ++this.num
        if (this.num > this.titles.length) {
          this.num = 0
        }
        if (this.num === 0) {
          this.$refs.wrapper.style.transition = 'all 0s'
        } else {
          this.$refs.wrapper.style.transition = 'all 400ms ease-out'
        }
        this.$refs.wrapper.style.transform = 'translateY(' + (-88 * this.num) / 75 + 'rem)'
      }
    }
  }
</script>
