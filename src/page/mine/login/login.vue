<template>
  <div>
    <h1 style="display: none">{{ title }}</h1>
    <div>预留页面</div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  // 数据存放区
  data () {
    return {
      title: '登录'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'login.styl';
</style>
