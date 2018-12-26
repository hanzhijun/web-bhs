<template>

  <div class="out-side-search">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <span class="head-btn-return-txt opacity" @click="goBack" ontouchstart="">取消</span>
      <div class="search-main-bar">
        <span class="search-go opacity" title="搜索" ontouchstart="" @click="toSearch('')"></span>
        <input class="search-word" placeholder="搜索商品(助力购买更划算)" v-model="word">
      </div>
    </div>

    <div class="del-all" v-if="searchLong > 0">
      <span>最近搜索</span>
      <a class="opacity" href="javascript:void(0)" ontouchstart="" @click="delSearch('')"></a>
    </div>

    <ul class="search-history-list" v-if="searchLong > 0">
      <li v-for="item in searchList" v-bind:key="item.id">
        <span @click="toSearch(item)">{{ item }}</span>
        <a class="opacity" href="javascript:void(0)" ontouchstart="" @click="delSearch(item)"></a>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'searchView',
  // 数据存放区
  data () {
    return {
      title: '商品搜索',
      word: '', // 搜索关键字
      searchLong: -1, // 搜索记录条数
      searchList: []
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
    if (!this.$global.getCookie('searchWord')) return
    let searchList = JSON.parse(this.$global.getCookie('searchWord'))
    this.searchList = []
    for (let i = 0; i < searchList.length; i++) {
      this.searchList.push(this.$global.unCode(searchList[i]))
    }
    this.searchLong = this.searchList.length
  },
  // 方法
  methods: {
    /**
     * 跳转商品列表页
     */
    goPage: function () {
      this.$router.push({
        path: '/goodslist',
        query: {
          sid: '',
          sname: ''
        }
      })
    },
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    },
    checkSearch () {
      this.searchLong = this.searchList.length
    },
    /**
     * 执行搜索
     * @param word
     */
    toSearch (word) {
      if (!word) {
        if (this.word === '') {
          this.$global.showToast(this, '请输入搜索的商品关键字')
        } else {
          this.$global.addSearchWord(this, this.word)
          this.$router.push({
            path: '/goodslist',
            query: {
              word: this.$global.enCode(this.word)
            }
          })
        }
      } else {
        this.$global.addSearchWord(this, word)
        this.$router.push({
          path: '/goodslist',
          query: {
            word: this.$global.enCode(word)
          }
        })
      }
    },
    delSearch (word) {
      if (!word) {
        this.searchList = []
        this.$global.setCookie('searchWord', '')
        this.checkSearch()
      } else {
        let searchList = this.searchList
        let newData = []
        for (let i = 0; i < searchList.length; i++) {
          if (searchList[i] !== word) {
            newData.push(searchList[i])
          }
        }
        this.searchList = newData
        this.$global.setCookie('searchWord', JSON.stringify(newData))
        this.checkSearch()
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'search.styl';
</style>
