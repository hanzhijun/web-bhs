<template>
  <div class="out-side-businessorderdetail">

  </div>

</template>

<script>
export default {
  name: 'packageOrderDetail',
  // 数据存放区
  data () {
    return {
      title: '订单详情'
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
  mounted: function () {},
  // 方法
  methods: {
    /**
     * 跳转页面
     */
    goPage: function () {
      this.$router.push({
        path: '/',
        query: {}
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
  @import 'packageorderdetail.styl';
</style>
