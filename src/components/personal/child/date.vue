<style lang="less" src='../less/date.less' scoped></style>
<template>
  <div v-show='birth'>
    <div class="mask">
    </div>
    <div class="picker-panel">
        <div class="box-day">
          <div class="check-line"></div>
          <div class="day-checked">
              <div class="day-list">
                  <div class="list-div"  v-for="day in renderListDay">
                    {{day}}
                  </div>
              </div>
          </div>
          <div class="day-wheel">
              <div class="wheel-div" v-for="day in renderListDay" 
              style="transform: rotate3d(1, 0, 0, 80deg); translate3d(0px, 0px, 2.5rem);">
              {{day}}
              </div>
          </div>
        </div>
      </div>
    <!--<div class="city-wrapper">
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
    </div>-->
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
        day: [],
        renderListDay: [23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
