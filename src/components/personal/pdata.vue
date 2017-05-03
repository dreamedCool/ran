<style lang="less" src="./less/pdata.less" scoped></style>
<template>
  <div class="wrapper">
    <div class="content">
      <div class="upload-wrapper">
        <div class="upload">
          <div class='user-photo'>
            <img :src='dataUrl'/>
            <label for="upload-file">
              <input type="file" id="upload-file" v-on:change="upload"/>
            </label>
          </div>
          <div class='take-photo'>
            <i class="icon i-photo"></i>
          </div>
        </div>
      </div>

      <div class="name">
        <label>昵称</label>
        <div>
          <span class="font-color">{{name}}</span>
            <i class="icon i-more"></i>
        </div>
      </div>

      <div class="sex">
        <label>性别</label>
        <div class="sex-icon">
          <div class="user-sex" @click='setSex(1)'>
            <div :class="on===1 ? 'active' : ''"></div>
          </div>
          <i class="icon i-girl"></i>
          <div class="user-sex" @click='setSex(0)'>
            <div :class="on===0 ? 'active' : ''"></div>
          </div>
          <i class="icon i-boy"></i>
        </div>
      </div>

      <div class="address">
        <label>地址</label>
        <div>
          <span class="font-color">选择您所在城市</span>
          <i class="icon i-more"></i>
        </div>
      </div>

      <div class="birth">
        <label>生日</label>
        <div>
          <span class="font-color">1980-01-01</span>
          <i class="icon i-more"></i>
        </div>
      </div>

      <div class="sign">
        <label>个性签名</label>
        <div>
          <span class="font-color">编辑个性签名</span>
          <i class="icon i-more"></i>
        </div>
      </div>
      <div class="btn">
        <div class="submit">保存</div>
      </div>
    </div>
    <City></City>
  </div>
</template>
<script>
  import City from './child/city'
  export default {
    name: 'userData',
    data () {
      return {
        dataUrl: '',
        name: '专属用户名，会令你与众不同',
        on: 1, // 是否选中
        sex: 1, // 女
        address: '',
        birth: '',
        sign: ''
      }
    },
    components: {
      City
    },
    methods: {
      upload (e) { // 上传图片
        let self = this
        let fileType = ['image/jpeg', 'image/jpg', 'image/png']
        let file = e.target.files[0]
        if (file && file.type.indexOf(fileType)) {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onloadend = function () {
            self.dataUrl = this.result
          }
        }
      },
      setSex (sex) {
        this.on = sex
      }
    }
  }
</script>
