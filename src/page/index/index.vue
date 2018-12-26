<template>

  <div class="out-side-index">

    <h1 class="title" style="display: none">{{ title }}</h1>

    <div class="head-bar-index">
      <h2>贝划算</h2>
      <div class="search-main-bar opacity" ontouchstart="" @click="searchJump">
        <a class="search-go" href="javascript:void(0)" title="搜索" ontouchstart=""></a>
        <input class="search-word" placeholder="搜索商品(助力购买更划算)" readonly>
      </div>
    </div>

    <div class="banner-bar">
      <mt-swipe :auto="8000">
        <mt-swipe-item v-for="item in imageList" v-bind:key="item.id"><a href="javascript:void(0)" @click="bannerJump(item.jumpParam, item.jumpType)"><img :src="item.thumbnail"></a></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="nav-bar">
      <a class="nav-list opacity" href="javascript:void(0)" v-for="item in menuList" v-bind:key="item.id" @click="bannerJump(item.jumpParam, item.jumpType)" ontouchstart="">
        <div class="nav-img"><img :src="item.thumbnail"></div>
        <div class="nav-name">{{ item.name }}</div>
      </a>
    </div>

    <ul class="goods-bar">
      <li class="goods-list opacity" ontouchstart="">
        <div class="goods-img"><img src="http://192.168.100.231/group1/M00/00/03/wKhk51v1D_yAY09SAA9Dyf-GQfc720.jpg"></div>
        <div class="goods-name"><i>金贝当钱花</i>月见和菓子(芒果味棉花糖麻薯...俘获芳心直用三层夹心嗲方炯</div>
        <div class="goods-label">
          <i class="label-red">6人助力·多得20金贝</i>
          <i class="label-yellow">送20金贝</i>
        </div>
        <div class="goods-price">
          <i class="goods-btn-pay">助力购</i>
          <span class="icon-rmb">¥</span>
          <span class="goods-price-now">18.00</span>
          <span class="goods-price-old">29.00</span>
        </div>
      </li>
    </ul>

    <ul>
      <li><a href="./classify" style="font-size: 0.24rem">商品类目</a></li>
      <li><a href="./aboutus" style="font-size: 0.36rem">关于我们</a></li>
      <li><a href="./address" style="font-size: 0.48rem">地址管理</a></li>
      <li><a href="./addreciver">编辑地址</a></li>
      <li><a href="./accoutmanage">账号管理</a></li>
      <li><a href="./bindtel">绑定手机</a></li>
      <li><a href="./wxauth">微信登录回执页</a></li>
      <li>--------------------------------------</li>
      <li class="div-test"><a href="./login">登录页面</a></li>
      <li>
        <router-link to="/login">登录页面</router-link><br>
        <router-link :to="{ name: 'mine_login', params: { id: 9 }}" v-if="1 === 1">登录页面</router-link>
      </li>
      <li>--------------------------------------</li>
      <li><span @click='showToast'>toast提示弹窗</span></li>
      <li><span @click='showLoading'>显示loading框</span></li>
      <li><span @click='showLoginBox(1)'>显示登录框</span></li>
      <li><span @click='aesData'>加密</span></li>
      <li><span @click='deAesData'>解密</span></li>
    </ul>

    <div style="background-color: red; width: 7.5rem">123</div>

    <v-footer></v-footer>

  </div>

</template>

<script>
import Vue from 'vue'
import vFooter from '../../components/include/footer'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'HomeIndexView',
  // 数据存放区
  data () {
    return {
      title: '贝划算，开始划算生活',
      imageList: [], // banner图
      menuList: [] // 分类图标
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
    this.$global.changeFootTab(this, 'index')
    this.$global.setCookie('aesKey', 'rDPrNmQzrXQxBZZ2')
    this.$global.setCookie('unionId', 'ouA1Y0oLXxWH1b7YeU7BPSSHaB70')
    this.$global.setCookie('openId', 'ouA1Y0oLXxWH1b7YeU7BPSSHaB70')
    this.$global.setCookie('sid', '9465a0c0fcfb4fbfb6b2d6af1f2e31de')
    this.$global.setCookie('uid', '516964814301212672')
    this.$global.setCookie('session', 'iHNrt0aOLjX5rCIK+eYkVonwuhYgk2jec7GEYFPHvpN8TV76+BC0V5K7M8d7crqm')
    this.$global.setCookie('session-login', 'd9eb1410f1f744adafa6e8d4b102e271')
    this.$store.state.isLogin = 1
    this.getData()
  },
  // 方法
  methods: {
    /**
     * 获取首页数据
     */
    getData () {
      this.$global.changeLoading(this, 1)
      let _this = this
      this.$global.myAjax(this, 'post', 'bhs-client-online/showpageConfig/showpageList', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          let {imageList, menuList} = res.data.data
          _this.imageList = imageList
          _this.menuList = menuList
        }
        _this.$global.changeLoading(_this, 0)
      }, function (reg) {
        console.info(reg)
        _this.$global.changeLoading(_this, 0)
      })
    },
    /**
     * 类目导航区域跳转
     * @param jumpParam
     * @param jumpType
     */
    bannerJump (jumpParam, jumpType) {
      this.$global.openPageTo(this, jumpParam, jumpType)
    },
    /**
     * 跳转搜索页
     */
    searchJump () {
      this.$router.push({
        path: '/search'
      })
    },
    showLoading: function () {
      this.$global.changeLoading(this, 1)
    },
    showToast: function () {
      this.$global.showToast(this, '对不起，该商品已售罄!')
    },
    showLoginBox: function (type) {
      this.$global.showLoginbox(this, type)
    },
    aesData: function () {
      let keyStr = this.$global.getAesKey(16)
      this.$global.setCookie('aesKey', keyStr)
      let word = this.$global.aesData('8L8k', keyStr)
      this.key = keyStr
      this.word = word
    },
    deAesData: function () {
      let result = this.$global.deAesData(this, this.word)
      console.log(result)
    }
  }
}
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
</script>

<style>
  @import 'index.styl';
  @import '../../common/style/mint-ui.styl';
</style>
