<template>
  <div class="out-side-nearby">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <mt-swipe :auto="8000">
      <mt-swipe-item v-for="item in bannerList" v-bind:key="item.id"><img :src="item.img" class="slide-image" width="750" height="300"></mt-swipe-item>
    </mt-swipe>

    <ul class="near-nav">
      <li class="near-list opacity" v-for="item in navList" v-bind:key="item.id" ontouchstart="">
        <div class="img"><img class="near-img" :src='item.img'></div>
        <div class="txt fs-24 fc-40 text-overflow">{{item.title}}</div>
      </li>
    </ul>

    <div class="hot-header">
      <span class="hot fs-28 fc-1a">热门商家</span>
      <span class="more fs-24 fc-99">更多></span>
    </div>

    <ul class="hot-sj-ul">
      <li class="opacity"><!-- v-for="item in list" v-bind:key="item.id" ontouchstart=""-->
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><!--<img :src="item.licenseImage">--><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow"><!--{{item.name}}-->北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow"><!--{{item.address}} {{item.distance}}km-->高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:<!--￥{{item.expense_avg}}-->￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
        </div>
      </li>
      <li class="opacity">
        <div class="border-line-heng-e6e6e6"></div>
        <div class="img"><img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg"></div>
        <div class="main">
          <span class="name fs-30 fc-1a text-overflow">北京遇上烤..(府城国际)</span>
          <span class="addr fs-24 fc-1a text-overflow">高新区 吉泰路 0.8km</span>
          <span class="price fs-24 fc-66">人均消费:￥88.88</span>

          <div class="label fs-24 fc-66">
            <span class="di">金贝消费</span>
            <span class="tuan text-overflow">战斧牛排hah.. 团购1~2人</span>
          </div>
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
  name: 'nearByView',
  // 数据存放区
  data () {
    return {
      title: '附近',
      latitude: 0,
      longitude: 0,
      bannerList: [
        {
          title: '',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/7a587ff5671dc9f2f62b37221832c8bc.jpeg',
          jump_type: 2,
          jump_data: 'https://www.bei-huasuan.cn/activity-web/html/activity-page14.html'
        },
        {
          title: '',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/b019ab88476ea18b0bbd5c6d9dd33d00.jpeg',
          jump_type: 2,
          jump_data: 'https://www.bei-huasuan.cn/activity-web/html/activity-page20.html'
        },
        {
          title: '',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/9575f4a9701d53f2905975fd4ccd31a5.jpeg',
          jump_type: 2,
          jump_data: 'https://www.bei-huasuan.cn/activity-web/html/activity-page15.html'
        }
      ],
      navList: [
        {
          title: '丽人',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/fadf1eff1ee7af1b4c1b91675ec652f1.png',
          jump_type: 8,
          jump_data: '14'
        },
        {
          title: '美食',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/6f5ff31d0cab5f0a887d1d92727acdfd.png',
          jump_type: 8,
          jump_data: '1'
        },
        {
          title: '娱乐',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/ec530d90ab94c5e04da5279bd7731b30.png',
          jump_type: 8,
          jump_data: '3'
        },
        {
          title: '健身',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/002e6e2bf74587ea3f617324d205be7d.png',
          jump_type: 8,
          jump_data: '20'
        },
        {
          title: '更多',
          title_sub: '',
          img: 'https://img.duishangbao.cn/upload/operation/content/img/1/876fb746e94be9a0a1cc79d4cb6012ca.png',
          jump_type: 8,
          jump_data: '12'
        }
      ],
      list: []
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
    this.$global.changeFootTab(this, 'nearby')
    /* let _this = this
    this.$global.changeLoading(this, 1)
    this.$global.myAjax(this, 'get', 'bhs-client-online/business/offline/near?latitude=' + this.$store.state.latitude + '&longitude=' + this.$store.state.longitude, '{}', function (res) {
      if (res.data.code * 1 === 1) {
        console.info(res.data.data)
      }
      _this.$global.changeLoading(_this, 0)
    }) */
  },
  // 方法
  methods: {}
}
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
</script>
<style>
  @import 'nearby.styl';
  @import '../../common/style/mint-ui.styl';
</style>
