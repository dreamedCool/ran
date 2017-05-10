<style lang="less" src="../less/detail.less" scoped></style>
<template>
  <newest-detail v-if="sourceType===1" class="detail" @hide="hide" v-show="showFlag" transition="move" ref="detail"></newest-detail>
  <history-detail v-else class="detail" @hide="hide" v-show="showFlag" transition="move" ref="detail"></history-detail>
</template>
<script>
  import NewestDetail from './newest_detail'
  import HistoryDetail from './history_detail'
  export default {
    props: {
      activity: {
        type: Object
      },
      sourceType: {
        // 1:最新   2:历史
        type: Number
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    components: {
      NewestDetail, HistoryDetail
    },
    methods: {
      show () {
        this.showFlag = true
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

