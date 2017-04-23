<style src='../less/banner.less' lang='less' scoped></style>
<template>
  <div class="wrapper">
    33
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data () {
      return {}
    },
    mounted () {
      this.getAjax()
    },
    methods: {
      getAjax () {
        let params = {
          Cookie: "rpc-key='ovvTH9HICcdb6K9I'",
          Authorization: 'ZjBkODBiNzAxY2MyNDE0MWEzMzVkNmE4YjBhYzU0NDI6MTg2MTI3OTIxMTA6MToxNzIyOjFjYmViM2Y0MjEyM2ZhOGVkOGRjMzc3OWYzOTJmYzU2'
        }
        this.$http.post('http://dev.artful.com.cn/api/artful/events/booking', params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
