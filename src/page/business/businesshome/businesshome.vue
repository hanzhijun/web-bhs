<template>

  <div class="out-side-businesshome">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
      <span class="share-btn-2 opacity" title="分享"></span>
    </div>

    <div class="busine-title fs-36 fc-1a">北京遇上烤鸭、北京遇上烤鸭（府城国际）北京遇上烤鸭（府城国际）</div>

    <div class="open-time fs-24 fc-99">周一至周日 09:00-23:00 99元/人</div>

    <div class="banner"><img src="https://api.duishangbao.net/upload/operation/content/img/1/37bf33479250981c1f13135a54aaeca0.jpeg"></div>

    <div class="addr">
      <div class="l-side">
        <span class="addr-name fs-28 fc-1a text-overflow">武侯区益州大道中段722号复城国际1层道中段722号复城国际1层</span>
        <span class="addr-num fx-28 fc-99">距离您500m</span>
      </div>
      <div class="border-line-shu-e6e6e6"></div>
      <span class="tel opacity" ontouchstart=""></span>
    </div>

    <div class="voucher-bar">
      <div class="title fs-32 fc-1a">代金券</div>

      <ul class="voucher-ul">
        <li>
          <div class="l">
            <div class="price fs-32 fc-e6 text-overflow">99.99代金券99.99代金券</div>
            <div class="use-time fs-24 fc-99">周一至周五使用</div>
          </div>
          <div class="c"></div>
          <div class="r">
            <div class="price">
              <span class="fs-36 fc-e6">￥</span><span class="fs-48 fc-e6">88.88</span><span class="return fs-22 fc-fc">送68金贝</span>
            </div>
            <div class="gold fs-24 fc-99">金贝帮你抵扣了20.00元</div>
            <span class="buy-btn fs-28 fc-ff opacity" ontouchstart="">立即抢购</span>
            <span class="icon-gold" title="金贝抵扣"></span>
          </div>
        </li>
      </ul>

      <div class="border-line-heng-e6e6e6"></div>
      <div class="more fs-24 fc-40 opacity" ontouchstart="">更多1张优惠券 ></div>

    </div>

    <div class="package-bar">
      <div class="header"><span class="title fs-32 fc-1a">热销套餐</span><span class="more fs-24 fc-66 opacity" ontouchstart="">更多</span></div>

      <div class="package-outside">
        <div class="auto-k">
          <ul>
            <li class="opacity" ontouchstart="">
              <div class="img"><img src="https://api.duishangbao.net/upload/operation/content/img/1/37bf33479250981c1f13135a54aaeca0.jpeg"></div>
              <div class="main">
                <span class="name fs-32 fc-1a text-overflow">就是合适...(团购1~2人)</span>
                <div class="price text-overflow"><span class="fs-28 fc-e6">￥</span><span class="fs-38 fc-e6">800.00</span></div>
                <span class="sale fs-24 fc-66">已售200份</span>
                <span class="price-old fs-24 fc-66 fs-line">原价:￥1399</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'businessHome',
  // 数据存放区
  data () {
    return {
      title: '商家详情'
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
  @import 'businesshome.styl';
</style>
