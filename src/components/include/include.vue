<template>
  <div>
    <!--loading弹窗-->
    <div class="base-box loading-box" v-if="this.$store.state.showLoading === 1">
      <div class="gray-back"></div>
      <div class="box-content">
        <div class="img">
          <img src="https://img.duishangbao.cn/upload/index/loading2.gif">
        </div>
        <div class="txt">加载中...</div>
      </div>
    </div>

    <!--toast提示弹窗-->
    <div class="show-toast" v-if="this.$store.state.showToast === 1">
      <span>{{this.$store.state.toastTxt}}</span>
    </div>

    <!--登录弹窗-->
    <div class="base-box login-box" v-if="this.$store.state.showLoginbox === 1">
      <div class="gray-back" @click="hideLoginBox(0)"></div>
      <div class="box-content">
        <div class="ts-txt">请登录</div>
        <div class="btn">
          <button class="opacity" @click="toLogin" ontouchstart="">微信登录</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'include',
  // 数据存放区
  data () {
    return {}
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {},
  // 方法
  methods: {
    // 关闭登录弹窗
    hideLoginBox (type) {
      this.$global.showLoginbox(this, type)
    },
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
    }
  }
}
</script>

<style>
#loginIframe {
  border: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100
}
</style>
