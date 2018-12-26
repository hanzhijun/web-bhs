<template>
  <div class="out-side-confirm">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="confirm-header-null"></div>

    <div class="order-address" v-if="addrId !== null">
      <div class="order-addr-mess" v-if="addrId !== ''" @click="goToAddress('change')">
        <span class="name fs-bold">收货人：{{ addrUserName }}</span>
        <span class="tel fs-bold">{{ addrUserTel }}</span>
        <p class="addr-main">{{ addrUserRess }}</p>
        <i class="icon-star"></i>
      </div>

      <div class="order-addr-mess" v-if="addrId === ''" @click="goToAddress('add')">
        <span class="add-new-btn fs-32 fc-1a">新增收货地址</span>
        <i class="icon-star"></i>
      </div>
      <div class="line"></div>
    </div>

    <div class="order-goods-list" v-for="item in goodsList" v-bind:key="item.id">

      <div class="pub-name fs-28 fc-1a">贝划算</div>

      <div class="order-goods-bar">
        <div class="order-goods-img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <p class="order-goods-name fs-26 fc-0d">{{ item.goodsName }}</p>
        <p class="order-goods-sku fs-22 fc-b3">{{ item.goodsSpec }}</p>
        <div class="order-goods-price">
          <span class="price-num fs-38 fc-e6">￥{{ item.goodsPrice.cash/100 | priceNum(item.goodsPrice.cash/100) }}</span>
          <span class="return-num fs-24">送88金贝<i></i></span>
        </div>
        <span class="order-goods-num fs-22 fc-59">x{{ item.quantity }}</span>
      </div>

      <div class="order-goods-message">
        <span class="title fs-24 fc-1a">买家留言</span>
        <input class="fs-22 fc-1a" type="text" placeholder="填写内容备注需求等，45字内" v-model="item.remarks">
      </div>

      <div class="order-goods-subtotal">
        <span class="fs-26 fc-1a fs-bold">共{{ item.quantity }}件商品&nbsp;&nbsp;&nbsp;&nbsp;小计: </span>
        <span class="fs-28 fc-e6">￥{{ item.payPrice.cash/100 * item.quantity | priceNum(item.payPrice.cash/100 * item.quantity) }}</span>
      </div>
    </div>

    <ul class="order-goods-p-count">
      <li class="fs-24">
        <span class="title">商品总额</span>
        <span class="price fc-e6">￥{{ payPriceTotalPrice.cash/100 | priceNum(payPriceTotalPrice.cash/100) }}</span>
      </li>
      <li class="fs-24" v-if="useGold === 1">
        <span class="title">使用金贝</span>
        <span class="price fc-e6">-￥{{ useGoldNum | priceNum(useGoldNum) }}</span>
      </li>
      <li class="fs-24">
        <span class="title">运费</span>
        <span class="price fc-e6">￥{{ freightPrice.cash/100 | priceNum(freightPrice.cash/100) }}</span>
      </li>
    </ul>

    <div class='golden-yh' v-if="this.$store.state.userCapital.gold !== 0">
      <span class="title fs-28 fc-1a">可用<i>{{ this.$store.state.userCapital.gold / 100 }}</i>个金贝</span>
      <i class="gold-auto" :class="{'this-over':useGold === 1}" @click='checkSwitch'></i>
    </div>

    <div class="go-pay">
      <span><b class="fs-34 fs-bold fc-e6">￥{{payNum | priceNum(payNum)}}</b><i class="fs-26">实付金额: </i></span>
      <a class="fs-38 fc-ff opacity" href="javascript:void(0)" @click="createOrder">去支付</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'goodsOrderConfirm',
  // 数据存放区
  data () {
    return {
      title: '确认订单',
      id: -1,
      freightPrice: {}, // 邮费
      goodsList: [],
      goodsPriceTotalPrice: {}, // 商品总价
      payDetailTotalPrice: {}, // 订单总价
      payPriceTotalPrice: {},
      userOrderAddressResultVos: [], // 收货地址列表
      addrId: null, // 选中的收货地址id
      addrUserName: '', // 收货人
      addrUserTel: '', // 收货人电话
      addrUserRess: '', // 收货详情地址
      ginfo: [],
      useGold: 1, // 是否使用金贝 deduction: this.useGold === 1 ? true : false
      useGoldNum: 0, // 使用金贝数量
      payNum: 0 // 实付金额
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
  mounted () {
    let ginfo = this.$global.getStorage('ginfo')
    let _this = this
    if (!ginfo) {
      _this.$global.showToast(this, '数据缺失，即将返回首页!')
      setTimeout(function () {
        _this.goHome()
      }, 3000)
    }
    this.ginfo = JSON.parse(this.$global.unCode(ginfo))
    this.getData()
  },
  // 方法
  methods: {
    getData: function () {
      let postData = []
      for (let i = 0; i < this.ginfo.length; i++) {
        postData.push(this.ginfo[i])
      }
      let obj = {
        onlineGoodsList: postData,
        province: 0
      }
      let _this = this
      this.$global.myAjax2(this, 'post', 'bhs-client-online/order/confirm', obj, function (res) {
        if (res.data.code * 1 === 1) {
          let {freightPrice, goodsList, goodsPriceTotalPrice, payDetailTotalPrice, payPriceTotalPrice, userOrderAddressResultVos} = res.data.data
          let newGoodsList = []
          for (let j = 0; j < goodsList.length; j++) {
            let json = goodsList[j]
            json.mess = ''
            newGoodsList.push(json)
          }

          if (userOrderAddressResultVos.length !== 0) {
            for (let i = 0; i < userOrderAddressResultVos.length; i++) {
              if (userOrderAddressResultVos[i].isDefault === 1) {
                _this.addrId = userOrderAddressResultVos[i].id
                _this.addrUserName = userOrderAddressResultVos[i].userName
                _this.addrUserTel = userOrderAddressResultVos[i].userPhone
                _this.addrUserRess = userOrderAddressResultVos[i].province + userOrderAddressResultVos[i].city + userOrderAddressResultVos[i].district + userOrderAddressResultVos[i].detailAddress
              }
            }
          }
          _this.freightPrice = freightPrice
          _this.goodsList = newGoodsList
          _this.goodsPriceTotalPrice = goodsPriceTotalPrice
          _this.payDetailTotalPrice = payDetailTotalPrice
          _this.payPriceTotalPrice = payPriceTotalPrice
          _this.userOrderAddressResultVos = userOrderAddressResultVos
          _this.checkPayNum()
          _this.loading = 0
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    // 跳转商品详情页
    goPage: function (id) {
      this.$router.push({
        path: '/goodsdetail',
        query: {
          id
        }
      })
    },
    // 返回首页
    goHome () {
      this.$router.push({
        path: '/'
      })
    },
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    },
    /**
     * 生成订单
     */
    createOrder: function () {
      let {goodsList, addrId, useGold} = this
      let list = []
      for (let i = 0; i < goodsList.length; i++) {
        let v = {
          goodsSkuId: goodsList[i].goodsSkuId,
          quantity: goodsList[i].quantity,
          remarks: goodsList[i].remarks
        }
        list.push(v)
      }
      var obj = {
        deduction: useGold === 1 ? 'true' : 'false',
        onlineGoodsList: list,
        userOrderAddressId: addrId
      }
      console.log(JSON.stringify(obj))
      this.$global.myAjax2(this, 'post', 'bhs-client-online/order/create', obj, function (res) {
        console.log('成功' + JSON.stringify(res))
        if (res.data.code === 1) {
          // let {orderResultVo, paymentResultVo} = res.data.data
          /* if (threePayList) {
            wx.requestPayment({
              'timeStamp': threePayList.timeStamp.toString(),
              'nonceStr': threePayList.nonceStr,
              'package': threePayList.packageInfo,
              'signType': threePayList.signType,
              'paySign': threePayList.paySign,
              'success': function (e) {
                console.log(JSON.stringify(e))
              },
              'fail': function (e) {
                console.log(JSON.stringify(e))
              }
            })
          } else {
            console.log(999)
          }
          this.setData({
            loading: 0
          }) */
        } else {
          console.log('失败' + JSON.stringify(res.err))
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    checkSwitch () {
      // 是否使用金贝
      this.useGold = Math.abs(this.useGold - 1)
      this.checkPayNum()
    },
    // 核算实付金额
    checkPayNum () {
      // 商品金额
      let cash = this.payPriceTotalPrice.cash / 100
      // 邮费
      let freight = this.freightPrice.cash / 100
      // 是否使用金贝
      let useGold = this.useGold
      // 拥有金贝数
      let gold = this.$store.state.userCapital.gold / 100
      // 使用金贝数
      let useGoldNum = Math.min(cash, gold)
      if (useGold === 0) {
        useGoldNum = 0
      }
      this.useGoldNum = useGoldNum
      this.payNum = cash - useGoldNum + freight
    },
    goToAddress (type) {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'orderconfirm.styl';
</style>
