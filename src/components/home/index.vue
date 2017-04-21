<style src='./child/index.less' lang="less" scoped></style>
<template>
    <div class="container">
        22222
    </div>
</template>
<script>
  export default {
    name: 'test',
    data () {
      return {}
    },
    mounted () {
      let data = this.$m.mock({
        'string|3': '★★★'
      })
      console.log(data)
    },
    methods: {

    }
  }
</script>
