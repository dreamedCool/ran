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
            <div class="focus-wrapper">
              <div class='people-info' v-for='item in artist'>
                <div class="p-portrait" :style="{backgroundImage: 'url('+item.url+')'}">
                </div>
                <span class="p-name">{{item.name}}</span>
                <p class="p-desc">{{item.desc}}</p>
                <div class="fans-activity">
                  <span>粉丝 {{item.fans}}</span> |
                  <span>活动 {{item.activity}}</span>
                </div>
                <div class="p-works">
                  <img v-for="i in item.works" :src="i"/>
                </div>
                <div class="focus-btn not-focus">+关注</div>
              </div>
            </div>
          </div>
        </div>
        <div class="special-topic">
          <div class="title">
            <h3>燃专题</h3>
            <div class="more">
              <span>更多</span>
              <i class="icon i-more"></i>
            </div>
          </div>
          <div class="special-detail">
            <div class="special-detail-pic" v-for="item in topic"
            :style="{backgroundImage: 'url('+item+')'}"></div>
          </div>
        </div>
        <div class="circle">
          <div class="title">
            <h3>圈子精选</h3>
            <div class="more">
              <span>更多</span>
              <i class="icon i-more"></i>
            </div>
          </div>
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
              <div>你画你拍</div>
            </div>
            <div class="circle-picture"
            :style="{backgroundImage: 'url('+item.pictureUrl+')'}"
            ></div>
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
        ],
        artist: [
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          },
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          },
          {
            url: 'static/head.jpg',
            name: '陈文夏',
            desc: '手绘画家、撰稿人、都市文艺实践者',
            fans: 321,
            activity: 18,
            works: [
              'static/1.jpg', 'static/2.jpg', 'static/3.jpg'
            ]
          }
        ],
        topic: [
          'static/topic.jpg', 'static/topic2.jpg'
        ],
        circle: [
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
