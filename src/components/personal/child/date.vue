<style lang="less" src='../less/date.less' scoped></style>
<template>
  <div v-show='birth'>
    <div class="mask">
    </div>
    <div class="city-wrapper">
      <div class="option">
        <div class="cancel" @click='cancel'>取消</div>
        <div class="confirm">确定</div>
      </div>
      <div class="date-wrpper">
        <div class="date" >
          <div class="year"><time v-for='item in dateList.year'>{{item}}年</time></div>
          <div class="month"><time v-for='item in dateList.month'>{{item}}月</time></div>
          <div class="day"><time v-for='item in dateList.day'>{{item}}日</time></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'city',
    props: ['initBirth'],
    data () {
      return {
        year: [],
        month: [],
        day: []
      }
    },
    computed: {
      birth: function () {
        return this.initBirth
      },
      dateList: function () {
        let date = {}
        let d = new Date().getFullYear()
        for (let i = 2000; i <= d; i++) {
          this.year.push(i)
        }
        for (let i = 1; i <= 12; i++) {
          this.month.push(i)
        }
        for (let i = 1; i <= 31; i++) {
          this.day.push(i)
        }
        date.year = this.year
        date.month = this.month
        date.day = this.day
        return date
      }
    },
    mounted () {
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      }

    }
  }
</script>
