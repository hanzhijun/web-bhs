<template>

  <div class="out-side-goodslist">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff" v-if="word === null">{{ title }}</div>
      <div class="search-main-bar" v-else>
        <span class="search-go opacity" title="搜索" @click="toSearch"></span>
        <input class="search-word" placeholder="搜索商品(助力购买更划算)" v-model="word">
        <span class="search-del opacity" title="清空" @click="delAllword"></span>
      </div>
    </div>

    <div class="nav-bar">
      <a class="opacity" href="javascript:void(0)" :class="{'this-over':searchType === 1}" @click="changeNav(1)" ontouchstart=""><span>综合</span></a>
      <a class="opacity" href="javascript:void(0)" :class="{'this-over':searchType === 2}" @click="changeNav(2)" ontouchstart=""><span>销量</span></a>
      <a class="opacity" href="javascript:void(0)" :class="{'this-over':searchType === 3 ||searchType === 4}" @click="changeNav(3)" ontouchstart=""><span class="sort" :class="{'up':searchType === 3, 'down':searchType === 4}">价格</span></a>
    </div>

    <div class="goods-out">
      <ul>
        <li class="goods-list opacity" v-for="item in list" v-bind:key="item.id" @click="goPage(item.id)" ontouchstart="">
          <div class="goods-img">
            <img v-if="item.image" :src="item.image">
            <img v-else src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png">
          </div>
          <div class='goods-name text-overflow-2'>{{item.goodsName}}</div>
          <div class='goods-info'>
            <span class='red'>￥ {{item.price/100}}</span>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'goodsListView',
  // 数据存放区
  data () {
    return {
      title: '商品列表',
      sid: '',
      sname: '',
      word: null,
      list: [],
      searchType: 1 // 1综合 2销量 3价格升序 4价格降序
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {
    let sid = this.$global.getUrlString('sid')
    let sname = this.$global.getUrlString('sname')
    let word = this.$global.getUrlString('word')
    if (sname) {
      this.sid = sid
      this.sname = sname
      document.title = sname
      this.title = sname
    }
    if (word) {
      this.word = this.$global.unCode(word)
      document.title = '搜索结果'
      this.title = '搜索结果'
    }
    if (!sid && !word) {
      this.$global.showToast(this, '类目获取错误，即将返回首页!')
      let _this = this
      setTimeout(function () {
        _this.goHome()
      }, 3000)
    }
    this.getData()
  },
  // 方法
  methods: {
    // 获取数据
    getData: function () {
      this.$global.changeLoading(this, 1)
      let obj = {
        categoryId: this.sid
      }
      let _this = this
      this.$global.myAjax(this, 'post', 'bhs-client-online/goodsInfo/list', obj, function (res) {
        if (res.data.code * 1 === 1) {
          _this.list = res.data.data.data
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
     * 标签切换
     * @param type
     */
    changeNav (type) {
      let {searchType} = this
      if (type === 1) {
        if (searchType === 1) return
        this.searchType = 1
        this.$global.showToast(this, '综合排序模式')
      } else if (type === 2) {
        if (searchType === 2) return
        this.searchType = 2
        this.$global.showToast(this, '销量排序模式')
      } else {
        if (searchType === 3) {
          this.searchType = 4
          this.$global.showToast(this, '价格降序排列')
        } else {
          this.searchType = 3
          this.$global.showToast(this, '价格升序排列')
        }
      }
    },
    /**
     * 清空搜索框
     */
    delAllword () {
      this.word = ''
    },
    /**
     * 执行搜索
     * @param word
     */
    toSearch () {
      if (this.word === '') {
        this.$global.showToast(this, '请输入搜索的商品关键字')
      } else {
        this.$router.push({
          path: '/goodslist',
          query: {
            word: this.$global.enCode(this.word)
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'goodslist.styl';
</style>
