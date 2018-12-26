<template>

  <div class="out-side-orderlist">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="order-nav"><!--订单状态: 0待付款，2待发货，3待收货，4已完成，21所有订单，22售后-->
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 21}" @click="changeNav(21)"><span>全部</span></a>
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 0}" @click="changeNav(0)"><span>待付款</span></a>
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 2}" @click="changeNav(2)"><span>待发货</span></a>
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 3}" @click="changeNav(3)"><span>待收货</span></a>
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 4}" @click="changeNav(4)"><span>已完成</span></a>
      <a href="javascript:void(0)" class="opacity" ontouchstart="" :class="{'this-over': status * 1 === 22}" @click="changeNav(22)"><span>售后</span></a>
    </div>

    <div class="order-null" v-if="count === 0" style="text-align: center; padding-top: 5rem">暂无订单，这里需要设计样式</div>

    <ul class="order-list">
      <li class="order-group"  v-for="item in orderList" v-bind:key="item.id">
        <header>
          <span class="pub-name fs-28 fc-1a">贝划算</span>
          <!--订单状态: 0待付款(默认，支付失败)，1已关闭，2待发货(已支付)，3已发货，4已完成，5申请退款，6拒绝退款，7等待退款，8退款完成-->
          <span class="order-state fs-28 fc-e6" v-if="item.status * 1 === 0">待付款</span>
          <span class="order-state fs-28 fc-99" v-if="item.status * 1 === 1">交易关闭</span>
          <span class="order-state fs-28 fc-e6" v-if="item.status * 1 === 2">待发货</span>
          <span class="order-state fs-28 fc-e6" v-if="item.status * 1 === 3">待收货</span>
          <span class="order-state order-ok" v-if="item.status * 1 === 4" title="已完成"></span>
          <span class="order-state fs-28 fc-e6" v-if="item.status * 1 === 5">申请退款</span>
          <span class="order-state fs-28 fc-99" v-if="item.status * 1 === 6">拒绝退款</span>
          <span class="order-state fs-28 fc-99" v-if="item.status * 1 === 7">等待退款</span>
          <span class="order-state fs-28 fc-99" v-if="item.status * 1 === 8">退款完成</span>
        </header>
        <article>
          <a class="order-img opacity" href="javascript:void(0)" ontouchstart="" @click="goToDetail(item.goodsId)"><img :src="item.goodsImage"></a>
          <div class="order-mess1">
            <h3><a class="opacity fs-28 fc-1a" href="javascript:void(0)" ontouchstart="" @click="goToDetail(item.goodsId)">{{ item.goodsName }}</a></h3>
            <p class="fs-22 fc-b2">{{ item.goodsSpec }}</p>
          </div>
          <div class="order-mess2"><span class="fs-24 fc-59">￥{{ item.payPrice.cash / 100 | priceNum(item.payPrice.cash / 100)}}</span><br><span class="fs-24 fc-59">x{{ item.quantity }}</span></div>
          <div class="order-mess3"><span class="fs-24">共{{ item.quantity }}件商品，总金额</span><span class="fs-32">￥{{ item.minPayPrice.cash / 100 | priceNum(item.minPayPrice.cash / 100)}}</span></div>
          <div class="order-mess4"><span class="fs-24 fc-e6">退款中</span></div>
        </article>
        <footer>
          <a class="btn-red opacity" href="javascript:void(0)" ontouchstart=""  v-if="item.status === 0">立即付款</a>
          <a class="opacity" href="javascript:void(0)" ontouchstart=""  v-if="item.status === 0">取消付款</a>
          <a class="opacity" href="javascript:void(0)" ontouchstart=""  v-if="item.status === 4">查看订单</a>
          <a class="btn-red opacity" href="javascript:void(0)" ontouchstart=""  v-if="item.status === 3">确认收货</a>
          <a class="opacity" href="javascript:void(0)" ontouchstart=""  v-if="item.status === 3">查看物流</a>
          <a class="opacity" href="javascript:void(0)" ontouchstart="">查看详情</a>
        </footer>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'orderList',
  // 数据存放区
  data () {
    return {
      title: '线上订单',
      status: 21, // 订单状态: 0待付款，2待发货，3待收货，4已完成，21所有订单，22售后
      orderList: [],
      pageNumber: 1, // 当前页
      pageSize: 15, // 每页条数
      pages: 1, // 页总数
      count: -1 // 总条数
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
    let status = this.$global.getUrlString('status')
    if (status) {
      this.status = status
    }
    if (this.orderList.length === 0) {
      this.getOrderList()
    }
  },
  // 方法
  methods: {
    // 获取数据
    getOrderList: function () {
      let obj = {
        status: this.status
      }
      this.$global.changeLoading(this, 1)
      let _this = this
      this.$global.myAjax2(this, 'post', 'bhs-client-online/order/list?pageNumber=' + this.pageNumber, obj, function (res) {
        if (res.data.code * 1 === 1) {
          _this.count = res.data.data.count * 1
          _this.pageNumber = res.data.data.pageNumber * 1
          _this.pageSize = res.data.data.pageSize * 1
          _this.pages = res.data.data.pages * 1
          let orderList = _this.orderList
          for (let i = 0; i < res.data.data.data.length; i++) {
            orderList.push(res.data.data.data[i])
          }
          _this.orderList = orderList
        }
        _this.$global.changeLoading(_this, 0)
      }, function (reg) {
        console.info(reg)
        _this.$global.changeLoading(_this, 0)
      })
    },
    /**
     * 标签切换
     * @param status
     */
    changeNav (status) {
      if (status === this.status) return
      this.status = status
      this.pageNumber = 1
      this.pageSize = 15
      this.pages = 1
      this.count = 0
      this.orderList = []
      this.getOrderList()
    },
    /**
     * 跳转商品详情页
     */
    goToDetail (id) {
      this.$router.push({
        path: '/goodsdetail',
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
    },
    /**
     * 加载下一页
     */
    loadNextPage () {
      if (this.pageNumber >= this.pages) return
      this.pageNumber += 1
      this.getOrderList()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'orderlist.styl';
</style>
