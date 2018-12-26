<template>
  <div class="out-side-aboutus">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="about-up">
      <div class="bhs-logo"><img src="https://api.duishangbao.cn/upload/image/bhs-logo.png"></div>
      <div class="bhs-v fs-24 fc-99">版本号：V {{ vision }}</div>

      <ul class="abouts-ul fs-30 fc-26">
        <li>
          <span class="title">客服热线</span>
          <span class="info">400-1234-567</span>
          <div class="border-line-heng-e6e6e6"></div>
        </li>
        <li>
          <span class="title">客服邮箱</span>
          <span class="info">bhs@duishangbao.cn</span>
          <div class="border-line-heng-e6e6e6"></div>
        </li>
        <li>
          <span class="title">当前版本</span>
          <span class="info">V {{ vision }}</span>
          <div class="border-line-heng-e6e6e6"></div>
        </li>
      </ul>
    </div>

    <div class="about-foot fs-24 fc-66">
      <span>《兑商宝用户协议》</span>
      <span>CopyRight @ 兑商宝 2015 - 2018</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'aboutUsView',
  // 数据存放区
  data () {
    return {
      title: '关于我们',
      vision: null
    }
  },
  // 过滤器
  filters: {
    /**
     * 数值保留两位小数过滤器
     * @param data
     * @returns {string}
     */
    priceNum: function (data) {
      return data.toFixed(2)
    }
  },
  // 挂载完成
  mounted: function () {
    this.vision = this.$global.vision
  },
  // 方法
  methods: {
    /**
     * 跳转页面
     */
    goPage: function () {
      this.$router.push({
        path: '/',
        query: {}
      })
    },
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'aboutus.styl';
</style>
