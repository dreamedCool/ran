<style lang="less" scoped>
  #canvas {
    border: solid 3/75rem pink;
  }
</style>
<template>
  <canvas id="canvas"></canvas>
</template>
<script>
  export default {
    name: 'canvas',
    data () {
      return {}
    },
    mounted () {
      let c = document.querySelector('canvas')
      c.style.width = 10 + 'rem'
      c.style.height = 500 / 75 + 'rem'
      let ctx = c.getContext('2d')
      ctx.moveTo(65, 50)
      ctx.lineTo(105, 47)
      ctx.lineTo(125, 25)
      ctx.lineTo(145, 47)
      ctx.lineTo(185, 50)
      ctx.lineTo(150, 70)
      ctx.lineTo(170, 95)
      ctx.lineTo(125, 85)
      ctx.lineTo(85, 95)
      ctx.lineTo(105, 70)
      ctx.lineTo(65, 50)
      ctx.fillStyle = '#f6f152'
      ctx.strokeStyle = '#f6f152'
      ctx.fill()
      ctx.stroke()
    }
  }
</script>
