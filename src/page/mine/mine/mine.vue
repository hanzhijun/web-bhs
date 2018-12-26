<template>
  <div class="out-side-mine">
    <h1 class="title" style="display: none">{{ title }}</h1>

    <div class="mine-head-bar">
      <div class="mine-header-img"><img src="https://img-qn.hdb.com/upload/_oss/usershopimg/201808/02/31533179105153_shop3.jpg@!shop-head"></div>
      <div class="mine-header-name">
        <a href="javascript:void(0)" v-if="this.$store.state.isLogin === 0" ontouchstart="">请登录</a>
        <span v-if="this.$store.state.isLogin === 1">用户名字</span>
      </div>
      <div class="mine-head-k">
        <p class="head-k-mess" v-if="this.$store.state.isLogin === 0"><span class="gold"><span class="red">登录</span>赚金贝 可当现金用~</span></p>
        <p class="head-k-mess2" v-if="this.$store.state.isLogin === 1"><span class="gold">{{ this.$store.state.userCapital.gold / 100 }}</span><span class="gray">金贝</span></p>
      </div>
    </div>

    <div class="mine-order-up">
      <div class="order-top-line">
        <span class="title">线上订单</span>
        <a class="go-look opacity" href="orderlist?status=21" ontouchstart="">查看全部订单</a>
      </div>
      <!--订单状态: 0待付款，2待发货，3待收货，4已完成，21所有订单，22售后-->
      <div class="line-order-list">
        <a class="opacity" href="orderlist?status=1" ontouchstart=""><span class="img icon01"><i class="num">99</i></span><span class="txt">待付款</span></a>
        <a class="opacity" href="orderlist?status=2" ontouchstart=""><span class="img icon02"><i class="num">7</i></span><span class="txt">待发货</span></a>
        <a class="opacity" href="orderlist?status=3" ontouchstart=""><span class="img icon03"><i class="num">3</i></span><span class="txt">待收货</span></a>
        <a class="opacity" href="orderlist?status=4" ontouchstart=""><span class="img icon04"></span><span class="txt">已完成</span></a>
      </div>
    </div>

    <div class="mine-order-down">
      <div class="order-top-line">
        <span class="title">线下订单</span>
        <a class="go-look opacity" href="javascript:void(0)" ontouchstart="">查看订单</a>
      </div>
    </div>

    <div class="mine-nav-list">
      <a class="opacity down first" href="mine/allOrder/allOrder?status=5" ontouchstart=""><span class="img icon05"></span><span class="txt">售后服务</span></a>
      <a class="opacity down" href="mine/share/share" ontouchstart=""><span class="img icon06"></span><span class="txt">我的分享</span></a>
      <a class="opacity down" href="address" ontouchstart=""><span class="img icon07"></span><span class="txt">地址管理</span></a>
      <a class="opacity down" href="" ontouchstart=""><span class="img icon08"></span><span class="txt">浏览轨迹</span></a>
      <a class="opacity first" href="accoutmanage" ontouchstart=""><span class="img icon09"></span><span class="txt">账号管理</span></a>
      <a class="opacity" href="collect" ontouchstart=""><span class="img icon10"></span><span class="txt">我的收藏</span></a>
      <a class="opacity" href="" ontouchstart=""><span class="img icon11"></span><span class="txt">联系客服</span></a>
      <a class="opacity" href="aboutus" ontouchstart=""><span class="img icon12"></span><span class="txt">关于我们</span></a>
    </div>

    <div class="mine-btn-login">
      <a class="opacity" href="javascript:void(0)" v-if="this.$store.state.isLogin === 1" ontouchstart="">退出当前账号</a>
      <a class="opacity" href="javascript:void(0)" v-if="this.$store.state.isLogin === 0" ontouchstart="">未登录</a>
    </div>

    <div class="for-login" v-if="this.$store.state.isLogin === 0" @click="showLoginBox(1)"></div>

    <v-footer></v-footer>

  </div>
</template>

<script>
import vFooter from '../../../components/include/footer'
export default {
  name: 'mineView',
  // 数据存放区
  data () {
    return {
      title: '我的'
    }
  },
  // 注册组件
  components: {
    'v-footer': vFooter
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted () {
    this.$global.changeFootTab(this, 'mine')
  },
  // 方法
  methods: {
    showLoginBox: function (type) {
      this.$global.showLoginbox(this, type)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'mine.styl';
</style>
