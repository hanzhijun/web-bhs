<template>

  <div class="out-side-orderdetail">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="confirm-header-null"></div>

    <div class="order-address">
      <div class="order-addr-mess">
        <span class="name fs-bold">收货人：{{ addrUserName }}</span>
        <span class="tel fs-bold">{{ addrUserTel }}</span>
        <p class="addr-main">{{ addrUserRess }}</p>
      </div>
      <div class="line"></div>
    </div>

    <div class="order-wuliu">
      <div class="icon"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
      <div class="name-bar">
        <span class="name text-overflow fs-32 fc-40">顺丰快递</span>
        <span class="tel text-overflow fs-24 fc-b2">8332898538</span>
      </div>
      <div class="border-line-shu-e6e6e6"></div>
      <div class="wuliu-state">
        <span class="txt fs-28 fc-40 text-overflow">最新状态  [杭州市]杭州中转中心</span>
        <span class="time fs-20 fc-99 text-overflow">更新时间  2018-10-29  10:18:13</span>
      </div>
      <i class="icon-star"></i>
    </div>

    <div class="order-goods-list">

      <div class="pub-name fs-28 fc-1a">贝划算</div>

      <div class="order-goods-bar">
        <div class="order-goods-img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <p class="order-goods-name fs-26 fc-0d">秋水伊人衬衫2018冬装新款女装时尚系带简约纯色明线上衣女 </p>
        <p class="order-goods-sku fs-22 fc-b3">卡其色;170/92A/XL</p>
        <div class="order-goods-price">
          <span class="price-num fs-38 fc-e6">￥168.00</span>
          <span class="return-num fs-24">送88金贝<i></i></span>
        </div>
        <span class="order-goods-num fs-22 fc-59">x1</span>
        <span class="order-goods-tui fs-28 fc-99 opacity">退款</span>
      </div>

      <div class="order-goods-message">
        <span class="title fs-24 fc-1a">买家留言</span>
        <input class="fs-22 fc-1a" type="text" placeholder="填写内容备注需求等，45字内" readonly>
      </div>

      <div class="order-goods-subtotal">
        <span class="fs-26 fc-1a fs-bold">共1件商品&nbsp;&nbsp;&nbsp;&nbsp;小计: </span>
        <span class="fs-28 fc-1a fs-bold">￥168.00</span>
      </div>
    </div>

    <ul class="order-jilu">
      <li><span class="txt">赠送金贝：获得168金贝</span></li>
      <li><span class="txt">创建时间：2018-10-26  17:30:59</span></li>
      <li><span class="txt">付款时间：2018-10-26  17:30:59</span></li>
      <li><span class="txt">发货时间：2018-10-26  17:30:59</span></li>
      <li><span class="txt">订单编号：201820822712893711</span><a class="copy fc-1a fs-24 opacity" href="javascript:void(0)">复制</a></li>
    </ul>

    <ul class="order-goods-p-count">
      <li class="fs-24">
        <span class="title">订单金额</span>
        <span class="price">￥178.00</span>
      </li>
      <li class="fs-24" v-if="useGold === 1">
        <span class="title">使用金贝</span>
        <span class="price">-￥168.00</span>
      </li>
      <li class="fs-24">
        <span class="title">运费 (快递)</span>
        <span class="price">￥10.00</span>
      </li>
    </ul>

    <div class="footer-btn">
      <a class="red opacity" href="javascript:void(0)">确认收货</a>
      <a class="opacity" href="javascript:void(0)">查看物流</a>
    </div>

  </div>

</template>

<script>
export default {
  name: 'orderDetail',
  // 数据存放区
  data () {
    return {
      title: '订单详情',
      id: -1,
      freightPrice: {}, // 邮费
      goodsList: [],
      goodsPriceTotalPrice: {}, // 商品总价
      payDetailTotalPrice: {}, // 订单总价
      payPriceTotalPrice: {},
      userOrderAddressResultVos: [], // 收货地址列表
      addrId: null, // 选中的收货地址id
      addrUserName: '菩提', // 收货人
      addrUserTel: '13681153793', // 收货人电话
      addrUserRess: '四川省成都市高新区天府大道仁和小区234号1栋10单元', // 收货详情地址
      ginfo: [],
      useGold: 1, // 是否使用金贝 deduction: this.useGold === 1 ? true : false
      useGoldNum: 0, // 使用金贝数量
      payNum: 0 // 实付金额
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {
  },
  // 方法
  methods: {
    // 获取数据
    getData: function () {
      let _this = this
      this.$global.myAjax(this, 'post', 'bhs-client-online/goodsInfo/list', '{}', function (res) {
        if (res.data.code * 1 === 1) {
        }
        _this.$global.changeLoading(_this, 0)
      }, function (reg) {
        console.info(reg)
        _this.$global.changeLoading(_this, 0)
      })
    },
    /**
     * 跳转商品详情页
     */
    goPage: function (id) {
      this.$router.push({
        path: '/orderlist',
        query: {
          id
        }
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
  @import 'orderdetail.styl';
</style>
