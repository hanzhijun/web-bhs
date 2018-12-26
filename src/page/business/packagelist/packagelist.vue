<template>
  <div class="out-side-packagelist">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <ul class="package-ul">
      <li>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <div class="name fs-32 fc-1a">就是合适海鲜面(团购1~2人)</div>
          <div class="price-old">原价:￥1399</div>
          <div class="price-bar">
            <span class="fs-24 fc-66">已售200份</span>
            <span class="fs-28 fc-e6">￥</span>
            <span class="fs-38 fc-e6">888.88</span>
          </div>
        </div>
        <div class="border-line-heng-e6e6e6"></div>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'packageOrderDetail',
  // 数据存放区
  data () {
    return {
      title: '更多'
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
  @import 'packagelist.styl';
</style>
