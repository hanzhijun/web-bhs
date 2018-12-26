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
        <span @click="toSearch(item.text)">{{ item.text }}</span>
        <a class="opacity" href="javascript:void(0)" ontouchstart="" @click="delSearch(item.id)"></a>
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
      searchList: [{
        id: 123,
        text: '哈根达斯'
      }, {
        id: 124,
        text: '圆圆美梦成真'
      }, {
        id: 125,
        text: '遍历在加'
      }]
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {
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
          this.$router.push({
            path: '/goodslist',
            query: {
              word: this.$global.enCode(this.word)
            }
          })
        }
      } else {
        this.$router.push({
          path: '/goodslist',
          query: {
            word: this.$global.enCode(word)
          }
        })
      }
    },
    delSearch (id) {
      if (!id) {
        console.log('搜索历史全部删除成功')
        this.searchList = []
        this.checkSearch()
      } else {
        console.log('搜索单条记录')
        let searchList = JSON.parse(JSON.stringify(this.searchList))
        let newData = []
        for (let i = 0; i < searchList.length; i++) {
          if (searchList[i].id !== id) {
            newData.push(searchList[i])
          }
        }
        this.searchList = newData
        this.checkSearch()
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'search.styl';
</style>
