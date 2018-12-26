<template>
  <div class="out-side-packageorderconfirm">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="package-info">
      <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
      <div class="main">
        <div class="name fs-34 fc-1a text-overflow-2">战斧牛排 团购2~3人</div>
        <div class="price"><span class="fs-38 fc-1a">￥188.00</span><span class="return"><span class="txt fs-24 fc-e6">送68金贝</span></span></div>
        <ul class="label-ul">
          <li class="fs-28 fc-b2">随时退</li>
          <li class="fs-28 fc-b2">免预约</li>
          <li class="fs-28 fc-b2">过期自动退</li>
        </ul>
      </div>
    </div>

    <div class="package-count-bar">
      <div class="num">
        <span class="title fs-32 fc-1a">套餐数量</span>
        <span class="jia"></span>
        <span class="count fs-28 fc-66">2</span>
        <span class="jian"></span>
      </div>

      <div class="use-gold">
        <div class="l">
          <span class="title fs-32 fc-1a">使用金贝</span>
          <span class="di-mess fs-24 fc-99">共有40金贝,可以抵扣40元</span>
        </div>
        <div class="btn-power"></div>
      </div>

      <div class="border-line-heng-e6e6e6"></div>

      <div class="result">
        <span class="fr fs-44 fc-1a">338.88</span>
        <span class="fr fs-28 fc-1a">小计￥</span>
        <span class="fr fs-24 fc-e6">￥40.88</span>
        <span class="fr fs-24 fc-1a">小计￥</span>
        <span class="title fs-32 fc-1a">实付金额</span>
      </div>
    </div>

    <div class="pay-btn fs-34 fc-ff opacity" ontouchstart="">确认支付 ￥338.88</div>
  </div>

</template>

<script>
export default {
  name: 'packageOrderConfirm',
  // 数据存放区
  data () {
    return {
      title: '确认订单'
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {},
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

<style>
  @import 'packageorderconfirm.styl';
</style>
