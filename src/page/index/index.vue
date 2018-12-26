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
      <li class="goods-list opacity" ontouchstart="" v-for="item in recommendList" v-bind:key="item.id" @click="goToDetail(item.id)">
        <div class="goods-img"><img :src="item.image"></div>
        <div class="goods-name"><i>金贝当钱花</i>{{ item.goodsName }}</div>
        <div class="goods-label">
          <!--<i class="label-red">6人助力·多得20金贝</i>-->
          <i class="label-yellow" v-if="item.backGold">送{{ item.backGold }}金贝</i>
        </div>
        <div class="goods-price">
          <i class="goods-btn-pay">助力购</i>
          <span class="icon-rmb">¥</span>
          <span class="goods-price-now">{{ item.price | priceNum }}</span>
          <!--<span class="goods-price-old">29.00</span>-->
        </div>
      </li>
    </ul>

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
      imageList: [], // banner图列表
      menuList: [], // 分类图标列表
      recommendList: [] // 推荐商品列表
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
    this.$global.changeFootTab(this, 'index')

    // 150
    this.$global.setCookie('aesKey', 'Ytc5p2mix2XSxmkC')
    this.$global.setCookie('unionId', 'oopIu0t5VJ4UYV0VcSwCX1vlGFX8')
    this.$global.setCookie('openId', 'oFVsQ5a8ygzY1SVOYZh1ZLCf51sY')
    this.$global.setCookie('sid', 'ca8a95f4f85240f5b18269f65a7d911e')
    this.$global.setCookie('uid', '524262133245718528')
    this.$global.setCookie('session', 'ZjG0d6cPXlXJ59E3WpCphaTy48nJezb97jICoj1D4CixRUUgXpSRmCaYqqFXByQQ')
    this.$global.setCookie('session-login', '0e3ade0e0192435daac16ee800743e3a')

    this.$store.state.isLogin = 1
    this.showpageList()
    this.clientListByCodes()
  },
  // 方法
  methods: {
    /**
     * 获取banner、nav列表
     */
    showpageList () {
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
     * 获取商品推荐列表
     */
    clientListByCodes () {
      this.$global.changeLoading(this, 1)
      let _this = this
      this.$global.myAjax(this, 'post', 'bhs-client-online/showpageContent/clientListByCodes', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          let {data} = res.data
          let {recommendList} = _this
          for (let i = 0; i < data.length; i++) {
            recommendList.push(data[i])
          }
          _this.recommendList = recommendList
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
    goToDetail (id) {
      this.$router.push({
        path: '/goodsdetail',
        query: {
          id
        }
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
