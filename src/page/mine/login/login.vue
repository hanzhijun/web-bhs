<template>
  <div>
    <div class="out-side-login">

      <div class="head-bar-fixed">
        <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
        <div class="list-title fs-32 fc-ff">{{ title }}</div>
      </div>

      <ul class="login-k">
        <li>
          <span class="icon sj"></span>
          <input class="login-enter fs-28 fc-1a" type="text" placeholder="手机号">
          <div class="border-line-heng-e6e6e6"></div>
        </li>
        <li>
          <span class="icon suo"></span>
          <input class="login-enter fs-28 fc-1a" type="text" placeholder="请输入密码">
          <div class="border-line-heng-e6e6e6"></div>
        </li>
      </ul>

      <div class="btn-login fs-32 fc-ff opacity" ontouchstart="">登录</div>
      <div class="btn-login-wx fs-32 fc-ff opacity" @click="toLogin" ontouchstart="">微信登录</div>
      <div class="ts-bar">
        <span class="l opacity" ontouchstart="">手机快速注册</span>
        <span class="r opacity" ontouchstart="">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  // 数据存放区
  data () {
    return {
      title: '贝划算登录'
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
    // 去登录
    toLogin: function () {
      let aesKey = this.$global.getAesKey(16)
      let encryptKey = this.$global.getEncryptKey(this, aesKey)
      this.$global.setCookie('aesKey', aesKey)
      this.$global.setCookie('encryptKey', encryptKey)
      let encryptData = this.$global.getEncryptData(this, '', aesKey)
      let data = {
        encryptKey,
        encryptData,
        state: this.$global.getAesKey(8) + new Date().getTime(),
        backUrl: this.$global.host + '/wxauth'
      }
      let _this = this
      this.$global.myAjaxLogin(this, 'post', 'ucenter/wx/wxAuthPage', data, function (res) {
        if (res.data.code * 1 === 1) {
          _this.hideLoginBox(0)
          let url = res.data.data
          _this.$global.setCookie('W_U_L_B_U', window.location.href)
          window.location.href = url
        } else {
          console.info(res)
        }
      }, function (reg) {
        console.info(reg)
      })
    },
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

<style lang="stylus" rel="stylesheet/stylus">
  @import 'login.styl';
</style>
