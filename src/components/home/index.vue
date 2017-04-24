<style src='./less/index.less' lang="less" scoped></style>
<template>
    <div class="container">
        <banner></banner>
        <template>
          <div class="tab">
            <div class="per-tab">
              <i class="icon i-lecture"></i>
              <span>燃专题</span>
            </div>
            <div class="per-tab">
              <i class="icon i-circle"></i>
              <span>燃圈子</span>
            </div>
            <div class="per-tab">
              <i class="icon i-artist"></i>
              <span>艺术家</span>
            </div>
          </div>
        </template>
        <div class="life">
          <div class="title">
            <h3>燃活动</h3>
            <div class="more">
              <span>更多</span>
              <i class="icon i-more"></i>
            </div>
          </div>
          <div class="life-detail-wrapper" 
          v-for='item in life' :style="{backgroundImage: 'url('+item.url+')'}">
            <span class="life-detail-name">{{item.name}}</span>
            <span class="life-detail-english">{{item.englishName}}</span>
            <i class="icon i-store life-detail-store"></i>
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
        <div class="artist">
          <div class="title">
            <h3>艺术家</h3>
            <div class="more">
              <span>更多</span>
              <i class="icon i-more"></i>
            </div>
          </div>
          <div class="focus">
            <div class='people-info'>
              <div class="portrait"></div>
              <span>陈文夏</span>
            </div>
            <div class='people-info'>
              <div class="portrait"></div>
              <span>陈文夏</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  import banner from './child/banner'
  export default {
    name: 'test',
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
      banner
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
