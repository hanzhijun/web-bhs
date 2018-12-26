<template>
  <div class="out-side-aboutus">

    <h1 class=title style="display: none">{{ title }}</h1>
    <div class="icon_about">
      <img src="https://api.duishangbao.cn/upload/image/about_log.png">
    </div>
    <span class="title">贝划算</span>

    <div class="ourInfo fs-24">
      <div>
        <span>客服热线:</span>
        <span class="hotline">400-028-1213</span>
      </div>
    </div>

    <div class="permit fs-24">
      <span>《兑商宝用户协议》</span>
      <span>CopyRight@兑商宝2015-2017</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'aboutUsView',
  // 数据存放区
  data () {
    return {
      title: '关于我们'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'aboutus.styl';
</style>
