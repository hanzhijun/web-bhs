<template>

  <div class="out-side-classify">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="search-main-bar" @click="searchJump" ontouchstart="">
        <span class="search-go opacity" title="搜索"></span>
        <input class="search-word" placeholder="搜索商品(助力购买更划算)" readonly>
      </div>
    </div>

    <!--一级类目-->
    <div class="classify-out">
      <div class="classify" v-for="item in list" v-bind:key="item.id" :class="{'this-over':item.id == cid}" @click="changeNav(item.id)">
        <span class="classify-side opacity text-overflow" ontouchstart="">{{ item.name }}</span>
      </div>
    </div>

    <!--二级类目-->
    <div class="classify-main this-over" v-for="item in list" v-bind:key="item.id" v-show="item.id == cid">
      <ul>
        <li class="opacity" v-for="child in item.childrenList" v-bind:key="child.id" @click="goPage(child.relationCategory, child.name)" ontouchstart="">
          <div class="classify-img"><img :src="child.img"></div>
          <div class="classify-txt text-overflow">{{ child.name }}</div>
        </li>
      </ul>
    </div>

    <v-footer></v-footer>
  </div>

</template>

<script>
import vFooter from '../../../components/include/footer'
export default {
  name: 'classifyView',
  // 数据存放区
  data () {
    return {
      title: '商品类目',
      cid: 0,
      list: []
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
  mounted: function () {
    let cid = this.$global.getUrlString('cid')
    if (cid) {
      this.cid = cid
    }
    this.getData()
  },
  // 方法
  methods: {
    getData: function () {
      this.$global.changeLoading(this, 1)
      let _this = this
      this.$global.myAjax(this, 'get', 'bhs-client-online/showpageCategory/categoryList', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          _this.list = res.data.data
          if (!_this.cid) {
            _this.cid = res.data.data[0].id
          }
        }
        _this.$global.changeLoading(_this, 0)
      }, function (reg) {
        console.info(reg)
        _this.$global.changeLoading(_this, 0)
      })
    },
    /**
     * 一级类目，滚动至可视位置
     */
    navMoveTo: function () {
      console.log(777)
    },
    /**
     * 切换一级类目
     * @param e
     */
    changeNav: function (e) {
      console.log(e)
      if (e) {
        this.cid = e
      }
    },
    /**
     * 跳转商品列表页
     */
    goPage: function (sid, sname) {
      this.$router.push({
        path: '/goodslist',
        query: {
          sid,
          sname
        }
      })
    },
    /**
     * 跳转搜索页
     */
    searchJump () {
      this.$router.push({
        path: '/search'
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
  @import 'classify.styl';
</style>
