<template>
  <div class="out-side-goodsdetail">

    <div class="head-bar-fixed">
      <a class="head-btn-return opacity" href="javascript:void(0)" @click="goBack" ontouchstart=""></a>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
      <a class="share-btn fs-28 fc-ff opacity" href="javascript:void(0)">分享</a>
    </div>

    <div class="banner">
      <mt-swipe :auto="8000">
        <mt-swipe-item v-for="item in bannerList" v-bind:key="item.id"><img :src="item.imgPath" class="slide-image" width="750" height="750"></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="goods-main">

      <div class="detai-info1">
        <span class="icon-rmb fs-40 fc-e6">￥</span>
        <span class="price-now fc-e6">{{ missPrice | priceNum }}</span><!-- 用贝价 单价 -->
        <span class="price-old fs-24 fc-80 fs-line">{{ price / 100 | priceNum }}</span><!-- 商品原价 单价 -->
        <a class="goods-collect fs-22 fc-66" href="javascript:void(0)" ontouchstart="" @click="toCollect"><i class="clearfix"></i>收藏</a>
        <span class="goods-num fs-24 fc-1a">库存: {{ goodsStock }}</span>
      </div>

      <div class="detai-info2 help-pay" v-if="shareBuy === 1">
        <div class="detai-info2-bj2">
          <!--助力购-->
          <div class="detai-info2-bj3">
            <span class="gold-num fs-24 fc-fc" v-if="this.$store.state.isLogin === 1">金贝帮您抵扣了{{ priceUseGold | priceNum }}元</span>
            <span class="gold-num fs-24 fc-40" v-else @click="showLoginBox(1)">点击<i class="fs-24 fc-e6">登录</i>获取更多优惠</span>
            <span class="line-ge"></span>
            <span class="help-num fs-24 fc-e6">6人助力·多得209金贝</span>
            <span class="line-ge"></span>
            <span class="return-num fs-24 fc-fc">送{{ backGold }}金贝</span>
          </div>
        </div>
      </div>
          <!--正常购买-->
      <div class="detai-info2" v-else>
        <div class="detai-info2-bj2">
          <div class="detai-info2-bj3">
            <span class="gold-num fs-24 fc-fc" v-if="this.$store.state.isLogin === 1">金贝帮您抵扣了{{ priceUseGold | priceNum }}元</span>
            <span class="gold-num fs-24 fc-40" v-else @click="showLoginBox(1)">点击<i class="fs-24 fc-e6">登录</i>获取更多优惠</span>
            <span class="line-ge"></span>
            <span class="help-num fs-24 fc-e6">立即购买送{{ backGold }}金贝</span>
          </div>
        </div>
      </div>

      <div class="goods-name"><i>金贝当钱花</i>{{ goodsName }}</div>

      <div class="border-line-heng-e6e6e6"></div>

      <div class="goods-mess-bar opacity" ontouchstart="" @click="showSkuBox(1)">
        <span class="title fx-24 fc-66">选择</span>
        <span class="this-value  fx-24 fc-1a">{{ skuData }} {{ quantity }}</span>
        <span class="icon"></span>
      </div>

      <div class="border-line-heng-e6e6e6"></div>

      <div class="goods-mess-bar">
        <span class="title  fx-24 fc-66">运费</span>
        <span class="this-value  fx-24 fc-1a">免运费</span>
      </div>

      <div class="goods-explain">
        <span class="title">说明</span>
        <span class="this-value">贝划算用户专享福利</span>
      </div>

    </div>

    <div class='goods-detail'>
      <div class='detail-title'>
        <span class="txt fs-28 fc-33">商品详情介绍</span>
        <i></i>
      </div>
      <div class="detail-img">
        <img v-for="item in detailImgList" v-bind:key="item.id" :src='item.imgPath'>
      </div>
    </div>

    <!--助力购-->
    <div class="detail-footer" v-if="shareBuy === 0">
      <div class="border-line-heng-e6e6e6"></div>
      <a class="help-pay-btn opacity fs-40" href="javascript:void(0)" ontouchstart="">助力购</a>
    </div>

    <!--正常购买-->
    <div class="detail-footer" v-else>
      <div class="border-line-heng-e6e6e6"></div>
      <div class="to-order opacity fs-28 fc-ff" @click="toOrder()" ontouchstart="">立即购买</div>
      <div class="to-cart opacity" @click="goToCart" ontouchstart="">
        <i class="icon"></i>
        <span class="txt fs-22 fc-66">购物车</span>
        <i class="num">99</i>
      </div>
      <div class="border-line-shu-e6e6e6"></div>
      <div class="in-cart opacity fs-28 fc-26" @click="joinShopCart()" ontouchstart="">加入购物车</div>
    </div>

    <!--选择规格数量弹窗-->
    <div class="base-box box-select-sku" :class="{'this-show':skuBox === 1}">
      <div class="gray-back" @click="showSkuBox(0)" ontouchstart=""></div>
      <div class="box-sku-main">
        <header>
          <span class="fs-28 fc-0d">规格、数量</span>
          <a class="opacity" href="javascript:void(0)" @click="showSkuBox(0)" ontouchstart=""></a>
        </header>
        <div class="border-line-heng-e6e6e6"></div>
        <div class="info-bar">
          <div class="info-img"><img :src="skuImgPath"></div>
          <div class="info-mess">
            <div class="price"><span class="icon-rmb fs-30 fc-e6">￥</span><span class="price-sku fc-e6">{{ price / 100 | priceNum }}</span></div>
            <div class="stock fs-24 fc-66">库存: {{ goodsStock }}</div>
            <div class="note-txt fs-24 fc-66">已选: {{ skuData }}</div>
          </div>
        </div>
        <div class="info-select">
          <ul>
            <li v-for="item in skuSpecList" v-bind:key="item.id">
              <span class="type-name fs-26 fc-0d">{{item.specGroupName}}</span>
              <div class="type-box">
                <span class="t-box opacity fs-24" :class="{'this-over':spec.over === 1}" v-for="spec in item.specList" v-bind:key="spec.id" @click="changeSku(item.index, spec.index, spec.over)" ontouchstart="">{{spec.name}}</span>
              </div>
            </li>

            <li>
              <span class="type-name fs-26 fc-0d">数量</span>
              <div class='btn-box'>
                <span class="l" @click="checkNumber(-1)">-</span>
                <span class="c">{{quantity}}</span>
                <span class="r" @click="checkNumber(1)">+</span>
              </div>
            </li>
          </ul>
        </div>
        <footer>
          <a class="fs-28 fc-ff opacity" href="javascript:void(0)" ontouchstart="" @click="joinShopCart()">加入购物车</a>
          <a class="go-pay fs-28 fc-ff opacity" href="javascript:void(0)" ontouchstart="" @click="toOrder()">立即购买</a>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'goodsDetailView',
  // 数据存放区
  data () {
    return {
      title: '商品详情',
      width: '',
      bannerList: [], // banner图片列表
      detailImgList: [], // 详情中图片列表
      id: '', // 商品id
      areaRestriction: '',
      goodsDesc: '',
      goodsName: '',
      shareBuy: '', // 是否是助力购商品
      skuList: [],
      skuSpecList: [],
      skuData: '', // sku名称 如："红色,S"
      skuImgPath: '',
      goodsSkuId: '', // sku唯一id
      price: '', // 售价
      priceUseGold: null, // 用贝价
      missPrice: null, // 金贝帮你抵扣了
      quantity: 1, // 商品数量
      goodsStock: '', // 库存数量
      orderActivityId: 1, //  参加活动的活动类型，参加的活动，1线上，2服务，3代金卷
      skuBox: 0, // 是否开启选择sku规格弹窗 0关闭 1打开
      backGold: 0, // 返金贝数
      isFavorites: 0, // 是否收藏 0未收藏 1已收藏
      moduleType: 3 // 收藏类型 模块 1 商家 2 套餐 3 商品
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
      if (data !== null) return data.toFixed(2)
    }
  },
  // 挂载完成
  mounted () {
    let id = this.$global.getUrlString('id')
    this.id = id
    if (!id) {
      console.log('商品获取错误，即将返回首页')
    }
    this.getData()
  },
  // 方法
  methods: {
    /**
     * 初始化获取商品详情数据
     */
    getData: function () {
      let _this = this
      this.$global.myAjax(this, 'get', 'bhs-client-online/goodsInfo/' + _this.id, '{}', function (res) {
        if (res.data.code * 1 === 1) {
          console.info(res.data.data)
          let {areaRestriction, goodsName, shareBuy, skuList, skuSpecList, imageList} = res.data.data
          let newSkuSpecList = []
          let detailImgList = []
          let bannerList = []
          // 重组图片数据(viewType: 图片位置 1.宣传图片 2.内容介绍)
          for (let m = 0; m < imageList.length; m++) {
            if (imageList[m].viewType * 1 === 1) {
              bannerList.push(imageList[m])
            } else if (imageList[m].viewType * 1 === 2) {
              detailImgList.push(imageList[m])
            }
          }
          // 重组规格数据
          for (let i = 0; i < skuSpecList.length; i++) {
            let v = skuSpecList[i].specGroupValues.split(',')
            let vList = []
            for (let j = 0; j < v.length; j++) {
              let obj = {
                name: v[j],
                over: j === 0 ? 1 : 0,
                index: j
              }
              vList.push(obj)
            }
            var obj2 = {
              id: skuSpecList[i].id,
              specGroupId: skuSpecList[i].specGroupId,
              specGroupName: skuSpecList[i].specGroupName,
              specList: vList,
              index: i
            }
            newSkuSpecList.push(obj2)
          }
          _this.areaRestriction = areaRestriction
          _this.goodsName = goodsName
          _this.shareBuy = shareBuy
          _this.skuList = skuList
          _this.detailImgList = detailImgList
          _this.bannerList = bannerList
          _this.skuSpecList = newSkuSpecList
          _this.skuImgPath = bannerList[0].imgPath
          _this.loading = 0
          _this.checkSkuData()
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    /**
     * 根据选中的规格，计算sukData及price
     */
    checkSkuData () {
      let {skuSpecList, skuList} = this
      let value = ''
      let price = ''
      let goodsSkuId = ''
      let goodsStock = ''
      let backGold = ''
      for (let i = 0; i < skuSpecList.length; i++) {
        for (let j = 0; j < skuSpecList[i].specList.length; j++) {
          if (skuSpecList[i].specList[j].over * 1 === 1) {
            value = value === '' ? skuSpecList[i].specList[j].name : value + ',' + skuSpecList[i].specList[j].name
          }
        }
      }
      for (let k = 0; k < skuList.length; k++) {
        if (skuList[k].skuSpec === value) {
          price = skuList[k].sellPrice
          goodsSkuId = skuList[k].id
          goodsStock = skuList[k].stock
          backGold = skuList[k].backGold
        }
      }
      this.skuData = value
      this.price = price
      this.goodsSkuId = goodsSkuId
      this.goodsStock = goodsStock
      this.backGold = backGold
      let isLogin = this.$store.state.isLogin
      if (isLogin) {
        let gold = this.$store.state.userCapital.gold
        this.missPrice = Math.min(price / 100, gold / 100)
        this.priceUseGold = price / 100 - this.missPrice
      }
    },
    /**
     * 变更商品规格
     * @param parent 父级索引
     * @param index 本级索引
     * @param over 当前选中状态 1选中 0未选中
     */
    changeSku (parent, index, over) {
      let {skuSpecList, newSkuSpecList = []} = this
      if (over === 1) return
      for (let i = 0; i < skuSpecList.length; i++) {
        if (parent !== i) {
          newSkuSpecList.push(skuSpecList[i])
        } else {
          let list = skuSpecList[i].specList
          let newList = []
          for (let j = 0; j < list.length; j++) {
            let obj = {
              name: list[j].name,
              index: j
            }
            if (index === j) {
              obj.over = 1
            } else {
              obj.over = 0
            }
            newList.push(obj)
          }
          let obj2 = {
            id: skuSpecList[i].id,
            specGroupId: skuSpecList[i].specGroupId,
            specGroupName: skuSpecList[i].specGroupName,
            specList: newList,
            index: i
          }
          newSkuSpecList.push(obj2)
        }
      }
      this.skuSpecList = newSkuSpecList
      this.checkSkuData()
    },
    /**
     * 数量操作
     * @param e
     * @returns {number}
     */
    checkNumber (type) {
      let {quantity, goodsStock} = this
      if (quantity >= goodsStock && type === 1) {
        console.log('您已选至库存上限')
      } else if (quantity !== 1 || type !== -1) {
        this.quantity = quantity * 1 + type * 1
      }
    },
    /**
     * 加入购物车
     */
    joinShopCart () {
      this.$global.checkLogin(this, location.href, 'joinShopCart')
      let _this = this
      let obj = {
        goodsSkuId: _this.goodsSkuId,
        orderActivityId: _this.orderActivityId, // 商品所属活动类型，线上为1，服务为2，代金卷为3
        quantity: 1 // 购买数量
      }
      this.$global.myAjax2(this, 'post', 'bhs-client-online/shoppingCart', obj, function (res) {
        if (res.data.code * 1 === 1) {
          console.info(res.data.data)
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    /**
     * 立即购买
     */
    toOrder () {
      this.$global.checkLogin(this, location.href, 'toOrder')
      let {quantity, goodsSkuId, orderActivityId} = this
      let ginfo = []
      let obj = {
        quantity,
        goodsSkuId,
        orderActivityId,
        remarks: ''
      }
      ginfo.push(obj)
      this.$global.setStorage('ginfo', this.$global.enCode(JSON.stringify(ginfo)))
      this.$router.push({
        path: '/orderconfirm'
      })
    },
    /**
     * 收藏
     */
    toCollect () {
      this.$global.checkLogin(this, location.href, 'toCollect')
      let _this = this
      let obj = {
        moduleType: _this.moduleType,
        favorId: _this.id
      }
      this.$global.myAjax2(this, 'post', 'bhs-client-online/ownFavorites', obj, function (res) {
        if (res.data.code * 1 === 1) {
          console.info(res.data.data)
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    goToCart () {
      this.$router.push({
        path: '/cart'
      })
    },
    goPage: function () {},
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    },
    /**
     * 关闭，开启选择规格、数量弹窗
     * @param type
     */
    showSkuBox (type) {
      this.skuBox = type
    },
    /**
     * 开启登录弹窗
     * @param type
     */
    showLoginBox: function (type) {
      this.$global.showLoginbox(this, type)
    }
  }
}
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
</script>

<style>
  @import 'goodsdetail.styl';
  @import '../../../common/style/mint-ui.styl';
</style>
