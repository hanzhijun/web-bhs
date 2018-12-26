<template>
  <div class="out-side-businesslist">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="classify-main">
      <div class="auto-k">
        <ul>
          <li class="this-over"><span class="fs-32 fc-66">美食</span></li>
          <li><span class="fs-32 fc-66">娱乐</span></li>
          <li><span class="fs-32 fc-66">丽人</span></li>
          <li><span class="fs-32 fc-66">休闲</span></li>
          <li><span class="fs-32 fc-66">健身</span></li>
          <li><span class="fs-32 fc-66">运动</span></li>
          <li><span class="fs-32 fc-66">电脑</span></li>
          <li><span class="fs-32 fc-66">手机</span></li>
          <li><span class="fs-32 fc-66">汽车</span></li>
        </ul>
      </div>
    </div>

    <div class="classify-side">
      <ul>
        <li class="this-over"><span class="fs-28 fc-1a text-overflow">特色火锅</span><span class="border-line-heng-cccccc"></span></li>
        <li><span class="fs-28 fc-1a text-overflow">传统火锅</span><span class="border-line-heng-cccccc"></span></li>
        <li><span class="fs-28 fc-1a text-overflow">美味佳肴</span><span class="border-line-heng-cccccc"></span></li>
      </ul>
    </div>

    <div class="business-list">
      <ul>
        <li>
          <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
          <div class="main">
            <span class="name fs-28 fc-1a text-overflow">李大嘴肥肠粉(高新店)</span>
            <span class="tuan fs-24 fc-66 text-overflow">战斧牛排hah.. 团购1~2人</span>
            <span class="addr fs-20 fc-66 text-overflow">高新区 吉泰路</span>
            <span class="price fs-20 fc-66 text-overflow">人均消费:￥900</span>
            <span class="away fs-24 fc-66">1.1km</span>
          </div>
          <div class="border-line-heng-e6e6e6"></div>
        </li>
        <li>
          <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
          <div class="main">
            <span class="name fs-28 fc-1a text-overflow">李大嘴肥肠粉(高新店)</span>
            <span class="tuan fs-24 fc-66 text-overflow">战斧牛排hah.. 团购1~2人</span>
            <span class="addr fs-20 fc-66 text-overflow">高新区 吉泰路</span>
            <span class="price fs-20 fc-66 text-overflow">人均消费:￥900</span>
            <span class="away fs-24 fc-66">1.1km</span>
          </div>
          <div class="border-line-heng-e6e6e6"></div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'businessList',
  // 数据存放区
  data () {
    return {
      title: '分类'
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
  @import 'businesslist.styl';
</style>
