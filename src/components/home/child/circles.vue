<style lang="less" src="../less/circle.less" scoped></style>
<template>
  <div>
    <div class="title">
      <h3>圈子精选</h3>
      <div class="more">
        <span>更多</span>
        <i class="icon i-more"></i>
      </div>
    </div>
    <div class="circle">
      <div class="circle-detail" v-for="item in circle">
        <div class="circle-detail-info">
          <div class="p-portrait" 
          :style="{backgroundImage: 'url('+item.headUrl+')'}">
          </div>
          <div class="p-info">
            <span>{{item.name}}</span>
            <div class="circle-p-time">
              <i class="icon i-time"></i>
              <span>{{item.time}}</span>
            </div>
          </div>
          <div class="circle-info-btn">你画你拍</div>
        </div>
        <div class="circle-picture"
          :style="{backgroundImage: 'url('+item.pictureUrl+')'}">
        </div>
        <div class="circle-info-label">
          <span v-for="i in item.label">#{{i}}</span>
        </div>
        <div class="circle-info-discuss">
          {{item.discuss}}
        </div>
        <my-option></my-option>
      </div>
    </div>
  </div>
</template>
<script>
  import myOption from '../option.vue'
  export default {
    name: 'activity',
    data () {
      return {
        circle: [
          {
            headUrl: 'static/head.jpg',
            name: 'Michale W',
            time: '三小时前',
            pictureUrl: 'static/circle.jpg',
            label: ['丙烯画', '燃布画'],
            discuss: '昨夜西风凋碧树的感觉。。。'
          },
          {
            headUrl: 'static/head.jpg',
            name: 'Michale W',
            time: '三小时前',
            pictureUrl: 'static/circle.jpg',
            label: ['丙烯画', '燃布画'],
            discuss: '昨夜西风凋碧树的感觉。。。'
          }
        ]
      }
    },
    components: {
      myOption
    }
  }
</script>
