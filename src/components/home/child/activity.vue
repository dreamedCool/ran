<style lang="less" src="../less/life.less" scoped></style>
<template>
  <div>
    <div class="title">
      <h3>燃活动</h3>
      <div class="more">
        <span>更多</span>
        <i class="icon i-more"></i>
      </div>
    </div>
    <div class="life">
      <div class="life-detail-wrapper" 
      v-for='item in life' :style="{backgroundImage: 'url('+item.url+')'}">
        <span class="life-detail-name">{{item.name}}</span>
        <span class="life-detail-english">{{item.englishName}}</span>
        <div class="life-detail-store">
          <Collection></Collection>
        </div>
        <span class="pic-name">{{item.picName}}</span>
        <em class="pic-price">￥{{item.price}}</em>
        <div class="pic-date">
          <i class="icon i-date"></i>
          <time>{{item.date}}</time>
        </div>
        <div class="pic-address">
          <i class="icon i-location"></i>
          <span>{{item.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Collection from '../../common/collection/collection'
  export default {
    name: 'activity',
    data () {
      return {
        life: [
          {
            url: 'static/life.jpg',
            name: '燃画布',
            englishName: 'MYCANVAS',
            storeStatus: false,
            picName: '油画回眸',
            price: 299,
            date: '2017.02.02',
            address: '北京三里屯'
          },
          {
            url: 'static/life2.jpg',
            name: '燃活动',
            englishName: '燃show',
            storeStatus: true,
            picName: '当代艺术三蕴',
            price: 322,
            date: '2017.02.02',
            address: '北京三里屯'
          }
        ]
      }
    },
    components: {
      Collection
    }
  }
</script>
