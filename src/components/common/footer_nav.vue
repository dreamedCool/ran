<style lang="less" src="./less/footer.less" scoped></style>
<template>
  <div class="container" v-if="navInfo.hasNav">
    <div class="per-tab" v-for="item in navInfo.navs"
    @click="jump(item.route)">
      <i :class="['icon', item.icon, item.active ? 'active' : '']"></i>
      <span :class="item.active ? 'active' : ''">{{item.text}}</span>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'foot',
    data () {
      return {}
    },
    computed: mapState({navInfo: ({doc}) => doc.navInfo}),
    methods: {
      jump (route) {
        this.$router.push({
          name: route
        })
      }
    }
  }
</script>
