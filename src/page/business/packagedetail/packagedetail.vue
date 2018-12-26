<template>

  <div class="out-side-packagedetail">

    <div class="head-bar-fixed">
      <a class="head-btn-return opacity" href="javascript:void(0)" @click="goBack" ontouchstart=""></a>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
      <a class="share-btn fs-28 fc-ff opacity" href="javascript:void(0)">分享</a>
    </div>

    <div class="package-title fs-36 fc-1a">北京遇上烤鸭、北京遇上烤鸭（府城国际）北京遇上烤鸭（府城国际）</div>

    <div class="open-time">
      <div class="label-bar">
        <span class="border-line-shu-e6e6e6"></span>
        <span class="txt fs-24 fc-99">随时退</span>
        <span class="border-line-shu-e6e6e6"></span>
        <span class="txt fs-24 fc-99">免预约</span>
        <span class="border-line-shu-e6e6e6"></span>
        <span class="txt fs-24 fc-99">过期自动退</span>
      </div>
      <span class="sale fs-24 fc-99">已售200份</span>
    </div>

    <div class="banner"><img src="https://api.duishangbao.net/upload/operation/content/img/1/37bf33479250981c1f13135a54aaeca0.jpeg"></div>

    <div class="shop-mess">
      <div class="title fs-34 fc-1a">商家信息</div>
      <div class="border-line-heng-xuxian"></div>
      <div class="main">
        <div class="txt">
          <span class="name fs-32 fc-1a">北京遇上烤鸭（复城国际）</span>
          <span class="addr fs-24 fc-99">500m | 武侯区益州大道中段722号复城国际1层武侯区益州大道中段722号复城国际1层</span>
        </div>
        <div class="tel opacity" ontouchstart=""></div>
      </div>
    </div>

    <div class="package-info">
      <div class="title fs-34 fc-1a">套餐详情</div>
      <div class="border-line-heng-xuxian"></div>
      <div class="detail-main">战斧牛排其骨长30厘米，肉身更重达1公斤。牛排边缘肉质入口香脆，中间口感丰厚饱满，令人回味无穷；斧头是牛肋眼，厚达5公分，重达50盎司，一头牛只最多只能切出9-10份战斧牛排。</div>
    </div>

    <div class="foot-bar">
      <div class="border-line-heng-e6e6e6"></div>
      <span class="go-pay opacity fs-32 fc-ff" ontouchstart="">立即购买</span>
      <div class="price">
        <span class="rmb fs-28 fc-e6">￥</span>
        <span class="num fs-38 fc-e6">88.88</span>
        <div class="return fs-22 fc-fc">送88金贝<span class="icon"></span></div>
      </div>
      <div class="gold fs-24 fc-b2">金贝帮你抵扣了20.00元</div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'packageDetail',
  // 数据存放区
  data () {
    return {
      title: '详情'
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
  @import 'packagedetail.styl';
</style>
