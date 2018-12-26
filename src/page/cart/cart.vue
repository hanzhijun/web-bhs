<template>
  <div class="out-side-cart">

    <div class="head-bar-fixed">
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
      <span class="header-address text-overflow"> {{ this.$store.state.addrName }}</span>
      <span class="header-cart-btn opacity" @click="switchPage" v-if="option === 'shopcart'" ontouchstart="">编辑商品</span>
      <span class="header-cart-btn opacity" @click="switchPage" v-if="option === 'edit'" ontouchstart="">完成</span>
    </div>

    <div class="cart-main" v-if="count > 0">
      <div class="cart-number">共 <span class="red">{{ count }}</span> 件商品</div>
      <!--商品列表-->
      <div class="cart-list" v-for="item in goodsList" v-bind:key="item.id">
        <i class="check-single" :class="{'this-over':item.isSelect * 1 === 1}" @click="checkSingle(item.goodsSkuId)"></i>
        <div class="cart-img"><img class='image' :src="item.goodsImage"></div>
        <div class="cart-mess-bar">
          <div class="name text-overflow-2">{{ item.goodsName }}</div>
          <span class="spec">{{ item.goodsSpec }}</span>
          <span class="return">送68金贝</span>
          <div class="price">¥ {{ item.goodsPrice.cash / 100 | priceNum(item.goodsPrice.cash / 100) }}</div>
          <div class='cart-btn-box' v-if="option === 'shopcart'">
            <span class="jia" @click="changeNum(item.goodsSkuId, 1, item.quantity)">+</span>
            <span class="num">{{ item.quantity }}</span>
            <span class="jian" @click="changeNum(item.goodsSkuId, -1, item.quantity)">-</span>
          </div>
        </div>
      </div>

    </div>

    <!--统计及去结算-->
    <div class='cart-footer' v-if="option === 'shopcart'">

      <div class="cart-footer-mess" :class="{'single':this.$store.state.userCapital.gold <= 0}">
        <div class="t"><span class="f-type1">合计：</span><span class="f-type2">¥ {{ pay.price/100 | priceNum(pay.price/100) }}</span><span class="f-type3"> (送45金贝)</span></div>
        <div class="b" v-if="this.$store.state.userCapital.gold > 0">可用{{ this.$store.state.userCapital.gold / 100 }}金贝立减{{ pay.missPrice }}元</div>
      </div>

      <div class='to-pay opacity' @click="toPay" v-if="pay.nums > 0" ontouchstart="">去结算({{ pay.nums }})</div>
      <div class='to-pay opacity gray' v-else ontouchstart="">去结算({{ pay.nums }})</div>

      <i class="btn-select-all" @click="toCheckAll" :class="{'this-over':checkAll === 1}">全选</i>

    </div>

    <!--编辑购物车-->
    <div class='cart-footer' v-if="option === 'edit'">

      <i class="btn-cart-del opacity" @click="deleteCartConfirm" ontouchstart="">删除所选</i>
      <i class="btn-cart-move opacity" @click="joinCollect" ontouchstart="">移至收藏</i>

      <i class="btn-select-all" @click="toCheckAll" :class="{'this-over':checkAll === 1}">全选</i>

    </div>

    <!--购物车为空-->
    <div class='cart-null' v-if="count === 0">
      <div class="cart-null-icon"><img src="https://api.duishangbao.cn/upload/image/cart-null.jpg"></div>
      <p class="note1">你的购物车空空的哦~</p>
      <p class="note2">去看看心仪的商品吧~</p>
      <div class="cart-null-btn opacity" ontouchstart=""><a href="/">立即去购物&gt;</a></div>
    </div>

    <!--确认删除弹窗-->
    <div class="base-box" v-if="cartBox === 1">
      <div class="gray-back" @click="cartCloseBox"></div>
      <div class="box-confirm">
        <p class="txt">确认将已选中的{{ pay.nums }}件商品删除？</p>
        <div class="btn">
          <a href="javascript:void(0)" class="l" @click="cartCloseBox" ontouchstart="">取消</a>
          <a href="javascript:void(0)" class="r opacity" @click="deleteCart" ontouchstart="">确认删除</a>
        </div>
      </div>
    </div>

    <!--移至收藏弹窗-->
    <div class="base-box" v-if="cartBox === 2">
      <div class="gray-back" @click="cartCloseBox"></div>
      <div class="box-confirm">
        <p class="txt">确认将已选中的{{ pay.nums }}件商品移至收藏？</p>
        <div class="btn">
          <a href="javascript:void(0)" class="l" @click="cartCloseBox">取消</a>
          <a href="javascript:void(0)" class="r opacity">移至收藏</a>
        </div>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '../../components/include/footer'
export default {
  name: 'shopCartView',
  // 数据存放区
  data () {
    return {
      title: '购物车',
      imgUrl: 'https://img.duishangbao.cn/',
      address: '复城国际中心', // 用户地址
      checkAll: 1, // 是否全选
      goodsList: [], // 购物车商品列表
      myCollectList: [],
      count: -1, // 总件数
      option: 'shopcart', // 编辑商品  shopcart：购物车   edit：编辑   no: 购物车为空
      cart_msg: [],
      cartBox: -1, // 弹窗 1确认删除 2确认收藏
      pay: { // 结算
        silver_num: 0, // 银贝
        get_goldshells: 0, // 返金贝
        price: 0, // 价格
        copper_price: 0, // 铜贝
        gold_price: 0, // 金贝
        num: 0, // 选中商品总数量
        nums: 0, // 选中件数
        missPrice: 0 // 可用金贝数抵扣金额
      }
    }
  },
  // 注册组件
  components: {
    'v-footer': vFooter
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
    let session = this.$global.getCookie('session')
    if (!session) {
      this.$global.showLoginbox(this, 1)
      return
    }
    this.$global.changeFootTab(this, 'cart')
    this.getList()
  },
  // 方法
  methods: {
    /**
     * 获取购物车商品数据
     */
    getList () {
      this.$global.changeLoading(this, 1)
      let _this = this
      _this.$global.myAjax2(_this, 'post', 'bhs-client-online/shoppingCart/list', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          if (res.data.data === null) {
            _this.count = 0
            _this.option = 'no'
            _this.$global.changeLoading(_this, 0)
            return
          }
          let {goodsList} = _this
          let {data, count} = res.data.data
          for (let i = 0; i < data.length; i++) {
            let list = data[i]
            list['isSelect'] = 1
            list.goodsImage = list.goodsImage.replace('http://192.168.100.231/http://', 'http://')
            goodsList.push(list)
          }
          _this.goodsList = goodsList
          _this.count = count
          _this.checkAllMoney()
        } else {
          _this.$global.changeLoading(_this, 0)
        }
      })
    },
    /**
     * 计算购物车选中商品数量及总价
     */
    checkAllMoney () {
      let {goodsList, pay} = this
      pay.price = pay.num = pay.nums = 0
      for (let i = 0; i < goodsList.length; i++) {
        if (goodsList[i].isSelect === 1) {
          pay.num += goodsList[i].quantity
          pay.nums += 1
          pay.price += goodsList[i].quantity * goodsList[i].goodsPrice.cash
        }
      }
      pay.missPrice = Math.min(pay.price / 100, this.$store.state.userCapital.gold / 100)
      this.goodsList = goodsList
      this.pay = pay
      this.$global.changeLoading(this, 0)
    },
    /**
     * 加减数量操作
     */
    changeNum (sku, num, quantity) {
      if (num * 1 === -1 && quantity * 1 === 1) return
      let obj = {
        goodsSkuId: sku,
        quantity: quantity + num * 1
      }
      let _this = this
      this.$global.changeLoading(_this, 1)
      // 变更数量提交服务器
      _this.$global.myAjax2(_this, 'put', 'bhs-client-online/shoppingCart/updateQuantity', obj, function (res) {
        if (res.data.code * 1 === 1) {
          console.log('成功变更数量')
          let {goodsList} = _this
          for (let i = 0; i < goodsList.length; i++) {
            if (goodsList[i].goodsSkuId === sku) {
              goodsList[i].quantity = goodsList[i].quantity + num * 1
            }
          }
          _this.goodsList = goodsList
          _this.checkAllMoney()
        } else {
          console.log('变更数量失败！')
        }
        _this.$global.changeLoading(_this, 0)
      })
    },
    /**
     * 全选与取消全选操作
     */
    toCheckAll () {
      let {checkAll, goodsList} = this
      checkAll = Math.abs(checkAll - 1)
      for (let i = 0; i < goodsList.length; i++) {
        goodsList[i].isSelect = checkAll
      }
      this.checkAll = checkAll
      this.goodsList = goodsList
      this.checkAllMoney()
    },
    /**
     * 单个选择与取消选择操作
     */
    checkSingle (sku) {
      let {checkAll, goodsList} = this
      let over = true
      for (let i = 0; i < goodsList.length; i++) {
        if (goodsList[i].goodsSkuId === sku) {
          goodsList[i].isSelect = Math.abs(goodsList[i].isSelect - 1)
        }
        if (goodsList[i].isSelect === 0) {
          over = false
        }
      }
      checkAll = over === true ? 1 : 0
      this.checkAll = checkAll
      this.goodsList = goodsList
      this.checkAllMoney()
    },
    /**
     * 编辑商品 (顶部切换按钮)
     * @param e
     */
    switchPage () {
      let {option} = this
      if (option === 'shopcart') {
        option = 'edit'
      } else {
        option = 'shopcart'
      }
      this.option = option
    },
    /**
     * 购物车删除
     */
    deleteCartConfirm () {
      this.cartBox = 1
    },
    deleteCart () {
      let {goodsList} = this
      let _this = this
      this.$global.changeLoading(_this, 1)
      if (this.checkAll === 1) { // 全部删除
        _this.$global.myAjax2(_this, 'delete', 'bhs-client-online/shoppingCart/deleteAll', '{}', function (res) {
          if (res.data.code * 1 === 1) {
            console.log('购物车删除成功')
            _this.goodsList = []
            _this.count = 0
            _this.option = 'no'
          }
          _this.$global.changeLoading(_this, 0)
          _this.cartBox = -1
        })
      } else { // 删除部分
        let obj = []
        for (let i = 0; i < goodsList.length; i++) {
          if (goodsList[i].isSelect === 1) {
            obj.push(goodsList[i].goodsSkuId)
          }
        }
        _this.$global.myAjax2(_this, 'delete', 'bhs-client-online/shoppingCart', obj, function (res) {
          if (res.data.code * 1 === 1) {
            console.log('购物车删除成功')
            let newData = []
            for (let i = 0; i < goodsList.length; i++) {
              if (goodsList[i].isSelect === 0) {
                newData.push(goodsList[i])
              }
            }
            _this.goodsList = newData
            _this.count = newData.length
            _this.checkAllMoney()
          }
          _this.$global.changeLoading(_this, 0)
          _this.cartBox = -1
        })
      }
    },
    // 移入收藏夹
    joinCollect () {
      this.cartBox = 2
    },
    // 关闭弹窗
    cartCloseBox () {
      this.cartBox = -1
    },
    // 去结算
    toPay () {
      let ginfo = []
      let goodsList = this.goodsList
      for (let i = 0; i < goodsList.length; i++) {
        if (goodsList[i].isSelect === 1) {
          let obj = {
            quantity: goodsList[i].quantity,
            goodsSkuId: goodsList[i].goodsSkuId,
            orderActivityid: goodsList[i].buyerId,
            remarks: ''
          }
          ginfo.push(obj)
        }
      }
      this.$global.setStorage('ginfo', this.$global.enCode(JSON.stringify(ginfo)))
      this.$router.push({
        path: '/orderconfirm'
      })
    }
  }
}
</script>

<style>
  @import 'cart.styl';
</style>
