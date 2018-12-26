<template>

  <div class="out-side-telmana">
    <h1 style="display: none">{{title}}</h1>
    <div class="accountCon">
      <a class="m_account" href="bindtel">
        <span class="fl fs-15">绑定手机</span>
        <div class="fr">
          <img src="https://api.duishangbao.cn/upload/image/u_arrow.png">
        </div>
      </a>

      <a class="m_account" href="updatetel">
        <span class="fl fs-15">修改手机</span>
        <div class="fr">
          <img src="https://api.duishangbao.cn/upload/image/u_arrow.png">
        </div>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'accoutManage',
  // 数据存放区
  data () {
    return {
      title: '账号管理'
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted () {
  },
  // 方法
  methods: {
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'accoutmanage.styl';
</style>
