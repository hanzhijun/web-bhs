<template>
  <div class="out-side-aftersaledetail">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="after-sale-fail">
      <span class="icon"></span>
      <div class="mess">
        <div class="after-result fs-32 fc-1a">很抱歉！您的申请失败！</div>
        <div class="after-info fs-24 fc-99">商家拒绝了你的换货申请</div>
      </div>
    </div>

    <div class="after-sale-state">
      <div class="circle">
        <span class="icon fs-32 fc-66 this-over"></span>
        <span class="border-line-heng-e6e6e6 this-over"></span>
        <span class="icon fs-32 fc-66 this-over"></span>
        <span class="border-line-heng-e6e6e6"></span>
        <span class="icon fs-32 fc-66"></span>
      </div>
      <div class="txt-bar fs-32">
        <span class="txt-detail this-over">申请退款</span>
        <span class="txt-detail this-over">正在处理</span>
        <span class="txt-detail">退款完成</span>
      </div>
    </div>

    <div class="after-sale-note">
      <div class="title fs-28 fc-1a">您已成功发起了换货申请，请耐心等待商家处理</div>
      <ul class="note-detail">
        <li class="fs-24 fc-99">商家同意了您的换货申请，卖家将及时联系您</li>
        <li class="fs-24 fc-99">如果商家拒绝您的换货申请，您可以修改换货申请后再次发起，商家会重新处理</li>
      </ul>
    </div>

    <div class="after-sale-goods">
      <div class="title fs-28 fc-1a">退款信息</div>
      <div class="border-line-heng-e6e6e6"></div>
      <div class="goods-bar">
        <div class="img">
          <img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg">
        </div>
        <div class="main">
          <span class="name fs-28 fc-1a">秋水伊人衬衫2018冬装新款女装时尚系带简约纯色明线上衣女</span>
          <div class="sku">
            <span class="l fs-22 fc-b2">卡其色;170/92A/XL</span>
            <span class="r fs-22 fc-59">x1</span>
          </div>
          <span class="price">￥9999.99</span>
        </div>
      </div>
    </div>

    <div class="after-sale-mess">
      <ul>
        <li class="has-txt"><span class="title">退款原因:</span><span class="info">材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符材质与商品描述不符</span></li>
        <li class="border-line-heng-e6e6e6"></li>
        <li class="has-txt"><span class="title">退款金额:</span><span class="info">￥168.00、168金贝</span></li>
        <li class="border-line-heng-e6e6e6"></li>
        <li class="has-txt"><span class="title">申请时间:</span><span class="info">2018-08-22 17:24:12</span></li>
        <li class="border-line-heng-e6e6e6"></li>
        <li class="has-txt"><span class="title">退款编号:</span><span class="info">11928011516093769</span><span class="copy">复制</span> </li>
      </ul>
    </div>

    <div class="after-edit-btn fs-32 fc-ff opacity">修改申请</div>

  </div>
</template>

<script>
export default {
  name: 'afterSaleDetail',
  // 数据存放区
  data () {
    return {
      title: '售后详情',
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
  @import 'aftersaledetail.styl';
</style>
