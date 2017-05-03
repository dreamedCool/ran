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
          <span class="font-color">专属用户名，会令你与众不同</span>
          <i class="icon i-more"></i>
        </div>
      </div>

      <div class="sex">
        <label>性别</label>
        <div class="sex-icon">
          <span class="user-sex"></span> <i class="icon i-girl"></i>
          <span class="user-sex"></span><i class="icon i-boy"></i>
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
  </div>
</template>
<script>
  export default {
    name: 'userData',
    data () {
      return {
        dataUrl: ''
      }
    },
    methods: {
      upload (e) {
        let self = this
        let fileType = ['image/jpeg', 'image/jpg', 'image/png']
        let file = e.target.files[0]
        console.log(file)
        if (file && file.type.indexOf(fileType)) {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onloadend = function () {
            self.dataUrl = this.result
          }
        }
      }
    }
  }
</script>
