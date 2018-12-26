<template>
  <div class="out-side-aftersalelist">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="goods-bar">
      <div class="goods-img">
        <img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg">
      </div>
      <div class="goods-main">
        <span class="name fs-28 fc-0d text-overflow-2">秋水伊人衬衫2018冬装新款女装时尚系带简约纯色明线上衣女</span>
        <span class="sku fs-22 fc-b2 text-overflow">卡其色;170/92A/XL</span>
        <div class="price-bar">
          <span class="txt fs-28 fc-0d">实付金额</span>
          <span class="price fs-28 fc-e6">￥168.00</span>
        </div>
      </div>
    </div>

    <ul class="after-ul">
      <li class="after-li opacity" ontouchstart="">
        <span class="txt">我要退款</span>
        <i class="icon"></i>
      </li>
      <li class="after-li opacity" ontouchstart="">
        <span class="txt">已收到货，我要退款</span>
        <i class="icon"></i>
      </li>
      <li class="after-li opacity" ontouchstart="">
        <span class="txt">换货</span>
        <i class="icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'afterSaleList',
  // 数据存放区
  data () {
    return {
      title: '售后服务',
      addressList: []
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

<style>
  @import 'aftersalelist.styl';
</style>
