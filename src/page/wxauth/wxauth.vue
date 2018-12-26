<template>
  <div>
    <h1 class=title style="display: none">{{ title }}</h1>
  </div>
</template>

<script>
import vFooter from '../../components/include/footer'
export default {
  name: 'nearByView',
  // 数据存放区
  data () {
    return {
      title: '登录成功'
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
    console.log('登录回执页面')
    this.$global.setCookie('unionId', this.$global.getUrlString('unionId'))
    this.$global.setCookie('openId', this.$global.getUrlString('openId'))
    this.$global.setCookie('sid', this.$global.getUrlString('sid'))
    this.$global.setCookie('uid', this.$global.getUrlString('uid'))
    this.$global.setCookie('session', this.$global.getUrlString('session'))
    let session = this.$global.deAesData(this, this.$global.getUrlString('session'))
    this.$global.setCookie('session-login', session)
    console.log(this.$global.getUrlString('session'))
    this.goToLogin()
  },
  // 方法
  methods: {
    /**
     * 微信授权回来后触发后台登录验证
     */
    goToLogin () {
      let sid = this.$global.getCookie('sid')
      let uid = this.$global.getCookie('uid')
      let message = 'app=1000&sid=' + sid + '&nonce=' + this.$global.getAesKey(8) + '&timespan=' + Date.parse(new Date()) + '&device=16&uid=' + uid
      let sign = this.$global.getSign(this, message, this.$global.getUrlString('session'))
      let obj = {
        app: 1000,
        appProject: 10003,
        clientId: this.$global.getAesKey(4),
        device: 16,
        nonce: this.$global.getAesKey(8),
        sid,
        uid,
        sig: sign,
        timespan: new Date().getTime()
      }
      let _this = this
      this.$global.myAjax2(this, 'post', 'bhs-client-online/login', obj, function (res) {
        if (res.data.code * 1 === 1) {
          _this.$global.showToast(_this, '登录成功')
          setTimeout(function () {
            _this.goPage()
          }, 3000)
        } else {
          console.log('成功')
        }
      }, function (reg) {
        console.log('失败')
      })
    },
    goPage () {
      window.history.go(-2)
    }
  }
}
</script>

<style>
  @import 'wxauth.styl';
</style>
